import {ArrowUpRight, Code2, RotateCcw} from 'lucide-react';
import {useMemo, useState} from 'react';
import type {Language, ProjectCategory, ProjectItem} from '../types/portfolio';
import {PORTFOLIO_DATA} from '../data/portfolioData';

interface ProjectsSectionProps {
  lang: Language;
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES: ProjectCategory[] = ['all', 'fullstack', 'frontend', 'backend'];

export function ProjectsSection({lang, onSelectProject}: ProjectsSectionProps) {
  const {projects, ui} = PORTFOLIO_DATA;
  const [category, setCategory] = useState<ProjectCategory>('all');
  const [selectedStack, setSelectedStack] = useState<string>('all');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const allStacks = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.techStack.forEach((tech) => set.add(tech)));
    return Array.from(set);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = category === 'all' || project.category === category;
      const matchesStack =
        selectedStack === 'all' || project.techStack.includes(selectedStack);
      return matchesCategory && matchesStack;
    });
  }, [projects, category, selectedStack]);

  const handleReset = () => {
    setCategory('all');
    setSelectedStack('all');
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl space-y-3 mb-8 md:mb-10">
          <p className="text-xs font-mono tracking-wide text-indigo-600 dark:text-indigo-400">
            {ui.sections.projectsEyebrow[lang]}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight font-normal text-slate-900 dark:text-slate-100 [text-wrap:balance]">
            {ui.sections.projectsTitle[lang]}
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {ui.sections.projectsSubtitle[lang]}
          </p>
        </div>

        {/* Category segmented control + Stack filter */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-10">
          <div
            role="tablist"
            aria-label="Project categories"
            className="inline-flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 self-start overflow-x-auto max-w-full no-scrollbar"
          >
            {CATEGORIES.map((cat) => {
              const isActive = category === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setCategory(cat)}
                  className={`min-h-[38px] px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-slate-100'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                  }`}
                >
                  {ui.filters[cat][lang]}
                </button>
              );
            })}
          </div>

          <div
            role="group"
            aria-label="Filter by technology"
            className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 no-scrollbar"
          >
            <button
              type="button"
              onClick={() => setSelectedStack('all')}
              className={`min-h-[36px] px-3 py-1.5 text-xs font-mono rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedStack === 'all'
                  ? 'border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900'
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 bg-white dark:bg-slate-900/60'
              }`}
            >
              {ui.filters.allStacks[lang]}
            </button>
            {allStacks.map((tech) => {
              const isActive = selectedStack === tech;
              return (
                <button
                  key={tech}
                  type="button"
                  onClick={() => setSelectedStack(isActive ? 'all' : tech)}
                  className={`min-h-[36px] px-3 py-1.5 text-xs font-mono rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'border-indigo-600 bg-indigo-600 text-white dark:border-indigo-400 dark:bg-indigo-400 dark:text-slate-950'
                      : 'border-slate-200 dark:border-slate-800 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 bg-white dark:bg-slate-900/60'
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid or Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 px-6 text-center rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/50">
            <h3 className="font-serif text-xl text-slate-900 dark:text-slate-100">
              {ui.filters.emptyTitle[lang]}
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              {ui.filters.emptyDesc[lang]}
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-6 inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 text-xs font-medium rounded-xl bg-slate-900 text-white hover:bg-indigo-600 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-400 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{ui.filters.resetFilters[lang]}</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => {
              const isFeaturedCard =
                index === 0 &&
                filteredProjects.length % 2 === 1 &&
                filteredProjects.length >= 3 &&
                category === 'all' &&
                selectedStack === 'all';
              const hasFailed = Boolean(failedImages[project.id]);

              return (
                <article
                  key={project.id}
                  className={`group rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-4 sm:p-5 transition-colors duration-150 hover:border-indigo-300 dark:hover:border-indigo-700/80 ${
                    isFeaturedCard
                      ? 'md:col-span-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center'
                      : 'flex flex-col justify-between gap-5'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    aria-label={`${project.title} — ${ui.modal.readCaseStudy[lang]}`}
                    className={`block w-full text-left overflow-hidden rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ${
                      isFeaturedCard ? 'lg:col-span-6 h-full' : ''
                    }`}
                  >
                    {!hasFailed ? (
                      <img
                        src={project.imageUrl}
                        alt={project.imageAlt[lang]}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setFailedImages((prev) => ({...prev, [project.id]: true}))
                        }
                        className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    ) : (
                      <div className="w-full aspect-[4/3] flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">
                        <Code2 className="w-8 h-8 text-slate-400 dark:text-slate-600 mb-2" />
                        <span className="font-serif text-base text-slate-700 dark:text-slate-300">
                          {project.title}
                        </span>
                      </div>
                    )}
                  </button>

                  <div
                    className={`flex flex-col justify-between gap-4 ${
                      isFeaturedCard ? 'lg:col-span-6 lg:py-2' : 'flex-1'
                    }`}
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span>{project.categoryLabel[lang]}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">{project.year}</span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-slate-100">
                        <button
                          type="button"
                          onClick={() => onSelectProject(project)}
                          className="text-left hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-sm"
                        >
                          {project.title}
                        </button>
                      </h3>

                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {project.subtitle[lang]}
                      </p>

                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {project.summary[lang]}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {project.techStack.join(' · ')}
                      </p>

                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1 min-h-[40px] text-xs font-medium text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>{ui.modal.readCaseStudy[lang]}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

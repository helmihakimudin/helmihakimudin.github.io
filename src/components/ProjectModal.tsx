import {Code2, ExternalLink, Github, X} from 'lucide-react';
import {useEffect, useState} from 'react';
import type {Language, ProjectItem} from '../types/portfolio';
import {PORTFOLIO_DATA} from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  lang: Language;
  onClose: () => void;
}

export function ProjectModal({project, lang, onClose}: ProjectModalProps) {
  const {ui} = PORTFOLIO_DATA;
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6 bg-slate-950/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full md:max-w-3xl max-h-[90vh] md:max-h-[88vh] flex flex-col bg-white dark:bg-[#0F172A] border-t md:border border-slate-200 dark:border-slate-800 rounded-t-3xl md:rounded-2xl overflow-hidden shadow-2xl">
        {/* Mobile bottom-sheet drag handle */}
        <div className="md:hidden pt-3 pb-1 flex justify-center shrink-0">
          <div className="w-10 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>

        {/* Sticky modal header */}
        <div className="flex items-start justify-between gap-4 px-5 sm:px-7 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="space-y-1 min-w-0">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span>{project.categoryLabel[lang]}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{project.year}</span>
            </div>
            <h2
              id="case-study-title"
              className="font-serif text-2xl sm:text-3xl tracking-tight text-slate-900 dark:text-slate-100 truncate"
            >
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={ui.modal.close[lang]}
            className="min-h-[44px] min-w-[44px] -mr-2 flex items-center justify-center rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto px-5 sm:px-7 py-6 space-y-8">
          <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
            {!imgError ? (
              <img
                src={project.imageUrl}
                alt={project.imageAlt[lang]}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full aspect-[4/3] max-h-[340px] object-cover"
              />
            ) : (
              <div className="w-full aspect-[4/3] max-h-[260px] flex flex-col items-center justify-center p-6 bg-slate-100 dark:bg-slate-900">
                <Code2 className="w-8 h-8 text-slate-400 mb-2" />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {project.title}
                </span>
              </div>
            )}
          </div>

          {/* Outcomes strip */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono tracking-wide text-slate-500 dark:text-slate-400">
              {ui.modal.outcomesTitle[lang]}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              {project.caseStudy.outcomes.map((item) => (
                <div key={item.metric} className="space-y-1">
                  <div className="font-mono tabular-nums text-2xl font-medium text-indigo-600 dark:text-indigo-400">
                    {item.metric}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {item.detail[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {ui.modal.problemTitle[lang]}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.caseStudy.problem[lang]}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {ui.modal.architectureTitle[lang]}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.caseStudy.architecture[lang]}
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {ui.modal.highlightsTitle[lang]}
            </h3>
            <ul className="space-y-2.5">
              {project.caseStudy.highlights[lang].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {ui.modal.stackTitle[lang]}
            </h3>
            <p className="text-sm font-mono text-slate-900 dark:text-slate-200">
              {project.techStack.join(' · ')}
            </p>
          </div>
        </div>

        {/* Fixed bottom action footer */}
        <div className="px-5 sm:px-7 py-4 pb-safe border-t border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 shrink-0">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-xs font-medium rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap"
          >
            <Github className="w-4 h-4" />
            <span>{ui.modal.sourceCode[lang]}</span>
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-xs font-medium rounded-xl bg-slate-900 text-white hover:bg-indigo-600 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-400 transition-colors whitespace-nowrap"
          >
            <span>{ui.modal.liveDemo[lang]}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

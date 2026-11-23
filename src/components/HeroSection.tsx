import {ArrowDownRight, ArrowRight, Moon, Sun} from 'lucide-react';
import {useState} from 'react';
import type {Language, ProjectItem, SectionId, Theme} from '../types/portfolio';
import {PORTFOLIO_DATA} from '../data/portfolioData';
import {GameWorldSection} from './GameWorldSection';
import {SkillTreeProgression} from './SkillTreeProgression';

interface HeroSectionProps {
  lang: Language;
  theme: Theme;
  onChangeLang: (lang: Language) => void;
  onToggleTheme: () => void;
  onNavigate: (id: SectionId) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export function HeroSection({
  lang,
  theme,
  onChangeLang,
  onToggleTheme,
  onNavigate,
  onSelectProject,
}: HeroSectionProps) {
  const {profile, metrics, ui} = PORTFOLIO_DATA;
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="pt-6 pb-12 md:pt-10 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop preference utility row & unboxed location context */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-8 border-b border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <span className="font-medium text-slate-900 dark:text-slate-200">
              {profile.role[lang]}
            </span>
            <span aria-hidden="true">·</span>
            <span>{profile.location[lang]}</span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div
              role="group"
              aria-label="Language switcher"
              className="flex items-center p-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <button
                type="button"
                onClick={() => onChangeLang('id')}
                className={`px-2.5 py-1 text-xs font-mono font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  lang === 'id'
                    ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-slate-100'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => onChangeLang('en')}
                className={`px-2.5 py-1 text-xs font-mono font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  lang === 'en'
                    ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-slate-100'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'Terang' : 'Light'}</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'Gelap' : 'Dark'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Editorial Intro Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-8 md:mb-10">
          <div className="lg:col-span-8 flex items-start gap-4 sm:gap-5">
            <div className="hidden sm:block w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shrink-0 mt-1">
              {!imgError ? (
                <img
                  src={profile.heroImage}
                  alt={profile.heroImageAlt[lang]}
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-serif text-lg text-slate-600 dark:text-slate-400">
                  {profile.name.slice(0, 2)}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <p className="text-xs font-mono tracking-wide text-indigo-600 dark:text-indigo-400">
                {ui.game.eyebrow[lang]}
              </p>
              <h1 className="font-serif text-[clamp(2rem,3.8vw,3.15rem)] leading-[1.1] tracking-tight font-normal text-slate-900 dark:text-slate-100 [text-wrap:balance]">
                {profile.headline[lang]}
              </h1>
              <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                {profile.bio[lang]}
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-wrap lg:justify-end items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-medium rounded-xl bg-slate-900 text-white hover:bg-indigo-600 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-400 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
            >
              <span>{ui.heroPrimaryCta[lang]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('experience')}
              className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer rounded-xl"
            >
              <span>{ui.heroSecondaryCta[lang]}</span>
              <ArrowDownRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Focal Anchor: Interactive 2D Side-Scrolling Portfolio Quest */}
        <GameWorldSection
          lang={lang}
          theme={theme}
          onSelectProject={onSelectProject}
          onNavigateSection={onNavigate}
        />

        {/* Leveling Up: Engineering Skill-Tree Progression Bar */}
        <SkillTreeProgression lang={lang} onNavigate={onNavigate} />

        {/* Full-width 4-column Engineering Proof Strip */}
        <div className="mt-10 md:mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((item) => (
            <div key={item.label.en} className="space-y-1">
              <div className="font-mono tabular-nums text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 dark:text-slate-100">
                {item.value}
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {item.label[lang]}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {item.context[lang]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

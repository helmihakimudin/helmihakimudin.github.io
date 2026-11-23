import type {Language, SectionId} from '../types/portfolio';
import {PORTFOLIO_DATA} from '../data/portfolioData';

interface DesktopHeaderProps {
  lang: Language;
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

const NAV_ORDER: SectionId[] = ['home', 'projects', 'experience', 'connect'];

export function DesktopHeader({lang, activeSection, onNavigate}: DesktopHeaderProps) {
  const {profile, ui} = PORTFOLIO_DATA;

  return (
    <header className="hidden md:block sticky top-0 z-40 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/90 dark:bg-[#0B1120]/90 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element brand wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="font-serif text-lg font-medium tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-sm"
        >
          {profile.name}
        </a>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav aria-label="Primary navigation" className="flex items-center gap-7">
          {NAV_ORDER.map((id) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 rounded-sm ${
                  isActive
                    ? 'text-slate-900 dark:text-slate-100'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                }`}
              >
                {ui.nav[id][lang]}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-px bg-indigo-600 dark:bg-indigo-400 transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action CTA */}
        <button
          type="button"
          onClick={() => onNavigate('connect')}
          className="px-4 py-2 text-xs font-medium tracking-wide rounded-lg bg-slate-900 text-white hover:bg-indigo-600 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-400 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0B1120]"
        >
          {ui.ctaHeader[lang]}
        </button>
      </div>
    </header>
  );
}

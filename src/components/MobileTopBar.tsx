import {Moon, Sun} from 'lucide-react';
import type {Language, SectionId, Theme} from '../types/portfolio';
import {PORTFOLIO_DATA} from '../data/portfolioData';

interface MobileTopBarProps {
  lang: Language;
  theme: Theme;
  onChangeLang: (lang: Language) => void;
  onToggleTheme: () => void;
  onNavigate: (id: SectionId) => void;
}

export function MobileTopBar({
  lang,
  theme,
  onChangeLang,
  onToggleTheme,
  onNavigate,
}: MobileTopBarProps) {
  const {profile} = PORTFOLIO_DATA;

  return (
    <header className="md:hidden sticky top-0 z-30 h-12 px-4 flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/90 dark:bg-[#0B1120]/90 backdrop-blur-md">
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          onNavigate('home');
        }}
        className="font-serif text-base font-medium tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap shrink-0"
      >
        {profile.name}
      </a>

      <div className="flex items-center gap-1.5">
        <div
          role="group"
          aria-label="Language switch"
          className="flex items-center p-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
        >
          <button
            type="button"
            onClick={() => onChangeLang('id')}
            className={`min-h-[34px] min-w-[36px] px-2 text-[11px] font-mono font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              lang === 'id'
                ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-slate-100'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            ID
          </button>
          <button
            type="button"
            onClick={() => onChangeLang('en')}
            className={`min-h-[34px] min-w-[36px] px-2 text-[11px] font-mono font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              lang === 'en'
                ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-slate-100'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            EN
          </button>
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 active:scale-95 transition-transform"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
}

import {ArrowUp} from 'lucide-react';
import type {Language} from '../types/portfolio';
import {PORTFOLIO_DATA} from '../data/portfolioData';

interface FooterProps {
  lang: Language;
}

export function Footer({lang}: FooterProps) {
  const {profile, ui} = PORTFOLIO_DATA;
  const year = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 pt-8 pb-24 md:pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="space-y-1">
          <p className="font-medium text-slate-800 dark:text-slate-200">
            © <span className="font-mono tabular-nums">{year}</span> {profile.name} ·{' '}
            {ui.footer.rights[lang]}
          </p>
          <p>{ui.footer.builtWith[lang]}</p>
        </div>

        <button
          type="button"
          onClick={handleBackToTop}
          className="inline-flex items-center gap-1.5 min-h-[44px] px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors cursor-pointer"
        >
          <span>{ui.footer.backToTop[lang]}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}

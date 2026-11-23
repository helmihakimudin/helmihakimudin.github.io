import {AtSign, Briefcase, FolderKanban, User} from 'lucide-react';
import type {Language, SectionId} from '../types/portfolio';
import {PORTFOLIO_DATA} from '../data/portfolioData';

interface MobileBottomNavProps {
  lang: Language;
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

const TAB_ITEMS: {id: SectionId; icon: typeof User}[] = [
  {id: 'home', icon: User},
  {id: 'projects', icon: FolderKanban},
  {id: 'experience', icon: Briefcase},
  {id: 'connect', icon: AtSign},
];

export function MobileBottomNav({lang, activeSection, onNavigate}: MobileBottomNavProps) {
  const {ui} = PORTFOLIO_DATA;

  return (
    <nav
      aria-label="Mobile app navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 h-16 pb-safe border-t border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-lg"
    >
      <div className="grid grid-cols-4 h-full max-w-md mx-auto">
        {TAB_ITEMS.map(({id, icon: Icon}) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onNavigate(id)}
              aria-current={isActive ? 'page' : undefined}
              className={`relative min-h-[44px] flex flex-col items-center justify-center gap-1 transition-colors duration-150 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-600 ${
                isActive
                  ? 'text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute top-0 w-7 h-0.5 rounded-b-full bg-indigo-600 dark:bg-indigo-400 transition-opacity duration-150 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2.25 : 1.75} />
              <span className="text-[11px] font-medium tracking-tight leading-none whitespace-nowrap">
                {ui.mobileNav[id][lang]}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

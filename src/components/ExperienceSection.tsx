import {useMemo, useState} from 'react';
import type {Language} from '../types/portfolio';
import {PORTFOLIO_DATA} from '../data/portfolioData';

interface ExperienceSectionProps {
  lang: Language;
}

type TimelineFilter = 'all' | 'work' | 'education' | 'certification';

export function ExperienceSection({lang}: ExperienceSectionProps) {
  const {timeline, capabilities, ui} = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<TimelineFilter>('all');

  const visibleTimeline = useMemo(() => {
    if (filter === 'all') return timeline;
    return timeline.filter((entry) => entry.kind === filter);
  }, [timeline, filter]);

  return (
    <section
      id="experience"
      className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column: Work Experience, Education & Certifications */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-mono tracking-wide text-indigo-600 dark:text-indigo-400">
                  {ui.sections.experienceEyebrow[lang]}
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl tracking-tight font-normal text-slate-900 dark:text-slate-100">
                  {ui.sections.experienceTitle[lang]}
                </h2>
              </div>

              <div
                role="tablist"
                aria-label="Filter career timeline"
                className="inline-flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 self-start overflow-x-auto max-w-full no-scrollbar"
              >
                {(['all', 'work', 'education', 'certification'] as const).map((tab) => {
                  const isActive = filter === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setFilter(tab)}
                      className={`min-h-[36px] px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-slate-100'
                          : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                      }`}
                    >
                      {ui.timelineTabs[tab][lang]}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="divide-y divide-slate-200/80 dark:divide-slate-800/80 border-t border-b border-slate-200/80 dark:border-slate-800/80">
              {visibleTimeline.map((entry) => (
                <div key={entry.id} className="py-6 sm:py-7 space-y-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {entry.role[lang]}
                    </h3>
                    <span className="font-mono tabular-nums text-xs text-slate-500 dark:text-slate-400">
                      {entry.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      {entry.organization}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{entry.location}</span>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {entry.description[lang]}
                  </p>

                  <ul className="space-y-1.5 pt-1">
                    {entry.impacts[lang].map((impact) => (
                      <li
                        key={impact}
                        className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 w-1 h-1 rounded-full bg-indigo-500/70 dark:bg-indigo-400/70 shrink-0"
                        />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Full-Stack & ERP Capabilities Matrix */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2 lg:pt-6">
              <h3 className="font-serif text-2xl sm:text-3xl tracking-tight font-normal text-slate-900 dark:text-slate-100">
                {ui.sections.capabilitiesTitle[lang]}
              </h3>
            </div>

            <div className="space-y-6">
              {capabilities.map((group) => (
                <div
                  key={group.id}
                  className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-5 sm:p-6 space-y-4"
                >
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    {group.title[lang]}
                  </h4>
                  <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
                    {group.items.map((item) => (
                      <div key={item.name} className="py-3 first:pt-0 last:pb-0 space-y-1">
                        <div className="font-mono text-xs sm:text-sm font-medium text-indigo-700 dark:text-indigo-300">
                          {item.name}
                        </div>
                        <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                          {item.detail[lang]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

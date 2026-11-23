import {ArrowRight, Cloud, Layout, Server, Terminal, TrendingUp} from 'lucide-react';
import {useMemo, useState} from 'react';
import type {Language, SectionId, SkillTreeNode} from '../types/portfolio';
import {PORTFOLIO_DATA} from '../data/portfolioData';
import {soundFx} from '../utils/soundFx';

interface SkillTreeProgressionProps {
  lang: Language;
  onNavigate: (id: SectionId) => void;
}

const NODE_ICONS: Record<SkillTreeNode['id'], typeof Terminal> = {
  foundations: Terminal,
  frontend: Layout,
  backend: Server,
  cloud: Cloud,
};

export function SkillTreeProgression({lang, onNavigate}: SkillTreeProgressionProps) {
  const {skillTree, ui} = PORTFOLIO_DATA;
  const {eras, nodes} = skillTree;

  const [selectedEraId, setSelectedEraId] = useState<string>(
    eras[eras.length - 1]?.id ?? '2024',
  );
  const [selectedNodeId, setSelectedNodeId] = useState<SkillTreeNode['id']>('frontend');

  const activeEraIndex = useMemo(
    () => Math.max(0, eras.findIndex((e) => e.id === selectedEraId)),
    [eras, selectedEraId],
  );
  const activeEra = eras[activeEraIndex] ?? eras[eras.length - 1];
  const activeNode = useMemo(
    () => nodes.find((n) => n.id === selectedNodeId) ?? nodes[0],
    [nodes, selectedNodeId],
  );

  const eraXpRatio = Math.min(1, Math.max(0.05, activeEra.xpCurrent / activeEra.xpNext));
  const eraPercent = Math.round(eraXpRatio * 100);
  const treeTrackRatio = (activeEraIndex + 1) / eras.length;

  const activeNodeStats = activeNode.statsByEra[activeEra.id] ?? {
    tierLevel: 1,
    masteryPercent: 50,
    unlockedSkills: [],
    milestoneNote: {en: '', id: ''},
  };

  const handleSelectEra = (eraId: string) => {
    setSelectedEraId(eraId);
    soundFx.playCheckpoint();
  };

  const handleCycleNextEra = () => {
    const nextIdx = (activeEraIndex + 1) % eras.length;
    setSelectedEraId(eras[nextIdx].id);
    if (nextIdx === eras.length - 1) {
      soundFx.playStageClear();
    } else {
      soundFx.playCheckpoint();
    }
  };

  return (
    <div
      aria-label={ui.skillTree.title[lang]}
      className="mt-8 md:mt-10 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 overflow-hidden"
    >
      {/* Top XP & Level Header */}
      <div className="p-5 sm:p-6 border-b border-slate-200/80 dark:border-slate-800/80 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-indigo-600 dark:text-indigo-400">
              {ui.skillTree.eyebrow[lang]}
            </span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="tabular-nums font-semibold text-slate-900 dark:text-slate-100">
              {ui.skillTree.levelPrefix[lang]} {String(activeEra.level).padStart(2, '0')}
            </span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-slate-700 dark:text-slate-300">
              {activeEra.rankTitle[lang]}
            </span>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-slate-100">
            {ui.skillTree.title[lang]}
          </h2>

          <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {activeEra.summary[lang]}
          </p>
        </div>

        {/* Master Career XP Bar */}
        <div className="w-full lg:w-72 shrink-0 space-y-2">
          <div className="flex items-baseline justify-between font-mono tabular-nums text-xs">
            <span className="text-slate-500 dark:text-slate-400">
              {activeEra.xpCurrent.toLocaleString()} / {activeEra.xpNext.toLocaleString()}{' '}
              {ui.skillTree.xpUnit[lang]}
            </span>
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              {eraPercent}%
            </span>
          </div>

          <div
            role="progressbar"
            aria-valuenow={eraPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Career XP Progression"
            className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden"
          >
            <div
              style={{transform: `scaleX(${eraXpRatio})`}}
              className="h-full w-full origin-left rounded-full bg-indigo-600 dark:bg-indigo-400 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </div>
        </div>
      </div>

      {/* Career Era Progression Scrubber */}
      <div className="px-5 sm:px-6 py-3 border-b border-slate-200/80 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-950/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar max-w-full">
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap shrink-0">
            {ui.skillTree.eraLabel[lang]}
          </span>
          <div
            role="tablist"
            aria-label="Career progression era"
            className="inline-flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
          >
            {eras.map((era) => {
              const isSelected = era.id === activeEra.id;
              return (
                <button
                  key={era.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleSelectEra(era.id)}
                  className={`min-h-[34px] px-2.5 py-1 text-xs font-mono tabular-nums rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-slate-100'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                  }`}
                >
                  {era.year}
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={handleCycleNextEra}
          className="inline-flex items-center gap-1.5 min-h-[36px] px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <TrendingUp className="w-3.5 h-3.5" />
          <span>{ui.skillTree.levelUpNext[lang]}</span>
        </button>
      </div>

      {/* Connected 4-Branch Skill-Tree Progression Grid */}
      <div className="p-5 sm:p-6">
        <div className="relative">
          {/* Desktop horizontal skill-tree connector line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200 dark:bg-slate-800"
          >
            <div
              style={{transform: `scaleX(${treeTrackRatio})`}}
              className="h-full w-full origin-left bg-indigo-600 dark:bg-indigo-400 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {nodes.map((node) => {
              const Icon = NODE_ICONS[node.id];
              const stats = node.statsByEra[activeEra.id] ?? {
                tierLevel: 1,
                masteryPercent: 50,
                unlockedSkills: [],
                milestoneNote: {en: '', id: ''},
              };
              const isSelected = node.id === activeNode.id;
              const ratio = Math.min(1, Math.max(0.05, stats.masteryPercent / 100));

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedNodeId(node.id)}
                  aria-pressed={isSelected}
                  className={`relative text-left p-4 rounded-xl border transition-colors duration-150 cursor-pointer flex flex-col justify-between gap-4 min-h-[144px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ${
                    isSelected
                      ? 'border-indigo-500/80 dark:border-indigo-400/80 bg-indigo-50/40 dark:bg-indigo-950/25'
                      : 'border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-colors ${
                        isSelected
                          ? 'border-indigo-600 bg-indigo-600 text-white dark:border-indigo-400 dark:bg-indigo-400 dark:text-slate-950'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <span className="font-mono tabular-nums text-xs text-slate-500 dark:text-slate-400">
                      {ui.skillTree.levelPrefix[lang]} {stats.tierLevel} ·{' '}
                      <span className="font-semibold text-slate-900 dark:text-slate-100">
                        {stats.masteryPercent}%
                      </span>
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {node.code}. {node.title[lang]}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {node.subtitle[lang]}
                    </p>
                  </div>

                  {/* Individual Competency Mastery Bar */}
                  <div className="h-1.5 w-full rounded-full bg-slate-200/80 dark:bg-slate-800 overflow-hidden">
                    <div
                      style={{transform: `scaleX(${ratio})`}}
                      className={`h-full w-full origin-left rounded-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isSelected
                          ? 'bg-indigo-600 dark:bg-indigo-400'
                          : 'bg-teal-600/80 dark:bg-teal-400/80'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Branch Details Strip */}
        <div className="mt-5 pt-5 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span>{ui.skillTree.unlockedLabel[lang]}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-900 dark:text-slate-200 font-medium">
                {activeNodeStats.unlockedSkills.join(' · ')}
              </span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {activeNodeStats.milestoneNote[lang]}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate(activeNode.targetSection)}
            className="inline-flex items-center gap-1.5 min-h-[40px] px-3 py-2 text-xs font-medium text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer self-start md:self-auto"
          >
            <span>{ui.skillTree.inspectRelated[lang]}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

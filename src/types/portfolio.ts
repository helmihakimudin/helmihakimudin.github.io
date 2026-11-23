export type Language = 'en' | 'id';
export type Theme = 'light' | 'dark';
export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'backend';
export type SectionId = 'home' | 'projects' | 'experience' | 'connect';

export interface LocalizedText {
  en: string;
  id: string;
}

export interface EngineeringMetric {
  value: string;
  label: LocalizedText;
  context: LocalizedText;
}

export interface ProjectCaseStudy {
  problem: LocalizedText;
  architecture: LocalizedText;
  highlights: {
    en: string[];
    id: string[];
  };
  outcomes: {
    metric: string;
    detail: LocalizedText;
  }[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  featured?: boolean;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: LocalizedText;
  year: string;
  title: string;
  subtitle: LocalizedText;
  summary: LocalizedText;
  techStack: string[];
  imageUrl: string;
  imageAlt: LocalizedText;
  repoUrl: string;
  demoUrl: string;
  caseStudy: ProjectCaseStudy;
}

export interface TimelineEntry {
  id: string;
  kind: 'work' | 'education' | 'certification';
  period: string;
  role: LocalizedText;
  organization: string;
  location: string;
  description: LocalizedText;
  impacts: {
    en: string[];
    id: string[];
  };
}

export interface CapabilityGroup {
  id: string;
  title: LocalizedText;
  items: {
    name: string;
    detail: LocalizedText;
  }[];
}

export interface SocialLink {
  id: 'github' | 'linkedin' | 'website' | 'email';
  label: string;
  handle: string;
  url: string;
  description: LocalizedText;
}

export interface SkillTreeEra {
  id: string;
  year: string;
  level: number;
  rankTitle: LocalizedText;
  xpCurrent: number;
  xpNext: number;
  summary: LocalizedText;
}

export interface SkillTreeNode {
  id: 'foundations' | 'frontend' | 'backend' | 'cloud';
  code: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  targetSection: SectionId;
  statsByEra: Record<
    string,
    {
      tierLevel: number;
      masteryPercent: number;
      unlockedSkills: string[];
      milestoneNote: LocalizedText;
    }
  >;
}

export interface PortfolioConfig {
  profile: {
    name: string;
    role: LocalizedText;
    location: LocalizedText;
    headline: LocalizedText;
    bio: LocalizedText;
    secondaryBio: LocalizedText;
    email: string;
    heroImage: string;
    heroImageAlt: LocalizedText;
    heroCaption: LocalizedText;
    resumeUrl: string;
  };
  metrics: EngineeringMetric[];
  skillTree: {
    eras: SkillTreeEra[];
    nodes: SkillTreeNode[];
  };
  projects: ProjectItem[];
  timeline: TimelineEntry[];
  capabilities: CapabilityGroup[];
  socials: SocialLink[];
  ui: {
    nav: Record<SectionId, LocalizedText>;
    mobileNav: Record<SectionId, LocalizedText>;
    ctaHeader: LocalizedText;
    heroPrimaryCta: LocalizedText;
    heroSecondaryCta: LocalizedText;
    sections: {
      projectsEyebrow: LocalizedText;
      projectsTitle: LocalizedText;
      projectsSubtitle: LocalizedText;
      experienceEyebrow: LocalizedText;
      experienceTitle: LocalizedText;
      capabilitiesTitle: LocalizedText;
      connectEyebrow: LocalizedText;
      connectTitle: LocalizedText;
      connectSubtitle: LocalizedText;
    };
    filters: {
      all: LocalizedText;
      fullstack: LocalizedText;
      frontend: LocalizedText;
      backend: LocalizedText;
      allStacks: LocalizedText;
      resetFilters: LocalizedText;
      emptyTitle: LocalizedText;
      emptyDesc: LocalizedText;
    };
    modal: {
      problemTitle: LocalizedText;
      architectureTitle: LocalizedText;
      highlightsTitle: LocalizedText;
      outcomesTitle: LocalizedText;
      stackTitle: LocalizedText;
      liveDemo: LocalizedText;
      sourceCode: LocalizedText;
      close: LocalizedText;
      readCaseStudy: LocalizedText;
    };
    timelineTabs: {
      all: LocalizedText;
      work: LocalizedText;
      education: LocalizedText;
      certification: LocalizedText;
    };
    connect: {
      copyEmail: LocalizedText;
      copiedToast: LocalizedText;
      directMessage: LocalizedText;
    };
    footer: {
      rights: LocalizedText;
      builtWith: LocalizedText;
      backToTop: LocalizedText;
    };
    game: {
      eyebrow: LocalizedText;
      title: LocalizedText;
      subtitle: LocalizedText;
      startPrompt: LocalizedText;
      startAction: LocalizedText;
      controlsHint: LocalizedText;
      stageLabel: LocalizedText;
      coinsLabel: LocalizedText;
      blocksLabel: LocalizedText;
      soundOn: LocalizedText;
      soundOff: LocalizedText;
      reset: LocalizedText;
      warpLabel: LocalizedText;
      stages: {
        id: SectionId;
        code: string;
        label: LocalizedText;
      }[];
      blockHitPrefix: LocalizedText;
      inspectAction: LocalizedText;
      checkpointPrefix: LocalizedText;
      stageClearTitle: LocalizedText;
      stageClearDesc: LocalizedText;
      playAgain: LocalizedText;
      jumpToConnect: LocalizedText;
    };
    skillTree: {
      eyebrow: LocalizedText;
      title: LocalizedText;
      eraLabel: LocalizedText;
      xpUnit: LocalizedText;
      levelPrefix: LocalizedText;
      unlockedLabel: LocalizedText;
      inspectRelated: LocalizedText;
      levelUpNext: LocalizedText;
    };
  };
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useCallback, useMemo, useState} from 'react';
import {ConnectSection} from './components/ConnectSection';
import {DesktopHeader} from './components/DesktopHeader';
import {ExperienceSection} from './components/ExperienceSection';
import {Footer} from './components/Footer';
import {HeroSection} from './components/HeroSection';
import {MobileBottomNav} from './components/MobileBottomNav';
import {MobileTopBar} from './components/MobileTopBar';
import {ProjectModal} from './components/ProjectModal';
import {ProjectsSection} from './components/ProjectsSection';
import {Toast} from './components/Toast';
import {PORTFOLIO_DATA} from './data/portfolioData';
import {
  useLanguagePreference,
  useScrollSpy,
  useThemePreference,
} from './hooks/usePreferences';
import type {ProjectItem, SectionId} from './types/portfolio';

export default function App() {
  const {theme, toggleTheme} = useThemePreference();
  const {lang, setLang} = useLanguagePreference();

  const sections = useMemo<SectionId[]>(
    () => ['home', 'projects', 'experience', 'connect'],
    [],
  );
  const {activeSection, scrollToSection} = useScrollSpy(sections);

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [toastVisible, setToastVisible] = useState(false);

  const handleEmailCopied = useCallback(() => {
    setToastVisible(true);
    window.setTimeout(() => {
      setToastVisible(false);
    }, 2400);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-[#0B1120] dark:text-slate-100 transition-colors duration-200">
      <DesktopHeader
        lang={lang}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <MobileTopBar
        lang={lang}
        theme={theme}
        onChangeLang={setLang}
        onToggleTheme={toggleTheme}
        onNavigate={scrollToSection}
      />

      <main className="flex-1">
        <HeroSection
          lang={lang}
          theme={theme}
          onChangeLang={setLang}
          onToggleTheme={toggleTheme}
          onNavigate={scrollToSection}
          onSelectProject={setSelectedProject}
        />

        <ProjectsSection
          lang={lang}
          onSelectProject={setSelectedProject}
        />

        <ExperienceSection lang={lang} />

        <ConnectSection
          lang={lang}
          onEmailCopied={handleEmailCopied}
        />
      </main>

      <Footer lang={lang} />

      <MobileBottomNav
        lang={lang}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <ProjectModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />

      <Toast
        visible={toastVisible}
        message={PORTFOLIO_DATA.ui.connect.copiedToast[lang]}
      />
    </div>
  );
}

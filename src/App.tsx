import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useLanguageProvider, LanguageContext } from '@/hooks/useLanguage';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { FloatingDock } from '@/components/ui/FloatingDock';
import type { SectionId } from '@/types';

const SECTION_IDS: readonly SectionId[] = [
  'hero',
  'about',
  'projects',
  'skills',
  'experience',
  'contact',
] as const;

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const langContext = useLanguageProvider();
  const activeSection = useActiveSection(SECTION_IDS, 'hero');

  return (
    <LanguageContext.Provider value={langContext}>
      <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 dark:bg-[#0a0a0a] dark:text-neutral-100 transition-colors duration-200 relative selection:bg-neutral-200 dark:selection:bg-neutral-800">
        {/* Sticky Header with Backdrop Blur and Controls */}
        <Navbar
          activeSection={activeSection}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {/* Floating Right Social Dock matching reference screenshot */}
        <FloatingDock />

        {/* Main Single Page Application Sections */}
        <main id="main-content" className="flex-1">
          {/* Split Statement Hero with About Me Narrative */}
          <Hero />

          {/* Featured Projects */}
          <Projects />

          {/* Skills & Technologies */}
          <Skills />

          {/* Experience & Education */}
          <Experience />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Minimalist Footer */}
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;

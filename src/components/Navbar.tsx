import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { NAV_ROUTES, PERSONAL_INFO } from '@/data/portfolioData';
import { useScrollTo } from '@/hooks/useScrollTo';
import { useLanguage } from '@/hooks/useLanguage';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import type { SectionId, ThemeMode } from '@/types';
import { cn } from '@/utils/cn';

export interface NavbarProps {
  activeSection: SectionId;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  theme,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollTo } = useScrollTo();
  const { language, isVi } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
    setMobileMenuOpen(false);
  };

  const handleDownloadCV = () => {
    window.open(PERSONAL_INFO.cvUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        isScrolled
          ? 'py-3 bg-neutral-900/90 dark:bg-black/90 text-white backdrop-blur-md border-b border-neutral-800 shadow-sm'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Subtle Logo / Title */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group text-neutral-900 dark:text-neutral-100 focus:outline-none"
            aria-label="Back to top"
          >
            <span className="font-bold text-sm tracking-widest uppercase font-mono">
              {PERSONAL_INFO.fullName}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-wider"
            aria-label="Main Navigation"
          >
            {NAV_ROUTES.map((route) => {
              const isActive = activeSection === route.id;
              return (
                <a
                  key={route.id}
                  href={route.href}
                  onClick={(e) => handleNavClick(e, route.href)}
                  className={cn(
                    'transition-colors py-1 relative',
                    isActive
                      ? 'text-neutral-900 dark:text-white font-semibold'
                      : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                  )}
                >
                  {route.label[language]}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-neutral-900 dark:bg-white"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Top Right Controls Matching User Screenshot */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* CV Download Button */}
            <button
              type="button"
              onClick={handleDownloadCV}
              aria-label={isVi ? 'Tải CV cá nhân' : 'Download CV'}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 stroke-[2]" />
              <span>{isVi ? 'Tải CV' : 'CV'}</span>
            </button>

            {/* Language Switcher Pill */}
            <LanguageToggle />

            {/* Theme Toggle Button */}
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-lg border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 px-6 py-5"
          >
            <nav className="flex flex-col gap-3 font-mono text-xs uppercase tracking-wider">
              {NAV_ROUTES.map((route) => {
                const isActive = activeSection === route.id;
                return (
                  <a
                    key={route.id}
                    href={route.href}
                    onClick={(e) => handleNavClick(e, route.href)}
                    className={cn(
                      'py-2 transition-colors flex items-center justify-between',
                      isActive
                        ? 'text-neutral-900 dark:text-white font-bold'
                        : 'text-neutral-600 dark:text-neutral-400'
                    )}
                  >
                    <span>{route.label[language]}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

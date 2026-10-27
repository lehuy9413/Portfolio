import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Code2, ArrowUpRight } from 'lucide-react';
import { NAV_ROUTES, PERSONAL_INFO } from '@/data/portfolioData';
import { useScrollTo } from '@/hooks/useScrollTo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/ui/Button';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
    setMobileMenuOpen(false);
  };

  const handleDownloadCV = () => {
    // Generate an accessible print/download CV action or smooth scroll to contact
    scrollTo('#contact');
    window.open('https://github.com/lehuy9413', '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'py-3.5 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Về đầu trang"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-md shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow">
              <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center text-primary-600 dark:text-cyan-400 font-mono font-bold text-sm">
                <Code2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 dark:text-white text-base tracking-tight leading-none group-hover:text-primary-600 dark:group-hover:text-cyan-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-none mt-1">
                Senior Frontend
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav
            className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-800 backdrop-blur-md"
            aria-label="Menu điều hướng chính"
          >
            {NAV_ROUTES.map((route) => {
              const isActive = activeSection === route.id;
              return (
                <a
                  key={route.id}
                  href={route.href}
                  onClick={(e) => handleNavClick(e, route.href)}
                  className={cn(
                    'relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
                    isActive
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-200/60 dark:border-slate-700/60"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{route.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & CV Button */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            <Button
              variant="glow"
              size="sm"
              onClick={handleDownloadCV}
              leftIcon={<Download className="w-4 h-4" />}
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5 opacity-70" />}
              aria-label="Tải CV cá nhân"
            >
              Tải CV
            </Button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Mở menu di động"
              className="p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-6"
          >
            <nav className="flex flex-col gap-2" aria-label="Menu di động">
              {NAV_ROUTES.map((route) => {
                const isActive = activeSection === route.id;
                return (
                  <a
                    key={route.id}
                    href={route.href}
                    onClick={(e) => handleNavClick(e, route.href)}
                    className={cn(
                      'px-4 py-3 rounded-xl text-base font-medium transition-all flex items-center justify-between',
                      isActive
                        ? 'bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-300 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                    )}
                  >
                    <span>{route.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-primary-500" />}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                <Button
                  variant="glow"
                  size="md"
                  onClick={handleDownloadCV}
                  leftIcon={<Download className="w-4 h-4" />}
                  className="w-full justify-center"
                >
                  Tải CV (Bản PDF)
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

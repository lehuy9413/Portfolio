import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { NAV_ROUTES, PERSONAL_INFO, SOCIAL_LINKS } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { useScrollTo } from '@/hooks/useScrollTo';
import { useLanguage } from '@/hooks/useLanguage';

export const Footer: React.FC = () => {
  const { scrollTo } = useScrollTo();
  const { language } = useLanguage();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <GithubIcon size={14} />;
      case 'phone':
        return <Phone className="w-3.5 h-3.5" />;
      case 'linkedin':
        return <LinkedinIcon size={14} />;
      case 'email':
        return <Mail className="w-3.5 h-3.5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-black py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-wider uppercase font-mono text-neutral-900 dark:text-white">
                {PERSONAL_INFO.fullName}
              </span>
              <span className="text-neutral-400 text-xs font-mono">/</span>
              <span className="text-xs text-neutral-500 font-mono">
                {PERSONAL_INFO.title[language]}
              </span>
            </div>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              {PERSONAL_INFO.tagline[language]}
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-2 sm:gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {getSocialIcon(link.platform)}
              </a>
            ))}

            <button
              type="button"
              onClick={() => scrollTo('#hero')}
              aria-label="Back to top"
              className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-mono">
          <nav className="flex items-center gap-4">
            {NAV_ROUTES.map((route) => (
              <a
                key={route.id}
                href={route.href}
                onClick={(e) => handleNavClick(e, route.href)}
                className="hover:text-neutral-900 dark:hover:text-white transition-colors uppercase tracking-wider text-[11px]"
              >
                {route.label[language]}
              </a>
            ))}
          </nav>

          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

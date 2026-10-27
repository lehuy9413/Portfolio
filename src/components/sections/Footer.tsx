import React from 'react';
import { ArrowUp, Code2, Mail, Heart } from 'lucide-react';
import { NAV_ROUTES, PERSONAL_INFO, SOCIAL_LINKS } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { useScrollTo } from '@/hooks/useScrollTo';

export const Footer: React.FC = () => {
  const { scrollTo } = useScrollTo();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href);
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <GithubIcon size={16} />;
      case 'linkedin':
        return <LinkedinIcon size={16} />;
      case 'email':
        return <Mail className="w-4 h-4" />;
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-950 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[7px] flex items-center justify-center text-primary-600 dark:text-cyan-400 font-mono font-bold text-xs">
                  &lt;/&gt;
                </div>
              </div>
              <span className="font-extrabold text-slate-900 dark:text-white text-lg tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              Senior Frontend Engineer chuyên sâu ReactJS, TypeScript &amp; Kiến trúc Web hiệu năng cao.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav
            className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400"
            aria-label="Liên kết chân trang"
          >
            {NAV_ROUTES.map((route) => (
              <a
                key={route.id}
                href={route.href}
                onClick={(e) => handleNavClick(e, route.href)}
                className="hover:text-primary-600 dark:hover:text-cyan-400 transition-colors"
              >
                {route.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-cyan-400 hover:border-primary-400 transition-all hover:scale-105"
              >
                {getSocialIcon(link.platform)}
              </a>
            ))}

            <button
              type="button"
              onClick={() => scrollTo('#hero')}
              aria-label="Cuộn lên đầu trang"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-cyan-400 hover:border-primary-400 transition-all hover:scale-105 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>using React 18, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

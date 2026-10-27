import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

export interface LanguageToggleProps {
  className?: string;
}

// Pixel-perfect SVG Vietnam Flag
const VietnamFlag: React.FC = () => (
  <svg
    viewBox="0 0 30 20"
    className="w-4 h-3 rounded-[2px] overflow-hidden shadow-sm shrink-0"
    aria-hidden="true"
  >
    <rect width="30" height="20" fill="#da251d" />
    <polygon
      points="15,4 16.5,8.8 21.5,8.8 17.5,11.8 19,16.5 15,13.5 11,16.5 12.5,11.8 8.5,8.8 13.5,8.8"
      fill="#ffeb3b"
    />
  </svg>
);

// Pixel-perfect SVG United Kingdom Flag
const UKFlag: React.FC = () => (
  <svg
    viewBox="0 0 60 30"
    className="w-4 h-3 rounded-[2px] overflow-hidden shadow-sm shrink-0"
    aria-hidden="true"
  >
    <clipPath id="uk-clip">
      <path d="M0,0 v30 h60 v-30 z" />
    </clipPath>
    <clipPath id="uk-diag">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <g clipPath="url(#uk-clip)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-diag)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className }) => {
  const { language, toggleLanguage, isVi } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={isVi ? 'Switch language to English' : 'Chuyển sang Tiếng Việt'}
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 shadow-sm',
        className
      )}
    >
      {isVi ? <VietnamFlag /> : <UKFlag />}
      <span className="tracking-wider uppercase font-semibold">{language}</span>
    </button>
  );
};

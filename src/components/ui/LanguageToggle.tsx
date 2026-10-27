import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';

export interface LanguageToggleProps {
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className }) => {
  const { language, toggleLanguage, isVi } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={isVi ? 'Switch language to English' : 'Chuyển sang Tiếng Việt'}
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 shadow-sm',
        className
      )}
    >
      <span className="text-sm leading-none" role="img" aria-label={isVi ? 'Cờ Việt Nam' : 'UK Flag'}>
        {isVi ? '🇻🇳' : '🇬🇧'}
      </span>
      <span className="tracking-wider uppercase">{language}</span>
    </button>
  );
};

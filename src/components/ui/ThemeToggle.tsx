import React from 'react';
import { Sun, Moon } from 'lucide-react';
import type { ThemeMode } from '@/types';
import { cn } from '@/utils/cn';

export interface ThemeToggleProps {
  theme: ThemeMode;
  onToggle: () => void;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  onToggle,
  className,
}) => {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400',
        className
      )}
    >
      {isDark ? (
        <Sun className="w-4 h-4 stroke-[1.75]" />
      ) : (
        <Moon className="w-4 h-4 stroke-[1.75]" />
      )}
    </button>
  );
};

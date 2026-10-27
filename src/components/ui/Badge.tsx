import React from 'react';
import { cn } from '@/utils/cn';

export type BadgeVariant = 'default' | 'success' | 'outline' | 'subtle';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 border-neutral-200/80 dark:border-neutral-700/80',
  subtle:
    'bg-neutral-100/70 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400 border-neutral-200/50 dark:border-neutral-800/80',
  success:
    'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/50',
  outline:
    'bg-transparent text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'text-xs px-2.5 py-0.5 rounded-md font-normal',
  md: 'text-xs px-3 py-1 rounded-full font-medium',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'sm',
  dot = false,
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 border transition-colors select-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          {variant === 'success' && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          )}
          <span
            className={cn(
              'relative inline-flex rounded-full h-2 w-2',
              variant === 'success' ? 'bg-emerald-500' : 'bg-neutral-400 dark:bg-neutral-500'
            )}
          />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
};

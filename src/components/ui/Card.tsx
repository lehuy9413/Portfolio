import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface CardProps extends HTMLMotionProps<'div'> {
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hoverEffect = false,
  className,
  children,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={cn(
        'rounded-2xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 transition-all',
        hoverEffect && 'hover:border-neutral-400 dark:hover:border-neutral-700 hover:shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

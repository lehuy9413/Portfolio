import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface CardProps extends HTMLMotionProps<'div'> {
  hoverEffect?: boolean;
  glow?: boolean;
  gradientBorder?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hoverEffect = true,
  glow = false,
  gradientBorder = false,
  className,
  children,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'relative rounded-2xl glass-card overflow-hidden',
        hoverEffect && 'glass-card-hover',
        glow && 'shadow-glow-primary',
        gradientBorder &&
          'before:absolute before:inset-0 before:p-[1px] before:rounded-2xl before:bg-gradient-to-br before:from-primary-500/30 before:via-cyan-500/20 before:to-transparent before:-z-10',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

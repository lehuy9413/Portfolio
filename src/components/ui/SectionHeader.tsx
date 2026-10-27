import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn('mb-10 md:mb-12 max-w-2xl', className)}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono font-medium tracking-wider uppercase text-neutral-500 dark:text-neutral-400 block mb-2"
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mt-2.5 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Badge, type BadgeVariant } from '@/components/ui/Badge';
import { cn } from '@/utils/cn';

export interface SectionHeaderProps {
  badgeText?: string;
  badgeVariant?: BadgeVariant;
  title: string;
  gradientWord?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeText,
  badgeVariant = 'primary',
  title,
  gradientWord,
  description,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 md:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badgeText && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-3"
        >
          <Badge variant={badgeVariant} dot size="md">
            {badgeText}
          </Badge>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
      >
        {gradientWord && title.includes(gradientWord) ? (
          <>
            {title.split(gradientWord)[0]}
            <span className="text-gradient">{gradientWord}</span>
            {title.split(gradientWord)[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

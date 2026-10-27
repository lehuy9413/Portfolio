import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { useLanguage } from '@/hooks/useLanguage';

export const About: React.FC = () => {
  const { language, isVi } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 block mb-2">
            {isVi ? 'GIỚI THIỆU' : 'ABOUT ME'}
          </span>
          <h2 className="text-3xl font-light tracking-tight text-neutral-900 dark:text-white">
            {isVi ? 'Về tôi' : 'About Me'}
          </h2>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
          {PERSONAL_INFO.aboutParagraphs[language].map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

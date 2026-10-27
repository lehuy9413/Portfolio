import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { useLanguage } from '@/hooks/useLanguage';

export const Hero: React.FC = () => {
  const { language, isVi } = useLanguage();

  const handleDownloadCV = () => {
    window.open(PERSONAL_INFO.cvUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle purple glow in the top-left matching screenshot */}
      <div className="absolute top-0 left-0 w-[360px] h-[360px] bg-purple-600/25 dark:bg-purple-600/20 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Massive Statement Typography */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight leading-[0.92] text-neutral-900 dark:text-white uppercase select-none">
                <span className="block">{PERSONAL_INFO.firstName}</span>
                <span className="block">{PERSONAL_INFO.lastName}</span>
              </h1>

              <div className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-500 dark:text-neutral-400 mt-6 tracking-wide">
                {PERSONAL_INFO.title[language]}
              </div>
            </motion.div>

            {/* CTA Button Matching Screenshot: Pill with Download Icon */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-10"
            >
              <button
                type="button"
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-medium text-xs sm:text-sm tracking-wide uppercase shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer"
              >
                <Download className="w-4 h-4 stroke-[2]" />
                <span>{isVi ? 'TẢI CV' : 'DOWNLOAD CV'}</span>
              </button>
            </motion.div>

            {/* Direct Contact Line Matching Screenshot */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-6 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400"
            >
              <span>{isVi ? 'Liên hệ công việc qua email ' : 'Reach out via email '}</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-semibold text-neutral-900 dark:text-white hover:underline ml-1"
              >
                {PERSONAL_INFO.email}
              </a>
            </motion.div>
          </div>

          {/* Right Column: VỀ TÔI / ABOUT ME Narrative matching Screenshot */}
          <div id="about" className="lg:col-span-5 flex flex-col justify-start lg:pt-3">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-base sm:text-lg font-mono font-medium tracking-widest text-neutral-400 dark:text-neutral-500 uppercase mb-6">
                {isVi ? 'VỀ TÔI' : 'ABOUT ME'}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                {PERSONAL_INFO.aboutParagraphs[language].map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Minimal Tech Highlights Tags */}
              <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400">
                <span className="px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  React
                </span>
                <span className="px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  TypeScript
                </span>
                <span className="px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  Tailwind CSS
                </span>
                <span className="px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  Next.js
                </span>
                <span className="px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  Zustand
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

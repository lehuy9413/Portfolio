import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { useLanguage } from '@/hooks/useLanguage';

export const Hero: React.FC = () => {
  const { language, isVi } = useLanguage();

  return (
    <section id="hero" className="relative min-h-[calc(100vh-64px)] md:min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      {/* Ocean blue ambient glow matching request */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-sky-500/20 dark:bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/10 dark:bg-sky-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Massive Statement Typography */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col"
            >
              <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl font-light tracking-tight leading-[0.94] text-neutral-900 dark:text-white uppercase select-none">
                {PERSONAL_INFO.nameParts.map((part) => (
                  <span key={part} className="block">
                    {part}
                  </span>
                ))}
              </h1>

              <div className="text-lg sm:text-xl md:text-2xl font-light text-neutral-500 dark:text-neutral-400 mt-4 tracking-wide">
                {PERSONAL_INFO.title[language]}
              </div>
            </motion.div>

            {/* CTA Buttons: Direct Download + In-Browser Preview */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-6 md:mt-8 flex flex-wrap items-center gap-3"
            >


              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/40 text-neutral-600 dark:text-neutral-400 font-medium text-xs sm:text-sm tracking-wide hover:border-neutral-400 dark:hover:border-neutral-700 hover:text-neutral-900 dark:hover:text-white transition-all cursor-pointer"
                aria-label={isVi ? 'Xem trước CV trực tiếp' : 'Preview CV online'}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{isVi ? 'XEM CV' : 'PREVIEW'}</span>
              </a>
            </motion.div>

            {/* Direct Contact Line Matching Screenshot - Always easily visible above fold */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400"
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
          <div id="about" className="lg:col-span-5 flex flex-col justify-start lg:pt-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-base sm:text-lg font-mono font-medium tracking-widest text-neutral-400 dark:text-neutral-500 uppercase mb-4">
                {isVi ? 'VỀ TÔI' : 'ABOUT ME'}
              </h2>

              <div className="space-y-3.5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                {PERSONAL_INFO.aboutParagraphs[language].map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Minimal Tech Highlights Tags Based on GitHub & CV */}
              <div className="mt-6 pt-5 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-2 text-xs font-mono text-neutral-600 dark:text-neutral-400">
                {[
                  'HTML5',
                  'CSS3',
                  'JavaScript',
                  'TypeScript',
                  'React',
                  'Tailwind CSS',
                  'React Native',
                  'Flutter',
                  'Dart',
                  'Node.js',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-sky-500/50 hover:text-sky-500 dark:hover:border-cyan-500/50 dark:hover:text-cyan-400 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

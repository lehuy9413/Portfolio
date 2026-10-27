import React from 'react';
import { EXPERIENCES } from '@/data/portfolioData';
import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/hooks/useLanguage';

export const Experience: React.FC = () => {
  const { language, isVi } = useLanguage();

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 block mb-2">
            {isVi ? 'HÀNH TRÌNH' : 'BACKGROUND'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-neutral-900 dark:text-white">
            {isVi ? 'Kinh nghiệm & Học vấn' : 'Work & Education'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-2xl">
            {isVi
              ? 'Quá trình học tập và tích lũy kỹ năng thực chiến trong phát triển giao diện phần mềm.'
              : 'My practical journey building web interfaces and developing software.'}
          </p>
        </div>

        <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 sm:ml-4 space-y-10">
          {EXPERIENCES.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-8">
              {/* Timeline marker */}
              <div
                className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2 border-neutral-50 dark:border-neutral-950 ${
                  item.current ? 'bg-neutral-900 dark:bg-white' : 'bg-neutral-400 dark:bg-neutral-600'
                }`}
              />

              <Card className="p-6 md:p-7" hoverEffect>
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                      {item.role[language]}
                    </h3>
                    <span className="text-neutral-400 text-xs">/</span>
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                      {item.company}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-neutral-400 shrink-0">
                    {item.period[language]}
                  </span>
                </div>

                <div className="text-xs text-neutral-400 mb-3 font-mono">
                  {item.location[language]}
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                  {item.summary[language]}
                </p>

                {/* Achievements */}
                <ul className="space-y-1.5 mb-4 text-xs text-neutral-600 dark:text-neutral-400">
                  {item.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="text-neutral-400 mt-0.5">•</span>
                      <span>{ach[language]}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200/50 dark:border-neutral-800/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

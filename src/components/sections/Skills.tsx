import React from 'react';
import { SKILL_GROUPS, SKILLS } from '@/data/portfolioData';
import { Card } from '@/components/ui/Card';
import { useLanguage } from '@/hooks/useLanguage';

export const Skills: React.FC = () => {
  const { language, isVi } = useLanguage();

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 block mb-2">
            {isVi ? 'KỸ NĂNG & CÔNG CỤ' : 'TOOLBOX'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-neutral-900 dark:text-white">
            {isVi ? 'Hệ thống công nghệ sử dụng' : 'Skills & Technologies'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-2xl">
            {isVi
              ? 'Các công cụ và thư viện tôi sử dụng hàng ngày để xây dựng các sản phẩm web bền vững.'
              : 'Technologies and libraries I use daily to build reliable, responsive web applications.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group) => {
            const groupSkills = SKILLS.filter((s) => s.category === group.category);

            return (
              <Card key={group.category} className="p-6 md:p-8 flex flex-col justify-between" hoverEffect>
                <div>
                  <div className="flex items-baseline justify-between mb-5 pb-3 border-b border-neutral-100 dark:border-neutral-800/80">
                    <h3 className="text-base font-medium tracking-wide uppercase text-neutral-900 dark:text-neutral-100 font-mono text-sm">
                      {group.title[language]}
                    </h3>
                    <span className="text-xs font-mono text-neutral-400">
                      {groupSkills.length} items
                    </span>
                  </div>

                  <div className="space-y-3">
                    {groupSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800/60"
                      >
                        <div className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                          {skill.name}
                        </div>
                        <p className="mt-1 text-[11px] text-neutral-500 dark:text-neutral-400 leading-normal">
                          {skill.description[language]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

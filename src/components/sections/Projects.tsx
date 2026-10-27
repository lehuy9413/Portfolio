import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FEATURED_PROJECTS } from '@/data/portfolioData';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { GithubIcon } from '@/components/ui/Icons';
import { useLanguage } from '@/hooks/useLanguage';

export const Projects: React.FC = () => {
  const { language, isVi } = useLanguage();

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500 block mb-2">
            {isVi ? 'DỰ ÁN TIÊU BIỂU' : 'SELECTED WORK'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-neutral-900 dark:text-white">
            {isVi ? 'Các sản phẩm đã thực hiện' : 'Featured Projects'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-2xl">
            {isVi
              ? 'Tập trung vào kiến trúc component tái sử dụng, tối ưu render và trải nghiệm người dùng.'
              : 'A selection of frontend applications focusing on state management, responsive UI architecture, and technical challenges.'}
          </p>
        </div>

        <div className="space-y-12">
          {FEATURED_PROJECTS.map((project, index) => {
            return (
              <Card
                key={project.id}
                className="p-6 sm:p-8 md:p-10 overflow-hidden"
                hoverEffect
              >
                <div className="flex flex-col gap-6">
                  {/* Top: Index, Subtitle, Title, Links */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5 font-mono text-xs">
                        <span className="text-neutral-400">0{index + 1}</span>
                        <span className="text-neutral-300 dark:text-neutral-700">/</span>
                        <span className="text-neutral-500 dark:text-neutral-400">
                          {project.subtitle[language]}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-neutral-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 pt-1">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <span>Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        aria-label={`View source code of ${project.title} on GitHub`}
                      >
                        <GithubIcon size={14} />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
                    {project.description[language]}
                  </p>

                  {/* Image Preview */}
                  <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 aspect-[16/9] bg-neutral-100 dark:bg-neutral-900 max-h-[460px]">
                    <img
                      src={project.image}
                      alt={`Mockup for ${project.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>

                  {/* Technical Highlights */}
                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
                    <div className="text-xs font-mono font-medium text-neutral-400 uppercase tracking-wider mb-3">
                      {isVi ? 'Giải pháp kỹ thuật Frontend' : 'Frontend Solutions & Architecture'}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {project.highlights.map((highlight, hIdx) => (
                        <div
                          key={hIdx}
                          className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-neutral-800/60"
                        >
                          <div className="text-xs font-medium text-neutral-900 dark:text-neutral-100">
                            {highlight.title[language]}
                          </div>
                          <div className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 leading-normal">
                            {highlight.description[language]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="subtle" size="sm">
                        {tag}
                      </Badge>
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

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ChevronDown,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  BarChart2,
  Workflow,
} from 'lucide-react';
import { FEATURED_PROJECTS } from '@/data/portfolioData';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { GithubIcon } from '@/components/ui/Icons';

const projectIcons: Record<string, React.ReactNode> = {
  'nexus-design-system': <Layers className="w-5 h-5 text-primary-500" />,
  'pulse-realtime-analytics': <BarChart2 className="w-5 h-5 text-cyan-400" />,
  'flowstate-workflow-builder': <Workflow className="w-5 h-5 text-violet-400" />,
};

export const Projects: React.FC = () => {
  const [expandedHighlights, setExpandedHighlights] = useState<Record<string, boolean>>({
    'nexus-design-system': true,
    'pulse-realtime-analytics': true,
    'flowstate-workflow-builder': false,
  });

  const toggleHighlights = (projectId: string) => {
    setExpandedHighlights((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      {/* Background ambient decorative orb */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Dự án tiêu biểu"
          badgeVariant="primary"
          title="Sản phẩm & Giải pháp Kỹ thuật Frontend"
          gradientWord="Giải pháp Kỹ thuật"
          description="Tập trung vào kiến trúc UI/UX có khả năng mở rộng, tối ưu render 60fps, xử lý state phức tạp và tuân thủ chuẩn Web Accessibility khắt khe."
        />

        <div className="space-y-12 lg:space-y-16">
          {FEATURED_PROJECTS.map((project, index) => {
            const isHighlightsOpen = !!expandedHighlights[project.id];
            const isEven = index % 2 === 0;

            return (
              <Card
                key={project.id}
                className="p-6 sm:p-8 lg:p-10 border-slate-200/90 dark:border-slate-800/90 bg-white/70 dark:bg-slate-900/60"
                gradientBorder
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                  {/* Visual Preview / Mockup Column */}
                  <div
                    className={`lg:col-span-5 flex flex-col gap-4 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="group relative rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 aspect-video shadow-lg bg-slate-950">
                      <img
                        src={project.image}
                        alt={`Ảnh minh họa giao diện ${project.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                      />

                      {/* Overlay badge with icon */}
                      <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/60 flex items-center gap-2 text-xs font-mono text-white">
                        {projectIcons[project.id]}
                        <span>Dự án #{index + 1}</span>
                      </div>

                      {/* Hover action overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                        <span className="text-xs text-white font-mono">React 18 &amp; Strict TS</span>
                        <div className="flex gap-2">
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Trải nghiệm bản live của ${project.title}`}
                            className="p-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Xem mã nguồn ${project.title} trên GitHub`}
                            className="p-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-colors"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Key Architecture Bullets */}
                    <div className="bg-slate-50 dark:bg-slate-950/50 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/80">
                      <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mb-2.5">
                        <Cpu className="w-4 h-4 text-primary-500" />
                        <span>Điểm nhấn kiến trúc:</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                        {project.architecturePoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Project Details & Technical Highlights Column */}
                  <div
                    className={`lg:col-span-7 flex flex-col justify-between ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      {/* Header Title & Subtitle */}
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary-600 dark:text-cyan-400">
                            {project.subtitle}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Descriptions */}
                      <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech stack badges */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="default" size="sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Frontend Highlights Section */}
                      <div className="mt-6 border-t border-slate-200/80 dark:border-slate-800/80 pt-5">
                        <button
                          type="button"
                          onClick={() => toggleHighlights(project.id)}
                          className="w-full flex items-center justify-between text-left text-sm font-semibold text-slate-900 dark:text-white py-1 focus:outline-none group cursor-pointer"
                          aria-expanded={isHighlightsOpen}
                        >
                          <span className="flex items-center gap-2 text-primary-600 dark:text-primary-400">
                            <Sparkles className="w-4 h-4" />
                            Frontend Highlights &amp; Giải pháp Kỹ thuật UI
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                              isHighlightsOpen ? 'rotate-180 text-primary-500' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isHighlightsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden mt-3"
                            >
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {project.highlights.map((highlight, hIdx) => (
                                  <div
                                    key={hIdx}
                                    className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-950/70 border border-slate-200/60 dark:border-slate-800/80 flex flex-col justify-between"
                                  >
                                    <div>
                                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                        <span>{highlight.title}</span>
                                      </div>
                                      <p className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                                        {highlight.description}
                                      </p>
                                    </div>
                                    {highlight.metric && (
                                      <div className="mt-3 pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                                        <span className="text-[10px] font-mono font-semibold text-primary-600 dark:text-cyan-400 bg-primary-50 dark:bg-cyan-950/50 px-2 py-0.5 rounded-md">
                                          {highlight.metric}
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-8 pt-4 flex flex-wrap items-center gap-3">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => window.open(project.demoUrl, '_blank', 'noopener,noreferrer')}
                        leftIcon={<ExternalLink className="w-4 h-4" />}
                        aria-label={`Mở Live Demo của ${project.title}`}
                      >
                        Live Demo
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                        leftIcon={<GithubIcon className="w-4 h-4" />}
                        aria-label={`Mở kho mã nguồn ${project.title} trên GitHub`}
                      >
                        Mã nguồn (GitHub)
                      </Button>
                    </div>
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

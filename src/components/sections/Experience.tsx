import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { EXPERIENCES } from '@/data/portfolioData';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Hành trình sự nghiệp"
          badgeVariant="violet"
          title="Kinh nghiệm & Dấu mốc Đáng nhớ"
          gradientWord="Dấu mốc Đáng nhớ"
          description="Quá trình tích lũy chuyên môn từ giảng đường đại học đến các vị trí Senior Frontend trong các dự án thực chiến phức tạp."
        />

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-32 space-y-12">
          {EXPERIENCES.map((item, index) => {
            const isWork = item.type === 'work';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 md:pl-10"
              >
                {/* Timeline Node Marker */}
                <div
                  className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-950 shadow-md ${
                    item.current
                      ? 'bg-primary-600 text-white ring-4 ring-primary-500/20'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {isWork ? (
                    <Briefcase className="w-3.5 h-3.5" />
                  ) : (
                    <GraduationCap className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Period Badge for desktop (shown on the left margin) */}
                <div className="hidden md:block absolute -left-36 top-2 text-right w-24">
                  <span className="text-xs font-mono font-bold text-primary-600 dark:text-cyan-400">
                    {item.period}
                  </span>
                  {item.current && (
                    <span className="block text-[10px] uppercase tracking-wider text-emerald-500 font-bold mt-0.5">
                      Hiện tại
                    </span>
                  )}
                </div>

                {/* Content Card */}
                <Card
                  className="p-6 sm:p-7 border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60"
                  gradientBorder={item.current}
                >
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100 dark:border-slate-800/80">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                          {item.role}
                        </h3>
                        {item.current && (
                          <Badge variant="emerald" dot pulse size="sm">
                            Đang công tác
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center gap-3 mt-1 text-sm text-slate-600 dark:text-slate-400">
                        <span className="font-semibold text-primary-600 dark:text-indigo-400">
                          {item.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-xs">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Mobile Period info */}
                    <div className="md:hidden flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Key Achievements */}
                  <div className="mt-4 space-y-2">
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary-500" />
                      <span>Thành tích nổi bật:</span>
                    </div>
                    <ul className="space-y-1.5">
                      {item.achievements.map((ach, aIdx) => (
                        <li
                          key={aIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack tags */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

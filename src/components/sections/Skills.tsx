import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Layout,
  Database,
  Wrench,
  Sparkles,
  Zap,
  Shield,
  Layers,
} from 'lucide-react';
import { SKILLS, SKILL_GROUPS } from '@/data/portfolioData';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import type { SkillCategory } from '@/types';
import { cn } from '@/utils/cn';

const categoryIcons: Record<SkillCategory, React.ReactNode> = {
  core: <Code2 className="w-5 h-5 text-indigo-500" />,
  ui: <Layout className="w-5 h-5 text-cyan-500" />,
  state: <Database className="w-5 h-5 text-violet-500" />,
  tools: <Wrench className="w-5 h-5 text-emerald-500" />,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'all'>('all');

  const filteredSkills =
    selectedCategory === 'all'
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Năng lực chuyên môn"
          badgeVariant="cyan"
          title="Kỹ năng & Hệ sinh thái Công nghệ"
          gradientWord="Hệ sinh thái Công nghệ"
          description="Được phân bổ theo mô hình Bento Grid hiện đại, tập trung vào chiều sâu React, TypeScript nghiêm ngặt và tối ưu hóa hiệu năng giao diện người dùng."
        />

        {/* Bento Grid Featured Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {/* Bento Card 1: Core React & TS */}
          <Card
            className="md:col-span-2 p-6 sm:p-8 bg-gradient-to-br from-indigo-900/10 via-slate-900/5 to-cyan-900/10 dark:from-indigo-950/40 dark:via-slate-900/50 dark:to-cyan-950/30 border-indigo-200/60 dark:border-indigo-900/40"
            glow
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Triết lý kỹ thuật
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Type-Safe &amp; Performance-First Architecture
                </h3>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Không thỏa hiệp với lỗi runtime. Tận dụng triệt để Generics, Discriminated Unions và
              cơ chế Strict Mode của TypeScript. Tối ưu render vòng lặp qua profiling thực tế,
              sử dụng `useTransition`, `useDeferredValue` và memoization có chủ đích.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Rendering</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                  60 FPS Smooth
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Type Safety</div>
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                  Strict (No Any)
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">A11y Standard</div>
                <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-1">
                  WCAG 2.1 AA
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Testing</div>
                <div className="text-sm font-bold text-cyan-600 dark:text-cyan-400 mt-1">
                  Vitest + RTL
                </div>
              </div>
            </div>
          </Card>

          {/* Bento Card 2: Modern Design Systems */}
          <Card className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    UI Engineering
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Design Tokens &amp; Micro-interactions
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Biến các thiết kế phức tạp từ Figma thành các component có tính module cao, phối hợp nhịp nhàng giữa Tailwind CSS và Framer Motion.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-primary-500" /> WAI-ARIA
              </span>
              <span>Tailwind JIT</span>
            </div>
          </Card>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={cn(
              'px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer',
              selectedCategory === 'all'
                ? 'bg-primary-600 text-white shadow-md shadow-primary-500/25'
                : 'bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-primary-400'
            )}
          >
            Tất cả kỹ năng ({SKILLS.length})
          </button>

          {SKILL_GROUPS.map((group) => {
            const count = SKILLS.filter((s) => s.category === group.category).length;
            const isSelected = selectedCategory === group.category;
            return (
              <button
                key={group.category}
                type="button"
                onClick={() => setSelectedCategory(group.category)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer',
                  isSelected
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-500/25'
                    : 'bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-primary-400'
                )}
              >
                <span>{group.title}</span>
                <span className="text-[11px] opacity-75">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-full p-4 sm:p-5 rounded-2xl glass-card border-slate-200/80 dark:border-slate-800/80 hover:border-primary-400/60 dark:hover:border-primary-500/60 transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-primary-50 dark:bg-slate-800/80 text-primary-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                          {categoryIcons[skill.category]}
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                          {skill.name}
                        </h4>
                      </div>

                      <Badge
                        variant={skill.level === 'Expert' ? 'emerald' : 'cyan'}
                        size="sm"
                        className="shrink-0"
                      >
                        {skill.level}
                      </Badge>
                    </div>

                    <p className="mt-3 text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {skill.isPrimary && (
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-primary-600 dark:text-cyan-400">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Core Competency
                      </span>
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

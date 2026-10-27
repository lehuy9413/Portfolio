import React from 'react';
import {
  Cpu,
  Sparkles,
  Gauge,
  CheckCircle,
  Layers,
  HeartHandshake,
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeText="Hồ sơ năng lực"
          badgeVariant="primary"
          title="Về Tôi &amp; Triết Lý Phát Triển Frontend"
          gradientWord="Triết Lý Phát Triển"
          description="Kết hợp tư duy thẩm mỹ UI/UX tinh tế cùng nền tảng khoa học máy tính vững chắc để xây dựng các sản phẩm số vượt trội."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: Main Story & Background */}
          <Card
            className="md:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white/70 dark:bg-slate-900/60"
            gradientBorder
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="cyan" size="sm">
                  Kỹ sư Frontend Chuyên nghiệp
                </Badge>
                <Badge variant="outline" size="sm">
                  Hơn 4 năm kinh nghiệm
                </Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Biến những bản vẽ phức tạp thành{' '}
                <span className="text-gradient">sản phẩm web mượt mà 60fps</span>
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      Component-Driven UI
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Độc lập, tái sử dụng cao, đồng bộ theo Design System và Storybook.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Gauge className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      Core Web Vitals Tối ưu
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      Giảm INP, triệt tiêu CLS, tối ưu LCP &lt; 1.2s qua lazy loading &amp; memoization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> React 18 Concurrent Features
              </span>
              <span>Clean Code &amp; SOLID Principles</span>
            </div>
          </Card>

          {/* Bento Card 2: Principles Checklist */}
          <Card className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-slate-950 text-white border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-4 text-cyan-400">
                <Cpu className="w-5 h-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  Tiêu chuẩn sản phẩm
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mb-4">
                Quy chuẩn xuất xưởng của tôi:
              </h4>

              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>
                    <strong>Zero Type Errors:</strong> Strict TypeScript không dùng type `any`.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>
                    <strong>Mobile First &amp; Responsive:</strong> Hiển thị hoàn hảo mọi kích thước.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>
                    <strong>Trợ năng A11y (WCAG 2.1):</strong> Semantic HTML và keyboard navigation.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>
                    <strong>Kiểm thử tự động:</strong> Unit test cho custom hooks và UI logic quan trọng.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <HeartHandshake className="w-3.5 h-3.5 text-primary-400" />
                Product Mindset
              </span>
              <span className="text-emerald-400">Production Ready</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

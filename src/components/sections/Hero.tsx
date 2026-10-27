import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Copy,
  Check,
  Sparkles,
  Zap,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import { PERSONAL_INFO, METRIC_STATS } from '@/data/portfolioData';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { useScrollTo } from '@/hooks/useScrollTo';

const CODE_SAMPLE = `// Type-Safe Virtualized OrderBook Stream
export function useOrderBookStream<T extends MarketData>(
  symbol: string,
  options?: StreamConfig
): VirtualStreamState<T> {
  const [data, setData] = useState<T[]>([]);
  const workerRef = useRef<Worker | null>(null);

  // Compute off-main-thread via Web Worker
  useEffect(() => {
    const worker = new Worker(new URL('./worker.ts', import.meta.url));
    worker.postMessage({ action: 'SUBSCRIBE', symbol });
    
    worker.onmessage = (e: MessageEvent<T[]>) => {
      // Zero frame drops @ 60fps
      startTransition(() => {
        setData(e.data);
      });
    };
    return () => worker.terminate();
  }, [symbol]);

  return { data, isOptimistic: false };
}`;

export const Hero: React.FC = () => {
  const { scrollTo } = useScrollTo();
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(CODE_SAMPLE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary-500/15 dark:bg-primary-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-400/15 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Value Prop */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <Badge variant="emerald" dot pulse size="md">
                <span className="flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                  {PERSONAL_INFO.availability}
                </span>
              </Badge>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
            >
              Xin chào, tôi là{' '}
              <span className="text-gradient block mt-1">{PERSONAL_INFO.name}</span>
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-300 block mt-2">
                {PERSONAL_INFO.title}
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              {PERSONAL_INFO.tagline}
            </motion.p>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Button
                variant="glow"
                size="lg"
                onClick={() => scrollTo('#projects')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
                aria-label="Cuộn tới danh sách dự án tiêu biểu"
              >
                Xem các dự án nổi bật
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollTo('#contact')}
                leftIcon={<Mail className="w-4 h-4" />}
                className="w-full sm:w-auto"
                aria-label="Liên hệ trực tiếp"
              >
                Liên hệ hợp tác
              </Button>
            </motion.div>

            {/* Social Links & Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 w-full"
            >
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Kết nối với tôi:
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-400 transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 transition-all hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400 transition-all hover:scale-105"
                  aria-label="Gửi Email trực tiếp"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center gap-2 ml-auto text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-200/60 dark:border-slate-800/60">
                <ShieldCheck className="w-3.5 h-3.5 text-primary-500" />
                <span>Strict TS &amp; WCAG AA</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bento Code Card & Quick Stats */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Interactive Code Preview Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card
                className="bg-slate-950 text-slate-200 border-slate-800 shadow-2xl p-0"
                glow
              >
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      useOrderBookStream.ts
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyCode}
                    aria-label="Sao chép đoạn mã"
                    className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {copiedCode ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Code Content */}
                <div className="p-4 sm:p-5 font-mono text-[12px] sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300">
                  <pre>
                    <code>{CODE_SAMPLE}</code>
                  </pre>
                </div>

                {/* Code Window Footer */}
                <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Zap className="w-3.5 h-3.5" /> 60 FPS Stable Stream
                  </span>
                  <span>TypeScript 5.x</span>
                </div>
              </Card>
            </motion.div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-2">
              {METRIC_STATS.slice(0, 4).map((stat) => (
                <Card
                  key={stat.label}
                  className="p-4 flex flex-col justify-between"
                  hoverEffect
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    <span className="text-gradient">{stat.value}</span>
                  </div>
                  <div className="mt-1">
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                      {stat.description}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, BookOpen, Layers } from 'lucide-react';
import { FEATURED_PROJECTS } from '@/data/portfolioData';
import { Badge } from '@/components/ui/Badge';
import { GithubIcon } from '@/components/ui/Icons';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/utils/cn';
import type { Project } from '@/types';

interface ProjectBookPageProps {
  project: Project;
  index: number;
  total: number;
  activePageIndex: number;
  language: 'vi' | 'en';
  isVi: boolean;
}

const ProjectBookPage: React.FC<ProjectBookPageProps> = ({
  project,
  index,
  total,
  activePageIndex,
  language,
  isVi,
}) => {
  const isPast = index < activePageIndex;
  const isCurrent = index === activePageIndex;

  // 3D rotation and layering logic:
  // - Current page sits flat at rotateY: 0deg, zIndex: 30
  // - Flipped pages swing to the left at rotateY: -115deg, zIndex: 10 + index
  // - Future pages sit stacked underneath at rotateY: 0deg, scale slightly down
  const getPageStyle = () => {
    if (isPast) {
      return {
        rotateY: -115,
        opacity: 0,
        scale: 0.94,
        zIndex: 10 + index,
        pointerEvents: 'none' as const,
      };
    }
    if (isCurrent) {
      return {
        rotateY: 0,
        opacity: 1,
        scale: 1,
        zIndex: 30,
        pointerEvents: 'auto' as const,
      };
    }
    // Future pages stacked underneath
    const depth = index - activePageIndex;
    return {
      rotateY: 0,
      opacity: depth > 1 ? 0 : 0.85,
      scale: 1 - depth * 0.03,
      zIndex: 30 - depth * 5,
      pointerEvents: 'none' as const,
    };
  };

  const pageStyle = getPageStyle();

  // Extract hostname for browser mockup bar
  const demoHost = project.demoUrl
    ? (() => {
      try {
        return new URL(project.demoUrl).hostname;
      } catch {
        return 'live-demo.app';
      }
    })()
    : 'localhost:3000';

  return (
    <motion.div
      initial={false}
      animate={{
        rotateY: pageStyle.rotateY,
        opacity: pageStyle.opacity,
        scale: pageStyle.scale,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Buttery cubic bezier page turn
      }}
      style={{
        transformOrigin: 'left center',
        transformStyle: 'preserve-3d',
        zIndex: pageStyle.zIndex,
        pointerEvents: pageStyle.pointerEvents,
      }}
      className={cn(
        'absolute inset-0 rounded-2xl bg-white dark:bg-[#0c0c0f] border border-neutral-200/90 dark:border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden transition-shadow',
        isCurrent ? 'ring-1 ring-sky-500/20 dark:ring-cyan-500/20' : ''
      )}
    >
      {/* Book Spine Texture Line on the Left Edge */}
      <div className="absolute top-0 left-0 bottom-0 w-3 bg-gradient-to-r from-neutral-900/30 dark:from-black/70 via-black/10 to-transparent pointer-events-none z-30" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500/40 via-cyan-400/50 to-blue-500/40 pointer-events-none z-30" />

      {/* Realistic Book Page Depth Stacking Effect on Right Edge */}
      <div className="absolute top-2 right-0 bottom-2 w-1 border-r-2 border-neutral-300/40 dark:border-neutral-800 pointer-events-none z-30" />

      {/* Card Content Layout */}
      <div className="h-full flex flex-col justify-between p-5 sm:p-7 md:p-8 relative z-10">
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-4 pb-3.5 border-b border-neutral-100 dark:border-neutral-800/80">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-sky-500/10 dark:bg-cyan-500/15 text-sky-600 dark:text-cyan-400 text-xs font-mono font-bold shrink-0">
              0{index + 1}
            </span>
            <div className="min-w-0">
              <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 dark:text-neutral-500 block truncate">
                {project.subtitle[language]}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-light tracking-tight text-neutral-900 dark:text-white leading-tight truncate">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-xs font-mono font-medium hover:scale-105 active:scale-95 transition-all shadow-sm"
                aria-label={`Live Demo for ${project.title}`}
              >
                <span>Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                aria-label={`GitHub Code for ${project.title}`}
              >
                <GithubIcon size={13} />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Middle: Split Layout (Left: Details, Right: Full Image Mockup without cropping) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto items-center py-2">
          {/* Left Details: 6.5 cols */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal line-clamp-3">
              {project.description[language]}
            </p>

            {/* Technical Highlights */}
            <div className="space-y-1.5 pt-0.5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                {isVi ? 'Điểm nổi bật giải pháp' : 'Engineering Highlights'}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {project.highlights.map((h, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-2 sm:p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900/70 border border-neutral-200/60 dark:border-neutral-800/60"
                  >
                    <div className="text-[11px] font-medium text-neutral-900 dark:text-neutral-100 truncate">
                      {h.title[language]}
                    </div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400 line-clamp-2 mt-0.5 leading-snug">
                      {h.description[language]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="subtle" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Visual: 5.5 cols - Browser Mockup with 100% Fit (NO CROPPING) */}
          <div className="lg:col-span-5 flex flex-col rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-950 shadow-md group">
            {/* Browser Window Mockup Bar */}
            <div className="flex items-center justify-between px-3 py-1.5 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex-1 max-w-[190px] mx-2 px-2 py-0.5 rounded bg-white/70 dark:bg-neutral-950/70 border border-neutral-200/50 dark:border-neutral-800/60 text-[10px] font-mono text-neutral-500 dark:text-neutral-400 truncate text-center">
                {demoHost}
              </div>
              <div className="w-7 text-right">
                <span className="text-[9px] font-mono text-neutral-400">SSL</span>
              </div>
            </div>

            {/* Image Canvas with 100% Fit Object Contain */}
            <div className="relative w-full h-[210px] sm:h-[230px] md:h-[245px] bg-[#0a0a0c] flex items-center justify-center p-2 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full max-h-full object-contain rounded transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono font-medium backdrop-blur-[2px]"
                >
                  <span>{isVi ? 'Mở sản phẩm thực tế' : 'Launch Demo'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Page Bookmark Footer */}
        <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              {isVi ? `Trang 0${index + 1} / 0${total}` : `Page 0${index + 1} of 0${total}`}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-neutral-400 dark:text-neutral-500">
            <span>{isVi ? 'Lăn chuột hoặc dùng nút để lật trang' : 'Scroll wheel or click arrows to flip'}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const { language, isVi } = useLanguage();
  const [activePageIndex, setActivePageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const bookStageRef = useRef<HTMLDivElement>(null);
  const isThrottledRef = useRef(false);
  const touchStartYRef = useRef<number | null>(null);

  const totalPages = FEATURED_PROJECTS.length;

  const goToNextPage = useCallback(() => {
    setActivePageIndex((prev) => Math.min(prev + 1, totalPages - 1));
  }, [totalPages]);

  const goToPrevPage = useCallback(() => {
    setActivePageIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToPage = useCallback((idx: number) => {
    if (idx >= 0 && idx < totalPages) {
      setActivePageIndex(idx);
    }
  }, [totalPages]);

  // Mouse wheel listener attached directly to the book stage:
  // - Turns page forward on wheel down if not on last page
  // - Turns page backward on wheel up if not on first page
  // - At edges (first page up / last page down), naturally lets normal page scroll through!
  useEffect(() => {
    const stage = bookStageRef.current;
    if (!stage) return;

    const handleWheel = (e: WheelEvent) => {
      // Ignore tiny jitter
      if (Math.abs(e.deltaY) < 18) return;

      if (e.deltaY > 0) {
        // Scrolling down
        if (activePageIndex < totalPages - 1) {
          e.preventDefault();
          if (!isThrottledRef.current) {
            isThrottledRef.current = true;
            goToNextPage();
            setTimeout(() => {
              isThrottledRef.current = false;
            }, 450);
          }
        }
      } else {
        // Scrolling up
        if (activePageIndex > 0) {
          e.preventDefault();
          if (!isThrottledRef.current) {
            isThrottledRef.current = true;
            goToPrevPage();
            setTimeout(() => {
              isThrottledRef.current = false;
            }, 450);
          }
        }
      }
    };

    stage.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      stage.removeEventListener('wheel', handleWheel);
    };
  }, [activePageIndex, totalPages, goToNextPage, goToPrevPage]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartYRef.current === null) return;
    const diff = touchStartYRef.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToNextPage();
      } else {
        goToPrevPage();
      }
    }
    touchStartYRef.current = null;
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-[90vh] py-12 md:py-16 border-t border-neutral-200 dark:border-neutral-800 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-6">
        {/* Header with Title and Flip Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-medium tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
                {isVi ? 'DỰ ÁN TIÊU BIỂU' : 'SELECTED WORK'}
              </span>
              <span className="text-neutral-300 dark:text-neutral-700 font-mono text-xs">•</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-sky-500 dark:text-cyan-400">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{isVi ? 'Sách Dự án 3D' : '3D Project Book'}</span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-neutral-900 dark:text-white">
              {isVi ? 'Các sản phẩm đã thực hiện' : 'Featured Projects'}
            </h2>
          </div>

          {/* Interactive Flip Page Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Page Tab Pills */}
            <div className="flex items-center p-1 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono">
              {FEATURED_PROJECTS.map((proj, idx) => {
                const isActive = activePageIndex === idx;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => goToPage(idx)}
                    className={cn(
                      'px-3 py-1.5 rounded-lg transition-all cursor-pointer font-medium',
                      isActive
                        ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                        : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200'
                    )}
                  >
                    <span>{isVi ? `Trang ${idx + 1}` : `Page ${idx + 1}`}</span>
                  </button>
                );
              })}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={goToPrevPage}
                disabled={activePageIndex === 0}
                className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-400 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={goToNextPage}
                disabled={activePageIndex === totalPages - 1}
                className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-400 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3D Book Stage (All project pages stack in ONE EXACT SPOT and flip like turning a book page) */}
        <div
          ref={bookStageRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full max-w-5xl mx-auto h-[500px] sm:h-[520px] md:h-[530px]"
          style={{
            perspective: '2000px',
            transformStyle: 'preserve-3d',
          }}
        >
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectBookPage
              key={project.id}
              project={project}
              index={index}
              total={totalPages}
              activePageIndex={activePageIndex}
              language={language}
              isVi={isVi}
            />
          ))}
        </div>

        {/* Hint Bar & Dot Indicators Under Book */}
        <div className="flex items-center justify-between text-xs font-mono text-neutral-400 dark:text-neutral-500 pt-1">
          <div className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
          </div>

          <div className="flex items-center gap-1.5">
            {FEATURED_PROJECTS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => goToPage(dotIdx)}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300 cursor-pointer',
                  activePageIndex === dotIdx
                    ? 'w-6 bg-cyan-500'
                    : 'w-1.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400'
                )}
                aria-label={`Go to page ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


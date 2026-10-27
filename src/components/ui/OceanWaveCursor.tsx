import React, { useEffect, useRef } from 'react';

interface SmokePuff {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  growth: number;
  alpha: number;
  decay: number;
  r: number;
  g: number;
  b: number;
  phase: number;
  isCore?: boolean;
}

export const OceanWaveCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Ocean blue & cyan mist palette for rich watercolor/smoke wash ("vệt loang")
    const smokeColors = [
      { r: 6, g: 182, b: 212 },   // cyan-500
      { r: 14, g: 165, b: 233 },  // sky-500
      { r: 56, g: 189, b: 248 },  // sky-400
      { r: 2, g: 132, b: 199 },   // ocean-600
      { r: 186, g: 230, b: 253 }, // ethereal ice mist
    ];

    const puffs: SmokePuff[] = [];
    let mouseX = width / 2;
    let mouseY = height / 2;
    let lastX = mouseX;
    let lastY = mouseY;
    let hasMoved = false;

    // Helper to spawn an expansive soft wash puff ("vệt loang")
    const spawnWashPuff = (x: number, y: number, dx: number, dy: number) => {
      const color = smokeColors[Math.floor(Math.random() * smokeColors.length)];

      // 1. Broad outer wash puff (loang to, mềm mại, lan tỏa ra xung quanh)
      puffs.push({
        x: x + (Math.random() - 0.5) * 14,
        y: y + (Math.random() - 0.5) * 14,
        vx: (Math.random() - 0.5) * 0.5 + dx * 0.03,
        // Smoke gently rises upward as it blooms
        vy: -0.32 - Math.random() * 0.28 + dy * 0.03,
        // Clearly larger initial radius as requested ("to xíu")
        radius: 42 + Math.random() * 24,
        // Expands generously outward as it bleeds ("vệt loang")
        growth: 1.1 + Math.random() * 0.6,
        alpha: 0.52 + Math.random() * 0.14,
        // Graceful dissipation (~1.5s - 1.8s)
        decay: 0.01 + Math.random() * 0.004,
        r: color.r,
        g: color.g,
        b: color.b,
        phase: Math.random() * Math.PI * 2,
        isCore: false,
      });

      // 2. Focused silky core along the stroke for fluid continuity
      puffs.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        vx: dx * 0.04,
        vy: -0.22 + dy * 0.04,
        radius: 22 + Math.random() * 12,
        growth: 0.6 + Math.random() * 0.3,
        alpha: 0.62 + Math.random() * 0.15,
        decay: 0.012 + Math.random() * 0.004,
        r: color.r,
        g: color.g,
        b: color.b,
        phase: Math.random() * Math.PI * 2,
        isCore: true,
      });

      if (puffs.length > 280) {
        puffs.shift();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      if (!hasMoved) {
        lastX = x;
        lastY = y;
        hasMoved = true;
      }

      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.hypot(dx, dy);

      mouseX = x;
      mouseY = y;

      // Interpolate along movement vector for a continuous, seamless "vệt loang"
      if (dist > 3) {
        const stepSize = 8;
        const steps = Math.min(Math.floor(dist / stepSize), 24);

        for (let i = 0; i <= steps; i++) {
          const t = steps === 0 ? 1 : i / steps;
          const ix = lastX + dx * t;
          const iy = lastY + dy * t;
          spawnWashPuff(ix, iy, dx, dy);
        }
      }

      lastX = x;
      lastY = y;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let time = 0;
    let lastTimestamp = performance.now();

    const render = (now: number) => {
      const dt = Math.min((now - lastTimestamp) / 1000, 0.1);
      lastTimestamp = now;
      time += dt;

      ctx.clearRect(0, 0, width, height);

      // In dark mode, 'screen' gives gorgeous luminous watercolor wash blending
      const isDark = document.documentElement.classList.contains('dark');
      ctx.globalCompositeOperation = isDark ? 'screen' : 'source-over';

      // 1. Draw broad, feather-soft wash puffs ("vệt loang")
      for (let i = puffs.length - 1; i >= 0; i--) {
        const p = puffs[i];

        // Soft, organic swirling waft
        p.x += p.vx + Math.sin(time * 2.0 + p.phase) * 0.28;
        p.y += p.vy;
        p.radius += p.growth * (dt * 60);
        p.alpha -= p.decay * (dt * 60);

        if (p.alpha <= 0.005) {
          puffs.splice(i, 1);
          continue;
        }

        const currentAlpha = Math.max(0, p.alpha);
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);

        if (p.isCore) {
          // Luminous core gradient
          grad.addColorStop(0, `rgba(${p.r}, ${p.g}, ${p.b}, ${currentAlpha * 0.85})`);
          grad.addColorStop(0.35, `rgba(${p.r}, ${p.g}, ${p.b}, ${currentAlpha * 0.55})`);
          grad.addColorStop(0.7, `rgba(${p.r}, ${p.g}, ${p.b}, ${currentAlpha * 0.18})`);
          grad.addColorStop(1, `rgba(${p.r}, ${p.g}, ${p.b}, 0)`);
        } else {
          // Broad diffused loang bleed gradient
          grad.addColorStop(0, `rgba(${p.r}, ${p.g}, ${p.b}, ${currentAlpha * 0.55})`);
          grad.addColorStop(0.25, `rgba(${p.r}, ${p.g}, ${p.b}, ${currentAlpha * 0.38})`);
          grad.addColorStop(0.55, `rgba(${p.r}, ${p.g}, ${p.b}, ${currentAlpha * 0.18})`);
          grad.addColorStop(0.8, `rgba(${p.r}, ${p.g}, ${p.b}, ${currentAlpha * 0.05})`);
          grad.addColorStop(1, `rgba(${p.r}, ${p.g}, ${p.b}, 0)`);
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Soft ambient aura directly beneath cursor
      if (hasMoved) {
        const cursorGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 95);
        cursorGlow.addColorStop(0, isDark ? 'rgba(56, 189, 248, 0.22)' : 'rgba(14, 165, 233, 0.15)');
        cursorGlow.addColorStop(0.5, isDark ? 'rgba(6, 182, 212, 0.08)' : 'rgba(6, 182, 212, 0.05)');
        cursorGlow.addColorStop(1, 'rgba(6, 182, 212, 0)');

        ctx.fillStyle = cursorGlow;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 95, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300"
      aria-hidden="true"
    />
  );
};

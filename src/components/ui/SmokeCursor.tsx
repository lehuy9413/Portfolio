import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  decay: number;
  color: string;
}

export const SmokeCursor: React.FC = () => {
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

    const particles: Particle[] = [];
    const colors = [
      'rgba(147, 51, 234,', // purple-600
      'rgba(168, 85, 247,', // purple-500
      'rgba(99, 102, 241,',  // indigo-500
      'rgba(139, 92, 246,',  // violet-500
    ];

    let lastX = 0;
    let lastY = 0;

    const addSmokeParticle = (x: number, y: number, count = 2) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.8 + 0.2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const initialRadius = Math.random() * 18 + 14;

        particles.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: Math.cos(angle) * speed * 0.5,
          vy: Math.sin(angle) * speed * 0.5 - 0.35, // drifts slightly upward like smoke
          radius: initialRadius,
          maxRadius: initialRadius * 2.8,
          alpha: Math.random() * 0.18 + 0.12,
          decay: Math.random() * 0.008 + 0.006,
          color,
        });
      }

      if (particles.length > 90) {
        particles.splice(0, particles.length - 90);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.hypot(dx, dy);

      if (dist > 4) {
        const steps = Math.min(Math.floor(dist / 8), 4);
        for (let i = 0; i <= steps; i++) {
          const px = lastX + (dx * i) / (steps || 1);
          const py = lastY + (dy * i) / (steps || 1);
          addSmokeParticle(px, py, 1);
        }
      }

      lastX = x;
      lastY = y;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Smooth render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.radius += (p.maxRadius - p.radius) * 0.035;
        p.alpha -= p.decay;

        if (p.alpha <= 0.005 || p.radius >= p.maxRadius) {
          particles.splice(i, 1);
          continue;
        }

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius
        );

        gradient.addColorStop(0, `${p.color} ${p.alpha})`);
        gradient.addColorStop(0.5, `${p.color} ${p.alpha * 0.5})`);
        gradient.addColorStop(1, `${p.color} 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 opacity-90 transition-opacity duration-300"
      aria-hidden="true"
    />
  );
};

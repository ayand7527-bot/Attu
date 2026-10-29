/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  vx: number;
  vy: number;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulsePhase: number;
  hueShift: number; // For warm antique gold shimmer
}

export const ParticleCanvas: React.FC<{ density?: number; speedFactor?: number }> = ({
  density = 40,
  speedFactor = 0.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Generate gold dust particles
    const particleCount = prefersReducedMotion ? Math.floor(density / 3) : Math.min(density, Math.floor((width * height) / 25000));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseRadius = Math.random() * 1.8 + 0.6;
      const baseAlpha = Math.random() * 0.5 + 0.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: baseRadius,
        baseRadius,
        vx: (Math.random() - 0.5) * 0.3 * speedFactor,
        vy: -(Math.random() * 0.4 + 0.1) * speedFactor, // Drift gently upwards
        alpha: baseAlpha,
        baseAlpha,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
        hueShift: Math.random() > 0.6 ? 44 : 40, // 40-44 gold amber range
      });
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.pulsePhase += p.pulseSpeed;

          // Wrap around edges seamlessly
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          // Gentle breathing luminance
          p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * 0.15;
        }

        // Draw glowing particle
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        // Radial gold glow
        const glowRadius = p.radius * 3.5;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius);
        gradient.addColorStop(0, `hsla(${p.hueShift}, 68%, 68%, ${Math.max(0.1, p.alpha)})`);
        gradient.addColorStop(0.4, `hsla(${p.hueShift}, 60%, 55%, ${Math.max(0.05, p.alpha * 0.4)})`);
        gradient.addColorStop(1, `hsla(${p.hueShift}, 50%, 40%, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(p.x - glowRadius, p.y - glowRadius, glowRadius * 2, glowRadius * 2);

        // Core bright speck
        ctx.fillStyle = `rgba(255, 248, 220, ${Math.min(1, p.alpha + 0.2)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.6, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [density, speedFactor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};

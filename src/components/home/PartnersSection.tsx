"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const abstractIcons = [
  // Icon 1
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Icon 2
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  // Icon 3
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 3V21M15 3V21M3 9H21M3 15H21" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  // Icon 4
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Icon 5
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 3L4 9V21H20V9L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Icon 6
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8L12 12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  // Icon 7
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2L12 22M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  // Icon 8
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12H20M12 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
];

const AtomLogo = () => (
  <div className="relative w-24 h-24 flex items-center justify-center">
    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
    <svg viewBox="0 0 100 100" className="w-full h-full text-white relative z-10">
      <circle cx="50" cy="50" r="6" fill="currentColor" />
      <ellipse cx="50" cy="50" rx="35" ry="12" stroke="currentColor" strokeWidth="1.5" fill="none" className="rotate-[60deg] origin-center opacity-60" />
      <ellipse cx="50" cy="50" rx="35" ry="12" stroke="currentColor" strokeWidth="1.5" fill="none" className="rotate-[-60deg] origin-center opacity-60" />
      <ellipse cx="50" cy="50" rx="35" ry="12" stroke="currentColor" strokeWidth="1.5" fill="none" className="opacity-60" />
    </svg>
  </div>
);

const LCorner = ({ className }: { className?: string }) => (
  <div className={`absolute w-3 h-3 border-blue-500/50 ${className}`} />
);

const PartnerCard = ({ index }: { index: number }) => {
  const Icon = abstractIcons[index];
  return (
    <div className="relative w-full aspect-[2/1] group">
      {/* Blue L-corners */}
      <LCorner className="top-0 left-0 border-t-1 border-l-1" />
      <LCorner className="top-0 right-0 border-t-1 border-r-1" />
      <LCorner className="bottom-0 left-0 border-b-1 border-l-1" />
      <LCorner className="bottom-0 right-0 border-b-1 border-r-1" />

      {/* Glassmorphic Background with Dot Grid */}
      <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm border border-white/5 transition-all duration-500 group-hover:bg-zinc-800/60 flex items-center justify-center overflow-hidden">
        {/* Dot Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", 
            backgroundSize: "12px 12px" 
          }} 
        />
        
        <Icon className="w-10 h-10 text-zinc-500 group-hover:text-white transition-colors duration-500" />
      </div>
    </div>
  );
};

export function PartnersSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const logoRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<string[]>([]);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  useEffect(() => {
    const updatePaths = () => {
      if (!containerRef.current || !logoRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const logoRect = logoRef.current.getBoundingClientRect();
      const startX = logoRect.left + logoRect.width / 2 - containerRect.left;
      const startY = logoRect.top - containerRect.top;

      const newPaths = cardsRef.current.map((card) => {
        if (!card) return "";
        const cardRect = card.getBoundingClientRect();
        const endX = cardRect.left + cardRect.width / 2 - containerRect.left;
        const endY = cardRect.top + cardRect.height - containerRect.top;

        // Cubic Bezier calculation
        // Control points to create a smooth "S" curve
        // Start point: (startX, startY)
        // End point: (endX, endY)
        const cp1y = startY - (startY - endY) * 0.5;
        const cp2y = startY - (startY - endY) * 0.5;

        return `M ${startX} ${startY} C ${startX} ${cp1y}, ${endX} ${cp2y}, ${endX} ${endY}`;
      });

      setPaths(newPaths);
    };

    updatePaths();
    window.addEventListener("resize", updatePaths);
    return () => window.removeEventListener("resize", updatePaths);
  }, []);

  return (
    <section ref={containerRef} className="w-full py-32 bg-black flex flex-col items-center relative z-20 overflow-hidden">
      <div className="text-center mb-24 max-w-4xl px-8">
        <h2 className="text-5xl font-bold tracking-tight leading-tight">
          Powerful Solutions with <br /> Trusted Partners
        </h2>
        <p className="text-zinc-500 mt-6 text-lg font-medium">Elevate your cybersecurity to the highest level alongside the world's leading brands.</p>
      </div>

      <div className="w-full max-w-6xl px-8 relative">
        {/* SVG Overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ minHeight: "800px" }}>
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {paths.map((path, i) => (
            <React.Fragment key={i}>
              {/* Static background line */}
              <motion.path
                d={path}
                stroke="white"
                strokeWidth="1"
                fill="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 0.05 : 0 }}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
              {/* Animated tracer */}
              {isInView && (
                <motion.path
                  d={path}
                  stroke="#0055ff"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="40, 400"
                  filter="url(#glow)"
                  initial={{ strokeDashoffset: 440 }}
                  animate={{ strokeDashoffset: -440 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.2,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </svg>

        {/* 2x4 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 mb-48">
          {[...Array(8)].map((_, i) => (
            <div key={i} ref={(el) => { cardsRef.current[i] = el; }}>
              <PartnerCard index={i} />
            </div>
          ))}
        </div>

        {/* Bottom Logo */}
        <div className="flex justify-center relative z-10">
          <div ref={logoRef} className="animate-float">
            <AtomLogo />
          </div>
        </div>
      </div>
    </section>
  );
}

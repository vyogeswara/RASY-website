"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const abstractIcons = [
  // Icon 1: Flower/4 Petals
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 4C12 4 10 8 10 10C10 12 12 12 12 12C12 12 14 12 14 10C14 8 12 4 12 4Z" />
      <path d="M12 20C12 20 14 16 14 14C14 12 12 12 12 12C12 12 10 12 10 14C10 16 12 20 12 20Z" />
      <path d="M4 12C4 12 8 10 10 10C12 10 12 12 12 12C12 12 12 14 10 14C8 14 4 12 4 12Z" />
      <path d="M20 12C20 12 16 14 14 14C12 14 12 12 12 12C12 12 12 10 14 10C16 10 20 12 20 12Z" />
    </svg>
  ),
  // Icon 2: Double Chevron
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6 6L11 12L6 18H9L14 12L9 6H6Z" />
      <path d="M13 6L18 12L13 18H16L21 12L16 6H13Z" />
    </svg>
  ),
  // Icon 3: Cross/Sharp Petal
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" />
    </svg>
  ),
  // Icon 4: Clover shape
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="5" y="5" width="6" height="6" rx="3" />
      <rect x="13" y="5" width="6" height="6" rx="3" />
      <rect x="5" y="13" width="6" height="6" rx="3" />
      <rect x="13" y="13" width="6" height="6" rx="3" />
    </svg>
  ),
  // Icon 5: Asterisk
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 4V20M4 12H20M6.34 6.34L17.66 17.66M17.66 6.34L6.34 17.66" />
    </svg>
  ),
  // Icon 6: Link/Infinity
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M9 8H7C4.79 8 3 9.79 3 12C3 14.21 4.79 16 7 16H9" />
      <path d="M15 8H17C19.21 8 21 9.79 21 12C21 14.21 19.21 16 17 16H15" />
      <path d="M8 12H16" />
    </svg>
  ),
  // Icon 7: Aperture
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 4C14.07 4 15.94 4.78 17.37 6.07L13.5 12.78L7.14 9.1L8.5 6.72C9.53 4.98 10.65 4 12 4ZM4.78 7.37C5.83 6.07 7.21 5.09 8.78 4.45L10.5 7.42L12 10L6.78 13.01C5.22 11.72 4.22 9.68 4.07 7.37H4.78ZM6.07 17.37C4.78 15.94 4 14.07 4 12C4 10.65 4.98 9.53 6.72 8.5L9.1 7.14L12.78 13.5L6.07 17.37ZM12 20C9.93 20 8.06 19.22 6.63 17.93L10.5 11.22L16.86 14.9L15.5 17.28C14.47 19.02 13.35 20 12 20ZM19.22 16.63C18.17 17.93 16.79 18.91 15.22 19.55L13.5 16.58L12 14L17.22 10.99C18.78 12.28 19.78 14.32 19.93 16.63H19.22ZM17.93 6.63C19.22 8.06 20 9.93 20 12C20 13.35 19.02 14.47 17.28 15.5L14.9 16.86L11.22 10.5L17.93 6.63Z" />
    </svg>
  ),
  // Icon 8: Toggle
  (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="4" y="8" width="16" height="8" rx="4" opacity="0.3" />
      <circle cx="16" cy="12" r="3" />
    </svg>
  ),
];

const AtomLogo = () => (
  <div className="relative w-24 h-24 flex items-center justify-center">
    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
    <svg viewBox="0 0 100 100" className="w-full h-full text-white relative z-10">
      {/* Eye center */}
      <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="50" r="4" fill="currentColor" />
      
      {/* Orbitals */}
      <ellipse cx="50" cy="50" rx="38" ry="14" stroke="currentColor" strokeWidth="1.5" fill="none" className="rotate-[60deg] origin-center opacity-80" />
      <ellipse cx="50" cy="50" rx="38" ry="14" stroke="currentColor" strokeWidth="1.5" fill="none" className="rotate-[-60deg] origin-center opacity-80" />
      <ellipse cx="50" cy="50" rx="38" ry="14" stroke="currentColor" strokeWidth="1.5" fill="none" className="opacity-80" />
    </svg>
  </div>
);

const LCorner = ({ className }: { className?: string }) => (
  <div className={`absolute w-4 h-4 border-blue-500 border-2 ${className}`} />
);

const PartnerCard = ({ index }: { index: number }) => {
  const Icon = abstractIcons[index];
  return (
    <div className="relative w-full aspect-[2.4/1] group">
      {/* Blue L-corners */}
      <LCorner className="top-0 left-0 border-t border-l" />
      <LCorner className="top-0 right-0 border-t border-r" />
      <LCorner className="bottom-0 left-0 border-b border-l" />
      <LCorner className="bottom-0 right-0 border-b border-r" />

      {/* Connection Point Highlight */}
      <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_12px_#3b82f6] z-20" />

      {/* Card Content */}
      <div className="absolute inset-0 bg-[#0a0a0a] border border-white/5 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: "radial-gradient(circle, white 0.5px, transparent 0.5px)", 
            backgroundSize: "12px 12px" 
          }} 
        />
        
        <Icon className="w-10 h-10 text-zinc-600 group-hover:text-zinc-200 transition-all duration-500" />
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
      
      const logoCX = logoRect.left + logoRect.width / 2 - containerRect.left;
      const logoCY = logoRect.top - containerRect.top + 10;

      const newPaths = cardsRef.current.map((card) => {
        if (!card) return "";
        const cardRect = card.getBoundingClientRect();
        const startX = cardRect.left + cardRect.width / 2 - containerRect.left;
        const startY = cardRect.top + cardRect.height - containerRect.top;

        // Structured "Circuit" path: vertical then curve to logo
        const midY = startY + (logoCY - startY) * 0.4;
        
        return `M ${startX} ${startY} L ${startX} ${midY} C ${startX} ${logoCY}, ${logoCX} ${midY}, ${logoCX} ${logoCY}`;
      });

      setPaths(newPaths);
    };

    updatePaths();
    window.addEventListener("resize", updatePaths);
    const timer = setTimeout(updatePaths, 150);
    
    return () => {
      window.removeEventListener("resize", updatePaths);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full py-40 bg-black flex flex-col items-center relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.05),transparent_70%)]" />

      <div className="text-center mb-32 max-w-4xl px-8 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
          Live Circuit <br /> <span className="text-blue-500">Global Network</span>
        </h2>
      </div>

      <div className="w-full max-w-7xl px-8 relative">
        {/* SVG Overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-30" style={{ minHeight: "1000px" }}>
          <defs>
            <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Box to Logo Paths */}
          {paths.map((path, i) => (
            <React.Fragment key={`p-${i}`}>
              <path d={path} stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1.5" fill="none" />
              {isInView && (
                <motion.path
                  d={path}
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                  fill="none"
                  strokeDasharray="60, 1000"
                  filter="url(#neon-glow)"
                  initial={{ strokeDashoffset: 1000 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "linear", 
                    delay: i * 0.3 
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </svg>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-24 relative z-10 mb-48">
          {[...Array(8)].map((_, i) => (
            <div key={i} ref={(el) => { cardsRef.current[i] = el; }}>
              <PartnerCard index={i} />
            </div>
          ))}
        </div>

        {/* Central Logo (Destination) */}
        <div className="flex justify-center relative z-20 pb-20">
          <div ref={logoRef} className="relative">
            {/* Connection Hub */}
            <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_#3b82f6] z-40" />
            <AtomLogo />
          </div>
        </div>
      </div>
    </section>
  );
}


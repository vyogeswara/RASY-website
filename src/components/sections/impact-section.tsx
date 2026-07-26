"use client";

import { useRef, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function ImpactSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "start 20%"]
  });

  const fullText = "We help enterprises to reimagine security resilience with our Cybersecurity Platform, AI-Driven Solutions, and Intelligent Threat Defense. Unlock protection, automation, and innovation across every security layer.";
  const words = fullText.split(" ");
  const totalWords = words.length;

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 md:py-24 lg:py-32 bg-black overflow-hidden"
    >
      <style jsx>{`
        .impact-container {
          padding: 0 40px;
        }
        @media (max-width: 809px) {
          .impact-container {
            padding: 0 20px !important;
            flex-direction: column !important;
          }
          .impact-text {
            font-size: 22px !important;
            line-height: 1.35em !important;
            letter-spacing: -0.01em !important;
          }
          .globe-wrapper {
            width: min(78vw, 280px) !important;
            height: min(78vw, 280px) !important;
          }
        }
        @media (min-width: 810px) and (max-width: 1199px) {
          .impact-container {
            padding: 0 40px !important;
            flex-direction: column !important;
          }
          .impact-text {
            font-size: 36px !important;
            line-height: 1.2em !important;
          }
          .globe-wrapper {
            width: 340px !important;
            height: 340px !important;
          }
        }
      `}</style>

      <div className="impact-container max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

        {/* Left Content Column */}
        <div className="flex-1 lg:max-w-[720px] text-left order-1 z-10 w-full">
          <div
            className="impact-text font-normal text-white w-full"
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '48px',
              letterSpacing: '-0.03em',
              lineHeight: '1.2em',
              wordBreak: 'normal',
              overflowWrap: 'normal',
              width: '100%',
              maxWidth: '100%'
            }}
          >
            {words.map((word, i) => (
              <Word key={`word-${i}`} progress={scrollYProgress} index={i} total={totalWords}>
                {word}
              </Word>
            ))}
          </div>
        </div>

        {/* Right Visual Column - The "Bob" Rotating Globe */}
        <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end relative order-2 mt-8 lg:mt-0">
          <RotatingGlobe />
        </div>

      </div>

      {/* Background Ambient Glows - Constrained to prevent overflow */}
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-[#ff8c00]/5 blur-[100px] rounded-full pointer-events-none md:block hidden" />
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-[#00ccff]/5 blur-[100px] rounded-full pointer-events-none md:block hidden" />
    </section>
  );
}

const Word = ({ children, progress, index, total }: { children: ReactNode, progress: any, index: number, total: number }) => {
  const start = index / total;
  const end = Math.min(1, (index + 2) / total);

  const color = useTransform(progress, [start, end], ["#333333", "#ffffff"]);

  return (
    <motion.span
      style={{ color }}
      className="mr-[0.3em] inline-block whitespace-nowrap"
    >
      {children}
    </motion.span>
  );
};

const RotatingGlobe = () => {
  const [currentLogoIdx, setCurrentLogoIdx] = useState(0);
  const logos = [
    { name: "Banking", icon: <BankingIcon /> },
    { name: "Healthcare", icon: <HealthcareIcon /> },
    { name: "Government", icon: <GovernmentIcon /> },
    { name: "Energy", icon: <EnergyIcon /> },
    { name: "Technology", icon: <TechnologyIcon /> }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLogoIdx((prev) => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [logos.length]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="globe-wrapper relative w-[350px] h-[350px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] flex items-center justify-center"
    >
      {/* Outer Glow */}
      <div
        className="absolute inset-0 rounded-full blur-[60px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #00ccff, #ff8c00)',
        }}
      />

      {/* Native rotating globe-style visual */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="relative w-full h-full z-0 flex items-center justify-center"
      >
        <div className="relative h-[92%] w-[92%] rounded-full border border-white/10 bg-[radial-gradient(circle_at_34%_28%,rgba(255,205,125,0.45),transparent_20%),radial-gradient(circle_at_62%_58%,rgba(1,117,255,0.45),transparent_28%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),rgba(6,7,10,0.86)_60%,rgba(0,0,0,0.95)_100%)] shadow-[inset_0_0_70px_rgba(255,255,255,0.08),0_0_80px_rgba(1,117,255,0.16)]">
          <div className="absolute inset-[9%] rounded-full border border-white/10" />
          <div className="absolute left-[12%] right-[12%] top-1/2 h-px bg-white/15" />
          <div className="absolute bottom-[12%] top-[12%] left-1/2 w-px bg-white/15" />
          <div className="absolute inset-[18%] rounded-full border border-dashed border-white/10" />
        </div>
      </motion.div>

      {/* Logo Overlay - Centered on the globe */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLogoIdx}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <div className="mb-2 md:mb-3 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-100 md:scale-150 lg:scale-[1.8]">
              {logos[currentLogoIdx].icon}
            </div>
            <span className="text-white text-[18px] sm:text-[22px] md:text-[28px] lg:text-[36px] font-semibold tracking-[-0.01em] drop-shadow-2xl">
              {logos[currentLogoIdx].name}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const BankingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 8L4 18V22H44V18L24 8Z" fill="white" />
    <path d="M8 24H12V38H8V24ZM18 24H22V38H18V24ZM28 24H32V38H28V24ZM38 24H42V38H38V24Z" fill="white" />
    <rect x="4" y="38" width="40" height="4" fill="white" />
  </svg>
);

const HealthcareIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 8L24 40M8 24L40 24" stroke="white" strokeWidth="8" strokeLinecap="round" />
    <circle cx="24" cy="24" r="18" stroke="white" strokeWidth="3" />
  </svg>
);

const GovernmentIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L4 14V18H44V14L24 4Z" fill="white" />
    <rect x="10" y="20" width="28" height="20" stroke="white" strokeWidth="2" fill="none" />
    <path d="M18 20V40M30 20V40M10 30H38" stroke="white" strokeWidth="2" />
  </svg>
);

const EnergyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 4L12 24H24L20 44L36 24H24L28 4Z" fill="white" />
  </svg>
);

const TechnologyIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="36" height="24" rx="2" stroke="white" strokeWidth="3" fill="none" />
    <path d="M16 38L32 38M24 32V38" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <circle cx="24" cy="20" r="4" fill="white" />
  </svg>
);

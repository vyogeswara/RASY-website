"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Zap,
  Cpu,
  Network,
  Globe,
  Lock,
  Server,
  Chrome
} from "lucide-react";

// Brand SVGs to avoid lucide-react export issues
const GithubIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const DiscordIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="9" cy="12" r="1" />
    <circle cx="15" cy="12" r="1" />
    <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
    <path d="M7 16.5c3.5 1 6.5 1 10 0" />
    <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.333.5-8.5-1-11.5-1-1-5.5-1-8 0-2.5-1-7-1-8 0-1.5 3-1.667 10.167-1 11.5.667 1.333 2 3 3.5 3 .5 0 2-2 2-3" />
  </svg>
);

const SlackIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="3" height="8" x="13" y="2" rx="1.5" />
    <path d="M19 8.5V10h-1.5A1.5 1.5 0 1 1 19 8.5z" />
    <rect width="8" height="3" x="14" y="13" rx="1.5" />
    <path d="M15.5 19H14v1.5a1.5 1.5 0 1 1 1.5-1.5z" />
    <rect width="3" height="8" x="8" y="14" rx="1.5" />
    <path d="M5 15.5V14h1.5A1.5 1.5 0 1 1 5 15.5z" />
    <rect width="8" height="3" x="2" y="8" rx="1.5" />
    <path d="M8.5 5H10V3.5A1.5 1.5 0 1 1 8.5 5z" />
  </svg>
);

const FigmaIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
  </svg>
);

const partnerIcons = [
  // AI Services Row
  { Icon: Globe, name: "Web Design" },
  { Icon: Zap, name: "Chatbots" },
  { Icon: Cpu, name: "AI Automation" },
  { Icon: Network, name: "Digital Marketing" },
  // Cybersecurity Row
  { Icon: Shield, name: "Threat Intel" },
  { Icon: Lock, name: "IAM" },
  { Icon: Server, name: "SOC" },
  { Icon: Shield, name: "Cloud Security" },
];

const PartnerCard = ({ Icon, name }: { Icon: any; name: string }) => (
  <div className="relative group w-full aspect-square md:aspect-[1.5/1]">
    <div className="absolute inset-0 bg-[#0a0a0a] border border-white/5 group-hover:border-blue-500/30 transition-all duration-500 flex items-center justify-center">
      <Icon className="w-8 h-8 text-zinc-600 group-hover:text-white transition-all duration-500" />
    </div>
    <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-blue-500/30 group-hover:border-blue-500 transition-all" />
  </div>
);

export function PartnersSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const logoRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<string[]>([]);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  useEffect(() => {
    const updatePaths = () => {
      if (!containerRef.current || !logoRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const logoRect = logoRef.current.getBoundingClientRect();

      const logoCX = logoRect.left + logoRect.width / 2 - containerRect.left;
      const logoCY = logoRect.top - containerRect.top + 20;

      const newPaths = cardsRef.current.map((card) => {
        if (!card) return "";
        const cardRect = card.getBoundingClientRect();
        const startX = cardRect.left + cardRect.width / 2 - containerRect.left;
        const startY = cardRect.top + cardRect.height - containerRect.top;

        // Converging thin lines
        return `M ${startX} ${startY} C ${startX} ${startY + 100}, ${logoCX} ${logoCY - 100}, ${logoCX} ${logoCY}`;
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
    <section ref={containerRef} className="w-full py-32 bg-black flex flex-col items-center relative z-20 overflow-hidden">
      <div className="text-center mb-24 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          AI Services & <br /> <span className="text-zinc-500">Cybersecurity</span>
        </h2>
      </div>

      <div className="w-full max-w-5xl px-8 relative">
        {/* SVG Overlay (Thin lines) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ minHeight: "800px" }}>
          {paths.map((path, i) => (
            <motion.path
              key={`p-${i}`}
              d={path}
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
          ))}
        </svg>

        {/* Partner Grid - 2 Rows of 4 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 mb-32">
          {partnerIcons.slice(0, 4).map((p, i) => (
            <div key={i} ref={(el) => { cardsRef.current[i] = el; }}>
              <PartnerCard Icon={p.Icon} name={p.name} />
            </div>
          ))}
          {partnerIcons.slice(4, 8).map((p, i) => (
            <div key={i + 4} ref={(el) => { cardsRef.current[i + 4] = el; }}>
              <PartnerCard Icon={p.Icon} name={p.name} />
            </div>
          ))}
        </div>

        {/* Central Logo */}
        <div className="flex justify-center relative z-10">
          <div ref={logoRef} className="relative w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full" />
            <svg viewBox="0 0 100 100" className="w-full h-full text-white relative z-10 opacity-80">
              <path d="M50 15L85 30V55C85 75 50 85 50 85C50 85 15 75 15 55V30L50 15Z" fill="none" stroke="currentColor" strokeWidth="4" />
              <circle cx="50" cy="50" r="10" fill="currentColor" className="animate-pulse" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

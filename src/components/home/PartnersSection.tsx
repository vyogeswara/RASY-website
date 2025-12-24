"use client";

import { Shield, Lock, Server, Globe, Zap, Search, Cpu, Database } from "lucide-react";

const partners = [
  { name: "Logo 1", icon: Shield },
  { name: "Logo 2", icon: Lock },
  { name: "Logo 3", icon: Server },
  { name: "Logo 4", icon: Globe },
  { name: "Logo 5", icon: Zap },
  { name: "Logo 6", icon: Search },
  { name: "Logo 7", icon: Cpu },
  { name: "Logo 8", icon: Database },
];

export function PartnersSection() {
  return (
    <section className="w-full py-32 bg-black flex flex-col items-center relative z-20 overflow-hidden">
      <div className="text-center mb-24 max-w-4xl px-8">
        <h2 className="text-5xl font-bold tracking-tight leading-tight">
          Powerful Solutions with <br /> Trusted Partners
        </h2>
        <p className="text-zinc-500 mt-6 text-lg font-medium">Elevate your cybersecurity to the highest level alongside the world's leading brands.</p>
      </div>

      <div className="w-full max-w-7xl px-8 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] pointer-events-none opacity-20 z-0">
          <svg width="100%" height="100%" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M500 500V350" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M500 350L300 150" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M500 350L700 150" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M500 350L100 150" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M500 350L900 150" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M500 350L400 150" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M500 350L600 150" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M500 350L200 150" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M500 350L800 150" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-24 gap-x-12 relative z-10">
          {partners.map((partner, i) => (
            <div key={i} className="flex items-center justify-center">
              <partner.icon className="w-12 h-12 text-zinc-600 hover:text-white transition-colors cursor-pointer" />
            </div>
          ))}
        </div>

        <div className="mt-32 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm relative animate-float">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2"/>
              <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
              <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7"/>
              <circle cx="16" cy="16" r="2" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

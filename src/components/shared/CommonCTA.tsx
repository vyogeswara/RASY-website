"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CommonCTAProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
}

export function CommonCTA({ 
  title = "Stay Ahead of Cyber", 
  subtitle = "Threat", 
  description = "Partner with CyberShade to protect your business from modern cyber threats. Our experts are ready to guide you.",
  buttonText = "Get in Touch" 
}: CommonCTAProps) {
  return (
    <section className="w-full py-32 px-8 bg-black flex justify-center">
      <div className="w-full max-w-7xl rounded-[40px] bg-gradient-to-b from-blue-900/40 to-black border border-white/10 p-16 md:p-32 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-sm opacity-20" />
        
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-4 text-white">
            {title}
          </h2>
          {subtitle && (
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-10 text-white/40">
              {subtitle}
            </h3>
          )}
          
          <p className="text-zinc-400 text-lg md:text-xl font-medium mb-12 max-w-2xl">
            {description}
          </p>
          
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-none px-12 py-7 text-sm font-bold tracking-tight transition-all h-auto">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}

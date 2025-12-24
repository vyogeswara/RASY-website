"use client";

import { motion } from "framer-motion";
import { Zap, Lock, Globe, Server, Cpu, Database, Shield, Search } from "lucide-react";

const orbitIcons = [Zap, Lock, Globe, Server, Cpu, Database, Shield, Search];

export function CircularOrbit() {
  return (
    <section className="w-full py-40 px-8 bg-black flex flex-col items-center overflow-hidden">
      <div className="text-center mb-32 max-w-3xl">
        <h2 className="text-5xl font-bold tracking-tight mb-8">Take Security to the Next Level</h2>
        <p className="text-zinc-500 text-lg font-medium">Build a secure foundation for your business with our comprehensive suite of security solutions.</p>
      </div>

      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-white/5" />
        {/* Inner Ring */}
        <div className="absolute inset-[15%] rounded-full border border-white/5" />
        
        {/* Center Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.4)] z-20">
          <Shield className="w-10 h-10 text-white" />
        </div>

        {/* Orbiting Elements */}
        {orbitIcons.map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
            style={{ width: "100%", height: "100%" }}
          >
            <div 
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center absolute shadow-2xl"
              style={{
                top: "0",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(0deg)"
              }}
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-zinc-500" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-32 text-center flex flex-col items-center">
         <div className="flex flex-wrap justify-center gap-4 mb-12">
           {["Learn Security", "Latest Methods", "Advanced Threat Mitigation", "Compliance Management"].map((tag) => (
             <span key={tag} className="px-5 py-2.5 border border-white/10 bg-white/5 text-[10px] font-bold tracking-widest uppercase text-zinc-400">
               {tag}
             </span>
           ))}
         </div>
         <p className="text-zinc-600 text-sm font-medium tracking-wide">Access Secured. Your data, safely locked in.</p>
      </div>
    </section>
  );
}

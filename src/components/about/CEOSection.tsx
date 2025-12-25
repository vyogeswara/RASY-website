"use client";

import { Target } from "lucide-react";

export function CEOSection() {
  return (
    <section className="w-full py-40 px-8 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold tracking-tight mb-20">From Our CEO</h2>

        <div className="w-full max-w-5xl corner-border p-12 md:p-24 bg-zinc-900/40 backdrop-blur-md border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid-sm opacity-10" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-12">
              <Target className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">A Note from Our Leadership</h3>

            <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed mb-16 max-w-4xl">
              At RASY, we believe that the fusion of AI innovation and robust cybersecurity creates the foundation for digital transformation. Our mission is to empower organizations with intelligent security solutions and cutting-edge AI services. Every solution we build is designed to help businesses protect their assets while unlocking new opportunities for growth.
            </p>

            <div className="flex flex-col items-center">
              <p className="text-2xl font-serif italic text-white mb-2">Yogeswara Rao Veeravalli</p>
              <p className="text-xs font-bold tracking-widest text-zinc-600 uppercase">FOUNDER & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

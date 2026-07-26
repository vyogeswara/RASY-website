"use client";

import { motion } from "framer-motion";
import { Layers3 } from "lucide-react";
import { RasyGlow, RasyIconBadge } from "@/components/rasy/native";

export function AIHero() {
  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden bg-black">
      <RasyGlow className="left-[-12%] top-[-20%]" color="blue" />
      <RasyGlow className="right-[-8%] top-[18%]" color="gold" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative z-10 flex w-full max-w-[1200px] flex-col items-center gap-6 px-5 pb-16 pt-28 text-center sm:px-6 md:px-10 md:pb-20 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"
        >
          <RasyIconBadge icon={Layers3} size="sm" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d1d4e3]">Services</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="max-w-[820px] text-[40px] font-medium leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[82px]"
        >
          Comprehensive Cybersecurity & AI Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="max-w-[620px] text-base leading-relaxed text-[#d1d4e3] md:text-lg"
        >
          Explore our integrated portfolio of cybersecurity and AI services designed to protect and transform your enterprise.
        </motion.p>
      </div>
    </section>
  );
}

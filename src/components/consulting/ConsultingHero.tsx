"use client";

import { motion } from "framer-motion";

export function ConsultingHero() {
  return (
    <section className="relative w-full py-40 px-8 flex flex-col items-center bg-black hero-gradient-consulting overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-bold tracking-tighter mb-10"
        >
          Consulting
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white text-lg md:text-2xl font-bold tracking-tight leading-relaxed max-w-2xl mx-auto"
        >
          We provide guidance to help your business comply with standards such as ISO/IEC 27001, ISO 22301, and more.
        </motion.p>
      </div>
    </section>
  );
}

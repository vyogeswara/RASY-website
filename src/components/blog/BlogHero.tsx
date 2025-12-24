"use client";

import { motion } from "framer-motion";

export function BlogHero() {
  return (
    <section 
      className="relative w-full py-40 px-8 flex flex-col items-center overflow-hidden"
      style={{
        backgroundColor: '#000000',
        backgroundImage: `
          radial-gradient(ellipse at top center, #6b21a8 0%, transparent 60%)
        `,
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-bold tracking-tighter mb-10"
        >
          Blog
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white text-lg md:text-2xl font-bold tracking-tight leading-relaxed max-w-2xl mx-auto"
        >
          Insights, strategies, and the latest in cybersecurity — <br /> curated by experts, crafted for professionals.
        </motion.p>
      </div>
    </section>
  );
}

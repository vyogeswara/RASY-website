"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative w-full py-40 px-8 flex flex-col items-center bg-black hero-gradient-about overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-bold tracking-tighter mb-10"
        >
          About
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg md:text-2xl font-medium leading-relaxed"
        >
          Join a team that's shaping the future of digital defense — <br /> explore open roles and grow with us.
        </motion.p>
      </div>
    </section>
  );
}

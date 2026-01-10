"use client";

import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* === BACKGROUND ATMOSPHERE === */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">

        {/* Base gradient for subtle depth */}
        <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-transparent z-0" />

        {/* MAIN GRADIENT FLOW - Top Right (Dam Water Effect) */}
        {/* This single element will create the orange-to-pink transition */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            x: [0, -15, 0],
            y: [0, 5, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[100vw] h-[100vh] 
                     bg-gradient-to-bl 
                     from-[#1a1a1a] 
                     via-[#ff0066] 
                     to-[#ff8c00] 
                     rounded-[30%_70%_70%_30%_/60%_40%_60%_40%] 
                     blur-[150px] 
                     opacity-90 
                     mix-blend-screen"
        />

        {/* Ice Smoke Texture - Increased visibility */}
        <div
          className="absolute inset-0 z-0 opacity-[0.25] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.45' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* === HERO CONTENT === */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-bold tracking-tight mb-8 text-white drop-shadow-2xl"
        >
          Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="text-white/90 text-xl md:text-2xl font-medium tracking-wide leading-relaxed max-w-2xl mx-auto"
        >
          Secure your digital infrastructure with our tailored, high-impact cybersecurity solutions.
        </motion.p>
      </div>
    </section>
  );
}
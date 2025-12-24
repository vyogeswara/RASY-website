"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-40 px-8 overflow-hidden bg-black">
      {/* Sharp Rays */}
      <div className="absolute top-[-20%] left-[-10%] w-[150%] h-[150%] pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full glow-ray-sharp rotate-[30deg] opacity-60" />
        <div className="absolute top-0 left-[10%] w-full h-full glow-ray-sharp rotate-[20deg] opacity-40" />
      </div>

      {/* Planet Arc & Asset */}
      <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 w-[180%] aspect-[2/1] pointer-events-none z-10">
        <div className="absolute inset-0 planet-arc opacity-60" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-full">
          <Image 
            src="https://res.cloudinary.com/dslutbftw/image/upload/v1766544779/CCqBJMabxVDE9sutmlyZL4CF8k_qvd4bm.avif"
            alt="Cyber Planet"
            fill
            className="object-contain object-bottom opacity-90"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="corner-border dot-grid-sm bg-black/40 backdrop-blur-md px-6 py-3 mb-10 border border-white/5"
        >
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_#22c55e]" />
            <span className="text-xs font-bold tracking-[0.3em] text-white uppercase">System Security: ACTIVE</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-[130px] font-bold leading-[0.8] tracking-tighter mb-12"
        >
          SECURE YOUR <br /> DIGITAL WORLD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-zinc-500 text-lg md:text-2xl max-w-4xl mb-16 font-medium leading-relaxed"
        >
          Modern and powerful security solutions to protect against cyber threats. <br className="hidden md:block" />
          Designed to safeguard your data, systems, and privacy. Stay secure now!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/services">
            <Button variant="link" className="text-white font-bold tracking-tight flex items-center gap-2 group p-0">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

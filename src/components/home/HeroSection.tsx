"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

function GridTracers() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = 850;
    const gridSize = 40;

    interface Tracer {
      x: number;
      y: number;
      length: number;
      speed: number;
      vertical: boolean;
      opacity: number;
    }

    let tracers: Tracer[] = [];

    const createTracer = () => {
      const vertical = Math.random() > 0.5;
      const x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
      const y = Math.floor(Math.random() * (height / gridSize)) * gridSize;
      
      return {
        x,
        y,
        length: Math.random() * 100 + 50,
        speed: Math.random() * 4 + 2,
        vertical,
        opacity: Math.random() * 0.5 + 0.2
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw static grid
      ctx.strokeStyle = "rgba(128, 128, 128, 0.1)";
      ctx.lineWidth = 1;

      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw tracers
      if (tracers.length < 15 && Math.random() > 0.95) {
        tracers.push(createTracer());
      }

      tracers.forEach((t, i) => {
        const gradient = t.vertical 
          ? ctx.createLinearGradient(t.x, t.y, t.x, t.y + t.length)
          : ctx.createLinearGradient(t.x, t.y, t.x + t.length, t.y);
        
        gradient.addColorStop(0, `rgba(0, 242, 255, ${t.opacity})`);
        gradient.addColorStop(1, "transparent");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(t.x, t.y);
        if (t.vertical) {
          ctx.lineTo(t.x, t.y + t.length);
          t.y += t.speed;
        } else {
          ctx.lineTo(t.x + t.length, t.y);
          t.x += t.speed;
        }
        ctx.stroke();

        if (t.x > width || t.y > height) {
          tracers.splice(i, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = 850;
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />;
}

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[850px] flex flex-col items-center justify-center px-[5%] overflow-hidden bg-[#000000]">
      {/* Layer 5: God Rays */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] god-ray animate-atmospheric" />
      </div>

      {/* Layer 3: Data Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <GridTracers />
      </div>

      {/* Layer 4: Horizontal Line */}
      <div className="absolute bottom-[25%] left-0 w-full border-b border-[#00f2ff]/30 z-20" />

      {/* Layer 2: Planetary Sphere */}
      <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[150%] h-[40%] pointer-events-none z-10 overflow-hidden">
        <div className="absolute inset-0 planetary-sphere" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[200%] opacity-90">
          <Image 
            src="https://res.cloudinary.com/dslutbftw/image/upload/v1766544779/CCqBJMabxVDE9sutmlyZL4CF8k_qvd4bm.avif"
            alt="Cyber Planet"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-30 flex flex-col items-center text-center max-w-[1400px]">
        {/* A. System Security Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group relative flex items-center gap-3 px-4 h-8 mt-[120px] mb-10 border border-zinc-800 bg-black/60 backdrop-blur-xl matrix-dots hover:border-[#00f2ff] transition-colors duration-300"
        >
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 bg-[#00ff00] rounded-full" />
            <div className="ripple-pulse" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/80 uppercase">System Security: ACTIVE</span>
        </motion.div>

        {/* B. Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-[110px] font-[800] leading-[0.9] tracking-tighter mb-10 text-white uppercase text-shadow-[0_0_30px_rgba(0,100,255,0.4)]"
          style={{ textShadow: "0 0 30px rgba(0,100,255,0.4)" }}
        >
          SECURE YOUR <br /> DIGITAL WORLD
        </motion.h1>

        {/* C. Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/85 text-lg md:text-xl max-w-[600px] mb-12 font-medium leading-relaxed"
        >
          Modern and powerful security solutions to protect against cyber threats. 
          Designed to safeguard your data, systems, and privacy. Stay secure now!
        </motion.p>

        {/* D. CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/services">
            <Button 
              className="px-8 h-12 bg-transparent border border-white hover:bg-white/10 text-white rounded-none transition-all duration-300"
            >
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

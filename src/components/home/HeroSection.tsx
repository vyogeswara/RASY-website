"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
    const gridSize = 160; // Larger grid like in images

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
        length: Math.random() * 200 + 100,
        speed: Math.random() * 2 + 1,
        vertical,
        opacity: Math.random() * 0.4 + 0.1
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw static grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
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
      if (tracers.length < 8 && Math.random() > 0.98) {
        tracers.push(createTracer());
      }

      tracers.forEach((t, i) => {
        ctx.beginPath();
        const gradient = t.vertical 
          ? ctx.createLinearGradient(t.x, t.y, t.x, t.y + t.length)
          : ctx.createLinearGradient(t.x, t.y, t.x + t.length, t.y);
        
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.5, `rgba(0, 112, 255, ${t.opacity})`);
        gradient.addColorStop(1, "transparent");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(t.x, t.y);
        
        if (t.vertical) {
          ctx.lineTo(t.x, t.y + t.length);
          t.y += t.speed;
          if (t.y > height) tracers.splice(i, 1);
        } else {
          ctx.lineTo(t.x + t.length, t.y);
          t.x += t.speed;
          if (t.x > width) tracers.splice(i, 1);
        }
        ctx.stroke();
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
    <section className="relative w-full h-screen min-h-[850px] flex flex-col items-center justify-start px-[5%] overflow-hidden bg-[#000000]">
      {/* Layer 5: God Rays (Multiple beams for depth) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
        <div className="god-ray-beam opacity-40 animate-atmospheric" style={{ transform: 'rotate(-5deg)' }} />
        <div className="god-ray-beam opacity-30 animate-atmospheric" style={{ transform: 'rotate(10deg)', animationDelay: '-2s' }} />
        <div className="god-ray-beam opacity-20 animate-atmospheric" style={{ transform: 'rotate(25deg)', animationDelay: '-5s' }} />
      </div>

      {/* Layer 3: Active Data Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <GridTracers />
      </div>

      {/* Layer 4: Horizontal Ground Line */}
      <div className="absolute bottom-[20%] left-0 w-full ground-line z-20" />

      {/* Layer 2: Planetary Sphere (The Horizon) */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[180%] h-[50%] pointer-events-none z-10 overflow-hidden">
        {/* The large elliptical glow arc */}
        <div className="absolute inset-0 planetary-glow-arc opacity-60" />
        
        {/* The actual planet asset positioned for the horizon curve */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[70%] h-[150%] opacity-100">
          <Image 
            src="https://res.cloudinary.com/dslutbftw/image/upload/v1766544779/CCqBJMabxVDE9sutmlyZL4CF8k_qvd4bm.avif"
            alt="Cyber Horizon"
            fill
            className="object-contain object-bottom scale-110"
            priority
          />
        </div>
      </div>

      {/* Hero Content Stack */}
      <div className="relative z-30 flex flex-col items-center text-center max-w-[1400px] w-full pt-[120px]">
        
        {/* A. System Security Badge (Centered and Styled per Image 3) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group relative flex items-center gap-3 px-6 h-10 mb-24 bg-black/80 backdrop-blur-xl border border-white/5 hover:border-blue-500/50 transition-all duration-500"
        >
          {/* Micro-dot matrix background */}
          <div className="absolute inset-0 matrix-dots opacity-30" />
          
          {/* Blue Corner Markers */}
          <div className="badge-corner-marker badge-corner-tl" />
          <div className="badge-corner-marker badge-corner-tr" />
          <div className="badge-corner-marker badge-corner-bl" />
          <div className="badge-corner-marker badge-corner-br" />

          {/* Pulsing Indicator */}
          <div className="relative w-2.5 h-2.5">
            <div className="absolute inset-0 bg-[#00ff00] rounded-full shadow-[0_0_8px_#00ff00]" />
            <div className="ripple-pulse" />
          </div>
          
          <span className="text-[11px] font-bold tracking-[0.4em] text-white uppercase relative z-10">
            System Security: ACTIVE
          </span>
        </motion.div>

        {/* Headline and Subtext (Positioned lower to interact with planetary arc) */}
        <div className="flex flex-col items-center mt-auto mb-[15vh]">
          {/* B. Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[48px] md:text-[100px] font-[800] leading-[1] tracking-tighter mb-8 text-white uppercase"
            style={{ 
              textShadow: "0 0 40px rgba(0,100,255,0.6)",
              fontFamily: "'Space Grotesk', sans-serif"
            }}
          >
            SECURE YOUR <br /> DIGITAL WORLD
          </motion.h1>

          {/* C. Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-[650px] mb-12 font-medium leading-relaxed tracking-tight"
          >
            Modern and powerful security solutions to protect against cyber threats. 
            Designed to safeguard your data, systems, and privacy. Stay secure now!
          </motion.p>

          {/* D. CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/services">
              <div className="relative group cursor-pointer">
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-blue-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Button 
                  className="relative px-10 h-14 bg-transparent border border-white/20 hover:border-white/100 text-white rounded-none transition-all duration-300 text-base font-bold uppercase tracking-widest"
                >
                  Get Started
                </Button>
                {/* Tiny corner lines for button */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

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
    let height = canvas.height = 1000;
    const gridSize = 120; 

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
        length: Math.random() * 300 + 150,
        speed: Math.random() * 4 + 2,
        vertical,
        opacity: Math.random() * 0.5 + 0.2
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw subtle grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
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
      if (tracers.length < 12 && Math.random() > 0.95) {
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
      height = canvas.height = 1000;
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />;
}

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[900px] flex flex-col items-center justify-start overflow-hidden bg-[#000000]">
      {/* 1. Background Grid & Tracers */}
      <div className="absolute inset-0 pointer-events-none">
        <GridTracers />
      </div>

      {/* 2. Volumetric God Rays (Top Left) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
        <div className="absolute top-0 left-0 w-[80%] h-[80%] opacity-40 animate-atmospheric" 
          style={{ 
            background: 'conic-gradient(from 140deg at 0% 0%, transparent 0deg, rgba(0, 112, 255, 0.15) 10deg, rgba(0, 242, 255, 0.2) 20deg, rgba(0, 112, 255, 0.1) 30deg, transparent 40deg)',
            filter: 'blur(60px)',
            transformOrigin: 'top left'
          }} 
        />
        <div className="absolute top-0 left-0 w-[60%] h-[60%] opacity-30 animate-atmospheric" 
          style={{ 
            background: 'conic-gradient(from 150deg at 0% 0%, transparent 0deg, rgba(0, 112, 255, 0.1) 8deg, rgba(0, 242, 255, 0.15) 15deg, transparent 25deg)',
            filter: 'blur(40px)',
            transformOrigin: 'top left',
            animationDelay: '-3s'
          }} 
        />
      </div>

      {/* 3. Massive Planetary Horizon (Bottom) */}
      <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-[160%] h-[60%] pointer-events-none z-10">
        {/* Intense Blue Glow Arc */}
        <div className="absolute inset-0 bg-radial-[50%_100%] from-[#0044ff]/40 via-transparent to-transparent blur-[80px] opacity-80" />
        
        {/* Planet Asset */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full">
          <Image 
            src="https://res.cloudinary.com/dslutbftw/image/upload/v1766544779/CCqBJMabxVDE9sutmlyZL4CF8k_qvd4bm.avif"
            alt="Cyber Planet Horizon"
            fill
            className="object-contain object-bottom scale-110 translate-y-[5%]"
            priority
          />
        </div>

        {/* Sharp Horizontal Ground Line */}
        <div className="absolute top-[65%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent z-20" />
      </div>

      {/* 4. Content Stack */}
      <div className="relative z-30 flex flex-col items-center text-center w-full pt-[160px] px-6">
        
        {/* A. System Security Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative flex items-center gap-3 px-8 h-12 mb-20 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5"
        >
          {/* Dot Matrix Texture */}
          <div className="absolute inset-0 matrix-dots opacity-20 pointer-events-none" />
          
          {/* Blue Corner L-Markers */}
          <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-[#0070FF]" />
          <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-[#0070FF]" />
          <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-[#0070FF]" />
          <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-[#0070FF]" />

          {/* Status Indicator */}
          <div className="relative w-3 h-3">
            <div className="absolute inset-0 bg-[#00ff00] rounded-full shadow-[0_0_12px_#00ff00]" />
            <div className="absolute inset-[-4px] border border-[#00ff00]/40 rounded-full animate-ping" />
          </div>
          
          <span className="text-[13px] font-bold tracking-[0.3em] text-white uppercase relative z-10">
            System Security: ACTIVE
          </span>
        </motion.div>

        {/* B. Main Headline (Positioned above the planet's crest) */}
        <div className="flex flex-col items-center max-w-[1200px]">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[60px] md:text-[110px] font-black leading-[0.95] tracking-[-0.04em] mb-10 text-white uppercase"
            style={{ 
              textShadow: "0 0 50px rgba(0,100,255,0.4)",
              fontFamily: "'Space Grotesk', sans-serif"
            }}
          >
            SECURE YOUR <br /> 
            <span className="text-white">DIGITAL WORLD</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl max-w-[700px] mb-14 font-medium leading-relaxed"
          >
            Modern and powerful security solutions to protect against cyber threats. 
            Designed to safeguard your data, systems, and privacy. Stay secure now!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/services">
              <div className="relative group">
                {/* Button Glow */}
                <div className="absolute inset-[-10px] bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <Button 
                  className="relative px-12 h-16 bg-transparent border border-white/30 hover:border-white text-white rounded-none transition-all duration-300 text-base font-black uppercase tracking-[0.2em]"
                >
                  Get Started
                </Button>
                
                {/* Tiny accent corners for button */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

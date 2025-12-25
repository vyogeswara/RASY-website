"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

// --- Grid Component ---
function GridTracers() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // SIZING FIX: Use the PARENT element's size, not the window size.
    // This ensures the grid matches the section height (e.g. 900px) 
    // even if the viewport is smaller (e.g. 700px).
    const updateSize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    // Initial size set
    updateSize();

    // Variables for the animation loop
    let width = canvas.width;
    let height = canvas.height;

    // --- 10x5 Grid Configuration ---
    const navHeight = 80;
    const cols = 10;
    const rows = 5;

    // Recalculate cell size on resize
    const calculateGrid = () => {
      width = canvas.width;
      height = canvas.height;
    };

    interface Tracer {
      x: number;
      y: number;
      speed: number;
      vertical: boolean;
      opacity: number;
      tailLength: number;
    }

    let tracers: Tracer[] = [];

    const createTracer = () => {
      // Recalculate dimensions for the new tracer
      const colWidth = width / cols;
      const availableHeight = height - navHeight;
      const rowHeight = availableHeight / rows;

      const vertical = Math.random() > 0.5;

      const xIndex = Math.floor(Math.random() * (cols + 1));
      const yIndex = Math.floor(Math.random() * (rows + 1));

      const x = xIndex * colWidth;
      const y = navHeight + (yIndex * rowHeight);

      return {
        x,
        y,
        speed: Math.random() * 2 + 1,
        vertical,
        opacity: Math.random() * 0.5 + 0.2,
        tailLength: 200,
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Re-calculate dimensions every frame or rely on resize (Resize is better for perf, but strict calculation here ensures no drift)
      const colWidth = width / cols;
      const availableHeight = height - navHeight;
      const rowHeight = availableHeight / rows;

      // 1. Draw Static Grid Lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;

      // Vertical Lines: Draw from Nav (80px) to Height (Bottom)
      // Since 'height' is now the full section height, this will fill the gap.
      for (let i = 0; i <= cols; i++) {
        const x = i * colWidth;
        ctx.beginPath();
        ctx.moveTo(x, navHeight);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal Lines
      for (let i = 0; i < rows; i++) {
        const y = navHeight + (i * rowHeight);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw Tracers
      if (tracers.length < 5 && Math.random() > 0.98) {
        tracers.push(createTracer());
      }

      tracers.forEach((t, i) => {
        const gradient = t.vertical
          ? ctx.createLinearGradient(t.x, t.y - t.tailLength, t.x, t.y)
          : ctx.createLinearGradient(t.x - t.tailLength, t.y, t.x, t.y);

        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(1, `rgba(29, 100, 255, ${t.opacity})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();

        if (t.vertical) {
          ctx.moveTo(t.x, t.y - t.tailLength);
          ctx.lineTo(t.x, t.y);
          t.y += t.speed;
          if (t.y > height + t.tailLength) tracers.splice(i, 1);
        } else {
          ctx.moveTo(t.x - t.tailLength, t.y);
          ctx.lineTo(t.x, t.y);
          t.x += t.speed;
          if (t.x > width + t.tailLength) tracers.splice(i, 1);
        }
        ctx.stroke();

        ctx.fillStyle = `rgba(29, 100, 255, ${t.opacity})`;
        ctx.beginPath();
        ctx.arc(t.x, t.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      updateSize();
      calculateGrid();
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />;
}

// --- Main Hero Component ---
export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[900px] flex flex-col items-center justify-start overflow-hidden bg-[#020202] pt-[80px]">

      {/* 1. BACKGROUND */}
      <div className="absolute inset-0 z-0 bg-[#020202]" />

      {/* 2. GRID LAYER - Bumped to Z-20 to sit above atmosphere/planet */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="absolute inset-0 z-20"
      >
        <GridTracers />
      </motion.div>


      {/* 3. ATMOSPHERE / RAY EFFECT (Z-10, Below Grid) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        {/* Soft Ambient Top Glow */}
        <div
          className="absolute top-0 left-0 w-full h-[60%] opacity-30"
          style={{
            background: "linear-gradient(180deg, rgba(29, 100, 255, 0.15) 0%, transparent 100%)",
          }}
        />
        {/* The God Ray Beam */}
        <div
          className="absolute top-[-100px] left-[-100px] w-[500px] h-[1000px] bg-gradient-to-b from-[#1D64FF]/25 to-transparent blur-[80px] transform -rotate-[25deg] origin-top-left"
        />
      </motion.div>


      {/* 4. PLANET IMAGE (Z-0, Below Everything) */}
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-full h-full z-0 pointer-events-none flex items-end justify-center"
      >
        <Image
          src="https://res.cloudinary.com/dslutbftw/image/upload/v1766544779/CCqBJMabxVDE9sutmlyZL4CF8k_qvd4bm.avif"
          alt="Planet Horizon"
          width={1920}
          height={1080}
          className="w-full max-w-[1920px] object-contain object-bottom scale-110 translate-y-[35%]"
          priority
        />
      </motion.div>


      {/* 5. CONTENT STACK (Z-30, Topmost) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
        className="relative z-30 flex flex-col items-center text-center w-full px-6 pt-[200px]"
      >
        {/* Badge */}
        <div className="relative flex items-center gap-3 px-6 h-9 mb-10 bg-[#0A0A0A]/60 border border-white/10 backdrop-blur-md shadow-2xl">
          <div className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 border-t border-l border-white/40" />
          <div className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 border-t border-r border-white/40" />
          <div className="absolute -bottom-[1px] -left-[1px] w-1.5 h-1.5 border-b border-l border-white/40" />
          <div className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 border-b border-r border-white/40" />
          <div className="relative w-1.5 h-1.5">
            <div className="absolute inset-0 bg-[#00FF2A] rounded-full shadow-[0_0_8px_#00FF2A]" />
            <div className="absolute inset-[-4px] border border-[#00FF2A]/20 rounded-full animate-ping" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#FAFAFA] uppercase">
            AI + Cybersecurity
          </span>
        </div>

        {/* Main Text */}
        <div className="flex flex-col items-center max-w-[1240px]">
          <h1
            className="text-[60px] md:text-[86px] font-extrabold leading-[1.0] mb-8 text-[#FAFAFA] uppercase tracking-[-0.03em]"
            style={{
              fontFamily: "'Manrope', sans-serif",
              textShadow: "0 0 50px rgba(29,100,255,0.4)"
            }}
          >
            INTELLIGENT <br />
            SECURITY
          </h1>

          <p className="text-[#A3A3A3] text-lg md:text-[22px] max-w-[700px] mb-14 font-medium leading-[1.5]">
            AI-powered solutions and enterprise cybersecurity. From virtual receptionists to SOC operations,<br className="hidden md:block" />
            we transform how businesses protect and grow.
          </p>

          <Link href="/services">
            <div className="relative group">
              <Button
                className="relative px-12 h-14 bg-[#0A0A0A] hover:bg-white/5 text-[#FAFAFA] border border-white/10 rounded-sm transition-all duration-300 text-sm font-bold uppercase tracking-[0.25em]"
              >
                Explore Services
              </Button>
              <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
        </div>
      </motion.div>

      {/* 6. SINGLE BOTTOM BREAK LINE (Z-40) */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.0, delay: 0 }}
        className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-40"
      />

    </section>
  );
}
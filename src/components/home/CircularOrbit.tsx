"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Shield, Globe, Lock, Cpu, Database, Server, Zap, Search, ShieldCheck } from "lucide-react";
import { TechFrame } from "@/components/shared/TechFrame";

const securityIcons = [
  { id: 1, name: "ISO", color: "bg-[#2563EB]", icon: ShieldCheck },
  { id: 2, name: "CCPA", color: "bg-[#2563EB]", icon: Lock },
  { id: 3, name: "F", color: "bg-[#2563EB]", icon: Zap },
  { id: 4, name: "Security", color: "bg-[#2563EB]", icon: Shield },
  { id: 5, name: "Agency", color: "bg-[#2563EB]", icon: Globe },
  { id: 6, name: "EU", color: "bg-[#2563EB]", icon: Server },
  { id: 7, name: "Hexagon", color: "bg-[#2563EB]", icon: Cpu },
  { id: 8, name: "SOC", color: "bg-[#2563EB]", icon: Database },
  { id: 9, name: "Google", color: "bg-[#2563EB]", icon: Search },
];

const tags = [
  "AI Innovation",
  "Enterprise Security",
  "Digital Transformation",
  "Corporate Training"
];

export function CircularOrbit() {
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();
  const radius = 220;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const startAnimation = async () => {
    await controls.set("initial");
    await controls.start("moveUp");
    await controls.start("fanOut");
  };

  const parentVariants = {
    initial: { scale: 0, x: "-50%", y: "-50%", opacity: 0, rotate: 0 },
    moveUp: {
      scale: 1,
      opacity: 1,
      y: -radius,
      transition: { duration: 0.8, ease: "circOut" }
    },
    fanOut: (i: number) => ({
      rotate: (i * 360) / securityIcons.length,
      y: -radius,
      transition: {
        duration: 1.5,
        delay: i * 0.05,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const childVariants = {
    initial: { rotate: 0 },
    moveUp: { rotate: 0 },
    fanOut: (i: number) => ({
      rotate: -(i * 360) / securityIcons.length,
      transition: {
        duration: 1.5,
        delay: i * 0.05,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  if (!isMounted) return null;

  return (
    <section className="w-full py-40 bg-black overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative">

        {/* Left Column */}
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-white uppercase">
            AI Meets <br /> Cybersecurity
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-xl mb-12 leading-relaxed">
            Leveraging artificial intelligence to deliver smarter security decisions, automated workflows, and next-generation protection.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tags.map((tag) => (
              <TechFrame
                key={tag}
                className="p-6 bg-white/5 border border-white/5"
              >
                <span className="relative z-10 text-white font-bold tracking-[0.2em] uppercase text-[10px]">{tag}</span>
              </TechFrame>
            ))}
          </div>
        </div>

        {/* Vertical Separator line (Move to center if needed) */}
        <div className="hidden lg:block absolute left-1/2 top-[20%] bottom-[20%] w-[1px] bg-white/5 -translate-x-1/2" />

        {/* Right Column (Halo Radial Animation) */}
        <div className="relative flex items-center justify-center min-h-[600px] lg:h-[700px]">
          <div className="relative w-full h-full flex items-center justify-center">

            {/* Center Hub Glow */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut" }}
              className="absolute z-0"
            >
              <div className="w-96 h-96 border border-white/5 rounded-full" />
              <div className="absolute inset-0 w-full h-full border border-blue-500/5 rounded-full scale-125 animate-pulse" />
              <div className="absolute inset-[-100px] bg-blue-600/5 rounded-full blur-[120px]" />
            </motion.div>

            {securityIcons.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                initial="initial"
                onViewportEnter={i === 0 ? startAnimation : undefined}
                viewport={{ once: true, margin: "-100px" }}
                animate={controls}
                variants={parentVariants}
                className="absolute"
                style={{
                  transformOrigin: `center ${radius}px`,
                  top: "50%",
                  left: "50%",
                }}
              >
                <motion.div
                  className={`w-14 h-14 rounded-full border border-blue-500/40 bg-blue-500/10 group flex items-center justify-center hover:bg-blue-600/30 transition-all duration-500 relative z-10`}
                  custom={i}
                  initial="initial"
                  animate={controls}
                  variants={childVariants}
                >
                  <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <item.icon className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />

                  {/* Outer Halo Rim */}
                  <div className="absolute inset-[-4px] border border-blue-500/10 rounded-full group-hover:border-blue-500/30 transition-all" />
                </motion.div>
              </motion.div>
            ))}

            {/* Core Glow */}
            <div className="absolute w-32 h-32 bg-blue-600/20 rounded-full blur-[60px] pointer-events-none animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

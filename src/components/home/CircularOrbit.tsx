"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Shield, Globe, Lock, Cpu, Database, Server, Zap, Search, ShieldCheck } from "lucide-react";

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
  "Certified Security",
  "Global Partnerships",
  "Advanced Threat Prevention",
  "Compliance & Protection"
];

export function CircularOrbit() {
  const [isMounted, setIsMounted] = useState(false);
  const controls = useAnimation();
  const radius = 220;

  useEffect(() => {
    setIsMounted(true);
    startAnimation();
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
      y: `-${radius + 50}%`, // Adjusting for the centering
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
          <h2 className="text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-white">
            Take Security to the <br /> Next Level
          </h2>
          <p className="text-zinc-400 text-xl font-medium max-w-xl mb-12 leading-relaxed">
            With our certified security standards and strong partnerships, we provide maximum protection against cyber threats. We comply with ISO 27001, SOC 2, GDPR, and more.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tags.map((tag) => (
              <div 
                key={tag} 
                className="corner-border p-6 bg-white/5 border border-white/5 relative overflow-hidden group hover:border-blue-500/50 transition-colors duration-500"
              >
                <div className="absolute inset-0 dot-grid-sm opacity-20 pointer-events-none" />
                <span className="relative z-10 text-white font-bold tracking-tight uppercase text-sm">{tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Separator Line */}
        <div className="hidden lg:block absolute left-1/2 top-1/4 bottom-1/4 w-[1px] bg-white/10 -translate-x-1/2" />

        {/* Right Column (Fan-Out Radial Animation) */}
        <div className="relative flex items-center justify-center min-h-[600px] lg:h-[700px]">
          <div className="relative w-full h-full flex items-center justify-center">
            
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "circOut" }}
              className="absolute z-0"
            >
              <div className="w-96 h-96 border border-white/5 rounded-full" />
              <div className="absolute inset-0 w-full h-full border border-blue-500/10 rounded-full scale-125 animate-pulse" />
            </motion.div>

            {securityIcons.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                initial="initial"
                whileInView={startAnimation}
                viewport={{ once: true, margin: "-100px" }}
                animate={controls}
                variants={parentVariants}
                className="absolute"
                style={{
                  transformOrigin: `center ${radius}px`,
                  top: `calc(50% - ${radius}px)`,
                  left: "50%",
                }}
              >
                <motion.div
                  className={`w-20 h-20 rounded-full ${item.color} flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] border-2 border-white/20 relative z-10`}
                  custom={i}
                  initial="initial"
                  animate={controls}
                  variants={childVariants}
                >
                  <item.icon className="w-10 h-10 text-white" />
                  
                  {/* Label that appears on hover */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">{item.name}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            <div className="absolute w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

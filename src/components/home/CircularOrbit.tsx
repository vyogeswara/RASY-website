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
  const radius = 220; // Radius of the circle

  useEffect(() => {
    setIsMounted(true);
    startAnimation();
  }, []);

  const startAnimation = async () => {
    // Initial state: all icons at center
    await controls.set({ scale: 0, x: 0, y: 0, opacity: 0, rotate: 0 });
    
    // Step 1: All icons move to the top (12 o'clock) position together (stacked)
    await controls.start({
      scale: 1,
      opacity: 1,
      y: -radius,
      x: 0,
      transition: { duration: 0.8, ease: "circOut" }
    });

    // Step 2: Expansion - icons fan out clockwise to their positions
    // We'll use rotation around center logic for the fan-out
    // We trigger both the outer (parent) rotation and the inner (child) counter-rotation
    controls.start((i) => {
      const angle = (i * 360) / securityIcons.length;
      return {
        rotate: angle,
        transition: { 
          duration: 1.5, 
          delay: i * 0.1, // Staggered fan out looks better
          ease: [0.16, 1, 0.3, 1] // Custom ease for smooth expansion
        }
      };
    });
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
                {/* Dot Grid Background */}
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
            
            {/* The Icons */}
            {securityIcons.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                animate={controls}
                className="absolute"
                style={{
                  transformOrigin: `0px ${radius}px`,
                  top: `calc(50% - ${radius}px)`,
                  left: "50%",
                }}
              >
                {/* Individual Icon Container - Counter-rotates to stay upright */}
                <motion.div
                  className={`w-20 h-20 rounded-full ${item.color} flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)] border-2 border-white/20 relative z-10`}
                  custom={i}
                  animate={controls}
                  style={{
                    x: "-50%",
                    y: "-50%",
                  }}
                  variants={{
                    // This is a bit tricky: we need to counter-rotate as the parent rotates
                    // Since controls.start is used with custom function, we can provide the logic there
                  }}
                >
                  <motion.div
                    animate={controls}
                    style={{ rotate: 0 }}
                    variants={{
                      animate: (i: number) => ({
                        rotate: -(i * 360) / securityIcons.length
                      })
                    }}
                    // Instead of variants, let's use the same controls for rotation
                  >
                    <item.icon className="w-10 h-10 text-white" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}

            {/* Central Glow (Optional, but looks nice) */}
            <div className="absolute w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

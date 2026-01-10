"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function StarBadgeSection() {
  return (
    <section className="w-full py-40 px-8 bg-black flex justify-center">
      <div className="relative w-64 h-64 flex items-center justify-center">
         {[...Array(12)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute"
             animate={{ rotate: 360 }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
             style={{ width: "100%", height: "100%" }}
           >
             <Star 
               className="w-8 h-8 text-white fill-white absolute" 
               style={{ 
                 top: "-16px", 
                 left: "50%", 
                 transform: `translateX(-50%) scale(${1 - (i % 3) * 0.2})`,
                 opacity: 1 - (i % 3) * 0.3
               }} 
             />
           </motion.div>
         ))}
      </div>
    </section>
  );
}

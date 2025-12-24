"use client";

import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { Star } from "lucide-react";

const isoModules = [
  { id: "ISO 27001", title: "Information Security Management", desc: "We fortified our systems to meet global standards for data protection." },
  { id: "ISO 20000", title: "IT Service Management", desc: "We standardized our IT service delivery with globally accepted frameworks." },
  { id: "ISO 9001", title: "Quality Management Systems", desc: "We laid the foundation for consistent quality across all operations." },
  { id: "ISO 50001", title: "Energy Management Systems", desc: "We optimized energy performance for operational efficiency and cost savings." },
  { id: "ISO 1000", title: "Quality Management Systems", desc: "We laid the foundation for consistent quality across all operations." },
  { id: "ISO 22301", title: "Business Continuity Management", desc: "We ensured operational resilience in the face of unexpected disruptions." },
  { id: "ISO 14001", title: "Environmental Management Systems", desc: "We committed to sustainable practices and environmental responsibility." },
  { id: "ISO 45001", title: "Occupational Health and Safety", desc: "We strengthened our workplace health and safety protocols." },
  { id: "ISO 27701", title: "Privacy Information Management", desc: "We elevated our data privacy capabilities for GDPR alignment and beyond." },
  { id: "ISO 15504", title: "Software Process Improvement", desc: "We refined our software development lifecycle to enhance process maturity." },
  { id: "ISO 10002", title: "Customer Satisfaction Management", desc: "We established robust feedback and complaint resolution processes." },
];

export default function ConsultingPage() {
  return (
    <div className="flex flex-col items-center bg-black">
      {/* Hero Section */}
      <section className="relative w-full py-32 flex flex-col items-center justify-center px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_40%,rgba(212,0,255,0.2),transparent_70%)] opacity-70" />
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold text-center mb-8 relative z-10"
        >
          Consulting
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg md:text-xl text-center max-w-2xl relative z-10"
        >
          We provide guidance to help your business comply with standards such as ISO/IEC 27001, ISO 22301, and more.
        </motion.p>
      </section>

      {/* ISO Modules Grid */}
      <section className="w-full py-20 px-8 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-20 text-center max-w-xl leading-tight">
           Empower Your Development with Modules
        </h2>
        
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {isoModules.map((module, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-10 border border-white/5 flex flex-col items-center text-center gap-4 hover:bg-zinc-900/30 transition-all cursor-default"
            >
              <h3 className="text-2xl font-bold">{module.id}</h3>
              <p className="text-sm font-bold text-zinc-400">{module.title}</p>
              <p className="text-xs text-zinc-500 leading-relaxed">{module.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Circular Star Graphic */}
        <div className="mt-32 relative w-64 h-64 flex items-center justify-center">
           {[...Array(8)].map((_, i) => (
             <motion.div
               key={i}
               initial={{ rotate: i * 45, opacity: 0.5 }}
               animate={{ rotate: i * 45 + 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute"
               style={{ transformOrigin: "center center", width: "100%", height: "2px" }}
             >
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <Star className="w-10 h-10 text-zinc-200 fill-zinc-200" />
                </div>
             </motion.div>
           ))}
           <div className="w-12 h-12 bg-white rounded-full blur-2xl opacity-20" />
        </div>
      </section>

      <CTASection />
    </div>
  );
}

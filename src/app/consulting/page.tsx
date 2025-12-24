"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const certifications = [
  { title: "ISO 27001", sub: "Information Security Management", desc: "We fortified our systems to meet global standards for data protection." },
  { title: "ISO 20000", sub: "IT Service Management", desc: "We standardized our IT service delivery with globally accepted frameworks." },
  { title: "ISO 9001", sub: "Quality Management Systems", desc: "We laid the foundation for consistent quality across all operations." },
  { title: "ISO 50001", sub: "Energy Management Systems", desc: "We optimized energy performance for operational efficiency and cost savings." },
  { title: "ISO 1000", sub: "Quality Management Systems", desc: "We laid the foundation for consistent quality across all operations." },
  { title: "ISO 22301", sub: "Business Continuity Management", desc: "We ensured operational resilience in the face of unexpected disruptions." },
  { title: "ISO 14001", sub: "Environmental Management Systems", desc: "We committed to sustainable practices and environmental responsibility." },
  { title: "ISO 45001", sub: "Occupational Health and Safety", desc: "We strengthened our workplace health and safety protocols." },
  { title: "ISO 27701", sub: "Privacy Information Management", desc: "We elevated our data privacy capabilities for GDPR alignment and beyond." },
  { title: "ISO 15504", sub: "Software Process Improvement", desc: "We refined our software development lifecycle to enhance process maturity." },
  { title: "ISO 10002", sub: "Customer Satisfaction Management", desc: "We established robust feedback and complaint resolution processes." },
];

export default function ConsultingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full py-40 px-8 flex flex-col items-center bg-black hero-gradient-consulting overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-bold tracking-tighter mb-10"
          >
            Consulting
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-lg md:text-2xl font-bold tracking-tight leading-relaxed max-w-2xl mx-auto"
          >
            We provide guidance to help your business comply with standards such as ISO/IEC 27001, ISO 22301, and more.
          </motion.p>
        </div>
      </section>

      {/* ISO Grid */}
      <section className="w-full py-40 px-8 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <div key={i} className="corner-border p-10 bg-zinc-900/40 backdrop-blur-md border border-white/5 flex flex-col text-center items-center gap-6 group hover:border-blue-500/30 transition-all duration-500">
              <div>
                <h3 className="text-3xl font-bold tracking-tight mb-1">{cert.title}</h3>
                <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">{cert.sub}</p>
              </div>
              <p className="text-zinc-500 text-base font-medium leading-relaxed">{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Star Badge Section */}
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

      {/* CTA Section */}
      <section className="w-full py-32 px-8 bg-black flex justify-center">
        <div className="w-full max-w-7xl rounded-[40px] bg-gradient-to-b from-blue-900/40 to-black border border-white/10 p-16 md:p-32 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-grid-sm opacity-20" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-5xl font-bold tracking-tighter leading-tight mb-4 text-white">Stay Ahead of Cyber</h2>
            <h3 className="text-5xl font-bold tracking-tighter leading-tight mb-10 text-white/40">Threat</h3>
            
            <p className="text-zinc-400 text-lg font-medium mb-12 max-w-2xl">
              Partner with CyberShade to protect your business from modern cyber threats. Our experts are ready to guide you.
            </p>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-none px-12 py-7 text-sm font-bold tracking-tight transition-all">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

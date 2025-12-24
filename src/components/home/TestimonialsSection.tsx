"use client";

import { Zap } from "lucide-react";

const testimonials = [
  {
    quote: "CyberShade has transformed our security posture. Their expertise is unmatched in the industry.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
    rating: 5,
  },
  {
    quote: "The team's proactive approach saved us from multiple potential breaches. Highly recommended.",
    author: "James Carter",
    role: "Head of IT, Global Logistics",
    rating: 5,
  },
  {
    quote: "Exceptional service and deep technical knowledge. They are true partners in our security journey.",
    author: "Emily Ryans",
    role: "CISO, Fintech Solutions",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-40 px-8 bg-black flex flex-col items-center relative overflow-hidden">
      <div className="text-center mb-32 max-w-4xl relative z-10">
        <h2 className="text-5xl font-bold tracking-tight mb-6 leading-tight">Voices of Our Trusted Clients</h2>
        <p className="text-zinc-500 text-lg font-medium">Hear the stories of their cybersecurity journey with us.</p>
      </div>

      {/* Halo Effect */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[120px] rounded-[100%] z-0" />

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {testimonials.map((t, i) => (
          <div key={i} className="p-12 glass-card rounded-[40px] flex flex-col gap-10 group hover:border-white/20 transition-all duration-500">
             <div className="flex gap-1">
               {[...Array(5)].map((_, j) => (
                 <Zap key={j} className="w-4 h-4 text-blue-600 fill-blue-600" />
               ))}
             </div>
             <p className="text-zinc-200 text-lg font-medium italic leading-relaxed">"{t.quote}"</p>
             <div className="flex items-center gap-4 mt-auto">
               <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10" />
               <div>
                 <h4 className="text-base font-bold text-white tracking-tight">{t.author}</h4>
                 <p className="text-sm text-zinc-600 font-medium">{t.role}</p>
               </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}

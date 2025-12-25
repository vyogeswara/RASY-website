"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "RASY transformed our business with their AI-powered chatbots and virtual receptionists. Their innovative approach to automation has been remarkable.",
    author: "Sarah Mitchell",
    role: "IT Director",
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    quote: "The cybersecurity solutions from RASY elevated our defenses. Their SOC team provides round-the-clock monitoring that gives us complete peace of mind.",
    author: "James Carter",
    role: "CTO",
    image: "https://i.pravatar.cc/150?u=james",
  },
  {
    quote: "Their AI training programs on prompt engineering and agent building have upskilled our entire team. RASY is a trusted partner in digital transformation.",
    author: "Emily Nguyen",
    role: "Training Manager",
    image: "https://i.pravatar.cc/150?u=emily",
  },
  {
    quote: "From lead generation to sales automation, RASY's AI solutions have significantly improved our efficiency and customer engagement.",
    author: "Mark Reynolds",
    role: "CEO",
    image: "https://i.pravatar.cc/150?u=mark",
  },
  {
    quote: "RASY's threat intelligence and incident response services helped us prevent major security breaches. Their expertise is unmatched.",
    author: "Laura Evans",
    role: "Security Manager",
    image: "https://i.pravatar.cc/150?u=laura",
  },
  {
    quote: "The combination of AI innovation and enterprise security that RASY offers is exactly what modern businesses need. Highly recommended!",
    author: "David Patel",
    role: "Systems Engineer",
    image: "https://i.pravatar.cc/150?u=david",
  },
];

import { TechFrame } from "@/components/shared/TechFrame";

export function TestimonialsSection() {
  return (
    <section className="w-full py-32 px-8 bg-black relative overflow-hidden flex flex-col items-center">
      {/* Globe Background (Centered/Adjusted) */}
      <div className="absolute inset-x-0 top-[20%] z-0 opacity-20 h-[600px] pointer-events-none">
        <Image
          src="https://res.cloudinary.com/dslutbftw/image/upload/v1766588409/bD343IbRUhCvL2zEbQ19NOy31z4_me0one.avif"
          alt="Globe Background"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">What Our Clients Say</h2>
          <p className="text-zinc-500 text-lg font-medium max-w-xl mx-auto">
            Real stories from businesses we've helped transform with AI and cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TechFrame
              key={i}
              className="p-8 bg-[#0a0a0a]/60 backdrop-blur-md border border-white/5 flex flex-col gap-6 h-full"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-blue-500 fill-blue-500/20" />
                ))}
              </div>

              <p className="text-zinc-300 text-base font-medium leading-relaxed italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                  <Image src={t.image} alt={t.author} fill className="object-cover grayscale" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">{t.author}</h4>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </TechFrame>
          ))}
        </div>
      </div>
    </section>
  );
}

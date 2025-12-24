"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "CyberShade took our security to new heights with their innovative solutions and expertise. Their team's dedication and precision truly set them apart.",
    author: "Sarah Mitchell",
    role: "IT Director",
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    quote: "CyberShade raised our defenses with their groundbreaking tools and thoughtful strategies. Their crew's ingenuity and focus on detail truly distinguish them.",
    author: "James Carter",
    role: "CTO",
    image: "https://i.pravatar.cc/150?u=james",
  },
  {
    quote: "Their team's dedication is evident. CyberShade's strategies are effective. We always felt supported and secure with their services. They are a reliable partner.",
    author: "Emily Nguyen",
    role: "Security Analyst",
    image: "https://i.pravatar.cc/150?u=emily",
  },
  {
    quote: "Innovative solutions and support. CyberShade is our trusted security partner. They consistently protect our systems and exceed our expectations.",
    author: "Mark Reynolds",
    role: "CEO",
    image: "https://i.pravatar.cc/150?u=mark",
  },
  {
    quote: "CyberShade elevated our systems with fresh ideas and a brilliant tactical approach. Their group's creativity and care for detail make them exceptional.",
    author: "Laura Evans",
    role: "Operations Manager",
    image: "https://i.pravatar.cc/150?u=laura",
  },
  {
    quote: "CyberShade advanced our security with clever designs and a solid strategic vision. Their team's inventiveness and accuracy truly set them apart in the field.",
    author: "David Patel",
    role: "Systems Engineer",
    image: "https://i.pravatar.cc/150?u=david",
  },
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-40 px-8 bg-black relative overflow-hidden">
      {/* Globe Background */}
      <div className="absolute inset-x-0 bottom-0 z-0 opacity-40 h-2/3">
        <Image 
          src="https://res.cloudinary.com/dslutbftw/image/upload/v1766588409/bD343IbRUhCvL2zEbQ19NOy31z4_me0one.avif"
          alt="Globe Background"
          fill
          className="object-contain object-bottom"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <h2 className="text-6xl font-bold tracking-tight mb-8 leading-tight">Voices of Our Trusted <br /> Clients</h2>
          <p className="text-zinc-400 text-xl font-medium max-w-2xl mx-auto">
            Hear the stories of their cybersecurity journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="corner-border p-10 bg-black/40 backdrop-blur-xl border border-white/5 flex flex-col gap-8 relative overflow-hidden group hover:border-blue-500/40 transition-all duration-500"
            >
              {/* Dot Grid Overlay */}
              <div className="absolute inset-0 dot-grid-sm opacity-20 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-white fill-white" />
                  ))}
                </div>
                
                <p className="text-zinc-200 text-lg font-medium leading-relaxed mb-10">
                  "{t.quote}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                    <Image src={t.image} alt={t.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight">{t.author}</h4>
                    <p className="text-sm text-zinc-500 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

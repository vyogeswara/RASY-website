"use client";

import Image from "next/image";
import { Linkedin, Mail, Twitter } from "lucide-react";

const team = [
  { name: "Yogeswara Rao Veeravalli", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
  { name: "Sarvani Vidyadharani", role: "Technical Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
  { name: "Phani Kumar Ayyagari", role: "Director, Business", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
];

import { TechFrame } from "@/components/shared/TechFrame";

export function TeamSection() {
  return (
    <section className="w-full py-32 px-8 bg-black flex flex-col items-center">
      <div className="text-center mb-20 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Leadership Team</h2>
        <p className="text-zinc-500 text-lg font-medium">Driving innovation in AI and cybersecurity.</p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((member, i) => (
          <TechFrame
            key={i}
            className="p-10 bg-[#0a0a0a]/60 backdrop-blur-md border border-white/5 flex flex-col items-center text-center group"
          >
            <div className="relative w-40 h-40 mb-8">
              {/* Rim Light Effect (Top Glow) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />

              <Image
                src={member.img}
                alt={member.name}
                width={160}
                height={160}
                className="rounded-full relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700 object-cover border-2 border-white/10 group-hover:border-blue-500/50"
                sizes="160px"
              />
            </div>

            <h3 className="text-xl font-bold tracking-tight mb-1 text-white uppercase">{member.name}</h3>
            <p className="text-blue-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-8">{member.role}</p>

            <div className="flex gap-3">
              {[Twitter, Linkedin, Mail].map((Icon, j) => (
                <button key={j} className="p-2.5 border border-white/10 rounded-lg text-zinc-500 hover:text-white hover:border-white/30 transition-all">
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </TechFrame>
        ))}
      </div>
    </section>
  );
}

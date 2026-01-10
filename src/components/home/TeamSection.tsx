"use client";

import Image from "next/image";
import { Twitter, Linkedin, Mail } from "lucide-react";

const team = [
  { name: "Yogeswara Rao Veeravalli", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
  { name: "Sarvani Vidyadharani", role: "Technical Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
  { name: "Phani Kumar Ayyagari", role: "Director, Business", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
];

export function TeamSection() {
  return (
    <section className="w-full py-40 px-8 bg-black flex flex-col items-center">
      <div className="text-center mb-32 max-w-4xl">
        <h2 className="text-5xl font-bold tracking-tight mb-6">Leadership Team</h2>
        <p className="text-zinc-500 text-lg font-medium">Driving innovation in AI and cybersecurity.</p>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {team.map((member, i) => (
          <div key={i} className="corner-border p-12 bg-zinc-900/40 backdrop-blur-md border border-white/5 flex flex-col items-center text-center group hover:border-blue-500/30 transition-all duration-500">
            <div className="relative w-48 h-48 mb-10">
              <div className="absolute inset-0 bg-blue-600/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
              <Image
                src={member.img}
                alt={member.name}
                width={192}
                height={192}
                className="rounded-full relative z-10 grayscale hover:grayscale-0 transition-all duration-700 object-cover border-4 border-black group-hover:border-blue-600/30"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">{member.name}</h3>
            <p className="text-blue-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-10">{member.role}</p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Mail].map((Icon, j) => (
                <button key={j} className="p-3 border border-white/10 rounded-xl text-zinc-500 hover:text-white hover:border-white/20 transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

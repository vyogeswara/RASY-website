"use client";

import { certifications } from "@/lib/constants";

export function ISOGrid() {
  return (
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
  );
}

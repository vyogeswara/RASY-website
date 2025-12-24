"use client";

import { services } from "@/lib/constants";

export function ServicesGrid() {
  return (
    <section className="w-full py-40 px-8 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, i) => (
          <div key={i} className="corner-border p-12 bg-zinc-900/40 backdrop-blur-md border border-white/5 flex flex-col gap-8 group hover:border-blue-500/30 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              <service.icon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight mb-4">{service.title}</h3>
              <p className="text-zinc-500 text-lg font-medium leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

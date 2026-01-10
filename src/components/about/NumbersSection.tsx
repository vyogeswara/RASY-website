"use client";

import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "12+ Years", label: "Industry Experience" },
  { value: "50+ Clients", label: "Trusted Partnerships" },
  { value: "98% Retention", label: "Client Satisfaction" },
  { value: "5 Continents", label: "Global Reach" },
];

export function NumbersSection() {
  return (
    <section className="w-full py-40 px-8 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="flex flex-col">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">Numbers That Define Us</h2>
          <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-12">
            Behind every number lies a story of dedication, growth, and trust. These figures are more than just metrics — they reflect the consistency, expertise, and strong relationships we've cultivated with our clients over the years.
          </p>
          
          <div className="flex flex-col gap-4">
            {[
              "Delivered 150+ custom security audits tailored to client needs",
              "Achieved 100% client retention rate in the past 2 years",
              "Responded to 200+ real-time security incidents with zero data loss",
              "Developed in-house tools now used by global security teams"
            ].map((item) => (
              <div key={item} className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm font-bold tracking-tight text-zinc-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-black p-12 flex flex-col gap-4 group hover:bg-zinc-900/50 transition-colors">
              <p className="text-5xl font-bold tracking-tight text-white group-hover:text-blue-500 transition-colors">{stat.value}</p>
              <p className="text-sm font-bold tracking-tight text-zinc-600 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

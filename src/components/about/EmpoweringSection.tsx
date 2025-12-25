"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function EmpoweringSection() {
  return (
    <section className="w-full py-40 px-8 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
            alt="Team at work"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-10 text-white">
            AI Innovation & <br /> Cybersecurity
          </h2>
          <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-12">
            At RASY, we combine artificial intelligence innovation with enterprise-grade cybersecurity to protect what matters most — your digital assets and business growth.
          </p>

          <div className="flex flex-col gap-5">
            {[
              "Growth - Driving continuous improvement",
              "Innovation - Pioneering AI solutions",
              "Collaboration - Building lasting partnerships",
              "Integrity - Built on trust",
              "Excellence - Committed to quality"
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span className="text-base font-bold tracking-tight text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

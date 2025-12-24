"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { TrainingSection } from "@/components/home/TrainingSection";
import { CircularOrbit } from "@/components/home/CircularOrbit";
import { TeamSection } from "@/components/home/TeamSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <PartnersSection />
      <InsightsSection />
      <TrainingSection />
      <CircularOrbit />
      <TeamSection />
      <TestimonialsSection />

      {/* Final Home CTA Section */}
      <section className="w-full py-32 px-8 bg-black flex justify-center">
        <div className="w-full max-w-7xl rounded-[40px] bg-gradient-to-b from-blue-900/40 to-black border border-white/10 p-16 md:p-32 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-grid-sm opacity-20" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-10">
              Partner with CyberShade to protect your business from <br className="hidden md:block" />
              modern cyber threats. Our experts are ready to guide you.
            </h2>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-none px-12 py-7 text-sm font-bold tracking-tight">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

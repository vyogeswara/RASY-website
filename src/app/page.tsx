"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { TrainingSection } from "@/components/home/TrainingSection";
import { CircularOrbit } from "@/components/home/CircularOrbit";
import { TeamSection } from "@/components/shared/TeamSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CommonCTA } from "@/components/shared/CommonCTA";

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
      <CommonCTA />
    </div>
  );
}

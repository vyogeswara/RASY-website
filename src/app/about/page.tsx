"use client";

import { AboutHero } from "@/components/about/AboutHero";
import { CEOSection } from "@/components/about/CEOSection";
import { EmpoweringSection } from "@/components/about/EmpoweringSection";
import { NumbersSection } from "@/components/about/NumbersSection";
import { TeamSection } from "@/components/shared/TeamSection";
import { CommonCTA } from "@/components/shared/CommonCTA";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      <AboutHero />
      <CEOSection />
      <EmpoweringSection />
      <NumbersSection />
      <TeamSection />
      <CommonCTA />
    </div>
  );
}

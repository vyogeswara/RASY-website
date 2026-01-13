"use client";

import { AboutHero } from "@/components/about/hero";
import { AboutFounder } from "@/components/about/founder";
import { AboutValues } from "@/components/about/values";
import { AboutTeam } from "@/components/about/team";
import { AboutCTA } from "@/components/about/cta";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      <AboutHero />
      <AboutValues />
      <AboutFounder />
      <AboutTeam />
      <AboutCTA />
    </div>
  );
}

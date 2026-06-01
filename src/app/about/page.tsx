"use client";

import { AboutHero } from "@/components/about/hero";
import { AboutFounder } from "@/components/about/founder";
import { AboutValues } from "@/components/about/values";
import { AboutLeadershipGroup } from "@/components/about/leadership-group";
import { AboutTeam } from "@/components/about/team";
import { AboutCTA } from "@/components/about/cta";
import Footer from "@/components/sections/footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black">
      <AboutHero />
      <AboutValues />
      <AboutFounder />
      <AboutLeadershipGroup />
      <AboutTeam />
      <AboutCTA />
      <Footer />
    </div>
  );
}

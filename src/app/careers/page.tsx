"use client";

import { CareersHero } from "@/components/careers/CareersHero";
import { OpenPositions } from "@/components/careers/OpenPositions";
import { CommonCTA } from "@/components/shared/CommonCTA";

export default function CareersPage() {
  return (
    <div className="flex flex-col items-center">
      <CareersHero />
      <OpenPositions />
      <CommonCTA />
    </div>
  );
}

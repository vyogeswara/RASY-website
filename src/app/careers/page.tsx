"use client";

import { CareersHero } from "@/components/careers/CareersHero";
import { CommonCTA } from "@/components/shared/CommonCTA";

export default function CareersPage() {
  return (
    <div className="flex flex-col items-center">
      <CareersHero />
      <CommonCTA />
    </div>
  );
}

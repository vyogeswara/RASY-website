"use client";

import { ConsultingHero } from "@/components/consulting/ConsultingHero";
import { ISOGrid } from "@/components/consulting/ISOGrid";
import { StarBadgeSection } from "@/components/consulting/StarBadgeSection";
import { CommonCTA } from "@/components/shared/CommonCTA";

export default function ConsultingPage() {
  return (
    <div className="flex flex-col items-center">
      <ConsultingHero />
      <ISOGrid />
      <StarBadgeSection />
      <CommonCTA />
    </div>
  );
}

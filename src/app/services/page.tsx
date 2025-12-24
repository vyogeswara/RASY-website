"use client";

import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { FAQSection } from "@/components/services/FAQSection";
import { CommonCTA } from "@/components/shared/CommonCTA";

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center">
      <ServicesHero />
      <ServicesGrid />
      <FAQSection />
      <CommonCTA />
    </div>
  );
}

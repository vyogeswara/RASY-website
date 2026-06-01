"use client";

// ==========================================
// HOMEPAGE - MAIN ENTRY POINT
// ==========================================
// Section components organized per the RASY website structure
// Order matches: page.html reference and 01-home-page.md copy document

// Section Components
import Hero from "@/components/sections/hero";
import ImpactSection from "@/components/sections/impact-section";
import LeadershipSnapshot from "@/components/sections/leadership-snapshot";
import Exceptionalities from "@/components/sections/exceptionalities";
import OfficeCulture from "@/components/sections/office-culture";
import AllInOneFeatures from "@/components/sections/all-in-one-features";
import ProductsVerticals from "@/components/sections/products-verticals";
import { StepsGuide } from "@/components/sections/steps-guide";
import MultiLayerSecurity from "@/components/sections/security";
import TestimonialSection from "@/components/sections/testimonials";
import FAQSection from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen">
      {/* ========== 1. HERO SECTION ========== */}
      {/* Main hero with video background, badge, title, subtitle, and CTA */}
      <Hero />

      <ImpactSection />

      <LeadershipSnapshot />

      {/* ========== 3. WHY RASY SECTION ========== */}
      {/* 5 feature cards: Speed, Deep Capabilities, Control, Flexibility, Contact */}
      <Exceptionalities />

      <OfficeCulture />

      {/* ========== 4. SECURITY SOLUTIONS SECTION ========== */}
      {/* Tabbed feature showcase with scroll-linked progress */}
      <AllInOneFeatures />

      {/* ========== 5. INDUSTRY SOLUTIONS SECTION ========== */}
      {/* Tab-based products view with industry cards */}
      <ProductsVerticals />

      {/* ========== 6. GETTING STARTED SECTION ========== */}
      {/* 3-step onboarding process with sticky cards */}
      <StepsGuide />

      {/* ========== 7. SECURITY STANDARDS SECTION ========== */}
      {/* Multi-layer security framework with layered images */}
      <MultiLayerSecurity />

      {/* ========== 8. CLIENT SUCCESS SECTION ========== */}
      {/* Client testimonials slideshow */}
      <TestimonialSection />

      {/* ========== 9. QUESTIONS SECTION ========== */}
      {/* Accordion-style FAQ with 2-column layout */}
      <FAQSection />

      {/* ========== 10. FOOTER SECTION ========== */}
      {/* Site footer with navigation, CTA, and social links */}
      <Footer />
    </div>
  );
}

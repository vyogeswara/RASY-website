"use client";

import { AIHero, SolutionCard, solutionsData } from "@/components/services";
import FAQSection from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <AIHero />

      {/* Solutions Grid */}
      <section
        className="w-full bg-black py-16 md:py-24 px-5 md:px-10"
        style={{ backgroundColor: "#06070a" }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
          {solutionsData.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

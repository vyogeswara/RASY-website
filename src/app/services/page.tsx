"use client";

import { AIHero, SolutionCard, solutionsData } from "@/components/services";
import FAQSection from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black">
      {/* Hero Section */}
      <AIHero />

      {/* Solutions Grid */}
      <section
        className="w-full bg-black px-5 py-14 sm:px-6 md:px-10 md:py-24"
        style={{ backgroundColor: "#06070a" }}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 md:gap-8">
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

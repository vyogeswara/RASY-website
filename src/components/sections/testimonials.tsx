"use client";

import { ArrowLeft, ArrowRight, Building2, Landmark, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RasyCard, RasyGlow, RasyIconBadge, SectionHeader } from "@/components/rasy/native";

const studies = [
  {
    sector: "Enterprise technology",
    outcome: "Improved incident visibility and reduced manual triage across distributed teams.",
    detail:
      "RASY helped align monitoring, response ownership, and executive reporting into one operating rhythm.",
    icon: Building2,
  },
  {
    sector: "Financial services",
    outcome: "Strengthened audit readiness and security control tracking across critical workflows.",
    detail:
      "Risk teams gained clearer evidence paths for controls, reviews, and remediation decisions.",
    icon: Landmark,
  },
  {
    sector: "Healthcare operations",
    outcome: "Better prioritization of vulnerabilities and response actions in regulated environments.",
    detail:
      "Security leaders received practical, staged actions without disrupting daily operations.",
    icon: ShieldCheck,
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const active = studies[index];
  const Icon = active.icon;

  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24">
      <RasyGlow className="left-[-12%] top-[20%]" color="gold" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <SectionHeader
          eyebrow="Client success"
          title="Security outcomes without fake testimonials"
          description="Representative case-study themes until verified customer quotes are ready."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]">
          <RasyCard className="min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.sector}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="flex h-full flex-col justify-between gap-10"
              >
                <div className="space-y-8">
                  <RasyIconBadge icon={Icon} />
                  <p className="max-w-3xl text-3xl font-medium leading-tight tracking-tight text-white md:text-5xl">
                    {active.outcome}
                  </p>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffcd7d]">{active.sector}</p>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#b0bed9] md:text-lg">{active.detail}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </RasyCard>

          <div className="flex flex-col gap-4">
            {studies.map((study, studyIndex) => {
              const StudyIcon = study.icon;
              const isActive = studyIndex === index;
              return (
                <button
                  key={study.sector}
                  type="button"
                  onClick={() => setIndex(studyIndex)}
                  className={`rounded-xl border p-4 text-left transition ${
                    isActive
                      ? "border-[#0175ff]/60 bg-[#0175ff]/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20"
                  }`}
                >
                  <StudyIcon className="mb-5 h-5 w-5 text-white" />
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">{study.sector}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#9ba9c4]">{study.outcome}</p>
                </button>
              );
            })}
            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIndex((current) => (current - 1 + studies.length) % studies.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white"
                aria-label="Previous case study"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIndex((current) => (current + 1) % studies.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white"
                aria-label="Next case study"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

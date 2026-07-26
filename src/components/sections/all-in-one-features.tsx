"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, CheckCircle2, CloudCog, DatabaseZap, LockKeyhole, Network, Radar } from "lucide-react";
import Link from "next/link";
import { RasyCard, RasyGlow, RasyIconBadge, RasyVisualPanel, SectionHeader } from "@/components/rasy/native";

const features = [
  {
    id: "defense",
    label: "Defense",
    icon: Radar,
    title: "AI-powered threat defense",
    description:
      "Connect monitoring, investigation, and response into a single operational workflow built for security teams.",
    ctaText: "Explore Defense",
    ctaLink: "/services/ai-for-work",
    points: ["Signal prioritization", "Threat context", "Response playbooks", "Executive visibility"],
  },
  {
    id: "technology",
    label: "Technology",
    icon: LockKeyhole,
    title: "Advanced security technology",
    description:
      "Harden environments with practical controls, automated checks, and continuous visibility across your stack.",
    ctaText: "View Technology",
    ctaLink: "/services/cybersecurity",
    points: ["Endpoint protection", "Identity controls", "Vulnerability tracking", "Compliance support"],
  },
  {
    id: "integration",
    label: "Integration",
    icon: CloudCog,
    title: "Enterprise system integration",
    description:
      "Bring RASY workflows into the tools your organization already uses without depending on borrowed UI mockups.",
    ctaText: "Learn More",
    ctaLink: "/services/business-technology",
    points: ["SIEM alignment", "Cloud platforms", "Legacy workflows", "API-first delivery"],
  },
];

const environmentIcons = [Building2, Network, DatabaseZap, CloudCog];

export default function AllInOneFeatures() {
  const [activeId, setActiveId] = useState(features[0].id);
  const activeFeature = features.find((feature) => feature.id === activeId) ?? features[0];
  const ActiveIcon = activeFeature.icon;

  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24">
      <RasyGlow className="right-[-14%] top-[18%]" color="blue" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <SectionHeader
          eyebrow="Solutions"
          title="Complete cybersecurity for your organization"
          description="Simplify, accelerate, and transform with an integrated security ecosystem."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {features.map((feature) => {
              const Icon = feature.icon;
              const isActive = feature.id === activeId;
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveId(feature.id)}
                  className={`flex min-w-[220px] items-center gap-3 rounded-xl border px-4 py-4 text-left transition lg:min-w-0 ${
                    isActive
                      ? "border-[#0175ff]/60 bg-[#0175ff]/10 text-white"
                      : "border-white/10 bg-white/[0.03] text-[#9ba9c4] hover:border-white/20"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.18em]">{feature.label}</span>
                </button>
              );
            })}
          </div>

          <RasyCard className="min-h-[560px]">
            <div className="grid h-full gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-center">
              <div className="space-y-6">
                <RasyIconBadge icon={ActiveIcon} />
                <div className="space-y-4">
                  <motion.h3
                    key={activeFeature.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-medium tracking-tight text-white md:text-5xl"
                  >
                    {activeFeature.title}
                  </motion.h3>
                  <p className="max-w-xl text-base leading-relaxed text-[#b0bed9] md:text-lg">
                    {activeFeature.description}
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {activeFeature.points.map((point) => (
                    <div key={point} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-3">
                      <CheckCircle2 className="h-4 w-4 text-[#ffcd7d]" />
                      <span className="text-sm text-[#d1d4e3]">{point}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={activeFeature.ctaLink}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#2f3950] bg-[#0c0f16] px-5 py-3 font-semibold text-white transition hover:border-[#0175ff]/60"
                >
                  {activeFeature.ctaText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <RasyVisualPanel title="Security workflow" accent={activeFeature.id === "technology" ? "gold" : "blue"}>
                <div className="grid grid-cols-2 gap-3">
                  {environmentIcons.map((Icon, index) => (
                    <div key={index} className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <Icon className="mb-8 h-6 w-6 text-[#d1d4e3]" />
                      <div className="h-2 w-full rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#0175ff] to-[#ffcd7d]"
                          style={{ width: `${55 + index * 11}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-[#d1d4e3]">
                  Review controls, prioritize risks, and route action owners
                </div>
              </RasyVisualPanel>
            </div>
          </RasyCard>
        </div>
      </div>
    </section>
  );
}

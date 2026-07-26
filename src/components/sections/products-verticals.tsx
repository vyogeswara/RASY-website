"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, Factory, FileCheck2, HeartPulse, Landmark, ShieldCheck } from "lucide-react";
import { RasyCard, RasyFeatureList, RasyGlow, RasyIconBadge, RasyVisualPanel, SectionHeader } from "@/components/rasy/native";

const tabs = [
  {
    id: "threat-detection",
    label: "Threat Detection",
    title: "Advanced Threat Detection & Prevention",
    description:
      "Enhance security operations with intelligent systems that improve threat visibility, response accuracy, and protection.",
    features: ["Real-time detection", "Behavioral analytics", "Automated response"],
  },
  {
    id: "compliance",
    label: "Compliance",
    title: "Regulatory Compliance Solutions",
    description:
      "Navigate complex security requirements with efficient compliance management for modern enterprises.",
    features: ["Risk assessment", "Policy management", "Audit support"],
  },
  {
    id: "incident-response",
    label: "Incident Response",
    title: "Expert Incident Response",
    description:
      "Rapid threat containment with response capabilities that address security incidents efficiently.",
    features: ["Rapid containment", "Forensic analysis", "Recovery planning"],
  },
];

const industries = [
  { title: "Healthcare", description: "Protection for patient data and medical systems.", icon: HeartPulse },
  { title: "Financial Services", description: "Secure banking operations and transaction protection.", icon: Landmark },
  { title: "Manufacturing", description: "Industrial system and IoT network security.", icon: Factory },
  { title: "Government", description: "Critical infrastructure and public sector security.", icon: Building2 },
];

export default function ProductsVerticals() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const current = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24">
      <RasyGlow className="right-[-10%] top-[18%]" color="gold" />
      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-6 md:px-10">
        <SectionHeader
          eyebrow="Industries"
          title="Tailored security solutions"
          description="Comprehensive protection across major industry verticals."
          icon={ShieldCheck}
        />

        <div className="mt-10 flex overflow-x-auto pb-2">
          <div className="flex rounded-xl border border-white/10 bg-[#06070a] p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                className={`relative whitespace-nowrap rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  tab.id === activeTab ? "text-black" : "text-[#b0bed9]"
                }`}
              >
                {tab.id === activeTab ? <motion.span layoutId="industry-tab" className="absolute inset-0 rounded-lg bg-white" /> : null}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <RasyCard className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
            >
              <div className="space-y-5">
                <RasyIconBadge icon={FileCheck2} />
                <h3 className="text-3xl font-medium tracking-tight text-white md:text-4xl">{current.title}</h3>
                <p className="text-base leading-relaxed text-[#b0bed9] md:text-lg">{current.description}</p>
                <RasyFeatureList items={current.features} />
              </div>
              <RasyVisualPanel title={current.label} accent={current.id === "compliance" ? "gold" : "blue"}>
                <div className="grid gap-3 sm:grid-cols-3">
                  {current.features.map((feature, index) => (
                    <div key={feature} className="rounded-lg border border-white/10 bg-black/30 p-4">
                      <p className="mb-8 text-xs uppercase tracking-[0.16em] text-[#9ba9c4]">0{index + 1}</p>
                      <p className="text-sm font-medium text-white">{feature}</p>
                    </div>
                  ))}
                </div>
              </RasyVisualPanel>
            </motion.div>
          </AnimatePresence>
        </RasyCard>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div key={industry.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <Icon className="mb-8 h-6 w-6 text-white" />
                <h4 className="text-lg font-medium text-white">{industry.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[#9ba9c4]">{industry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

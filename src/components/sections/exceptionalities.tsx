"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Gauge, Layers3, ShieldCheck, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import {
  RasyCard,
  RasyFeatureList,
  RasyGlow,
  RasyIconBadge,
  RasyVisualPanel,
  SectionHeader,
} from "@/components/rasy/native";

const differences = [
  {
    title: "Speed",
    description:
      "Accelerated detection, triage, and response workflows for teams that cannot wait on manual queues.",
    icon: Gauge,
    metrics: ["24/7 signal review", "Rapid escalation paths", "Response-ready reporting"],
  },
  {
    title: "Deep Capabilities",
    description:
      "Security, automation, and AI expertise combined into practical delivery for complex enterprise environments.",
    icon: BrainCircuit,
    metrics: ["Threat context", "AI-assisted analysis", "Operational playbooks"],
  },
  {
    title: "Control",
    description:
      "Governance-first implementation with clear roles, auditability, and decision points for security leaders.",
    icon: SlidersHorizontal,
    metrics: ["Access controls", "Policy alignment", "Compliance evidence"],
  },
  {
    title: "Flexibility",
    description:
      "Solutions shaped around your current stack, risk model, and growth path instead of a rigid one-size platform.",
    icon: Layers3,
    metrics: ["Cloud and on-prem", "API-first workflows", "Modular adoption"],
  },
];

export default function Exceptionalities() {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24">
      <RasyGlow className="left-[-10%] top-[10%]" color="blue" />
      <RasyGlow className="bottom-[-12%] right-[-8%]" color="gold" />
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-10 px-5 sm:px-6 md:px-10">
        <SectionHeader
          eyebrow="Why choose us"
          title="What makes RASY different"
          description="Smarter, faster, and more adaptive than traditional cybersecurity providers."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {differences.map((item, index) => (
            <RasyCard key={item.title} delay={index * 0.08} className="min-h-[360px]">
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="flex items-start justify-between gap-5">
                  <RasyIconBadge icon={item.icon} />
                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#9ba9c4]">
                    0{index + 1}
                  </div>
                </div>

                <RasyVisualPanel title={item.title} accent={index % 2 === 0 ? "blue" : "gold"}>
                  <div className="grid grid-cols-3 gap-2">
                    {item.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="rounded-md border border-white/10 bg-black/30 p-3 text-[11px] leading-snug text-[#d1d4e3]"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </RasyVisualPanel>

                <div className="space-y-4">
                  <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">{item.title}</h3>
                  <p className="max-w-xl text-base leading-relaxed text-[#9ba9c4] md:text-lg">{item.description}</p>
                </div>
              </div>
            </RasyCard>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-[#2f3950] bg-[#06070a] p-6 md:col-span-2 md:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
              <div>
                <RasyIconBadge icon={ShieldCheck} size="sm" />
                <h3 className="mt-5 max-w-2xl text-3xl font-medium tracking-tight text-white md:text-5xl">
                  Ready to strengthen your security posture?
                </h3>
              </div>
              <div className="space-y-6">
                <RasyFeatureList
                  items={["Prioritized risk roadmap", "Clear implementation plan", "Security and AI advisory"]}
                />
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 font-semibold text-black transition hover:bg-[#d1d4e3] sm:w-auto"
                >
                  Get Protected
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

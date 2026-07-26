"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Rocket, SearchCheck } from "lucide-react";
import { RasyCard, RasyFeatureList, RasyIconBadge, SectionHeader } from "@/components/rasy/native";

const steps = [
  {
    id: "01",
    title: "Security Consultation",
    description: "Begin with an expert security assessment and consultation.",
    points: ["Schedule a security evaluation", "Identify the vulnerability landscape", "Define security requirements"],
    icon: SearchCheck,
  },
  {
    id: "02",
    title: "Solution Selection",
    description: "Choose from a focused security and AI service portfolio.",
    points: ["Match services to threat profile", "Prioritize needed capabilities", "Align with compliance goals"],
    icon: ClipboardCheck,
  },
  {
    id: "03",
    title: "Implementation & Support",
    description: "Deploy with professional implementation and ongoing support.",
    points: ["Configure policies and protocols", "Monitor and optimize controls", "Access expert support"],
    icon: Rocket,
  },
];

export function StepsGuide() {
  return (
    <section className="bg-[#06070a] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <SectionHeader
          eyebrow="Get started"
          title="Your security journey in 3 steps"
          description="From assessment to comprehensive protection made straightforward."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <RasyCard key={step.id} delay={index * 0.08} className="min-h-[360px]">
                <div className="flex h-full flex-col justify-between gap-8">
                  <div className="flex items-start justify-between">
                    <RasyIconBadge icon={Icon} />
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffcd7d]">{step.id}</span>
                  </div>
                  <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} className="h-1 origin-left rounded-full bg-gradient-to-r from-[#0175ff] to-[#ffcd7d]" />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-medium text-white">{step.title}</h3>
                    <p className="text-base leading-relaxed text-[#9ba9c4]">{step.description}</p>
                    <RasyFeatureList items={step.points} />
                  </div>
                </div>
              </RasyCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

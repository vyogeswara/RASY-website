"use client";

import { motion } from "framer-motion";
import { FileCheck2, Globe2, Radar, ShieldCheck } from "lucide-react";
import { RasyFeatureList, RasyGlow, RasyIconBadge, RasyVisualPanel } from "@/components/rasy/native";

const securityFeatures = [
  "Zero-trust architecture",
  "Advanced threat intelligence",
  "Regulatory compliance",
];

const layers = [
  { label: "Identity", value: 88 },
  { label: "Network", value: 76 },
  { label: "Endpoint", value: 82 },
  { label: "Cloud", value: 69 },
];

export default function MultiLayerSecurity() {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24 lg:py-32">
      <RasyGlow className="right-[-12%] top-[12%]" color="gold" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <RasyIconBadge icon={ShieldCheck} size="sm" />
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8491ab]">Enterprise grade</span>
              <div className="h-px max-w-[180px] flex-1 bg-[rgba(125,164,255,0.16)]" />
            </div>
            <div className="space-y-5">
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-medium leading-tight tracking-tight text-white md:text-6xl"
              >
                Comprehensive Security Framework
              </motion.h2>
              <p className="max-w-[520px] text-base leading-relaxed text-[#b0bed9] md:text-lg">
                Protect your organization with a multi-layered cybersecurity approach. From perimeter defense to behavioral analytics, every component works together.
              </p>
            </div>
            <RasyFeatureList items={securityFeatures} />
          </div>

          <RasyVisualPanel title="Defense layers" accent="gold">
            <div className="grid gap-4 sm:grid-cols-2">
              {layers.map((layer, index) => {
                const icons = [ShieldCheck, Globe2, Radar, FileCheck2];
                const Icon = icons[index];
                return (
                  <div key={layer.label} className="rounded-xl border border-white/10 bg-black/30 p-4">
                    <div className="mb-8 flex items-center justify-between">
                      <Icon className="h-5 w-5 text-white" />
                      <span className="text-xs uppercase tracking-[0.16em] text-[#9ba9c4]">{layer.value}%</span>
                    </div>
                    <p className="mb-3 text-sm font-semibold text-white">{layer.label}</p>
                    <div className="h-2 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#0175ff] to-[#ffcd7d]"
                        style={{ width: `${layer.value}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </RasyVisualPanel>
        </div>
      </div>
    </section>
  );
}

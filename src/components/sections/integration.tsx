"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cloud, Database, KeyRound, MonitorCog, Network, ServerCog, Shield, Workflow } from "lucide-react";
import Link from "next/link";
import { RasyGlow, RasyIconBadge, SectionHeader } from "@/components/rasy/native";

const integrations = [
  { label: "SIEM", icon: MonitorCog },
  { label: "Cloud", icon: Cloud },
  { label: "Identity", icon: KeyRound },
  { label: "Network", icon: Network },
  { label: "Data", icon: Database },
  { label: "Servers", icon: ServerCog },
  { label: "Controls", icon: Shield },
  { label: "Workflows", icon: Workflow },
];

export default function IntegrationSection() {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24">
      <RasyGlow className="left-[-10%] top-[20%]" color="blue" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <SectionHeader
          eyebrow="Integration"
          title="Smart agent-driven integration"
          description="Connect custom or pre-built connectors to your enterprise and third-party apps."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {integrations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-2xl border border-[rgba(125,164,255,0.16)] bg-[#06070a] p-5"
              >
                <RasyIconBadge icon={Icon} size="sm" />
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-white">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-10 flex justify-start">
          <Link
            href="/services/business-technology"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:bg-[#d1d4e3]"
          >
            Know More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

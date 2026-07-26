"use client";

import { motion } from "framer-motion";
import { Handshake, Megaphone, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { RasyCard, RasyIconBadge, RasyVisualPanel } from "@/components/rasy/native";

const options = [
  {
    title: "Speak with Security Experts",
    description:
      "Receive a personalized cybersecurity assessment and learn how RASY can protect your enterprise infrastructure.",
    action: "Get Security Assessment",
    href: "mailto:info@rasytech.com",
    icon: ShieldCheck,
    featured: true,
  },
  {
    title: "Media & Press Inquiries",
    description: "For interviews, security research, and media collaboration requests.",
    action: "Contact Media Team",
    href: "mailto:media@rasytech.com",
    icon: Megaphone,
  },
  {
    title: "Strategic Partnerships",
    description: "Explore technology integration and channel partnership possibilities.",
    action: "Partner With Us",
    href: "mailto:partners@rasytech.com",
    icon: Handshake,
  },
];

export function ContactOptions() {
  const [main, ...secondary] = options;
  const MainIcon = main.icon;

  return (
    <section className="px-5 py-14 sm:px-6 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-[1.6fr_1fr]">
          <RasyCard className="min-h-[520px]">
            <div className="grid h-full gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <RasyIconBadge icon={MainIcon} />
                <h3 className="text-3xl font-medium tracking-tight text-white md:text-5xl">{main.title}</h3>
                <p className="max-w-[560px] text-base leading-relaxed text-[#9ba9c4] md:text-lg">{main.description}</p>
                <Link
                  href={main.href}
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-black px-6 py-4 font-medium text-white shadow-[inset_-4px_3px_9px_0px_#0175ff,inset_3px_-2px_8px_0px_#ffcd7d] transition hover:brightness-125 sm:w-auto"
                >
                  {main.action}
                </Link>
              </div>
              <RasyVisualPanel title="Assessment flow" accent="blue">
                <div className="space-y-3">
                  {["Discovery", "Risk mapping", "Action plan"].map((step, index) => (
                    <div key={step} className="rounded-lg border border-white/10 bg-black/30 p-4">
                      <span className="text-xs uppercase tracking-[0.16em] text-[#ffcd7d]">0{index + 1}</span>
                      <p className="mt-4 text-sm font-medium text-white">{step}</p>
                    </div>
                  ))}
                </div>
              </RasyVisualPanel>
            </div>
          </RasyCard>

          <div className="flex flex-col gap-6 md:gap-8">
            {secondary.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-[#7da4ff29] bg-[#06070a] p-6 md:p-8"
                >
                  <RasyIconBadge icon={Icon} />
                  <h3 className="mt-8 text-2xl font-medium text-white">{option.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[#9ba9c4]">{option.description}</p>
                  <Link href={option.href} className="mt-8 inline-flex font-semibold text-[#ffcd7d]">
                    {option.action}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  GraduationCap,
  LucideIcon,
  Network,
  ShieldCheck,
} from "lucide-react";
import { RasyFeatureList, RasyIconBadge, RasyVisualPanel } from "@/components/rasy/native";

interface SolutionCardProps {
  title: string;
  subtitle: string;
  featuresTitle: string;
  features: string[];
  href: string;
  icon: LucideIcon;
  accent: "blue" | "gold";
}

export function SolutionCard({ title, subtitle, featuresTitle, features, href, icon, accent }: SolutionCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-[rgba(125,164,255,0.16)] bg-[#06070a] p-6 md:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-stretch">
        <div className="flex flex-col gap-7">
          <RasyIconBadge icon={icon} size="sm" />
          <div className="space-y-3">
            <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">{title}</h3>
            <p className="max-w-2xl text-base leading-relaxed text-[#9ba9c4]">{subtitle}</p>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">{featuresTitle}</p>
            <RasyFeatureList items={features} />
          </div>
          <Link
            href={href}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#2f3950] bg-[#0c0f16] px-5 py-3 font-semibold text-white transition hover:border-[#0175ff]/60 sm:w-fit"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <RasyVisualPanel title={title} accent={accent}>
          <div className="space-y-3">
            {features.slice(0, 4).map((feature, index) => (
              <div key={feature} className="rounded-lg border border-white/10 bg-black/30 p-3">
                <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[#9ba9c4]">
                  <span>Priority {index + 1}</span>
                  <span>{72 + index * 6}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#0175ff] to-[#ffcd7d]"
                    style={{ width: `${72 + index * 6}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </RasyVisualPanel>
      </div>
    </motion.article>
  );
}

export const solutionsData: SolutionCardProps[] = [
  {
    title: "Enterprise Cybersecurity",
    subtitle: "End-to-end protection for your digital assets, from threat detection to compliance management.",
    featuresTitle: "Security Solutions",
    features: [
      "Threat Intelligence & Monitoring",
      "Vulnerability Management",
      "Incident Response & Forensics",
      "Security Operations Center (SOC)",
      "Identity & Access Management",
      "Network & Endpoint Security",
    ],
    href: "/services/cybersecurity",
    icon: ShieldCheck,
    accent: "blue",
  },
  {
    title: "AI-Powered Solutions",
    subtitle: "Leverage artificial intelligence to enhance business operations and customer experiences.",
    featuresTitle: "Intelligent Automation",
    features: [
      "AI Chatbots & Virtual Assistants",
      "Sales Process Automation",
      "Lead Generation Systems",
      "Website Design with AI",
      "Digital Marketing Automation",
      "AI Training Programs",
    ],
    href: "/services/artificial-intelligence",
    icon: BrainCircuit,
    accent: "gold",
  },
  {
    title: "Business Tech Solutions",
    subtitle: "Streamline operations with integrated technology services and digital transformation.",
    featuresTitle: "Digital Enablement",
    features: [
      "Virtual Receptionist Services",
      "Branding & Creative Design",
      "Workflow Automation",
      "System Integration",
      "Technology Consulting",
      "Corporate Training Programs",
    ],
    href: "/services/business-technology",
    icon: Network,
    accent: "blue",
  },
  {
    title: "Expert Consulting",
    subtitle: "Strategic guidance and implementation support for your technology initiatives.",
    featuresTitle: "Advisory Services",
    features: [
      "Security Architecture Design",
      "Compliance Consulting",
      "AI Strategy Development",
      "Digital Transformation Planning",
      "Custom Solution Development",
      "Managed Security Services",
    ],
    href: "/services/professional-services",
    icon: BriefcaseBusiness,
    accent: "gold",
  },
  {
    title: "Knowledge Empowerment",
    subtitle: "Build internal capabilities with comprehensive training on emerging technologies.",
    featuresTitle: "Learning Solutions",
    features: [
      "Cybersecurity Awareness Training",
      "AI & Machine Learning Courses",
      "Prompt Engineering Workshops",
      "Security Certification Prep",
      "Custom Corporate Training",
      "Technical Skill Development",
    ],
    href: "/services/training-education",
    icon: GraduationCap,
    accent: "blue",
  },
];

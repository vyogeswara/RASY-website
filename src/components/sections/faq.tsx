"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HelpCircle, Plus } from "lucide-react";
import { useState } from "react";
import { RasyGlow, SectionHeader } from "@/components/rasy/native";

const faqs = [
  {
    question: "What cybersecurity services does RASY provide?",
    answer:
      "RASY offers threat detection, incident response, compliance management, security assessments, and AI-powered protection for enterprise environments.",
  },
  {
    question: "How does RASY differ from traditional security providers?",
    answer:
      "We combine AI-powered threat intelligence with human expertise so security workflows adapt as threats and business requirements change.",
  },
  {
    question: "Can RASY work with our existing infrastructure?",
    answer:
      "Yes. Services are designed to integrate with existing security tools, SIEM systems, cloud platforms, and legacy infrastructure.",
  },
  {
    question: "Is RASY suitable for compliance requirements?",
    answer:
      "Yes. We support compliance workflows for regulated environments and help teams maintain evidence, controls, and remediation tracking.",
  },
  {
    question: "How quickly can services be implemented?",
    answer:
      "Core discovery and prioritization can begin quickly. Full implementation timing depends on scope, integrations, and environment complexity.",
  },
  {
    question: "Does RASY provide ongoing support and monitoring?",
    answer:
      "Yes. RASY can support ongoing assessments, monitoring workflows, updates, and security posture optimization.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[number]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.04 }}
      className="rounded-xl border border-[rgba(125,164,255,0.16)] bg-[#06070a]"
    >
      <button
        onClick={() => setIsOpen((value) => !value)}
        className="flex w-full items-start justify-between gap-4 p-5 text-left md:p-6"
        type="button"
      >
        <span className="text-base font-medium leading-snug text-white md:text-lg">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white"
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen ? (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="px-5 pb-5 text-base leading-relaxed text-[#b0bed9] md:px-6 md:pb-6">{faq.answer}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24">
      <RasyGlow className="bottom-[-15%] right-[-10%]" color="blue" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-6 md:px-10">
        <SectionHeader
          eyebrow="Common questions"
          title="Questions about RASY?"
          description="Answers to help you understand our cybersecurity services and capabilities."
          icon={HelpCircle}
        />
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What cybersecurity services does RASY provide?",
    answer: "RASY offers comprehensive cybersecurity including threat detection, incident response, compliance management, security assessments, and AI-powered protection for enterprise environments."
  },
  {
    question: "How does RASY's approach differ from traditional security providers?",
    answer: "We combine AI-powered threat intelligence with human expertise, providing adaptive security that learns from emerging threats and adjusts protection strategies automatically."
  },
  {
    question: "Can RASY work with our existing security infrastructure?",
    answer: "Yes, our solutions integrate seamlessly with existing security tools, SIEM systems, cloud platforms, and legacy infrastructure through flexible APIs and connectors."
  },
  {
    question: "Is RASY suitable for regulatory compliance requirements?",
    answer: "Absolutely. We maintain compliance with industry standards including HIPAA, PCI-DSS, GDPR, and other regulatory frameworks while providing comprehensive security protection."
  },
  {
    question: "How quickly can RASY services be implemented?",
    answer: "Our professional services team ensures rapid deployment. Most organizations can implement core security services within days, with full optimization following shortly after."
  },
  {
    question: "Does RASY provide ongoing support and monitoring?",
    answer: "Yes, we offer 24/7 security monitoring, regular assessments, continuous updates, and dedicated support teams to maintain and optimize your security posture."
  }
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0], index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-8 rounded-[24px] border border-[rgba(125,164,255,0.16)] bg-[#0c0f16] text-left transition-all hover:border-white/20"
      >
        <span className="text-xl font-medium text-white">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-8 pt-0 text-[rgb(176,190,217)] text-lg leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  return (
    <section className="framer-1ocarzi relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10 px-6 md:px-10 max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="framer-4beoi6 flex flex-col gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <div className="framer-xjRP0 flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-[1px] border border-white/10 bg-[rgb(6,7,10)] w-fit">
                <img src="https://framerusercontent.com/images/mH5OKmjNShfPxiFuUqwazYgcLNQ.svg" className="w-6 h-6 opacity-80" alt="" />
                <span className="text-[14px] font-medium tracking-[0.2em] text-[#8491ab]">COMMON QUESTIONS</span>
              </div>
              <div className="h-[1px] flex-1 bg-[rgba(125,164,255,0.16)]" />
            </div>
          </div>
          <div className="framer-16ky6uj flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] max-w-[720px]">
              Questions About RASY?
            </h2>
            <p className="text-xl text-[#b0bed9] max-w-[320px] pb-2">
              Answers to help you understand our cybersecurity services and capabilities.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          <div className="flex flex-col">
            {faqs.slice(0, 3).map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
          <div className="flex flex-col">
            {faqs.slice(3).map((faq, i) => (
              <FAQItem key={i + 3} faq={faq} index={i + 3} />
            ))}
          </div>
        </div>
      </div>

      {/* Background Masking Gradient */}
      <figure className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.img
          initial={{ opacity: 0, y: 60, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          src="https://framerusercontent.com/images/FMpJMmyNTqRd8oGYputAzs8cso.webp"
          className="w-full h-full object-cover opacity-20"
          alt=""
        />
      </figure>
    </section>
  );
};

export default FAQSection;

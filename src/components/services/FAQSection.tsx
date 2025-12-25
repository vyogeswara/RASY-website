"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/constants";

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="w-full py-24 px-4 md:px-8 bg-black flex flex-col items-center">
      {/* Title */}
      <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-16 text-white">FAQ</h2>

      {/* FAQ Container with border and L-corners */}
      <div className="relative w-full max-w-3xl">
        {/* Border container */}
        <div className="absolute inset-0 border border-blue-500/40 pointer-events-none" />

        {/* L-Corners blending into border */}
        <div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-blue-500 z-10" />
        <div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-blue-500 z-10" />
        <div className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-blue-500 z-10" />
        <div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-blue-500 z-10" />

        {/* FAQ Items */}
        <div className="relative z-0">
          {faqs.map((faq, i) => (
            <div key={i} className="relative">
              {/* Blue separator line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-blue-500/30" />

              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full py-6 px-6 flex items-center gap-4 text-left transition-colors hover:bg-white/5"
              >
                {/* Plus/Minus icon */}
                <span className="text-blue-500 flex-shrink-0">
                  {openFaq === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
                {/* Question - White text */}
                <span className="text-white text-base md:text-lg font-medium">{faq.q}</span>
              </button>

              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pl-14 pr-6 text-white/70 text-sm md:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/constants";

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="w-full py-40 px-8 bg-black flex flex-col items-center">
      <h2 className="text-6xl font-bold tracking-tighter mb-32">FAQ</h2>
      
      <div className="w-full max-w-3xl flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-white/5 overflow-hidden">
            <button 
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full py-8 flex items-center justify-between text-left group transition-colors hover:text-blue-500"
            >
              <span className="text-lg font-bold tracking-tight flex items-center gap-4 text-white">
                <span className="text-blue-600">{openFaq === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}</span>
                {faq.q}
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: openFaq === i ? "auto" : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pb-8 pl-9 text-zinc-500 font-medium leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

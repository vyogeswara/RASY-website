"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="w-full py-24 px-8 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-5xl bg-[#030712] border border-blue-900/20 rounded-2xl p-12 md:p-20 flex flex-col items-center text-center gap-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 cyber-gradient-blue opacity-50" />

        <h2 className="text-4xl md:text-6xl font-bold max-w-2xl relative z-10">
          Ready for Intelligent Security?
        </h2>

        <p className="text-zinc-400 text-lg max-w-xl relative z-10">
          Partner with RASY to transform your business with AI innovation and enterprise-grade cybersecurity. Let's build the future together.
        </p>

        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-8 relative z-10">
          Get in Touch
        </Button>
      </motion.div>
    </section>
  );
}

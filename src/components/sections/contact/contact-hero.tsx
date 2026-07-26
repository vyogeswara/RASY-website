"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { RasyGlow, RasyIconBadge } from "@/components/rasy/native";

const titleText = "Need Enterprise Cybersecurity Solutions?";

export function ContactHero() {
  return (
    <header className="relative flex flex-col items-center justify-center overflow-hidden bg-black px-5 pb-16 pt-28 sm:px-6 md:px-10 md:pb-28 md:pt-44">
      <RasyGlow className="left-[-12%] top-[8%]" color="blue" />
      <RasyGlow className="right-[-10%] top-[22%]" color="gold" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center md:mb-10"
        >
          <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-[#06070a] px-4 py-2 shadow-lg">
            <RasyIconBadge icon={Mail} size="sm" />
            <span className="pl-1 text-[13px] font-medium uppercase tracking-[0.25em] text-[#8491ab]">Contact us</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[900px] text-center text-[38px] font-medium leading-[1.08] tracking-tight text-white sm:text-[48px] md:text-[64px] lg:text-[88px]"
        >
          {titleText}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-[520px] text-base leading-relaxed text-[#9ba9c4] md:mt-8 md:text-[20px]"
        >
          Get expert consultation and discover how RASY can strengthen your organization's security posture.
        </motion.p>
      </div>
    </header>
  );
}

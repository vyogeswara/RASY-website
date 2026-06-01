"use client";

import React from "react";
import { motion } from "framer-motion";

const leadershipGroupImage =
  "https://res.cloudinary.com/doibx3aol/image/upload/v1780335238/WhatsApp_Image_2025-12-22_at_14.20.01_1_deoklb.jpg";

const leaders = [
  "Yogeswara Rao Veeravalli",
  "Sarvani Vidyadharani",
  "Phani Kumar Ayyagari",
];

export function AboutLeadershipGroup() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/5 bg-black px-5 py-16 sm:px-6 md:py-24 lg:py-32">
      <div className="absolute left-0 top-1/4 h-[480px] w-[480px] rounded-full bg-[#0175ff]/10 blur-[130px]" />
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-stretch gap-10 md:gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex h-full flex-col justify-center"
        >
          <div className="mb-10 flex items-center gap-3">
            <div className="rounded border border-white/5 bg-white/10 p-1.5 backdrop-blur-md">
              <img src="https://framerusercontent.com/images/eWJcm0cKj3Rsxetaz4suNQKuW8o.svg" width="16" alt="" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Leadership Group
            </span>
            <div className="hidden h-px w-24 bg-white/10 md:block" />
          </div>

          <h2 className="text-[36px] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            The leadership behind RASY
          </h2>
          <p className="mt-6 max-w-[520px] text-lg font-light leading-relaxed text-[#9ba9c4] opacity-80 md:mt-8 md:text-xl">
            Our leadership brings together cybersecurity vision, technical execution, and business direction to guide secure AI adoption for clients.
          </p>

          <div className="mt-10 flex flex-col gap-3">
            {leaders.map((leader) => (
              <div
                key={leader}
                className="flex items-center gap-3 rounded-[14px] border border-[rgba(125,164,255,0.16)] bg-[#0c0f16] px-4 py-3"
              >
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#0175ff] to-[#ffcd7d]" />
                <span className="text-[15px] font-medium text-[#d1d4e3]">{leader}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex h-full min-h-[420px] overflow-hidden rounded-[24px] border border-[rgba(125,164,255,0.16)] bg-[#06070a] sm:min-h-[520px] md:rounded-[32px] lg:min-h-0"
        >
          <div className="relative flex h-full w-full items-center justify-center bg-[#06070a] p-2 sm:p-3">
            <img
              src={leadershipGroupImage}
              alt="RASY leadership group: Yogeswara Rao Veeravalli, Sarvani Vidyadharani, and Phani Kumar Ayyagari"
              className="h-full w-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

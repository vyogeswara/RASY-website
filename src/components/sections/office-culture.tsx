"use client";

import React from "react";
import { motion } from "framer-motion";

const officeGroupImage =
  "https://res.cloudinary.com/doibx3aol/image/upload/v1780335176/WhatsApp_Image_2025-12-22_at_14.20.01_c0ech2.jpg";

export default function OfficeCulture() {
  return (
    <section className="relative w-full overflow-hidden bg-black px-5 py-14 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[680px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#8491ab]">
                Office Team
              </span>
              <div className="h-px w-32 bg-[rgba(125,164,255,0.16)]" />
            </div>
            <h2 className="text-[36px] font-medium leading-[1.1] tracking-[-0.02em] text-white md:text-[56px]">
              Built by people who deliver the work
            </h2>
          </div>
          <p className="max-w-[360px] text-[17px] leading-[1.6] text-[#b0bed9] md:text-right">
            Behind every AI workflow, security assessment, and managed service is a hands-on team working across strategy, engineering, and operations.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-[32px] border border-[rgba(125,164,255,0.16)] bg-[#06070a]"
        >
          <div className="relative aspect-[16/11] md:aspect-[16/8.5]">
            <img
              src={officeGroupImage}
              alt="RASY office colleagues and leadership group photo"
              className="h-full w-full object-cover object-bottom transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-[620px] p-6 md:p-10">
              <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-[#8491ab]">
                RASY Team
              </p>
              <h3 className="mt-3 text-xl font-medium leading-tight tracking-[-0.02em] text-white sm:text-2xl md:text-4xl">
                AI, cybersecurity, and business teams working together.
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

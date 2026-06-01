"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Feature data with different icons for each
const securityFeatures = [
  {
    title: "Zero-Trust Architecture",
    // Globe/network icon
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Advanced Threat Intelligence",
    // Checkmark/shield icon
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M9 12l2 2 4-4" />
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Regulatory Compliance",
    // Mail/document icon
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 7L2 7" />
      </svg>
    ),
  },
];

// Layered gradient images (the stacked effect on the right)
const layeredImages = [
  {
    src: "https://framerusercontent.com/images/BOO9YkJWPlVaXJACHcXHqAPuBw.png",
    zIndex: 40,
    translateX: 0,
    opacity: 1,
  },
  {
    src: "https://framerusercontent.com/images/FFx9tCFoevPxrcvXSaMFTcT8.png",
    zIndex: 30,
    translateX: 60,
    opacity: 0.8,
  },
  {
    src: "https://framerusercontent.com/images/rugS4hRgm7Cf9IUsK51bzhuf4h8.png",
    zIndex: 20,
    translateX: 120,
    opacity: 0.6,
  },
  {
    src: "https://framerusercontent.com/images/6YZCTbgTJSkogwFP5MNM5Z254gQ.png",
    zIndex: 10,
    translateX: 180,
    opacity: 0.45,
  },
];

export default function MultiLayerSecurity() {
  return (
    <section
      className="relative bg-black py-16 md:py-24 lg:py-32 overflow-hidden"
      data-framer-name="Data & Privacy"
    >
      <div className="container relative z-10 px-5 sm:px-6 md:px-10 max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center">

          {/* Left Column: Content */}
          <div className="flex-1 flex flex-col gap-8">

            {/* Header: Shield Icon + DATA AND PRIVACY + Line */}
            <motion.div
              initial={{ opacity: 0.001, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.6, ease: [0.12, 0.23, 0.5, 1] }}
              className="flex items-center gap-3"
            >
              <div className="flex items-center gap-2">
                {/* Shield Icon */}
                <img
                  src="https://framerusercontent.com/images/TRt8OkZ1B4j7B4TuuIPjZZ0f8.svg"
                  className="w-6 h-6 opacity-80"
                  alt=""
                />
                <span className="text-[13px] font-medium tracking-[0.2em] text-[#8491ab] uppercase">
                  ENTERPRISE GRADE
                </span>
              </div>
              {/* Horizontal Line */}
              <div
                className="h-[1px] flex-1 max-w-[200px]"
                style={{ backgroundColor: 'rgba(125, 164, 255, 0.16)' }}
              />
            </motion.div>

            {/* Title Section */}
            <div className="flex flex-col gap-6">
              <motion.h2
                initial={{ opacity: 0.001, scale: 0.9, y: 80 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 2, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white tracking-[-0.02em] leading-[1.1]"
              >
                Comprehensive Security Framework
              </motion.h2>
              <motion.p
                initial={{ opacity: 0.001, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 2.4, duration: 0.6, ease: [0.12, 0.23, 0.5, 1] }}
              className="text-base md:text-lg text-[#b0bed9] leading-relaxed max-w-[520px] lg:max-w-[420px]"
              >
                Protect your organization with multi-layered cybersecurity approach. From perimeter defense to behavioral analytics, every component works together.
              </motion.p>
            </div>

            {/* Feature Points */}
            <div className="flex flex-col gap-3 max-w-[360px]">
              {securityFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0.001, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 1.8 + (i * 0.1), duration: 0.8, ease: [0.12, 0.23, 0.5, 1] }}
                  className="relative flex items-center gap-3 px-4 py-3 rounded-xl"
                >
                  {/* Icon */}
                  <span className="text-white flex-shrink-0">
                    {feature.icon}
                  </span>

                  {/* Feature Title */}
                  <span className="text-[15px] text-[#d1d4e3] font-normal">
                    {feature.title}
                  </span>

                  {/* Border Overlay */}
                  <div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      border: '1px solid rgba(125, 164, 255, 0.16)',
                      background: 'transparent'
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Layered Gradient Images */}
          <motion.div
            className="relative w-full lg:w-[480px] h-[260px] sm:h-[360px] md:h-[440px] lg:h-[480px] flex-shrink-0 overflow-hidden"
            initial={{ opacity: 0.001, y: 80, scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1.6, ease: [0.12, 0.23, 0.5, 1] }}
          >
            <div className="relative w-full h-full flex items-center justify-start lg:justify-center">
              {layeredImages.map((image, i) => (
                <div
                  key={i}
                  className="absolute h-full"
                  style={{
                    zIndex: image.zIndex,
                    transform: `translateX(${image.translateX}px)`,
                    width: 'clamp(180px, 60%, 294px)',
                  }}
                >
                  <figure
                    className="relative w-full h-full"
                    style={{
                      opacity: image.opacity,
                      filter: 'brightness(1.2) saturate(1.1)',
                      WebkitMaskImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.37) 6%, rgb(0, 0, 0) 17%, rgba(0,0,0,1) 100%)',
                      maskImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.37) 6%, rgb(0, 0, 0) 17%, rgba(0,0,0,1) 100%)',
                    }}
                  >
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="294px"
                    />
                  </figure>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

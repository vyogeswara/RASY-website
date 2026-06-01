"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Daniel Reyes",
    role: "Chief Information Security Officer, TechCorp",
    content: "RASY delivers the most effective cybersecurity protection we've experienced — detecting and neutralizing threats faster than any solution we've tested. It has significantly enhanced our security posture and compliance across all systems.",
    image: "https://framerusercontent.com/images/BIY5osAhJGxk35JHUCh9nq0Wro.jpg"
  },
  {
    name: "Sarah Mitchell",
    role: "VP of Risk Management, Financial Group",
    content: "RASY's security solutions have transformed our incident response capability. Their precision and adaptability make them the most reliable cybersecurity partner we've worked with — truly redefining enterprise protection.",
    image: "https://framerusercontent.com/images/oUkBi1c8nERocfQrJWNLxZ9Fipw.jpg"
  },
  {
    name: "Priya Nair",
    role: "Head of Security Operations, Healthcare Network",
    content: "With RASY's cybersecurity platform, our organization has achieved comprehensive visibility, rapid response, and operational resilience. Their threat intelligence is exceptional — like having expert security professionals working 24/7.",
    image: "https://framerusercontent.com/images/d4SpmpLmhUfMZkWsTOukrdAmhg.jpg"
  }
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="framer-1gadtmk relative bg-black py-16 pb-28 md:py-24 md:pb-32 lg:py-32 overflow-hidden">
      {/* Background Gradient */}
      <figure className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="https://framerusercontent.com/images/i8sq3FWUDAbUH2kTIeqGIMeGrwE.webp"
          className="w-full h-full object-cover opacity-40"
          alt=""
        />
      </figure>

      <div className="container relative z-10 px-5 sm:px-6 md:px-10 max-w-[1200px] mx-auto">
        {/* Info Header */}
        <div className="framer-1q1fqtw flex flex-col gap-8 md:gap-12 mb-12 md:mb-20">
          <div className="flex flex-col gap-4">
            <div className="framer-xjRP0 flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-[1px] border border-white/10 bg-[rgb(6,7,10)] w-fit">
                <img src="https://framerusercontent.com/images/BbcmkQqb9ghruMNQHqLHlo3xDs.svg" className="w-6 h-6 opacity-80" alt="" />
                <span className="text-[14px] font-medium tracking-[0.2em] text-[#8491ab]">CLIENT SUCCESS</span>
              </div>
              <div className="h-[1px] flex-1 bg-[rgba(125,164,255,0.16)]" />
            </div>
          </div>
          <div className="framer-fajt0x flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="text-[36px] sm:text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] max-w-[720px]">
              Securing organizations worldwide
            </h2>
            <p className="text-base md:text-xl text-[#b0bed9] max-w-[320px] pb-2">
              Proven security outcomes delivered to industry leaders.
            </p>
          </div>
        </div>

        {/* Slideshow */}
        <div className="relative min-h-[620px] sm:min-h-[560px] lg:min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col lg:flex-row rounded-[22px] md:rounded-[24px] overflow-hidden border border-[rgba(125,164,255,0.16)] bg-white/[0.07] backdrop-blur-[10px]"
            >
              {/* Image */}
              <div className="flex-1 min-h-[240px] sm:min-h-[320px] lg:min-h-[400px]">
                <img
                  src={testimonials[index].image}
                  className="w-full h-full object-cover"
                  alt={testimonials[index].name}
                />
              </div>

              {/* Content */}
              <div className="flex-[1.5] p-6 sm:p-8 md:p-16 flex flex-col justify-between">
                <h4 className="text-xl md:text-3xl font-medium text-white leading-relaxed italic">
                  "{testimonials[index].content}"
                </h4>

                <div className="mt-12 flex flex-col gap-6">
                  <div className="h-[1px] w-full bg-white/10" />
                  <div>
                    <h4 className="text-xl font-medium text-white mb-1">{testimonials[index].name}</h4>
                    <p className="text-[#9ba9c4]">{testimonials[index].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute -bottom-20 left-0 right-0 flex justify-center gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <img src="https://framerusercontent.com/images/qOuFOw2kuPNNF8k8tKQgkPmIh6M.svg" alt="Prev" className="w-10 h-10" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <img src="https://framerusercontent.com/images/TrXvBMsqHSDKAyfhdNEOKiAPYQc.svg" alt="Next" className="w-10 h-10" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

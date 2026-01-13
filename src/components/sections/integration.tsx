"use client";

import React from 'react';
import { motion } from 'framer-motion';

const IntegrationSection = () => {
  const icons = [
    "hdYPy2J7QbpyCYtFC4VUGW13ytI.svg",
    "EvRpOn9wuYvQYZzCfYwtnS65jRE.svg",
    "FQP31xwbbI4n1vs2r24mfuxRGQI.svg",
    "aap1xSJQbafVrLaeVhlLfdpwNZg.svg",
    "QaeKao8eibxNDl43Zp0JVaFeI.svg",
    "7FD49Lwwd6BP9eCtJ1YSgmHeVg.svg",
    "DU8DKlxTsbVIEUdhYPL0FdSSqDY.svg",
    "dRjKz5jULiduxg4HJkqfdEnv54.svg"
  ];

  return (
    <section className="framer-1kdajem relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10 px-6 md:px-10 max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="framer-pucemm flex flex-col gap-12 mb-20">
          <div className="flex flex-col gap-4">
            <div className="framer-xjRP0 flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-[1px] border border-white/10 bg-[rgb(6,7,10)] w-fit">
                <img src="https://framerusercontent.com/images/A2kRK4SXq8SQGtD1igJ3QJKmUH4.svg" className="w-6 h-6 opacity-80" alt="" />
                <span className="text-[14px] font-medium tracking-[0.2em] text-[#8491ab]">INTEGRATION</span>
              </div>
              <div className="h-[1px] flex-1 bg-[rgba(125,164,255,0.16)]" />
            </div>
          </div>
          <div className="framer-1vo01r8 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-[720px]">
              <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-8">
                Smart Versatile Agent driven Integration
              </h2>
              <p className="text-xl text-[#b0bed9] max-w-xl">
                Connect custom or pre-built connectors to your enterprise and third-party apps.
              </p>
            </div>
            <a
              href="/integration"
              className="px-10 py-4 rounded-full bg-white text-black font-bold hover:scale-[1.03] transition-transform shadow-[inset_-4px_3px_9px_0px_rgba(1,117,255,0.3),inset_3px_-2px_8px_0px_rgba(255,205,125,0.3)]"
            >
              Know More
            </a>
          </div>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {icons.map((icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square rounded-[24px] border border-[rgba(125,164,255,0.16)] bg-[#0c0f16] flex items-center justify-center p-10 hover:border-white/20 transition-all"
            >
              <img src={`https://framerusercontent.com/images/${icon}`} className="w-full h-full object-contain" alt="" />
            </motion.div>
          ))}
        </div>

        {/* Bottom illustration part from HTML */}
        <div className="relative w-full flex justify-center py-20 overflow-hidden">
          <div className="relative z-10 flex flex-col gap-8 items-center">
            {/* Row 1 */}
            <div className="flex gap-8">
              <img src="https://framerusercontent.com/images/EvRpOn9wuYvQYZzCfYwtnS65jRE.svg" className="w-12 h-12" alt="" />
              <img src="https://framerusercontent.com/images/Qmeyc8tpcFWa8qeWg0TXT3j1Bk.svg" className="w-12 h-12" alt="" />
              <img src="https://framerusercontent.com/images/qFTOsX8sqXh02Cgi1SGKESFM.svg" className="w-12 h-12" alt="" />
            </div>
            {/* Row 2 */}
            <div className="flex gap-8">
              <img src="https://framerusercontent.com/images/uTYfGCGJhYt5Yt80P0vRCI1ZP3o.svg" className="w-12 h-12" alt="" />
              <img src="https://framerusercontent.com/images/lWkvBfoKqMSbdShmBxYLUjAgtJ8.svg" className="w-12 h-12" alt="" />
              <img src="https://framerusercontent.com/images/MfWFF0DqN6CDcXnTeU91NFCU.svg" className="w-12 h-12" alt="" />
            </div>
          </div>

          {/* Connecting Lines SVG from HTML */}
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[262px] h-[317px] opacity-20" viewBox="0 0 262 317">
            <path d="M 0 0 C 0 86.132 137.5 5 137.5 86.5" stroke="var(--token-991642a5-fe69-44f0-a456-0d249f695158, rgb(1, 117, 255))" fill="none" />
            <path d="M 124 0 C 124 86.63 0 5.029 0 87" stroke="var(--token-991642a5-fe69-44f0-a456-0d249f695158, rgb(1, 117, 255))" fill="none" />
            <path d="M 0 0 C 0 80.5 100 12.5 100 86" stroke="var(--token-991642a5-fe69-44f0-a456-0d249f695158, rgb(1, 117, 255))" fill="none" />
            <path d="M 90 0 C 90 80.5 0 12.5 0 86" stroke="var(--token-991642a5-fe69-44f0-a456-0d249f695158, rgb(1, 117, 255))" fill="none" />
          </svg>
        </div>
      </div>

      {/* Background Gradient */}
      <figure className="absolute inset-0 -z-10 pointer-events-none opacity-30 overflow-hidden">
        <img
          src="https://framerusercontent.com/images/PEUUUxYckhxt8G82fn4Y0LPz5s.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </figure>
    </section>
  );
};

export default IntegrationSection;

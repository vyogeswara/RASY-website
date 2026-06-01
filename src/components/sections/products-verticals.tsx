"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --token-839225cb-b1fc-470d-a0c2-2eb7fcc590b8: #fff
// --token-f4dc11a3-eab6-45ff-bb5d-90cc77e6a1e2: #7da4ff29

// --- Inline SVGs ---

const IconBadge = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80">
    <path fill="#fff" d="M22.5 18h-.75v-2.25A.75.75 0 0 0 21 15h-6a.75.75 0 0 0-.75.75V18H3.75V5.25h16.5v7.5a.75.75 0 1 0 1.5 0v-7.5a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5V18H1.5a.75.75 0 1 0 0 1.5h21a.75.75 0 1 0 0-1.5Zm-6.75-1.5h4.5V18h-4.5v-1.5Z" />
  </svg>
);

const IconHealthcare = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path fill="#fff" d="M6.75 13.5H3A.75.75 0 1 1 3 12h3.349l1.277-1.916a.75.75 0 0 1 1.248 0l2.376 3.562.876-1.312A.75.75 0 0 1 12.75 12H15a.75.75 0 1 1 0 1.5h-1.849l-1.277 1.916a.75.75 0 0 1-1.248 0L8.25 11.852l-.876 1.312a.75.75 0 0 1-.624.336Zm9.938-9.75c-1.936 0-3.631.832-4.688 2.24-1.057-1.408-2.752-2.24-4.688-2.24A5.82 5.82 0 0 0 1.5 9.563v.21A.75.75 0 0 0 3 9.727v-.165A4.318 4.318 0 0 1 7.313 5.25c1.823 0 3.354.971 3.993 2.531a.75.75 0 0 0 1.388 0c.64-1.563 2.17-2.531 3.993-2.531A4.318 4.318 0 0 1 21 9.563c0 5.025-7.29 9.576-9 10.574-1.015-.591-3.997-2.437-6.251-4.894a.752.752 0 0 0-1.234.19.75.75 0 0 0 .128.824c2.922 3.188 6.837 5.314 7.002 5.403a.75.75 0 0 0 .71 0C12.77 21.437 22.5 16.125 22.5 9.562a5.819 5.819 0 0 0-5.813-5.812Z" />
  </svg>
);

const IconMarketing = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path fill="#fff" d="M17.477 11.592a5.98 5.98 0 0 0-1.044-.63c-.375-2.802-2.25-3.685-3.103-3.944-1.854-.562-3.985.112-4.954 1.566a.75.75 0 1 0 1.248.832c.598-.896 2.063-1.327 3.271-.963.933.282 1.577.966 1.89 1.97a7.594 7.594 0 0 0-1.434-.135c-1.305 0-2.527.337-3.438.947-1.072.725-1.663 1.796-1.663 3.015 0 1.93 1.487 3.33 3.535 3.33a4.5 4.5 0 0 0 3.22-1.388c.604-.629 1.313-1.722 1.464-3.479l.103.075C17.52 13.505 18 14.501 18 15.75c0 1.815-1.907 4.5-6 4.5-2.506 0-4.264-.81-5.376-2.479C5.712 16.406 5.25 14.461 5.25 12c0-2.462.462-4.406 1.374-5.771C7.736 4.56 9.494 3.75 12 3.75c3.087 0 5.063 1.242 6.05 3.799a.75.75 0 1 0 1.4-.54C18.25 3.897 15.674 2.25 12 2.25c-3 0-5.232 1.058-6.624 3.146C4.296 7.016 3.75 9.236 3.75 12c0 2.764.547 4.985 1.626 6.604C6.768 20.692 9 21.75 12 21.75c2.82 0 4.584-1.076 5.569-1.978 1.21-1.108 1.931-2.616 1.931-4.022 0-1.72-.7-3.158-2.023-4.158Zm-3.552 3.563a2.995 2.995 0 0 1-2.14.928c-1.013 0-2.035-.563-2.035-1.83 0-1.184 1.125-2.457 3.6-2.457a5.99 5.99 0 0 1 1.65.227c0 1.32-.375 2.401-1.075 3.129v.003Z" />
  </svg>
);

const IconEcommerce = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path fill="#fff" d="M21.576 5.52A.75.75 0 0 0 21 5.25H5.876l-.57-3.134a.75.75 0 0 0-.738-.616H2.25a.75.75 0 0 0 0 1.5h1.688l2.396 13.152c.07.39.243.755.5 1.057a2.625 2.625 0 1 0 4.162.791h4.258a2.625 2.625 0 1 0 2.37-1.5H8.548a.75.75 0 0 1-.738-.616l-.297-1.634h10.875a2.25 2.25 0 0 0 2.214-1.848l1.14-6.268a.75.75 0 0 0-.165-.615ZM9.75 19.124a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Zm9 0a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0Zm.375-6.99a.75.75 0 0 1-.74.615H7.238l-1.09-6H20.1l-.976 5.384Z" />
  </svg>
);

const IconDevelopment = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path fill="#fff" d="m5.47 9.53-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.061 1.06L4.061 6l2.47 2.47A.75.75 0 0 1 5.47 9.53Zm3.75 0a.75.75 0 0 0 1.061 0l3-3a.75.75 0 0 0 0-1.06l-3-3A.75.75 0 1 0 9.22 3.53L11.69 6 9.22 8.47a.75.75 0 0 0 0 1.06Zm9.53-5.78H16.5a.75.75 0 1 0 0 1.5h2.25v13.5H5.25v-6a.75.75 0 1 0-1.5 0v6a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5Z" />
  </svg>
);

// --- Component Logic ---

const tabs = [
  { id: "threat-detection", label: "Threat Detection" },
  { id: "compliance", label: "Compliance" },
  { id: "incident-response", label: "Incident Response" },
];

const contentMap = {
  "threat-detection": {
    title: "Advanced Threat Detection & Prevention",
    description: "Enhance your security operations with intelligent systems that improve threat visibility, response accuracy, and protection across your organization.",
    features: [
      "Real-time Detection — Identify threats instantly",
      "Behavioral Analytics — Predict attacks proactively",
      "Automated Response — Neutralize threats immediately",
    ],
    image: "https://framerusercontent.com/images/7vqU2Ppdy0G0UGP9mrAcNuH6Lo.png",
  },
  "compliance": {
    title: "Regulatory Compliance Solutions",
    description: "Navigate complex security requirements with efficient compliance management for modern enterprises.",
    features: [
      "Risk Assessment — Comprehensive compliance evaluation",
      "Policy Management — Automated security frameworks",
      "Audit Support — Streamlined reporting processes",
    ],
    image: "https://framerusercontent.com/images/7vqU2Ppdy0G0UGP9mrAcNuH6Lo.png",
  },
  "incident-response": {
    title: "Expert Incident Response",
    description: "Rapid threat containment with response capabilities that address security incidents efficiently.",
    features: [
      "Rapid Containment — Immediate threat isolation",
      "Forensic Analysis — Detailed incident investigation",
      "Recovery Planning — Strategic restoration approach",
    ],
    image: "https://framerusercontent.com/images/7vqU2Ppdy0G0UGP9mrAcNuH6Lo.png",
  },
};

const productCards = [
  {
    title: "Healthcare",
    description: "Comprehensive protection for patient data and medical systems.",
    icon: <IconHealthcare />,
    glowBg: "radial-gradient(circle at center, rgba(1, 117, 255, 0.15) 0%, transparent 70%)",
    glowColor: "rgba(1, 117, 255, 0.4)",
    boxShadow: `
      0 0 20px rgba(1, 117, 255, 0.4),
      inset -4px 3px 9px 0px rgb(1,117,255),
      inset 3px -2px 8px 0px rgb(255,205,125)
    `,
  },
  {
    title: "Financial Services",
    description: "Secure banking operations and transaction protection.",
    icon: <IconMarketing />,
    glowBg: "radial-gradient(circle at center, rgba(1, 117, 255, 0.15) 0%, transparent 70%)",
    glowColor: "rgba(1, 117, 255, 0.4)",
    boxShadow: `
      0 0 20px rgba(1, 117, 255, 0.4),
      inset -4px 3px 9px 0px rgb(1,117,255),
      inset 3px -2px 8px 0px rgb(255,205,125)
    `,
  },
  {
    title: "Manufacturing",
    description: "Industrial system and IoT network security.",
    icon: <IconEcommerce />,
    glowBg: "radial-gradient(circle at center, rgba(1, 117, 255, 0.15) 0%, transparent 70%)",
    glowColor: "rgba(1, 117, 255, 0.4)",
    boxShadow: `
      0 0 20px rgba(1, 117, 255, 0.4),
      inset -4px 3px 9px 0px rgb(1,117,255),
      inset 3px -2px 8px 0px rgb(255,205,125)
    `,
  },
  {
    title: "Government",
    description: "Critical infrastructure and public sector security.",
    icon: <IconDevelopment />,
    glowBg: "radial-gradient(circle at center, rgba(1, 117, 255, 0.15) 0%, transparent 70%)",
    glowColor: "rgba(1, 117, 255, 0.4)",
    boxShadow: `
      0 0 20px rgba(1, 117, 255, 0.4),
      inset -4px 3px 9px 0px rgb(1,117,255),
      inset 3px -2px 8px 0px rgb(255,205,125)
    `,
  },
];

export default function ProductsVerticals() {
  const [activeTab, setActiveTab] = useState("threat-detection");
  const current = contentMap[activeTab as keyof typeof contentMap];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-black">

      {/* Background Gradient Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://framerusercontent.com/images/PEUUUxYckhxt8G82fn4Y0LPz5s.png"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
      </div>

      {/* Globe Illustration */}
      <div className="absolute top-0 right-0 -z-10 pointer-events-none opacity-40 mix-blend-screen overflow-hidden max-w-full">
        <img
          src="https://framerusercontent.com/images/LSyUU59PqiiX3GNMxMMlFDJb8I.png"
          className="w-[120vw] md:w-[800px] h-auto object-contain -mr-[20%] md:mr-0"
          alt=""
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 sm:px-6 md:px-10">

        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start text-left">
          <div className="mb-6 flex flex-col items-start gap-4">
            {/* Badge */}
            <div className="flex items-center gap-2 rounded-sm border bg-[rgba(255,255,255,0.03)] px-3 py-1.5 backdrop-blur-sm"
              style={{ borderColor: "#7da4ff29" }}>
              <IconBadge />
              <span className="text-xs font-semibold tracking-wider text-[rgb(132,145,171)]">INDUSTRIES</span>
            </div>
            {/* Break Line */}
            <div className="h-8 w-px bg-[#7da4ff29] ml-4"></div>
          </div>

          <div className="flex w-full flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-[36px] font-normal text-white sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.02em] leading-[1.1]" style={{ fontFamily: '"Inter Display", sans-serif' }}>
              Tailored Security Solutions
            </h2>
            <p className="max-w-sm text-lg text-[rgb(176,190,217)] md:text-right">
              Comprehensive protection across all major industry verticals.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="mb-10 md:mb-14 flex justify-start overflow-x-auto no-scrollbar sm:justify-center">
          <div className="flex max-w-full rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(6,7,10,0.6)] p-1.5 backdrop-blur-md">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative whitespace-nowrap rounded-full px-4 py-3 text-sm font-medium transition-colors sm:px-8"
                style={{
                  color: activeTab === tab.id ? "#000" : "rgb(176, 190, 217)",
                }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-white shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Feature Content */}
        <div className="relative mb-14 overflow-hidden rounded-[24px] border bg-[#0A0C10]/40 shadow-2xl backdrop-blur-xl md:mb-16 md:min-h-[560px] md:rounded-[32px]" style={{ borderColor: "#7da4ff29" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col h-full md:flex-row"
            >
              {/* Left Column */}
              <div className="flex flex-col justify-center p-6 sm:p-8 md:w-[45%] md:p-16">
                <h3 className="mb-4 text-3xl font-medium text-white md:text-[32px] tracking-tight" style={{ fontFamily: '"Inter Display", sans-serif' }}>
                  {current.title}
                </h3>
                <p className="mb-8 md:mb-10 text-[16px] sm:text-[17px] leading-relaxed text-[rgb(176,190,217)]">
                  {current.description}
                </p>

                <div className="flex flex-col gap-3 sm:gap-5">
                  {current.features.map((feature, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-3 rounded-2xl border bg-[rgba(255,255,255,0.02)] p-4 transition-colors hover:bg-[rgba(255,255,255,0.04)] sm:items-center sm:gap-4"
                      style={{ borderColor: "rgba(255,255,255,0.05)" }}
                    >
                      <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#18181B] shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]">
                        <div className="absolute inset-0 rounded-full border border-white/10"></div>
                        <svg width="10" height="8" viewBox="0 0 15 11" fill="none">
                          <path d="M1 5.5L5.5 10L14 1" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-[15px] font-medium text-[rgb(228,228,231)]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="relative min-h-[260px] border-t border-white/5 bg-black/20 sm:min-h-[340px] md:w-[55%] md:min-h-[400px] md:border-l md:border-t-0">
                <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 md:p-12">
                  <motion.img
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    src={current.image}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    alt="Interface"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {productCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center md:items-start md:text-left gap-6 group relative"
            >
              {/* Card Backside Glow */}
              <div
                className="absolute -inset-4 rounded-[40px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                style={{ background: card.glowBg }}
              ></div>

              {/* Logo Box - EXACT 'Get Started' Style */}
              <div className="relative z-10">
                {/* Outer Colored Glow */}
                <div
                  className="absolute -inset-4 rounded-full blur-2xl opacity-40 transition-opacity duration-300 group-hover:opacity-75"
                  style={{ background: card.glowColor }}
                ></div>

                {/* Main Box */}
                <div
                  className="relative flex h-[72px] w-[72px] items-center justify-center rounded-[22px] bg-black transition-transform duration-300 group-hover:scale-105"
                  style={{
                    border: '1px solid rgba(255,255,255,0.4)',
                    boxShadow: card.boxShadow
                  }}
                >
                  {card.icon}
                </div>
              </div>

              <div className="flex flex-col gap-2 relative z-10">
                <h4 className="text-xl font-medium text-white font-['Inter_Display']">{card.title}</h4>
                <p className="text-[15px] leading-relaxed text-[rgb(132,145,171)]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

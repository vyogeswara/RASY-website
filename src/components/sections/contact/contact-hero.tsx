"use client";

import React from "react";
import { motion } from "framer-motion";

const titleText = "Need Enterprise Cybersecurity Solutions?";

const charVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 5 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 }
};

export function ContactHero() {
    return (
        <header className="relative flex flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-28 sm:px-6 md:px-10 md:pb-28 md:pt-44">
            {/* Background Image & Light Leak */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("https://framerusercontent.com/images/3ez5Goty6KdEzujpWDVyu8Um6Ns.webp")',
                        opacity: 0.8
                    }}
                />
                {/* Vertical Light Leak Gradient & Grain overlay could go here if assets were available */}
                <div
                    className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-[#0175ff10] to-black"
                    style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(1, 117, 255, 0.05) 50%, rgba(0,0,0,1) 100%)'
                    }}
                />
            </div>

            <div className="max-w-[1200px] w-full mx-auto text-center relative z-10">
                {/* Section Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 flex items-center justify-center md:mb-10"
                >
                    <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-[#06070a] shadow-lg">
                        <img
                            src="https://framerusercontent.com/images/xDPyxO9KaHgkC204pqOjJmGbwk.svg"
                            className="w-5 h-5 opacity-80"
                            alt=""
                        />
                        <span className="text-[13px] font-medium tracking-[0.25em] text-[#8491ab] uppercase pl-1">
                            CONTACT US
                        </span>
                    </div>
                </motion.div>

                {/* Main Headline with Character Animation */}
                <div className="relative">
                    <h1
                        className="mx-auto max-w-[900px] text-center text-[38px] font-medium leading-[1.08] tracking-[-0.025em] text-white sm:text-[48px] md:text-[64px] lg:text-[88px]"
                        style={{ fontFamily: '"Inter", sans-serif' }}
                    >
                        {titleText.split(" ").map((word, wordIndex) => (
                            <span key={wordIndex} className="inline-block mr-[0.25em]">
                                {word.split("").map((char, charIndex) => (
                                    <motion.span
                                        key={charIndex}
                                        variants={charVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{
                                            duration: 0.8,
                                            delay: (wordIndex * 0.1) + (charIndex * 0.03),
                                            ease: [0.16, 1, 0.3, 1]
                                        }}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>
                </div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto mt-6 max-w-[500px] text-base font-normal leading-relaxed text-[#9ba9c4] md:mt-8 md:text-[20px]"
                >
                    Get expert consultation and discover how RASY can strengthen your organization's security posture.
                </motion.p>
            </div>
        </header>
    );
}

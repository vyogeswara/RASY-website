"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LegalHeroProps {
    badgeLabel: string;
    title: string;
    subtitle?: string;
}

export default function LegalHero({ badgeLabel, title, subtitle }: LegalHeroProps) {
    const titleWords = title.split(" ");

    return (
        <header className="flex flex-col items-center w-full relative overflow-visible bg-black">
            {/* Background Image - The "Gradient Container" from Framer */}
            <div className="absolute inset-0 z-0 select-none overflow-hidden">
                <Image
                    src="https://framerusercontent.com/images/H3Q7Up1GD9JyEYygvN5U7fWpqYQ.webp"
                    alt=""
                    fill
                    className="object-cover object-top opacity-100"
                    priority
                />
                {/* Overlay to ensure text readability if needed, though original uses image directly */}
            </div>

            {/* Container matching extraction: 128px top padding, 40px horizontal */}
            <div
                className="flex flex-col items-center w-full max-w-[1200px] relative z-[2] px-5 sm:px-10"
                style={{ paddingTop: '128px', paddingBottom: '40px', gap: '48px' }}
            >
                <div className="flex flex-col items-center gap-3 w-full">
                    {/* Badge with icon */}
                    <motion.div
                        data-framer-appear-id="badge"
                        initial={{ opacity: 0.001 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center gap-3 px-3 py-3"
                        style={{ borderRadius: "1px" }}
                    >
                        <figure className="w-6 h-6 relative" style={{ opacity: 0.8 }}>
                            <Image
                                src="https://framerusercontent.com/images/GzZ7ms2j5l77qoWJRyXb8SoGZ0s.svg"
                                alt=""
                                width={24}
                                height={24}
                                className="w-full h-full object-cover"
                            />
                        </figure>
                        <p
                            className="text-base font-normal"
                            style={{
                                color: "#fff",
                                fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                                lineHeight: "1.5em",
                            }}
                        >
                            {badgeLabel}
                        </p>
                    </motion.div>

                    {/* Title and Subtitle */}
                    <div className="flex flex-col items-center gap-6 w-full">
                        {/* Title - exact specs from extraction with discrete breakpoints */}
                        <div className="relative">
                            <motion.h1
                                data-framer-appear-id="title"
                                initial={{ opacity: 0.001, transform: "translateY(80px) scale(0.9)" }}
                                whileInView={{ opacity: 1, transform: "translateY(0) scale(1)" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="text-center w-full text-[46px] min-[810px]:text-[58px] min-[1200px]:text-[82px]"
                                style={{
                                    fontFamily: '"Inter Display", "Inter Display Placeholder", sans-serif',
                                    fontWeight: 500,
                                    letterSpacing: "-0.03em",
                                    lineHeight: "1.2em",
                                    color: "#fff",
                                }}
                            >
                                {titleWords.map((word, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{
                                            opacity: 0.001,
                                            filter: "blur(10px)",
                                            transform: "translateY(5px)",
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            filter: "blur(0px)",
                                            transform: "translateY(0)",
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.8,
                                            delay: i * 0.1,
                                            ease: [0.215, 0.61, 0.355, 1],
                                        }}
                                        className="inline-block"
                                        style={{ marginRight: "0.25em" }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.h1>
                        </div>

                        {/* Subtitle */}
                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0.001 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="text-center w-full max-w-[600px] text-[16px] min-[810px]:text-[17px] min-[1200px]:text-[18px]"
                                style={{
                                    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                                    fontWeight: 500,
                                    letterSpacing: "-0.03em",
                                    lineHeight: "1.4em",
                                    color: "#fff",
                                }}
                            >
                                {subtitle}
                            </motion.p>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

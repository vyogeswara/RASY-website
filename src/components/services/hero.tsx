"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Design tokens from Framer
const tokens = {
    white: "#fff",
    black: "#000",
    primaryBlue: "#0175ff",
    accentGold: "#ffcd7d",
};

export function AIHero() {
    return (
        <section
            className="relative w-full flex flex-col items-center overflow-hidden"
            style={{ backgroundColor: tokens.black }}
        >
            {/* Background Gradient Image - Exact from original */}
            <div className="pointer-events-none absolute left-0 right-0 top-0 h-[560px] w-full md:h-[680px] lg:h-[760px]">
                <Image
                    src="https://framerusercontent.com/images/H3Q7Up1GD9JyEYygvN5U7fWpqYQ.webp"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                    style={{ objectPosition: "center top" }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex w-full max-w-[1200px] flex-col items-center gap-5 px-5 pb-14 pt-28 sm:px-6 md:gap-6 md:px-10 md:pb-16 md:pt-40">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-sm"
                    style={{ opacity: 0.8 }}
                >
                    <Image
                        src="https://framerusercontent.com/images/kSe62iNOdnrgkLKL07t29GUEak.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="opacity-80"
                    />
                    <span className="text-xs uppercase tracking-wider text-white">SERVICES</span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 80, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-[760px] text-center text-[38px] font-medium sm:text-5xl md:text-6xl lg:text-[82px]"
                    style={{
                        fontFamily: "'Inter Display', sans-serif",
                        color: tokens.white,
                        letterSpacing: "-0.03em",
                        lineHeight: "1.1em",
                    }}
                >
                    Comprehensive Cybersecurity & AI Solutions
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-[520px] text-center text-base md:text-lg"
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        color: "rgb(209, 212, 227)",
                        fontWeight: 400,
                        lineHeight: "1.5em",
                    }}
                >
                    Explore our integrated portfolio of cybersecurity and AI services designed to protect and transform your enterprise.
                </motion.p>
            </div>
        </section>
    );
}

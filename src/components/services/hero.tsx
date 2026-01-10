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
            <div
                className="absolute top-0 left-0 right-0 w-full pointer-events-none"
                style={{ height: "calc(100vh - 100px)" }}
            >
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
            <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-[1200px] px-5 md:px-10 pt-32 md:pt-40 pb-16">
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
                    className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-medium max-w-[700px]"
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
                    className="text-center text-base md:text-lg max-w-[380px]"
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

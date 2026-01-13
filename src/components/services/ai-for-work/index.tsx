"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Exact color tokens from extraction
export const tokens = {
    // Primary colors
    white: "#fff",
    black: "#000",
    primaryBlue: "#0175ff",
    accentGold: "#ffcd7d",
    brightOrange: "#ffac0a",

    // Text colors
    mutedText: "#d1d4e3",
    secondaryText: "#9ba9c4",
    lightGray: "#ccc",

    // Background colors
    cardBg: "#0c0f16",
    darkBg: "#06070a",
    borderColor: "#2f3950",
    cardBorder: "rgba(125, 164, 255, 0.16)",

    // Opacity variants
    white12: "rgba(255, 255, 255, 0.07)",
    white40: "rgba(255, 255, 255, 0.4)",
    white10: "rgba(255, 255, 255, 0.1)",
    blueGlow: "rgba(125, 164, 255, 0.16)",
};

// Typography presets matching Framer extraction
export const typography = {
    h1: {
        fontFamily: "'Inter Display', sans-serif",
        fontWeight: 500,
        letterSpacing: "-0.03em",
        lineHeight: "1.2em",
        fontSize: { desktop: "82px", tablet: "58px", mobile: "46px" },
    },
    h2: {
        fontFamily: "'Inter Display', sans-serif",
        fontWeight: 400,
        letterSpacing: "-0.02em",
        lineHeight: "1.2em",
        fontSize: { desktop: "56px", tablet: "45px", mobile: "36px" },
    },
    h3: {
        fontFamily: "'Inter Display', sans-serif",
        fontWeight: 400,
        letterSpacing: "0em",
        lineHeight: "1.3em",
        fontSize: { desktop: "36px", tablet: "30px", mobile: "24px" },
    },
    h4: {
        fontFamily: "'Inter Display', sans-serif",
        fontWeight: 500,
        letterSpacing: "-0.02em",
        lineHeight: "1.2em",
        fontSize: { desktop: "24px", tablet: "22px", mobile: "20px" },
    },
    bodyLarge: {
        fontFamily: "'Inter Display', sans-serif",
        fontWeight: 400,
        lineHeight: "1.4em",
        fontSize: { desktop: "18px", tablet: "17px", mobile: "16px" },
    },
    bodyMedium: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        letterSpacing: "-0.03em",
        lineHeight: "1.4em",
        fontSize: { desktop: "18px", tablet: "17px", mobile: "16px" },
    },
    button: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        letterSpacing: "-0.02em",
        lineHeight: "1.2em",
        fontSize: "16px",
    },
};

// Animation presets from extraction
export const animations = {
    heroTitle: {
        initial: { opacity: 0, y: 80, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.8, delay: 0.2 },
    },
    fadeUpSmall: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    },
    featureCard: {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.6 },
    },
};

// Hero Section - exact specs from extraction
export function AIForWorkHero() {
    return (
        <section
            className="relative w-full flex flex-col items-center overflow-hidden"
            style={{ backgroundColor: tokens.black }}
        >
            {/* Background Gradient with mask - framer-1fseo82 */}
            <div
                className="absolute top-[-40px] left-0 right-0 w-full pointer-events-none"
                style={{
                    height: "496px",
                    maskImage: "linear-gradient(#000 0% 66.9816%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(#000 0% 66.9816%, transparent 100%)",
                }}
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

            {/* Content - framer-1d7oax5 */}
            <div
                className="relative z-10 flex flex-col items-center w-full max-w-[1200px]"
                style={{
                    gap: "48px",
                    padding: "128px 40px 40px",
                }}
            >
                {/* Badge - framer-1c1n1ql */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-full"
                    style={{
                        backgroundColor: "rgba(47, 57, 80, 0.4)",
                        border: `1px solid ${tokens.borderColor}`,
                    }}
                >
                    <Image
                        src="https://framerusercontent.com/images/kSe62iNOdnrgkLKL07t29GUEak.svg"
                        alt=""
                        width={24}
                        height={24}
                    />
                    <span
                        className="text-xs font-semibold tracking-wider uppercase"
                        style={{
                            background: `linear-gradient(90deg, ${tokens.primaryBlue} 0%, ${tokens.accentGold} 100%)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        AI FOR WORK
                    </span>
                </motion.div>

                {/* Title - H1 preset */}
                <motion.h1
                    {...animations.heroTitle}
                    className="text-center text-[46px] md:text-[58px] lg:text-[82px]"
                    style={{
                        fontFamily: typography.h1.fontFamily,
                        fontWeight: typography.h1.fontWeight,
                        letterSpacing: typography.h1.letterSpacing,
                        lineHeight: typography.h1.lineHeight,
                        color: tokens.white,
                        maxWidth: "700px",
                    }}
                >
                    Productivity at Scale
                </motion.h1>

                {/* Subtitle - bodyMedium preset */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center text-[16px] md:text-[17px] lg:text-[18px]"
                    style={{
                        fontFamily: typography.bodyMedium.fontFamily,
                        fontWeight: typography.bodyMedium.fontWeight,
                        letterSpacing: typography.bodyMedium.letterSpacing,
                        lineHeight: typography.bodyMedium.lineHeight,
                        color: tokens.white,
                        maxWidth: "310px",
                    }}
                >
                    Search silos, automate workflows, and govern confidently.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-[15px] font-semibold transition-all hover:brightness-110"
                        style={{
                            padding: "14px 24px",
                            backgroundColor: tokens.black,
                            border: `1px solid ${tokens.white40}`,
                            boxShadow: `inset -4px 3px 9px 0px ${tokens.primaryBlue}, inset 3px -2px 8px 0px ${tokens.accentGold}`,
                            fontFamily: typography.button.fontFamily,
                            fontWeight: typography.button.fontWeight,
                            fontSize: typography.button.fontSize,
                            color: tokens.white,
                        }}
                    >
                        Get Started
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

// Feature Card Component - framer-ZDn9o exact specs
interface FeatureCardProps {
    title: string;
    description: string;
    features: string[];
    imageUrl: string;
    reversed?: boolean;
    delay?: number;
}

export function FeatureCard({
    title,
    description,
    features,
    imageUrl,
    reversed = false,
    delay = 0,
}: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay }}
            className="w-full rounded-3xl overflow-hidden"
            style={{
                backgroundColor: tokens.cardBg,
                border: `1px solid ${tokens.borderColor}`,
            }}
        >
            <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                {/* Text Column - framer-1wmr65e */}
                <div
                    className="flex-1 flex flex-col"
                    style={{
                        padding: "40px 0 66px 40px",
                        gap: "40px",
                    }}
                >
                    {/* Header */}
                    <div className="flex flex-col gap-6">
                        <h3
                            className="text-[24px] md:text-[30px] lg:text-[36px]"
                            style={{
                                fontFamily: typography.h3.fontFamily,
                                fontWeight: typography.h3.fontWeight,
                                letterSpacing: typography.h3.letterSpacing,
                                lineHeight: typography.h3.lineHeight,
                                color: tokens.white,
                                maxWidth: "380px",
                            }}
                        >
                            {title}
                        </h3>
                        <p
                            className="text-[16px] md:text-[17px] lg:text-[18px]"
                            style={{
                                fontFamily: typography.bodyLarge.fontFamily,
                                fontWeight: typography.bodyLarge.fontWeight,
                                lineHeight: typography.bodyLarge.lineHeight,
                                color: tokens.mutedText,
                                maxWidth: "400px",
                            }}
                        >
                            {description}
                        </p>
                    </div>

                    {/* Feature Points */}
                    <ul className="flex flex-col gap-5" style={{ maxWidth: "420px" }}>
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                {/* Gradient dot */}
                                <span
                                    className="mt-2 w-[5px] h-[5px] rounded-full flex-shrink-0"
                                    style={{
                                        background: `linear-gradient(148deg, ${tokens.primaryBlue} 0%, ${tokens.brightOrange} 100%)`,
                                    }}
                                />
                                <span
                                    className="text-[16px] md:text-[17px] lg:text-[18px]"
                                    style={{
                                        fontFamily: typography.bodyLarge.fontFamily,
                                        fontWeight: typography.bodyLarge.fontWeight,
                                        lineHeight: typography.bodyLarge.lineHeight,
                                        color: tokens.mutedText,
                                    }}
                                >
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image Column - framer-1955mog */}
                <div
                    className="flex-[1.5] relative overflow-hidden"
                    style={{ height: "558px" }}
                >
                    <div
                        className="relative w-full h-full"
                        style={{ aspectRatio: "1.17832" }}
                    >
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 60vw"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// Accordion/Progress Item - framer-jVKJr
interface AccordionItemProps {
    title: string;
    description: string;
    isActive?: boolean;
    onClick?: () => void;
}

export function AccordionItem({
    title,
    description,
    isActive = false,
    onClick,
}: AccordionItemProps) {
    return (
        <div
            className="flex flex-row cursor-pointer"
            style={{ gap: "24px", width: "544px" }}
            onClick={onClick}
        >
            {/* Progress Bar */}
            <div
                className="relative w-[4px] self-stretch overflow-hidden"
                style={{ backgroundColor: tokens.borderColor }}
            >
                <motion.div
                    className="absolute top-0 left-0 w-full"
                    style={{
                        background: `linear-gradient(180deg, ${tokens.primaryBlue} 0%, ${tokens.accentGold} 100%)`,
                    }}
                    initial={{ height: "0%" }}
                    animate={{ height: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.6 }}
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 gap-4">
                <h4
                    className="text-[20px] md:text-[22px] lg:text-[24px]"
                    style={{
                        fontFamily: typography.h4.fontFamily,
                        fontWeight: typography.h4.fontWeight,
                        letterSpacing: typography.h4.letterSpacing,
                        lineHeight: typography.h4.lineHeight,
                        color: tokens.white,
                    }}
                >
                    {title}
                </h4>
                <p
                    className="text-[16px] md:text-[17px] lg:text-[18px]"
                    style={{
                        fontFamily: typography.bodyLarge.fontFamily,
                        fontWeight: typography.bodyLarge.fontWeight,
                        lineHeight: typography.bodyLarge.lineHeight,
                        color: tokens.mutedText,
                        maxWidth: "428px",
                    }}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}

// Section Header Component
interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
    return (
        <div
            className={`flex flex-col gap-6 ${centered ? 'items-center text-center' : 'items-start text-left'}`}
            style={{ maxWidth: "1200px", width: "100%" }}
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-[36px] md:text-[45px] lg:text-[56px]"
                style={{
                    fontFamily: typography.h2.fontFamily,
                    fontWeight: typography.h2.fontWeight,
                    letterSpacing: typography.h2.letterSpacing,
                    lineHeight: typography.h2.lineHeight,
                    color: tokens.white,
                    maxWidth: "648px",
                }}
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-[16px] md:text-[17px] lg:text-[18px]"
                    style={{
                        fontFamily: typography.bodyMedium.fontFamily,
                        fontWeight: typography.bodyMedium.fontWeight,
                        letterSpacing: typography.bodyMedium.letterSpacing,
                        lineHeight: typography.bodyMedium.lineHeight,
                        color: tokens.mutedText,
                        maxWidth: "310px",
                    }}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}

// CTA Section
export function CTASection() {
    return (
        <section className="w-full flex justify-center px-5 md:px-10 py-20 md:py-32">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-[900px] flex flex-col items-center gap-8 p-12 md:p-16 rounded-3xl text-center"
                style={{
                    background: `linear-gradient(135deg, ${tokens.primaryBlue}15 0%, ${tokens.accentGold}10 100%)`,
                    border: `1px solid ${tokens.borderColor}`,
                }}
            >
                <h2
                    className="text-[30px] md:text-[40px] lg:text-[48px]"
                    style={{
                        fontFamily: typography.h2.fontFamily,
                        fontWeight: typography.h2.fontWeight,
                        letterSpacing: typography.h2.letterSpacing,
                        color: tokens.white,
                    }}
                >
                    Ready to Transform Your Workplace?
                </h2>
                <p
                    className="text-[16px] md:text-[17px] lg:text-[18px] max-w-[500px]"
                    style={{
                        fontFamily: typography.bodyLarge.fontFamily,
                        color: tokens.mutedText,
                    }}
                >
                    Join leading enterprises already using AI to boost productivity and streamline operations.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold transition-all hover:brightness-110"
                        style={{
                            backgroundColor: tokens.primaryBlue,
                            color: tokens.white,
                        }}
                    >
                        Schedule Demo
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold transition-all hover:bg-white/10"
                        style={{
                            backgroundColor: "transparent",
                            border: `1px solid ${tokens.borderColor}`,
                            color: tokens.white,
                        }}
                    >
                        View Pricing
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}

// Export all components
export { tokens as aiForWorkTokens };

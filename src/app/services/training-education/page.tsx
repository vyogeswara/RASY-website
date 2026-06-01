"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/sections/footer";

// Exact color tokens from Framer extraction
const tokens = {
    white: "#fff",
    white60: "rgba(255, 255, 255, 0.6)",
    white40: "rgba(255, 255, 255, 0.4)",
    black: "#06070a", // Updated to match latest extraction --bg-color
    primaryBlue: "#0175ff",
    accentGold: "#ffcd7d",
    brightOrange: "#ffac0a",
    mutedText: "#b0bed9", // Updated to match latest extraction --text-secondary
    lightText: "#d1d4e3",
    cardBg: "#0c0f16",
    darkBg: "#06070a",
    borderColor: "#2f3950",
    cardBorder: "rgba(125, 164, 255, 0.16)",
    easeFramer: [0.23, 1, 0.32, 1] as const,
};

// ============================================================
// HERO SECTION
// ============================================================
function HeroSection() {
    return (
        <section
            className="relative w-full flex flex-col items-center overflow-hidden"
            style={{ backgroundColor: tokens.black }}
        >
            {/* Background Gradient with mask */}
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

            {/* Content */}
            <div
                className="relative z-10 flex w-full max-w-[1200px] flex-col items-center gap-3 px-5 pb-10 pt-28 sm:px-6 md:px-10 md:pt-32"
            >
                {/* Badge with icon - matching reference exactly */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                    style={{
                        backgroundColor: "rgba(47, 57, 80, 0.4)",
                        border: `1px solid ${tokens.borderColor}`,
                    }}
                >
                    <Image
                        src="https://framerusercontent.com/images/kSe62iNOdnrgkLKL07t29GUEak.svg"
                        alt=""
                        width={16}
                        height={16}
                    />
                    {/* White text as shown in reference, not gradient */}
                    <span
                        className="text-[11px] font-semibold tracking-[0.05em] uppercase"
                        style={{ color: tokens.white }}
                    >
                        TRAINING
                    </span>
                </motion.div>

                {/* Title - "AI for Work" */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center text-[38px] sm:text-[46px] md:text-[58px] lg:text-[82px]"
                    style={{
                        fontFamily: "'Inter Display', sans-serif",
                        fontWeight: 500,
                        letterSpacing: "-0.03em",
                        lineHeight: "1.2em",
                        color: tokens.white,
                        maxWidth: "700px",
                    }}
                >
                    Knowledge Empowerment Programs
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-[520px] text-center text-[15px] md:text-[18px]"
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        letterSpacing: "-0.03em",
                        lineHeight: "1.4em",
                        color: tokens.white,
                        maxWidth: "520px",
                    }}
                >
                    Build internal capabilities with comprehensive training on cybersecurity, AI, and emerging technologies.
                </motion.p>
            </div>
        </section>
    );
}

// ============================================================
// FEATURES SECTION - Redesigned to match Framer reference
// ============================================================
const productivityFeatures = [
    {
        id: "cybersecurity-training",
        title: "Security Awareness Programs",
        description: "Comprehensive cybersecurity training for employees, IT staff, and security professionals covering threat awareness, best practices, and incident response.",
        image: "https://framerusercontent.com/images/JAFiHCatbTzsAuqWSmAKNN7zvsE.png",
    },
    {
        id: "ai-ml-courses",
        title: "Artificial Intelligence Education",
        description: "Hands-on courses covering AI fundamentals, machine learning applications, and practical implementation strategies for business environments.",
        image: "https://framerusercontent.com/images/UgBJAGjjD29VPKkOzaxCyabIMgU.png",
    },
    {
        id: "prompt-engineering",
        title: "Advanced AI Prompting",
        description: "Specialized training on effective AI interaction, prompt optimization, and advanced techniques for maximizing AI tool productivity.",
        image: "https://framerusercontent.com/images/rrNtQU2aDjYf4aSs1WeRTIkZ3Ws.png",
    },
    {
        id: "certification-prep",
        title: "Professional Certification Training",
        description: "Intensive preparation courses for industry certifications including CISSP, CISM, CEH, and other recognized security credentials.",
        image: "https://framerusercontent.com/images/jCSaG9tDLaK5W1D60NcPCLAvK78.png",
    },
];

function ProductivitySection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Scroll-triggered activation using IntersectionObserver
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -40% 0px", // Triggers when item is in middle of screen
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute("data-index"));
                    if (!isNaN(index)) {
                        setActiveIndex(index);
                    }
                }
            });
        }, observerOptions);

        // Observe all feature items
        itemRefs.current.forEach((item: HTMLDivElement | null) => {
            if (item) observer.observe(item);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="features-section w-full flex justify-center"
            style={{
                padding: "clamp(56px, 8vw, 100px) 20px",
                backgroundColor: tokens.black,
            }}
        >
            <div
                className="container w-full flex flex-col"
                style={{
                    maxWidth: "1200px",
                    gap: "40px",
                }}
            >
                {/* Section Label */}
                <div className="section-label-wrapper flex flex-col w-full max-w-[200px] mb-5">
                    <div className="section-label flex items-center gap-3 pb-3">
                        <img
                            src="https://framerusercontent.com/images/kSe62iNOdnrgkLKL07t29GUEak.svg"
                            alt=""
                            className="w-5 h-5 opacity-80"
                        />
                        <span
                            className="text-[12px] font-semibold tracking-[0.1em] uppercase"
                            style={{ color: "#8491ab" }}
                        >
                            FEATURES
                        </span>
                    </div>
                    <div
                        className="w-full h-[1px]"
                        style={{ backgroundColor: "rgba(125, 164, 255, 0.16)" }}
                    />
                </div>

                {/* Main Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-[36px] md:text-[42px] lg:text-[48px] mb-6"
                    style={{
                        fontFamily: "'Inter Display', 'Inter', sans-serif",
                        fontWeight: 500,
                        letterSpacing: "-0.02em",
                        lineHeight: "1.1",
                        color: tokens.white,
                    }}
                >
                    Comprehensive learning ecosystem
                </motion.h2>

                {/* Two Column Layout: Accordion Left + Sticky Image Right */}
                <div className="features-grid grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">

                    {/* Left: Accordion List with Beam Glow */}
                    <div className="features-list-wrapper relative overflow-visible">
                        {/* Bright Blue Beam Glow Effect */}
                        <div
                            className="beam-glow absolute pointer-events-none"
                            style={{
                                top: "0px",
                                left: "-150px",
                                width: "500px",
                                height: "600px",
                                background: "radial-gradient(ellipse 60% 50% at 30% 40%, rgba(1, 117, 255, 0.25) 0%, rgba(1, 117, 255, 0.15) 25%, rgba(1, 117, 255, 0.08) 50%, transparent 80%)",
                                filter: "blur(80px)",
                                zIndex: 0,
                            }}
                        />
                        <div className="features-list relative z-10 flex flex-col">
                            {productivityFeatures.map((feature, index) => (
                                <div
                                    key={feature.id}
                                    ref={(el) => { itemRefs.current[index] = el; }}
                                    data-index={index}
                                    className="feature-item flex gap-6 py-8 cursor-pointer transition-opacity duration-300"
                                    style={{
                                        opacity: activeIndex === index ? 1 : 0.5,
                                    }}
                                >
                                    {/* Progress Bar Line with Glow */}
                                    <div
                                        className="progress-bar relative w-[4px] rounded-full flex-shrink-0 overflow-hidden"
                                        style={{
                                            backgroundColor: "rgba(125, 164, 255, 0.16)",
                                            minHeight: "100%",
                                        }}
                                    >
                                        {/* The Fill (Bright Blue "Glow") */}
                                        <div
                                            className="progress-fill absolute top-0 left-0 w-full rounded-full transition-all duration-300 ease-out"
                                            style={{
                                                height: activeIndex === index ? "100%" : "0%",
                                                background: tokens.primaryBlue,
                                                boxShadow: activeIndex === index
                                                    ? "0 0 20px rgba(1, 117, 255, 0.6)"
                                                    : "none",
                                            }}
                                        />
                                    </div>

                                    {/* Text Content */}
                                    <div className="feature-text-content flex flex-col gap-3">
                                        <h4
                                            className="text-[20px] md:text-[24px] transition-colors duration-300"
                                            style={{
                                                fontFamily: "'Inter Display', 'Inter', sans-serif",
                                                fontWeight: 500,
                                                color: activeIndex === index ? tokens.white : "#8491ab",
                                            }}
                                        >
                                            {feature.title}
                                        </h4>
                                        {/* Description - visible when active */}
                                        <div
                                            className="overflow-hidden transition-all duration-400 ease-out"
                                            style={{
                                                maxHeight: activeIndex === index ? "200px" : "0px",
                                                opacity: activeIndex === index ? 1 : 0,
                                            }}
                                        >
                                            <p
                                                className="text-[16px] md:text-[17px]"
                                                style={{
                                                    color: "#9ba9c4",
                                                    lineHeight: "1.5",
                                                    maxWidth: "428px",
                                                }}
                                            >
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Sticky Image Area */}
                    <div
                        className="features-visual rounded-[24px] overflow-hidden lg:sticky lg:top-[100px]"
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.02)",
                            border: "1px solid rgba(125, 164, 255, 0.16)",
                            aspectRatio: "1.38",
                            height: "fit-content",
                        }}
                    >
                        {/* Image Stack - all images stacked, only active visible */}
                        <div className="image-stack relative w-full h-full" style={{ aspectRatio: "1.38" }}>
                            {productivityFeatures.map((feature, index) => (
                                <div
                                    key={feature.id}
                                    className="absolute inset-0 transition-opacity duration-500 ease-out"
                                    style={{
                                        opacity: activeIndex === index ? 1 : 0,
                                        transform: activeIndex === index ? "scale(1)" : "scale(1.02)",
                                        transition: "opacity 0.5s ease, transform 0.5s ease",
                                    }}
                                >
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============================================================
// USE CASES SECTION - Redesigned to match Framer reference
// ============================================================
const useCaseTabs = [
    { id: "executive", label: "Executive Training" },
    { id: "technical", label: "Technical Training" },
    { id: "end-user", label: "End User Training" },
];

const useCaseContent = {
    executive: {
        title: "Leadership Education",
        description: "Strategic-level training for executives and senior management on cybersecurity governance, AI strategy, and digital transformation leadership.",
        points: [
            "Cybersecurity governance frameworks",
            "AI business strategy development",
            "Risk management principles",
        ],
        image: "https://framerusercontent.com/images/H41THCm5hzJ21MHFXgWOF0U1A8.png",
    },
    technical: {
        title: "IT Professional Development",
        description: "Technical deep-dives for IT staff, security analysts, and system administrators on implementation and management of security tools.",
        points: [
            "Security tool configuration",
            "Incident response procedures",
            "Vulnerability assessment techniques",
        ],
        image: "https://framerusercontent.com/images/S6qhynP9ADhGSrcmesNShKbhLzU.png",
    },
    "end-user": {
        title: "Employee Security Awareness",
        description: "Comprehensive security awareness training for all employees covering threat recognition, safe practices, and organizational policies.",
        points: [
            "Phishing identification techniques",
            "Password security best practices",
            "Data handling procedures",
        ],
        image: "https://framerusercontent.com/images/fYPuA00TBehoBvUgqahwF73n6E.png",
    },
};

// Gradient checkmark SVG component
const GradientCheckmark = () => (
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
        <defs>
            <linearGradient id="gradient-check" x1="13" y1="0.898" x2="0" y2="7.602" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFAC08" />
                <stop offset="1" stopColor="#0075FF" />
            </linearGradient>
        </defs>
        <path d="M1 5.5L5 9.5L14 1" stroke="url(#gradient-check)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

function UseCasesSection() {
    const [activeTab, setActiveTab] = useState("executive");
    const currentContent = useCaseContent[activeTab as keyof typeof useCaseContent];

    return (
        <section
            className="use-cases-section w-full flex justify-center"
            style={{
                padding: "clamp(56px, 8vw, 100px) 20px",
                backgroundColor: tokens.black,
            }}
        >
            <div
                className="container w-full flex flex-col items-center"
                style={{
                    maxWidth: "1200px",
                    gap: "60px",
                }}
            >
                {/* Section Header - Two column: Label+Title left, Subtitle right */}
                <div className="section-header w-full flex flex-col lg:flex-row justify-between items-start gap-10">
                    {/* Left side: Label + Title */}
                    <div className="flex flex-col gap-8 flex-1">
                        {/* Section Label */}
                        <div className="section-label-wrapper flex flex-col w-full max-w-[200px]">
                            <div className="section-label flex items-center gap-3 pb-3">
                                <img
                                    src="https://framerusercontent.com/images/x7XTNLlWxYwjujzGoOnLndNCk.svg"
                                    alt=""
                                    className="w-5 h-5 opacity-80"
                                />
                                <span
                                    className="text-[12px] font-semibold tracking-[0.1em] uppercase"
                                    style={{ color: "#8491ab" }}
                                >
                                    USECASES
                                </span>
                            </div>
                            <div
                                className="w-full h-[1px]"
                                style={{ backgroundColor: "rgba(125, 164, 255, 0.16)" }}
                            />
                        </div>

                        {/* Main Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-[36px] md:text-[42px] lg:text-[48px]"
                            style={{
                                fontFamily: "'Inter Display', 'Inter', sans-serif",
                                fontWeight: 500,
                                letterSpacing: "-0.02em",
                                lineHeight: "1.1",
                                color: tokens.white,
                            }}
                        >
                            Targeted learning paths
                        </motion.h2>
                    </div>

                    {/* Right side: Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[16px] md:text-[17px] lg:text-[18px] text-left lg:text-right lg:pt-16"
                        style={{
                            color: "#8491ab",
                            lineHeight: "1.5",
                            maxWidth: "320px",
                        }}
                    >
                        Customized training programs for different organizational roles and skill levels.
                    </motion.p>
                </div>

                {/* Tabs Navigation - Pill style */}
                <div className="tabs-nav flex gap-2 flex-wrap justify-center">
                    {useCaseTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className="px-6 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300"
                            style={{
                                backgroundColor: activeTab === tab.id ? "#fff" : "rgba(255, 255, 255, 0.07)",
                                color: activeTab === tab.id ? "#000" : tokens.white,
                                border: activeTab === tab.id ? "1px solid #fff" : "1px solid rgba(125, 164, 255, 0.16)",
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content Wrapper */}
                <div
                    className="tabs-content-wrapper w-full rounded-[24px] overflow-hidden"
                    style={{
                        backgroundColor: "#0c0f16",
                        border: "1px solid rgba(125, 164, 255, 0.16)",
                    }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="tab-pane grid grid-cols-1 gap-8 lg:grid-cols-[360px_1fr] lg:gap-16 xl:grid-cols-[400px_1fr]"
                        >
                            {/* Left Column - Text & Features */}
                            <div className="text-column flex flex-col justify-center p-8 lg:p-10">
                                <h3
                                    className="text-[28px] md:text-[32px] mb-4"
                                    style={{
                                        fontFamily: "'Inter Display', 'Inter', sans-serif",
                                        fontWeight: 500,
                                        color: tokens.white,
                                    }}
                                >
                                    {currentContent.title}
                                </h3>
                                <p
                                    className="text-[15px] md:text-[16px] mb-10"
                                    style={{
                                        color: "#8491ab",
                                        lineHeight: "1.6",
                                    }}
                                >
                                    {currentContent.description}
                                </p>

                                {/* Feature List */}
                                <div className="feature-list flex flex-col gap-4">
                                    {currentContent.points.map((point, index) => (
                                        <div
                                            key={index}
                                            className="feature-card rounded-xl px-5 py-4 transition-all duration-200"
                                            style={{
                                                backgroundColor: "rgba(255, 255, 255, 0.03)",
                                                border: "1px solid rgba(125, 164, 255, 0.16)",
                                            }}
                                        >
                                            <div className="feature-content flex justify-between items-center gap-4">
                                                <span
                                                    className="text-[14px] md:text-[15px] font-medium"
                                                    style={{ color: "#d1d4e3" }}
                                                >
                                                    {point}
                                                </span>
                                                <div
                                                    className="feature-icon w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                                    style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                                >
                                                    <GradientCheckmark />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column - Image */}
                            <div
                                className="image-column relative overflow-hidden"
                                style={{
                                    minHeight: "400px",
                                    background: "#000",
                                }}
                            >
                                <div className="image-wrapper relative w-full h-full">
                                    <Image
                                        src={currentContent.image}
                                        alt={currentContent.title}
                                        fill
                                        className="object-cover object-top"
                                        style={{
                                            maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                                            WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

// ============================================================
// WHY AI FOR WORK SECTION - Standardized from HTML Extraction
// ============================================================
const whyFeatures = [
    {
        icon: "https://framerusercontent.com/images/ONFFI40SIu5XBKpS7DpbI6AoFiQ.svg",
        title: "Improved security posture",
        description: "Reduce security incidents through educated employees who can identify and respond appropriately to cyber threats.",
    },
    {
        icon: "https://framerusercontent.com/images/hUO59zHqoxPubqUshqfD4pUJeGs.svg",
        title: "Internal capability building",
        description: "Develop in-house expertise that reduces dependency on external resources and accelerates technology adoption.",
    },
    {
        icon: "https://framerusercontent.com/images/TySVWNut65QwJpR7GO4QnKD0.svg",
        title: "Regulatory compliance",
        description: "Meet training requirements for various compliance standards while improving overall organizational security awareness.",
    },
];

function WhySection() {
    return (
        <section
            className="why-section"
            style={{
                padding: "clamp(56px, 8vw, 100px) 20px",
                backgroundColor: "#06070a",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div
                className="container"
                style={{
                    maxWidth: "1200px",
                    width: "100%",
                }}
            >
                {/* Header Area */}
                <div className="why-header" style={{ marginBottom: "60px" }}>
                    {/* Label Row - Stacked: icon+text on top, line below */}
                    <div
                        className="label-wrapper"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                            marginBottom: "24px",
                        }}
                    >
                        <div
                            className="label-content"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                color: tokens.mutedText,
                            }}
                        >
                            {/* Question Mark Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ opacity: 0.7 }}
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                            <span
                                style={{
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    letterSpacing: "0.05em",
                                }}
                            >
                                WHY
                            </span>
                        </div>
                        {/* Line on new row below */}
                        <div
                            className="label-line"
                            style={{
                                width: "100%",
                                height: "1px",
                                backgroundColor: "rgba(125, 164, 255, 0.16)",
                            }}
                        />
                    </div>

                    {/* Headline Wrapper - Two Column on Desktop */}
                    <div
                        className="headline-wrapper flex flex-col md:flex-row md:justify-between md:items-center"
                        style={{ gap: "20px" }}
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="main-title"
                            style={{
                                color: tokens.white,
                                fontSize: "clamp(36px, 5vw, 56px)",
                                fontWeight: 500,
                                letterSpacing: "-0.03em",
                                margin: 0,
                                lineHeight: 1.1,
                            }}
                        >
                            Why Invest in Training?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="sub-text"
                            style={{
                                color: tokens.mutedText,
                                fontSize: "18px",
                                lineHeight: 1.5,
                                maxWidth: "400px",
                                margin: 0,
                            }}
                        >
                            Build organizational resilience through knowledge empowerment and skill development.
                        </motion.p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div
                    className="cards-grid grid grid-cols-1 md:grid-cols-3"
                    style={{ gap: "24px" }}
                >
                    {whyFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            className="feature-card"
                            style={{
                                backgroundColor: "#0c0f16",
                                border: "1px solid rgba(125, 164, 255, 0.16)",
                                borderRadius: "24px",
                                padding: "24px",
                                position: "relative",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                transition: "transform 0.3s ease",
                            }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Icon with Gradient Border */}
                            <div
                                className="icon-gradient-border"
                                style={{
                                    width: "62px",
                                    height: "62px",
                                    borderRadius: "16px",
                                    padding: "1px",
                                    background: "linear-gradient(40deg, #ffcd7d 0%, #0c0f16 45%, #0175ff 100%)",
                                    boxShadow: "0px 6px 24px 0px rgba(255, 179, 73, 0.25)",
                                    marginBottom: "60px",
                                }}
                            >
                                <div
                                    className="icon-inner"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "#0c0f16",
                                        borderRadius: "15px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        style={{ width: "32px", height: "32px" }}
                                    />
                                </div>
                            </div>

                            {/* Card Text */}
                            <div className="card-text" style={{ position: "relative", zIndex: 2 }}>
                                <h3
                                    style={{
                                        color: tokens.white,
                                        fontSize: "20px",
                                        fontWeight: 600,
                                        margin: "0 0 12px 0",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    style={{
                                        color: tokens.mutedText,
                                        fontSize: "16px",
                                        lineHeight: 1.5,
                                        margin: 0,
                                    }}
                                >
                                    {feature.description}
                                </p>
                            </div>

                            {/* Bottom Right Blue Glow */}
                            <div
                                className="card-glow"
                                style={{
                                    position: "absolute",
                                    bottom: "-50px",
                                    right: "-50px",
                                    width: "200px",
                                    height: "200px",
                                    background: "radial-gradient(circle, rgba(1, 117, 255, 0.15) 0%, rgba(0,0,0,0) 70%)",
                                    pointerEvents: "none",
                                    zIndex: 1,
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}




// ============================================================
// MAIN PAGE COMPONENT - No separate CTA (already in footer)
// ============================================================
export default function AIForWorkPage() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: tokens.black }}>
            <HeroSection />
            <ProductivitySection />
            <UseCasesSection />
            <WhySection />
            <Footer />
        </main>
    );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

// Tokens from style.css
const tokens = {
    bgDark: "#06070a",
    textPrimary: "#fff",
    textSecondary: "#9ba9c4",
    textMuted: "#8491ab",
    accentBlue: "#0175ff",
    accentGold: "#ffac08",
    cardBg: "#0c0f16",
    borderDim: "rgba(125, 164, 255, 0.16)",
    borderLight: "rgba(255, 255, 255, 0.1)",
    fontStack: "'Inter', sans-serif",
    easeFramer: [0.12, 0.23, 0.5, 1] as const,
};

// ============================================================
// HERO SECTION
// ============================================================
function HeroSection() {
    return (
        <section className="relative pt-[160px] pb-[100px] text-center overflow-hidden">
            {/* Background Gradient Mask */}
            <div
                className="absolute top-0 left-0 w-full h-full z-0 opacity-60"
                style={{
                    maskImage: "linear-gradient(180deg, #000 0%, transparent 80%)",
                    WebkitMaskImage: "linear-gradient(180deg, #000 0%, transparent 80%)",
                }}
            >
                <Image
                    src="https://framerusercontent.com/images/H3Q7Up1GD9JyEYygvN5U7fWpqYQ.webp"
                    alt="Gradient Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative z-10 flex flex-col items-center px-5 container max-w-[1200px] mx-auto">
                {/* Tag Pill */}
                <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[99px] mb-6"
                    style={{
                        background: "rgba(255,255,255,0.08)",
                        border: `1px solid rgba(255,255,255,0.1)`,
                    }}
                >
                    <Image
                        src="https://framerusercontent.com/images/MRmuOBoDk7tTbd9wZjGly9VAk.svg"
                        alt=""
                        width={20}
                        height={20}
                    />
                    <span
                        className="text-[12px] font-semibold tracking-[0.05em] text-white"
                        style={{ fontFamily: tokens.fontStack }}
                    >
                        PRODUCTS
                    </span>
                </div>

                {/* Hero Title */}
                <h1
                    className="text-[48px] md:text-[82px] leading-[1.1] mb-5 font-medium"
                    style={{
                        background: "linear-gradient(to bottom, #fff, #999)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        letterSpacing: "-0.03em",
                    }}
                >
                    AI for Process
                </h1>

                {/* Hero Subtext */}
                <p
                    className="text-[18px] md:text-[20px] max-w-[600px] mx-auto"
                    style={{ color: tokens.textSecondary, letterSpacing: "-0.01em" }}
                >
                    Simplify complex business processes with autonomous AI agents.
                </p>
            </div>
        </section>
    );
}

// ============================================================
// FEATURES SECTION
// ============================================================
const featuresData = [
    {
        title: "Process automation",
        desc: "Automate complex processes with expert AI reasoning, event triggers, and built-in security and compliance.",
        img: "https://framerusercontent.com/images/7nFcs3y3i8L4BB1sIO0zwAnfxKo.png",
    },
    {
        title: "AI analytics + monitoring",
        desc: "Gain full visibility, control, and insights into AI agent performance and optimization across enterprise systems.",
        img: "https://framerusercontent.com/images/32HzuT64SyArh6QGBEHvbT8a4wc.png",
    },
    {
        title: "Pre-built process templates",
        desc: "Access a growing library of 75+ ready-to-use prompt and process templates for faster, smarter enterprise deployment.",
        img: "https://framerusercontent.com/images/egSJYMx3tRAnzj12cWFjQtsJA.png",
    },
    {
        title: "Seamless System Integration",
        desc: "Connect effortlessly with enterprise apps, data sources, and clouds for unified, scalable, and secure automation.",
        img: "https://framerusercontent.com/images/RQBJ1F2RPqlo57O4iQ9CUsP9WR0.png",
    },
];

function FeaturesSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-45% 0px -45% 0px",
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

        itemRefs.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-[100px] px-5">
            <div className="container max-w-[1200px] mx-auto w-full relative z-10">
                {/* Section Label */}
                <div className="flex flex-col w-full mb-10">
                    <div className="flex items-center gap-3 mb-5">
                        <Image
                            src="https://framerusercontent.com/images/kSe62iNOdnrgkLKL07t29GUEak.svg"
                            alt=""
                            width={24}
                            height={24}
                            className="opacity-70"
                        />
                        <span className="text-[13px] font-semibold" style={{ color: tokens.textMuted }}>
                            FEATURES
                        </span>
                        <div className="h-[1px] flex-grow" style={{ background: tokens.borderDim }} />
                    </div>
                    <h2 className="text-[36px] md:text-[56px] font-medium tracking-[-0.03em] text-white mb-[60px]">
                        Process Intelligence
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[80px] items-start pb-[100px]">
                    {/* Left: Accordion List */}
                    <div className="flex flex-col relative">
                        {/* Bright Blue Beam Glow Effect - Standardized */}
                        <div
                            className="absolute pointer-events-none"
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
                        {featuresData.map((feature, index) => (
                            <div
                                key={index}
                                ref={(el) => { itemRefs.current[index] = el; }}
                                data-index={index}
                                className="flex gap-6 py-6 cursor-pointer transition-opacity duration-400 relative z-10"
                                style={{ opacity: activeIndex === index ? 1 : 0.5 }}
                                onClick={() => setActiveIndex(index)}
                            >
                                {/* Progress Track */}
                                <div
                                    className="w-1 relative flex-shrink-0 bg rounded-full overflow-hidden"
                                    style={{ background: tokens.borderDim, borderRadius: "99px", opacity: 0.6 }}
                                >
                                    {/* Progress Bar - Full Beam (Standardized) used instead of 40px pill */}
                                    <div
                                        className="absolute top-0 w-full transition-all duration-400"
                                        style={{
                                            background: tokens.accentBlue,
                                            height: activeIndex === index ? "100%" : "0%",
                                            boxShadow: activeIndex === index ? "0 0 20px rgba(1, 117, 255, 0.6)" : "none",
                                            transitionTimingFunction: "cubic-bezier(0.12, 0.23, 0.5, 1)",
                                            borderRadius: "99px",
                                        }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col">
                                    <h3
                                        className="text-[24px] font-medium mb-2.5 tracking-[-0.03em] text-white"
                                    >
                                        {feature.title}
                                    </h3>
                                    <div
                                        className="overflow-hidden transition-all duration-400"
                                        style={{
                                            maxHeight: activeIndex === index ? "100px" : "0px",
                                            marginTop: activeIndex === index ? "5px" : "0px",
                                            transitionTimingFunction: "cubic-bezier(0.12, 0.23, 0.5, 1)",
                                        }}
                                    >
                                        <p
                                            className="text-[16px] leading-[1.5]"
                                            style={{ color: tokens.textSecondary }}
                                        >
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Sticky Images */}
                    <div
                        className="hidden lg:block sticky rounded-[24px] overflow-hidden border"
                        style={{
                            top: "120px",
                            height: "500px",
                            background: "rgba(255,255,255,0.02)",
                            borderColor: tokens.borderDim,
                        }}
                    >
                        {featuresData.map((feature, index) => (
                            <div
                                key={index}
                                className="absolute top-0 left-0 w-full h-full transition-all duration-500"
                                style={{
                                    opacity: activeIndex === index ? 1 : 0,
                                    transform: activeIndex === index ? "scale(1)" : "scale(1.02)",
                                }}
                            >
                                <Image
                                    src={feature.img}
                                    alt={feature.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============================================================
// USE CASES SECTION (TABS)
// ============================================================
const useCasesData = {
    nocode: {
        title: "No-Code Use-cases",
        desc: "Accelerate automation and simplify operations with no-code builders, ready-to-use templates, and powerful API triggers.",
        items: [
            "Workflow Builder",
            "Ready-to-use Process Templates",
            "Automated API Integrations",
        ],
        img: "https://framerusercontent.com/images/8DhrfI0aeLSSaHXexLgb268cj0.png",
    },
    analytics: {
        title: "Analytics Use-cases",
        desc: "Deliver stronger business results with powerful, actionable insights and advanced, adaptive contextual AI intelligence.",
        items: [
            "Gain real-time visibility",
            "Connect seamlessly",
            "Enable agents to retain context",
        ],
        img: "https://framerusercontent.com/images/xYRP0NGbbeyqNkY4GNc9t9gifck.png",
    },
    cloud: {
        title: "Cloud Use-cases",
        desc: "Stay flexible and future-proof operations with support for any model or cloud. Seamlessly adapt to evolving technologies without disruption.",
        items: [
            "Deploy commercial and custom AI models",
            "Connect and manage open-source models",
            "Support and integrate across any cloud",
        ],
        img: "https://framerusercontent.com/images/iofMa5RHRQUv48fRqFQbx3zE.png",
    },
};

// Gradient checkmark SVG component
const GradientCheckmark = () => (
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
        <defs>
            <linearGradient id="gradient-check-process" x1="13" y1="0.898" x2="0" y2="7.602" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFAC08" />
                <stop offset="1" stopColor="#0075FF" />
            </linearGradient>
        </defs>
        <path d="M1 5.5L5 9.5L14 1" stroke="url(#gradient-check-process)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

function UseCasesSection() {
    const [activeTab, setActiveTab] = useState<"nocode" | "analytics" | "cloud">("nocode");

    // Mapping tab keys to button labels
    const tabLabels = {
        nocode: "No-Code Tool",
        analytics: "AI Analytics",
        cloud: "Cloud Agnostic",
    };

    return (
        <section
            className="use-cases-section w-full flex justify-center"
            style={{
                padding: "100px 20px",
                backgroundColor: tokens.bgDark,
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
                                <Image
                                    src="https://framerusercontent.com/images/x7XTNLlWxYwjujzGoOnLndNCk.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="opacity-80"
                                />
                                <span
                                    className="text-[12px] font-semibold tracking-[0.1em] uppercase"
                                    style={{ color: tokens.textMuted }}
                                >
                                    USECASES
                                </span>
                            </div>
                            <div
                                className="w-full h-[1px]"
                                style={{ backgroundColor: tokens.borderDim }}
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
                                color: tokens.textPrimary,
                            }}
                        >
                            Any use case, one solution
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
                            color: tokens.textMuted,
                            lineHeight: "1.5",
                            maxWidth: "320px",
                        }}
                    >
                        Unify every workflow and process under one intelligent AI platform.
                    </motion.p>
                </div>

                {/* Tabs Navigation - Pill style, Centered */}
                <div className="tabs-nav flex gap-2 flex-wrap justify-center">
                    {(["nocode", "analytics", "cloud"] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className="px-6 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300"
                            style={{
                                backgroundColor: activeTab === tab ? "#fff" : "rgba(255, 255, 255, 0.07)",
                                color: activeTab === tab ? "#000" : tokens.textPrimary,
                                border: activeTab === tab ? "1px solid #fff" : `1px solid ${tokens.borderDim}`,
                            }}
                        >
                            {tabLabels[tab]}
                        </button>
                    ))}
                </div>

                {/* Tab Content Wrapper - Card */}
                <div
                    className="tabs-content-wrapper w-full rounded-[24px] overflow-hidden"
                    style={{
                        backgroundColor: tokens.cardBg,
                        border: `1px solid ${tokens.borderDim}`,
                    }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="tab-pane grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-10 lg:gap-16"
                        >
                            {/* Left Column - Text & Features */}
                            <div className="text-column flex flex-col justify-center p-8 lg:p-10">
                                <h3
                                    className="text-[28px] md:text-[32px] mb-4"
                                    style={{
                                        fontFamily: "'Inter Display', 'Inter', sans-serif",
                                        fontWeight: 500,
                                        color: tokens.textPrimary,
                                    }}
                                >
                                    {useCasesData[activeTab].title}
                                </h3>
                                <p
                                    className="text-[15px] md:text-[16px] mb-10"
                                    style={{
                                        color: tokens.textMuted,
                                        lineHeight: "1.6",
                                    }}
                                >
                                    {useCasesData[activeTab].desc}
                                </p>

                                {/* Feature List - Card Style */}
                                <div className="feature-list flex flex-col gap-4">
                                    {useCasesData[activeTab].items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="feature-card rounded-xl px-5 py-4 transition-all duration-200"
                                            style={{
                                                backgroundColor: "rgba(255, 255, 255, 0.03)",
                                                border: `1px solid ${tokens.borderDim}`,
                                            }}
                                        >
                                            <div className="feature-content flex justify-between items-center gap-4">
                                                <span
                                                    className="text-[14px] md:text-[15px] font-medium"
                                                    style={{ color: tokens.textSecondary }}
                                                >
                                                    {item}
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
                                        src={useCasesData[activeTab].img}
                                        alt={useCasesData[activeTab].title}
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
// WHY AI FOR PROCESS SECTION - Standardized from HTML Extraction
// ============================================================
const whyProcessFeatures = [
    {
        icon: "https://framerusercontent.com/images/x4OpVpQJ7Rjf9yHIzPL1ptLbGVo.svg",
        title: "Lower Operational Costs",
        description: "Automate complex workflows to cut operational expenses and maximize efficiency across departments.",
    },
    {
        icon: "https://framerusercontent.com/images/6nDSodCrPyMjdlqfl4j3gXPNcI0.svg",
        title: "Boost Productivity",
        description: "Eliminate repetitive manual reviews and empower employees to focus on creative, and high-impact initiatives.",
    },
    {
        icon: "https://framerusercontent.com/images/VHPDAGVqlI1MSYfefJ2wIs7aO4.svg",
        title: "Accelerate Cycles",
        description: "Use intelligent workflow orchestration to streamline operations and enhance overall business agility.",
    },
];

function ValuePropsSection() {
    return (
        <section
            className="why-section"
            style={{
                padding: "100px 20px",
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
                                color: "#9ba9c4",
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
                            transition={{ duration: 0.6, ease: tokens.easeFramer }}
                            className="main-title"
                            style={{
                                color: "#ffffff",
                                fontSize: "clamp(36px, 5vw, 56px)",
                                fontWeight: 500,
                                letterSpacing: "-0.03em",
                                margin: 0,
                                lineHeight: 1.1,
                            }}
                        >
                            Why AI for Process?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1, ease: tokens.easeFramer }}
                            className="sub-text"
                            style={{
                                color: "#9ba9c4",
                                fontSize: "18px",
                                lineHeight: 1.5,
                                maxWidth: "400px",
                                margin: 0,
                            }}
                        >
                            Transform complex workflows into seamless and automated processes.
                        </motion.p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div
                    className="cards-grid grid grid-cols-1 md:grid-cols-3"
                    style={{ gap: "24px" }}
                >
                    {whyProcessFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: tokens.easeFramer,
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
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={32}
                                        height={32}
                                    />
                                </div>
                            </div>

                            {/* Card Text */}
                            <div className="card-text" style={{ position: "relative", zIndex: 2 }}>
                                <h3
                                    style={{
                                        color: "#ffffff",
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
                                        color: "#9ba9c4",
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
// MAIN COMPONENT
// ============================================================
export default function AIForProcessPage() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: tokens.bgDark }}>
            {/* Note: SVG Defs can be included inline or within the checklist icon style directly as done above for simplicity */}
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <UseCasesSection />
            <ValuePropsSection />
            <Footer />
        </main>
    );
}

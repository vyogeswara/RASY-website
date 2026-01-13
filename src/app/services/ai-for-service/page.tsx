"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/sections/footer";

// Tokens from style.css
const tokens = {
    bgDark: "#06070a",
    textPrimary: "#fff",
    textSecondary: "#9ba9c4",
    textMuted: "#8491ab",
    accentBlue: "#0175ff",
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
        <section className="relative pt-[180px] pb-[100px] text-center overflow-hidden">
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
                    alt="Background Gradient"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="relative z-10 flex flex-col items-center px-5">
                {/* Tag Pill */}
                <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md mb-5"
                    style={{
                        background: "rgba(255,255,255,0.08)",
                        border: `1px solid ${tokens.borderLight}`,
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
                    className="text-[48px] md:text-[80px] leading-[1.1] mb-5 font-medium"
                    style={{
                        background: "linear-gradient(to bottom, #fff 50%, #999 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        letterSpacing: "-0.03em",
                    }}
                >
                    AI for Service
                </h1>

                {/* Hero Subtext */}
                <p
                    className="text-[18px] md:text-[20px] max-w-[500px] mx-auto"
                    style={{ color: tokens.textSecondary, letterSpacing: "-0.01em" }}
                >
                    Leverage AI agents to empower customers and personalize.
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
        title: "Agentic Contact Center",
        desc: "Retrieve real-time answers from structured and unstructured enterprise data sources while enforcing role-based access controls.",
        img: "https://framerusercontent.com/images/Qp9zWMB3qCWxa1uXAgG1Hu0nF98.png",
    },
    {
        title: "Agent AI Assistance",
        desc: "Connect with customers through proactive, data-driven outreach and personalized, scalable campaigns that enhance loyalty and revenue.",
        img: "https://framerusercontent.com/images/vcYzdIgVuL0Sa8NA5T3wViTU4us.png",
    },
    {
        title: "Quality Assurance",
        desc: "Elevate service quality by analyzing interactions, identifying improvements, and empowering agents to deliver superior customer experiences.",
        img: "https://framerusercontent.com/images/pT3dLoHeu2ffJaj94Wt4blOSW4.png",
    },
    {
        title: "Outbound Campaigns",
        desc: "Equip agents with AI tools that automate tasks, offer real-time insights, and enhance efficiency for faster, smarter resolutions.",
        img: "https://framerusercontent.com/images/ZCiMEO824CkzcSXDpbMciv6gM.png",
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

        itemRefs.current.forEach((item: HTMLDivElement | null) => {
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
                    <h2 className="text-[36px] md:text-[48px] font-medium tracking-[-0.03em] text-white">
                        Redefine the CX
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[80px] items-start pb-[100px]">
                    {/* Left: Accordion List */}
                    <div className="flex flex-col relative">
                        {/* Bright Blue Beam Glow Effect - Consistency Standardization */}
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
                                className="flex gap-5 py-6 cursor-pointer transition-opacity duration-400 relative z-10"
                                style={{ opacity: activeIndex === index ? 1 : 0.5 }}
                                onClick={() => setActiveIndex(index)}
                            >
                                {/* Progress Track */}
                                <div
                                    className="w-1 relative flex-shrink-0 bg rounded-full overflow-hidden"
                                    style={{ background: tokens.borderDim, borderRadius: "99px", opacity: 0.6 }} // Added opacity to track for subtle look
                                >
                                    {/* Progress Bar - Full Beam */}
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
                                    className="object-cover object-top"
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
    retail: {
        title: "Retail Usecases",
        desc: "An AI-driven retail assistant that delivers seamless, 24/7 support to boost engagement, increase retention, and drive business growth.",
        items: [
            "Always-available digital assistants",
            "Context-aware, human-like interactions",
            "Empowered and efficient contact teams",
        ],
        img: "https://framerusercontent.com/images/BwG93nledUeZU5TH8LY358GCbc.png",
    },
    banking: {
        title: "Banking use cases",
        desc: "A banking-focused conversational AI assistant that enables seamless customer engagement across chat, voice, and web with quick deployment.",
        items: [
            "Personalized self-service",
            "Confident, efficient agents",
            "Trusted customer relationships",
        ],
        img: "https://framerusercontent.com/images/FNizMfUka86RnJXkl4cQOBXFcU.png",
    },
    healthcare: {
        title: "Healthcare use cases",
        desc: "A healthcare-focused AI assistant that improves patient and provider experiences with intelligent, seamless, secure, and omnichannel support.",
        items: [
            "Focus more on patient and member care",
            "Deliver natural, context-aware AI responses",
            "Enable smarter, data-driven management",
        ],
        img: "https://framerusercontent.com/images/okZcV7G8B33SNLHLICqJZgEq4yU.png",
    },
};

// Gradient checkmark SVG component for Use Cases
const GradientCheckmarkUseCase = () => (
    <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
        <defs>
            <linearGradient id="gradient-check-service-uc" x1="13" y1="0.898" x2="0" y2="7.602" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFAC08" />
                <stop offset="1" stopColor="#0075FF" />
            </linearGradient>
        </defs>
        <path d="M1 5.5L5 9.5L14 1" stroke="url(#gradient-check-service-uc)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

function UseCasesSection() {
    const [activeTab, setActiveTab] = useState<"retail" | "banking" | "healthcare">("retail");

    // Mapping tab keys to button labels
    const tabLabels = {
        retail: "Retail",
        banking: "Banking",
        healthcare: "Healthcare",
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
                        From marketing to operations, manage everything with a single AI solution.
                    </motion.p>
                </div>

                {/* Tabs Navigation - Pill style, Centered */}
                <div className="tabs-nav flex gap-2 flex-wrap justify-center">
                    {(["retail", "banking", "healthcare"] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className="px-6 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 capitalize"
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
                                    className="text-[28px] md:text-[32px] mb-4 capitalize"
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
                                                    <GradientCheckmarkUseCase />
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
// WHY AI FOR SERVICE SECTION - Standardized from HTML Extraction
// ============================================================
const whyServiceFeatures = [
    {
        icon: "https://framerusercontent.com/images/9VEHqiBLbBnuC2rj6VGEi6qisI.svg",
        title: "Focus on What Matters",
        description: "Free up more valuable time for patient and member care with intelligent ultimate automation.",
    },
    {
        icon: "https://framerusercontent.com/images/AGfyoLYdOpkk5zXHb1SF8HDHuUo.svg",
        title: "Human-Like Convo",
        description: "Deliver contextual, natural, and personalized interactions that feel truly engaging and human.",
    },
    {
        icon: "https://framerusercontent.com/images/nSQOoqdEkkZYNeyUpQzFTIPaCpw.svg",
        title: "Smarter Service",
        description: "Use advanced AI-driven insights to streamline operations, boost efficiency, and enhance outcomes.",
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
                            Why AI for Service?
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
                            Enhance service quality with powerful intelligent automation.
                        </motion.p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div
                    className="cards-grid grid grid-cols-1 md:grid-cols-3"
                    style={{ gap: "24px" }}
                >
                    {whyServiceFeatures.map((feature, index) => (
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
export default function AIForServicePage() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: tokens.bgDark }}>
            {/* SVG Defs for Gradients */}
            <svg width="0" height="0" style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
                <defs>
                    <linearGradient id="gradient-check" x1="13" y1="0.898" x2="0" y2="7.602" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFAC08" />
                        <stop offset="1" stopColor="#0075FF" />
                    </linearGradient>
                </defs>
            </svg>

            <HeroSection />
            <FeaturesSection />
            <UseCasesSection />
            <ValuePropsSection />
            <Footer />
        </main>
    );
}

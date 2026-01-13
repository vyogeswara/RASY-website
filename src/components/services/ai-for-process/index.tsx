"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { tokens, typography, animations } from "../ai-for-work";

// Re-export shared tokens
export { tokens, typography, animations };

// Hero Section for AI for Process
export function AIForProcessHero() {
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
                className="relative z-10 flex flex-col items-center w-full max-w-[1200px]"
                style={{
                    gap: "48px",
                    padding: "128px 40px 40px",
                }}
            >
                {/* Badge */}
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
                        AI FOR PROCESS
                    </span>
                </motion.div>

                {/* Title */}
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
                    Process Intelligence
                </motion.h1>

                {/* Subtitle */}
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
                    Simplify complex business processes with autonomous AI agents.
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

// Feature data for AI for Process
export const aiForProcessFeatures = [
    {
        title: "Process Automation",
        description: "Automate repetitive tasks and complex workflows with intelligent AI agents that learn and adapt.",
        features: [
            "End-to-end workflow automation",
            "Intelligent document processing",
            "Exception handling automation",
            "Cross-system data synchronization",
            "Approval workflow automation",
        ],
        imageUrl: "https://framerusercontent.com/images/JAFiHCatbTzsAuqWSmAKNN7zvsE.png",
    },
    {
        title: "AI Analytics + Monitoring",
        description: "Real-time visibility into your processes with AI-powered insights and predictive analytics.",
        features: [
            "Process performance dashboards",
            "Bottleneck identification",
            "Predictive issue detection",
            "Resource utilization tracking",
            "SLA monitoring and alerts",
        ],
        imageUrl: "https://framerusercontent.com/images/UgBJAGjjD29VPKkOzaxCyabIMgU.png",
        reversed: true,
    },
    {
        title: "Pre-built Process Templates",
        description: "Get started quickly with industry-specific templates designed by process experts.",
        features: [
            "Finance & accounting templates",
            "HR & onboarding workflows",
            "Procurement automation",
            "Customer service processes",
            "Compliance workflows",
        ],
        imageUrl: "https://framerusercontent.com/images/rrNtQU2aDjYf4aSs1WeRTIkZ3Ws.png",
    },
    {
        title: "Seamless System Integration",
        description: "Connect your existing tools and systems with pre-built integrations and flexible APIs.",
        features: [
            "200+ pre-built connectors",
            "REST API integration",
            "Custom connector builder",
            "Real-time data sync",
            "Legacy system bridges",
        ],
        imageUrl: "https://framerusercontent.com/images/jCSaG9tDLaK5W1D60NcPCLAvK78.png",
        reversed: true,
    },
];

// CTA Section for AI for Process
export function AIForProcessCTA() {
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
                    Optimize Your Business Processes
                </h2>
                <p
                    className="text-[16px] md:text-[17px] lg:text-[18px] max-w-[500px]"
                    style={{
                        fontFamily: typography.bodyLarge.fontFamily,
                        color: tokens.mutedText,
                    }}
                >
                    Discover how AI-driven process automation can reduce costs and accelerate operations.
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
                        Start Free Trial
                    </Link>
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold transition-all hover:bg-white/10"
                        style={{
                            backgroundColor: "transparent",
                            border: `1px solid ${tokens.borderColor}`,
                            color: tokens.white,
                        }}
                    >
                        View All Solutions
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}

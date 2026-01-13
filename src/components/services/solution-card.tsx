"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Design tokens from Framer
const tokens = {
    white: "#fff",
    black: "#000",
    primaryBlue: "#0175ff",
    accentGold: "#ffcd7d",
    orange: "#ffac0a",
    mutedText: "#9ba9c4",
    cardBg: "#06070a",
    buttonBg: "#0c0f16",
    borderColor: "#2f3950",
    cardBorder: "rgba(125, 164, 255, 0.16)",
};

interface SolutionCardProps {
    title: string;
    subtitle: string;
    featuresTitle: string;
    features: string[];
    href: string;
    gradientImage: string;
}

export function SolutionCard({
    title,
    subtitle,
    featuresTitle,
    features,
    href,
    gradientImage,
}: SolutionCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full overflow-hidden rounded-3xl"
            style={{
                backgroundColor: tokens.cardBg,
                border: `1px solid ${tokens.cardBorder}`,
            }}
        >
            {/* Content - More padding and spacing like original */}
            <div className="flex flex-col md:flex-row py-10 md:py-12 px-8 md:px-10 gap-8 md:gap-12">
                {/* Left: Title + Button */}
                <div className="flex flex-col gap-6 flex-1 min-w-0">
                    {/* Title Block */}
                    <div className="flex flex-col gap-3">
                        <h3
                            className="text-2xl md:text-[28px] font-normal"
                            style={{
                                fontFamily: "'Inter Display', sans-serif",
                                color: tokens.white,
                            }}
                        >
                            {title}
                        </h3>
                        <p
                            className="text-sm md:text-[15px] leading-relaxed max-w-[300px]"
                            style={{
                                fontFamily: "'Inter Display', sans-serif",
                                color: tokens.mutedText,
                            }}
                        >
                            {subtitle}
                        </p>
                    </div>

                    {/* Learn More Button - Exact original styling */}
                    <Link
                        href={href}
                        className="inline-flex justify-center items-center w-fit transition-all hover:brightness-125"
                        style={{
                            padding: "10px 16px",
                            backgroundColor: "rgb(12, 15, 22)",
                            border: "1px solid rgb(47, 57, 80)",
                            borderRadius: "15px",
                        }}
                    >
                        <span
                            className="text-[13px] font-medium"
                            style={{
                                background: `linear-gradient(277deg, rgb(1, 117, 255) 0%, rgb(255, 205, 125) 100%)`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Learn More
                        </span>
                    </Link>
                </div>

                {/* Divider */}
                <div
                    className="hidden md:block w-px self-stretch"
                    style={{ backgroundColor: tokens.cardBorder }}
                />

                {/* Right: Features */}
                <div className="flex flex-col gap-4 md:w-64">
                    <p
                        className="text-[15px] font-medium"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            color: tokens.white,
                        }}
                    >
                        {featuresTitle}
                    </p>
                    <div className="flex flex-col gap-3">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2.5">
                                {/* Gradient dot */}
                                <div
                                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                    style={{
                                        background: `linear-gradient(148deg, ${tokens.primaryBlue} 0%, ${tokens.orange} 100%)`,
                                    }}
                                />
                                <p
                                    className="text-[14px]"
                                    style={{
                                        fontFamily: "'Inter Display', sans-serif",
                                        color: tokens.mutedText,
                                    }}
                                >
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Image - Original aspect 1791x278 */}
            <div className="relative w-full" style={{ aspectRatio: "6.44 / 1" }}>
                <Image
                    src={gradientImage}
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
        </motion.div>
    );
}

// Data for all service categories
export const solutionsData: SolutionCardProps[] = [
    {
        title: "Enterprise Cybersecurity",
        subtitle: "End-to-end protection for your digital assets, from threat detection to compliance management.",
        featuresTitle: "Security Solutions",
        features: [
            "Threat Intelligence & Monitoring",
            "Vulnerability Management",
            "Incident Response & Forensics",
            "Security Operations Center (SOC)",
            "Identity & Access Management",
            "Network & Endpoint Security",
        ],
        href: "/services/cybersecurity",
        gradientImage:
            "https://framerusercontent.com/images/ixSlHBj93cQxMvRKBPxUGuiwRE.png",
    },
    {
        title: "AI-Powered Solutions",
        subtitle: "Leverage artificial intelligence to enhance business operations and customer experiences.",
        featuresTitle: "Intelligent Automation",
        features: [
            "AI Chatbots & Virtual Assistants",
            "Sales Process Automation",
            "Lead Generation Systems",
            "Website Design with AI",
            "Digital Marketing Automation",
            "AI Training Programs",
        ],
        href: "/services/artificial-intelligence",
        gradientImage:
            "https://framerusercontent.com/images/pSxYz80kLUKNMKdnW99z0alJYJ0.png",
    },
    {
        title: "Business Tech Solutions",
        subtitle: "Streamline operations with integrated technology services and digital transformation.",
        featuresTitle: "Digital Enablement",
        features: [
            "Virtual Receptionist Services",
            "Branding & Creative Design",
            "Workflow Automation",
            "System Integration",
            "Technology Consulting",
            "Corporate Training Programs",
        ],
        href: "/services/business-technology",
        gradientImage:
            "https://framerusercontent.com/images/yxLTC9cANtOH1hhf7cA7mlRT8.png",
    },
    {
        title: "Expert Consulting",
        subtitle: "Strategic guidance and implementation support for your technology initiatives.",
        featuresTitle: "Advisory Services",
        features: [
            "Security Architecture Design",
            "Compliance Consulting",
            "AI Strategy Development",
            "Digital Transformation Planning",
            "Custom Solution Development",
            "Managed Security Services",
        ],
        href: "/services/professional-services",
        gradientImage:
            "https://framerusercontent.com/images/ixSlHBj93cQxMvRKBPxUGuiwRE.png",
    },
    {
        title: "Knowledge Empowerment",
        subtitle: "Build internal capabilities with comprehensive training on emerging technologies.",
        featuresTitle: "Learning Solutions",
        features: [
            "Cybersecurity Awareness Training",
            "AI & Machine Learning Courses",
            "Prompt Engineering Workshops",
            "Security Certification Prep",
            "Custom Corporate Training",
            "Technical Skill Development",
        ],
        href: "/services/training-education",
        gradientImage:
            "https://framerusercontent.com/images/pSxYz80kLUKNMKdnW99z0alJYJ0.png",
    },
];

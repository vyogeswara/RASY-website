"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const mainOption = {
    title: "Speak with Security Experts",
    description: "Receive personalized cybersecurity assessment and learn how RASY's solutions can protect your enterprise infrastructure. Our specialists will design protection tailored to your requirements.",
    action: "Get Security Assessment",
    href: "mailto:info@rasytech.com",
    image: "https://framerusercontent.com/images/77v7OsCWhXM6Xy0eey2iJbdberY.webp"
};

const smallOptions = [
    {
        iconUrl: "https://framerusercontent.com/images/xHfPV4X6jypeMN7rcPFFyCwnhg.svg",
        iconBg: "https://framerusercontent.com/images/VZt72ssnuCqRvMzPSvHlDQ1iNU.png",
        title: "Media & Press Inquiries",
        description: "For interviews, security research, and media collaboration requests.",
        action: "Contact Media Team",
        href: "mailto:media@rasytech.com",
    },
    {
        iconUrl: "https://framerusercontent.com/images/zR2pRh2KGfrgsBHUSXxBBrc6Os.svg",
        iconBg: "https://framerusercontent.com/images/VZt72ssnuCqRvMzPSvHlDQ1iNU.png",
        title: "Strategic Partnerships",
        description: "Explore technology integration and channel partnership possibilities.",
        action: "Partner With Us",
        href: "mailto:partners@rasytech.com",
    }
];

export function ContactOptions() {
    return (
        <section className="py-16 md:py-24 px-5 md:px-10">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8">

                    {/* Large Main Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="group relative rounded-[32px] overflow-hidden flex flex-col bg-[#06070a] border border-[#7da4ff29]"
                    >
                        {/* Header Image */}
                        <div className="h-[280px] md:h-[340px] overflow-hidden relative">
                            <img
                                src={mainOption.image}
                                alt=""
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-10 -mt-20 relative z-10 flex-1 flex flex-col">
                            <h3 className="text-3xl md:text-4xl font-normal text-white mb-4 leading-tight">
                                {mainOption.title}
                            </h3>
                            <p className="text-lg text-[#9ba9c4] leading-relaxed mb-8 max-w-[500px]">
                                {mainOption.description}
                            </p>

                            <div className="mt-auto">
                                <Link
                                    href={mainOption.href}
                                    className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-black border border-white/20 text-white font-medium transition-all duration-300 shadow-[inset_-4px_3px_9px_0px_#0175ff,inset_3px_-2px_8px_0px_#ffcd7d] hover:brightness-125"
                                >
                                    {mainOption.action}
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Smaller Cards Stack */}
                    <div className="flex flex-col gap-8">
                        {smallOptions.map((option, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative rounded-[32px] bg-[#06070a] border border-[#7da4ff29] p-8 flex flex-col"
                            >
                                {/* 3D Icon Container */}
                                <div className="relative w-[100px] h-[100px] mb-6">
                                    <div className="absolute inset-0 rounded-2xl bg-black border border-white/10 overflow-hidden">
                                        <img
                                            src={option.iconBg}
                                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <img
                                            src={option.iconUrl}
                                            className="w-14 h-14 object-contain transition-transform duration-500 group-hover:scale-110"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-normal text-white mb-3">
                                    {option.title}
                                </h3>
                                <p className="text-[#9ba9c4] mb-8">
                                    {option.description}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        href={option.href}
                                        className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-black border border-white/20 text-white font-medium transition-all duration-300 shadow-[inset_-4px_3px_9px_0px_#0175ff,inset_3px_-2px_8px_0px_#ffcd7d] hover:brightness-125"
                                    >
                                        {option.action}
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

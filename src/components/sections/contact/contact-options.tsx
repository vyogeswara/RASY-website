"use client";

import React from "react";
import { motion } from "framer-motion";
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
        <section className="px-5 py-14 sm:px-6 md:px-10 md:py-24">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-[1.6fr_1fr]">

                    {/* Large Main Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="group relative flex flex-col overflow-hidden rounded-[24px] border border-[#7da4ff29] bg-[#06070a] md:rounded-[32px]"
                    >
                        {/* Header Image */}
                        <div className="relative h-[220px] overflow-hidden sm:h-[280px] md:h-[340px]">
                            <img
                                src={mainOption.image}
                                alt=""
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 -mt-16 flex flex-1 flex-col p-6 sm:p-8 md:-mt-20 md:p-10">
                            <h3 className="mb-4 text-2xl font-normal leading-tight text-white sm:text-3xl md:text-4xl">
                                {mainOption.title}
                            </h3>
                            <p className="mb-8 max-w-[500px] text-base leading-relaxed text-[#9ba9c4] md:text-lg">
                                {mainOption.description}
                            </p>

                            <div className="mt-auto">
                                <Link
                                    href={mainOption.href}
                                    className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-black px-6 py-4 font-medium text-white shadow-[inset_-4px_3px_9px_0px_#0175ff,inset_3px_-2px_8px_0px_#ffcd7d] transition-all duration-300 hover:brightness-125 sm:w-auto sm:px-10 sm:py-5"
                                >
                                    {mainOption.action}
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Smaller Cards Stack */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        {smallOptions.map((option, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative flex flex-col rounded-[24px] border border-[#7da4ff29] bg-[#06070a] p-6 md:rounded-[32px] md:p-8"
                            >
                                {/* 3D Icon Container */}
                                <div className="relative mb-6 h-[84px] w-[84px] md:h-[100px] md:w-[100px]">
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
                                    className="h-12 w-12 object-contain transition-transform duration-500 group-hover:scale-110 md:h-14 md:w-14"
                                            alt=""
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="mb-3 text-xl font-normal text-white md:text-2xl">
                                    {option.title}
                                </h3>
                                <p className="text-[#9ba9c4] mb-8">
                                    {option.description}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        href={option.href}
                                    className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-black px-6 py-4 font-medium text-white shadow-[inset_-4px_3px_9px_0px_#0175ff,inset_3px_-2px_8px_0px_#ffcd7d] transition-all duration-300 hover:brightness-125 sm:w-auto md:px-8"
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

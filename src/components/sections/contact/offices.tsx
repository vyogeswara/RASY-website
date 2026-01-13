"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const offices = [
    {
        city: "San Francisco",
        country: "United States",
        name: "RASY Middle East",
        details: "Our North American headquarters drives enterprise AI innovation and customer success strategies.",
        image: "https://framerusercontent.com/images/W8C39CdQlC7KEiy4TqYSYSFey1g.jpg",
        href: "https://maps.google.com/?q=San+Francisco"
    },
    {
        city: "Nagpur",
        country: "India",
        name: "RASY Asia-Pacific",
        details: "The research and development heart of our AI engine, focusing on core algorithm performance.",
        image: "https://framerusercontent.com/images/SKMm9pxh4pb8gdXnHmU5aOEdHS0.jpg",
        href: "https://maps.google.com/?q=Nagpur"
    },
    {
        city: "London",
        country: "United Kingdom",
        name: "RASY Europe",
        details: "Our strategic hub for European operations and global enterprise partnerships.",
        image: "https://framerusercontent.com/images/xn6XyGqCrTCriyl4zkDnRiyqTY.jpg",
        href: "https://maps.google.com/?q=London"
    },
    {
        city: "Frankfurt",
        country: "Germany",
        name: "RASY Central EU",
        details: "Operational excellence and data compliance center serving the European Union region.",
        image: "https://framerusercontent.com/images/z1IF17Tru5VgU6RFBAZQOr478.jpg",
        href: "https://maps.google.com/?q=Frankfurt"
    },
    {
        city: "Dubai",
        country: "UAE",
        name: "RASY Africa",
        details: "Regional excellence center driving AI transformation across the Middle East and North Africa.",
        image: "https://framerusercontent.com/images/0do0bgsbBj8Xi5b8pXUWVvU4ADA.jpg",
        href: "https://maps.google.com/?q=Dubai"
    },
];

export function Offices() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 px-5 md:px-10 relative overflow-hidden bg-black">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-12 lg:gap-8 items-start">

                    {/* Left Column: Location List */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-sm border border-white/10 bg-[#06070a]">
                                <img
                                    src="https://framerusercontent.com/images/xHfPV4X6jypeMN7rcPFFyCwnhg.svg"
                                    className="w-5 h-5 opacity-80"
                                    alt=""
                                />
                                <span className="text-[13px] font-medium tracking-[0.2em] text-[#8491ab] uppercase pl-1">
                                    Offices
                                </span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {offices.map((office, index) => (
                                <button
                                    key={index}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={`w-full flex items-center gap-4 text-left transition-all duration-300 group`}
                                >
                                    <div
                                        className={`w-2.5 h-2.5 rounded-sm transition-all duration-300 
                                            ${activeIndex === index ? "bg-[#0175ff] shadow-[0_0_12px_#0175ff]" : "bg-white/10"}`}
                                    />
                                    <span
                                        className={`text-2xl md:text-3xl font-normal transition-colors duration-300
                                            ${activeIndex === index ? "text-white" : "text-[#9ba9c4] group-hover:text-white/60"}`}
                                    >
                                        {office.city}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Center Column: Image Gallery */}
                    <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-[40px] overflow-hidden bg-[#0c0f16] border border-[#7da4ff29]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={offices[activeIndex].image}
                                    alt={offices[activeIndex].city}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column: Office Details */}
                    <div className="flex flex-col h-full lg:pt-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-8"
                            >
                                <div>
                                    <h4 className="text-sm font-medium tracking-[0.2em] text-[#0175ff] uppercase mb-4">
                                        {offices[activeIndex].country}
                                    </h4>
                                    <h3 className="text-3xl md:text-4xl font-normal text-white mb-6 leading-tight">
                                        {offices[activeIndex].name}
                                    </h3>
                                    <p className="text-lg text-[#9ba9c4] leading-relaxed">
                                        {offices[activeIndex].details}
                                    </p>
                                </div>

                                <div className="pt-8">
                                    <Link
                                        href={offices[activeIndex].href}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-black border border-white/20 text-white font-medium transition-all duration-300 shadow-[inset_-4px_3px_9px_0px_#0175ff,inset_3px_-2px_8px_0px_#ffcd7d] hover:brightness-125 group"
                                    >
                                        Get Directions
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}

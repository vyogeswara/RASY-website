"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
    name: string;
    role: string;
    img: string;
}

const TeamMember = ({ name, role, img }: TeamMemberProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group flex flex-col gap-4"
    >
        <div className="relative aspect-[0.86] overflow-hidden rounded-xl bg-[#111]">
            <img
                src={img}
                alt={name}
                className="h-full w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
            />
        </div>
        <div>
            <h4 className="text-lg md:text-xl font-bold text-white mb-1 tracking-tight">{name}</h4>
            <p className="text-[#9ba9c4] text-sm md:text-base font-light opacity-80">{role}</p>
        </div>
    </motion.div>
);

export function AboutTeam() {
    const members: TeamMemberProps[] = [
        { name: "Yogeswara Rao Veeravalli", role: "Founder & CEO", img: "https://res.cloudinary.com/doibx3aol/image/upload/v1768793589/Yogesh_ppwpwe.png" },
        { name: "Sarvani Vidyadharani", role: "Technical Director", img: "https://res.cloudinary.com/doibx3aol/image/upload/v1768793597/Sarvani_t6n24h.png" },
        { name: "Phani Kumar Ayyagari", role: "Director Business", img: "https://res.cloudinary.com/doibx3aol/image/upload/v1768793591/Phani_cloith.png" },
    ];

    return (
        <section className="relative overflow-hidden bg-black px-5 py-16 sm:px-6 md:py-24 lg:py-32">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] -z-10" />

            <div className="max-w-[1200px] mx-auto">
                {/* Section Header */}
                <div className="mb-12 flex flex-col justify-between gap-8 md:mb-20 lg:flex-row lg:items-end lg:gap-10">
                    <div className="max-w-2xl">
                        <div className="mb-6 flex items-center gap-3 md:mb-8">
                            <div className="bg-white/10 rounded p-1.5 backdrop-blur-md border border-white/5">
                                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#0175ff] to-[#ffcd7d]" />
                            </div>
                            <span className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">SECURITY EXPERTS</span>
                            <div className="h-px bg-white/10 w-24 ml-4 hidden md:block"></div>
                        </div>
                        <h2 className="text-[36px] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
                            Meet the RASY Security Specialists
                        </h2>
                    </div>
                    <div className="lg:max-w-xs lg:text-right">
                        <p className="text-base font-light leading-relaxed text-[#9ba9c4] opacity-80 md:text-lg">
                            Industry veterans in cybersecurity and AI, dedicated to safeguarding your digital future.
                        </p>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
                    {members.map((m, i) => (
                        <TeamMember key={i} {...m} />
                    ))}
                </div>
            </div>
        </section>
    );
}

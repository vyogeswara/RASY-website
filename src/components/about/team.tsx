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
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
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
        { name: "Yogeswara Rao Veeravalli", role: "Founder & CEO", img: "https://framerusercontent.com/images/0RzulRwff33IEQYq44WadnRO9w.png" },
        { name: "Sarvani Vidyadharani", role: "Technical Director", img: "https://framerusercontent.com/images/pogDSBBcXE1ARRGZ4ymWiMN9k3s.png" },
        { name: "Phani Kumar Ayyagari", role: "Director of Business Operations", img: "https://framerusercontent.com/images/zH9OJGqbKlLQPDJpmS5CTGnk3U.png" },
    ];

    return (
        <section className="py-32 px-6 relative overflow-hidden bg-black">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] -z-10" />

            <div className="max-w-[1200px] mx-auto">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="bg-white/10 rounded p-1.5 backdrop-blur-md border border-white/5">
                                <img src="https://framerusercontent.com/images/eWJcm0cKj3Rsxetaz4suNQKuW8o.svg" width="16" alt="Icon" />
                            </div>
                            <span className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">SECURITY EXPERTS</span>
                            <div className="h-px bg-white/10 w-24 ml-4 hidden md:block"></div>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                            Meet the RASY Security Specialists
                        </h2>
                    </div>
                    <div className="lg:max-w-xs lg:text-right">
                        <p className="text-[#9ba9c4] text-lg leading-relaxed font-light opacity-80">
                            Industry veterans in cybersecurity and AI, dedicated to safeguarding your digital future.
                        </p>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                    {members.map((m, i) => (
                        <TeamMember key={i} {...m} />
                    ))}
                </div>
            </div>
        </section>
    );
}


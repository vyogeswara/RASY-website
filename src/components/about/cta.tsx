"use client";

import React from 'react';
import Link from 'next/link';

const ceoImage =
    "https://res.cloudinary.com/doibx3aol/image/upload/v1780335095/WhatsApp_Image_2026-05-18_at_15.10.45_xstkgh.jpg";
const officeGroupImage =
    "https://res.cloudinary.com/doibx3aol/image/upload/v1780335176/WhatsApp_Image_2025-12-22_at_14.20.01_c0ech2.jpg";
const leadershipGroupImage =
    "https://res.cloudinary.com/doibx3aol/image/upload/v1780335238/WhatsApp_Image_2025-12-22_at_14.20.01_1_deoklb.jpg";
const sarvaniImage =
    "https://res.cloudinary.com/doibx3aol/image/upload/v1768793597/Sarvani_t6n24h.png";

export function AboutCTA() {
    return (
        <section className="relative border-t border-white/10 bg-black px-5 py-16 sm:px-6 md:py-24 lg:py-32">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Left Content */}
                    <div>
                        <div className="mb-8 flex items-center gap-3 md:mb-10">
                            <div className="bg-white/10 rounded p-1.5 backdrop-blur-md border border-white/5">
                                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#0175ff] to-[#ffcd7d]" />
                            </div>
                            <span className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">PARTNER WITH US</span>
                            <div className="h-px bg-white/10 w-24 ml-4 hidden md:block"></div>
                        </div>

                        <h2 className="mb-6 text-[36px] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:mb-8 md:text-6xl">
                            Let&apos;s secure your future together
                        </h2>
                        <p className="mb-10 max-w-lg text-lg font-light leading-relaxed text-[#9ba9c4] opacity-80 md:mb-12 md:text-xl">
                            Ready to transform your cybersecurity posture with intelligent protection solutions? Let&apos;s build a secure foundation for your business growth.
                        </p>

                        <Link href="/contact" className="group inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-4 text-base font-medium text-black transition-all hover:scale-105 hover:bg-white/90 active:scale-95 sm:w-auto sm:px-10 sm:text-lg">
                            Contact Our Experts
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Image Gallery */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-3 pt-8 sm:space-y-4 sm:pt-12">
                            <div className="h-40 overflow-hidden rounded-[20px] bg-[#0c0f16] sm:h-48 sm:rounded-3xl">
                                <img src={officeGroupImage} alt="RASY office team" className="h-full w-full object-cover object-bottom opacity-75 transition-all duration-700 hover:opacity-100" />
                            </div>
                            <div className="h-52 overflow-hidden rounded-[20px] bg-[#0c0f16] sm:h-64 sm:rounded-3xl">
                                <img src={ceoImage} alt="Yogeswara Rao Veeravalli" className="h-full w-full object-cover object-center opacity-75 transition-all duration-700 hover:opacity-100" />
                            </div>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="h-52 overflow-hidden rounded-[20px] bg-[#0c0f16] sm:h-64 sm:rounded-3xl">
                                <img src={leadershipGroupImage} alt="RASY leadership group" className="h-full w-full object-cover object-top opacity-75 transition-all duration-700 hover:opacity-100" />
                            </div>
                            <div className="h-40 overflow-hidden rounded-[20px] bg-[#0c0f16] sm:h-48 sm:rounded-3xl">
                                <img src={sarvaniImage} alt="Sarvani Vidyadharani" className="h-full w-full object-cover opacity-75 transition-all duration-700 hover:opacity-100" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

"use client";

import React from 'react';
import Link from 'next/link';

export function AboutCTA() {
    return (
        <section className="py-32 px-6 bg-black relative border-t border-white/10">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    {/* Left Content */}
                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <div className="bg-white/10 rounded p-1.5 backdrop-blur-md border border-white/5">
                                <img src="https://framerusercontent.com/images/eWJcm0cKj3Rsxetaz4suNQKuW8o.svg" width="16" alt="Icon" />
                            </div>
                            <span className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">PARTNER WITH US</span>
                            <div className="h-px bg-white/10 w-24 ml-4 hidden md:block"></div>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            Let&apos;s secure your future together
                        </h2>
                        <p className="text-[#9ba9c4] text-xl leading-relaxed font-light mb-12 opacity-80 max-w-lg">
                            Ready to transform your cybersecurity posture with intelligent protection solutions? Let&apos;s build a secure foundation for your business growth.
                        </p>

                        <Link href="/contact" className="inline-flex items-center px-10 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-white/90 transition-all hover:scale-105 active:scale-95 group">
                            Contact Our Experts
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Image Gallery */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-12">
                            <div className="rounded-3xl overflow-hidden h-48 bg-[#0c0f16]">
                                <img src="https://framerusercontent.com/images/QideC8FgAh77VffdlgsnsQ7AarU.png" alt="Gallery" className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                            </div>
                            <div className="rounded-3xl overflow-hidden h-64 bg-[#0c0f16]">
                                <img src="https://framerusercontent.com/images/80PNQ5gECTFURxvZw2l9ozs7c.webp" alt="Gallery" className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="rounded-3xl overflow-hidden h-64 bg-[#0c0f16]">
                                <img src="https://framerusercontent.com/images/0RzulRwff33IEQYq44WadnRO9w.png" alt="Gallery" className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                            </div>
                            <div className="rounded-3xl overflow-hidden h-48 bg-[#0c0f16]">
                                <img src="https://framerusercontent.com/images/hcKl6XFv59NYLhRNg4S5hDt8Lpc.png" alt="Gallery" className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tagline */}
                <div className="pt-24 border-t border-white/5 text-center">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white/90 leading-tight max-w-4xl mx-auto uppercase tracking-tighter">
                        Empowering businesses through comprehensive <span className="font-medium text-blue-400">cybersecurity excellence</span>.
                    </h3>
                </div>
            </div>
        </section>
    );
}

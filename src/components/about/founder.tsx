"use client";

import { motion } from "framer-motion";

export function AboutFounder() {
    return (
        <section className="py-32 px-6 border-t border-white/5 bg-black">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Left Content */}
                <div>
                    <div className="flex items-center gap-3 mb-12">
                        <div className="bg-white/10 rounded p-1.5 backdrop-blur-md border border-white/5">
                            <img src="https://framerusercontent.com/images/eWJcm0cKj3Rsxetaz4suNQKuW8o.svg" width="16" alt="Icon" />
                        </div>
                        <span className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">OUR LEADERSHIP</span>
                        <div className="h-px bg-white/10 w-24 ml-4 hidden md:block"></div>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                        From Our Founders
                    </h2>
                    <h4 className="text-xl md:text-2xl text-[#9ba9c4] mb-12 leading-relaxed font-light opacity-80">
                        Vision, expertise, and commitment to transforming enterprise cybersecurity.
                    </h4>

                    <div className="relative mb-12 border-l-2 border-blue-500 pl-8 py-2">
                        <p className="text-[#9ba9c4] text-xl leading-relaxed font-light opacity-90 italic">
                            &quot;When we established RASY, our vision was clear—to create cybersecurity solutions that truly protect and empower businesses. Every innovation, every service we provide is designed to make enterprises more secure, resilient, and confident in their digital transformation. Our mission extends beyond protection to enabling organizations to thrive securely in an evolving threat landscape. We invite you to partner with us on this journey of secure innovation.&quot;
                        </p>
                    </div>

                    {/* Signature */}
                    <div className="mt-10">
                        <svg className="signature w-48 h-20 text-white/80" viewBox="0 0 128 63">
                            <path d="M 20.588 2.818 C -2.192 5.746 5.8 12.33 21.054 13.57 C 36.308 14.81 58.822 7.746 58.822 23.362 C 58.822 38.978 25.122 41.594 25.122 56.418 C 25.122 71.242 53.072 61.21 82.32 61.21 C 111.568 61.21 128 41.594 128 23.362" stroke="white" strokeWidth="2" fill="none" strokeDasharray="425" />
                        </svg>
                    </div>
                </div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative overflow-hidden rounded-[24px]">
                        <img
                            src="https://framerusercontent.com/images/80PNQ5gECTFURxvZw2l9ozs7c.webp"
                            alt="Founder"
                            className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 hover:scale-100"
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                            }}
                        />
                    </div>
                    {/* Subtle Glow behind image */}
                    <div className="absolute inset-0 bg-blue-500/5 blur-[100px] -z-10" />
                </motion.div>
            </div>
        </section>
    );
}


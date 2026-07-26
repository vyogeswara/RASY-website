"use client";

import { motion } from "framer-motion";

const ceoImage =
    "https://res.cloudinary.com/doibx3aol/image/upload/v1780335095/WhatsApp_Image_2026-05-18_at_15.10.45_xstkgh.jpg";

export function AboutFounder() {
    return (
        <section className="border-t border-white/5 bg-black px-5 py-16 sm:px-6 md:py-24 lg:py-32">
            <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20">
                {/* Left Content */}
                <div>
                    <div className="mb-8 flex items-center gap-3 md:mb-12">
                        <div className="bg-white/10 rounded p-1.5 backdrop-blur-md border border-white/5">
                            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#0175ff] to-[#ffcd7d]" />
                        </div>
                        <span className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">OUR LEADERSHIP</span>
                        <div className="h-px bg-white/10 w-24 ml-4 hidden md:block"></div>
                    </div>

                    <h2 className="mb-6 text-[36px] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:mb-8 md:text-6xl">
                        From Our Founders
                    </h2>
                    <h4 className="mb-8 text-lg font-light leading-relaxed text-[#9ba9c4] opacity-80 md:mb-12 md:text-2xl">
                        Vision, expertise, and commitment to transforming enterprise cybersecurity.
                    </h4>

                    <div className="relative border-l-2 border-blue-500 py-2 pl-5 md:pl-8">
                        <p className="text-base font-light italic leading-relaxed text-[#9ba9c4] opacity-90 md:text-xl">
                            &quot;When we established RASY, our vision was clear—to create cybersecurity solutions that truly protect and empower businesses. Every innovation, every service we provide is designed to make enterprises more secure, resilient, and confident in their digital transformation. Our mission extends beyond protection to enabling organizations to thrive securely in an evolving threat landscape. We invite you to partner with us on this journey of secure innovation.&quot;
                        </p>
                        <p className="mt-5 text-base font-semibold leading-relaxed text-white md:text-xl">
                            Empowering secure digital transformation under Saudi Vision 2030
                        </p>
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
                    <div className="relative min-h-[420px] overflow-hidden rounded-[24px] border border-[rgba(125,164,255,0.16)] bg-[#06070a] sm:min-h-[540px] lg:min-h-[640px]">
                        <img
                            src={ceoImage}
                            alt="Yogeswara Rao Veeravalli, Founder and CEO of RASY"
                            className="h-full w-full object-cover object-center transition-all duration-1000 ease-in-out hover:scale-[1.03]"
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


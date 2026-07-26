"use client";

import { motion } from "framer-motion";

const officeGroupImage =
    "https://res.cloudinary.com/doibx3aol/image/upload/v1780335176/WhatsApp_Image_2025-12-22_at_14.20.01_c0ech2.jpg";

export function AboutHero() {
    const words = "Securing the Future of Digital Enterprise".split(" ");

    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-black px-5 pb-0 pt-32 text-center sm:px-6 md:pt-40 lg:pt-48">
            {/* Background Light Streaks */}
            <div className="absolute top-[10%] left-1/4 w-[2px] h-[60%] bg-gradient-to-b from-transparent via-orange-500/20 to-transparent blur-[2px] -z-10" />
            <div className="absolute top-[20%] right-1/4 w-[2px] h-[50%] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent blur-[2px] -z-10" />
            <div className="absolute top-[15%] left-1/2 w-[2px] h-[70%] bg-gradient-to-b from-transparent via-purple-500/10 to-transparent blur-[2px] -z-10" />

            {/* Pill Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-10 backdrop-blur-md"
            >
                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#0175ff] to-[#ffcd7d]" />
                <span className="text-[12px] font-semibold tracking-[0.2em] text-white uppercase">About RASY</span>
            </motion.div>

            {/* Main Heading with Staggered Blur Effect */}
            <div className="mx-auto mb-6 max-w-6xl md:mb-8">
                <h1 className="text-[40px] font-bold leading-[1.08] tracking-tight text-white sm:text-[52px] md:text-[70px] lg:text-[82px]">
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                            className="inline-block mr-[0.3em]"
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>
            </div>

            {/* Subtext */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mx-auto mb-10 max-w-2xl text-[16px] font-light leading-relaxed text-[#9ba9c4] opacity-80 md:mb-16 md:text-[20px]"
            >
                Comprehensive cybersecurity solutions built for modern business challenges.
            </motion.p>

            {/* Hero Image Group */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                className="relative w-full max-w-[1200px]"
            >
                {/* Image Container with 150px Bottom Mask */}
                <div className="group relative min-h-[430px] overflow-hidden rounded-[24px] border border-[rgba(125,164,255,0.16)] bg-[#06070a] sm:min-h-[520px] md:min-h-[620px] md:rounded-3xl">
                    <img
                        src={officeGroupImage}
                        alt="RASY office team"
                        className="absolute inset-0 h-full w-full object-cover object-bottom transform-gpu transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* Bottom Mask Gradient - Exactly 150px as per snippet */}
                    <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-black to-transparent z-10" />

                    {/* Dark Overlays */}
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.58)_46%,rgba(0,0,0,0.82)_100%)] transition-colors duration-700 group-hover:bg-black/45" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.72)_62%,rgba(0,0,0,0.9)_100%)]" />

                    {/* Mission Text Overlay - Centered overlay */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center p-6 sm:p-8 md:p-12">
                        <p className="max-w-4xl text-center text-[24px] font-light leading-[1.35] tracking-tight text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.95)] sm:text-3xl md:text-4xl">
                            At RASY, we deliver intelligent cybersecurity that empowers businesses to stay <span className="text-blue-400 font-medium tracking-tighter">protected, resilient</span>, and ahead of emerging threats.
                        </p>
                    </div>
                </div>

                {/* Background Glow behind image group */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-[120px] -z-10 pointer-events-none" />
            </motion.div>
        </section>
    );
}


"use client";

import { motion } from "framer-motion";

export function AboutHero() {
    const words = "Securing the Future of Digital Enterprise".split(" ");

    return (
        <section className="relative pt-48 pb-0 px-6 flex flex-col items-center justify-center text-center overflow-hidden bg-black">
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
                <img src="https://framerusercontent.com/images/eWJcm0cKj3Rsxetaz4suNQKuW8o.svg" width="16" alt="Icon" />
                <span className="text-[12px] font-semibold tracking-[0.2em] text-white uppercase">About RASY</span>
            </motion.div>

            {/* Main Heading with Staggered Blur Effect */}
            <div className="max-w-6xl mx-auto mb-8">
                <h1 className="text-[58px] md:text-[82px] font-bold leading-[1.1] tracking-tight text-white">
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
                className="max-w-2xl mx-auto text-[18px] md:text-[20px] text-[#9ba9c4] leading-relaxed mb-16 font-light opacity-80"
            >
                Comprehensive cybersecurity solutions built for modern business challenges.
            </motion.p>

            {/* Hero Image Group */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                className="w-full max-w-[1200px] relative px-4"
            >
                {/* Image Container with 150px Bottom Mask */}
                <div className="relative rounded-3xl overflow-hidden group">
                    <img
                        src="https://framerusercontent.com/images/QideC8FgAh77VffdlgsnsQ7AarU.png"
                        alt="Team"
                        className="w-full h-auto object-cover transform translate-z-0"
                    />
                    {/* Bottom Mask Gradient - Exactly 150px as per snippet */}
                    <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-black to-transparent z-10" />

                    {/* Dark Overlays */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />

                    {/* Mission Text Overlay - Centered overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-12 z-20">
                        <p className="text-xl md:text-3xl lg:text-4xl font-light leading-[1.4] text-white text-center max-w-4xl tracking-tight">
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


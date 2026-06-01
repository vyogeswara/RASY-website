"use client";

import { motion } from "framer-motion";

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    gradientColor: string;
}

const ValueCard = ({ title, description, icon, gradientClass }: { title: string; description: string; icon: React.ReactNode; gradientClass: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden rounded-[22px] border border-[#2f3950] bg-[#06070a] p-6 sm:p-8 md:min-h-[350px] md:rounded-[24px] md:p-10"
    >
        {/* Card Background Gradient */}
        <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${gradientClass} pointer-events-none`} />

        {/* Content */}
        <div className="relative z-10">
            <h3 className="mb-4 text-[21px] font-bold leading-[1.2] tracking-tight text-white md:mb-6 md:text-[24px]">
                {title}
            </h3>
            <p className="text-[15px] font-light leading-relaxed text-[#9ba9c4] opacity-80 md:text-[16px]">
                {description}
            </p>
        </div>

        {/* Icon at bottom */}
        <div className="relative z-10 mt-auto flex justify-center pt-8 md:pt-10">
            <div className="h-[110px] w-full text-white/40 transition-colors group-hover:text-white/60 md:h-[150px]">
                {icon}
            </div>
        </div>
    </motion.div>
);

export function AboutValues() {
    return (
        <section className="mx-auto max-w-[1200px] border-t border-white/5 bg-black px-5 py-16 sm:px-6 md:py-24 lg:py-32">
            {/* Section Header */}
            <div className="mb-12 flex flex-col justify-between gap-8 md:mb-20 lg:flex-row lg:items-end lg:gap-10">
                <div className="max-w-2xl">
                    <div className="mb-6 flex items-center gap-3 md:mb-8">
                        <div className="bg-white/10 rounded p-1.5 backdrop-blur-md border border-white/5">
                            <img src="https://framerusercontent.com/images/eWJcm0cKj3Rsxetaz4suNQKuW8o.svg" width="16" alt="Icon" />
                        </div>
                        <span className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">OUR COMMITMENT</span>
                        <div className="h-px bg-white/10 flex-1 ml-4 hidden md:block"></div>
                    </div>
                    <h2 className="text-[36px] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
                        Our Security Philosophy
                    </h2>
                </div>
                <div className="lg:max-w-md">
                    <p className="text-lg font-light leading-relaxed text-[#9ba9c4] opacity-80 md:text-xl">
                        Driven by protection, innovation, and trust in every solution we deliver.
                    </p>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                <ValueCard
                    title="Pioneering Advanced Security Solutions"
                    description="We push the boundaries of cybersecurity technology to create smarter, faster, and more effective protection for enterprises."
                    gradientClass="from-blue-600/20 via-blue-900/10 to-transparent"
                    icon={
                        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full opacity-60">
                            <circle cx="40" cy="50" r="25" />
                            <circle cx="60" cy="50" r="25" />
                            <circle cx="50" cy="35" r="25" />
                        </svg>
                    }
                />
                <ValueCard
                    title="Built on Security Excellence"
                    description="We operate with unwavering integrity, transparency, and accountability, ensuring reliable and robust security outcomes."
                    gradientClass="from-orange-600/20 via-orange-900/10 to-transparent"
                    icon={
                        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full opacity-60">
                            <path d="M50 10 L50 90 M10 50 L90 50 M25 25 L75 75 M75 25 L25 75" />
                            <circle cx="50" cy="50" r="5" fill="currentColor" />
                        </svg>
                    }
                />
                <ValueCard
                    title="Delivering Future-Ready Security"
                    description="Our cybersecurity solutions evolve with emerging threats, delivering measurable protection that transforms how businesses secure their digital assets."
                    gradientClass="from-purple-600/20 via-purple-900/10 to-transparent"
                    icon={
                        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full opacity-60">
                            <circle cx="30" cy="50" r="15" />
                            <circle cx="40" cy="50" r="15" />
                            <circle cx="50" cy="50" r="15" />
                            <circle cx="60" cy="50" r="15" />
                            <circle cx="70" cy="50" r="15" />
                        </svg>
                    }
                />
            </div>
        </section>
    );
}


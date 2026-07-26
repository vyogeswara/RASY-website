"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef, useMemo } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    color: string;
    delay: number;
    duration: number;
}

interface ParticleFieldProps {
    particleCount?: number;
    particleSize?: number;
    colors?: string[];
    opacity?: number;
    className?: string;
}

export function ParticleField({
    particleCount = 80,
    particleSize = 2,
    colors = ["#FFFFFF", "#CCCCCC", "#7DA4FF"],
    opacity = 0.8,
    className = "",
}: ParticleFieldProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, margin: "100px" });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Generate particles only on mount to prevent hydration mismatch
    const particles = useMemo<Particle[]>(() => {
        if (!mounted) return [];

        return Array.from({ length: particleCount }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: particleSize + Math.random() * particleSize * 0.5,
            opacity: opacity * (0.3 + Math.random() * 0.7),
            color: colors[Math.floor(Math.random() * colors.length)],
            delay: Math.random() * 3,
            duration: 3 + Math.random() * 4,
        }));
    }, [mounted, particleCount, particleSize, colors, opacity]);

    if (!mounted) {
        return <div ref={containerRef} className={`absolute inset-0 ${className}`} />;
    }

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        >
            {isInView &&
                particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: particle.size,
                            height: particle.size,
                            backgroundColor: particle.color,
                            willChange: "transform, opacity",
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [particle.opacity, particle.opacity * 0.4, particle.opacity],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: particle.delay,
                        }}
                    />
                ))}
        </div>
    );
}

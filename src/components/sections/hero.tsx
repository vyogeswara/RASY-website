"use client";

import React from 'react';
import { ParticleField } from "@/components/ui/particle-field";
import { motion } from "framer-motion";

const Hero = () => {

    return (
        <section className="hero-section relative flex flex-col items-center w-full min-h-screen overflow-hidden bg-black"
            style={{ paddingTop: 'clamp(128px, 15vw, 160px)' }}
        >
            <style jsx>{`
                /* TABLET MEDIA QUERY (810px to 1199px) */
                @media screen and (min-width: 810px) and (max-width: 1199px) {
                    .hero-section {
                        padding-top: 140px !important;
                    }
                    .hero-content-wrapper {
                        padding: 0 30px !important;
                        max-width: 100% !important;
                    }
                    .hero-title {
                        font-size: 58px !important;
                        line-height: 1.1em !important;
                    }
                    .hero-subtitle {
                        font-size: 17px !important;
                        max-width: 600px !important;
                    }
                    .hero-background-layer {
                        height: 700px !important;
                        -webkit-mask: linear-gradient(#000 0% 75%, transparent 100%) !important;
                        mask: linear-gradient(#000 0% 75%, transparent 100%) !important;
                    }

                }

                /* MOBILE MEDIA QUERY (Max Width 809px) */
                @media screen and (max-width: 809px) {
                    .hero-section {
                        padding-top: 60px !important;
                        min-height: 100vh !important;
                        width: 100% !important;
                        max-width: 100% !important;
                    }
                    .hero-content-wrapper {
                        padding: 0 20px !important;
                        gap: 0 !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        margin-top: 200px !important;
                    }
                    .hero-badge-wrapper {
                        transform: translateY(-40px) !important;
                    }
                    .hero-badge {
                        margin-bottom: 10px !important;
                        padding: 4px 10px !important;
                    }
                    .hero-badge div {
                        font-size: 9px !important;
                    }
                    .hero-title {
                        font-size: 32px !important;
                        line-height: 1.1em !important;
                        letter-spacing: -0.03em !important;
                        margin-bottom: 8px !important;
                    }
                    .hero-subtitle {
                        font-size: 12px !important;
                        line-height: 1.4em !important;
                        padding: 0 10px !important;
                        margin-bottom: 16px !important;
                        opacity: 0.9 !important;
                    }
                    .hero-button-wrapper {
                        margin-bottom: 12px !important;
                    }
                    .hero-button {
                        padding: 10px 24px !important;
                        border-radius: 999px !important;
                        box-shadow: inset -4px 3px 9px 0px #0175ff, inset 3px -2px 8px 0px #ffcd7d, 0px 0px 20px rgba(1, 117, 255, 0.3) !important;
                        background: #000 !important;
                        border: 1px solid rgba(255, 255, 255, 0.4) !important;
                    }
                    .hero-button-inner {
                        font-size: 13px !important;
                    }
                    .hero-background-layer {
                        top: -10px !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        left: 0 !important;
                        right: 0 !important;
                        height: 100% !important;
                        -webkit-mask: linear-gradient(#000 0% 60%, transparent 90%) !important;
                        mask: linear-gradient(#000 0% 60%, transparent 90%) !important;
                    }
                    .bg-frost-overlay {
                        width: 100% !important;
                        left: 0 !important;
                    }

                }
            `}</style>

            {/* === LAYER 3: FOREGROUND CONTENT (Z-Index: 2) === */}
            <div className="hero-content-wrapper relative z-[2] flex flex-col items-center w-full max-w-[1200px] px-5 md:px-[40px]">

                {/* 1. The Badge */}
                <div className="hero-badge-wrapper">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-badge mb-[24px] px-[16px] py-[6px] rounded-full"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.07)',
                            boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.08)'
                        }}
                    >
                        <div className="text-[12px] font-medium text-white">
                            Secure Launch Q1 2026
                        </div>
                    </motion.div>
                </div>

                {/* 2. Typography */}
                <div className="flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="hero-title text-center text-[46px] md:text-[58px] lg:text-[82px] font-medium tracking-[-0.03em] mb-[24px] text-white"
                        style={{
                            fontFamily: '"Inter Display", sans-serif',
                            lineHeight: '1.1em',
                        }}
                    >
                        Cybersecurity services <br className="hidden md:block" /> with AI protection.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="hero-subtitle text-center text-[16px] md:text-[18px] text-white max-w-[550px] mb-[40px] px-[10px] md:px-0"
                        style={{
                            fontFamily: '"Inter", sans-serif',
                            lineHeight: '1.4em',
                            textShadow: '0 1px 2px rgba(0, 0, 0, 0.32)'
                        }}
                    >
                        We help enterprises to prevent attacks, detect threats early, and secure systems through expert-led, AI-powered cybersecurity services.
                    </motion.p>
                </div>

                {/* 3. Primary CTA Button (Sleek Pill Style) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hero-button-wrapper mb-[60px]"
                >
                    <a href="/contact" className="hero-button block rounded-full transition-all duration-200 hover:scale-[1.03]"
                        style={{
                            textDecoration: 'none',
                            background: '#000',
                            border: '1px solid rgba(255, 255, 255, 0.4)',
                            padding: '12px 28px',
                            boxShadow: 'inset -4px 3px 9px 0px #0175ff, inset 3px -2px 8px 0px #ffcd7d, 0px 0px 25px rgba(1, 117, 255, 0.3)'
                        }}
                    >
                        <div className="hero-button-inner flex items-center justify-center font-semibold text-white">
                            Get Protected
                        </div>
                    </a>
                </motion.div>

            </div>

            {/* === LAYER 2: PATTERN OVERLAY (Z-Index: 1) === */}
            <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                    height: '857px',
                    opacity: 0.14,
                    backgroundImage: 'url(https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png)',
                    backgroundSize: '128px',
                    backgroundRepeat: 'repeat',
                    WebkitMask: 'linear-gradient(rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 15%, #000 31%, #000 100%)',
                    mask: 'linear-gradient(rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 15%, #000 31%, #000 100%)'
                }}
            />

            {/* === LAYER 1: ATMOSPHERE (Z-Index: 0) === */}
            <div className="hero-background-layer absolute top-0 left-0 right-0 z-[0] overflow-hidden"
                style={{
                    height: '857px',
                    WebkitMask: 'linear-gradient(#000 0% 85.69%, transparent 100%)',
                    mask: 'linear-gradient(#000 0% 85.69%, transparent 100%)'
                }}
            >
                {/* A. The Video */}
                <div className="absolute inset-0 w-full h-full">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src="https://pikaso.cdnpk.net/private/production/2290455794/59751519-c5a8-4e4b-b8dd-94ffbfa08aa8-0.mp4?token=exp=1775001600~hmac=946fe13b73c600580de2f6d03194555735d752048382e42b0ebe1dcdf4a376b6" type="video/mp4" />
                    </video>
                </div>

                {/* B. The Frost (Spotlight Effect) */}
                <div className="bg-frost-overlay absolute inset-0 z-[2]"
                    style={{
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        background: 'linear-gradient(180deg, rgba(255, 254, 250, 0) 0%, rgba(255, 255, 255, 0.07) 100%)',
                        WebkitMask: 'radial-gradient(50% 50% at 47.9% 93.9%, transparent 69.1%, rgba(0, 0, 0, 0.9) 81.8%, #000 100%)',
                        mask: 'radial-gradient(50% 50% at 47.9% 93.9%, transparent 69.1%, rgba(0, 0, 0, 0.9) 81.8%, #000 100%)'
                    }}
                />

                {/* C. Stars (Particles) - Sits on TOP of all background elements */}
                <div className="absolute inset-0 z-[3]">
                    <ParticleField
                        particleCount={120}
                        particleSize={1.4}
                        colors={["#FFFFFF", "#7DA4FF", "#FFD700"]}
                        opacity={0.6}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

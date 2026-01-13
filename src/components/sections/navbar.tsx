"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

/**
 * Navbar component for RASY website.
 * Styled to match COSMOQ design with glassmorphism effects.
 */
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Disable scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Services', href: '/services' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.12, 0.23, 0.5, 1] }}
            className="fixed top-0 left-0 right-0 z-[100] w-full"
            style={{ paddingTop: '16px' }}
        >
            <style jsx>{`
                /* TABLET MEDIA QUERY (810px to 1199px) */
                @media screen and (min-width: 810px) and (max-width: 1199px) {
                    .nav-container {
                        max-width: 100% !important;
                        padding: 0 30px !important;
                    }
                }

                /* MOBILE MEDIA QUERY (Max Width 809px) */
                @media screen and (max-width: 809px) {
                    .nav-container {
                        padding: 0 24px !important;
                        height: 48px !important;
                        width: 100% !important;
                        max-width: 100% !important;
                        left: 0 !important;
                        right: 0 !important;
                        position: relative !important;
                    }
                    .nav-logo-link {
                        height: 20px !important;
                    }
                    .nav-logo-img {
                        height: 29px !important;
                        width: auto !important;
                    }
                    .nav-links-pill, 
                    .nav-cta,
                    .hide-mobile {
                        display: none !important;
                    }
                    .nav-mobile-toggle {
                        display: flex !important;
                        width: 40px !important;
                        height: 40px !important;
                        align-items: center !important;
                        justify-content: center !important;
                        background: rgba(255, 255, 255, 0.05) !important;
                        border: none !important;
                        border-radius: 10px;
                        cursor: pointer;
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(10px);
                        padding: 0 !important;
                    }
                    .hamburger-icon { 
                        display: flex; 
                        flex-direction: column; 
                        gap: 4px; 
                        width: 18px; 
                        align-items: center;
                    }
                    .hamburger-icon span { 
                        display: block; 
                        width: 100%; 
                        height: 2px; 
                        background-color: #fff; 
                        border-radius: 99px; 
                    }
                }
            `}</style>
            {/* Main Container - responsive padding */}
            <div
                className="nav-container flex items-center justify-between w-full mx-auto px-4 md:px-6 lg:px-[30px]"
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}
            >
                <div className="flex flex-row justify-between items-center w-full relative">

                    {/* Logo Section - Responsive sizing */}
                    <div className="flex items-center">
                        <a href="/" className="nav-logo-link flex items-center">
                            <img
                                src="https://res.cloudinary.com/doibx3aol/image/upload/v1767948498/RASY_LOGO_vtjngu.svg"
                                alt="RASY Logo"
                                className="nav-logo-img h-7 md:h-8 lg:h-9 w-auto"
                            />
                        </a>
                    </div>

                    {/* Central Navigation Links - COSMOQ glassmorphism pill with masked border */}
                    <div
                        className="nav-links-pill hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 overflow-hidden"
                        style={{
                            padding: '12px 24px',
                            borderRadius: '999px',
                            /* Glass Texture */
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            /* Inner Highlight (Texture) */
                            boxShadow: 'inset -3px -2px 8px 0px rgba(255, 255, 255, 0.07)'
                        }}
                    >
                        {/* Masked Border Overlay - Creates the shimmer effect */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                zIndex: 10,
                                pointerEvents: 'none',
                                borderRadius: '999px',
                                border: '0.5px solid rgb(255, 255, 255)',
                                /* The gradient mask creates the fading shimmer effect */
                                WebkitMask: 'linear-gradient(160deg, #000 0%, transparent 39%, transparent 69%, #000 100%)',
                                mask: 'linear-gradient(160deg, #000 0%, transparent 39%, transparent 69%, #000 100%)'
                            }}
                        />

                        <nav className="flex items-center relative" style={{ gap: '28px', zIndex: 20 }}>
                            {navLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="group flex flex-col items-center cursor-pointer relative"
                                >
                                    <p
                                        className="transition-colors duration-200 hover:text-gray-300"
                                        style={{
                                            color: '#fff',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            fontFamily: '"Inter", sans-serif'
                                        }}
                                    >
                                        {item.name}
                                    </p>
                                    {/* Underline animation */}
                                    <div className="h-px w-full overflow-hidden relative mt-0.5">
                                        <div
                                            className="bg-white w-full h-full -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
                                        />
                                    </div>
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Right Action Button - Get Started with dual-tone glow */}
                    <div className="nav-cta hidden lg:flex items-center">
                        <a
                            href="/contact"
                            className="cursor-pointer group"
                        >
                            <div
                                className="flex items-center justify-center transition-all duration-200 group-hover:brightness-125"
                                style={{
                                    background: '#000',
                                    border: '1px solid rgba(255, 255, 255, 0.4)',
                                    borderRadius: '15px',
                                    padding: '10px 20px',
                                    boxShadow: 'inset -4px 3px 9px 0px #0175ff, inset 3px -2px 8px 0px #ffcd7d'
                                }}
                            >
                                <p
                                    style={{
                                        color: '#fff',
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        fontFamily: '"Inter", sans-serif'
                                    }}
                                >
                                    Get Started
                                </p>
                            </div>
                        </a>
                    </div>

                    <button
                        className="nav-mobile-toggle lg:hidden flex items-center justify-center p-0 m-0 border-none outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <X size={20} color="white" />
                        ) : (
                            <div className="hamburger-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence mode="wait">
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 z-[105] bg-black/95 backdrop-blur-xl flex flex-col pt-20 px-6 overflow-x-hidden w-full left-0 right-0"
                    >
                        {/* Close Button at Top Right */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-4 right-6 w-10 h-10 flex items-center justify-center"
                            aria-label="Close Menu"
                        >
                            <X size={24} color="white" />
                        </button>

                        {/* Background subtle glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#0175ff]/10 blur-[100px] rounded-full pointer-events-none" />

                        {/* Nav Links List */}
                        <div className="w-full flex flex-col items-center gap-10">
                            {navLinks.map((item, idx) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{
                                        delay: idx * 0.05,
                                        duration: 0.4,
                                        ease: "easeOut"
                                    }}
                                    className="text-3xl text-white font-medium tracking-tight hover:text-[#0175ff] transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>

                        {/* Mobile Get Started Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.3 }}
                            className="mt-20 w-full max-w-sm mx-auto"
                        >
                            <a
                                href="/contact"
                                className="group relative w-full inline-flex items-center justify-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <div className="absolute -inset-4 blur-2xl bg-[#0175ff]/30 rounded-full opacity-100"></div>

                                <div
                                    className="relative z-10 w-full bg-black text-white rounded-2xl py-4 text-center text-lg font-semibold"
                                    style={{
                                        backgroundColor: '#000',
                                        border: '1px solid rgba(255, 255, 255, 0.4)',
                                        boxShadow: `
                                            inset -4px 3px 9px 0px #0175ff,
                                            inset 3px -2px 8px 0px #ffcd7d
                                        `
                                    }}
                                >
                                    Get Started
                                </div>
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav >
    );
};

export default Navbar;

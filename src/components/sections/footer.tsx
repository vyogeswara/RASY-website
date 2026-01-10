"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Footer Link Data
const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  documentation: [
    { label: "Blogs", href: "/blog" },
    { label: "Changelog", href: "/changelog" },
    { label: "Privacy policy", href: "/privacy-policy/privacy-policy" },
    { label: "Terms and Conditions", href: "/privacy-policy/terms-and-conditions" },
  ],
  other: [
    { label: "Launchin Soon...", href: "#" },
    { label: "404", href: "/404" },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/jitu.ux/" },
    { label: "X/twitter", href: "https://x.com/jituux" },
    { label: "Linkedin", href: "https://www.linkedin.com/in/jitendra-raut/" },
    { label: "Reddit", href: "https://www.reddit.com/" },
  ],
};

// Sub-component for Link columns - LEFT ALIGNED per raw CSS
const FooterColumn = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div className="flex flex-col flex-1 items-center gap-4 min-w-0">
    <p className="w-full text-white text-[17px] font-medium">
      {title}
    </p>
    <nav className="flex flex-col items-start gap-2 w-full">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="group relative text-[15px] text-[#9ba9c4] transition-colors hover:text-white"
        >
          {link.label}
          <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-white/10 transition-all duration-300 group-hover:w-full" />
        </Link>
      ))}
    </nav>
  </div>
);

export default function Footer() {
  const ctaWords = ["Empower", "Your", "Enterprise", "with", "RASY", "Security", "&", "AI"];

  return (
    <footer className="relative w-full bg-black overflow-hidden flex justify-center">
      {/* Main Container: width 1200px, centered, flex-col, padding-top 80px, gap 42px */}
      <div
        className="relative flex flex-col items-center w-full max-w-[1200px]"
        style={{ gap: '42px', paddingTop: '80px' }}
      >

        {/* === LAYER 1: TOP CTA === */}
        <div
          className="relative z-10 flex flex-col items-center w-full px-10"
          style={{ gap: '48px', maxWidth: '1200px' }}
        >
          {/* Text Block */}
          <div className="flex flex-col items-center gap-6 w-full">
            {/* Title - max-width 687px, centered */}
            <h2
              className="text-white text-center font-normal leading-[1.2] tracking-[-0.02em]"
              style={{ fontFamily: '"Inter Display", sans-serif', fontSize: '56px', maxWidth: '687px' }}
            >
              {ctaWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.001, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            {/* Subtext - max-width 470px */}
            <motion.p
              className="text-[#9ba9c4] text-center text-lg"
              style={{ maxWidth: '470px' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Comprehensive cybersecurity and AI solutions to protect and transform your business.
            </motion.p>
          </div>

          {/* Get Started Button - width 156px per raw CSS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ width: '156px' }}
          >
            <Link
              href="/contact"
              className="flex items-center justify-center w-full rounded-[15px] bg-black transition-transform hover:scale-[1.03]"
              style={{
                padding: '14px 24px',
                boxShadow: '0px 28px 28px -3.75px rgba(0, 0, 0, 0.06), inset -4px 3px 9px 0px #0175ff, inset 3px -2px 8px 0px #ffcd7d',
                border: '1px solid rgba(255, 255, 255, 0.4)'
              }}
            >
              <span className="text-white text-base font-semibold whitespace-nowrap">Contact Us</span>
            </Link>
          </motion.div>
        </div>

        {/* === LAYER 2: LOGO WORDMARK (Absolute positioned behind sitemap) === */}
        <div
          className="relative w-full flex justify-center items-center pointer-events-none select-none"
          style={{ mixBlendMode: 'difference' }}
        >
          {/* Background Image - 110% width, absolute, -5% left, 620px height */}
          <motion.figure
            style={{
              width: '110%',
              height: '620px',
              left: '-5%',
              top: 'calc(19.34% - 310px)',
              zIndex: 0,
              maskImage: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, #000 11.6%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, #000 11.6%, rgba(0,0,0,0) 100%)',
            }}
            className="absolute pointer-events-none md:block hidden"
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="https://framerusercontent.com/images/3ez5Goty6KdEzujpWDVyu8Um6Ns.webp"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 110vw, 1320px"
            />
          </motion.figure>

          {/* Overlays - 952px, mix-blend-mode overlay */}
          <div
            className="relative flex justify-center items-center"
            style={{ width: '952px', height: '236px', mixBlendMode: 'overlay' }}
          >
            <Image
              src="https://res.cloudinary.com/doibx3aol/image/upload/v1767948498/RASY_LOGO_vtjngu.svg"
              alt=""
              width={952}
              height={236}
              className="w-full h-auto opacity-20"
            />
          </div>
        </div>

        {/* === LAYER 3: SITEMAP LINKS === */}
        <div className="relative z-10 w-full px-10" style={{ maxWidth: '1200px' }}>
          {/* Links Wrapper: flex-wrap, gap 28px, align-items flex-start */}
          <div
            className="flex flex-wrap justify-start gap-7 w-full"
            style={{ maxWidth: '1200px' }}
          >
            <FooterColumn title="Navigation" links={footerLinks.navigation} />
            <FooterColumn title="Documentation" links={footerLinks.documentation} />
            <FooterColumn title="Other Pages" links={footerLinks.other} />
            <FooterColumn title="Social Connect" links={footerLinks.social} />
          </div>
        </div>

        {/* === LAYER 4: BOTTOM BAR === */}
        <div className="relative z-10 w-full px-10" style={{ maxWidth: '1200px' }}>
          {/* Line - 1px, full width, position absolute top 0 */}
          <div className="relative w-full">
            <div
              className="absolute top-0 left-0 w-full h-px"
              style={{ backgroundColor: 'rgba(125, 164, 255, 0.16)' }}
            />
            {/* Bottom Row - flex-row, justify space-between, padding 20px 0, gap 24px */}
            <div
              className="flex flex-row justify-between items-center w-full"
              style={{ padding: '20px 0', gap: '24px', maxWidth: '1200px' }}
            >
              {/* Copyright - left aligned */}
              <div className="flex-1">
                <p className="text-[#9ba9c4] text-[15px]">
                  All rights reserved for @RASY
                </p>
              </div>
              {/* Empty div for spacing */}
              <div className="flex-1 flex justify-end" />
            </div>
          </div>
        </div>

      </div>
    </footer >
  );
}

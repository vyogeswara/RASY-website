"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { IconArrowRight, IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react";
import { assets, leaders } from "@/content/rasy";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/training", label: "Training" },
  { href: "/about", label: "About" },
];

const companyLogos = [
  { name: "Slack", wordmark: "slack", style: "slack" },
  { name: "Google", wordmark: "Google", style: "google" },
  { name: "Shopify", wordmark: "shopify", style: "shopify" },
  { name: "Wayfair", wordmark: "wayfair", style: "wayfair" },
  { name: "Stripe", wordmark: "Stripe", style: "stripe" },
  { name: "Xero", wordmark: "Xero", style: "xero" },
  { name: "Microsoft Azure", wordmark: "Microsoft Azure", style: "azure" },
  { name: "Udacity", wordmark: "UDACITY", style: "udacity" },
];

function LogoRailGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="hero-logo-group" role={hidden ? undefined : "list"} aria-hidden={hidden || undefined}>
      {companyLogos.map((company) => (
        <div className="hero-logo-mark" role={hidden ? undefined : "listitem"} key={company.name}>
          <span className={"hero-company-wordmark hero-company-wordmark--" + company.style} aria-label={company.name}>{company.wordmark}</span>
        </div>
      ))}
    </div>
  );
}

export function HeroExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [menuOpen]);

  return (
    <section className="home-hero home-hero--command" aria-labelledby="home-title">
      <motion.picture
        className="home-hero__background"
        initial={reduceMotion ? false : { scale: 1.025, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <source media="(max-width: 720px)" srcSet={assets.heroBackgroundMobile} />
        <source media="(max-width: 1100px)" srcSet={assets.heroBackgroundTablet} />
        <img src={assets.heroBackgroundDesktop} alt="" fetchPriority="high" />
      </motion.picture>
      <div className="home-hero__scrim" />

      <motion.header className="hero-nav" initial={reduceMotion ? false : { opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}>
        <Link className="hero-nav__brand" href="/" aria-label="RASY home"><img src={assets.logo} alt="RASY" /></Link>
        <nav className="hero-nav__links" aria-label="Homepage navigation">{navItems.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
        <div className="hero-nav__actions">
          <Link className="hero-nav__consultation" href="/contact">Book a consultation</Link>
          <button className="hero-nav__menu" type="button" onClick={() => setMenuOpen(true)} aria-label="Open navigation" aria-expanded={menuOpen}><IconMenu2 size={22} stroke={1.8} /></button>
        </div>
      </motion.header>

      <div className="home-hero__content">
        <div className="home-hero__headline">
          <motion.p className="home-hero__eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }}>AI, automation &amp; cybersecurity</motion.p>
          <motion.h1 id="home-title" initial={reduceMotion ? false : { opacity: 0.45, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}>
            <span>Build smarter.</span><span>Operate securely.</span><span>Grow with confidence.</span>
          </motion.h1>
        </div>

        <motion.div className="home-hero__support" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.72, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}>
          <div className="hero-trust">
            <div className="hero-trust__avatars" aria-hidden="true">
              {leaders.slice(0, 3).map((leader) => <img src={leader.image} alt="" key={leader.name} />)}
              <span className="hero-trust__star">&#9733;</span>
            </div>
            <p>Leadership-led, accountable delivery</p>
          </div>
          <p>RASY helps organisations apply useful AI, automate critical work, improve digital experiences, and strengthen cyber resilience through one accountable technology partner.</p>
          <div className="home-hero__actions">
            <Link className="hero-action" href="/contact">Book a consultation <IconArrowUpRight size={16} stroke={1.8} /></Link>
          </div>
        </motion.div>
      </div>

      <motion.div className="hero-logo-marquee" aria-label="Technology ecosystem" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}>
        <div className="hero-logo-track">
          <LogoRailGroup />
          <LogoRailGroup hidden />
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && <motion.div className="hero-mobile-menu" initial={{ opacity: 0, filter: "blur(12px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} exit={{ opacity: 0, filter: "blur(12px)" }}>
          <div className="hero-mobile-menu__top"><img src={assets.logo} alt="RASY" /><button type="button" onClick={() => setMenuOpen(false)} aria-label="Close navigation"><IconX size={22} /></button></div>
          <nav aria-label="Mobile navigation">{navItems.map((item, index) => <motion.div key={item.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 + index * 0.055 }}><Link href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<IconArrowRight size={24} /></Link></motion.div>)}</nav>
          <p>Useful AI, resilient security, connected digital experiences, and capability that lasts.</p>
        </motion.div>}
      </AnimatePresence>
    </section>
  );
}
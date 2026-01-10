"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Consulting", href: "/consulting" },
  { name: "Programs", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      // State 1: Immediate visibility.
      // We start with a visible border that matches the grid's top line.
      initial={{
        backgroundColor: "rgba(0,0,0,1)",
        borderBottomColor: "rgba(255,255,255,0.08)"
      }}
      animate={{
        backgroundColor: "rgba(0,0,0,0.6)",
        borderBottomColor: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)"
      }}
      transition={{ duration: 1.0, delay: 0 }} // NO DELAY - Loads with Grid
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-0 h-[80px] border-b"
    >
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 flex items-center justify-between h-full">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group relative z-50">
          <div className="relative flex items-center justify-center w-10 h-10">
            {/* Logo SVG */}
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M21 4L35 12V28L21 36L7 28V12L21 4Z" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="21" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="21" cy="20" r="3" fill="currentColor" />
              <path d="M21 36V28" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 relative z-50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[14px] font-medium tracking-wide transition-colors duration-200 hover:text-white ${pathname === link.href ? "text-white" : "text-neutral-300"
                }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center relative z-50">
          <Button
            className="bg-[#1D64FF] hover:bg-[#164fd4] text-white rounded-[2px] px-8 h-10 text-[13px] font-semibold tracking-wide transition-all"
          >
            Request a Demo
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
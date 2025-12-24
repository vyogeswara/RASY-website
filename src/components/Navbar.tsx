"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Consulting", href: "/consulting" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-6 backdrop-blur-xl bg-black/10 border-b border-white/5"
    >
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-10 h-10 flex items-center justify-center relative">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-90 transition-transform duration-500">
            <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2"/>
            <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="1.5"/>
            <path d="M20 5V35M5 20H35" stroke="white" strokeWidth="1" strokeOpacity="0.3"/>
            <circle cx="20" cy="20" r="4" fill="white"/>
          </svg>
          <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-sm font-semibold tracking-wide transition-all hover:text-white ${
              pathname === link.href ? "text-white" : "text-zinc-400"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white rounded-none px-8 py-6 text-sm font-bold tracking-tight">
        Request a Demo
      </Button>
    </motion.header>
  );
}

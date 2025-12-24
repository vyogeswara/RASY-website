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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 backdrop-blur-md bg-black/40 border-b border-white/5"
    >
      <Link href="/" className="flex items-center gap-2 group">
        <div className="relative flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white group-hover:scale-110 transition-transform duration-300">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2"/>
            <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
            <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7"/>
            <circle cx="16" cy="16" r="2" fill="currentColor"/>
          </svg>
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-sm font-semibold tracking-tight transition-all hover:text-white ${
              pathname === link.href ? "text-white" : "text-zinc-500"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white rounded-none px-6 py-5 text-sm font-bold tracking-tight">
          Request a Demo
        </Button>
      </div>
    </motion.header>
  );
}

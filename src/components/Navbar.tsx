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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-black/50 border-b border-white/5"
    >
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-4 h-4 rounded-full border border-white" />
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-sm font-medium transition-colors hover:text-white ${
              pathname === link.href ? "text-white" : "text-zinc-400"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6">
        Request a Demo
      </Button>
    </motion.header>
  );
}

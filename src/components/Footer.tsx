"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Consulting", href: "/consulting" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

export function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/5 py-12 px-8 flex flex-col items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-4 h-4 rounded-full border border-white" />
        </div>
      </div>

      <nav className="flex flex-wrap justify-center gap-8">
        {footerLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
          <Twitter className="w-5 h-5" />
        </Link>
        <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
          <Instagram className="w-5 h-5" />
        </Link>
        <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
          <Github className="w-5 h-5" />
        </Link>
        <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
          <Linkedin className="w-5 h-5" />
        </Link>
      </div>

      <div className="flex flex-col items-center gap-2 text-xs text-zinc-500">
        <p>© 2025 CyberShade. All Rights Reserved</p>
        <p className="flex items-center gap-1">
          Made by <span className="text-zinc-300">Ahmet Köse</span>. Built with Framer
        </p>
      </div>
    </footer>
  );
}

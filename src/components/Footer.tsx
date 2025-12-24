"use client";

import Link from "next/link";
import { Twitter, Linkedin, Mail, Instagram } from "lucide-react";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Consulting", href: "/consulting" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

export function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/5 pt-24 pb-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-12">
          <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white footer-logo">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2"/>
            <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
            <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7"/>
            <circle cx="16" cy="16" r="2" fill="currentColor"/>
          </svg>
        </div>

        <nav className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-500 hover:text-white transition-colors tracking-tight"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex gap-6 mb-16">
          <Link href="#" className="p-3 border border-white/10 rounded-xl text-zinc-500 hover:text-white hover:border-white/20 transition-all">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="#" className="p-3 border border-white/10 rounded-xl text-zinc-500 hover:text-white hover:border-white/20 transition-all">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="#" className="p-3 border border-white/10 rounded-xl text-zinc-500 hover:text-white hover:border-white/20 transition-all">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="#" className="p-3 border border-white/10 rounded-xl text-zinc-500 hover:text-white hover:border-white/20 transition-all">
            <Mail className="w-5 h-5" />
          </Link>
        </div>

        <div className="w-full border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-zinc-600 font-medium">© 2025 CyberShade. All Rights Reserved</p>
          <p className="text-sm text-zinc-600 font-medium">Made by Ahmet Köse. Built with Framer</p>
        </div>
      </div>
    </footer>
  );
}

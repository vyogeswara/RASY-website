"use client";

import React from "react";

interface TechFrameProps {
  children: React.ReactNode;
  className?: string;
  showScanline?: boolean;
}

export function TechFrame({ children, className = "", showScanline = true }: TechFrameProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Corner Brackets */}
      <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-blue-500/50 group-hover:border-blue-500 transition-colors duration-500" />
      <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t border-r border-blue-500/50 group-hover:border-blue-500 transition-colors duration-500" />
      <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b border-l border-blue-500/50 group-hover:border-blue-500 transition-colors duration-500" />
      <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-blue-500/50 group-hover:border-blue-500 transition-colors duration-500" />

      {/* Tiny Outer Accents */}
      <div className="absolute -top-1.5 -left-1.5 w-1 h-1 bg-blue-500/40" />
      <div className="absolute -top-1.5 -right-1.5 w-1 h-1 bg-blue-500/40" />
      <div className="absolute -bottom-1.5 -left-1.5 w-1 h-1 bg-blue-500/40" />
      <div className="absolute -bottom-1.5 -right-1.5 w-1 h-1 bg-blue-500/40" />

      {/* Scanline Effect */}
      {showScanline && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="w-full h-[1px] bg-blue-500/10 absolute top-0 animate-scanline" />
        </div>
      )}

      {/* Background Dots */}
      <div className="absolute inset-0 matrix-dots opacity-10 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

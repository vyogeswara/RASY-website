"use client";

import { useEffect, useState } from "react";

export function SecurityMap() {
  const [dots, setDots] = useState<{ x: number; y: number; opacity: number }[]>([]);

  useEffect(() => {
    // Generate dots only on client to avoid hydration mismatch
    const newDots = [...Array(150)].map(() => ({
      x: Math.random() * 1000,
      y: Math.random() * 500,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
        <circle cx="200" cy="150" r="1.5" fill="white" />
        <circle cx="250" cy="180" r="1.5" fill="white" />
        <circle cx="300" cy="120" r="1.5" fill="white" />
        <circle cx="700" cy="200" r="1.5" fill="white" />
        <circle cx="800" cy="150" r="1.5" fill="white" />
        <circle cx="600" cy="300" r="1.5" fill="white" />
        <circle cx="150" cy="350" r="1.5" fill="white" />
        <circle cx="850" cy="400" r="1.5" fill="white" />
        {dots.map((dot, i) => (
          <circle key={i} cx={dot.x} cy={dot.y} r="1" fill="white" opacity={dot.opacity} />
        ))}
      </svg>
    </div>
  );
}

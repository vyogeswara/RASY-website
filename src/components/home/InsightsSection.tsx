"use client";

import Image from "next/image";
import { Lock, Hexagon, RefreshCw, BrickWall, Network, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const insights = [
  {
    title: "Network Solutions",
    description: "Optimize and secure your network infrastructure with cutting-edge routing and switching solutions, ensuring seamless data flow, reduced latency, and enhanced security for all connected devices.",
    icon: Lock,
    isFeatured: true,
  },
  {
    title: "Penetration Testing",
    description: "Identify and eliminate security vulnerabilities through ethical hacking and risk assessments.",
    icon: Hexagon,
  },
  {
    title: "Maintenance Contracts",
    description: "Ensure continuous system stability with proactive monitoring, updates, and expert support.",
    icon: RefreshCw,
  },
  {
    title: "Firewall Solutions",
    description: "Safeguard your digital assets with next-generation firewall technologies that provide real-time threat detection, intrusion prevention, and adaptive security measures to counter evolving cyber threats.",
    icon: BrickWall,
    isFeatured: true,
  },
  {
    title: "Data Loss Prevention",
    description: "Safeguard sensitive information with AI-driven data security and real-time monitoring.",
    icon: Network,
  },
  {
    title: "Server Solutions",
    description: "Deploy high-performance, scalable, and secure server architectures tailored to your needs.",
    icon: Cloud,
  },
];

export function InsightsSection() {
  return (
    <section className="w-full py-40 px-8 bg-black relative overflow-hidden">
      {/* Background Map */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image 
          src="https://res.cloudinary.com/dslutbftw/image/upload/v1766588368/N1Y9B7fbGDwlPRVz7tmK7gJpT4_uscgxq.png"
          alt="Security Map Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        <div className="text-center mb-32">
          <h2 className="text-6xl font-bold tracking-tight mb-8 leading-tight">Security Insights</h2>
          <p className="text-zinc-400 text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Gain complete visibility and protect your digital assets with <br /> real-time security intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
          {insights.map((item, i) => (
            <div 
              key={i} 
              className={`
                ${item.isFeatured ? "md:col-span-2" : "col-span-1"}
                corner-border p-12 bg-black/40 backdrop-blur-xl border border-white/5 
                flex flex-col items-center text-center gap-8 group 
                hover:border-blue-500/40 transition-all duration-500
                relative overflow-hidden
              `}
            >
              {/* Dot Grid Overlay */}
              <div className="absolute inset-0 dot-grid-sm opacity-20 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center gap-8">
                <div className="w-20 h-20 corner-border bg-white/5 flex items-center justify-center text-white group-hover:bg-blue-600/20 transition-all duration-500">
                  <item.icon className="w-10 h-10" />
                </div>
                
                <div className="flex flex-col gap-4">
                  <h3 className="text-4xl font-bold tracking-tight text-white">{item.title}</h3>
                  <p className="text-zinc-400 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-none px-16 py-8 text-xl font-bold tracking-tight shadow-[0_0_30px_rgba(37,99,235,0.3)]">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

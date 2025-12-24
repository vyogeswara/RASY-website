"use client";

import { Globe, Search, Server, Shield, Lock, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SecurityMap } from "./SecurityMap";

const insights = [
  {
    title: "Network Solutions",
    description: "Optimize and secure your network infrastructure with tailored configurations and proactive monitoring.",
    icon: Globe,
  },
  {
    title: "Penetration Testing",
    description: "Identify and address vulnerabilities with comprehensive security assessments and ethical hacking.",
    icon: Search,
  },
  {
    title: "Maintenance Contracts",
    description: "Ensure continuous security and performance with our ongoing support and update services.",
    icon: Server,
  },
  {
    title: "Firewall Solutions",
    description: "Protect your perimeter with advanced firewall deployments and managed security services.",
    icon: Shield,
  },
  {
    title: "Data Loss Prevention",
    description: "Secure your sensitive data and prevent unauthorized access with our robust DLP strategies.",
    icon: Lock,
  },
  {
    title: "Server Solutions",
    description: "Reliable and secure server deployments tailored to your business needs and growth.",
    icon: Database,
  },
];

export function InsightsSection() {
  return (
    <section className="w-full py-40 px-8 bg-black relative overflow-hidden">
      <SecurityMap />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-32 relative z-10">
          <h2 className="text-5xl font-bold tracking-tight mb-6 leading-tight">Security Insights</h2>
          <p className="text-zinc-500 text-lg font-medium max-w-2xl">Gain complete visibility and protect your digital assets with <br /> real-time security intelligence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {insights.map((item, i) => (
            <div key={i} className="corner-border p-10 bg-zinc-900/40 backdrop-blur-md border border-white/5 flex flex-col gap-8 group hover:border-blue-500/30 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
              <p className="text-zinc-500 font-medium leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 relative z-10">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-none px-12 py-6 font-bold tracking-tight">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

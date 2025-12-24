"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Server, Globe, Zap, Search, Mail, Cpu, Database, Plus, Minus } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Network Solutions",
    description: "Secure your network infrastructure with fast, reliable, and scalable routing and switching for seamless performance and strong protection.",
    icon: Globe,
  },
  {
    title: "Penetration Testing",
    description: "Test your critical systems and digital infrastructure for potential weak points by simulating cyber attacks. Ethical hacking reveals security vulnerabilities.",
    icon: Search,
  },
  {
    title: "Maintenance Contracts",
    description: "Keep your systems stable and secure with maintenance contracts offering regular scheduled updates and proactive real-time monitoring.",
    icon: Server,
  },
  {
    title: "Firewall Solutions",
    description: "Protect digital assets with real-time firewall defenses that detect threats and prevent intrusions with intelligent filtering rules.",
    icon: Shield,
  },
  {
    title: "DLP",
    description: "Prevent data leaks with AI-driven monitoring tools that track, detect, and block unauthorized access to your sensitive information.",
    icon: Lock,
  },
  {
    title: "Server Solutions",
    description: "Build reliable, secure, and scalable server setups expertly configured and customized to your organization's performance and capacity requirements.",
    icon: Database,
  },
  {
    title: "Cybersecurity Audits",
    description: "Conduct in-depth security audits to effectively uncover hidden threats and ensure essential and relevant industry standards, providing clear visibility.",
    icon: Cpu,
  },
  {
    title: "Email Security",
    description: "Shield your email channels from spam, phishing, and breaches with advanced filtering, encryption, authentication tools, and continuous monitoring.",
    icon: Mail,
  },
  {
    title: "Device Security",
    description: "Safeguard devices across your network with real-time monitoring, threat detection, malware defense, and secure access enforcement.",
    icon: Zap,
  },
  {
    title: "SIEM Integration",
    description: "Centralize your security monitoring efforts with advanced real-time log analysis and intelligent event correlation. Implement automated alerts.",
    icon: Shield,
  },
];

const faqs = [
  { q: "What industries do you serve?", a: "We serve a wide range of industries including finance, healthcare, technology, and government sectors, providing tailored security solutions for each." },
  { q: "How do I get started with a service?", a: "You can get started by clicking the 'Request a Demo' button or contacting us directly through our 'Get in Touch' section." },
  { q: "Are your solutions scalable for growing businesses?", a: "Yes, all our security architectures are designed with scalability in mind to grow alongside your business." },
  { q: "Do you offer support after project completion?", a: "Absolutely. We offer various maintenance contracts and 24/7 support services to ensure ongoing security." },
  { q: "Can you customize services for specific needs?", a: "Customization is at the core of what we do. We tailor every security strategy to the unique requirements of our clients." },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full py-40 px-8 flex flex-col items-center bg-black hero-gradient-services overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-bold tracking-tighter mb-10"
          >
            Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-lg md:text-2xl font-bold tracking-tight leading-relaxed max-w-2xl mx-auto"
          >
            Secure your digital infrastructure with our tailored, high-impact cybersecurity solutions.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="w-full py-40 px-8 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div key={i} className="corner-border p-12 bg-zinc-900/40 backdrop-blur-md border border-white/5 flex flex-col gap-8 group hover:border-blue-500/30 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                <service.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold tracking-tight mb-4">{service.title}</h3>
                <p className="text-zinc-500 text-lg font-medium leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-40 px-8 bg-black flex flex-col items-center">
        <h2 className="text-6xl font-bold tracking-tighter mb-32">FAQ</h2>
        
        <div className="w-full max-w-3xl flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/5 overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-bold tracking-tight flex items-center gap-4">
                  <span className="text-blue-600">{openFaq === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}</span>
                  {faq.q}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openFaq === i ? "auto" : 0 }}
                className="overflow-hidden"
              >
                <p className="pb-8 pl-9 text-zinc-500 font-medium leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 px-8 bg-black flex justify-center">
        <div className="w-full max-w-7xl rounded-[40px] bg-gradient-to-b from-blue-900/40 to-black border border-white/10 p-16 md:p-32 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-grid-sm opacity-20" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-5xl font-bold tracking-tighter leading-tight mb-4">Stay Ahead of Cyber</h2>
            <h3 className="text-5xl font-bold tracking-tighter leading-tight mb-10 text-white/40">Threat</h3>
            
            <p className="text-zinc-400 text-lg font-medium mb-12 max-w-2xl">
              Partner with CyberShade to protect your business from modern cyber threats. Our experts are ready to guide you.
            </p>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-none px-12 py-7 text-sm font-bold tracking-tight transition-all">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

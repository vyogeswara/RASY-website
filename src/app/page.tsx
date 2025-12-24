"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { Shield, Lock, Server, Globe, Users, Zap, Search, Mail, Cpu, Database } from "lucide-react";
import Image from "next/image";

const partners = [
  { icon: Shield, name: "Shield" },
  { icon: Lock, name: "Lock" },
  { icon: Server, name: "Server" },
  { icon: Globe, name: "Globe" },
  { icon: Users, name: "Users" },
  { icon: Zap, name: "Zap" },
];

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

const trainingModules = [
  { title: "Risk Awareness Training", description: "Learn to identify and mitigate cyber risks effectively." },
  { title: "Phishing Attack Defense", description: "Protect your organization from sophisticated phishing attempts." },
  { title: "Incident Response Drills", description: "Prepare your team for rapid response to security incidents." },
  { title: "Penetration Testing Basics", description: "Understand the fundamentals of security testing." },
  { title: "Data Protection Strategies", description: "Implement best practices for safeguarding sensitive data." },
  { title: "Threat Intelligence Services", description: "Stay informed about emerging cyber threats." },
  { title: "Secure Software Development", description: "Build security into your software development lifecycle." },
  { title: "Compliance Management Support", description: "Ensure your business meets industry security standards." },
];

const team = [
  { name: "Jonas Kahnwald", role: "CEO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
  { name: "Sophia Bennett", role: "Head of Cybersecurity", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
  { name: "Liam Reynolds", role: "Lead Software Engineer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
  { name: "Ava Mitchell", role: "UI/UX Designer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
  { name: "Carlos Mendoza", role: "Cyber Threat Analyst", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
  { name: "Mei Lin Zhang", role: "Cloud Security Architect", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop" },
];

const testimonials = [
  {
    quote: "CyberShade has transformed our security posture. Their expertise is unmatched in the industry.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
    rating: 5,
  },
  {
    quote: "The team's proactive approach saved us from multiple potential breaches. Highly recommended.",
    author: "James Carter",
    role: "Head of IT, Global Logistics",
    rating: 5,
  },
  {
    quote: "Exceptional service and deep technical knowledge. They are true partners in our security journey.",
    author: "Emily Ryans",
    role: "CISO, Fintech Solutions",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] cyber-gradient-blue opacity-30 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-1 text-sm font-medium mb-8 backdrop-blur-sm relative z-10"
        >
          <span className="text-blue-500 mr-2">●</span> CyberSecurity 2025
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold text-center max-w-5xl mb-8 relative z-10"
        >
          SECURE YOUR <br /> DIGITAL WORLD
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg md:text-xl text-center max-w-2xl mb-12 relative z-10"
        >
          Modern and powerful security solutions to protect against cyber threats. 
          Designed to safeguard your data, systems, and users. Stay secure now.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-10">
            Get Started
          </Button>
        </motion.div>

        {/* Hero Globe Element */}
        <div className="mt-20 relative w-full max-w-4xl aspect-video bg-blue-600/5 rounded-[40px] border border-blue-500/10 overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,112,255,0.2),transparent_70%)]" />
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-64 h-64 border-2 border-blue-500/20 rounded-full animate-pulse" />
             <div className="absolute w-96 h-96 border border-blue-500/10 rounded-full" />
           </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-20 bg-black flex flex-col items-center gap-12">
        <h2 className="text-3xl font-bold text-center">
          Powerful Solutions with <br /> Trusted Partners
        </h2>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
          {partners.map((partner, i) => (
            <partner.icon key={i} className="w-10 h-10" />
          ))}
        </div>
        
        <div className="mt-8 flex flex-col items-center gap-4">
           <div className="w-px h-24 bg-gradient-to-b from-blue-500 to-transparent" />
           <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center">
             <Shield className="w-6 h-6 text-blue-500" />
           </div>
        </div>
      </section>

      {/* Security Insights Section */}
      <section className="w-full py-32 px-8 flex flex-col items-center bg-black relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Security Insights</h2>
          <p className="text-zinc-400">Gain complete visibility and protect your digital assets with real-time security intelligence.</p>
        </div>
        
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col gap-4 group hover:border-blue-500/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cyber Training Section */}
      <section className="w-full py-32 px-8 bg-[#030303] flex justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Strengthen Your <br /> Digital Defense with <br /> Expert Cyber Training
            </h2>
            <div className="flex flex-wrap gap-3">
              {["B2B Services Projects", "Web development", "60.000+ Happy Users Inc.", "Best Incident Response", "30+ Team Trained"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            {trainingModules.map((module, i) => (
              <div key={i} className="flex gap-4 p-4 hover:bg-white/5 rounded-xl transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-white/30 transition-all shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{module.title}</h4>
                  <p className="text-zinc-500 text-sm">{module.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-32 px-8 bg-black flex flex-col items-center">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">The Team Securing Your Safety</h2>
          <p className="text-zinc-400">Protecting your digital world with passion and expertise.</p>
        </div>
        
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-[#0A0A0A] border border-white/5"
            >
              <div className="relative w-40 h-40 mb-6">
                 <div className="absolute inset-0 bg-blue-500/20 blur-3xl group-hover:bg-blue-500/40 transition-all rounded-full" />
                 <Image
                   src={member.img}
                   alt={member.name}
                   width={160}
                   height={160}
                   className="rounded-full relative z-10 grayscale hover:grayscale-0 transition-all duration-500 object-cover border-4 border-black"
                 />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-zinc-500 text-sm mb-6">{member.role}</p>
              <div className="flex gap-4">
                 {[Twitter, Linkedin, Mail].map((Icon, j) => (
                   <button key={j} className="p-2 border border-white/5 rounded-lg text-zinc-600 hover:text-white hover:border-white/20 transition-all">
                     <Icon className="w-4 h-4" />
                   </button>
                 ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-32 px-8 bg-[#030303] flex flex-col items-center">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Voices of Our Trusted Clients</h2>
          <p className="text-zinc-400">Hear the stories of their cybersecurity journey with us.</p>
        </div>
        
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-[#0A0A0A] border border-white/5 rounded-2xl flex flex-col gap-6">
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, j) => (
                  <Zap key={j} className="w-4 h-4 text-blue-500 fill-blue-500" />
                ))}
              </div>
              <p className="text-zinc-300 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-800" />
                <div>
                  <p className="text-sm font-bold">{t.author}</p>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}

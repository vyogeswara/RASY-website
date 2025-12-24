"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { Shield, Lock, Server, Globe, Users, Zap, Search, Mail, Cpu, Database, Twitter, Linkedin } from "lucide-react";
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
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-40 px-8 overflow-hidden bg-black">
        {/* Glow Ray Effects Top Left */}
        <div className="absolute top-[-10%] left-[-20%] w-[150%] h-[150%] pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full glow-ray-sharp rotate-[25deg] opacity-60" />
          <div className="absolute top-0 left-[5%] w-full h-full glow-ray-sharp rotate-[15deg] opacity-40" />
          <div className="absolute top-0 left-[10%] w-full h-full glow-ray-sharp rotate-[35deg] opacity-30" />
        </div>

        {/* 10x5 Responsive Grid */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-5 border-b border-white/20 h-full w-full opacity-60">
            {[...Array(50)].map((_, i) => (
              <div key={i} className="border-r border-b border-white/5 relative">
                {/* Dot at intersections */}
                <div className="absolute -right-[1.5px] -bottom-[1.5px] w-[3px] h-[3px] bg-white/20 rounded-full z-10" />
                
                {/* Pulse animations */}
                <div className="absolute top-0 left-0 w-full h-[1.5px] overflow-hidden opacity-20">
                  <div className="grid-pulse-h" style={{ animationDelay: `${Math.random() * 8}s` }} />
                </div>
                <div className="absolute top-0 left-0 h-full w-[1.5px] overflow-hidden opacity-20">
                  <div className="grid-pulse-v" style={{ animationDelay: `${Math.random() * 8}s` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Planet/Cloudinary Image & Arc */}
        <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 w-[180%] aspect-[2.5/1] pointer-events-none z-10">
          <div className="absolute inset-0 planet-arc opacity-60" />
          <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-blue-500/50 blur-[2px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-full">
            <Image 
              src="https://res.cloudinary.com/dslutbftw/image/upload/v1766544779/CCqBJMabxVDE9sutmlyZL4CF8k_qvd4bm.avif"
              alt="Cyber Planet"
              fill
              className="object-contain object-bottom opacity-80"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="corner-border dot-grid-sm bg-black/40 backdrop-blur-md px-8 py-4 mb-14 relative z-30 flex items-center gap-4 border border-white/5"
        >
          <div className="w-3.5 h-3.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]" />
          <span className="text-sm font-bold tracking-[0.25em] text-white uppercase">System Security: ACTIVE</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-[120px] font-bold text-center max-w-7xl mb-12 relative z-30 leading-[0.85] tracking-tighter text-white"
        >
          SECURE YOUR <br /> DIGITAL WORLD
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg md:text-2xl text-center max-w-4xl mb-20 relative z-30 font-medium px-4 leading-relaxed"
        >
          Modern and powerful security solutions to protect against cyber threats. <br className="hidden md:block" />
          Designed to safeguard your data, systems, and privacy. Stay secure now!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative z-30"
        >
          <div className="corner-border p-1">
            <Button size="lg" className="bg-black/40 hover:bg-white/5 text-white rounded-none px-16 py-8 text-xl font-bold border border-white/10 transition-all backdrop-blur-sm">
              Get Started
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-24 bg-black flex flex-col items-center gap-16 relative z-20">
        <h2 className="text-4xl font-bold text-center leading-tight">
          Powerful Solutions with <br /> Trusted Partners
        </h2>
        
        <div className="flex flex-wrap justify-center gap-16 md:gap-32 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, i) => (
            <partner.icon key={i} className="w-12 h-12" />
          ))}
        </div>
        
        <div className="mt-12 flex flex-col items-center gap-6">
           <div className="w-px h-32 bg-gradient-to-b from-blue-500 to-transparent" />
           <div className="w-14 h-14 rounded-full border border-blue-500/30 flex items-center justify-center bg-black/50 backdrop-blur-sm">
             <Shield className="w-7 h-7 text-blue-500" />
           </div>
        </div>
      </section>

      {/* Security Insights Section */}
      <section className="w-full py-32 px-8 flex flex-col items-center bg-black relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Security Insights</h2>
          <p className="text-zinc-400 text-lg">Gain complete visibility and protect your digital assets with real-time security intelligence.</p>
        </div>
        
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-10 bg-[#0A0A0A] border border-white/5 rounded-3xl flex flex-col gap-6 group hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-zinc-500 text-base leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cyber Training Section */}
      <section className="w-full py-32 px-8 bg-[#030303] flex justify-center">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="flex flex-col gap-10">
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter">
              Strengthen Your <br /> Digital Defense <br /> with Expert <br /> Cyber Training
            </h2>
            <div className="flex flex-wrap gap-4">
              {["B2B Services Projects", "Web development", "60.000+ Happy Users Inc.", "Best Incident Response", "30+ Team Trained"].map((tag) => (
                <span key={tag} className="px-5 py-3 bg-zinc-900/50 border border-zinc-800 rounded-xl text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            {trainingModules.map((module, i) => (
              <div key={i} className="flex gap-6 p-6 hover:bg-white/5 rounded-2xl transition-all duration-300 cursor-pointer group border border-transparent hover:border-white/5">
                <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">{module.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{module.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-32 px-8 bg-black flex flex-col items-center">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold mb-6 tracking-tight">The Team Securing Your Safety</h2>
          <p className="text-zinc-400 text-lg">Protecting your digital world with passion and expertise.</p>
        </div>
        
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12 }}
              className="group relative flex flex-col items-center text-center p-10 rounded-[40px] bg-[#0A0A0A] border border-white/5 hover:border-blue-500/20 transition-all duration-500"
            >
              <div className="relative w-48 h-48 mb-8">
                 <div className="absolute inset-0 bg-blue-500/20 blur-3xl group-hover:bg-blue-500/40 transition-all duration-700 rounded-full" />
                 <Image
                   src={member.img}
                   alt={member.name}
                   width={192}
                   height={192}
                   className="rounded-full relative z-10 grayscale hover:grayscale-0 transition-all duration-700 object-cover border-4 border-black group-hover:border-blue-500/30 shadow-2xl"
                 />
              </div>
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-blue-500 text-sm font-bold uppercase tracking-[0.2em] mb-8">{member.role}</p>
              <div className="flex gap-5">
                 {[Twitter, Linkedin, Mail].map((Icon, j) => (
                   <button key={j} className="p-3 border border-white/10 rounded-xl text-zinc-500 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300">
                     <Icon className="w-5 h-5" />
                   </button>
                 ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-32 px-8 bg-[#030303] flex flex-col items-center">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Voices of Our Trusted Clients</h2>
          <p className="text-zinc-400 text-lg">Hear the stories of their cybersecurity journey with us.</p>
        </div>
        
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-10 bg-[#0A0A0A] border border-white/5 rounded-[32px] flex flex-col gap-8 relative overflow-hidden group hover:border-blue-500/30 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Shield className="w-20 h-20 text-blue-500" />
              </div>
              <div className="flex gap-1.5">
                {[...Array(t.rating)].map((_, j) => (
                  <Zap key={j} className="w-4 h-4 text-blue-500 fill-blue-500" />
                ))}
              </div>
              <p className="text-zinc-300 text-lg italic leading-relaxed relative z-10">"{t.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10" />
                <div>
                  <p className="text-base font-bold text-white">{t.author}</p>
                  <p className="text-sm text-zinc-500 font-medium">{t.role}</p>
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

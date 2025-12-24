"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Server, Globe, Users, Zap, Search, Mail, Cpu, Database, Twitter, Linkedin, ArrowRight } from "lucide-react";
import Image from "next/image";

const partners = [
  { name: "Logo 1", icon: Shield },
  { name: "Logo 2", icon: Lock },
  { name: "Logo 3", icon: Server },
  { name: "Logo 4", icon: Globe },
  { name: "Logo 5", icon: Zap },
  { name: "Logo 6", icon: Search },
  { name: "Logo 7", icon: Cpu },
  { name: "Logo 8", icon: Database },
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
        {/* Sharp Rays */}
        <div className="absolute top-[-20%] left-[-10%] w-[150%] h-[150%] pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full glow-ray-sharp rotate-[30deg] opacity-60" />
          <div className="absolute top-0 left-[10%] w-full h-full glow-ray-sharp rotate-[20deg] opacity-40" />
        </div>

        {/* Planet Arc & Asset */}
        <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 w-[180%] aspect-[2/1] pointer-events-none z-10">
          <div className="absolute inset-0 planet-arc opacity-60" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-full">
            <Image 
              src="https://res.cloudinary.com/dslutbftw/image/upload/v1766544779/CCqBJMabxVDE9sutmlyZL4CF8k_qvd4bm.avif"
              alt="Cyber Planet"
              fill
              className="object-contain object-bottom opacity-90"
              priority
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-30 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="corner-border dot-grid-sm bg-black/40 backdrop-blur-md px-6 py-3 mb-10 border border-white/5"
          >
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_#22c55e]" />
              <span className="text-xs font-bold tracking-[0.3em] text-white uppercase">System Security: ACTIVE</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[130px] font-bold leading-[0.8] tracking-tighter mb-12"
          >
            SECURE YOUR <br /> DIGITAL WORLD
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg md:text-2xl max-w-4xl mb-16 font-medium leading-relaxed"
          >
            Modern and powerful security solutions to protect against cyber threats. <br className="hidden md:block" />
            Designed to safeguard your data, systems, and privacy. Stay secure now!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/services">
              <Button variant="link" className="text-white font-bold tracking-tight flex items-center gap-2 group p-0">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="w-full py-32 bg-black flex flex-col items-center relative z-20 overflow-hidden">
        <div className="text-center mb-24 max-w-4xl px-8">
          <h2 className="text-5xl font-bold tracking-tight leading-tight">
            Powerful Solutions with <br /> Trusted Partners
          </h2>
          <p className="text-zinc-500 mt-6 text-lg font-medium">Elevate your cybersecurity to the highest level alongside the world's leading brands.</p>
        </div>

        <div className="w-full max-w-7xl px-8 relative">
          {/* Branching Lines SVG */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] pointer-events-none opacity-20 z-0">
            <svg width="100%" height="100%" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M500 500V350" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M500 350L300 150" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M500 350L700 150" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M500 350L100 150" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M500 350L900 150" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M500 350L400 150" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M500 350L600 150" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M500 350L200 150" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M500 350L800 150" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-24 gap-x-12 relative z-10">
            {partners.map((partner, i) => (
              <div key={i} className="flex items-center justify-center">
                <partner.icon className="w-12 h-12 text-zinc-600 hover:text-white transition-colors cursor-pointer" />
              </div>
            ))}
          </div>

          <div className="mt-32 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm relative animate-float">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2"/>
                <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4"/>
                <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.7"/>
                <circle cx="16" cy="16" r="2" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Security Insights Section */}
      <section className="w-full py-40 px-8 bg-black relative overflow-hidden">
        {/* Map Background */}
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
            {/* Dots across the map... Simplified for now */}
            {[...Array(200)].map((_, i) => (
              <circle key={i} cx={Math.random() * 1000} cy={Math.random() * 500} r="1" fill="white" opacity={Math.random()} />
            ))}
          </svg>
        </div>

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

          <div className="mt-20">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-none px-12 py-6 font-bold tracking-tight">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="w-full py-40 px-8 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="flex flex-col">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-12">
              Strengthen Your <br /> Digital Defense <br /> with Expert <br /> Cyber Training
            </h2>
            <p className="text-zinc-500 text-xl font-medium mb-16 max-w-lg leading-relaxed">
              Empower your team with advanced security training designed to mitigate risks and ensure robust protection.
            </p>
            <div className="flex flex-wrap gap-3 mt-auto">
              {["B2B Services Projects", "Web Development", "60,000+ Happy Users Inc.", "Best Incident Response", "30+ Team Trained"].map((tag) => (
                <span key={tag} className="px-6 py-3 border border-white/10 bg-white/5 text-[10px] font-bold tracking-widest uppercase text-zinc-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {trainingModules.map((module, i) => (
              <div key={i} className="p-8 hover:bg-white/5 border border-transparent hover:border-white/5 transition-all group cursor-pointer flex gap-8 items-center">
                <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 tracking-tight">{module.title}</h4>
                  <p className="text-zinc-500 text-sm font-medium">{module.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Orbit Section */}
      <section className="w-full py-40 px-8 bg-black flex flex-col items-center overflow-hidden">
        <div className="text-center mb-32 max-w-3xl">
          <h2 className="text-5xl font-bold tracking-tight mb-8">Take Security to the Next Level</h2>
          <p className="text-zinc-500 text-lg font-medium">Build a secure foundation for your business with our comprehensive suite of security solutions.</p>
        </div>

        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border border-white/5" />
          {/* Inner Ring */}
          <div className="absolute inset-[15%] rounded-full border border-white/5" />
          
          {/* Center Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.4)] z-20">
            <Shield className="w-10 h-10 text-white" />
          </div>

          {/* Orbiting Elements */}
          {[Zap, Lock, Globe, Server, Cpu, Database, Shield, Search].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ rotate: 360 }}
              transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
              style={{ width: "100%", height: "100%" }}
            >
              <div 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center absolute shadow-2xl"
                style={{
                  top: "0",
                  left: "50%",
                  transform: "translate(-50%, -50%) rotate(0deg)"
                }}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-zinc-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center flex flex-col items-center">
           <div className="flex flex-wrap justify-center gap-4 mb-12">
             {["Learn Security", "Latest Methods", "Advanced Threat Mitigation", "Compliance Management"].map((tag) => (
               <span key={tag} className="px-5 py-2.5 border border-white/10 bg-white/5 text-[10px] font-bold tracking-widest uppercase text-zinc-400">
                 {tag}
               </span>
             ))}
           </div>
           <p className="text-zinc-600 text-sm font-medium tracking-wide">Access Secured. Your data, safely locked in.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-40 px-8 bg-black flex flex-col items-center">
        <div className="text-center mb-32 max-w-4xl">
          <h2 className="text-5xl font-bold tracking-tight mb-6">The Team Securing Your Safety</h2>
          <p className="text-zinc-500 text-lg font-medium">Protecting your digital world with passion and expertise.</p>
        </div>

        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <div key={i} className="corner-border p-12 bg-zinc-900/40 backdrop-blur-md border border-white/5 flex flex-col items-center text-center group hover:border-blue-500/30 transition-all duration-500">
              <div className="relative w-48 h-48 mb-10">
                <div className="absolute inset-0 bg-blue-600/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
                <Image 
                  src={member.img}
                  alt={member.name}
                  width={192}
                  height={192}
                  className="rounded-full relative z-10 grayscale hover:grayscale-0 transition-all duration-700 object-cover border-4 border-black group-hover:border-blue-600/30"
                />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">{member.name}</h3>
              <p className="text-blue-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-10">{member.role}</p>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Mail].map((Icon, j) => (
                  <button key={j} className="p-3 border border-white/10 rounded-xl text-zinc-500 hover:text-white hover:border-white/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-40 px-8 bg-black flex flex-col items-center relative overflow-hidden">
        <div className="text-center mb-32 max-w-4xl relative z-10">
          <h2 className="text-5xl font-bold tracking-tight mb-6 leading-tight">Voices of Our Trusted Clients</h2>
          <p className="text-zinc-500 text-lg font-medium">Hear the stories of their cybersecurity journey with us.</p>
        </div>

        {/* Halo Effect */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[120px] rounded-[100%] z-0" />

        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((t, i) => (
            <div key={i} className="p-12 glass-card rounded-[40px] flex flex-col gap-10 group hover:border-white/20 transition-all duration-500">
               <div className="flex gap-1">
                 {[...Array(5)].map((_, j) => (
                   <Zap key={j} className="w-4 h-4 text-blue-600 fill-blue-600" />
                 ))}
               </div>
               <p className="text-zinc-200 text-lg font-medium italic leading-relaxed">"{t.quote}"</p>
               <div className="flex items-center gap-4 mt-auto">
                 <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10" />
                 <div>
                   <h4 className="text-base font-bold text-white tracking-tight">{t.author}</h4>
                   <p className="text-sm text-zinc-600 font-medium">{t.role}</p>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 px-8 bg-black flex justify-center">
        <div className="w-full max-w-7xl rounded-[40px] bg-gradient-to-b from-blue-900/40 to-black border border-white/10 p-16 md:p-32 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-grid-sm opacity-20" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-10">
              Partner with CyberShade to protect your business from <br className="hidden md:block" />
              modern cyber threats. Our experts are ready to guide you.
            </h2>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-none px-12 py-7 text-sm font-bold tracking-tight">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

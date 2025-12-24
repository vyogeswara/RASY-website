"use client";

import { motion } from "framer-motion";
import { Shield, Users, Globe, Target, Twitter, Linkedin, Mail, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "12+ Years", label: "Industry Experience" },
  { value: "50+ Clients", label: "Trusted Partnerships" },
  { value: "98% Retention", label: "Client Satisfaction" },
  { value: "5 Continents", label: "Global Reach" },
];

const team = [
  { name: "Jonas Kahnwald", role: "CEO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
  { name: "Sophia Bennett", role: "Head of Cybersecurity", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
  { name: "Liam Reynolds", role: "Lead Software Engineer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
  { name: "Ava Mitchell", role: "UI/UX Designer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
  { name: "Carlos Mendoza", role: "Cyber Threat Analyst", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
  { name: "Mei Lin Zhang", role: "Cloud Security Architect", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full py-40 px-8 flex flex-col items-center bg-black hero-gradient-about overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-bold tracking-tighter mb-10"
          >
            About
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-lg md:text-2xl font-medium leading-relaxed"
          >
            Join a team that's shaping the future of digital defense — <br /> explore open roles and grow with us.
          </motion.p>
        </div>
      </section>

      {/* CEO Section */}
      <section className="w-full py-40 px-8 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-bold tracking-tight mb-20">From Our CEO</h2>
          
          <div className="w-full max-w-5xl corner-border p-12 md:p-24 bg-zinc-900/40 backdrop-blur-md border border-white/5 relative overflow-hidden">
             <div className="absolute inset-0 dot-grid-sm opacity-10" />
             
             <div className="relative z-10 flex flex-col items-center text-center">
               <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-12">
                 <Target className="w-8 h-8 text-white" />
               </div>
               
               <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">A Note from Our Leadership</h3>
               
               <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed mb-16 max-w-4xl">
                 At CyberShade, our leadership believes that true cybersecurity is built on foresight, adaptability, and unwavering commitment. As we navigate an ever-evolving threat landscape, our mission remains clear — to empower organizations with proactive defense strategies and resilient digital infrastructures. This vision shapes every decision we make and every solution we deliver.
               </p>
               
               <div className="flex flex-col items-center">
                 <p className="text-2xl font-serif italic text-white mb-2">Jonas Kahnwald</p>
                 <p className="text-xs font-bold tracking-widest text-zinc-600 uppercase">CEO FOUNDER</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Empowering Section */}
      <section className="w-full py-40 px-8 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Team at work"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="flex flex-col">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-10">
              Empowering Digital <br /> Security
            </h2>
            <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-12">
              At CyberShade, we combine strategic thinking and technical excellence to protect what matters most — your digital assets. Our mission is to deliver innovative cybersecurity solutions with precision, passion, and purpose.
            </p>
            
            <div className="flex flex-col gap-5">
              {[
                "Focused on long-term partnerships",
                "Built on trust and integrity",
                "Passionate about innovation",
                "Committed to your security",
                "Driven by results"
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <span className="text-base font-bold tracking-tight text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="w-full py-40 px-8 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="flex flex-col">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">Numbers That Define Us</h2>
            <p className="text-zinc-500 text-lg font-medium leading-relaxed mb-12">
              Behind every number lies a story of dedication, growth, and trust. These figures are more than just metrics — they reflect the consistency, expertise, and strong relationships we've cultivated with our clients over the years.
            </p>
            
            <div className="flex flex-col gap-4">
              {[
                "Delivered 150+ custom security audits tailored to client needs",
                "Achieved 100% client retention rate in the past 2 years",
                "Responded to 200+ real-time security incidents with zero data loss",
                "Developed in-house tools now used by global security teams"
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-bold tracking-tight text-zinc-400">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-black p-12 flex flex-col gap-4">
                <p className="text-5xl font-bold tracking-tight text-white">{stat.value}</p>
                <p className="text-sm font-bold tracking-tight text-zinc-600 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
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

      {/* CTA Section */}
      <section className="w-full py-32 px-8 bg-black flex justify-center">
        <div className="w-full max-w-7xl rounded-[40px] bg-gradient-to-b from-blue-900/40 to-black border border-white/10 p-16 md:p-32 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 dot-grid-sm opacity-20" />
          
          <div className="relative z-10 flex flex-col items-center">
            <p className="text-[120px] font-bold text-white/5 leading-none mb-[-40px] select-none">b) :(</p>
            <h2 className="text-5xl font-bold tracking-tight leading-tight mb-10 max-w-2xl mx-auto">
              Partner with CyberShade to protect your business from <br />
              modern cyber threats. Our experts are ready to guide you.
            </h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-none px-12 py-7 text-sm font-bold tracking-tight transition-all">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

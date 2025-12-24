"use client";

import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { Shield, Zap, CheckCircle2, Globe, Users, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Industry Experience", value: "12+ Years" },
  { label: "Trusted Partnerships", value: "50+ Clients" },
  { label: "Client Satisfaction", value: "98% Retention" },
  { label: "Global Reach", value: "5 Continents" },
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
    <div className="flex flex-col items-center bg-black">
      {/* Hero Section */}
      <section className="relative w-full py-32 flex flex-col items-center justify-center px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_40%,rgba(0,112,255,0.2),transparent_70%)] opacity-70" />
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold text-center mb-8 relative z-10"
        >
          About
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg md:text-xl text-center max-w-2xl relative z-10"
        >
          Join a team that's shaping the future of digital defense — explore open roles and grow with us.
        </motion.p>
      </section>

      {/* Leadership Note */}
      <section className="w-full py-20 px-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl p-12 md:p-20 bg-[#0A0A0A] border border-white/5 rounded-[40px] text-center flex flex-col items-center gap-8 relative"
        >
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
            <Shield className="w-6 h-6 text-zinc-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">A Note from Our Leadership</h2>
          <p className="text-zinc-500 text-lg leading-relaxed max-w-3xl">
            At CyberShade, our leadership believes that true cybersecurity is built on foresight, adaptability, and unwavering commitment. As we navigate an ever-evolving threat landscape, our mission remains clear — to empower organizations with proactive defense strategies and resilient digital infrastructures. This vision shapes every decision we make and every solution we deliver.
          </p>
          <div className="mt-8 flex flex-col items-center gap-2">
            <p className="font-heading text-2xl italic">Jonas Kahnwald</p>
            <p className="text-zinc-500 text-sm tracking-widest uppercase">CEO Founder</p>
          </div>
        </motion.div>
      </section>

      {/* Empowering Section */}
      <section className="w-full py-32 px-8 flex justify-center bg-[#030303]">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
             <Image
               src="https://images.unsplash.com/photo-1522071823992-b48404981880?w=800&h=600&fit=crop"
               alt="Team working"
               fill
               className="object-cover grayscale"
             />
             <div className="absolute inset-0 bg-blue-500/10" />
          </div>
          
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Empowering Digital Security
            </h2>
            <p className="text-zinc-500 leading-relaxed">
              At CyberShade, we combine strategic thinking and technical excellence to protect what matters most — your digital assets. Our mission is to deliver innovative cybersecurity solutions with precision, passion, and purpose.
            </p>
            <ul className="grid grid-cols-1 gap-4">
              {[
                "Focused on long-term partnerships",
                "Built on trust and integrity",
                "Passionate about innovation",
                "Committed to your security",
                "Driven by results",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-400">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="w-full py-32 px-8 flex flex-col items-center">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-6">Numbers That Define Us</h2>
            <p className="text-zinc-500 mb-8 max-w-md leading-relaxed">
              Behind every number lies a story of dedication, growth, and trust. These figures are more than just metrics — they reflect the consistency, expertise, and strong relationships we've cultivated with our clients over the years.
            </p>
            <div className="flex flex-col gap-4">
               {[
                 "Delivered 150+ custom security audits tailored to client needs",
                 "Achieved 100% client retention rate in the past 2 years",
                 "Responded to 200+ real-time security incidents with zero data loss",
                 "Developed in-house tools now used by global security teams",
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                   <Zap className="w-4 h-4 text-blue-500 shrink-0" />
                   {item}
                 </div>
               ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-1 bg-white/5 p-1 rounded-3xl overflow-hidden border border-white/5">
            {stats.map((stat, i) => (
              <div key={i} className="bg-black p-10 flex flex-col gap-2">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-32 px-8 bg-black flex flex-col items-center border-t border-white/5">
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

      <CTASection />
    </div>
  );
}

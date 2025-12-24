"use client";

import { Zap } from "lucide-react";

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

export function TrainingSection() {
  return (
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
  );
}

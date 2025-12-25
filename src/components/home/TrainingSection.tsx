"use client";

import { Zap } from "lucide-react";

const trainingModules = [
  { title: "Prompt Engineering", description: "Master the art of crafting effective AI prompts for optimal results." },
  { title: "Context Engineering", description: "Learn to structure context for AI systems to maximize accuracy." },
  { title: "Building AI Agents", description: "Design and deploy autonomous AI agents for business automation." },
  { title: "Workflow Automation", description: "Automate business processes with AI-powered workflow tools." },
  { title: "Chatbot Design", description: "Create intelligent conversational interfaces for customer engagement." },
  { title: "Voice Agent Design", description: "Build voice-enabled AI assistants for seamless interactions." },
  { title: "AI Website Design", description: "Leverage AI tools to design and develop modern websites." },
  { title: "Cybersecurity Fundamentals", description: "Enterprise security training for threat awareness and prevention." },
];

export function TrainingSection() {
  return (
    <section className="w-full py-32 px-8 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-20">
        <div className="lg:col-span-2 flex flex-col pt-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1] mb-10 text-white uppercase">
            Corporate <br /> AI Training <br /> Programs
          </h2>
          <p className="text-zinc-500 text-lg font-medium mb-12 max-w-sm leading-relaxed">
            Empower your team with hands-on AI and cybersecurity training from industry experts.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-auto">
            {["Prompt Engineering", "AI Agents", "Chatbots", "Voice AI", "Automation"].map((tag) => (
              <span key={tag} className="px-5 py-2.5 border border-white/10 bg-white/5 text-[9px] font-bold tracking-[0.2em] uppercase text-zinc-400 hover:border-blue-500/30 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-4">
          {trainingModules.map((module, i) => (
            <div key={i} className="p-6 hover:bg-white/5 border border-transparent hover:border-white/5 transition-all group cursor-pointer flex gap-6 items-center">
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-zinc-600 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-0.5 tracking-tight text-white uppercase">{module.title}</h4>
                <p className="text-zinc-500 text-xs font-medium">{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

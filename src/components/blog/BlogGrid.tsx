"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PROGRAMS = [
  {
    date: "Flagship Program",
    title: "Upskill 2.0",
    description: "Our comprehensive AI training program covering prompt engineering, context engineering, AI agents, workflow automation, chatbots, and voice agents.",
    tags: ["AI Training", "Certification"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "AI Fundamentals",
    title: "Prompt Engineering",
    description: "Master the art of crafting effective AI prompts for optimal results. Learn techniques for clear instructions and structured outputs.",
    tags: ["AI Training", "Core Skills"],
    image: "https://images.unsplash.com/photo-1676573409967-986a47db2440?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "AI Development",
    title: "Building AI Agents",
    description: "Design and deploy autonomous AI agents for business automation. Learn agent architectures, tools integration, and deployment strategies.",
    tags: ["AI Development", "Advanced"],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "Automation",
    title: "Workflow Automation",
    description: "Automate business processes with AI-powered workflow tools. Connect systems, automate tasks, and build intelligent pipelines.",
    tags: ["Automation", "Business"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "Conversational AI",
    title: "Chatbot Design",
    description: "Create intelligent conversational interfaces for customer engagement. Build chatbots that understand context and deliver value.",
    tags: ["Chatbots", "Customer Experience"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "Voice Technology",
    title: "Voice Agent Design",
    description: "Build voice-enabled AI assistants for seamless interactions. Learn speech recognition, natural language processing, and voice UX.",
    tags: ["Voice AI", "Advanced"],
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "Security Training",
    title: "Cybersecurity Fundamentals",
    description: "Enterprise security training covering threat awareness, incident response, and security best practices for modern organizations.",
    tags: ["Cybersecurity", "Enterprise"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  }
];

export function BlogGrid() {
  return (
    <section className="w-full py-24 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-white tracking-tighter">
          Training Programs & Workshops
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#050505] border border-white/5 overflow-hidden transition-all duration-300 hover:border-blue-500/30"
            >
              {/* L-Corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blue-500/0 group-hover:border-blue-500/50 transition-all duration-300" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-blue-500/0 group-hover:border-blue-500/50 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-blue-500/0 group-hover:border-blue-500/50 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue-500/0 group-hover:border-blue-500/50 transition-all duration-300" />

              <div className="aspect-[16/9] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <div className="text-zinc-500 text-sm font-medium mb-4">
                  {post.date}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-zinc-400 text-[10px] uppercase tracking-widest font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

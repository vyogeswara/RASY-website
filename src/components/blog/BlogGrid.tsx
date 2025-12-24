"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const BLOG_POSTS = [
  {
    date: "Apr 8, 2025",
    title: "Net Breach",
    description: "Simulated penetration test revealing unauthorized network access paths through misconfigured firewalls and outdated credentials.",
    tags: ["Pentesting", "Network Security"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "Mar 2, 2025",
    title: "Data Leak",
    description: "Internal document mishandling led to exposure of confidential files, logs, and credentials stored in unsecured cloud environments and accessible links.",
    tags: ["Cloud Security"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "Feb 20, 2025",
    title: "Firewall Gaps",
    description: "Simulated penetration test revealing unauthorized network access paths through misconfigured firewalls and outdated credentials.",
    tags: ["Vulnerability Management", "Network Security"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "Apr 8, 2025",
    title: "Jq{.x8} >",
    description: "A curated set of security tools used for vulnerability scanning, network analysis, and incident response in environments.",
    tags: ["Best Practices", "Security Tools"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "Mar 12, 2025",
    title: "^5l)H^u:x",
    description: "Comprehensive port scanning exercise uncovered exposed services on misconfigured public-facing servers.",
    tags: ["Pentesting", "Network Security"],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "Feb 8, 2025",
    title: "Zje&h&0^w",
    description: "Cloud breach caused by compromised authentication tokens stored in client-side scripts and leaked via browser extensions.",
    tags: ["Cloud Security", "Incident Response"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    date: "Mar 30, 2025",
    title: "Ezo",
    description: "Port scanning is a fundamental technique in cybersecurity used to identify open ports and services running on a target system.",
    tags: ["Pentesting", "Network Security"],
    image: "https://images.unsplash.com/photo-1510511459019-5dee592da1f0?auto=format&fit=crop&q=80&w=800"
  }
];

export function BlogGrid() {
  return (
    <section className="w-full py-24 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-white tracking-tighter">
          Cybersecurity Insights & Updates
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
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

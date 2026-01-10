"use client";

import { motion } from "framer-motion";
import { Clock, Briefcase, Sparkles } from "lucide-react";

export function OpenPositions() {
  return (
    <section className="w-full py-24 px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#050505] border border-white/10 p-16 md:p-24"
        >
          {/* L-Corners */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-500/50" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-blue-500/50" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-blue-500/50" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-500/50" />

          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-blue-400" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
            Coming Soon
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
            We're building something amazing! Career opportunities at RASY will be available soon.
            Stay tuned for exciting roles in AI innovation and cybersecurity.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-zinc-500">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              <span className="text-sm font-medium">AI & Cybersecurity Roles</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">Launching Q1 2025</span>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="text-zinc-500 text-sm">
              Interested? Reach out to us at{" "}
              <a href="mailto:careers@rasy.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
                careers@rasy.ai
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

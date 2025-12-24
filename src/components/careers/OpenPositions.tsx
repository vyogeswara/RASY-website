"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TEAMS = [
  {
    name: "Engineering Team",
    positions: [
      {
        title: "Back-end Software Engineer",
        time: "Full-time",
        location: "New York, USA",
        remote: "Remote possible"
      },
      {
        title: "Front-end Developer",
        time: "Full-time",
        location: "New York, USA",
        remote: "On-site only"
      },
      {
        title: "DevOps Engineer",
        time: "Full-time",
        location: "Remote",
        remote: "Remote only"
      }
    ]
  },
  {
    name: "Marketing Team",
    positions: [
      {
        title: "Digital Marketing Specialist",
        time: "Full-time",
        location: "Remote (USA)",
        remote: "Remote only"
      },
      {
        title: "Content Strategist",
        time: "Part-time",
        location: "Austin, USA",
        remote: "Remote possible"
      },
      {
        title: "Community Manager",
        time: "Full-time",
        location: "New York, USA",
        remote: "On-site only"
      }
    ]
  },
  {
    name: "Product Team",
    positions: [
      {
        title: "Product Manager",
        time: "Full-time",
        location: "San Francisco, USA",
        remote: "Hybrid possible"
      },
      {
        title: "UX/UI Designer",
        time: "Part-time",
        location: "Remote (USA)",
        remote: "Remote only"
      },
      {
        title: "Product Analyst",
        time: "Full-time",
        location: "New York, USA",
        remote: "On-site only"
      }
    ]
  }
];

export function OpenPositions() {
  return (
    <section className="w-full py-24 px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-500 mb-16 tracking-tight">
          Open positions
        </h2>

        <div className="space-y-24">
          {TEAMS.map((team, teamIndex) => (
            <div key={teamIndex}>
              <h3 className="text-3xl font-bold text-white mb-12 tracking-tight">
                {team.name}
              </h3>
              
              <div className="space-y-4">
                {team.positions.map((job, jobIndex) => (
                  <motion.div
                    key={jobIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: jobIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative bg-[#050505] border border-white/5 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:border-blue-500/30"
                  >
                    {/* L-Corners */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-blue-500/0 group-hover:border-blue-500/50 transition-all duration-300" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-blue-500/0 group-hover:border-blue-500/50 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-blue-500/0 group-hover:border-blue-500/50 transition-all duration-300" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-blue-500/0 group-hover:border-blue-500/50 transition-all duration-300" />

                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                        {job.title}
                      </h4>
                      
                      <div className="flex flex-wrap items-center gap-6 text-zinc-500 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          <span>{job.remote}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-none px-8 py-4 h-auto text-xs font-bold uppercase tracking-widest transition-all">
                      Contact
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

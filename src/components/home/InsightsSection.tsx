import Image from "next/image";
import { Network, Hexagon, BrickWall, Lock, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechFrame } from "@/components/shared/TechFrame";

const insights = [
  {
    title: "AI-Powered Solutions",
    description: "Virtual receptionists, chatbots, lead generation, and sales automation powered by cutting-edge AI technology.",
    icon: Network,
    isFeatured: true,
  },
  {
    title: "Threat Intelligence",
    description: "Stay ahead of cybercriminals with real-time intelligence on emerging threats tailored to your organization.",
    icon: Hexagon,
  },
  {
    title: "Security Operations Center",
    description: "24/7 threat monitoring with AI-driven analytics and expert-led incident management.",
    icon: BrickWall,
  },
  {
    title: "Identity & Access Management",
    description: "Seamless authentication with multi-factor verification and role-based access control.",
    icon: Lock,
  },
  {
    title: "Cloud & Network Security",
    description: "Secure architecture with continuous monitoring, zero-trust frameworks, and compliance assurance.",
    icon: Cloud,
  },
];

export function InsightsSection() {
  return (
    <section className="w-full py-32 px-8 bg-black relative overflow-hidden flex flex-col items-center">
      {/* Focused Background Map (Not enlarged) */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] z-0 opacity-20 pointer-events-none">
        <Image
          src="https://res.cloudinary.com/dslutbftw/image/upload/v1766588368/N1Y9B7fbGDwlPRVz7tmK7gJpT4_uscgxq.png"
          alt="Security Map Background"
          fill
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Services</h2>
          <p className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto">
            Outstanding security solutions designed to address the dynamic <br /> cybersecurity needs of Saudi Vision 2030.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 w-full max-w-6xl">
          {/* Featured Top Card */}
          <div className="md:col-span-6">
            <TechFrame className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 p-10 flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                <Network className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-white uppercase tracking-tight">{insights[0].title}</h3>
              <p className="text-zinc-500 text-base max-w-2xl">{insights[0].description}</p>
            </TechFrame>
          </div>

          {/* Grid Bottom Cards */}
          {insights.slice(1).map((item, i) => (
            <div key={i} className="md:col-span-3 lg:col-span-3">
              <TechFrame className="bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/5 p-8 flex flex-col items-center text-center gap-5 h-full">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">{item.title}</h4>
                <p className="text-zinc-500 text-sm">{item.description}</p>
              </TechFrame>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <Button className="bg-transparent hover:bg-white/5 border border-white/20 text-white rounded-none px-12 py-6 text-sm font-bold tracking-widest uppercase transition-all">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}

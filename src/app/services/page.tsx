"use client";

import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { Shield, Globe, Search, Server, Lock, Database, Mail, Monitor, Smartphone, Cpu } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    title: "Network Solutions",
    description: "Secure your network infrastructure with fast, reliable, and scalable routing and switching for seamless performance and strong protection.",
    icon: Globe,
  },
  {
    title: "Penetration Testing",
    description: "Test your critical systems and digital infrastructure for potential weak points by simulating cyber attacks. Ethical hacking reveals security vulnerabilities.",
    icon: Search,
  },
  {
    title: "Maintenance Contracts",
    description: "Keep your systems stable and secure with maintenance contracts offering regular scheduled updates and proactive real-time monitoring.",
    icon: Server,
  },
  {
    title: "Firewall Solutions",
    description: "Protect digital assets with real-time firewall defenses that detect threats and prevent intrusions with intelligent filtering rules.",
    icon: Shield,
  },
  {
    title: "DLP",
    description: "Prevent data leaks with AI-driven monitoring tools that track, detect, and block unauthorized access to your sensitive information.",
    icon: Lock,
  },
  {
    title: "Server Solutions",
    description: "Build reliable, secure, and scalable server setups expertly configured and customized to your organization's performance and capacity requirements.",
    icon: Database,
  },
  {
    title: "Cybersecurity Audits",
    description: "Conduct in-depth security audits to effectively uncover hidden threats and ensure essential security compliance. These audits are tailored specifically to your system's unique risk areas.",
    icon: Monitor,
  },
  {
    title: "Email Security",
    description: "Shield your email channels from spam, phishing, and breaches with advanced filtering, encryption, authentication tools, and continuous monitoring.",
    icon: Mail,
  },
  {
    title: "Device Security",
    description: "Safeguard devices across your network with real-time monitoring, threat detection, malware defense, and secure access enforcement.",
    icon: Smartphone,
  },
  {
    title: "SIEM Integration",
    description: "Centralize your security monitoring efforts with advanced real-time log analysis and intelligent event correlation. Implement automated alerts to efficiently detect potential threats.",
    icon: Cpu,
  },
];

const faqs = [
  { q: "What industries do you serve?", a: "We serve a wide range of industries including finance, healthcare, e-commerce, and technology, providing tailored security solutions for each sector." },
  { q: "How do I get started with a service?", a: "You can get started by clicking the 'Request a Demo' or 'Get in Touch' button. Our team will contact you to discuss your specific needs." },
  { q: "Are your solutions scalable for growing businesses?", a: "Yes, all our solutions are designed to be highly scalable, ensuring they grow alongside your business infrastructure." },
  { q: "Do you offer support after project completion?", a: "Absolutely. We offer various maintenance contracts and ongoing support packages to ensure your systems remain secure and up-to-date." },
  { q: "Can you customize services for specific needs?", a: "Yes, we specialize in creating custom security strategies that address the unique challenges and requirements of your organization." },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full py-32 flex flex-col items-center justify-center px-8 overflow-hidden bg-black">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-purple-500/20 via-orange-500/10 to-transparent opacity-50" />
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold text-center mb-8 relative z-10"
        >
          Services
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg md:text-xl text-center max-w-2xl relative z-10"
        >
          Secure your digital infrastructure with our tailored, high-impact cybersecurity solutions.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="w-full py-32 px-8 bg-black flex justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-10 bg-[#0A0A0A] border border-white/5 rounded-3xl flex flex-col gap-6 group hover:border-purple-500/30 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-purple-500/50 transition-all">
                <service.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-32 px-8 bg-[#030303] flex flex-col items-center">
        <h2 className="text-5xl font-bold mb-20">FAQ</h2>
        
        <div className="w-full max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-white/5 bg-[#0A0A0A] rounded-xl px-6">
                <AccordionTrigger className="text-lg font-medium hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-500 pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

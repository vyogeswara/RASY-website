"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { RasyIconBadge, SectionHeader } from "@/components/rasy/native";

const offices = [
  { city: "New York", country: "United States", note: "Enterprise and partner coordination" },
  { city: "London", country: "United Kingdom", note: "Security advisory and compliance support" },
  { city: "Dubai", country: "United Arab Emirates", note: "Regional transformation programs" },
  { city: "Bengaluru", country: "India", note: "Engineering and delivery collaboration" },
];

export function Offices() {
  return (
    <section className="bg-black px-5 py-14 sm:px-6 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeader
          eyebrow="Offices"
          title="Regional presence for enterprise programs"
          description="RASY teams support discovery, advisory, and implementation across global operating environments."
          icon={MapPin}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl border border-[#7da4ff29] bg-[#06070a] p-5"
            >
              <RasyIconBadge icon={MapPin} size="sm" />
              <h3 className="mt-8 text-xl font-medium text-white">{office.city}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.16em] text-[#ffcd7d]">{office.country}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#9ba9c4]">{office.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

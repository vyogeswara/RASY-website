"use client";

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  icon?: LucideIcon;
};

type RasyCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type RasyIconBadgeProps = {
  label?: string;
  icon?: LucideIcon;
  tone?: "blue" | "gold";
  size?: "sm" | "md";
};

type RasyFeatureListProps = {
  items: string[];
  className?: string;
};

type RasyVisualPanelProps = {
  title?: string;
  items?: string[];
  icon?: LucideIcon;
  className?: string;
  accent?: "blue" | "gold";
  children?: ReactNode;
};

export function RasyGlow({
  className = "",
  color = "blue",
}: {
  className?: string;
  color?: "blue" | "gold";
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute h-[360px] w-[360px] rounded-full blur-[110px] ${
        color === "gold" ? "bg-[#ffcd7d]/16" : "bg-[#0175ff]/18"
      } ${className}`}
    />
  );
}

export function RasyIconBadge({ label, icon: Icon, tone = "blue", size = "md" }: RasyIconBadgeProps) {
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#d1d4e3]">
      {Icon ? (
        <Icon className={tone === "gold" ? `${iconSize} text-[#ffcd7d]` : `${iconSize} text-[#0175ff]`} />
      ) : (
        <span className={tone === "gold" ? "h-1.5 w-1.5 rounded-full bg-[#ffcd7d]" : "h-1.5 w-1.5 rounded-full bg-[#0175ff]"} />
      )}
      {label ? <span>{label}</span> : null}
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  icon,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div className={`flex flex-col gap-5 ${centered ? "items-center text-center" : "items-start text-left"}`}>
      <RasyIconBadge label={eyebrow} icon={icon} />
      <div className={`flex max-w-[900px] flex-col gap-4 ${centered ? "items-center" : "items-start"}`}>
        <h2 className="text-[34px] font-medium leading-[1.08] tracking-[-0.02em] text-white sm:text-[46px] md:text-[58px]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-[560px] text-base leading-relaxed text-[#9ba9c4] md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function RasyCard({ children, className = "", delay = 0 }: RasyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-[22px] border border-[rgba(125,164,255,0.16)] bg-[#06070a] p-6 md:p-8 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(1,117,255,0.10),transparent_42%,rgba(255,205,125,0.08))]" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export function RasyFeatureList({ items, className = "" }: RasyFeatureListProps) {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#d1d4e3] md:text-base">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0175ff]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function RasyVisualPanel({
  title,
  items = [],
  icon: Icon,
  className = "",
  accent = "blue",
  children,
}: RasyVisualPanelProps) {
  const accentClass = accent === "gold" ? "from-[#ffcd7d] to-[#0175ff]" : "from-[#0175ff] to-[#ffcd7d]";

  return (
    <div className={`relative min-h-[260px] overflow-hidden rounded-[22px] border border-[rgba(125,164,255,0.16)] bg-[#030407] ${className}`}>
      <RasyGlow className="left-[-10%] top-[10%] h-52 w-52 bg-[#0175ff]/25" />
      <RasyGlow className="bottom-[-20%] right-[-10%] h-56 w-56 bg-[#ffcd7d]/20" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(125,164,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(125,164,255,0.22)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-between p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div className={`h-2 w-28 rounded-full bg-gradient-to-r ${accentClass}`} />
          {Icon ? <Icon className="h-8 w-8 text-white/80" /> : null}
        </div>
        <div className="space-y-4">
          {title ? <h3 className="text-2xl font-medium text-white md:text-3xl">{title}</h3> : null}
          {children}
          {items.length ? <RasyFeatureList items={items} /> : null}
        </div>
      </div>
    </div>
  );
}

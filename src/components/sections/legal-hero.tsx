"use client";

import { Reveal } from "@/components/rasy/site-shell";

interface LegalHeroProps { badgeLabel: string; title: string; subtitle?: string }

export default function LegalHero({ badgeLabel, title, subtitle }: LegalHeroProps) {
  return (
    <header className="legal-hero">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{badgeLabel}</p>
          <h1>{title}</h1>
          {subtitle ? <p>{subtitle}</p> : null}
        </Reveal>
      </div>
    </header>
  );
}

"use client";

import type { LucideIcon } from "lucide-react";
import { ArrowRight, Bot, BrainCircuit, GraduationCap, Headphones, Network, ShieldCheck, Workflow } from "lucide-react";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { aiPathways, assets, services } from "@/content/rasy";
import { ActionLink, Reveal, SectionIntro, SiteFooter } from "@/components/rasy/site-shell";

export type NativeServicePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: { title: string; description: string; points: string[]; icon?: LucideIcon }[];
  useCases: { title: string; description: string; points: string[] }[];
  benefits: { title: string; description: string; icon?: LucideIcon }[];
};

const fallbackIcons = [ShieldCheck, Bot, Workflow, Network, Headphones, GraduationCap, BrainCircuit];

export function NativeServicePage({ eyebrow, title, description, icon: Icon, features, useCases, benefits }: NativeServicePageProps) {
  const related = [...services, ...aiPathways].filter((item) => item.title.toLowerCase() !== title.toLowerCase()).slice(0, 4);
  return (
    <>
      <section className="container" style={{ paddingTop: 24 }}>
        <div className="service-hero">
          <video src={assets.heroVideo} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" />
          <div className="service-hero__content">
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p>{description}</p>
            <ActionLink href="/contact" inverse>Discuss this service</ActionLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro title="Built around practical outcomes." copy="Each engagement connects assessment, implementation, adoption, and clear ownership." />
          <div className="capability-grid">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon ?? fallbackIcons[index % fallbackIcons.length];
              return (
                <Reveal className="capability-card" key={feature.title} delay={index * 0.04}>
                  <span className="capability-card__icon"><FeatureIcon size={21} strokeWidth={1.7} /></span>
                  <h3>{feature.title}</h3><p>{feature.description}</p>
                  <ul>{feature.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionIntro title="Where this creates value." copy="The service is designed for real operating environments, with a clear handoff from direction to execution." />
          <div className="scenario-list">
            {useCases.map((item, index) => (
              <Reveal className="scenario" key={item.title} delay={index * 0.04}>
                <h3>{item.title}</h3><div><p>{item.description}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionIntro title="Why RASY." />
          <div className="benefits-grid">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon ?? fallbackIcons[index % fallbackIcons.length];
              return <Reveal className="benefit" key={benefit.title} delay={index * 0.05}><BenefitIcon size={27} strokeWidth={1.6} /><h3>{benefit.title}</h3><p>{benefit.description}</p></Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionIntro title="Explore connected capabilities." />
          <div className="service-index">
            {related.map((item) => <Link className="service-index__row" href={item.href} key={item.href}><h3>{item.title}</h3><p>{item.summary}</p><IconArrowUpRight size={22} stroke={1.7} /></Link>)}
          </div>
          <div style={{ marginTop: 40 }}><Link className="hero__text-link" style={{ color: "var(--ink)" }} href="/services">View all services <ArrowRight size={17} /></Link></div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}

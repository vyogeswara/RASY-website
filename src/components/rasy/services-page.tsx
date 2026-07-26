"use client";

import Image from "next/image";
import Link from "next/link";
import { KeyboardEvent, useLayoutEffect, useRef, useState } from "react";
import {
  IconArrowUpRight,
  IconCheck,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import { solutions } from "@/content/site";
import { Reveal, SiteFooter } from "@/components/rasy/site-shell";

const serviceImages: Record<string, string> = {
  "ai-automation": "/images/services/service-ai-automation.webp",
  "ai-customer-experience": "/images/services/service-ai-customer-experience.webp",
  "intelligent-automation": "/images/services/service-intelligent-automation.webp",
  "digital-experience-growth": "/images/services/service-digital-experience-growth.webp",
  cybersecurity: "/images/services/service-cybersecurity.webp",
  "managed-soc": "/images/services/service-managed-soc.webp",
  "grc-resilience": "/images/services/service-grc-resilience.webp",
  "security-engineering": "/images/services/service-security-engineering.webp",
};

const deliveryStages = [
  {
    number: "01",
    title: "Assess",
    copy: "Define the opportunity, operating constraints, exposure, readiness, and accountable owners.",
  },
  {
    number: "02",
    title: "Implement",
    copy: "Design and deliver the system, controls, customer experience, integrations, and operational handoff.",
  },
  {
    number: "03",
    title: "Operate",
    copy: "Support monitoring, investigation, reporting, maintenance, and continuous improvement.",
  },
  {
    number: "04",
    title: "Enable",
    copy: "Build the practical knowledge and governance teams need to sustain the work responsibly.",
  },
];

const featuredServices = [solutions[0], solutions[3], solutions[4]];

export function ServicesPage() {
  const catalogueRef = useRef<HTMLDivElement>(null);
  const catalogueSectionRef = useRef<HTMLElement>(null);
  const activeIndexRef = useRef(0);
  const reducedMotionRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const catalogue = catalogueRef.current;
    const section = catalogueSectionRef.current;
    if (!catalogue || !section) return;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;

    const cardOffsets = () => {
      const cards = Array.from(catalogue.querySelectorAll<HTMLElement>(".services-card"));
      const firstOffset = cards[0]?.offsetLeft ?? 0;
      return cards.map((card) => card.offsetLeft - firstOffset);
    };

    const updateActiveIndex = () => {
      const offsets = cardOffsets();
      if (!offsets.length) return;
      const nextIndex = offsets.reduce((nearest, offset, index) => (
        Math.abs(offset - catalogue.scrollLeft) < Math.abs(offsets[nearest] - catalogue.scrollLeft) ? index : nearest
      ), 0);
      if (nextIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }
    };

    const syncCatalogue = () => {
      if (reducedMotionRef.current) {
        updateActiveIndex();
        return;
      }
      const horizontalDistance = Math.max(0, catalogue.scrollWidth - catalogue.clientWidth);
      const verticalDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / verticalDistance));
      catalogue.scrollLeft = horizontalDistance * progress;
      updateActiveIndex();
    };

    const requestSync = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        syncCatalogue();
      });
    };

    const updateDistance = () => {
      const horizontalDistance = Math.max(0, catalogue.scrollWidth - catalogue.clientWidth);
      reducedMotionRef.current = reducedMotionQuery.matches;
      section.style.setProperty("--services-scroll-distance", reducedMotionRef.current ? "0px" : `${horizontalDistance}px`);
      syncCatalogue();
    };

    const resizeObserver = new ResizeObserver(updateDistance);
    resizeObserver.observe(catalogue);
    window.addEventListener("resize", updateDistance);
    window.addEventListener("scroll", requestSync, { passive: true });
    catalogue.addEventListener("scroll", requestSync, { passive: true });
    reducedMotionQuery.addEventListener("change", updateDistance);
    updateDistance();

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateDistance);
      window.removeEventListener("scroll", requestSync);
      catalogue.removeEventListener("scroll", requestSync);
      reducedMotionQuery.removeEventListener("change", updateDistance);
    };
  }, []);

  const moveCatalogue = (direction: -1 | 1) => {
    const catalogue = catalogueRef.current;
    const section = catalogueSectionRef.current;
    if (!catalogue || !section) return;

    const cards = Array.from(catalogue.querySelectorAll<HTMLElement>(".services-card"));
    const targetIndex = Math.min(cards.length - 1, Math.max(0, activeIndexRef.current + direction));
    const firstOffset = cards[0]?.offsetLeft ?? 0;
    const targetScrollLeft = (cards[targetIndex]?.offsetLeft ?? firstOffset) - firstOffset;

    if (reducedMotionRef.current) {
      catalogue.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
      return;
    }

    const horizontalDistance = Math.max(1, catalogue.scrollWidth - catalogue.clientWidth);
    const verticalDistance = Math.max(1, section.offsetHeight - window.innerHeight);
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionTop + (targetScrollLeft / horizontalDistance) * verticalDistance,
      behavior: "smooth",
    });
  };

  const handleCatalogueKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    moveCatalogue(event.key === "ArrowLeft" ? -1 : 1);
  };

  return (
    <>
      <div className="services-experience">
        <section className="services-hero" aria-labelledby="services-title">

          <div className="services-shell services-hero__grid">
            <div className="services-hero__copy">
              <Reveal>
                <p className="services-label"><span />Services</p>
                <h1 id="services-title">AI, digital growth, and cybersecurity services built for real operations.</h1>
                <p className="services-hero__intro">RASY helps organisations improve how work moves, how customers are served, and how technology is protected. Start with one specialist service or connect several through a single delivery plan.</p>
                <Link className="services-primary-link" href="/contact">Book a consultation <IconArrowUpRight size={16} stroke={1.8} /></Link>
              </Reveal>

              <div className="services-hero__principles" aria-label="Primary service families">
                {featuredServices.map((solution, index) => (
                  <Reveal className="services-hero-principle" key={solution.slug} delay={0.06 + index * 0.04}>
                    <span>0{index + 1}</span>
                    <p>{solution.label}</p>
                    <i><IconArrowUpRight size={15} stroke={1.7} /></i>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal className="services-hero__visual-column" delay={0.08}>
              <figure className="services-hero__visual">
                <Image
                  src="/images/services/services-hero-team.webp"
                  alt="A consulting team building a connected delivery plan in a bright project studio"
                  width={1254}
                  height={1254}
                  sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1180px) 52vw, 680px"
                  priority
                />
                <figcaption><span>One delivery plan</span><p>Specialist capability, connected around the operating outcome.</p></figcaption>
              </figure>
              <div className="services-name-rail" aria-label="RASY service catalogue">
                <div className="services-name-rail__track">
                  {[...solutions, ...solutions].map((solution, index) => (
                    <span className="services-name-rail__item" key={`${solution.slug}-${index}`} aria-hidden={index >= solutions.length}>
                      <i>{String((index % solutions.length) + 1).padStart(2, "0")}</i>{solution.label}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="services-catalogue" aria-labelledby="catalogue-title" ref={catalogueSectionRef}>
          <div className="services-catalogue__sticky">
            <div className="services-shell">
            <div className="services-section-heading">
              <Reveal>
                <p className="services-label"><span />Eight specialist services</p>
                <h2 id="catalogue-title">Choose the service that matches the work in front of you.</h2>
                <p className="services-section-copy">Each service has a defined scope and can stand alone. Where a challenge crosses teams, systems, or risk domains, RASY connects the relevant services into one accountable programme.</p>
              </Reveal>
              <Reveal className="services-catalogue__controls" delay={0.05}>
                <button type="button" onClick={() => moveCatalogue(-1)} aria-controls="services-catalogue-rail" aria-label="Previous service" disabled={activeIndex === 0}><IconChevronLeft size={19} stroke={1.7} /></button>
                <button type="button" onClick={() => moveCatalogue(1)} aria-controls="services-catalogue-rail" aria-label="Next service" disabled={activeIndex === solutions.length - 1}><IconChevronRight size={19} stroke={1.7} /></button>
              </Reveal>
            </div>

            <p className="services-sr-only" id="services-catalogue-status" aria-live="polite">
              Service {activeIndex + 1} of {solutions.length}: {solutions[activeIndex].label}
            </p>
            <div
              className="services-catalogue__scroller"
              id="services-catalogue-rail"
              ref={catalogueRef}
              role="region"
              aria-label="RASY services"
              aria-describedby="services-catalogue-status"
              tabIndex={0}
              onKeyDown={handleCatalogueKeyDown}
            >
              {solutions.map((solution, index) => {
                const capabilities = solution.capabilities.flatMap((capability) => capability.items).slice(0, 4);
                return (
                  <article className="services-card" id={solution.slug} key={solution.slug} aria-labelledby={`${solution.slug}-title`}>
                    <div className="services-card__image">
                      <Image
                        src={serviceImages[solution.slug]}
                        alt={`Professionals collaborating on ${solution.label.toLowerCase()} work`}
                        width={1254}
                        height={1254}
                        sizes="(max-width: 760px) 84vw, (max-width: 980px) 32vw, 310px"
                        loading="lazy"
                        quality={82}
                      />
                      <span>0{index + 1}</span>
                    </div>
                    <div className="services-card__body">
                      <p className="services-card__eyebrow">Service 0{index + 1}</p>
                      <h3 id={`${solution.slug}-title`}>{solution.label}</h3>
                      <p className="services-card__summary">{solution.summary}</p>

                      <div className="services-card__scope">
                        <p>Core capabilities</p>
                        <ul>{capabilities.map((capability) => <li key={capability}><IconCheck size={14} stroke={2} />{capability}</li>)}</ul>
                      </div>

                      <div className="services-card__outcomes">
                        <span>Expected outcomes</span>
                        <p>{solution.outcomes.slice(0, 2).join(" · ")}</p>
                      </div>
                      <Link href="/contact">Discuss this service <IconArrowUpRight size={15} stroke={1.8} /></Link>
                    </div>
                  </article>
                );
              })}
            </div>
            </div>
          </div>
        </section>

        <section className="services-delivery" aria-labelledby="delivery-title">
          <div className="services-shell">
            <Reveal className="services-delivery__heading">
              <p className="services-label"><span />Delivery model</p>
              <h2 id="delivery-title">A clear path from assessment to accountable operation.</h2>
              <p>Engage RASY at the stage that reflects the work already completed and the ownership your team needs next.</p>
            </Reveal>

            <div className="services-delivery__grid">
              {deliveryStages.map((stage, index) => (
                <Reveal key={stage.title} delay={index * 0.045}>
                  <article className="services-delivery-stage">
                    <span>{stage.number}</span>
                    <h3>{stage.title}</h3>
                    <p>{stage.copy}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="services-delivery__action" delay={0.08}>
              <p>Not sure which service or starting point fits?</p>
              <Link href="/contact">Discuss your priorities <IconArrowUpRight size={16} stroke={1.8} /></Link>
            </Reveal>
          </div>
        </section>
      </div>
      <SiteFooter />
    </>
  );
}
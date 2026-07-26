"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { IconArrowUpRight, IconCheck } from "@tabler/icons-react";

type CardKind = "team" | "services" | "infrastructure" | "security" | "leader" | "training" | "automation";

type CarouselCard = {
  key: string;
  label: string;
  href: string;
  kind: CardKind;
};

const cards: CarouselCard[] = [
  { key: "team", label: "RASY delivery team", href: "/about", kind: "team" },
  { key: "services", label: "AI service portfolio", href: "/services/artificial-intelligence", kind: "services" },
  { key: "infrastructure", label: "Secure infrastructure", href: "/services/cybersecurity", kind: "infrastructure" },
  { key: "security", label: "Security coverage", href: "/services/cybersecurity", kind: "security" },
  { key: "leader", label: "Executive leadership", href: "/about", kind: "leader" },
  { key: "training", label: "Practical AI training", href: "/services/training-education", kind: "training" },
  { key: "automation", label: "Intelligent automation", href: "/services/ai-for-process", kind: "automation" },
];

const imageCards: Partial<Record<CardKind, { src: string; alt: string; title: string; detail: string }>> = {
  team: {
    src: "https://res.cloudinary.com/doibx3aol/image/upload/v1780335176/WhatsApp_Image_2025-12-22_at_14.20.01_c0ech2.jpg",
    alt: "RASY team gathered after a collaborative working session",
    title: "One accountable team",
    detail: "Strategy · Security · Delivery",
  },
  infrastructure: {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=88",
    alt: "Modern secure data center infrastructure",
    title: "Infrastructure you can trust",
    detail: "Cloud · Network · Endpoint",
  },
  leader: {
    src: "https://res.cloudinary.com/doibx3aol/image/upload/v1780335095/WhatsApp_Image_2026-05-18_at_15.10.45_xstkgh.jpg",
    alt: "RASY founder Yogeswara Rao Veeravalli in an executive discussion",
    title: "Human judgment",
    detail: "AI advantage",
  },
  automation: {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=88",
    alt: "Detailed electronic circuitry representing connected automation",
    title: "Connected automation",
    detail: "Designed around real work",
  },
};

function CardVisual({ kind }: { kind: CardKind }) {
  const image = imageCards[kind];

  if (image) {
    return (
      <div className="metric-card__photo">
        <img src={image.src} alt={image.alt} />
        <div className="metric-card__photo-label">
          <strong>{image.title}</strong>
          <span>{image.detail}</span>
        </div>
      </div>
    );
  }

  if (kind === "services") {
    return (
      <>
        <header><span>Applied intelligence</span><IconArrowUpRight size={13} stroke={1.8} /></header>
        <div className="metric-card__body">
          <div className="metric-card__value">15<span>+</span></div>
          <p>AI and digital capabilities</p>
          <div className="metric-card__chips"><span>Agents</span><span>Automation</span><span>Growth</span></div>
        </div>
      </>
    );
  }

  if (kind === "security") {
    return (
      <>
        <header><span>Digital trust</span><IconArrowUpRight size={13} stroke={1.8} /></header>
        <div className="metric-card__body">
          <div className="metric-card__value">8</div>
          <p>core security domains</p>
          <div className="metric-card__bars" aria-hidden="true">
            {[34, 46, 57, 68, 79, 91].map((height, index) => <i key={height} style={{ height: height + "%", background: index === 5 ? "#31bee7" : undefined }} />)}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <header><span>Capability building</span><IconArrowUpRight size={13} stroke={1.8} /></header>
      <div className="metric-card__body">
        <div className="metric-card__value">7</div>
        <p>hands-on AI training pathways</p>
        <ul className="metric-card__list">
          <li><IconCheck size={10} /> Prompting</li>
          <li><IconCheck size={10} /> Agents</li>
          <li><IconCheck size={10} /> Voice and web</li>
        </ul>
      </div>
    </>
  );
}

export function OrbitalCarousel({ reducedMotion = false }: { reducedMotion?: boolean | null }) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const phase = useRef(0);
  const paused = useRef(false);

  useEffect(() => {
    let frame = 0;
    let previousTime = performance.now();

    const positionCards = () => {
      const stageWidth = stageRef.current?.offsetWidth ?? window.innerWidth;
      const mobile = stageWidth < 560;
      const cardWidth = mobile ? 168 : stageWidth < 1000 ? 194 : 226;
      const radius = stageWidth / 2 + cardWidth * 1.18;

      cardRefs.current.forEach((element, index) => {
        if (!element) return;

        const progress = ((phase.current + index / cards.length) % 1 + 1) % 1;
        const position = progress * 2 - 1;
        const edge = Math.min(1, Math.abs(position));
        const centerStrength = 1 - edge;
        const x = position * radius;
        const y = Math.pow(edge, 1.35) * (mobile ? 70 : 112) - centerStrength * 7;
        const scale = 0.67 + centerStrength * 0.36;
        const rotateY = position * -53;
        const rotateZ = position * 6.5;
        const opacity = edge > 0.955 ? Math.max(0, (1 - edge) / 0.045) : 1;

        element.style.transform = "translate3d(" + x + "px," + y + "px," + (centerStrength * 145) + "px) rotateY(" + rotateY + "deg) rotateZ(" + rotateZ + "deg) scale(" + scale + ")";
        element.style.opacity = String(opacity);
        element.style.zIndex = String(Math.round(centerStrength * 100));
        element.style.pointerEvents = opacity < 0.25 ? "none" : "auto";
      });
    };

    const animate = (time: number) => {
      const elapsed = Math.min(40, time - previousTime);
      previousTime = time;

      if (!paused.current && !reducedMotion) {
        phase.current = (phase.current + elapsed * 0.000029) % 1;
      }

      positionCards();
      frame = requestAnimationFrame(animate);
    };

    positionCards();

    if (!reducedMotion) {
      frame = requestAnimationFrame(animate);
    }

    window.addEventListener("resize", positionCards);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", positionCards);
    };
  }, [reducedMotion]);

  return (
    <div
      className="hero-orbit"
      aria-label="RASY capabilities"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
    >
      <div className="hero-orbit__stage" ref={stageRef}>
        {cards.map((card, index) => (
          <Link
            className={"metric-orbit-card metric-orbit-card--" + card.kind}
            href={card.href}
            key={card.key}
            ref={(element) => { cardRefs.current[index] = element; }}
            onFocus={() => { paused.current = true; }}
            onBlur={() => { paused.current = false; }}
            aria-label={"Explore " + card.label}
          >
            <article className="metric-card">
              <CardVisual kind={card.kind} />
            </article>
          </Link>
        ))}
      </div>
      <div className="hero-orbit__proof">
        <p>AI, cybersecurity, and business technology under one accountable model</p>
        <div aria-hidden="true"><span>✦</span><span>✦</span><span>✦</span><span>✦</span><span>✦</span></div>
      </div>
    </div>
  );
}

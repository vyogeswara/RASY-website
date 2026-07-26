"use client";

import { useRef } from "react";
import { useReducedMotion } from "motion/react";
import { assets, leaders } from "@/content/rasy";
import { AudioButton, RailControls, Reveal, SiteFooter } from "@/components/rasy/site-shell";


const visionTimeline = [
  {
    year: "2016",
    title: "A national direction",
    copy: "Saudi Vision 2030 was approved on 25 April 2016, establishing a long-term programme for a vibrant society, a thriving economy, and an ambitious nation.",
    source: "https://www.spa.gov.sa/1493558",
  },
  {
    year: "2021–2025",
    title: "Digital transformation",
    copy: "The National Transformation Program made sustainable digital transformation a central theme across government, private, and non-profit sectors.",
    source: "https://www.vision2030.gov.sa/media/uo0bvguc/2021-2025-national-transformation-program-delivery-plan-en.pdf",
  },
  {
    year: "Today",
    title: "Governance and capability",
    copy: "Official digital-government policy connects modernisation with governance, beneficiary experience, human capability, and responsible technology adoption.",
    source: "https://dga.gov.sa/en/Digital_Government_Policy",
  },
  {
    year: "2030",
    title: "A practical horizon",
    copy: "This public direction provides useful context for RASY’s focus on practical AI, secure digital services, and skills that organisations can sustain.",
    source: "https://www.vision2030.gov.sa/en/",
  },
];

const values = [
  ["Trust", "Transparent decisions and accountable delivery."],
  ["Practical innovation", "Technology applied to real operating problems."],
  ["Responsibility", "Governance, privacy, human oversight, and control."],
  ["Growth", "Capabilities designed for long-term progress."],
  ["Collaboration", "Clear ownership and close client-team partnership."],
  ["Continuous learning", "Knowledge transfer and ongoing improvement."],
];

export function AboutPage() {
  const timelineRail = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const moveTimeline = (direction: number) => timelineRail.current?.scrollBy({ left: direction * 360, behavior: reduceMotion ? "auto" : "smooth" });

  return (
    <>
      <div className="about-editorial">
        <section className="about-hero-v2" aria-labelledby="about-title">
          <div className="about-hero-v2__inner">
            <div className="about-hero-v2__copy">
              <Reveal><p className="about-hero-v2__kicker"><span />About RASY</p></Reveal>
              <Reveal delay={.04}>
                <h1 id="about-title">Technology should make the next decision clearer.</h1>
              </Reveal>
              <Reveal delay={.08}>
                <p>RASY brings AI, digital growth, cybersecurity, and practical training into one accountable delivery model. Discover why we built the company, how we work, and who leads the work.</p>
              </Reveal>
              <Reveal delay={.12}>
                <a className="about-hero-v2__next" href="#about-mission-title">
                  <span>Discover our story</span>
                  <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 4v15m0 0 6-6m-6 6-6-6" /></svg>
                </a>
              </Reveal>
            </div>

            <div className="about-hero-v2__visual" aria-label="RASY people and delivery model">
              <div className="about-hero-v2__column about-hero-v2__column--one">
                <div className="about-hero-v2__track">
                  {[0, 1, 2].map((copy) => (
                    <div className="about-hero-v2__sequence" aria-hidden={copy === 0 ? undefined : true} key={`people-column-${copy}`}>
                      <figure className="about-hero-portrait about-hero-portrait--woman">
                        <img src="/images/about/about-hero-woman-v2.png" alt={copy === 0 ? "Professional woman in a bright outdoor setting" : ""} fetchPriority={copy === 0 ? "high" : undefined} />
                      </figure>
                      <article className="about-hero-metric about-hero-metric--sky">
                        <strong>8</strong>
                        <span>specialist services</span>
                        <small>Connected around one delivery model</small>
                      </article>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-hero-v2__column about-hero-v2__column--two">
                <div className="about-hero-v2__track">
                  {[0, 1, 2].map((copy) => (
                    <div className="about-hero-v2__sequence" aria-hidden={copy === 0 ? undefined : true} key={`delivery-column-${copy}`}>
                      <article className="about-hero-metric about-hero-metric--green">
                        <strong>4</strong>
                        <span>delivery stages</span>
                        <small>Assess · Implement · Operate · Enable</small>
                      </article>
                      <figure className="about-hero-portrait about-hero-portrait--man">
                        <img src="/images/about/about-hero-man-v2.png" alt={copy === 0 ? "Professional man working beside a bright landscape" : ""} fetchPriority={copy === 0 ? "high" : undefined} />
                      </figure>
                      <article className="about-hero-metric about-hero-metric--coral">
                        <strong>1</strong>
                        <span>accountable path</span>
                        <small>From direction to lasting capability</small>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-mission" aria-labelledby="about-mission-title">
          <div className="about-shell">
            <Reveal><p className="about-section-label"><span />Welcome to RASY</p></Reveal>
            <Reveal><h2 id="about-mission-title">We help organisations turn complex technology choices into responsible progress.</h2></Reveal>
            <div className="about-mission__grid">
              <Reveal className="about-mission__copy">
                <p>Our mission is to help organisations apply AI, automation, and cybersecurity in practical ways that protect data, improve operations, strengthen customer experiences, and turn digital risk into responsible growth.</p>
                <p>We connect strategy, implementation, adoption, and operation so that innovation and protection move together—not as separate workstreams.</p>
              </Reveal>
              <Reveal className="about-mission__copy" delay={.05}>
                <p>Our vision is a future where every organisation can innovate confidently, operate securely, and turn technology into sustainable value.</p>
                <p>The standard is simple: clear ownership, human review where it matters, and knowledge transfer that leaves capability behind.</p>
              </Reveal>
              <Reveal className="about-founder-note" delay={.1}>
                <img src={assets.founder} alt="Yogeswara Rao Veeravalli, Founder and CEO of RASY" loading="lazy" />
                <div><h3>Yogeswara Rao Veeravalli</h3><p>Founder &amp; CEO</p></div>
                <AudioButton src={assets.founderAudio} />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="about-story" aria-labelledby="about-story-title">
          <div className="about-shell">
            <Reveal><p className="about-section-label"><span />Our story · national context</p></Reveal>
            <Reveal className="about-story__header">
              <div><h2 id="about-story-title">A practical path from national ambition to accountable delivery.</h2><p>Saudi Vision 2030 sets a public direction for digital transformation, stronger capability, and effective institutions. The timeline below explains that context without implying government affiliation or partnership.</p></div>
              <RailControls label="Vision 2030 timeline" onPrevious={() => moveTimeline(-1)} onNext={() => moveTimeline(1)} />
            </Reveal>
            <div className="about-timeline" ref={timelineRail} tabIndex={0} aria-label="Saudi Vision 2030 context timeline">
              {visionTimeline.map((item, index) => (
                <article className="about-timeline__item" key={item.year}>
                  <span className="about-timeline__dot" />
                  <p className="about-timeline__year">{item.year}</p>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <a href={item.source} target="_blank" rel="noreferrer">Official source</a>
                  <span className="about-timeline__index">0{index + 1}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-team" aria-labelledby="about-team-title">
          <div className="about-shell">
            <Reveal><p className="about-section-label"><span />Leadership</p><h2 id="about-team-title">Meet the people accountable for the direction.</h2></Reveal>
            <div className="about-team__grid">
              {leaders.map((leader, index) => (
                <Reveal delay={index * .05} key={leader.name}>
                  <article className="about-team-card">
                    <div className="about-team-card__image"><img src={leader.image} alt={leader.name} loading="lazy" /></div>
                    <div className="about-team-card__copy"><h3>{leader.name}</h3><p>{leader.role}</p><span>RASY leadership</span></div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="about-values-section" aria-labelledby="about-values-title">
          <div className="about-shell">
            <Reveal><p className="about-section-label"><span />Our values</p><h2 id="about-values-title" className="sr-only">Values that shape the work</h2></Reveal>
            <div className="about-values-grid">
              {values.map(([title, copy], index) => (
                <Reveal className="about-value-card" delay={index * .035} key={title}>
                  <span className="about-value-card__orb">0{index + 1}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </>
  );
}
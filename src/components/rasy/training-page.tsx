"use client";

import {
  IconArrowUpRight,
  IconBook2,
  IconCircleCheck,
  IconTargetArrow,
  IconUsers,
} from "@tabler/icons-react";
import { Reveal, SiteFooter } from "@/components/rasy/site-shell";

const programmes = [
  {
    id: "ai-capability",
    tab: "AI capability",
    title: "Use AI with judgment, not guesswork.",
    copy: "Build shared foundations for responsible adoption, then move into the prompts, context, workflows, and governance people need for useful day-to-day application.",
    items: [
      "AI fundamentals and responsible adoption",
      "Prompt and context engineering",
      "Agents and workflow automation",
      "Chatbots, voice agents, and AI-assisted websites",
      "Governance, privacy, and role-based productivity",
    ],
    audience: "Leaders, knowledge teams, service teams, and people responsible for safe adoption.",
    format: "Executive briefings, guided workshops, practical labs, and role-based pathways.",
    image: "/images/training/course-ai.png",
    imageAlt: "A diverse group of professionals learning together around a laptop in a bright landscape",
    imageLabel: "Applied learning",
    imageCopy: "From clear foundations to governed practice.",
  },
  {
    id: "cybersecurity-capability",
    tab: "Cybersecurity capability",
    title: "Prepare people before pressure tests the system.",
    copy: "Turn security from a broad policy topic into role-specific awareness, executive readiness, and practical technical learning that teams can apply to their own responsibilities.",
    items: [
      "Security awareness and phishing readiness",
      "Executive risk and incident exercises",
      "Secure development practice",
      "Cloud, network, and endpoint security",
      "Identity and data security",
    ],
    audience: "Executives, the wider workforce, developers, cloud teams, and security practitioners.",
    format: "Awareness sessions, tabletop exercises, guided workshops, and technical labs.",
    image: "/images/training/course-cybersecurity.png",
    imageAlt: "Adult professionals taking part in a bright collaborative readiness exercise",
    imageLabel: "Readiness by role",
    imageCopy: "Calm decisions, practised before they are urgent.",
  },
  {
    id: "learning-formats",
    tab: "Learning formats",
    title: "Shape the programme around the capability gap.",
    copy: "Choose the learning rhythm that fits the audience and the operating need instead of forcing every team through the same fixed catalogue.",
    items: [
      "Executive briefings",
      "Workshops and technical labs",
      "Bootcamps and learning pathways",
      "Train-the-trainer programmes",
      "Custom programmes for defined audiences",
    ],
    audience: "Organisations planning a first workshop or a structured capability-building programme.",
    format: "Briefing, workshop, lab, bootcamp, train-the-trainer, or a custom pathway.",
    image: "/images/training/course-learning-formats.png",
    imageAlt: "A diverse adult learning group in an open classroom overlooking a green landscape",
    imageLabel: "Flexible formats",
    imageCopy: "The right depth, sequence, and audience mix.",
  },
];

const pathways = [
  {
    eyebrow: "Leadership and workforce",
    title: "From shared understanding to responsible everyday use.",
    copy: "Begin with leadership context, establish common language, and connect role-based practice to governance and safe application.",
    image: "/images/training/course-ai.png",
    details: [
      ["Audience", "Executives, managers, knowledge teams, and the wider workforce"],
      ["Learning mix", "Briefings, guided workshops, and role-based practice"],
      ["Planning principle", "Connect learning to real decisions and responsible use"],
    ],
  },
  {
    eyebrow: "Technical and delivery teams",
    title: "From guided practice to capability the team can carry forward.",
    copy: "Combine workshops, labs, and longer pathways around the technical responsibilities people already own.",
    image: "/images/training/course-cybersecurity.png",
    details: [
      ["Audience", "Developers, cloud teams, security practitioners, and team leads"],
      ["Learning mix", "Technical labs, bootcamps, and train-the-trainer formats"],
      ["Planning principle", "Build practice around the team’s operating context"],
    ],
  },
];

export function TrainingPage() {
  return (
    <>
      <div className="training-experience">
        <section className="training-hero" aria-labelledby="training-title">
          <div className="training-hero__shade" aria-hidden="true" />
          <div className="training-shell training-hero__inner">
            <div className="training-hero__copy">
              <Reveal>
                <p className="training-label"><span aria-hidden="true">+</span> Training &amp; enablement</p>
                <h1 id="training-title">Practical learning for AI, cybersecurity, and confident teams.</h1>
              </Reveal>
              <Reveal className="training-hero__aside" delay={0.07}>
                <p>From executive briefings to hands-on labs, RASY shapes role-based programmes around the capability people need to apply at work.</p>
                <a href="/contact">Plan corporate training <IconArrowUpRight size={16} stroke={1.8} /></a>
              </Reveal>
            </div>

            <div className="training-hero__features">
              <Reveal className="training-hero-feature" delay={0.08}>
                <IconUsers size={18} stroke={1.8} />
                <p>Role-led curricula</p>
                <span>Different responsibilities need different depth.</span>
              </Reveal>
              <Reveal className="training-hero-feature" delay={0.12}>
                <IconBook2 size={18} stroke={1.8} />
                <p>Practice, not presentation alone</p>
                <span>Combine briefings with workshops and labs.</span>
              </Reveal>
              <Reveal className="training-hero-feature" delay={0.16}>
                <IconTargetArrow size={18} stroke={1.8} />
                <p>Capability that stays</p>
                <span>Connect learning to governance and real work.</span>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="training-programmes" aria-labelledby="programmes-title">
          <div className="training-shell">
            <Reveal><p className="training-section-label"><span />Programmes</p><h2 id="programmes-title" className="sr-only">Training programmes</h2></Reveal>
            <nav className="training-tabs" aria-label="Training programme navigation">
              {programmes.map((programme) => <a href={`#${programme.id}`} key={programme.id}>{programme.tab}</a>)}
            </nav>

            <div className="training-course-list">
              {programmes.map((programme, index) => (
                <Reveal key={programme.id}>
                  <article className="training-course" id={programme.id}>
                    <div className="training-course__content">
                      <div>
                        <p className="training-course__index">0{index + 1} / {programme.tab}</p>
                        <h2>{programme.title}</h2>
                        <p className="training-course__intro">{programme.copy}</p>
                        <a className="training-course__cta" href="/contact">Plan this programme <IconArrowUpRight size={14} stroke={1.8} /></a>
                      </div>

                      <ul>{programme.items.map((item) => <li key={item}><IconCircleCheck size={15} stroke={1.8} />{item}</li>)}</ul>

                      <div className="training-course__meta">
                        <div><span><IconUsers size={16} stroke={1.7} /> Who it is for</span><p>{programme.audience}</p></div>
                        <div><span><IconBook2 size={16} stroke={1.7} /> Format</span><p>{programme.format}</p></div>
                      </div>
                    </div>
                    <div className="training-course__visual">
                      <img src={programme.image} alt={programme.imageAlt} loading={index === 0 ? "eager" : "lazy"} />
                      <div><span>{programme.imageLabel}</span><p>{programme.imageCopy}</p></div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="training-pathways" aria-labelledby="pathways-title">
          <div className="training-shell">
            <Reveal><p className="training-section-label"><span />Programme design</p><h2 id="pathways-title">Two useful ways to shape the learning journey.</h2></Reveal>
            <div className="training-pathways__grid">
              {pathways.map((pathway, index) => (
                <Reveal key={pathway.title} delay={index * 0.05}>
                  <article className="training-pathway">
                    <div className="training-pathway__header">
                      <div><p>{pathway.eyebrow}</p><h3>{pathway.title}</h3><span>{pathway.copy}</span></div>
                      <img src={pathway.image} alt="" loading="lazy" />
                    </div>
                    <dl>{pathway.details.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl>
                    <a href="/contact">Plan this pathway</a>
                  </article>
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
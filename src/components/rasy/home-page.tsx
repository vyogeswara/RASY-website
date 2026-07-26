"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { HeroExperience } from "@/components/rasy/hero-experience";
import { ActionLink, RailControls, Reveal, SiteFooter } from "@/components/rasy/site-shell";
import { ArrowUpRight } from "@/components/rasy/svg-icons";

const aboutImage = "https://res.cloudinary.com/doibx3aol/image/upload/v1780335176/WhatsApp_Image_2025-12-22_at_14.20.01_c0ech2.jpg";
const ceoVideoDesktop = "https://res.cloudinary.com/doibx3aol/video/upload/v1784996610/Ceo_section_desktop_h1mxfq.mp4";
const ceoVideoMobile = "https://res.cloudinary.com/doibx3aol/video/upload/v1784996609/ceo_section_mobile_n1udvi.mp4";
const ceoAudio = "https://res.cloudinary.com/doibx3aol/video/upload/v1780338117/WhatsApp_Audio_2026-05-18_at_15.19.36_q976vd.mp4";
const whyChooseImage = "https://res.cloudinary.com/doibx3aol/image/upload/v1780335238/WhatsApp_Image_2025-12-22_at_14.20.01_1_deoklb.jpg";

const capabilities = [
  { number: "01", label: "AI and intelligent automation", title: "Put useful AI into real work.", copy: "From readiness and knowledge assistants to intelligent agents, voice systems, and governed workflows, we design solutions that help people work with better information and less repetition.", items: ["AI readiness and governance", "Knowledge assistants", "Agents and workflow automation", "Voice and service automation"], href: "/solutions", cta: "Explore AI and automation", image: "/images/services/service-ai-automation.webp", alt: "Professionals shaping a practical AI and automation workflow", tone: "blue" },
  { number: "02", label: "Cybersecurity and resilience", title: "Build resilience into everyday operations.", copy: "Connect governance, engineering, monitoring, response, and recovery so risk becomes visible, responsibilities are clear, and action has an owner.", items: ["Security strategy and risk", "Governance and compliance", "Security engineering", "Monitoring, response and recovery"], href: "/solutions", cta: "Explore cybersecurity", image: "/images/services/service-grc-resilience.webp", alt: "Cybersecurity professionals reviewing risk and operating controls", tone: "green" },
  { number: "03", label: "Digital experience and growth", title: "Turn attention into a connected journey.", copy: "Clarify the story, improve the digital experience, and connect acquisition, CRM, follow-up, and measurement around meaningful customer action.", items: ["Digital positioning", "Web and service experience", "Customer journey design", "CRM and lifecycle automation"], href: "/solutions", cta: "Explore digital experience", image: "/images/services/service-digital-experience-growth.webp", alt: "A collaborative team shaping a connected digital customer experience", tone: "coral" },
  { number: "04", label: "Training and enablement", title: "Leave capability behind.", copy: "Build practical, role-based learning for leaders, technical teams, and the wider workforce across AI, automation, cybersecurity, and responsible adoption.", items: ["Leadership briefings", "Workforce AI awareness", "Technical and security training", "Role-based learning programmes"], href: "/training", cta: "View training programmes", image: "/images/training/course-learning-formats.png", alt: "Adult professionals taking part in a practical technology workshop", tone: "yellow" },
] as const;

const operatingContexts = [
  ["Financial services", "Service, identity, regulated data, and operational trust."],
  ["Healthcare", "Sensitive workflows, staff capability, availability, and continuity."],
  ["Government", "Secure, accountable, and accessible public services."],
  ["Critical infrastructure", "Visibility and resilience where disruption carries serious consequences."],
  ["Retail and commerce", "Connected service and growth without weakening customer trust."],
  ["Professional services", "Faster knowledge work with confidentiality protected."],
] as const;

const testimonials = [
  { name: "Amira Hassan", role: "Operations Director", image: "/images/testimonials/amira-hassan.webp", quote: "The team made the hard decisions visible early. We left each workshop knowing what was agreed, who owned it, and what would happen next." },
  { name: "Daniel Okafor", role: "Technology Programme Lead", image: "/images/testimonials/daniel-okafor.webp", quote: "What stood out was the balance between speed and control. Governance was part of the proposed automation, not an afterthought added at the end." },
  { name: "Meera Patel", role: "Learning & Development Manager", image: "/images/testimonials/meera-patel.webp", quote: "The training was grounded in the work our teams actually do. People gained a clearer way to use AI responsibly, not just another set of slides." },
  { name: "Omar Al-Farsi", role: "Business Transformation Lead", image: "/images/testimonials/omar-al-farsi.webp", quote: "RASY connected the technical detail to the operating outcome. That gave leadership and delivery teams a shared language for moving forward." },
] as const;

function SoundIcon({ muted }: { muted: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4 9.5v5h3.5l4.5 3.7V5.8L7.5 9.5H4Z" />
      {muted ? <path d="m16 9 5 5m0-5-5 5" /> : <><path d="M15.5 8.4a5 5 0 0 1 0 7.2" /><path d="M18.4 5.8a8.6 8.6 0 0 1 0 12.4" /></>}
    </svg>
  );
}

function CeoVideoSection() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audioPlaying) {
      audio.pause();
      setAudioPlaying(false);
      return;
    }
    try {
      await audio.play();
      setAudioPlaying(true);
    } catch {
      setAudioPlaying(false);
    }
  };

  return (
    <section className="home-ceo-video" aria-labelledby="home-ceo-video-title">
      <video className="home-ceo-video__media" autoPlay muted loop playsInline preload="metadata">
        <source media="(max-width: 760px)" src={ceoVideoMobile} type="video/mp4" />
        <source src={ceoVideoDesktop} type="video/mp4" />
      </video>
      <audio id="home-ceo-audio" ref={audioRef} preload="metadata" onEnded={() => setAudioPlaying(false)}>
        <source src={ceoAudio} type="audio/mp4" />
      </audio>
      <div className="container home-ceo-video__content">
        <Reveal className="home-ceo-video__kicker"><p>Founder&apos;s perspective</p></Reveal>
        <Reveal className="home-ceo-video__copy">
          <h2 id="home-ceo-video-title">Move quickly. Operate responsibly. Leave stronger capability behind.</h2>
          <p>RASY connects strategy, implementation, security, and learning so progress remains clear, accountable, and useful long after delivery.</p>
        </Reveal>
        <div className="home-ceo-video__footer">
          <Reveal className="home-ceo-video__identity">
            <strong>Yogeswara Rao Veeravalli</strong>
            <span>Founder &amp; CEO, RASY</span>
          </Reveal>
          <Reveal>
            <button className="home-ceo-video__sound" type="button" aria-controls="home-ceo-audio" aria-pressed={audioPlaying} onClick={toggleAudio}>
              <SoundIcon muted={!audioPlaying} />
              <span>{audioPlaying ? "Pause audio" : "Play audio"}</span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
function TestimonialsSection() {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const goToTestimonial = (index: number) => {
    const next = Math.max(0, Math.min(testimonials.length - 1, index));
    const rail = railRef.current;
    const card = rail?.querySelector<HTMLElement>(".home-testimonial");
    if (rail && card) {
      const gap = Number.parseFloat(getComputedStyle(rail).columnGap || "0");
      rail.scrollTo({ left: next * (card.offsetWidth + gap), behavior: "smooth" });
    }
    setActiveTestimonial(next);
  };

  return (
    <section className="home-testimonials section" aria-labelledby="testimonials-title">
      <div className="container">
        <Reveal className="home-testimonials__heading">
          <div>
            <p className="eyebrow">Illustrative testimonials</p>
            <h2 id="testimonials-title">What working together can feel like.</h2>
          </div>
          <p>Sample copy for layout preview. Replace with approved client testimonials before publication.</p>
        </Reveal>
        <div className="home-testimonials__rail" ref={railRef}>
          {testimonials.map((testimonial) => (
            <article className="home-testimonial" key={testimonial.name}>
              <img src={testimonial.image} alt={`Illustrative portrait of ${testimonial.name}`} loading="lazy" />
              <div className="home-testimonial__panel">
                <div className="home-testimonial__identity">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
                <blockquote>“{testimonial.quote}”</blockquote>
                <small>Illustrative profile</small>
              </div>
            </article>
          ))}
        </div>
        <div className="home-testimonials__controls">
          <div className="home-testimonials__dots" aria-label="Testimonial position">
            {testimonials.map((testimonial, index) => (
              <button aria-label={`Show testimonial ${index + 1}`} className={index === activeTestimonial ? "is-active" : ""} key={testimonial.name} onClick={() => goToTestimonial(index)} type="button" />
            ))}
          </div>
          <RailControls label="Testimonials" onPrevious={() => goToTestimonial(activeTestimonial - 1)} onNext={() => goToTestimonial(activeTestimonial + 1)} />
        </div>
      </div>
    </section>
  );
}
export function HomePage() {
  return (
    <>
      <HeroExperience />
      <section className="home-about section" id="about-rasy">
        <div className="container home-about__layout">
          <Reveal className="home-about__label"><p className="eyebrow">About RASY</p></Reveal>
          <Reveal className="home-about__statement">
            <h2>We don&apos;t sell technology for its own sake. We help organisations build capability that still works when the work gets complicated.</h2>
          </Reveal>
          <Reveal className="home-about__image">
            <img src={aboutImage} alt="A group of professionals gathered in a training room" loading="lazy" />
          </Reveal>
          <div className="home-about__principles">
            <Reveal>
              <article>
                <h3>Vision</h3>
                <p>A future where every organisation can innovate confidently, operate securely, and turn technology into sustainable value.</p>
              </article>
            </Reveal>
            <Reveal delay={0.06}>
              <article>
                <h3>Mission</h3>
                <p>Help organisations apply AI, automation, and cybersecurity in practical ways that protect data, improve operations, strengthen customer experiences, and turn digital risk into responsible growth.</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
      <CeoVideoSection />
      <section className="home-why section" id="why-rasy" aria-labelledby="why-rasy-title">
        <div className="container home-why__layout">
          <div className="home-why__content">
            <Reveal className="home-why__heading">
              <p className="eyebrow">Why choose us</p>
              <h2 id="why-rasy-title">Practical progress, built to last.</h2>
              <p>RASY connects useful technology with governance, accountable implementation, and practical learning so change remains clear, secure, and usable.</p>
            </Reveal>
            <div className="home-why__reasons">
              <Reveal>
                <article>
                  <h3>Connected expertise</h3>
                  <p>AI, automation, digital experience, cybersecurity, and training work as one joined delivery model.</p>
                </article>
              </Reveal>
              <Reveal delay={0.05}>
                <article>
                  <h3>Accountable delivery</h3>
                  <p>Strategy, implementation, adoption, and operation stay connected through clear ownership.</p>
                </article>
              </Reveal>
              <Reveal delay={0.1}>
                <article>
                  <h3>Capability that stays</h3>
                  <p>Training, documentation, and knowledge transfer help your team operate and improve what has been built.</p>
                </article>
              </Reveal>
            </div>
          </div>
          <Reveal className="home-why__visual">
            <img src={whyChooseImage} alt="RASY professionals collaborating during a business workshop" loading="lazy" />
            <div className="home-why__proof" aria-label="RASY delivery principles">
              <span>Clear ownership</span>
              <span>Knowledge transfer</span>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="home-capabilities section" id="capabilities"><div className="container home-capabilities__layout">
        <Reveal className="home-capabilities__intro"><p className="eyebrow">Connected capabilities</p><h2>Four capabilities. One accountable path.</h2><p>Each capability can stand on its own. The advantage comes from connecting technology, security, experience, and learning around the same operating goals and ownership.</p><ActionLink href="/solutions">Explore all solutions</ActionLink></Reveal>
        <div className="home-capabilities__stories">{capabilities.map((capability, index) => <Reveal className={`home-capability home-capability--${capability.tone}`} delay={index * 0.04} key={capability.label}><article><div className="home-capability__image"><img src={capability.image} alt={capability.alt} loading="lazy" /><span>{capability.number}</span></div><div className="home-capability__copy"><p className="tile-label">{capability.label}</p><h3>{capability.title}</h3><p>{capability.copy}</p><ul>{capability.items.map((item) => <li key={item}>{item}</li>)}</ul><Link href={capability.href}>{capability.cta}<ArrowUpRight size={15} /></Link></div></article></Reveal>)}</div>
      </div></section>

      <section className="home-contexts section" id="operating-contexts"><div className="container">
        <Reveal className="home-contexts__heading"><div><p className="eyebrow">Operating contexts</p><h2>Different environments. The same need for accountable progress.</h2></div><p>The systems, regulations, and customer expectations may differ. The need for clear ownership, secure delivery, and lasting capability does not.</p></Reveal>
        <div className="home-contexts__list">{operatingContexts.map(([title, copy], index) => <Reveal delay={index * 0.035} key={title}><article><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p><i aria-hidden="true"><ArrowUpRight size={16} /></i></article></Reveal>)}</div>
        <Reveal className="home-contexts__closing"><p>Bring the opportunity, risk, or capability gap. You do not need a finished brief.</p><ActionLink href="/contact">Book a consultation</ActionLink></Reveal>
      </div></section>
      <TestimonialsSection />
      <SiteFooter />
    </>
  );
}

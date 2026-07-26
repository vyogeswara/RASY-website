"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconChevronLeft,
  IconChevronRight,
  IconMenu2,
  IconPlayerPlay,
  IconX,
} from "@tabler/icons-react";
import { assets } from "@/content/rasy";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },

  { href: "/training", label: "Training" },
  { href: "/about", label: "About" },
];
const globalFaqs = [
  {
    question: "Where should we start if we want to work with RASY?",
    answer: "Start with the opportunity, operating challenge, or risk you need to address. You do not need a finished brief. A consultation helps clarify the outcome, constraints, priorities, and a practical next step.",
  },
  {
    question: "Are RASY's services tailored to our organisation?",
    answer: "Yes. The work is shaped around your operating environment, existing systems, responsibilities, risk profile, and internal capability. A programme may use one RASY capability or connect several through a single accountable delivery path.",
  },
  {
    question: "How do you approach governance and security in AI and automation?",
    answer: "Governance, security, privacy, human review, and clear ownership are considered as part of the design. The aim is useful automation that people can understand, oversee, and operate responsibly.",
  },
  {
    question: "What training formats are available?",
    answer: "RASY provides leadership briefings, workforce awareness, role-based programmes, and technical learning across AI, automation, cybersecurity, and responsible adoption. The format is matched to the audience and intended outcome.",
  },
  {
    question: "What happens after a consultation?",
    answer: "You receive a clearer view of the problem, the capabilities involved, and a proposed next step. Depending on the need, that may be a focused assessment, a delivery roadmap, a pilot, or a tailored training programme.",
  },
] as const;

export function SiteNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="brand-mark" href="/" aria-label="RASY home">
            <img src={assets.logo} alt="RASY" />
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link className={active ? "nav-link is-active" : "nav-link"} href={item.href} key={item.href}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="site-header__actions">
            <Link className="button button--compact" href="/contact">
              Book a consultation
              <span className="button__icon"><IconArrowUpRight size={16} stroke={1.8} /></span>
            </Link>
            <button
              className="menu-button"
              type="button"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            className="mobile-nav"
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(12px)" }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav aria-label="Mobile navigation">
              {[...navItems, { href: "/contact", label: "Contact" }].map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + index * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={item.href}>{item.label}</Link>
                </motion.div>
              ))}
            </nav>
            <p>AI, cybersecurity, and business technology for secure growth.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        id="content"
        key={pathname}
        className="page-shell"
        initial={reduceMotion ? false : { opacity: 0, y: 12, filter: "blur(14px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8, filter: "blur(12px)" }}
        transition={{ duration: reduceMotion ? 0 : 0.62, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.62, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxMedia({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-18, 18]);
  const scale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.025, 1]);

  return (
    <motion.div ref={ref} className={className} style={{ y, scale }}>
      {children}
    </motion.div>
  );
}

export function ActionLink({
  href,
  children,
  inverse = false,
}: {
  href: string;
  children: ReactNode;
  inverse?: boolean;
}) {
  return (
    <Link className={inverse ? "button button--inverse" : "button"} href={href}>
      {children}
      <span className="button__icon"><IconArrowUpRight size={17} stroke={1.8} /></span>
    </Link>
  );
}

export function SectionIntro({
  title,
  copy,
  className = "",
}: {
  title: string;
  copy?: string;
  className?: string;
}) {
  return (
    <Reveal className={`section-intro ${className}`}>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </Reveal>
  );
}

export function RailControls({ onPrevious, onNext, label }: { onPrevious: () => void; onNext: () => void; label: string }) {
  return (
    <div className="rail-controls" aria-label={`${label} controls`}>
      <button type="button" onClick={onPrevious} aria-label={`Previous ${label}`}>
        <IconChevronLeft size={19} stroke={1.7} />
      </button>
      <button type="button" onClick={onNext} aria-label={`Next ${label}`}>
        <IconChevronRight size={19} stroke={1.7} />
      </button>
    </div>
  );
}

export function AudioButton({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      await audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} onEnded={() => setPlaying(false)} preload="none" />
      <button className="audio-button" type="button" onClick={toggle} aria-pressed={playing}>
        <IconPlayerPlay size={17} fill="currentColor" />
        {playing ? "Pause founder message" : "Hear the founder's message"}
      </button>
    </>
  );
}

export function EnquiryForm() {
  const [status, setStatus] = useState("");
  const [brief, setBrief] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get("subject") || "RASY consultation");
    const body = [
      `Interest: ${subject}`,
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Organisation: ${data.get("organisation") || ""}`,
      `Timeline: ${data.get("timeline") || ""}`,
      "",
      String(data.get("message") || ""),
    ].join("\n");
    setBrief(body);
    setStatus("Your consultation brief is ready to copy.");
  };

  const copyBrief = async () => {
    await navigator.clipboard.writeText(brief);
    setStatus("Consultation brief copied.");
  };

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="field-grid">
        <label>
          Name
          <input name="name" autoComplete="name" required placeholder="Your name" />
        </label>
        <label>
          Work email
          <input name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
        </label>
      </div>
      <div className="field-grid">
        <label>
          Organisation
          <input name="organisation" autoComplete="organization" required placeholder="Your organisation" />
        </label>
        <label>
          Subject
          <select name="subject" defaultValue="Security consultation">
            <option>Security consultation</option>
            <option>AI and automation</option>
            <option>Business technology</option>
            <option>Professional services</option>
            <option>Training programs</option>
            <option>Partnership request</option>
          </select>
        </label>
      </div>
      <label>
        Timeline
        <select name="timeline" defaultValue="Exploring options">
          <option>Exploring options</option>
          <option>Within three months</option>
          <option>Within six months</option>
          <option>Longer-term planning</option>
        </select>
      </label>
      <label>
        How can we help?
        <textarea name="message" required rows={6} placeholder="Tell us what you are working through." />
      </label>
      <div className="form-footer">
        <button className="button button--inverse" type="submit">
          Prepare consultation brief
          <span className="button__icon"><IconArrowRight size={17} stroke={1.8} /></span>
        </button>
        <div className="form-status">
          <p aria-live="polite">{status}</p>
          {brief && <button className="text-button" type="button" onClick={copyBrief}>Copy brief</button>}
        </div>
      </div>
    </form>
  );
}


function GlobalFaq() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="global-faq section" aria-labelledby="global-faq-title">
      <div className="container global-faq__layout">
        <div className="global-faq__intro">
          <p className="eyebrow">Frequently asked questions</p>
          <h2 id="global-faq-title">A clearer start begins with better questions.</h2>
          <p>Practical answers about how RASY scopes work, connects delivery, and helps teams build capability that lasts.</p>
          <Link href="/contact">Ask a different question <IconArrowUpRight size={16} stroke={1.8} /></Link>
        </div>
        <div className="global-faq__list">
          {globalFaqs.map((faq, index) => {
            const open = openFaq === index;
            const answerId = `global-faq-answer-${index}`;
            return (
              <article className={open ? "is-open" : ""} key={faq.question}>
                <button aria-controls={answerId} aria-expanded={open} onClick={() => setOpenFaq(open ? -1 : index)} type="button">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{faq.question}</strong>
                  <i aria-hidden="true"><span /><span /></i>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div animate={{ height: "auto", opacity: 1 }} className="global-faq__answer" exit={{ height: 0, opacity: 0 }} id={answerId} initial={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}>
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Services" },
    { href: "/training", label: "Training" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <GlobalFaq />
      <footer className="site-footer site-footer--landscape">
      <div className="site-footer__landscape-content">
        <section className="site-footer__cta" aria-labelledby="footer-title">
          <h2 id="footer-title">Move forward <span>with clarity.</span></h2>
          <p>Share the opportunity, operating challenge, or risk. We’ll help define a practical next step and the capabilities needed to deliver it.</p>
          <div className="site-footer__actions">
            <Link href="/contact">Book a consultation <IconArrowUpRight size={16} stroke={1.8} /></Link>
            <a href="mailto:yogeshbabu@rasyaicybersec.com">Email us</a>
          </div>
        </section>

        <div className="site-footer__link-groups">
          <nav aria-label="Footer navigation">
            <p>Navigation</p>
            {navigationLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
          </nav>
          <nav aria-label="Contact RASY">
            <p>Connect</p>
            <a href="mailto:yogeshbabu@rasyaicybersec.com">Email</a>
            <a href="tel:+966564734681">Call</a>
            <Link href="/contact">Consultation</Link>
          </nav>
          <nav aria-label="Legal">
            <p>Legal</p>
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/terms-and-conditions">Terms of service</Link>
          </nav>
        </div>

        <div className="site-footer__landscape-bottom">
          <p>© 2026 RASY AI &amp; Cybersecurity Technologies. All rights reserved.</p>
          <p>AI · Cybersecurity · Digital growth</p>
        </div>
      </div>
      </footer>
    </>
  );
}
"use client";

import { FormEvent, useState } from "react";
import {
  IconArrowUpRight,
  IconBuildingSkyscraper,
  IconCheck,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { Reveal, SiteFooter } from "@/components/rasy/site-shell";

const emailAddress = "yogeshbabu@rasyaicybersec.com";
const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  };

  return (
    <>
      <section className="contact-experience" aria-labelledby="contact-title">
        <div className="contact-experience__veil" aria-hidden="true" />
        <div className="contact-experience__layout">
          <Reveal className="contact-experience__intro">
            <p className="contact-experience__eyebrow"><span aria-hidden="true">+</span> Contact</p>
            <h1 id="contact-title">Get in Touch</h1>
            <p className="contact-experience__lead">Tell us what you are working through. Complete the form and our team will respond within 24 hours.</p>

            <div className="contact-experience__details" aria-label="Contact information">
              <div className="contact-detail">
                <span className="contact-detail__icon"><IconBuildingSkyscraper size={23} stroke={1.8} /></span>
                <div><p>Office</p><strong>Hyderabad, India</strong></div>
              </div>
              <a className="contact-detail" href="tel:+966564734681" aria-label="Call RASY at plus 966 56 473 4681">
                <span className="contact-detail__icon"><IconPhone size={23} stroke={1.8} /></span>
                <div><p>Call</p><strong>+966 56 473 4681</strong></div>
              </a>
              <a className="contact-detail" href={gmailUrl} target="_blank" rel="noreferrer" aria-label={`Email ${emailAddress} using Gmail`}>
                <span className="contact-detail__icon"><IconMail size={23} stroke={1.8} /></span>
                <div><p>Email</p><strong>{emailAddress}</strong></div>
                <IconArrowUpRight className="contact-detail__arrow" size={17} stroke={1.8} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal className={`contact-form-card${submitted ? " is-submitted" : ""}`} delay={0.06}>
            <form className="contact-form" onSubmit={submit} aria-hidden={submitted} inert={submitted ? true : undefined}>
              <label><span>Name</span><input name="name" autoComplete="name" required placeholder="Name" /></label>
              <label><span>Email</span><input name="email" type="email" autoComplete="email" required placeholder="Email" /></label>
              <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" placeholder="Phone (optional)" /></label>
              <label><span>Company</span><input name="company" autoComplete="organization" placeholder="Company (optional)" /></label>
              <label className="contact-form__message"><span>Message</span><textarea name="message" required rows={5} placeholder="Message" /></label>
              <button className="contact-form__submit" type="submit">Submit your form</button>
              <p className="contact-form__legal">By submitting this form, you agree to our <a href="/terms-and-conditions">Terms</a> &amp; <a href="/privacy-policy">Privacy Policy</a>.</p>
            </form>

            <div className="contact-form-success" role="status" aria-live="polite" aria-hidden={!submitted} inert={submitted ? undefined : true}>
              <span className="contact-form-success__ring"><IconCheck size={34} stroke={2.2} /></span>
              <span className="contact-form-success__spark contact-form-success__spark--one" />
              <span className="contact-form-success__spark contact-form-success__spark--two" />
              <span className="contact-form-success__spark contact-form-success__spark--three" />
              <p>Form submitted</p>
              <h2>Thank you for reaching out.</h2>
              <span>We have received your details and will be in touch shortly.</span>
              <button type="button" onClick={() => setSubmitted(false)}>Submit another form</button>
            </div>
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
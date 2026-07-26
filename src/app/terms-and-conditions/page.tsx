import LegalContent from "@/components/sections/legal-content";
import LegalHero from "@/components/sections/legal-hero";
import { SiteFooter } from "@/components/rasy/site-shell";

export default function TermsAndConditionsPage() {
  return (
    <>
      <LegalHero
        badgeLabel="NOTICE"
        title="Terms and Conditions"
        subtitle="The practical conditions that apply when using this public website."
      />

      <LegalContent>
        <p><strong>RASY AI &amp; Cybersecurity Technologies (Private Limited)</strong></p>
        <p><strong>Last reviewed: July 2026</strong></p>

        <h3>1. Website purpose</h3>
        <p>This website provides general information about RASY, its capabilities, industries, leadership, and training approach. It is not a substitute for a proposal, statement of work, service-level agreement, security assessment, or professional advice.</p>

        <h3>2. No engagement is created</h3>
        <p>Preparing or copying a consultation brief does not create a client relationship, commitment, warranty, or obligation to deliver services. Any engagement begins only through terms agreed by authorised representatives.</p>

        <h3>3. Acceptable use</h3>
        <p>You may browse and share links to this website for lawful business purposes. You must not disrupt the site, attempt unauthorised access, misrepresent RASY content, or use the site to transmit malicious material. References to cybersecurity services are not permission to test RASY or third-party systems.</p>

        <h3>4. Content and intellectual property</h3>
        <p>RASY names, branding, copy, and original website materials remain the property of their respective owners. You may not reproduce or present them as your own without permission, except where applicable law allows.</p>

        <h3>5. Third-party services</h3>
        <p>A production deployment may rely on hosting, content-delivery, or other infrastructure providers. Their availability and terms are outside RASY&apos;s direct control. Any third-party service introduced before launch should be documented in the relevant notices.</p>

        <h3>6. Accuracy and availability</h3>
        <p>RASY aims to keep the website useful and accurate, but public information may change. Service scope, timing, commercial terms, and outcomes must be confirmed in writing for each engagement. The website may be updated or temporarily unavailable.</p>

        <h3>7. Client work</h3>
        <p>Confidentiality, data handling, ownership, fees, liability, governing law, dispute resolution, and service commitments for client work must be defined in the applicable signed agreement. This website notice does not invent or override those terms.</p>

        <h3>8. Changes</h3>
        <p>These website terms may be revised as the website and its functionality evolve. The review date above indicates the current version.</p>

        <h3>9. Contact</h3>
        <p>Use the RASY contact page to prepare a consultation brief. Verified legal contact and jurisdiction details should be added before publication if required for the intended market.</p>
      </LegalContent>

      <SiteFooter />
    </>
  );
}

import LegalContent from "@/components/sections/legal-content";
import LegalHero from "@/components/sections/legal-hero";
import { SiteFooter } from "@/components/rasy/site-shell";

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHero
        badgeLabel="NOTICE"
        title="Privacy Policy"
        subtitle="A plain-language summary of how this website currently handles information."
      />

      <LegalContent>
        <p><strong>RASY AI &amp; Cybersecurity Technologies (Private Limited)</strong></p>
        <p><strong>Last reviewed: July 2026</strong></p>

        <h3>1. Scope</h3>
        <p>This notice covers the public RASY website and its consultation-brief experience. It does not replace the privacy terms agreed for a client engagement, training programme, or managed service.</p>

        <h3>2. Consultation briefs</h3>
        <p>The current consultation form prepares a brief in your browser. It does not send the information to RASY or to a third-party service. You decide whether to copy and share the resulting brief through an appropriate business channel.</p>
        <p>Do not enter passwords, credentials, confidential records, personal data about other people, or sensitive operational and security information.</p>

        <h3>3. Information you provide</h3>
        <p>If you contact RASY outside this website, information you choose to provide may include your name, work contact details, organisation, areas of interest, timeline, and a description of the business need. That information should be handled for responding to the enquiry and evaluating an appropriate next step.</p>

        <h3>4. Website operation</h3>
        <p>The website may create routine technical records through its hosting infrastructure, such as request time, browser information, and network address. Hosting and analytics arrangements should be reflected here before any production deployment introduces them.</p>

        <h3>5. Client engagements</h3>
        <p>Security, AI, automation, digital, and training engagements may require separate data-handling terms, access controls, retention periods, and confidentiality obligations. Those details belong in the relevant signed agreement and should be agreed before access to client information or systems is provided.</p>

        <h3>6. Your choices</h3>
        <p>You may choose not to provide information through the website. For information shared through another approved channel, use that channel to request access, correction, or deletion where applicable and subject to contractual or legal obligations.</p>

        <h3>7. Changes</h3>
        <p>This notice should be updated when the website adds a live form endpoint, analytics, marketing technologies, user accounts, or other data-processing features.</p>

        <h3>8. Contact</h3>
        <p>Use the RASY contact page to prepare a consultation brief. Verified privacy contact details should be added here before publication if a dedicated channel is established.</p>
      </LegalContent>

      <SiteFooter />
    </>
  );
}

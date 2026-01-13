"use client";

import React from "react";
import LegalHero from "@/components/sections/legal-hero";
import LegalContent from "@/components/sections/legal-content";
import Footer from "@/components/sections/footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <LegalHero
        badgeLabel="POLICY"
        title="Privacy Policy"
        subtitle="We protect your data while delivering cybersecurity and AI services across the UAE."
      />

      <LegalContent>
        <p><strong>RASY AI & Cybersecurity Technologies (Private Limited)</strong></p>
        <p>Service-based company, Dubai, UAE</p>
        <p><strong>Effective: 1 January 2026</strong></p>
        <p>This Privacy Policy explains how RASY AI & Cybersecurity Technologies ("RASY", "we", "us") collects, uses and safeguards information when you engage our consulting, training or managed-security services, visit our UAE offices or contact us online. By using any RASY service you agree to this Policy and the UAE Data Protection Law (Federal Decree-Law No. 45 of 2021).</p>

        <h3>1. Information We Collect</h3>
        <ul>
          <li><p><strong>Contact Details:</strong> name, job title, company, phone, email, business address.</p></li>
          <li><p><strong>Engagement Data:</strong> service enquiries, contracts, proposals, meeting notes, payment records.</p></li>
          <li><p><strong>Security Data:</strong> logs from client systems we monitor, vulnerability scan results, incident reports (only under contract).</p></li>
          <li><p><strong>Training Records:</strong> attendance, assessments, certification status.</p></li>
          <li><p><strong>Website/Email Analytics:</strong> IP address, browser type, pages viewed, date/time (standard server logs).</p></li>
          <li><p><strong>Cookies:</strong> small text files for site functionality; you can refuse them in your browser.</p></li>
        </ul>

        <h3>2. How We Use Your Information</h3>
        <ul>
          <li><p>Deliver contracted cybersecurity or AI services.</p></li>
          <li><p>Provide quotations, invoices and customer support.</p></li>
          <li><p>Schedule and certify training participants.</p></li>
          <li><p>Improve service quality and develop new offerings.</p></li>
          <li><p>Meet UAE legal, tax and regulatory obligations.</p></li>
          <li><p>Send service updates or marketing (with opt-out).</p></li>
        </ul>

        <h3>3. Legal Bases (UAE)</h3>
        <p>We process personal data:</p>
        <ul>
          <li><p>to prepare or perform a contract with you;</p></li>
          <li><p>to comply with UAE law or regulator requests;</p></li>
          <li><p>for our legitimate interests (e.g., service improvement) balanced against your rights;</p></li>
          <li><p>with your consent for marketing or optional cookies.</p></li>
        </ul>

        <h3>4. Data Sharing</h3>
        <p>We do not sell your data. We may share it with:</p>
        <ul>
          <li><p><strong>Vendors:</strong> secure data-centres, payment gateways, email providers under confidentiality agreements.</p></li>
          <li><p><strong>Authorities:</strong> UAE regulators, courts or law-enforcement when legally required.</p></li>
          <li><p><strong>Partners:</strong> only if you have approved a joint service (e.g., certification body).</p></li>
        </ul>
        <p>All transfers stay within the UAE or to territories offering UAE-equivalent protection.</p>

        <h3>5. Data Security</h3>
        <ul>
          <li><p>Industry-standard encryption (TLS 1.2+) for data in transit and at rest.</p></li>
          <li><p>Role-based access, multi-factor authentication, audit logs.</p></li>
          <li><p>Annual penetration tests and ISO 27001-aligned controls.</p></li>
          <li><p>Paper records kept in locked cabinets, shredded when no longer needed.</p></li>
        </ul>

        <h3>6. Retention</h3>
        <ul>
          <li><p><strong>Client service files:</strong> 7 years after contract ends (UAE commercial law).</p></li>
          <li><p><strong>Security logs:</strong> 1 year unless investigation requires longer.</p></li>
          <li><p><strong>Marketing contacts:</strong> until you unsubscribe or 2 years of inactivity.</p></li>
        </ul>
        <p>Data is then securely deleted or anonymised.</p>

        <h3>7. Your Rights under UAE Law</h3>
        <p>You may request:</p>
        <ul>
          <li><p>access to your personal data;</p></li>
          <li><p>correction of inaccurate data;</p></li>
          <li><p>restriction or erasure (where not conflicting with legal duties);</p></li>
          <li><p>withdrawal of consent at any time.</p></li>
        </ul>
        <p>Send requests to privacy@rasytech.com; we will respond within 30 days.</p>

        <h3>8. Cookies & Similar Tech</h3>
        <p>Our site uses:</p>
        <ul>
          <li><p><strong>Essential cookies:</strong> session management.</p></li>
          <li><p><strong>Analytical cookies:</strong> aggregated visitor statistics (Google Analytics, IP anonymised).</p></li>
          <li><p><strong>Marketing cookies:</strong> only with your consent.</p></li>
        </ul>
        <p>Adjust settings via the site banner or browser controls.</p>

        <h3>9. Changes to This Policy</h3>
        <p>We will post any updates on this page and, for material changes, email affected clients. Continued use of our services after the effective date constitutes acceptance.</p>

        <h3>10. Contact Us</h3>
        <p><strong>RASY AI & Cybersecurity Technologies (Private Limited)</strong><br />
          Office 123, Building 45, Dubai Internet City<br />
          Dubai, United Arab Emirates</p>
        <p><strong>Email:</strong> privacy@rasytech.com<br />
          <strong>Phone:</strong> +971 4 123 4567<br />
          (Sun–Thu, 09:00–18:00 GST)</p>
      </LegalContent>

      <Footer />
    </main>
  );
}

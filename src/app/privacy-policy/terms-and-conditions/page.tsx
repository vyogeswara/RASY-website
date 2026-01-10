"use client";

import React from "react";
import LegalHero from "@/components/sections/legal-hero";
import LegalContent from "@/components/sections/legal-content";
import Footer from "@/components/sections/footer";

export default function TermsAndConditionsPage() {
    return (
        <main className="relative min-h-screen bg-black overflow-hidden">
            <LegalHero
                badgeLabel="POLICY"
                title="Terms and Conditions"
                subtitle="Your agreement with us for a secure, reliable experience."
            />

            <LegalContent>
                <p><strong>RASY AI & Cybersecurity Technologies (Private Limited)</strong></p>
                <p><strong>Effective: 1 January 2026</strong></p>
                <p>These Terms govern your use of all RASY websites, platforms, cybersecurity services, AI solutions and training programmes ("Services"). By logging in or using any part of the Services you accept these Terms and the laws of the United Arab Emirates.</p>

                <h3>1. Account Eligibility</h3>
                <ul>
                    <li><p>You must be 18+ and legally capable under UAE law.</p></li>
                    <li><p>Keep credentials confidential; you are liable for all activity under your account.</p></li>
                    <li><p>Information supplied must be accurate and updated promptly.</p></li>
                </ul>

                <h3>2. Acceptable Use</h3>
                <p>Use the Services only for lawful business purposes inside the UAE. You may not:</p>
                <ul>
                    <li><p>upload or share illegal, offensive or infringing content;</p></li>
                    <li><p>reverse-engineer, resell or sublicense any part of the Services;</p></li>
                    <li><p>probe, hack or attempt to breach our systems;</p></li>
                    <li><p>misuse the platform in any way that could harm RASY or other users.</p></li>
                </ul>
                <p>We may monitor usage and suspend access for violations without prior notice.</p>

                <h3>3. Intellectual Property</h3>
                <p>All software, trademarks, courseware and materials remain the exclusive property of RASY AI & Cybersecurity Technologies (Private Limited).</p>
                <p>You receive a limited, non-exclusive, non-transferable licence for internal business use only. No ownership rights are transferred.</p>

                <h3>4. Data & Privacy</h3>
                <ul>
                    <li><p>You retain ownership of data you upload ("Your Data").</p></li>
                    <li><p>You grant RASY a royalty-free licence to host, process and back-up Your Data strictly for service delivery and improvement.</p></li>
                    <li><p>Personal data is handled in accordance with UAE Federal Law No. 45 of 2021 and our Privacy Policy.</p></li>
                    <li><p>You warrant that Your Data does not violate any third-party rights or UAE laws.</p></li>
                </ul>

                <h3>5. Fees & Payment</h3>
                <ul>
                    <li><p>Fees are quoted and payable in UAE Dirhams (AED) and exclude VAT unless stated otherwise.</p></li>
                    <li><p>Subscriptions are non-refundable except as required by mandatory UAE consumer law.</p></li>
                    <li><p>Late payments accrue interest at 2% per month (or the highest rate allowed by UAE law).</p></li>
                </ul>

                <h3>6. Changes to Service</h3>
                <p>RASY may update, modify or discontinue features at any time. Significant changes will be notified by email or in-platform announcement. Continued use after changes equals acceptance.</p>

                <h3>7. Suspension & Termination</h3>
                <p>We may suspend or terminate access immediately if you breach these Terms, misuse the Services, or are required to do so by UAE law. Upon termination you must stop using the Services and delete any RASY materials; Your Data will be deleted within 30 days unless retention is required by law.</p>

                <h3>8. Warranties & Disclaimer</h3>
                <p>RASY provides the Services with reasonable skill and care. Except as expressly stated, we disclaim all other warranties, including implied warranties of merchantability or fitness for a particular purpose. We do not guarantee uninterrupted or error-free operation.</p>

                <h3>9. Limitation of Liability</h3>
                <p>To the maximum extent permitted under UAE law, RASY's total liability for any claim relating to the Services shall not exceed the fees you paid us in the 12 months preceding the event. We are not liable for any indirect, incidental or consequential damages, including loss of profits or data.</p>

                <h3>10. Indemnification</h3>
                <p>You agree to defend and indemnify RASY, its affiliates, directors and employees against any claims, losses or costs (including reasonable legal fees) arising from your breach of these Terms, misuse of the Services, or infringement of third-party rights.</p>

                <h3>11. Governing Law & Disputes</h3>
                <p>These Terms are governed by the laws of the Emirate of Dubai and the UAE. Disputes will first be resolved by good-faith negotiation for 30 days; if unresolved, they shall be finally settled by the Dubai International Financial Centre (DIFC) Courts.</p>

                <h3>12. Miscellaneous</h3>
                <ul>
                    <li><p><strong>Severability:</strong> If any clause is invalid, the rest remain in force.</p></li>
                    <li><p><strong>Entire Agreement:</strong> These Terms supersede all prior agreements.</p></li>
                    <li><p><strong>No Waiver:</strong> Failure to enforce any right does not waive it.</p></li>
                    <li><p><strong>Force Majeure:</strong> RASY is not liable for delays caused by events beyond its reasonable control.</p></li>
                </ul>

                <h3>13. Contact</h3>
                <p><strong>RASY AI & Cybersecurity Technologies (Private Limited)</strong><br />
                    Dubai Internet City, Dubai, UAE</p>
                <p><strong>Email:</strong> legal@rasytech.com<br />
                    <strong>Phone:</strong> +971 4 123 4567<br />
                    (Sun–Thu, 09:00–18:00 GST)</p>
            </LegalContent>

            <Footer />
        </main>
    );
}

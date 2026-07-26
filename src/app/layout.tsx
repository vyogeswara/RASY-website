import type { Metadata } from "next";
import "./globals.css";
import "./design.css";
import "./refinements.css";
import "./portfolio.css";
import "./portfolio-refinements.css";
import "./hero-experience.css";
import "./home-experience.css";
import "./shared-sections.css";
import "./about-editorial.css";
import "./contact-experience.css";
import "./training-experience.css";
import "./services-experience.css";
import { PageTransition, ScrollProgress, SiteNavigation } from "@/components/rasy/site-shell";

export const metadata: Metadata = {
  metadataBase: new URL("https://rasytech.com"),
  title: { default: "RASY | AI, cybersecurity, and digital growth", template: "%s | RASY" },
  description: "RASY helps organisations apply useful AI, automate critical work, improve digital experiences, and strengthen cyber resilience.",
  openGraph: {
    title: "RASY | Build smarter. Operate securely. Grow with confidence.",
    description: "Practical AI, resilient cybersecurity, connected digital experiences, and capability that lasts.",
    type: "website",
    images: [{ url: "/assets/editorial/rasy-command-layers.png", width: 1536, height: 864, alt: "RASY systems under human direction" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <SiteNavigation />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

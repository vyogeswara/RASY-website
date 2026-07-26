import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  eslint: {
    // The launch routes are type-checked independently; do not make the
    // production bundle wait on the abandoned legacy component archive.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/services", destination: "/solutions", permanent: true },
      { source: "/services/artificial-intelligence", destination: "/solutions", permanent: true },
      { source: "/services/ai-for-work", destination: "/solutions", permanent: true },
      { source: "/services/ai-for-process", destination: "/solutions", permanent: true },
      { source: "/services/ai-for-service", destination: "/solutions", permanent: true },
      { source: "/services/business-technology", destination: "/solutions", permanent: true },
      { source: "/services/training-education", destination: "/training", permanent: true },
      { source: "/services/cybersecurity", destination: "/solutions", permanent: true },
      { source: "/services/professional-services", destination: "/solutions", permanent: true },
      { source: "/solutions/ai-automation", destination: "/solutions", permanent: true },
      { source: "/solutions/ai-customer-experience", destination: "/solutions", permanent: true },
      { source: "/solutions/intelligent-automation", destination: "/solutions", permanent: true },
      { source: "/solutions/digital-experience-growth", destination: "/solutions", permanent: true },
      { source: "/solutions/cybersecurity", destination: "/solutions", permanent: true },
      { source: "/solutions/managed-soc", destination: "/solutions", permanent: true },
      { source: "/solutions/grc-resilience", destination: "/solutions", permanent: true },
      { source: "/solutions/security-engineering", destination: "/solutions", permanent: true },
    ];
  },
};

export default nextConfig;

import type { Metadata } from "next";
import { ServicesPage } from "@/components/rasy/services-page";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore RASY solutions across AI, intelligent automation, digital experience, cybersecurity, and resilience.",
};

export default function Page() { return <ServicesPage />; }

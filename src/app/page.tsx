import type { Metadata } from "next";
import { HomePage } from "@/components/rasy/home-page";

export const metadata: Metadata = {
  title: "Secure progress, made practical",
  description: "RASY brings AI, cybersecurity, and business technology together for secure digital growth.",
};

export default function Home() {
  return <HomePage />;
}

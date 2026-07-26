import type { Metadata } from "next";
import { AboutPage } from "@/components/rasy/about-page";

export const metadata: Metadata = { title: "About", description: "Meet RASY, its leadership, mission, values, and perspective on responsible technology progress." };
export default function Page() { return <AboutPage />; }

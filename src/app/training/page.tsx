import type { Metadata } from "next";
import { TrainingPage } from "@/components/rasy/training-page";

export const metadata: Metadata = {
  title: "Training and enablement",
  description: "Build practical AI and cybersecurity capability through role-based briefings, workshops, labs, bootcamps, and tailored learning pathways.",
};

export default function Page() { return <TrainingPage />; }

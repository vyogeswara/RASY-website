import type { Metadata } from "next";
import { ContactPage } from "@/components/rasy/contact-page";

export const metadata: Metadata = { title: "Contact", description: "Contact RASY in Hyderabad about AI, cybersecurity, automation, training, and responsible digital transformation." };
export default function Page() { return <ContactPage />; }

"use client";

import FAQSection from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ContactOptions } from "@/components/sections/contact/contact-options";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { Offices } from "@/components/sections/contact/offices";

export default function ContactPage() {
    return (
        <div className="flex flex-col gap-0 bg-black text-white selection:bg-white/20">
            <ContactHero />
            <ContactOptions />
            <ContactForm />
            <Offices />
            <FAQSection />
            <Footer />
        </div>
    );
}


import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import FAQ from "@/components/sections/faq";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ContactOptions } from "@/components/sections/contact/contact-options";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { Offices } from "@/components/sections/contact/offices";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/20">
            <Navbar />

            <div className="flex flex-col gap-0">
                <ContactHero />
                <ContactOptions />
                <ContactForm />
                <Offices />
                <FAQ />
            </div>

            <Footer />
        </main>
    );
}

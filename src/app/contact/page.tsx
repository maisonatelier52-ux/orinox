import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
    title: "Contact Us | US, Spain & UAE Energy Projects | Orinox",
    description: "Connect with Orinox Holding's offices in the US, Madrid, and Dubai. Contact our experts for petroleum drilling, upstream, and midstream inquiries worldwide.",
    keywords: [
        "contact energy experts UAE", "Dubai petroleum project inquiry", "Spain energy sector contact", "Madrid oil and gas office",
        "US energy headquarters", "petroleum drilling inquiries Dubai"
    ],
    openGraph: {
        title: "Contact Us | Global Energy Hubs | Orinox",
        description: "Connect with our technical and strategic teams in the US, Spain, and UAE.",
        images: ["/images/logo1.png"],
    },
};

export default function ContactPage() {
    return <ContactClient />;
}

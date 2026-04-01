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
        title: "Contact Us | US, Spain & UAE Energy Projects | Orinox",
        description: "Connect with Orinox Holding's offices in the US, Madrid, and Dubai. Contact our experts for petroleum drilling, upstream, and midstream inquiries worldwide.",
        images: [
            {
                url: "/images/logo1.png",
                width: 1200,
                height: 630,
                alt: "Contact Orinox Holding",
            },
        ],
        url: "https://orinoxholding.com/contact/",
        siteName: "Orinox Holding",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | US, Spain & UAE Energy Projects | Orinox",
        description: "Connect with Orinox Holding's offices in the US, Madrid, and Dubai. Contact our experts for petroleum drilling, upstream, and midstream inquiries worldwide.",
        images: ["/images/logo1.png"],
    },
};

export default function ContactPage() {
    return <ContactClient />;
}

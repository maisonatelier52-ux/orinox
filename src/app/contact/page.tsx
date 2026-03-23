import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
    title: "Contact Us | Global Energy Infrastructure | Orinox Holding",
    description: "Get in touch with Orinox Holding's US and global offices. Contact our technical experts for upstream and midstream energy inquiries.",
    keywords: ["contact Orinox Holding", "energy industry contact USA", "petroleum infrastructure inquiry", "global energy offices", "Orinox headquarters"],
    openGraph: {
        title: "Contact Us | Orinox Holding US",
        description: "Connect with our technical and strategic teams worldwide.",
        images: ["/images/logo1.png"],
    },
};

export default function ContactPage() {
    return <ContactClient />;
}

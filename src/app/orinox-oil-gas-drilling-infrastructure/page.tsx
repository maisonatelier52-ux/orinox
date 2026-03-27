import type { Metadata } from "next";
import OrinoxCapabilitiesClient from "./home-client";

export const metadata: Metadata = {
    title: "Orinox Holding – Upstream & Midstream Energy Infrastructure",
    description: "Discover Orinox Holding’s expertise in upstream drilling and midstream energy infrastructure. Delivering efficient, low-carbon solutions worldwide.",
    keywords: ["upstream exploration", "midstream logistics", "petroleum infrastructure", "global energy operations", "oil and gas US"],
    openGraph: {
        title: "Orinox Holding – Upstream & Midstream Energy Infrastructure",
        description: "Discover Orinox Holding’s expertise in upstream drilling and midstream energy infrastructure. Delivering efficient, low-carbon solutions worldwide.",
        images: ["/images/logo1.png"],
        url: "https://orinoxholding.com/orinox-oil-gas-drilling-infrastructure/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Orinox Holding – Upstream & Midstream Energy Infrastructure",
        description: "Discover Orinox Holding’s expertise in upstream drilling and midstream energy infrastructure. Delivering efficient, low-carbon solutions worldwide.",
        images: ["/images/logo1.png"],
    },
};

export default function OrinoxCapabilitiesPresentation() {
    return <OrinoxCapabilitiesClient />;
}

import type { Metadata } from "next";
import OrinoxCapabilitiesClient from "./home-client";

export const metadata: Metadata = {
    title: "Global Upstream & Midstream Energy Infrastructure | Orinox Holding",
    description: "Orinox Holding is a premier global organization managing upstream exploration and midstream logistics with technical mastery and absolute transparency in the US and beyond.",
    keywords: ["upstream exploration", "midstream logistics", "petroleum infrastructure", "global energy operations", "oil and gas US"],
    openGraph: {
        title: "Orinox Holding | Global Energy Infrastructure",
        description: "Technical excellence in upstream and midstream petroleum segments.",
        images: ["/images/logo1.png"],
    },
};

export default function OrinoxCapabilitiesPresentation() {
    return <OrinoxCapabilitiesClient />;
}

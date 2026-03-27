import type { Metadata } from "next";
import RegionsClient from "./regions-client";

export const metadata: Metadata = {
    title: "Global Energy Hubs in US, Spain & UAE | Orinox Holding",
    description: "Discover Orinox Holding’s energy hubs in the US, Spain, and UAE. Delivering advanced upstream and midstream infrastructure solutions worldwide.",
    keywords: [
        "Dubai energy infrastructure", "Madrid petroleum services", "US energy hubs",
        "Middle East petroleum logistics", "Spain oil and gas exploration", "global energy corridors"
    ],
    openGraph: {
        title: "Global Energy Hubs in US, Spain & UAE | Orinox Holding",
        description: "Discover Orinox Holding’s energy hubs in the US, Spain, and UAE. Delivering advanced upstream and midstream infrastructure solutions worldwide.",
        images: ["/images/logo1.png"],
        url: "https://orinoxholding.com/regions/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Global Energy Hubs in US, Spain & UAE | Orinox Holding",
        description: "Discover Orinox Holding’s energy hubs in the US, Spain, and UAE. Delivering advanced upstream and midstream infrastructure solutions worldwide.",
        images: ["/images/logo1.png"],
    },
};

export default function RegionsPage() {
    return <RegionsClient />;
}

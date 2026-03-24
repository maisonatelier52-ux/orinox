import type { Metadata } from "next";
import RegionsClient from "./regions-client";

export const metadata: Metadata = {
    title: "Global Energy Hubs | US, Spain & UAE (Dubai) | Orinox Holding",
    description: "Orinox Holding's strategic footprint spans North America, Spain (Madrid), and the UAE (Dubai). Managing high-precision energy infrastructure in the world's most productive petroleum basins.",
    keywords: [
        "Dubai energy infrastructure", "Madrid petroleum services", "US energy hubs",
        "Middle East petroleum logistics", "Spain oil and gas exploration", "global energy corridors"
    ],
    openGraph: {
        title: "Global Regions & Hubs | Orinox Holding",
        description: "Technical mastery in energy hubs across US, Spain, and the Middle East.",
        images: ["/images/logo1.png"],
    },
};

export default function RegionsPage() {
    return <RegionsClient />;
}

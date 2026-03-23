import type { Metadata } from "next";
import RegionsClient from "./regions-client";

export const metadata: Metadata = {
    title: "Global Energy Operations & Regional Hubs | Orinox Holding",
    description: "Orinox Holding's global strategic footprint spans North America, the Middle East, and beyond. Managing high-precision energy infrastructure across the world's most productive basins.",
    keywords: ["global energy operations", "regional energy hubs", "offshore infrastructure UK", "petroleum logistics Middle East", "North American energy Corridors"],
    openGraph: {
        title: "Global Regions | Orinox Holding",
        description: "Technical mastery across global energy corridors.",
        images: ["/images/logo1.png"],
    },
};

export default function RegionsPage() {
    return <RegionsClient />;
}

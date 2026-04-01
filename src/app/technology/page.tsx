import type { Metadata } from "next";
import TechnologyClient from "./technology-client";

export const metadata: Metadata = {
    title: "Energy Technology & Digital Delta | US, Spain & UAE | Orinox",
    description: "Orinox's Digital Delta infrastructure synchronizes upstream exploration data with midstream logistics across the US, Spain, and UAE through real-time telemetry.",
    keywords: [
        "energy technology UAE", "Dubai petroleum analytics", "oil sector tech Spain", "US digital twin petroleum",
        "predictive energy analytics Madrid", "Dubai SCADA technology"
    ],
    openGraph: {
        title: "Energy Technology & Digital Delta | US, Spain & UAE | Orinox",
        description: "Orinox's Digital Delta infrastructure synchronizes upstream exploration data with midstream logistics across the US, Spain, and UAE through real-time telemetry.",
        images: [
            {
                url: "/images/logo1.png",
                width: 1200,
                height: 630,
                alt: "Orinox Energy Technology",
            },
        ],
        url: "https://orinoxholding.com/technology/",
        siteName: "Orinox Holding",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Energy Technology & Digital Delta | US, Spain & UAE | Orinox",
        description: "Orinox's Digital Delta infrastructure synchronizes upstream exploration data with midstream logistics across the US, Spain, and UAE through real-time telemetry.",
        images: ["/images/logo1.png"],
    },
};

export default function TechnologyPage() {
    return <TechnologyClient />;
}

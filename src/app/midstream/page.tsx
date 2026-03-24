import type { Metadata } from "next";
import MidstreamClient from "./midstream-client";

export const metadata: Metadata = {
    title: "Midstream Petroleum Logistics & Storage | US, UAE & Spain | Orinox",
    description: "Optimizing hydrocarbon transit and storage across US, UAE, and Spain. Advanced midstream operations for global energy distribution and strategic reservoir management.",
    keywords: [
        "midstream logistics UAE", "petroleum storage Dubai", "oil transport Spain", "US pipeline infrastructure",
        "energy storage Madrid", "Dubai petroleum distribution", "midstream asset management"
    ],
    openGraph: {
        title: "Midstream Logistics & Storage | Orinox Holding",
        description: "Global technical development for midstream energy markets across the US, Spain, and Middle East.",
        images: ["/images/logo1.png"],
    },
};

export default function MidstreamPage() {
    return <MidstreamClient />;
}

import type { Metadata } from "next";
import MidstreamClient from "./midstream-client";

export const metadata: Metadata = {
    title: "Midstream Petroleum Logistics & Storage | Orinox Infrastructure US",
    description: "Optimizing the transit and storage of critical hydrocarbon assets in the US. Advanced midstream operations for efficient energy distribution in North America.",
    keywords: ["midstream logistics US", "petroleum storage USA", "oil and gas transport", "energy infrastructure pipelines"],
    openGraph: {
        title: "Midstream Logistics & Storage | Orinox Holding",
        description: "Focusing on high-spec technical development for North American midstream energy markets.",
        images: ["/images/logo1.png"],
    },
};

export default function MidstreamPage() {
    return <MidstreamClient />;
}

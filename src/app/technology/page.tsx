import type { Metadata } from "next";
import TechnologyClient from "./technology-client";

export const metadata: Metadata = {
    title: "The Digital Delta | Energy Technology & Innovation | Orinox US",
    description: "Orinox's Digital Delta infrastructure synchronizes US upstream exploration data with midstream logistics through real-time telemetry and predictive analytics.",
    keywords: ["energy technology USA", "digital twin petroleum", "predictive oil analytics", "SCADA midstream technology", "upstream data integration"],
    openGraph: {
        title: "Energy Technology | Orinox Holding US",
        description: "Innovative technical infrastructure for modern petroleum markets.",
        images: ["/images/logo1.png"],
    },
};

export default function TechnologyPage() {
    return <TechnologyClient />;
}

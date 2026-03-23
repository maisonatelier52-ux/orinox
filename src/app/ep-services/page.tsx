import type { Metadata } from "next";
import EPServicesClient from "./ep-services-client";

export const metadata: Metadata = {
    title: "E&P Services | Exploration & Production Excellence | Orinox",
    description: "Orinox Holding integrates deep US upstream expertise with a focus on safety and technological reliability. High-integrity exploration and production services for global energy frontiers.",
    keywords: ["E&P services US", "exploration and production", "seismic interpretation", "basin modeling", "petroleum risk assessment"],
    openGraph: {
        title: "E&P Services | Orinox Holding",
        description: "Precision engineering for global exploration and production.",
        images: ["/images/logo1.png"],
    },
};

export default function EPServicesPage() {
    return <EPServicesClient />;
}

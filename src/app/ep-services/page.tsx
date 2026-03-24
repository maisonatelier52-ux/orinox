import type { Metadata } from "next";
import EPServicesClient from "./ep-services-client";

export const metadata: Metadata = {
    title: "E&P Services | Global Petroleum Drilling | Orinox US, Spain & UAE",
    description: "Orinox Holding integrates deep US and UAE upstream expertise in exploration and production. High-intensity drilling and petroleum services for global energy frontiers.",
    keywords: [
        "E&P services UAE", "Dubai petroleum drilling", "exploration and production Spain",
        "Madrid petroleum engineering", "petroleum risk assessment Dubai"
    ],
    openGraph: {
        title: "E&P Services | Orinox Holding",
        description: "Precision engineering for global exploration and production in the US, Spain, and UAE.",
        images: ["/images/logo1.png"],
    },
};

export default function EPServicesPage() {
    return <EPServicesClient />;
}

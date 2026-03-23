import type { Metadata } from "next";
import ESGClient from "./esg-client";

export const metadata: Metadata = {
    title: "US Sustainable Energy & ESG Metrics | Orinox Holding",
    description: "Aligning petroleum profit with environmental stewardship. Verifiable ESG reporting and sustainable oil and gas operations in the USA.",
    keywords: ["ESG energy US", "sustainable oil drilling", "petroleum environmental stewardship", "US energy metrics"],
    openGraph: {
        title: "ESG & Sustainability | Orinox Holding US",
        description: "Focusing on sustainable development for North American energy markets.",
        images: ["/images/logo1.png"],
    },
};

export default function ESGPage() {
    return <ESGClient />;
}

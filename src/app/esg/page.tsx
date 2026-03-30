import type { Metadata } from "next";
import ESGClient from "./esg-client";

export const metadata: Metadata = {
    title: "Sustainable Energy & ESG | US, Spain & UAE | Orinox",
    description: "Aligning petroleum profit with environmental stewardship across US, Spain, and UAE. Verifiable ESG reporting and sustainable oil and gas operations.",
    keywords: [
        "ESG energy UAE", "sustainable drilling Dubai", "Spain petroleum ESG", "US sustainable energy",
        "environmental stewardship Madrid", "Dubai energy transparency"
    ],
    openGraph: {
        title: "Sustainable Energy & ESG | US, Spain & UAE | Orinox",
        description: "Aligning petroleum profit with environmental stewardship across US, Spain, and UAE. Verifiable ESG reporting and sustainable oil and gas operations.",
        images: ["/images/logo1.png"],
        url: "https://orinoxholding.com/esg/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sustainable Energy & ESG | US, Spain & UAE | Orinox",
        description: "Aligning petroleum profit with environmental stewardship across US, Spain, and UAE. Verifiable ESG reporting and sustainable oil and gas operations.",
        images: ["/images/logo1.png"],
    },
};

export default function ESGPage() {
    return <ESGClient />;
}

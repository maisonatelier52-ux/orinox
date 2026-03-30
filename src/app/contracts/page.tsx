import type { Metadata } from "next";
import ContractsClient from "./contracts-client";

export const metadata: Metadata = {
    title: "US Petroleum Service Contracts & Rig Chartering | Orinox",
    description: "Securing multi-year upstream contracts and midstream service agreements in the US and globally. High-spec rig chartering and infrastructure development contracts.",
    keywords: ["petroleum service contracts", "rig chartering USA", "upstream drilling agreements", "midstream infrastructure contracts"],
    openGraph: {
        title: "US Petroleum Service Contracts & Rig Chartering | Orinox",
        description: "Securing multi-year upstream contracts and midstream service agreements in the US and globally. High-spec rig chartering and infrastructure development contracts.",
        images: ["/images/logo1.png"],
        url: "https://orinoxholding.com/contracts/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "US Petroleum Service Contracts & Rig Chartering | Orinox",
        description: "Securing multi-year upstream contracts and midstream service agreements in the US and globally. High-spec rig chartering and infrastructure development contracts.",
        images: ["/images/logo1.png"],
    },
};

export default function ContractsPage() {
    return <ContractsClient />;
}

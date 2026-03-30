import type { Metadata } from "next";
import OperationsClient from "./operations-client";

export const metadata: Metadata = {
    title: "US Offshore Rig Fleet & Advanced Infrastructure | Orinox Operations",
    description: "Managing high-specification US offshore drilling fleets and production units. Delivering technical mastery in US petroleum exploration and regional energy development.",
    keywords: ["offshore rig fleet US", "energy infrastructure operations", "drilling services USA", "maritime petroleum logistics"],
    openGraph: {
        title: "US Offshore Rig Fleet & Advanced Infrastructure | Orinox Operations",
        description: "Managing high-specification US offshore drilling fleets and production units. Delivering technical mastery in US petroleum exploration and regional energy development.",
        images: ["/images/logo1.png"],
        url: "https://orinoxholding.com/operations/",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "US Offshore Rig Fleet & Advanced Infrastructure | Orinox Operations",
        description: "Managing high-specification US offshore drilling fleets and production units. Delivering technical mastery in US petroleum exploration and regional energy development.",
        images: ["/images/logo1.png"],
    },
};

export default function OperationsPage() {
    return <OperationsClient />;
}

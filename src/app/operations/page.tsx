import type { Metadata } from "next";
import OperationsClient from "./operations-client";

export const metadata: Metadata = {
    title: "US Offshore Rig Fleet & Advanced Infrastructure | Orinox Operations",
    description: "Managing high-specification US offshore drilling fleets and production units. Delivering technical mastery in US petroleum exploration and regional energy development.",
    keywords: ["offshore rig fleet US", "energy infrastructure operations", "drilling services USA", "maritime petroleum logistics"],
    openGraph: {
        title: "US Operations & Rig Fleet | Orinox Holding",
        description: "Technical management of capital-intensive oil infrastructure in the US.",
        images: ["/images/logo1.png"],
    },
};

export default function OperationsPage() {
    return <OperationsClient />;
}

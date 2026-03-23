import type { Metadata } from "next";
import OrinoxServicesClient from "./orinox-services-client";

export const metadata: Metadata = {
    title: "Upstream & Midstream Energy Services | Orinox Holding US",
    description: "Orinox Holding provides advanced upstream capabilities and precision midstream operations across the United States. Expertise in seismic analysis, precision drilling, and strategic logistics.",
    keywords: ["upstream energy services", "midstream operations US", "seismic analysis", "drilling technology", "petroleum logistics"],
    openGraph: {
        title: "Energy Services | Orinox Holding US",
        description: "Technical mastery in US energy operations, from drilling to distribution.",
        images: ["/images/logo1.png"],
    },
};

export default function OrinoxServices() {
    return <OrinoxServicesClient />;
}

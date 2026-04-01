import type { Metadata } from "next";
import OrinoxServicesClient from "./orinox-services-client";

export const metadata: Metadata = {
    title: "Upstream & Midstream Energy Services | Orinox Holding",
    description: "Discover Orinox Holding’s upstream and midstream energy services, including drilling, production, and infrastructure solutions.",
    keywords: ["upstream energy services", "midstream operations US", "seismic analysis", "drilling technology", "petroleum logistics"],
    openGraph: {
        title: "Upstream & Midstream Energy Services | Orinox Holding",
        description: "Discover Orinox Holding’s upstream and midstream energy services, including drilling, production, and infrastructure solutions.",
        images: [
            {
                url: "/images/logo1.png",
                width: 1200,
                height: 630,
                alt: "Orinox Holding Energy Services",
            },
        ],
        url: "https://orinoxholding.com/orinox-services/",
        siteName: "Orinox Holding",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Upstream & Midstream Energy Services | Orinox Holding",
        description: "Discover Orinox Holding’s upstream and midstream energy services, including drilling, production, and infrastructure solutions.",
        images: ["/images/logo1.png"],
    },
};

export default function OrinoxServices() {
    return <OrinoxServicesClient />;
}

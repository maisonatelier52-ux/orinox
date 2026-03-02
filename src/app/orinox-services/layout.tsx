import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Orinox Services - Upstream Capabilities",
    description: "Explore the advanced technical services and capabilities of Orinox Holding in the Upstream and Midstream petroleum sectors.",
    openGraph: {
        title: "Orinox Services",
        description: "Advanced seismic analysis, precision drilling, and enhanced oil recovery services.",
        images: [
            {
                url: "/images/logo1.png",
                width: 1200,
                height: 630,
                alt: "Orinox Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Orinox Services",
        description: "Advanced technical management of capital-intensive infrastructure.",
        images: ["/images/logo1.png"],
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

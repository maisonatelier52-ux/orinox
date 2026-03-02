import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Orinox Capabilities Presentation",
    description: "A high-end presentation of Orinox Holding's strategic development and technical management of capital-intensive infrastructure.",
    openGraph: {
        title: "Orinox Capabilities Presentation",
        description: "A high-end presentation of Orinox Holding's strategic development and technical management of capital-intensive infrastructure.",
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
        title: "Orinox Capabilities Presentation",
        description: "A high-end presentation of Orinox Holding's strategic development and technical management of capital-intensive infrastructure.",
        images: ["/images/logo1.png"],
    },
};

export default function PresentationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

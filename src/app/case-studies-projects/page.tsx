import type { Metadata } from "next";
import CaseStudiesClient from "./case-studies-client";

export const metadata: Metadata = {
    title: "Energy Project Case Studies | Technical Excellence | Orinox US",
    description: "Review Orinox Holding's successful US and global energy projects. Demonstrating technical mastery in upstream exploration and midstream infrastructure.",
    keywords: ["energy case studies US", "petroleum project portfolio", "upstream success stories", "midstream infrastructure projects", "Orinox project highlights"],
    openGraph: {
        title: "Case Studies | Orinox Holding US",
        description: "Proven results in global energy infrastructure.",
        images: ["/images/logo1.png"],
    },
};

export default function CaseStudiesPage() {
    return <CaseStudiesClient />;
}

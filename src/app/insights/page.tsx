import type { Metadata } from "next";
import InsightsClient from "./insights-client";

export const metadata: Metadata = {
  title: "Energy Industry Insights & Technical Publications | Orinox",
  description: "Orinox Holding provides expert analysis and technical briefs on the US and global energy industry. Insights into upstream exploration and midstream logistics.",
  keywords: ["energy industry analysis USA", "petroleum technical briefs", "oil and gas market insights", "upstream exploration reports", "midstream logistics publications"],
  openGraph: {
    title: "Energy Industry Insights & Technical Publications | Orinox",
    description: "Orinox Holding provides expert analysis and technical briefs on the US and global energy industry. Insights into upstream exploration and midstream logistics.",
    images: [
      {
        url: "/images/logo1.png",
        width: 1200,
        height: 630,
        alt: "Orinox Holding Energy Insights",
      },
    ],
    url: "https://orinoxholding.com/insights/",
    siteName: "Orinox Holding",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Energy Industry Insights & Technical Publications | Orinox",
    description: "Orinox Holding provides expert analysis and technical briefs on the US and global energy industry. Insights into upstream exploration and midstream logistics.",
    images: ["/images/logo1.png"],
  },
};

export default function InsightsPage() {
  return <InsightsClient />;
}

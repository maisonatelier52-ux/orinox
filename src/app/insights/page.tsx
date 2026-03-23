import type { Metadata } from "next";
import InsightsClient from "./insights-client";

export const metadata: Metadata = {
  title: "Energy Industry Insights & Technical Publications | Orinox",
  description: "Orinox Holding provides expert analysis and technical briefs on the US and global energy industry. Insights into upstream exploration and midstream logistics.",
  keywords: ["energy industry analysis USA", "petroleum technical briefs", "oil and gas market insights", "upstream exploration reports", "midstream logistics publications"],
  openGraph: {
    title: "Insights | Orinox Holding US",
    description: "Technical intelligence and strategic analysis for the energy sector.",
    images: ["/images/logo1.png"],
  },
};

export default function InsightsPage() {
  return <InsightsClient />;
}

import type { Metadata } from "next";
import InvestorsClient from "./investors-client";

export const metadata: Metadata = {
  title: "Investor Relations & Strategic Growth | Orinox Holding US",
  description: "Orinox Holding delivers superior investor value through technical leadership and disciplined capital efficiency in US energy markets. Explore our strategic growth framework.",
  keywords: ["energy investor relations USA", "petroleum capital efficiency", "energy sector ROI", "strategic growth petroleum", "Orinox investor portal"],
  openGraph: {
    title: "Investors | Orinox Holding US",
    description: "Technical mastery and financial transparency for the energy sector.",
    images: ["/images/logo1.png"],
  },
};

export default function InvestorsPage() {
  return <InvestorsClient />;
}

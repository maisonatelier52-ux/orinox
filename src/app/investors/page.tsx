import type { Metadata } from "next";
import InvestorsClient from "./investors-client";

export const metadata: Metadata = {
  title: "Investors | Strategic Growth & Capital Efficiency | US, Spain & UAE",
  description: "Orinox Holding delivers superior value through technical leadership and disciplined petroleum capital efficiency in US, Spain, and UAE energy markets.",
  keywords: [
    "energy investment UAE", "Dubai petroleum capital", "Spain energy sector ROI", "US petroleum investment",
    "petroleum drilling ROI Dubai", "Madrid energy capital"
  ],
  openGraph: {
    title: "Investors | Strategic Growth & Capital Efficiency | US, Spain & UAE",
    description: "Orinox Holding delivers superior value through technical leadership and disciplined petroleum capital efficiency in US, Spain, and UAE energy markets.",
    url: 'https://orinoxholding.com/investors/',
    type: 'website',
    images: ["/images/logo1.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investors | Strategic Growth & Capital Efficiency | US, Spain & UAE",
    description: "Orinox Holding delivers superior value through technical leadership and disciplined petroleum capital efficiency in US, Spain, and UAE energy markets.",
    images: ["/images/logo1.png"],
  },
};

export default function InvestorsPage() {
  return <InvestorsClient />;
}

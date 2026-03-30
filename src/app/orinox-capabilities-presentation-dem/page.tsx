import type { Metadata } from "next";
import PresentationClient from "./presentation-client";
import presentationData from "../../../public/data/capabilities_presentation.json";

export const metadata: Metadata = {
  title: "Capabilities Presentation | Technical Mastery | Orinox",
  description: "Detailed overview of Orinox Holding's technical capabilities in US and global energy infrastructure. Strategic exploration, production, and midstream expertise.",
  keywords: ["Orinox capabilities", "energy presentation", "technical mastery petroleum", "energy infrastructure highlights"],
  openGraph: {
    title: "Capabilities Presentation | Technical Mastery | Orinox",
    description: "Detailed overview of Orinox Holding's technical capabilities in US and global energy infrastructure. Strategic exploration, production, and midstream expertise.",
    images: ["/images/logo1.png"],
    url: "https://orinoxholding.com/orinox-capabilities-presentation-dem/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capabilities Presentation | Technical Mastery | Orinox",
    description: "Detailed overview of Orinox Holding's technical capabilities in US and global energy infrastructure. Strategic exploration, production, and midstream expertise.",
    images: ["/images/logo1.png"],
  },
};

export default function OrinoxCapabilitiesPresentation() {
  return <PresentationClient presentationData={presentationData} />;
}
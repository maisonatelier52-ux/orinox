import type { Metadata } from "next";
import PresentationClient from "./presentation-client";
import presentationData from "../../../public/data/capabilities_presentation.json";

export const metadata: Metadata = {
  title: "Capabilities Presentation | Technical Mastery | Orinox",
  description: "Detailed overview of Orinox Holding's technical capabilities in US and global energy infrastructure. Strategic exploration, production, and midstream expertise.",
  keywords: ["Orinox capabilities", "energy presentation", "technical mastery petroleum", "energy infrastructure highlights"],
};

export default function OrinoxCapabilitiesPresentation() {
  return <PresentationClient presentationData={presentationData} />;
}
import type { Metadata } from "next";
import TeamClient from "./team-client";

export const metadata: Metadata = {
  title: "Our Team | Leadership & Technical Advisory | US, Spain & UAE | Orinox",
  description: "Meet the Orinox Holding team. Strategic leaders and technical experts driving global energy innovation in petroleum drilling and strategic management across US, Spain, and UAE.",
  keywords: [
    "energy leadership UAE", "Dubai petroleum advisory", "Madrid technical experts", "US energy management",
    "petroleum drilling experts Spain", "upstream technical advisory Dubai"
  ],
  openGraph: {
    title: "Our Team | Global Leadership | Orinox Holding",
    description: "Technical mastery and strategic leadership in the global energy industry across US, Spain, and UAE.",
    images: ["/images/logo1.png"],
  },
};

export default function TeamPage() {
  return <TeamClient />;
}

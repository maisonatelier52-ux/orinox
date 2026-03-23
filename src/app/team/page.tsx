import type { Metadata } from "next";
import TeamClient from "./team-client";

export const metadata: Metadata = {
  title: "Our Team | Leadership & Technical Advisory | Orinox Holding",
  description: "Meet the Orinox Holding team. Strategic leaders and technical experts driving US energy innovation in upstream and midstream sectors.",
  keywords: ["energy leadership USA", "petroleum advisory team", "upstream technical experts", "midstream management", "Orinox leadership"],
  openGraph: {
    title: "Our Team | Orinox Holding US",
    description: "Technical mastery and strategic leadership in the energy industry.",
    images: ["/images/logo1.png"],
  },
};

export default function TeamPage() {
  return <TeamClient />;
}

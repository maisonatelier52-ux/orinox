import type { Metadata } from "next";
import OrinoxWebsiteClient from "./orinox-website-client";

export const metadata: Metadata = {
  title: "Global Energy Portfolio | Strategic Infrastructure | Orinox",
  description: "Explore Orinox Holding's comprehensive energy portfolio. From upstream exploration to midstream technical management, we drive innovation in the global petroleum sector.",
  keywords: ["energy portfolio US", "integrated infrastructure", "strategic energy leadership", "petroleum value chain", "Orinox global footprint"],
};

export default function OrinoxWebsitePage() {
  return <OrinoxWebsiteClient />;
}
import type { Metadata } from "next";
import OrinoxSplash from "@/components/OrinoxSplash";

export const metadata: Metadata = {
  title: "Orinox Holding | Global Energy Infrastructure Splash",
  description: "Orinox Holding manages strategic petroleum infrastructure across global energy corridors including London, Dubai, Caracas, and Madrid.",
  keywords: ["Orinox Holding", "energy infrastructure", "petroleum splash page", "global energy corridors"],
};

export default function Home() {
  return <OrinoxSplash />;
}

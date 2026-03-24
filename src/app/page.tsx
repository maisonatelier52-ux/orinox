import type { Metadata } from "next";
import OrinoxSplash from "@/components/OrinoxSplash";

export const metadata: Metadata = {
  title: "Orinox Holding | Energy Infrastructure US, Spain & UAE",
  description: "Global energy leader specializing in petroleum drilling, upstream, and midstream infrastructure across US, Spain, and UAE (Dubai).",
  keywords: [
    "Orinox Holding", "petroleum drilling", "upstream services", "midstream logistics",
    "US energy infrastructure", "UAE petroleum services", "Dubai energy operations", "Spain energy sector"
  ],
};

export default function Home() {
  return <OrinoxSplash />;
}

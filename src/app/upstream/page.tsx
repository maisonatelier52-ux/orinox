import type { Metadata } from "next";
import UpstreamClient from "./upstream-client";

export const metadata: Metadata = {
  title: "Upstream Exploration & Production Services | US, Spain & UAE | Orinox",
  description: "Advanced upstream energy solutions. Our experts in the US and Dubai provide technical petroleum services, including seismic modeling and drilling for global energy fields.",
  keywords: [
    "upstream exploration US", "oil drilling services Dubai", "E&P technical services UAE", "drilling infrastructure Spain",
    "petroleum exploration Madrid", "energy development Dubai", "exploration and production services"
  ],
  openGraph: {
    title: "Upstream E&P Services | Orinox Holding",
    description: "Technical mastery in global upstream petroleum exploration and drilling from US to UAE.",
    images: ["/images/logo1.png"],
  },
};

export default function UpstreamPage() {
  return <UpstreamClient />;
}

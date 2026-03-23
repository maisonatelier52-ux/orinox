import type { Metadata } from "next";
import UpstreamClient from "./upstream-client";

export const metadata: Metadata = {
  title: "Upstream Exploration & Production Services | Orinox Holding US",
  description: "Advanced upstream energy solutions. Our US-based experts provide technical petroleum services, including seismic modeling and exploration for North American oil fields.",
  keywords: ["upstream exploration US", "oil drilling services North America", "E&P technical services", "drilling infrastructure"],
  openGraph: {
    title: "Upstream E&P Services | Orinox Holding",
    description: "Technical mastery in US upstream petroleum exploration.",
    images: ["/images/logo1.png"],
  },
};

export default function UpstreamPage() {
  return <UpstreamClient />;
}

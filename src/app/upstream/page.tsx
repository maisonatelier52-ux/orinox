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
    title: "Upstream Exploration & Production Services | US, Spain & UAE | Orinox",
    description: "Advanced upstream energy solutions. Our experts in the US and Dubai provide technical petroleum services, including seismic modeling and drilling for global energy fields.",
    images: ["/images/logo1.png"],
    url: "https://orinoxholding.com/upstream/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upstream Exploration & Production Services | US, Spain & UAE | Orinox",
    description: "Advanced upstream energy solutions. Our experts in the US and Dubai provide technical petroleum services, including seismic modeling and drilling for global energy fields.",
    images: ["/images/logo1.png"],
  },
};

export default function UpstreamPage() {
  return <UpstreamClient />;
}

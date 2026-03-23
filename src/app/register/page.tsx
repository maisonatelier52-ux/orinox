import type { Metadata } from "next";
import RegisterPageClient from "./register-client";

export const metadata: Metadata = {
    title: "Institutional Registration | Orinox Holding US",
    description: "Request institutional access to the Orinox Holding energy infrastructure network. Connect your US-based energy operations to our global strategic platform.",
    keywords: ["institutional registration", "energy portal access", "US petroleum network", "energy sector partnership", "Orinox registration"],
    robots: {
        index: false,
        follow: false,
    },
};

export default function RegisterPage() {
    return <RegisterPageClient />;
}

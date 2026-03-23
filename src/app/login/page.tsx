import type { Metadata } from "next";
import LoginPageClient from "./login-client";

export const metadata: Metadata = {
    title: "Secure Client Login | Orinox Holding US",
    description: "Access the Orinox Holding secure client portal. US energy infrastructure management and real-time operational dashboard for institutional partners.",
    keywords: ["secure login", "client portal", "energy sector dashboard", "institutional access", "Orinox login"],
    robots: {
        index: false,
        follow: false,
    },
};

export default function LoginPage() {
    return <LoginPageClient />;
}

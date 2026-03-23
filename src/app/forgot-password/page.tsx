import type { Metadata } from "next";
import ForgotPasswordClient from "./forgot-password-client";

export const metadata: Metadata = {
    title: "Access Key Recovery | Orinox Holding US",
    description: "Orinox Holding secure access recovery protocol. Reset your institutional security key to restore access to our global energy infrastructure dashboard.",
    keywords: ["password recovery", "access key reset", "secure protocol", "institutional security", "Orinox recovery"],
    robots: {
        index: false,
        follow: false,
    },
};

export default function ForgotPasswordPage() {
    return <ForgotPasswordClient />;
}

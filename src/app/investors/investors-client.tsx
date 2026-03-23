"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Orinox from "@/components/Orinox";
import InvestorsHero from "@/components/InvestorsHero";
import StrategicFoundations from "@/components/StrategicFoundations";
import StrategicFramework from "@/components/StrategicFramework";
import GovernanceMastery from "@/components/GovernanceMastery";
import InvestorContactSection from "@/components/InvestorContactSection";
import Footer from "@/components/Footer";

const fadeUp: Variants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
};

const anim = (delay: number = 0) => ({
    variants: fadeUp,
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true },
    transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
    }
});

export default function InvestorsClient() {
    return (
        <div className="flex flex-col bg-black overflow-hidden">
            {/* Navigation */}
            <Orinox />

            {/* Hero Section */}
            <InvestorsHero />

            {/* Strategic Foundations Section */}
            <StrategicFoundations />

            {/* Strategic Framework Section */}
            <StrategicFramework />

            {/* Governance Mastery Section */}
            <GovernanceMastery />

            {/* Contact & Technical Brief Section */}
            <InvestorContactSection />

            {/* Global Footer (Standard across pages) */}
            <Footer />
        </div>
    );
}

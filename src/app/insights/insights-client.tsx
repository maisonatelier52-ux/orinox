"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Orinox from "@/components/Orinox";
import InsightsHero from "@/components/InsightsHero";
import TechnicalPublicationsGrid from "@/components/TechnicalPublicationsGrid";
import StrategicEnergyInsights from "@/components/StrategicEnergyInsights";
import TechnicalBriefsTransition from "@/components/TechnicalBriefsTransition";
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

export default function InsightsClient() {
    return (
        <div className="flex flex-col bg-black overflow-hidden">
            {/* Navigation */}
            <Orinox />

            {/* Hero Section */}
            <InsightsHero />

            {/* Publications Grid */}
            <TechnicalPublicationsGrid />

            {/* Intelligence Bureau Section */}
            <StrategicEnergyInsights />

            {/* Briefs Transition / Footer Section */}
            <TechnicalBriefsTransition />

            {/* Global Footer (Standard across pages) */}
            <Footer />
        </div>
    );
}

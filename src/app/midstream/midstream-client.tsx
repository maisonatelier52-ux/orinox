"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Orinox from "@/components/Orinox";
import MidstreamPageHero from "@/components/MidstreamPageHero";
import MidstreamCore from "@/components/MidstreamCore";
import MidstreamTechnology from "@/components/MidstreamTechnology";
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

export default function MidstreamClient() {
    return (
        <div className="flex flex-col bg-black overflow-hidden">
            {/* Navigation */}
            <Orinox />

            {/* Hero Section */}
            <MidstreamPageHero />

            {/* Core Assets Section */}
            <MidstreamCore />

            {/* Technology Integration Section */}
            <MidstreamTechnology />

            {/* Global Footer (Standard across pages) */}
            <Footer />
        </div>
    );
}

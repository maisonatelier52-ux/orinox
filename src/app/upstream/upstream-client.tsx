"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Orinox from "@/components/Orinox";
import UpstreamHero from "@/components/UpstreamHero";
import UpstreamCapabilities from "@/components/UpstreamCapabilities";
import UpstreamTechnology from "@/components/UpstreamTechnology";
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

export default function UpstreamClient() {
    return (
        <div className="flex flex-col bg-black overflow-hidden">
            {/* Navigation */}
            <Orinox />

            {/* Hero Section */}
            <UpstreamHero />

            {/* Capabilities Section */}
            <UpstreamCapabilities />

            {/* Technology Integration Section */}
            <UpstreamTechnology />

            {/* Global Footer (Standard across pages) */}
            <Footer />
        </div>
    );
}

"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Orinox from "@/components/Orinox";
import ContractsHero from "@/components/ContractsHero";
import ContractFrameworks from "@/components/ContractFrameworks";
import RigFleetSection from "@/components/RigFleetSection";
import StrategicCapital from "@/components/StrategicCapital";
import ESGImperative from "@/components/ESGImperative";
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

export default function ContractsClient() {
    return (
        <div className="flex flex-col bg-black overflow-hidden">
            <Orinox />

            <ContractsHero />
            <ContractFrameworks />
            <RigFleetSection />
            <StrategicCapital />
            <ESGImperative />

            {/* Global Footer */}
            <Footer />
        </div>
    );
}

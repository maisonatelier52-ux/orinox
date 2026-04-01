"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Orinox from "@/components/Orinox";
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

export default function OrinoxServicesClient() {
    const capabilities = [
        {
            title: "Advanced Seismic Analysis",
            description: "Deep-earth seismic imaging and geological modeling to identify high-potential hydrocarbon reservoirs with pinpoint accuracy and reduced environmental impact. Our high-fidelity datasets minimize exploration risk and maximize capital efficiency, translating directly to reduced drilling uncertainty and accelerated discovery timelines."
        },
        {
            title: "Precision Drilling Operations",
            description: "Utilizing state-of-the-art automated rigs and real-time digital monitoring to ensure safe, efficient well construction even in the most challenging terrains. AI-enabled geosteering significantly reduces non-productive time (NPT) by up to 30%, maximizing ROI in the most complex high-pressure environments."
        },
        {
            title: "Enhanced Oil Recovery",
            description: "Innovative secondary and tertiary recovery methods designed to maximize asset longevity and optimize extraction efficiency from mature oil fields. Strategic injection technologies unlock stranded reserves and extend economic field life, ensuring sustainable production growth and verifiable asset ROI."
        }
    ];

    return (
        <div className="flex flex-col bg-black overflow-hidden">
            <Orinox />

            {/* 1. UPSTREAM CAPABILITIES HERO */}
            <section className="relative h-screen w-full flex flex-col">
                {/* Top Image Section */}
                <div className="relative h-[65%] w-full">
                    <img
                        src="/images/appraisal-and-field-evalution.png"
                        alt="Offshore Rig and Engineers"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Bottom Content Section */}
                <div className="relative h-[35%] w-full bg-black px-6 md:px-32 flex flex-col justify-center py-12">
                    {/* Decorative Top Border */}
                    {/* Heading */}
                    <motion.h1
                        {...anim(0.1)}
                        className="text-white text-2xl md:text-2xl font-bold tracking-tight mb-4"
                    >
                        Upstream Capabilities
                    </motion.h1>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-12">
                        {capabilities.map((cap, idx) => (
                            <motion.div
                                key={idx}
                                {...anim(0.2 + idx * 0.1)}
                                className="space-y-4"
                            >
                                <h2 className="text-white/70 text-[15px] font-bold tracking-normal">
                                    {cap.title}
                                </h2>
                                <p className="text-white/60 text-[13px] leading-relaxed font-light">
                                    {cap.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. PRECISION MIDSTREAM OPERATIONS */}
            <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between bg-black px-6 md:px-32 py-24">
                <img
                    src="/images/transportation-and-storage.png"
                    alt="Midstream Operations"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                {/* Top Content */}
                <div className="relative z-10 max-w-2xl mt-12">
                    <motion.div {...anim(0.1)} className="space-y-1 mb-8">
                        <p className="text-white/80 text-[12px] md:text-[14px] leading-relaxed font-light mb-8">
                            Orinox Holding optimizes the transit and storage of critical hydrocarbon assets, integrating advanced logistics with unmatched technical reliability.
                        </p>
                        <h2 className="text-white text-2xl md:text-2xl font-bold tracking-tight">
                            Precision Midstream Operations
                        </h2>
                        <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight opacity-90">
                            Strategic Distribution Network
                        </h3>
                    </motion.div>

                    <motion.p {...anim(0.3)} className="text-white/80 text-[13px] md:text-[14px] leading-relaxed font-light max-w-lg mt-6">
                        Our midstream infrastructure is engineered for maximum throughput and safety.
                        By utilizing intelligent pipeline arrays and modular storage solutions, we bridge
                        the gap between production and the global market. Our systems feature real-time
                        leak detection and automated pressure management, ensuring energy flow is
                        secured 24/7 across all processing terminals.
                    </motion.p>
                </div>

                {/* Bottom Stats */}
                <div className="relative z-10 flex flex-wrap gap-x-16 gap-y-8">
                    <motion.div {...anim(0.5)} className="space-y-1">
                        <h4 className="text-white/80 text-3xl md:text-4xl font-bold tracking-tight">15,000+</h4>
                        <p className="text-white/60 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium">
                            Miles of Pipeline
                        </p>
                    </motion.div>
                    <motion.div {...anim(0.6)} className="space-y-1">
                        <h4 className="text-white/80 text-3xl md:text-4xl font-bold tracking-tight">1.2M</h4>
                        <p className="text-white/60 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium">
                            Storage Capacity
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 3. FOOTER */}
            <Footer />
        </div>
    );
}

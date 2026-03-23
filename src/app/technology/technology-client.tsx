"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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

export default function TechnologyClient() {
    return (
        <div className="flex flex-col bg-black overflow-hidden">
            {/* Navigation */}
            <Orinox />

            {/* Hero Section (The Digital Delta) */}
            <section className="relative w-full min-h-screen bg-black flex items-center pt-32 lg:pt-20 px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left Content Side */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center py-12 lg:py-0">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-2xl"
                        >
                            <h1 className="text-4xl md:text-3xl lg:text-3xl font-bold text-white leading-[1.1] mb-8">
                                The Digital Delta
                            </h1>

                            <p className="text-white/70 text-[12px] md:text-[13px] leading-relaxed mb-10 max-w-lg">
                                Orinox's Digital Delta infrastructure synchronizes upstream exploration data with midstream logistics.
                                By leveraging real-time telemetry and predictive analytics, we ensure operational resilience
                                and zero-latency decision-making across global petroleum assets.
                            </p>

                            <Link href="/login"><motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black px-10 py-3 text-[12px] font-normal tracking-wider rounded-sm transition-colors hover:bg-gray-200"
                            >
                                View Stack
                            </motion.button></Link>
                        </motion.div>
                    </div>

                    {/* Right Image Side */}
                    <div className="w-full h-screen lg:w-1/2 relative aspect-square lg:aspect-[4/4] overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, clipPath: 'inset(0 0 0 100%)', scale: 1.1 }}
                            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0%)', scale: 1 }}
                            transition={{ duration: 4.5, ease: [0.19, 1, 0.22, 1] }}
                            className="h-full w-full"
                        >
                            <Image
                                src="/images/digital-delta.png"
                                alt="Digital Delta Infrastructure"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Subtle overlay for depth */}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Engineered for Technical Resilience Section */}
            <section className="relative w-full min-h-screen bg-black flex items-center py-20 px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Image Side */}
                    <div className="w-full h-screen lg:w-1/2 relative aspect-[3/4] overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0 )' }}
                            whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0%)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 4.5, ease: [0.19, 1, 0.22, 1] }}
                            className="h-full w-full"
                        >
                            <Image
                                src="/images/e and ps1.jpg"
                                alt="Offshore Drilling Rig at Sunset"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Right Content Side */}
                    <div className="w-full lg:w-1/2 flex flex-col pt-15 justify-center">
                        <motion.div
                            {...anim(0.1)}
                            className="max-w-xl"
                        >
                            <h2 className="text-3xl lg:text-3xl font-bold text-white mb-4">
                                Engineered for Technical Resilience
                            </h2>
                            <p className="text-white/70 text-[12px] md:text-[13px] leading-relaxed mb-12">
                                Orinox synchronizes high-spec infrastructure with proprietary analytics to drive efficiency
                                across every upstream and midstream operation.
                            </p>

                            <div className="space-y-10 mb-12">
                                {[
                                    {
                                        title: "Automated Rig Fleet",
                                        desc: "Utilizing Tier 1 engineering and automated drilling control systems to maximize unit performance while reducing environmental footprint."
                                    },
                                    {
                                        title: "Predictive Telemetry Stack",
                                        desc: "Real-time data integration across global regions, providing investors with transparent operational metrics and infrastructure security."
                                    },
                                    {
                                        title: "ESG-Integrated Framework",
                                        desc: "Commitment to sustainability through precision engineering that minimizes leakage and optimizes resource recovery in sensitive basins."
                                    }
                                ].map((point, index) => (
                                    <motion.div
                                        key={index}
                                        {...anim(0.2 + index * 0.1)}
                                        className="flex flex-col space-y-2"
                                    >
                                        <h3 className="text-white text-[15px] font-bold tracking-tight">
                                            {point.title}
                                        </h3>
                                        <p className="text-white/60 text-[12px] md:text-[13px] leading-relaxed">
                                            {point.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            <Link href="/login"><motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black px-10 py-3 text-[12px] font-normal tracking-wider rounded-sm w-fit transition-colors hover:bg-gray-200"
                            >
                                Technical Specs
                            </motion.button></Link>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Strategic Growth & Investor Framework Section */}
            <section className="relative w-full min-h-screen bg-black flex items-center py-20 px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content Side */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
                        <motion.div
                            {...anim(0.1)}
                            className="max-w-xl"
                        >
                            <h2 className="text-3xl lg:text-3xl font-bold text-white mb-6">
                                Strategic Growth & <br className="hidden lg:block" /> Investor Framework
                            </h2>
                            <p className="text-white/70 text-[12px] md:text-[13px] leading-relaxed mb-12">
                                Driving sustainable value through technical leadership and disciplined capital
                                efficiency across global markets.
                            </p>

                            <div className="space-y-6 mb-8">
                                {[
                                    {
                                        title: "Capital Efficiency",
                                        desc: "Allocation strategies focused on high-yield upstream assets and resilient midstream infrastructure networks."
                                    },
                                    {
                                        title: "Operational Scalability",
                                        desc: "Infrastructure systems designed for rapid deployment and integration across emerging energy regions."
                                    },
                                    {
                                        title: "Technical Integrity",
                                        desc: "Maintaining 99.9% operational uptime through advanced predictive R&D and rigorous engineering standards."
                                    }
                                ].map((point, index) => (
                                    <motion.div
                                        key={index}
                                        {...anim(0.2 + index * 0.1)}
                                        className="flex flex-col space-y-2"
                                    >
                                        <h3 className="text-white text-[15px] font-bold tracking-tight">
                                            {point.title}
                                        </h3>
                                        <p className="text-white/40 text-[12px] md:text-[13px] leading-relaxed group-hover:text-white/60 transition-colors">
                                            {point.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            <Link href="/login"><motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black px-12 py-3 text-[12px] font-normal tracking-wider rounded-sm w-fit transition-colors hover:bg-gray-200"
                            >
                                Investor Portal
                            </motion.button></Link>
                        </motion.div>
                    </div>

                    {/* Right Image Side */}
                    <div className="w-full h-screen lg:w-1/2 relative aspect-[4/5] lg:aspect-[3/4]  overflow-hidden order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, clipPath: 'inset(0 0 0 100%)' }}
                            whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0%)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 4.5, ease: [0.19, 1, 0.22, 1] }}
                            className="h-full w-full saturate-50"
                        >
                            <Image
                                src="/images/investor-framework.png"
                                alt="Modern Corporate Architecture"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Environmental Social Governance & Operational Safety Section */}
            <section className="relative w-full min-h-screen bg-black flex items-center py-20 px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content Side */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
                        <motion.div
                            {...anim(0.1)}
                            className="max-w-xl"
                        >
                            <h2 className="text-3xl lg:text-3xl font-bold text-white mb-8">
                                Environmental Social Governance & <br className="hidden lg:block" /> Operational Safety
                            </h2>
                            <p className="text-white/70 text-[12px] md:text-[13px] leading-relaxed mb-10">
                                Orinox Holding maintains a zero-incident culture through rigorous technical governance and
                                real-time risk mitigation. We align our operations with IOGP guidelines and UN Sustainable
                                Development Goals, ensuring long-term value for investors and stakeholders.
                            </p>

                            <ul className="space-y-4 mb-12">
                                {[
                                    { title: "Safety", desc: "Full ISO 45001 & 14001 certification across all managed assets." },
                                    { title: "Sustainability", desc: "Targeting 25% reduction in carbon intensity by 2030." },
                                    { title: "Transparency", desc: "Investor-ready ESG reporting with board-level oversight." },
                                    { title: "Reliability", desc: "Predictive maintenance frameworks reducing environmental spill risks." }
                                ].map((point, index) => (
                                    <motion.li
                                        key={index}
                                        {...anim(0.2 + index * 0.1)}
                                        className="flex items-start text-white/50 text-[12px] md:text-[13px] leading-relaxed"
                                    >
                                        <span className="mr-3 text-white/30">•</span>
                                        <div className="group">
                                            <span className="text-white/70 font-semibold group-hover:text-white transition-colors">{point.title}: </span>
                                            {point.desc}
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>

                            <Link href="/login"><motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black px-10 py-3 text-[11px] font-normal tracking-wider rounded-sm w-fit transition-colors hover:bg-gray-200"
                            >
                                View ESG Report
                            </motion.button></Link>
                        </motion.div>
                    </div>

                    {/* Right Image Side */}
                    <div className="w-full h-screen lg:w-1/2 relative aspect-square lg:aspect-[4/5] overflow-hidden order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, clipPath: 'inset(0 0 0 100%)' }}
                            whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0%)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 4.5, ease: [0.19, 1, 0.22, 1] }}
                            className="h-full w-full"
                        >
                            <Image
                                src="/images/oil-and-gas-processing.png"
                                alt="Environmental Safety Infrastructure"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Technical Infrastructure Section */}
            <section className="relative w-full min-h-screen bg-black flex items-center py-20 px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Image Side */}
                    <div className="w-full h-screen lg:w-1/2 relative aspect-square lg:aspect-[4/5] overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
                            whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0%)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 4.5, ease: [0.19, 1, 0.22, 1] }}
                            className="h-full w-full"
                        >
                            <Image
                                src="/images/tech-stack.jpg"
                                alt="Orinox Technical Control Center"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Right Content Side */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <motion.div
                            {...anim(0.1)}
                            className="max-w-xl"
                        >
                            <span className="text-white/40 text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase mb-4 block">
                                TECHNICAL INFRASTRUCTURE
                            </span>
                            <h2 className="text-3xl lg:text-3xl font-bold text-white mb-8 tracking-tight">
                                The Orinox Tech Stack & Strategy
                            </h2>
                            <p className="text-white/30 text-[13px] md:text-[14px] leading-relaxed mb-12">
                                We integrate cutting-edge technical infrastructure with rigorous industry standards to
                                redefine upstream efficiency. Our strategy focuses on operational transparency and
                                high-precision telemetry.
                            </p>

                            <ul className="space-y-6 mb-12">
                                {[
                                    { title: "Predictive Maintenance", desc: "AI algorithms reducing technical downtime." },
                                    { title: "Integrated Midstream Cloud", desc: "Real-time logistics and safety monitoring." },
                                    { title: "Strategic Compliance", desc: "Tech-backed adherence to ISO global safety standards." }
                                ].map((point, index) => (
                                    <motion.li
                                        key={index}
                                        {...anim(0.2 + index * 0.1)}
                                        className="flex items-start text-white/70 text-[13px] md:text-[14px] leading-relaxed"
                                    >
                                        <span className="mr-3 text-white/30 mt-1">•</span>
                                        <div>
                                            <span className="text-white font-bold">{point.title}: </span>
                                            {point.desc}
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>

                            <Link href="/login"><motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black px-12 py-3 text-[12px] font-normal tracking-wider rounded-sm w-fit transition-colors hover:bg-gray-200"
                            >
                                Technical Inquiry
                            </motion.button></Link>
                        </motion.div>
                    </div>

                </div>
            </section>

            {/* Global Footer (Standard across pages) */}
            <Footer />
        </div>
    );
}

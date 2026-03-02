"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Orinox from "@/components/Orinox";

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

export default function OrinoxServices() {
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
                        src="/images/exploration-services.png"
                        alt="Offshore Rig and Engineers"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Bottom Content Section */}
                <div className="relative h-[35%] w-full bg-black px-6 md:px-32 flex flex-col justify-center py-12">
                    {/* Decorative Top Border */}
                    <div className="absolute top-0 left-6 md:left-32 right-6 md:right-32 h-[1px] bg-white/20" />

                    {/* Heading */}
                    <motion.h1
                        {...anim(0.1)}
                        className="text-white text-2xl md:text-2xl font-bold tracking-tight mb-6"
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
                                <h3 className="text-white/70 text-[15px] font-bold tracking-normal">
                                    {cap.title}
                                </h3>
                                <p className="text-white/60 text-[13px] leading-relaxed font-light">
                                    {cap.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. STRATEGIC MIDSTREAM SOLUTIONS */}
            <section className="relative min-h-screen w-full bg-black flex flex-col lg:flex-row border-t border-white/10">
                {/* Left: Image Block */}
                <div className="lg:w-1/2 relative h-[50vh] lg:h-auto order-2 lg:order-1">
                    <img
                        src="/images/transportation-and-storage.png"
                        alt="Midstream Pipeline Infrastructure"
                        className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Right: Content Block */}
                <div className="lg:w-1/2 px-6 md:px-20 py-20 flex flex-col justify-center order-1 lg:order-2">
                    <motion.div {...anim(0.1)} className="space-y-6">
                        <p className="text-white/60 text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium">
                            Midstream Operations
                        </p>
                        <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                            Strategic Midstream<br />Logistics & Storage
                        </h1>
                        <p className="text-white/70 text-[14px] leading-relaxed max-w-xl font-light">
                            We engineer and manage high-capacity infrastructure for the safe, efficient movement of energy resources. Our midstream solutions bridge the gap between extraction and market delivery with uncompromising reliability.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 mt-16">
                        <motion.div {...anim(0.3)} className="space-y-3">
                            <h3 className="text-white text-[14px] font-bold">Gathering & Transportation</h3>
                            <p className="text-white/60 text-[13px] leading-relaxed font-light">
                                Advanced pipeline network management and multi-modal transport logistics ensuring seamless delivery cycles.
                            </p>
                        </motion.div>
                        <motion.div {...anim(0.4)} className="space-y-3">
                            <h3 className="text-white text-[14px] font-bold">Processing & Treatment</h3>
                            <p className="text-white/60 text-[13px] leading-relaxed font-light">
                                Modular processing units designed for rapid deployment and optimized yield across diverse resource grades.
                            </p>
                        </motion.div>
                        <motion.div {...anim(0.5)} className="space-y-3">
                            <h3 className="text-white text-[14px] font-bold">Strategic Storage</h3>
                            <p className="text-white/60 text-[13px] leading-relaxed font-light">
                                Secure, technical-grade storage infrastructure with real-time inventory tracking and safety monitoring.
                            </p>
                        </motion.div>
                        <motion.div {...anim(0.6)} className="space-y-3">
                            <h3 className="text-white text-[14px] font-bold">Market Access</h3>
                            <p className="text-white/60 text-[13px] leading-relaxed font-light">
                                Integrated offtake management and strategic positioning to maximize commodity valuation and liquidity.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. TECHNICAL MANAGEMENT & ASSET INTEGRITY */}
            <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-center px-6 md:px-32 border-t border-white/10 overflow-hidden">
                {/* Immersive Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/onshore-offshore-integrated-solutions.png"
                        alt="Technical Infrastructure"
                        className="h-full w-full object-cover scale-110"
                    />
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-[4px]" />
                </div>

                <div className="relative z-10 max-w-4xl space-y-8">
                    <motion.div {...anim(0.1)} className="space-y-4">
                        <p className="text-white/60 text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium">
                            Operational Excellence
                        </p>
                        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                            Technical Management &<br />Asset Integrity
                        </h1>
                    </motion.div>

                    <motion.p {...anim(0.3)} className="text-white/70 text-[16px] md:text-[18px] leading-relaxed font-light max-w-2xl mx-auto">
                        Our technical oversight ensures that multi-billion dollar energy assets operate at peak efficiency while adhering to the most stringent global safety and environmental standards.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-16 text-left">
                        <motion.div {...anim(0.4)} className="space-y-3">
                            <div className="h-[2px] w-8 bg-white/40 mb-4" />
                            <h3 className="text-white text-[15px] font-bold">Predictive Maintenance</h3>
                            <p className="text-white/60 text-[13px] leading-relaxed font-light">
                                Digital twin technology and real-time sensor data used to anticipate maintenance needs and eliminate costly unplanned downtime.
                            </p>
                        </motion.div>
                        <motion.div {...anim(0.5)} className="space-y-3">
                            <div className="h-[2px] w-8 bg-white/40 mb-4" />
                            <h3 className="text-white text-[15px] font-bold">Lifecycle Management</h3>
                            <p className="text-white/60 text-[13px] leading-relaxed font-light">
                                Comprehensive strategic planning from initial appraisal through to late-life services and sustainable decommissioning.
                            </p>
                        </motion.div>
                        <motion.div {...anim(0.6)} className="space-y-3">
                            <div className="h-[2px] w-8 bg-white/40 mb-4" />
                            <h3 className="text-white text-[15px] font-bold">Compliance & Safety</h3>
                            <p className="text-white/60 text-[13px] leading-relaxed font-light">
                                Rigorous regulatory auditing and risk mitigation frameworks that define the highest standard of petroleum sector safety.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. MARKETING & COMMERCIAL MANAGEMENT */}
            <section className="relative min-h-screen w-full bg-black flex items-center justify-end px-6 md:px-32 border-t border-white/10 overflow-hidden">
                {/* Thematic Visual */}
                <div className="absolute top-0 left-0 w-full lg:w-2/3 h-full z-0 overflow-hidden">
                    <img
                        src="/images/marketing-and-offtaking-management.png"
                        alt="Commercial Operations"
                        className="h-full w-full object-cover opacity-50 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black" />
                </div>

                <div className="relative z-10 max-w-2xl text-right flex flex-col items-end">
                    <motion.div {...anim(0.1)} className="space-y-4">
                        <p className="text-white/60 text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium">
                            Commercial Optimization
                        </p>
                        <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                            Marketing &<br />Commercial Delivery
                        </h1>
                    </motion.div>

                    <motion.p {...anim(0.3)} className="mt-8 text-white/70 text-[14px] md:text-[16px] leading-relaxed font-light max-w-md">
                        Our commercial strategy team identifies market dislocations and optimizes offtake logistics to ensure that the resources managed by Orinox achieve maximum realized value in global markets.
                    </motion.p>

                    <div className="grid grid-cols-1 gap-12 mt-16">
                        <motion.div {...anim(0.4)} className="space-y-3 flex flex-col items-end">
                            <h3 className="text-white text-[15px] font-bold">Trading & Logistics Coordination</h3>
                            <p className="text-white/60 text-[13px] leading-relaxed font-light text-right">
                                Managing complex multi-jurisdictional supply chains with precision timing to navigate market volatility and pricing fluctuations.
                            </p>
                        </motion.div>
                        <motion.div {...anim(0.5)} className="space-y-3 flex flex-col items-end">
                            <h3 className="text-white text-[15px] font-bold">Commodity Value Enhancement</h3>
                            <p className="text-white/60 text-[13px] leading-relaxed font-light text-right">
                                Utilizing proprietary analytics and quality-control frameworks to refine resource positioning and strengthen commercial leverage.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 5. FOOTER */}
            <footer className="relative min-h-screen md:h-screen w-full bg-black overflow-auto md:overflow-hidden px-6 md:px-32 pt-12 flex flex-col justify-between border-t border-white/10">
                <img
                    src="/images/first-well-to-low-carbon-evacuation-route.png"
                    alt="Offshore Rig"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />

                <div className="relative z-20 flex flex-col space-y-12 lg:space-y-16">
                    {/* Top content: Detailed Descriptions */}
                    <motion.div {...anim(0.1)} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32">
                        <div className="max-w-md">
                            <p className="text-white/60 text-[13px] md:text-[14px] leading-relaxed font-light">
                                Orinox Holding manages an integrated delivery ecosystem supported by experienced professionals, senior engineers, specialist consultants, and trusted contractor partners, with strong access to legacy systems, technical expertise, and critical project resources.
                            </p>
                        </div>
                        <div className="max-w-md">
                            <p className="text-white/60 text-[13px] md:text-[14px] leading-relaxed font-light">
                                Orinox Holding was formed to advance the strategic development and efficient execution of capital-intensive projects and essential infrastructure upgrades across the upstream and midstream petroleum sectors.
                            </p>
                        </div>
                    </motion.div>

                    {/* Logo and Nav Grid */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                        <motion.div {...anim(0.25)} className="flex items-center">
                            <img src="/images/orinox-white-logo.png" alt="Orinox" className="h-12 lg:h-14 w-auto object-contain" />
                        </motion.div>

                        <motion.div {...anim(0.35)} className="grid grid-cols-2 md:grid-cols-3 gap-x-12 lg:gap-x-32 gap-y-8 text-white">
                            {/* Col 1 */}
                            <div className="flex flex-col space-y-3">
                                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors decoration-white/30 underline-offset-4">About</Link>
                                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors decoration-white/30 underline-offset-4">Regions</Link>
                                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors decoration-white/30 underline-offset-4">Investors</Link>
                                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors decoration-white/30 underline-offset-4">Insights</Link>
                            </div>
                            {/* Col 2 */}
                            <div className="flex flex-col space-y-3">
                                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors decoration-white/30 underline-offset-4">Services</Link>
                                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors decoration-white/30 underline-offset-4">Technology</Link>
                                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors decoration-white/30 underline-offset-4">Case Studies</Link>
                                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors decoration-white/30 underline-offset-4">Contact</Link>
                            </div>
                            {/* Col 3 */}
                            <div className="flex flex-col space-y-3">
                                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors decoration-white/30 underline-offset-4">Operations</Link>
                                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors decoration-white/30 underline-offset-4">ESG</Link>
                                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors decoration-white/30 underline-offset-4">Team</Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Global Offices Section */}
                <div className="relative z-20 mt-12 md:mt-16">
                    <motion.h4 {...anim(0.5)} className="text-[14px] font-bold tracking-widest text-white mb-6 md:mb-8">GLOBAL OFFICES</motion.h4>
                    <motion.div {...anim(0.6)} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
                        <div>
                            <h5 className="text-[13px] font-bold text-white mb-1">United Kingdom</h5>
                            <p className="text-[12px] text-white/70 leading-relaxed font-light uppercase">Level 28, 52 Lime Street,<br className="hidden md:block" />London, EC3M 7AF,<br className="hidden md:block" />United Kingdom</p>
                        </div>
                        <div>
                            <h5 className="text-[13px] font-bold text-white mb-1">United Arab Emirates</h5>
                            <p className="text-[12px] text-white/70 leading-relaxed font-light uppercase">Vila 145, Al Manara Street,<br className="hidden md:block" />Al Safa 2, Dubai,<br className="hidden md:block" />United Arab Emirates</p>
                        </div>
                        <div>
                            <h5 className="text-[13px] font-bold text-white mb-1">Venezuela</h5>
                            <p className="text-[12px] text-white/70 leading-relaxed font-light uppercase">Edificio Epsilon CIIP<br className="hidden md:block" />3 Avenida Venezuela,<br className="hidden md:block" />Caracas 1060,<br className="hidden md:block" />Distrito Capital Piso 7</p>
                        </div>
                        <div>
                            <h5 className="text-[13px] font-bold text-white mb-1">Madrid</h5>
                            <p className="text-[12px] text-white/70 leading-relaxed font-light uppercase">Plaza de la Independencia 8,<br className="hidden md:block" />Piso 3<br className="hidden md:block" />Madrid, Spain</p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-20 py-8 border-t border-white/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[12px] md:text-[13px] text-white/70 tracking-wider">© 2026 Orinox Holding</p>
                        <div className="flex gap-8 md:gap-12">
                            <Link href="/" className="text-[12px] md:text-[13px] text-white/70 hover:text-white transition-colors">Terms of Use</Link>
                            <Link href="/" className="text-[12px] md:text-[13px] text-white/70 hover:text-white transition-colors">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

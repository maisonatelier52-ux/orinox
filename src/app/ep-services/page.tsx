"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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


const heroPoints = [
    "Technical Exploration & Seismic Mastery",
    "High-Performance Production Infrastructure",
    "Tier-1 Operational Safety Protocols",
    "Strategic Global Partnership Frameworks",
];


export default function EPServicesPage() {
    return (
        <div className="flex flex-col bg-black overflow-hidden">
            {/* Navigation */}
            <Orinox />

            {/* Hero Section (E&P Services) */}
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
                            <h1 className="text-4xl md:text-2xl lg:text-3xl font-bold text-white leading-[1.1] mb-8">
                                Precision E&P Services <br />
                                for Global Energy <br />
                                Frontiers
                            </h1>

                            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
                                Orinox Holding integrates deep upstream expertise with an uncompromising focus on safety
                                and technological reliability, delivering the infrastructure and partnerships required
                                for high-integrity exploration and production.
                            </p>

                            <ul className="space-y-3 mb-12">
                                {heroPoints.map((point, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                        className="flex items-start text-white text-sm md:text-[15px] font-medium"
                                    >
                                        <span className="mr-3 text-white/50">•</span>
                                        {point}
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black px-10 py-4 text-sm font-semibold uppercase tracking-wider rounded-sm transition-colors hover:bg-gray-200"
                            >
                                Contact Experts
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Right Image Side */}
                    <div className="w-full lg:w-2/3 lg:h-screen relative rounded-[0px] overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="h-full w-full"
                        >
                            <Image
                                src="/images/e and ps.avif"
                                alt="Offshore Drilling Rig"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Subtle overlay for depth */}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Footer (Standard across pages) */}
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
                                <Link href="/orinox-capabilities-presentation" className="text-[13px] hover:text-white/60 transition-colors decoration-white/30 underline-offset-4">About</Link>
                                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors decoration-white/30 underline-offset-4">Regions</Link>
                                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors decoration-white/30 underline-offset-4">Investors</Link>
                                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors decoration-white/30 underline-offset-4">Insights</Link>
                            </div>
                            {/* Col 2 */}
                            <div className="flex flex-col space-y-3">
                                <Link href="/orinox-services" className="text-[13px] hover:text-white/60 transition-colors decoration-white/30 underline-offset-4">Services</Link>
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

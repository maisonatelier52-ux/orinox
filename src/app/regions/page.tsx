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

export default function RegionsPage() {
    return (
        <div className="flex flex-col bg-black overflow-hidden">
            {/* Navigation */}
            <Orinox />

            {/* Hero Section (Regions) */}
            <section className="relative w-full h-screen bg-black flex items-center px-8 md:px-16 lg:px-24 xl:px-32">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/globe.avif"
                        alt="Global Network Map"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-[1.1] mb-8">
                            Pioneering Global <br />
                            Energy Infrastructure
                        </h1>

                        <p className="text-white/80 text-[12px] md:text-[13px] leading-relaxed mb-12 max-w-2xl">
                            Orinox Holding optimizes the energy value chain through technical mastery.
                            We deliver advanced rig fleet systems and midstream logistics that ensure
                            operational efficiency for investors and industry stakeholders worldwide.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <Link href="/login"><motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border border-white/70 text-white px-10 py-4 text-[12px] font-normal  tracking-widest rounded-sm transition-all hover:bg-white hover:text-black"
                            >
                                Our Strategy
                            </motion.button></Link>
                            <Link href="/login"><motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border border-white/70 text-white px-10 py-4 text-[12px] font-normal  tracking-widest rounded-sm transition-all hover:bg-white hover:text-black"
                            >
                                ESG Vision
                            </motion.button></Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Global Strategic Footprint Section */}
            <section className="relative w-full min-h-screen bg-black flex items-center py-24 px-8 md:px-16 lg:px-24 xl:px-32">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/addressing-the-problem.jpg"
                        alt="Industrial Strategic Infrastructure"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <motion.div
                        {...anim(0.1)}
                        className="mb-16 max-w-3xl"
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8 tracking-tight">
                            Global Strategic Footprint
                        </h2>
                        <p className="text-white/70 text-[12px] md:text-[13px] leading-relaxed max-w-2xl">
                            Orinox Holding maintains localized technical hubs within key energy corridors, ensuring
                            rapid mobilization of infrastructure and high-precision advisory across the world's most
                            productive basins.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 lg:gap-y-24">
                        {[
                            {
                                region: "North America",
                                description: "Leading midstream connectivity and technical integration in the Permian and Haynesville basins."
                            },
                            {
                                region: "Middle East & GCC",
                                description: "High-capacity upstream frameworks supporting large-scale extraction and field services for state energy partners."
                            },
                            {
                                region: "North Sea",
                                description: "Specialized offshore infrastructure management and exploration systems in harsh UK and Norwegian environments."
                            },
                            {
                                region: "West Africa & LATAM",
                                description: "Strategic technical advisory for emerging energy corridors and sustainable infrastructure development."
                            }
                        ].map((point, index) => (
                            <motion.div
                                key={index}
                                {...anim(0.2 + index * 0.1)}
                                className="flex flex-col space-y-4 max-w-sm"
                            >
                                <h3 className="text-white text-[18px] lg:text-[20px] font-bold tracking-tight border-l-2 border-white/20 pl-6">
                                    {point.region}
                                </h3>
                                <p className="text-white/70 text-[12px] md:text-[13px] leading-relaxed pl-6">
                                    {point.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Operations & Offices Section */}
            <section className="relative w-full h-screen bg-black flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/orinox-global-locations.jpg"
                        alt="Global Operations Port"
                        className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full h-full flex flex-col">
                    {/* Top Right Branding */}
                    <div className="flex-1 flex flex-col items-end pt-20">
                        <motion.div
                            {...anim(0.1)}
                            className="flex flex-col items-center text-center"
                        >
                            <motion.div {...anim(0.25)} className="flex items-center">
                                <img src="/images/orinox-white-logo.png" alt="Orinox" className="h-12 lg:h-22 w-auto object-contain" />
                            </motion.div>
                            <span className="text-white/60 text-[8px] md:text-[9px] font-bold tracking-[0.5em] uppercase mb-12 block">
                                GLOBAL OPERATIONS
                            </span>
                        </motion.div>
                    </div>

                    {/* Middle Section: Office Grid */}
                    <div className="flex-1 flex items-center justify-end pb-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 max-w-2xl w-full">
                            {[
                                {
                                    city: "United Kingdom",
                                    address: "Level 28, 52 Lime Street, London, EC3M 7AF, United Kingdom"
                                },
                                {
                                    city: "Madrid",
                                    address: "Plaza de la Independencia 8, Piso 3, Madrid, Spain"
                                },
                                {
                                    city: "United Arab Emirates",
                                    address: "Vila 145, Al Manara Street, Al Safa 2, Dubai, United Arab Emirates"
                                },
                                {
                                    city: "Venezuela",
                                    address: "Edificio Epsilon CIIP, 3 Avenida Venezuela, Caracas 1060, Distrito Capital Piso 7"
                                }
                            ].map((office, idx) => (
                                <motion.div
                                    key={idx}
                                    {...anim(0.3 + idx * 0.1)}
                                    className="flex flex-col space-y-2 items-end text-right"
                                >
                                    <h4 className="text-white text-[15px] font-bold tracking-tight">
                                        {office.city}
                                    </h4>
                                    <p className="text-white/80 text-[12px] leading-relaxed max-w-[240px]">
                                        {office.address}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Right Button */}
                    <div className="pb-20 flex justify-end">
                        <Link href="/login"><motion.button
                            {...anim(0.7)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black px-10 py-4 text-[11px] font-normal tracking-wide rounded-sm transition-colors hover:bg-gray-200"
                        >
                            Contact Regional Office
                        </motion.button></Link>
                    </div>
                </div>
            </section>

            {/* Strategic Infrastructure & Operational Excellence Section */}
            <section className="relative w-full bg-black pt-33 pb-20 px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Header: Title and Muted Description */}
                    <div className=" mb-6">
                        <motion.h2
                            {...anim(0.1)}
                            className="text-lg md:text-xl lg:text-2xl font-bold text-white max-w-2xl leading-tight"
                        >
                            Strategic Infrastructure & <br className="hidden md:block" /> Operational Excellence
                        </motion.h2>
                        <motion.p
                            {...anim(0.2)}
                            className="text-white/50 text-[10px] md:text-[11px] font-medium max-w-[680px] leading-relaxed  tracking-[0.2em]"
                        >
                            Defining petroleum reliability through technical mastery and investor-ready transparency.
                        </motion.p>
                    </div>

                    {/* Three Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                        {[
                            {
                                image: "/images/fit-for-purpose-fleet.png",
                                title: "Global Rig Fleet & Strategic Regions",
                                bullets: [
                                    "High-spec deepwater drillships and jack-up rigs.",
                                    "Active operations across North Sea, Gulf of Mexico, and West Africa.",
                                    "Focus on Tier-1 multi-year charter contracts."
                                ]
                            },
                            {
                                image: "/images/tech-stack.jpg",
                                title: "Tech Stack & Operational Services",
                                bullets: [
                                    "Predictive seismic modeling and digital twin infrastructure.",
                                    "Precision engineering for upstream extraction systems.",
                                    "Automated midstream logistics and pipeline monitoring."
                                ]
                            },
                            {
                                image: "/images/oil-and-gas-processing.png",
                                title: "ESG & Long-term Strategy",
                                bullets: [
                                    "Zero-incident safety framework and ISO compliance.",
                                    "Commitment to net-zero carbon logistics by 2035.",
                                    "Transparent reporting and sustainable investor value."
                                ]
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                {...anim(0.3 + index * 0.1)}
                                className="flex flex-col space-y-8"
                            >
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm group">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                                    />
                                </div>
                                <div className="flex flex-col space-y-6">
                                    <h3 className="text-white text-[16px] font-bold tracking-tight">
                                        {item.title}
                                    </h3>
                                    <ul className="flex flex-col space-y-2">
                                        {item.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx} className="flex items-start text-white/60 text-[12px] md:text-[13px] leading-relaxed">
                                                <span className="mr-3 text-white/30">•</span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Strategic Reach & Regional Operations Section */}
            <section className="relative w-full min-h-screen bg-black flex items-center py-24 px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column: Content + Categories */}
                    <div className="w-full lg:w-2/3 flex flex-col">
                        <motion.div {...anim(0.1)} className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                Global Strategic Reach & Regional Operations
                            </h2>
                            <p className="text-white/70 text-[12px] md:text-[13px] leading-relaxed max-w-2xl">
                                Orinox Holding manages critical midstream and upstream infrastructure across all major energy basins.
                                Our regional offices provide localized technical support and rapid rig mobilization.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                            {[
                                {
                                    title: "Americas",
                                    desc: "Deepwater Gulf of Mexico and Permian Basin logistics hub located in Houston."
                                },
                                {
                                    title: "Middle East",
                                    desc: "Abu Dhabi technical center specializing in high-pressure offshore rig management."
                                },
                                {
                                    title: "West Africa",
                                    desc: "Strategic Luanda maintenance facility for major FPSO and rig fleet operations."
                                },
                                {
                                    title: "North Sea",
                                    desc: "Aberdeen engineering hub focusing on aging asset integrity and subsea contracts."
                                }
                            ].map((region, idx) => (
                                <motion.div
                                    key={idx}
                                    {...anim(0.2 + idx * 0.1)}
                                    className="flex flex-col space-y-3"
                                >
                                    <h3 className="text-white text-[15px] font-bold tracking-tight">
                                        {region.title}
                                    </h3>
                                    <p className="text-white/50 text-[12px] md:text-[13px] leading-relaxed">
                                        {region.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Contact Card */}
                    <div className="w-full lg:w-1/3 flex items-start lg:pt-12">
                        <motion.div
                            {...anim(0.5)}
                            className="w-full aspect-[4/3] border border-white/10 rounded-sm bg-black/40 flex flex-col p-8 md:p-10 justify-between items-center relative group overflow-hidden"
                        >
                            {/* Subtle background detail */}
                            <div className="absolute inset-x-0 top-1/2 h-px bg-white/5 -translate-y-1/2" />

                            <div className="flex-1 w-full" />

                            <Link href="/login"><motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black px-12 py-3 text-[11px] font-normal tracking-wider rounded-sm w-full transition-colors hover:bg-gray-200 z-10"
                            >
                                Contact Office
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

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

export default function ESGPage() {
    return (
        <div className="flex flex-col bg-black overflow-hidden min-h-screen">
            {/* Global Navigation */}
            <Orinox />

            {/* Hero Section: Responsible Energy */}
            <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 xl:px-32 pt-24">
                <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center mb-4">
                    <motion.h1
                        {...anim(0.1)}
                        className="text-4xl md:text-6xl lg:text-2xl font-bold text-white mb-2 tracking-tight"
                    >
                        Responsible Energy
                    </motion.h1>
                    <motion.p
                        {...anim(0.2)}
                        className="text-white/80 text-[12px] md:text-[12px] leading-relaxed max-w-4xl font-light"
                    >
                        Orinox is committed to a sustainable energy future, integrating environmental stewardship, social responsibility,
                        and robust governance into our core technical operations. We bridge the gap between industrial performance and ethical integrity.
                    </motion.p>
                </div>

                {/* ESG Core Values Grid */}
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20 mb-2">
                    {[
                        {
                            title: "Environmental",
                            image: "/images/responsible-hydrocarbons-quantifiable-esc-metrics.png", // Plant/Tech thematic
                            desc: "Driving decarbonization in upstream activities and investing in leak-detection infrastructure to preserve local ecosystems globally."
                        },
                        {
                            title: "Social Responsibility",
                            image: "/images/orinox-working.jpg", // Handshake/Personnel thematic
                            desc: "Investing in technical education and local talent development, ensuring a safe and equitable environment for our global energy professionals."
                        },
                        {
                            title: "Transparent Governance",
                            image: "/images/accountable-governance-safe-compliant-delivery.jpg", // Boardroom thematic
                            desc: "Maintaining rigorous ethical oversight and operational transparency, adhering to the highest global standards for petroleum infrastructure management."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            {...anim(0.3 + index * 0.1)}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="relative aspect-[1/1] w-full max-w-[320px] overflow-hidden rounded-[24px] bg-white/5 border border-white/10 mb-3 group-hover:border-white/20 transition-all duration-500">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <h3 className="text-white text-[20px] lg:text-[16px] font-bold tracking-tight">
                                    {item.title}
                                </h3>
                                <div className="h-px w-20 bg-white/20 mx-auto" />
                                <p className="text-white/50 text-[12px] md:text-[12px] leading-relaxed px-6 lg:px-8">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action: ESG Report */}
                <motion.div {...anim(0.7)} className="pt-1">
                    <Link href="/login"><motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-black px-6 py-2 text-[12px] font-normal tracking-[0.2em] rounded-sm transition-all hover:bg-gray-200"
                    >
                        Download ESG Report
                    </motion.button></Link>
                </motion.div>
            </section>

            {/* Environmental Stewardship Section */}
            <section className="relative w-full min-h-screen bg-black flex items-center py-22 px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col pt-34">
                        <motion.div {...anim(0.1)} className="mb-10">
                            <span className="text-white/50 text-[9px] font-bold tracking-[0.3em] uppercase mb-2 block">
                                ESG & SUSTAINABILITY
                            </span>
                            <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                                Environmental Stewardship Through Technical Precision
                            </h2>
                            <p className="text-white/70 text-[13px] md:text-[14px] leading-relaxed max-w-xl mb-12">
                                Orinox Holding is dedicated to advancing the global energy sector while minimizing ecological impact.
                                Our commitment is rooted in engineering integrity and operational transparency.
                            </p>

                            {/* Feature Cards */}
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Carbon Emission Reduction",
                                        desc: "Implementation of advanced telemetry and predictive analytics to optimize midstream flow, significantly reducing fugitive emissions across our infrastructure network."
                                    },
                                    {
                                        title: "Operational Quality & Safety",
                                        desc: "Maintaining a zero-incident safety culture through rigorous personnel training and adherence to global ISO environmental management standards."
                                    }
                                ].map((card, idx) => (
                                    <motion.div
                                        key={idx}
                                        {...anim(0.3 + idx * 0.1)}
                                        className="bg-white/[0.03] border border-white/10 rounded-xl p-8 hover:bg-white/[0.05] transition-all duration-300"
                                    >
                                        <h3 className="text-white text-[16px] font-bold mb-3 tracking-tight">
                                            {card.title}
                                        </h3>
                                        <p className="text-white/50 text-[12px] md:text-[13px] leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Large Image */}
                    <div className="w-full lg:w-1/2 relative flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, clipPath: 'inset(0 0 0 100%)', scale: 1.1 }}
                            whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0%)', scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 6.5, ease: [0.19, 1, 0.22, 1] }}
                            className="relative w-full h-screen aspect-[4/5]  overflow-hidden border border-white/10"
                        >
                            <img
                                src="/images/orinox19.jpg"
                                alt="Environmental Precision"
                                className="w-full h-full object-cover"
                            />
                            {/* Subtle dark gradient overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ESG & Sustainability Strategy Section */}
            <section className="relative w-full min-h-screen bg-black flex items-center py-24 px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Column: Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0 )', scale: 1.1 }}
                            whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0%)', scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 6.5, ease: [0.19, 1, 0.22, 1] }}
                            className="relative h-screen w-full aspect-[4/5] overflow-hidden border border-white/10"
                        >
                            <img
                                src="/images/oil-and-gas-processing.png"
                                alt="ESG Strategy Industrial Facility"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <motion.div {...anim(0.1)} className="max-w-xl">
                            <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                                ESG & Sustainability Strategy
                            </h2>
                            <p className="text-white/60 text-[13px] md:text-[14px] leading-relaxed mb-12">
                                Orinox Holding integrates environmental stewardship and social integrity into the core of our petroleum infrastructure operations.
                            </p>

                            <div className="space-y-12 mb-16">
                                {[
                                    {
                                        title: "Environmental Stewardship",
                                        desc: "Deployment of low-emission technologies and rig fleet modernization to minimize ecological footprints across global regions."
                                    },
                                    {
                                        title: "Social Responsibility",
                                        desc: "Commitment to a zero-incident safety culture and fostering professional technical development within local communities."
                                    },
                                    {
                                        title: "Transparent Governance",
                                        desc: "Strict adherence to international energy standards and quarterly investor-ready reporting on operational integrity."
                                    }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        {...anim(0.3 + idx * 0.1)}
                                        className="pl-6 border-l border-white/20 hover:border-white transition-colors duration-300"
                                    >
                                        <h3 className="text-white text-[17px] font-bold mb-2 tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/40 text-[12px] md:text-[13px] leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            <Link href="/login"><motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black px-12 py-4 text-[10px] font-normal tracking-[0.1em] rounded-sm transition-colors hover:bg-gray-200"
                            >
                                SUSTAINABILITY REPORT
                            </motion.button></Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Strategic Governance & Investor Relations Section */}
            <section className="relative w-full min-h-screen bg-black flex items-center py-24 px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Column: Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0 )', scale: 1.1 }}
                            whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0%)', scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 6.5, ease: [0.19, 1, 0.22, 1] }}
                            className="relative h-screen w-full aspect-[4/5] overflow-hidden border border-white/10"
                        >
                            <img
                                src="/images/investor-framework.png"
                                alt="Modern Corporate Architecture"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <motion.div {...anim(0.1)} className="max-w-xl">
                            <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                                Strategic Governance & <br className="hidden md:block" /> Investor Relations
                            </h2>
                            <p className="text-white/60 text-[12px] md:text-[13px] leading-relaxed mb-10">
                                Orinox Holding is committed to driving long-term value through disciplined capital allocation and operational transparency.
                                Our governance framework ensures that every investment in upstream assets and midstream infrastructure meets the
                                highest standards of technical efficiency and ethical conduct.
                            </p>

                            <ul className="space-y-4 mb-12">
                                {[
                                    { title: "Strategic Oversight", desc: "Independent board committees focused on risk mitigation and technical auditing." },
                                    { title: "Global Growth", desc: "Targeted expansion into high-potential regions with resilient fiscal frameworks." },
                                    { title: "ESG Integration", desc: "Prioritizing sustainability and safety as core components of our operational excellence roadmap." }
                                ].map((point, index) => (
                                    <motion.li
                                        key={index}
                                        {...anim(0.2 + index * 0.1)}
                                        className="flex items-start text-white/50 text-[12px] md:text-[13px] leading-relaxed"
                                    >
                                        <span className="mr-3 text-white/30">•</span>
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
                                className="bg-white text-black w-full py-3 text-[11px] font-normal tracking-wide rounded-sm transition-colors hover:bg-gray-200"
                            >
                                Investor Portal
                            </motion.button></Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Environmental Integrity Through Technical Precision Section */}
            <section className="relative w-full min-h-screen bg-black flex items-center py-24 px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-3/5 flex flex-col pt-17">
                        <motion.div {...anim(0.1)} className="mb-10">
                            <span className="text-white text-[9px] font-normal tracking-[0.3em]  mb-4 block">
                                ESG & SUSTAINABILITY
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                                Environmental Integrity Through <br className="hidden md:block" /> Technical Precision
                            </h2>
                            <p className="text-white/60 text-[12px] md:text-[13px] leading-relaxed max-w-xl mb-12">
                                Orinox Holding is committed to reducing the carbon intensity of global energy infrastructure.
                                We integrate environmental stewardship into every technical system we deploy, ensuring operational
                                excellence remains synonymous with technical integrity.
                            </p>

                            {/* Info Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-16">
                                {[
                                    {
                                        title: "Emissions Reduction",
                                        desc: "Implementing advanced telemetry to monitor and eliminate methane leaks across midstream assets."
                                    },
                                    {
                                        title: "Operational Safety",
                                        desc: "A steadfast zero-incident goal supported by rigorous IOGP safety standards and personnel training."
                                    },
                                    {
                                        title: "Investor Transparency",
                                        desc: "Our governance framework ensures full stakeholder visibility into technical risk management and environmental compliance across all subsidiaries."
                                    }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        {...anim(0.3 + idx * 0.1)}
                                        className={`${idx === 2 ? 'md:col-span-2' : ''} flex flex-col space-y-3`}
                                    >
                                        <h3 className="text-white text-[15px] font-bold tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/50 text-[12px] md:text-[13px] leading-relaxed max-w-sm">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            <Link href="/login"><motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black px-10 py-3 text-[11px] font-normal tracking-wide rounded-sm w-fit transition-colors hover:bg-gray-200"
                            >
                                View Report
                            </motion.button></Link>
                        </motion.div>
                    </div>

                    {/* Right Column: Large Image */}
                    <div className="w-full lg:w-2/5 relative">
                        <motion.div
                            initial={{ opacity: 0, clipPath: 'inset(0  0 0 100%)', scale: 1.1 }}
                            whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0%)', scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 6.5, ease: [0.19, 1, 0.22, 1] }}
                            className="relative h-screen w-full aspect-[3/4]  overflow-hidden border border-white/10"
                        >
                            <img
                                src="/images/oil-and-gas-processing.png"
                                alt="Aerial facility view"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ESG Framework & Sustainability Section */}
            <section className="relative w-full min-h-screen bg-black flex items-center py-24 px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Column: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col pt-16">
                        <motion.div {...anim(0.1)} className="max-w-xl">
                            <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                                ESG Framework & Sustainability
                            </h2>
                            <p className="text-white/60 text-[12px] md:text-[13px] leading-relaxed mb-12">
                                Orinox Holding integrates ESG principles into the lifecycle of every petroleum asset.
                                From decarbonizing upstream exploration to securing midstream logistics, our strategy
                                prioritizes long-term resilience and stakeholder transparency.
                            </p>

                            <div className="space-y-10">
                                {[
                                    {
                                        title: "Decarbonization Strategy",
                                        desc: "Implementing predictive telemetry to monitor and reduce fugitive methane emissions across our global upstream holdings."
                                    },
                                    {
                                        title: "Safety Excellence",
                                        desc: "Maintaining zero-incident operations through a robust framework of technical audits and real-time risk environment monitoring."
                                    },
                                    {
                                        title: "Corporate Governance",
                                        desc: "Full alignment with IOGP metrics and ISO standards, ensuring transparency for investors and accountability for stakeholders."
                                    }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        {...anim(0.3 + idx * 0.1)}
                                        className="flex flex-col space-y-2"
                                    >
                                        <h3 className="text-white text-[17px] font-bold tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/50 text-[12px] md:text-[13px] leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="w-full lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, clipPath: 'inset(0  0 0 100%)', scale: 1.1 }}
                            whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0%)', scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 6.5, ease: [0.19, 1, 0.22, 1] }}
                            className="relative h-screen w-full aspect-[4/5] overflow-hidden border border-white/10"
                        >
                            <img
                                src="/images/core-midstream.png"
                                alt="ESG Framework Industrial Facility"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Footer (Standard across pages) */}
            <Footer />
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const items = [
    {
        category: "INVESTOR BRIEF",
        title: "CCUS Transport & Storage: Infrastructure Scalability",
        description: "Analyzing the technical frameworks and capital requirements for high-density CCUS transport networks in the Permian Basin.",
        buttonText: "Read Analysis",
        image: "/images/modularity-and-rapid-deployment.png",
    },
    {
        category: "TECHNICAL BRIEF",
        title: "Digital Drilling: Edge Computing & Yield Optimization",
        description: "Implementation of real-time telemetry and SCADA protocols to enhance drilling precision and reduce operational downtime.",
        buttonText: "View Report",
        image: "/images/exploration-capabilities.png",
    },
    {
        category: "STRATEGIC OUTLOOK",
        title: "Hydrogen-Ready: Transitioning Midstream Assets",
        description: "Assessing the metallurgical compliance and gathering system retrofitting required for the global energy transition.",
        buttonText: "Access PDF",
        image: "/images/transportation-and-storage.png",
    },
];

export default function InsightsPublications() {
    return (
        <section className="bg-black text-white py-24 px-8 md:px-16 lg:px-32">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl font-bold uppercase tracking-tight">INSIGHTS & PUBLICATIONS</h2>
                    <p className="text-white/60 text-[12px] md:text-[13px] mt-4 font-light">
                        Strategic perspectives and technical briefs on the evolving global energy infrastructure landscape.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20 mt-16">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="flex flex-col group"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden mb-8">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>

                            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/50 mb-4 font-semibold">
                                {item.category}
                            </p>

                            <h3 className="text-lg font-bold mb-4 leading-tight group-hover:text-white/80 transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-[12px] leading-relaxed text-white/50 mb-10 flex-1">
                                {item.description}
                            </p>

                            <Link href="/login"><button className="w-fit px-12 py-3.5 border border-white/20 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
                                {item.buttonText}
                            </button></Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

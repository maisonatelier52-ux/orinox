"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const publications = [
    {
        category: "CCUS T&S",
        title: "Technical Reliability in Carbon Transport Infrastructure",
        description: "An technical briefing on high-pressure CO2 integrity protocols and the structural optimization of dedicated storage facilities for industrial-scale deployment.",
    },
    {
        category: "DIGITAL DRILLING",
        title: "Upstream Efficiency: Integrating Predictive Telemetry",
        description: "Evaluating the impact of automated rig diagnostics on reducing non-productive time (NPT) across complex offshore upstream exploration sites.",
    },
    {
        category: "INFRASTRUCTURE",
        title: "Hydrogen Adaptation: Engineering the Hub Networks",
        description: "Structural assessment of existing midstream assets for H2-blend compatibility, focusing on metallurgical integrity and gathering system upgrades.",
    },
];

export default function StrategicPublicationsText() {
    return (
        <section className="bg-black text-white py-24 px-8 md:px-16 lg:px-32">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-6"
                >
                    <h2 className="text-2xl font-bold">Insights & Strategic Publications</h2>
                </motion.div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="h-[1px] bg-white/20 mb-16 origin-left"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
                    {publications.map((pub, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="flex flex-col h-full"
                        >
                            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/50 mb-6 font-semibold">
                                {pub.category}
                            </p>

                            <h3 className="text-lg md:text-xl font-bold mb-6 leading-tight min-h-[3.5rem]">
                                {pub.title}
                            </h3>

                            <p className="text-[12px] md:text-[13px] leading-relaxed text-white/70 mb-12 flex-1">
                                {pub.description}
                            </p>

                            <Link href="/login"><button className="w-full py-4 border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
                                Read Brief
                            </button></Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

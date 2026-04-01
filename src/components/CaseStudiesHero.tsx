"use client";

import { motion } from "framer-motion";

export default function CaseStudiesHero() {
    const cases = [
        {
            title: "Permian Basin Expansion",
            client: "Supermajor E&P",
            scope: "Integrated drilling infrastructure & SCADA optimization.",
            outcome: "18% reduction in non-productive time (NPT).",
        },
        {
            title: "North Sea Decommissioning",
            client: "National Oil Company",
            scope: "Technical advisory for subsea framework removal.",
            outcome: "Zero-incident completion ahead of schedule.",
        },
        {
            title: "Guyana Offshore Midstream",
            client: "Infrastructure Fund",
            scope: "FPSO logistics & export reliability.",
            outcome: "Secured multi-year off-take integrity.",
        },
        {
            title: "Eagle Ford Shale Optimization",
            client: "Independent Operator",
            scope: "Multi-pad gathering & water recycling nexus.",
            outcome: "12% reduction in Lease Operating Expenses (LOE).",
        },
        {
            title: "Bakken Gathering Infrastructure",
            client: "Midstream Partnership",
            scope: "Crude terminal integration & VRU deployment.",
            outcome: "Enhanced Tier-1 environmental compliance nodes.",
        },
        {
            title: "Santos Basin Pre-Salt Development",
            client: " Global Supermajor",
            scope: "Technical framework for subsea manifold modularity.",
            outcome: "Accelerated first-oil timeline by 45 days.",
        },
    ];

    return (
        <section className="bg-black text-white min-h-screen pt-40 pb-20 px-8 md:px-16 lg:px-32">
            <div className="max-w-4xl">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6"
                >
                    SELECTED PROJECTS
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-2xl md:text-3xl lg:text-3xl font-bold mb-8 transition-all"
                >
                    Case Studies
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white/70 text-[10px] md:text-[12px] leading-relaxed mb-16 max-w-2xl"
                >
                    Orinox delivers high-impact technical frameworks across global basins, ensuring
                    operational integrity for energy supermajors and infrastructure funds.
                </motion.p>

                <div className="space-y-12">
                    {cases.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="group border-t border-white/10 pt-10"
                        >
                            <h2 className="text-xl md:text-xl font-bold mb-4 group-hover:text-white/80 transition-colors">
                                {project.title}
                            </h2>
                            <div className="space-y-1">
                                <p className="text-sm md:text-[12px] leading-relaxed">
                                    <span className="font-bold">Client: </span>
                                    <span className="text-white/60">{project.client}</span>
                                </p>
                                <p className="text-sm md:text-[12px] leading-relaxed">
                                    <span className="font-bold">Scope: </span>
                                    <span className="text-white/60">{project.scope}</span>
                                </p>
                                <p className="text-sm md:text-[12px] leading-relaxed">
                                    <span className="font-bold">Outcome: </span>
                                    <span className="text-white/60">{project.outcome}</span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

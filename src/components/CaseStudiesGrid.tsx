"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const cases = [
    {
        title: "Permian Basin Production Expansion",
        meta: "BASIN: PERMIAN | CLIENT: INDEPENDENT PRODUCER",
        scope: "High-pressure gathering systems and site electrification for multi-well pads.",
        outcomes: "15% reduction in flaring and 22% increase in throughput efficiency.",
        image: "/images/gathering-and-transportaion.png",
    },
    {
        title: "Deepwater Asset Monitoring Framework",
        meta: "BASIN: GULF OF MEXICO | CLIENT: SUPERMAJOR",
        scope: "Integrated digital drilling framework for real-time seismic and pressure data visualization.",
        outcomes: "30% reduction in non-productive time (NPT) during exploration phase.",
        image: "/images/orinox-grounded-techninal-rigor-depth-research.jpg",
    },
    {
        title: "Midstream Hydrogen-Ready Retrofit",
        meta: "BASIN: MIDCONTINENT | CLIENT: ENERGY UTILITY",
        scope: "Pipeline metallurgy assessment and deployment of hydrogen-compatible automated valves.",
        outcomes: "Verified 20% H2 blend capacity; zero leak-rate across 250 miles.",
        image: "/images/transportation-and-storage.png",
    },
];

export default function CaseStudiesGrid() {
    return (
        <section className="bg-black text-white py-24 px-8 md:px-16 lg:px-32">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl font-bold mb-4"
                >
                    Case Studies
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
                    {cases.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="flex flex-col group"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden mb-8">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                />
                            </div>
                            <h3 className="text-[17px] font-bold mb-2">{project.title}</h3>
                            <p className="text-[9px] tracking-[0.15em] text-white/60 mb-8 uppercase font-semibold">
                                {project.meta}
                            </p>

                            <div className="space-y-4 mb-10 flex-1">
                                <p className="text-[12px] leading-relaxed">
                                    <span className="text-white font-bold opacity-100">Scope: </span>
                                    <span className="text-white/60">{project.scope}</span>
                                </p>
                                <p className="text-[12px] leading-relaxed">
                                    <span className="text-white font-bold opacity-100">Outcomes: </span>
                                    <span className="text-white/60">{project.outcomes}</span>
                                </p>
                            </div>

                            <Link href="/login"><button className="w-fit px-10 py-3.5 border border-white/20 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
                                View Case Study
                            </button></Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

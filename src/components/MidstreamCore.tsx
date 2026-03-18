"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const midstreamAssets = [
    {
        title: "Gathering & Transmission",
        description: "Designing, constructing, and operating extensive pipeline networks optimized for multi-phase fluid transport and high-pressure gas gathering from wellheads.",
        image: "/images/gathering-and-transportaion.png"
    },
    {
        title: "Processing & Fractionation",
        description: "State-of-the-art cryogenic and processing plants treating natural gas, extracting valuable natural gas liquids (NGLs), and meeting stringent pipeline specifications.",
        image: "/images/core-midstream.png"
    },
    {
        title: "Storage & Terminalling",
        description: "Strategically positioned tank farms and underground storage caverns ensuring supply chain resilience and responsive distribution to global markets.",
        image: "/images/transportation-and-storage.png"
    }
];

export default function MidstreamCore() {
    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    return (
        <section className="bg-black text-white py-24 px-8 md:px-16 lg:px-24 xl:px-32 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24 max-w-3xl">
                    <motion.h2
                        {...anim(0.1)}
                        className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-6"
                    >
                        Core Midstream Operations
                    </motion.h2>
                    <motion.p
                        {...anim(0.2)}
                        className="text-[12px] md:text-[13px] text-zinc-400 font-light leading-relaxed"
                    >
                        Comprehensive solutions bridging the gap between upstream production and downstream markets with uncompromising safety, environmental stewardship, and throughput efficiency.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {midstreamAssets.map((asset, index) => (
                        <motion.div key={index} {...anim(0.3 + index * 0.1)} className="flex flex-col group">
                            <div className="relative aspect-[4/3] w-full overflow-hidden mb-8 border border-white/5 bg-zinc-900 rounded-sm">
                                <img
                                    src={asset.image}
                                    alt={asset.title}
                                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight mb-4 group-hover:text-white transition-colors">{asset.title}</h3>
                            <p className="text-[13px] text-zinc-500 font-light leading-relaxed mb-6 flex-grow">{asset.description}</p>
                            <div className="mt-auto">
                                <Link href="/login">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-white transition-colors cursor-pointer pb-1 border-b border-transparent group-hover:border-white">
                                        Learn More
                                    </span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

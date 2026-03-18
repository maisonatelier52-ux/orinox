"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fleet = [
    {
        name: "ORX-7000 ALPHA (Cyber-Rig)",
        depth: "35,000 ft",
        load: "2,000,000 lbs",
        meta: "NORTH SEA OPS | DYNAMIC POSITIONING 3",
        image: "/images/offshore-rig-sunset.png",
    },
    {
        name: "ORX-5000 DELTA (Semi-Sub)",
        depth: "30,000 ft",
        load: "1,500,000 lbs",
        meta: "GULF OF MEXICO | ULTRA-DEEPWATER SPEC",
        image: "/images/e-p.png",
    },
    {
        name: "ORX-9000 OMEGA (Drillship)",
        depth: "40,000 ft",
        load: "2,500,000 lbs",
        meta: "WEST AFRICA | TIER 1 GLOBAL ASSET",
        image: "/images/seismic-survey.png",
    },
];

export default function VesselInventory() {
    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    return (
        <section className="bg-black text-white py-24 px-8 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-10 gap-8">
                    <div className="max-w-xl">
                        <motion.p
                            {...anim(0.1)}
                            className="text-[10px] md:text-[9px] uppercase tracking-[0.3em] text-white/50 mb-3 font-semibold"
                        >
                            VESSEL INVENTORY
                        </motion.p>
                        <motion.h2
                            {...anim(0.2)}
                            className="text-xl md:text-2xl font-bold tracking-tight"
                        >
                            Rig Fleet & Strategic Technical Assets
                        </motion.h2>
                        <motion.p
                            {...anim(0.3)}
                            className="text-[12px] md:text-[12px] leading-relaxed text-white/40 mt-4 font-light"
                        >
                            Orinox maintains a high-specification inventory of upstream infrastructure,
                            designed for operational resilience in extreme environments and midstream
                            logistical efficiency.
                        </motion.p>
                    </div>
                </div>

                {/* Fleet Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
                    {fleet.map((item, index) => (
                        <motion.div
                            key={index}
                            {...anim(0.4 + index * 0.1)}
                            className="flex flex-col group bg-zinc-900/10 border border-white/5 overflow-hidden"
                        >
                            {/* Asset Image */}
                            <div className="relative aspect-[16/10] w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
                                />
                            </div>

                            {/* Asset Details */}
                            <div className="p-8 flex flex-col bg-zinc-900/20">
                                <h3 className="text-[15px] md:text-[16px] font-bold mb-6 tracking-tight group-hover:text-white transition-colors">
                                    {item.name}
                                </h3>

                                <div className="space-y-1 mb-8">
                                    <p className="text-[11px] md:text-[12px] text-white/60">
                                        <span className="font-semibold text-white/90">Max Depth:</span> {item.depth}
                                    </p>
                                    <p className="text-[11px] md:text-[12px] text-white/60">
                                        <span className="font-semibold text-white/90">Hook Load:</span> {item.load}
                                    </p>
                                </div>

                                <p className="text-[9px] md:text-[9px] uppercase tracking-[0.2em] text-white/40 mb-10 font-normal">
                                    {item.meta}
                                </p>

                                <Link href="/login"><button className="w-full py-4 border border-white/20 text-[8px] md:text-[8px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                                    TECHNICAL SPECS
                                </button></Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

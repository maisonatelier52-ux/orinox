"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function StrategicCapital() {
    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    return (
        <section className="relative w-full h-screen min-h-[800px] flex items-center px-8 md:px-16 lg:px-24 xl:px-32 bg-black overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/oil-and-gas-processing.png" // This image often features refineries in this project
                    alt="Strategic Capital"
                    fill
                    className="object-cover opacity-70 saturate-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            <div className="relative z-10 max-w-4xl text-white">
                <motion.h2
                    {...anim(0.1)}
                    className="text-2xl md:text-2xl font-bold mb-8 tracking-tight max-w-2xl leading-[1.1]"
                >
                    Strategic Capital & Future Valuation
                </motion.h2>

                <motion.p
                    {...anim(0.2)}
                    className="text-white/80 text-[14px] md:text-[15px] max-w-2xl mb-12 leading-relaxed font-light"
                >
                    Orinox Holding operates with institutional discipline, focusing on capital preservation and high-alpha asset
                    acquisition across the entire petroleum infrastructure chain. We bridge the critical gap between technical
                    reliability and long-term financial performance.
                </motion.p>

                <ul className="space-y-4 mb-16">
                    {[
                        "Disciplined Capital Allocation Strategy",
                        "Cross-Asset Engineering Synergy",
                        "Global Governance and Regulatory Integrity"
                    ].map((point, index) => (
                        <motion.li
                            key={index}
                            {...anim(0.3 + index * 0.1)}
                            className="flex items-center text-[11px] md:text-[12px] text-white/70 tracking-wide"
                        >
                            <span className="w-1 h-1 bg-white/40 mr-4 rounded-full" />
                            {point}
                        </motion.li>
                    ))}
                </ul>

                <motion.div {...anim(0.6)}>
                    <Link href="/login"><button className="px-10 py-4 border border-white/20 text-white text-[9px] md:text-[9px] font-medium tracking-[0.2em] rounded-md hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm uppercase">
                        Investor Portal
                    </button></Link>
                </motion.div>
            </div>
        </section>
    );
}

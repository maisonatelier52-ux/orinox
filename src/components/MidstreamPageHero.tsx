"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MidstreamPageHero() {
    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-black overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/oil-and-gas-processing.png"
                    alt="Midstream Infrastructure"
                    className="w-full h-full object-cover opacity-60 brightness-[0.4]"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <motion.div {...anim(0.1)} className="mb-6">
                    <span className="text-[8px] md:text-[9px] font-bold tracking-[0.3em] text-white/50 uppercase border-l-2 border-white/30 pl-4 py-1">
                        CRITICAL INFRASTRUCTURE
                    </span>
                </motion.div>

                <motion.h1
                    {...anim(0.2)}
                    className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-8 text-white max-w-4xl leading-tight"
                >
                    Midstream Logistics & Processing Networks
                </motion.h1>

                <motion.p
                    {...anim(0.3)}
                    className="text-[12px] md:text-[13px] text-white/60 font-light max-w-2xl leading-relaxed mb-12"
                >
                    Securing the vital arteries of global energy distribution through high-capacity transport corridors, strategic storage reserves, and advanced fractionation facilities.
                </motion.p>

                <motion.div {...anim(0.4)} className="flex items-center gap-6">
                    <Link href="/login"><button className="px-8 py-4 bg-white text-black text-[9px] uppercase tracking-widest font-normal hover:bg-white/90 transition-colors rounded-sm">
                        Discover Assets
                    </button></Link>
                </motion.div>
            </div>
        </section>
    );
}

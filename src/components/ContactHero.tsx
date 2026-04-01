"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    return (
        <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-black overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/orinox-global-locations.jpg"
                    alt="Global Locations"
                    className="w-full h-full object-cover opacity-60 brightness-[0.3]"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <motion.div {...anim(0.1)} className="mb-6">
                    <span className="text-[8px] md:text-[7px] font-bold tracking-[0.3em] text-white/50 uppercase border-l-2 border-white/30 pl-4 py-1">
                        GLOBAL REACH
                    </span>
                </motion.div>

                <motion.h1
                    {...anim(0.2)}
                    className="text-xl md:text-2xl lg:text-2xl font-bold tracking-tight mb-8 text-white max-w-3xl leading-tight"
                >
                    Connect with Orinox Holding
                </motion.h1>

                <motion.p
                    {...anim(0.3)}
                    className="text-[12px] md:text-[13px] text-white/60 font-light max-w-2xl leading-relaxed mb-12"
                >
                    Operating across key international energy hubs, our technical teams and strategic advisors are positioned to support institutional partners, contractors, and stakeholders globally.
                </motion.p>
            </div>
        </section>
    );
}

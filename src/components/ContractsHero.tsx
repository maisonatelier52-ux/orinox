"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ContractsHero() {
    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    return (
        <section className="relative w-full h-[90vh] md:h-screen flex items-center px-8 md:px-16 lg:px-24 xl:px-32 bg-black overflow-hidden">
            {/* Background Image with Silhouette Effect */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/offshore-rig-sunset.png"
                    alt="Offshore Rig Sunset"
                    fill
                    className="object-cover opacity-70"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            </div>

            <div className="relative z-10 max-w-4xl">
                <motion.h1
                    {...anim(0.1)}
                    className="text-3xl md:text-2xl font-bold text-white mb-10 tracking-tight"
                >
                    Unprecedented Access
                </motion.h1>

                <motion.p
                    {...anim(0.3)}
                    className="text-white/80 text-sm md:text-[14px] leading-relaxed mb-12 max-w-2xl font-light"
                >
                    Multi-lateral contract management at Orinox utilizes long-term, fixed-fee frameworks and
                    robust index-linked models to mitigate market volatility, ensuring predictable returns and
                    operational integrity across our global petroleum network.
                </motion.p>

                <Link href="/login"><motion.button
                    {...anim(0.5)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-4 border rounded-md border-white/40 text-white text-[10px] md:text-[9px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                >
                    STRATEGIC TERMS
                </motion.button></Link>
            </div>
        </section>
    );
}

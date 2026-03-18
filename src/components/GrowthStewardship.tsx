"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function GrowthStewardship() {
    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    return (
        <section className="bg-black text-white py-24 px-8 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

                {/* Left Side: Content */}
                <div className="w-full lg:w-3/5 flex flex-col">
                    <motion.div {...anim(0.1)} className="mb-12">
                        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-8">
                            Strategic Growth & Investor Stewardship
                        </h2>
                        <p className="text-[13px] md:text-[14px] leading-relaxed text-white font-medium mb-6">
                            Delivering technical excellence to drive long-term stakeholder returns across the global energy value chain.
                        </p>
                        <p className="text-[12px] md:text-[13px] leading-relaxed text-white/50 font-light max-w-2xl">
                            Orinox Holding operates with a disciplined focus on high-yield petroleum infrastructure. Our strategy
                            integrates technical mastery with rigorous capital management to ensure operational resilience in a dynamic
                            global market.
                        </p>
                    </motion.div>

                    {/* Pillars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-20">
                        <motion.div {...anim(0.2)}>
                            <h3 className="text-[15px] font-bold mb-3 tracking-tight">Capital Discipline</h3>
                            <p className="text-[12px] leading-relaxed text-white/50 font-light">
                                Disciplined investment across high-margin upstream and midstream assets, optimizing for sustainable yield.
                            </p>
                        </motion.div>

                        <motion.div {...anim(0.3)}>
                            <h3 className="text-[15px] font-bold mb-3 tracking-tight">Operational Integrity</h3>
                            <p className="text-[12px] leading-relaxed text-white/50 font-light">
                                Real-time predictive monitoring reduces downtime and maximizes operational lifecycle efficiency.
                            </p>
                        </motion.div>

                        <motion.div {...anim(0.4)}>
                            <h3 className="text-[15px] font-bold mb-3 tracking-tight">Tech Integration</h3>
                            <p className="text-[12px] leading-relaxed text-white/50 font-light">
                                Leveraging proprietary digital systems for enhanced midstream logistics and resource security.
                            </p>
                        </motion.div>

                        <motion.div {...anim(0.5)}>
                            <h3 className="text-[15px] font-bold mb-3 tracking-tight">Investor Governance</h3>
                            <p className="text-[12px] leading-relaxed text-white/50 font-light">
                                Unwavering transparency and reporting standards built on technical reliability and expert oversight.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div {...anim(0.6)}>
                        <Link href="/login"><button className="bg-white text-black px-8 py-3 text-[9px] font-normal uppercase tracking-widest rounded-sm hover:bg-white/90 transition-colors">
                            Investor Relations
                        </button></Link>
                    </motion.div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                    <motion.div
                        initial={{ opacity: 0, clipPath: 'inset(0 0 0 100%)', scale: 1.1 }}
                        animate={{ opacity: 1, clipPath: 'inset(0 0 0 0%)', scale: 1 }}
                        transition={{ duration: 6.5, ease: [0.19, 1, 0.22, 1] as const }}
                        className="relative w-full aspect-[4/5] md:aspect-[5/6] max-h-[700px] overflow-hidden rounded-lg shadow-2xl"
                    >
                        <Image
                            src="/images/tech-stack.jpg"
                            alt="Boardroom overlooking oil infrastructure"
                            fill
                            className="object-cover brightness-90 saturate-[0.8]"
                            priority
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

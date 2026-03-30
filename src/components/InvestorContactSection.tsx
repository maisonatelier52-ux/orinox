"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function InvestorContactSection() {
    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    return (
        <section className="bg-black text-white py-24 px-8 md:px-16 lg:px-24 xl:px-32 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">

                {/* Left Side: Strategy & Pillars */}
                <div className="w-full lg:w-3/5 flex flex-col">
                    <motion.h2
                        {...anim(0.1)}
                        className="text-xl md:text-2xl font-bold tracking-tight mb-20 md:mb-12"
                    >
                        Sustainable Strategy & Investor Governance
                    </motion.h2>

                    <motion.div {...anim(0.2)} className="flex flex-col space-y-12">
                        <p className="text-[12px] md:text-[13px] leading-relaxed text-white/50 font-light max-w-xl">
                            Orinox Holding drives long-term shareholder value through capital discipline and the integration of advanced technical systems across high-yield upstream and midstream assets.
                        </p>

                        <ul className="space-y-6 max-w-2xl">
                            <li className="flex items-start group">
                                <span className="w-1 h-1 bg-white/40 mt-1.5 mr-4 rounded-full flex-shrink-0" />
                                <p className="text-[12px] md:text-[13px] leading-relaxed text-white/50 font-light">
                                    <span className="font-bold text-white">Strategic Fleet Modernization:</span> Optimizing rig efficiency and tech stacks to reduce operational costs.
                                </p>
                            </li>
                            <li className="flex items-start group">
                                <span className="w-1 h-1 bg-white/40 mt-1.5 mr-4 rounded-full flex-shrink-0" />
                                <p className="text-[12px] md:text-[13px] leading-relaxed text-white/50 font-light">
                                    <span className="font-bold text-white">ESG Integration:</span> Full alignment with SASB frameworks and a commitment to Net-Zero 2040 operations.
                                </p>
                            </li>
                            <li className="flex items-start group">
                                <span className="w-1 h-1 bg-white/40 mt-1.5 mr-4 rounded-full flex-shrink-0" />
                                <p className="text-[12px] md:text-[13px] leading-relaxed text-white/50 font-light">
                                    <span className="font-bold text-white">Midstream Logistics:</span> Secured high-integrity contracts for resilient global resource transportation.
                                </p>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Right Side: Contact & Image */}
                <div className="w-full lg:w-2/5 flex flex-col gap-12">
                    {/* Investor Relations Desk Card */}
                    <motion.div
                        {...anim(0.3)}
                        className="bg-zinc-900/50 border border-white/5 p-10 md:p-8 rounded-sm"
                    >
                        <h3 className="text-[14px] font-bold mb-6 tracking-tight text-zinc-400">Investor Relations Desk</h3>
                        <p className="text-[12px] leading-relaxed text-zinc-600 mb-8 font-light max-w-[280px]">
                            For institutional inquiries and financial reports, contact our Houston headquarters IR team.
                        </p>

                        <div className="space-y-1 mb-10">
                            <p className="text-[12px] text-zinc-600 font-light"><span className="text-zinc-500">Email:</span> ir@orinoxholding.com</p>
                            <p className="text-[12px] text-zinc-600 font-light"><span className="text-zinc-500">HQ:</span> +1 (713) 555-0922</p>
                        </div>

                        <Link href="/login"><button className="w-full py-4 border border-white/20 text-[9px] font-normal rounded-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                            Inquiry Desk
                        </button></Link>
                    </motion.div>


                </div>

            </div>
        </section>
    );
}

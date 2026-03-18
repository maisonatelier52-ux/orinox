"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ESGImperative() {
    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });    

    return (
        <section className="bg-black text-white py-24 md:py-32 px-8 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-4xl">
                <motion.h2
                    {...anim(0.1)}
                    className="text-xl md:text-2xl font-bold mb-8 tracking-tight"
                >
                    ESG & Sustainability: A Technical Imperative
                </motion.h2>

                <motion.p
                    {...anim(0.2)}
                    className="text-white/70 text-[13px] md:text-[14px] max-w-2xl mb-16 leading-relaxed font-light"
                >
                    Orinox Holding integrates environmental stewardship directly into our operational DNA.
                    We believe that technical integrity is the most reliable path to long-term sustainability in
                    petroleum infrastructure.
                </motion.p>

                <div className="space-y-12 mb-16">
                    <motion.div {...anim(0.3)}>
                        <h3 className="text-lg md:text-lg font-bold mb-3 tracking-tight">Environmental Integrity</h3>
                        <p className="text-white/50 text-[13px] md:text-[14px] max-w-xl leading-relaxed font-light">
                            Strict adherence to ISO 14001 standards across all midstream logistics to minimize
                            carbon intensity and environmental footprint.
                        </p>
                    </motion.div>

                    <motion.div {...anim(0.4)}> 
                        <h3 className="text-lg md:text-lg font-bold mb-3 tracking-tight">Operational Safety</h3>
                        <p className="text-white/50 text-[13px] md:text-[14px] max-w-xl leading-relaxed font-light">
                            A steadfast zero-incident goal driven by rigorous hazard identification and
                            continuous technical personnel training programs.
                        </p>
                    </motion.div>
                </div>

                <motion.div {...anim(0.5)}>
                    <Link href="/login"><button className="px-10 py-3.5 border border-white/30 text-white text-[9px] md:text-[10px] font-medium tracking-[0.2em] rounded-md hover:bg-white hover:text-black transition-all duration-300 uppercase">
                        Sustainability Report
                    </button></Link>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StrategicFoundations() {
  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
  });

  return (
    <section className="bg-black text-white py-24 px-8 md:px-16 lg:px-24 xl:px-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* Left Side: Text Content */}
        <div className="w-full lg:w-3/5 flex flex-col">
          <motion.div {...anim(0.1)} className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-8">
              Strategic Financial Foundations & Investor Value
            </h2>
            <p className="text-[12px] md:text-[13px] leading-relaxed text-white/50 font-light max-w-2xl">
              Orinox Holding delivers sustainable investor returns through the integration of high-precision upstream assets and
              resilient midstream logistics. Our strategy focuses on long-term infrastructure reliability and technical excellence.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div {...anim(0.2)}>
              <h3 className="text-[14px] font-bold mb-3 tracking-tight">Asset Growth</h3>
              <p className="text-[12px] leading-relaxed text-white/50 font-light">
                Expansion of technical rig fleet across global upstream markets.
              </p>
            </motion.div>

            <motion.div {...anim(0.3)}>
              <h3 className="text-[14px] font-bold mb-3 tracking-tight">Regional Reach</h3>
              <p className="text-[12px] leading-relaxed text-white/50 font-light">
                Optimized logistics networks serving 5 major energy corridors.
              </p>
            </motion.div>

            <motion.div {...anim(0.4)}>
              <h3 className="text-[14px] font-bold mb-3 tracking-tight">ESG Integrity</h3>
              <p className="text-[12px] leading-relaxed text-white/50 font-light">
                Technical standards meeting Tier 1 sustainability benchmarks.
              </p>
            </motion.div>
          </div>

          <motion.div {...anim(0.5)}>
            <button className="bg-white text-black px-8 py-3 text-[9px] font-normal uppercase tracking-widest rounded-sm hover:bg-white/90 transition-all duration-300">
              Investor Portal
            </button>
          </motion.div>
        </div>

        {/* Right Side: Visual Asset */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] as const }}
            className="relative w-full aspect-[4/5] md:aspect-[5/6] max-h-[700px] overflow-hidden rounded-lg shadow-2xl border border-white/5"
          >
            <Image
              src="/images/oil-and-gas-processing.png"
              alt="Industrial Processing Infrastructure"
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

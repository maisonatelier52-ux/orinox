"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function GovernanceMastery() {
  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
  });

  return (
    <section className="bg-black text-white py-24 px-8 md:px-16 lg:px-24 xl:px-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* Left Side: Content */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center">
          <motion.div {...anim(0.1)} className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-8">
              Strategic Excellence & Governance Mastery
            </h2>
            <p className="text-[12px] md:text-[13px] leading-relaxed text-white/50 font-light max-w-2xl">
              Orinox Holding operates at the vanguard of industrial oversight, ensuring that every asset
              in our upstream and midstream portfolio meets the highest global standards of efficiency
              and compliance.
            </p>
          </motion.div>

          {/* Pillars: Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-20">
            <motion.div {...anim(0.3)}>
              <h3 className="text-[15px] font-bold mb-4 tracking-tight">Investor Strategy</h3>
              <p className="text-[12px] leading-relaxed text-white/40 font-light">
                Our strategy prioritizes capital efficiency and long-term asset integrity, targeting
                high-reliability infrastructure that delivers consistent returns across volatility cycles.
              </p>
            </motion.div>

            <motion.div {...anim(0.4)}>
              <h3 className="text-[15px] font-bold mb-4 tracking-tight">ESG & Sustainability</h3>
              <p className="text-[12px] leading-relaxed text-white/40 font-light">
                We integrate strict environmental monitoring and ISO-compliant safety protocols into our
                tech stack to minimize operational drag and environmental impact.
              </p>
            </motion.div>
          </div>

          <motion.div {...anim(0.5)}>
            <Link href="/login"><button className="bg-white text-black px-8 py-3 text-[9px] font-normal uppercase tracking-widest rounded-sm hover:bg-white/90 transition-all duration-300">
              Investor Portal
            </button></Link>
          </motion.div>
        </div>

        {/* Right Side: Image Asset */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] as const }}
            className="relative w-full aspect-[4/5] md:aspect-[5/6] max-h-[700px] overflow-hidden rounded-lg shadow-2xl"
          >
            <Image
              src="/images/tech-stack.jpg" // Using the same boardroom/technical model image for institutional bridge
              alt="Institutional Governance Model"
              fill
              className="object-cover brightness-95"
              priority
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

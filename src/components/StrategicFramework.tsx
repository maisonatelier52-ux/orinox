"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const pillars = [
  {
    title: "Rig Fleet & Tech Stack",
    description: "Utilizing high-specification automated rigs and a proprietary unified telemetry stack for maximum extraction efficiency.",
  },
  {
    title: "Regions & Contracts",
    description: "Expanding operational footprint in low-risk Basins with secured long-term midstream transport agreements.",
  },
  {
    title: "ESG & Sustainability",
    description: "Driving a Zero-Emission roadmap through Carbon-Capture technology and rigorous offshore safety protocols.",
  },
  {
    title: "Investor Strategy",
    description: "Focusing on high-yield, technical-first assets that provide resilient cash flow across energy cycles.",
  },
];

export default function StrategicFramework() {
  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
  });

  return (
    <section className="bg-black text-white py-24 px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">

        {/* Left Side: Content */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center">
          <motion.div {...anim(0.1)} className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-8">
              Strategic Framework & Investor Growth
            </h2>
            <p className="text-[12px] md:text-[13px] leading-relaxed text-white/50 font-light max-w-2xl">
              Orinox Holding combines technical mastery with capital discipline to drive sustainable value
              across the global upstream and midstream value chain.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-16">
            {pillars.map((pillar, idx) => (
              <motion.div key={idx} {...anim(0.2 + idx * 0.1)}>
                <h3 className="text-[15px] font-bold mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-[12px] leading-relaxed text-white/40 font-light">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div {...anim(0.6)}>
            <button className="bg-white text-black px-8 py-3 text-[9px] font-normal uppercase tracking-widest rounded-sm hover:bg-white/90 transition-all duration-300">
              Investor Portal
            </button>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-2/5 flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] as const }}
            className="relative w-full min-h-[500px] md:min-h-[700px] overflow-hidden rounded-sm"
          >
            <Image
              src="/images/offshore-rig-sunset.png"
              alt="Offshore Rig Infrastructure"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

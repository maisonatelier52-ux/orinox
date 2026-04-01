"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const insightCategories = [
  {
    category: "CCUS TECHNOLOGY",
    title: "Scaling Subsurface CO2 Storage Economies",
    description: "Analysis of CO2 transport networks and technical protocols for long-term storage security in high-potential basins.",
    buttonText: "View Summary",
  },
  {
    category: "UPSTREAM INNOVATION",
    title: "The High-Precision Digital Drilling Frontier",
    description: "Integrating real-time telemetry and automated control systems to maximize operational efficiency and asset lifecycle yields.",
    buttonText: "View Summary",
  },
  {
    category: "MIDSTREAM LOGISTICS",
    title: "Hydrogen-Ready Pipeline Engineering Protocols",
    description: "Evaluating specialized material selection and retrofitting strategies for future-ready transport of hydrogen-rich carrier fluids.",
    buttonText: "View Summary",
  },
];

export default function InsightsHero() {
  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
  });

  return (
    <section className="relative min-h-[90vh] bg-black text-white pt-48 pb-24 px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center">
      {/* Subtle top texture/wireframe if visible in reference (minimal) */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white/5 to-transparent opacity-20" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <motion.h1
            {...anim(0.1)}
            className="text-3xl md:text-2xl font-bold tracking-tight mb-6"
          >
            Latest Technical Insights
          </motion.h1>
          <motion.p
            {...anim(0.2)}
            className="text-[14px] md:text-[15px] text-white/50 font-light max-w-2xl leading-relaxed"
          >
            Strategic briefs on the engineering breakthroughs and infrastructure frameworks defining the future of global energy markets.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {insightCategories.map((item, index) => (
            <motion.div
              key={index}
              {...anim(0.3 + index * 0.1)}
              className="flex flex-col items-start space-y-8"
            >
              <div className="space-y-4">
                <span className="text-[8px] font-bold tracking-[0.2em] text-white/40 uppercase">
                  {item.category}
                </span>
                <h2 className="text-xl md:text-lg font-bold tracking-tight leading-tight">
                  {item.title}
                </h2>
              </div>

              <p className="text-[13px] md:text-[14px] text-white/40 font-light leading-relaxed flex-grow">
                {item.description}
              </p>

              <Link href="/login"><button className="px-10 py-3 border border-white/20 text-[10px] font-normal uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-sm">
                {item.buttonText}
              </button></Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

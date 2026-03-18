"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const insights = [
  {
    category: "INFRASTRUCTURE REPORT",
    title: "Scaling CCUS: T&S Network Architectures",
    description: "Analyzing the technical frameworks for cross-border carbon logistics and high-capacity storage hub development in mature petroleum basins.",
    image: "/images/oil-and-gas-processing.png",
  },
  {
    category: "DIGITAL EDGE",
    title: "Deepwater Automation & Digital Strategy",
    description: "Reducing non-productive time through integrated telemetry and real-time stratigraphic modeling in complex exploration environments.",
    image: "/images/tech-stack.jpg",
  },
  {
    category: "MIDSTREAM TRANSITION",
    title: "Hydrogen-Ready Midstream Evolution",
    description: "Technical assessments for legacy metallurgy and compression standards to facilitate hydrogen transport across global pipeline networks.",
    image: "/images/gathering-and-transportaion.png",
  },
];

export default function StrategicEnergyInsights() {
  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
  });

  return (
    <section className="bg-black text-white py-24 px-8 md:px-16 lg:px-24 xl:px-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Upper Branding */}
        <motion.div {...anim(0.1)} className="mb-2">
            <span className="text-[8px] font-bold tracking-[0.3em] text-white/40 uppercase">ORINOX INTELLIGENCE BUREAU</span>
        </motion.div>

        {/* Header Grid */}
        <div className="grid gap-8 items-end mb-12">
          <motion.h2 
            {...anim(0.2)}
            className="text-2xl md:text-2xl font-bold tracking-tight"
          >
            Strategic Energy Insights & Publications
          </motion.h2>
          <motion.p 
            {...anim(0.3)}
            className="text-[12px] md:text-[13px] text-zinc-500 font-light max-w-sm  leading-relaxed"
          >
            Investor-ready summaries tracking technical innovations across CCUS, digital drilling automation, and midstream transition readiness.
          </motion.p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {insights.map((item, index) => (
            <motion.div 
              key={index}
              {...anim(0.4 + index * 0.1)}
              className="flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] overflow-hidden mb-8 border border-white/5 bg-zinc-900">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col space-y-4 mb-10">
                <span className="text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold tracking-tight leading-snug min-h-[50px]">
                  {item.title}
                </h3>
                <p className="text-[13px] text-zinc-500 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Button */}
              <Link href="/login"><button className="w-full py-3.5 border border-white/20 text-[10px] font-normal uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 rounded-sm">
                View Summary
              </button></Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

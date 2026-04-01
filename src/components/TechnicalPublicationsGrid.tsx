"use client";

import { motion } from "framer-motion";

export default function TechnicalPublicationsGrid() {
  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
  });

  return (
    <section className="bg-black py-24 px-8 md:px-16 lg:px-24 xl:px-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.h2
            {...anim(0.1)}
            className="text-xl md:text-2xl font-bold text-white mb-6 uppercase tracking-tight"
          >
            Insights & Technical Publications
          </motion.h2>
          <motion.p
            {...anim(0.2)}
            className="text-[14px] text-white/50 font-light max-w-2xl leading-relaxed"
          >
            Investor-ready technical briefs and analysis on the foundational systems driving petroleum innovation and midstream reliability.
          </motion.p>
        </div>

        {/* Technical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {/* Column 1: Left */}
          <div className="flex flex-col gap-6">
            <PublicationCard
              title="CCUS T&S Strategies"
              image="/images/responsible-hydrocarbons-quantifiable-esc-metrics.png"
              height="h-[320px]"
              delay={0.3}
            />
            <PublicationCard
              title="Subsurface Asset Modeling"
              image="/images/seismic-survey.png"
              height="h-[320px]"
              delay={0.4}
            />
          </div>

          {/* Column 2: Center (Featured) */}
          <div className="flex flex-col gap-6">
            <PublicationCard
              title="Digital Drilling Frontiers"
              image="/images/tech-stack.jpg"
              height="h-[520px]"
              delay={0.5}
            />
            <PublicationCard
              title="Resilient Gathering Systems"
              image="/images/gathering-and-transportaion.png"
              height="h-[120px]"
              delay={0.6}
            />
          </div>

          {/* Column 3: Right */}
          <div className="flex flex-col gap-6">
            <PublicationCard
              title="Hydrogen Midstream Ready"
              image="/images/transportation-and-storage.png"
              height="h-[320px]"
              delay={0.7}
            />
            <PublicationCard
              title="Lifecycle Yield Excellence"
              image="/images/production-operations-and-optimization.png"
              height="h-[320px]"
              delay={0.8}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function PublicationCard({ title, image, height, delay }: { title: string, image: string, height: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className={`relative group overflow-hidden bg-zinc-900 rounded-sm ${height}`}
    >
      {/* Base Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
      />

      {/* Subtle Gradient to ensure text readability if needed (though overlay covers it) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 group-hover:opacity-0 transition-opacity" />

      {/* Hover Overlay & Text */}
      <div className="absolute inset-0 bg-zinc-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 backdrop-blur-sm">
        <h3 className="text-xl font-bold text-white text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 tracking-tight max-w-[200px]">
          {title}
        </h3>
      </div>

      {/* Decorative Border/Corner Effect (Optional touch of premium) */}
      <div className="absolute inset-0 border border-white/5 pointer-events-none group-hover:border-white/20 transition-colors" />
    </motion.div>
  );
}

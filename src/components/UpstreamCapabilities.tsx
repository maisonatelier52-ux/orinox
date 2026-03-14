"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Appraisal & Field Evaluation",
    description: "Rigorous geological modeling, 3D/4D seismic interpretation, and reserve estimation methodologies to de-risk frontier and mature basin targets.",
    image: "/images/appraisal-and-field-evalution.png"
  },
  {
    title: "Development Drilling",
    description: "Precision-engineered well trajectories, automated pipe handling systems, and advanced mud-logging for safe, high-efficiency penetration rates.",
    image: "/images/development-drilling-completion.png"
  },
  {
    title: "Production Optimization",
    description: "Maximizing lifecycle yields through intelligent artificial lift systems, real-time flow assurance, and advanced separation technologies.",
    image: "/images/production-operations-and-optimization.png"
  }
];

export default function UpstreamCapabilities() {
  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
  });

  return (
    <section className="bg-black text-white py-24 px-8 md:px-16 lg:px-24 xl:px-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <motion.h2 
            {...anim(0.1)}
            className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-6"
          >
            Full-Lifecycle Upstream Operations
          </motion.h2>
          <motion.p 
            {...anim(0.2)}
            className="text-[12px] md:text-[13px] text-zinc-500 font-light leading-relaxed"
          >
            From initial basin reconnaissance to late-life enhanced oil recovery, Orinox deploys proven engineering frameworks and advanced digital tools to ensure operational integrity and maximize asset value.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {capabilities.map((cap, index) => (
            <motion.div key={index} {...anim(0.3 + index * 0.1)} className="flex flex-col group">
              <div className="relative aspect-[4/3] w-full overflow-hidden mb-8 border border-white/5 bg-zinc-900 rounded-sm">
                <img 
                  src={cap.image} 
                  alt={cap.title} 
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-4 group-hover:text-white transition-colors">{cap.title}</h3>
              <p className="text-[13px] text-zinc-500 font-light leading-relaxed mb-6 flex-grow">{cap.description}</p>
              <div className="mt-auto">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 group-hover:text-white transition-colors cursor-pointer pb-1 border-b border-transparent group-hover:border-white">
                  Learn More
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

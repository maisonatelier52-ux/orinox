"use client";

import { motion } from "framer-motion";

export default function UpstreamHero() {
  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
  });

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/exploration-capabilities.png" 
          alt="Upstream Exploration" 
          className="w-full h-full object-cover opacity-70 brightness-[0.4]"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div {...anim(0.1)} className="mb-6">
          <span className="text-[10px] md:text-[9px] font-bold tracking-[0.3em] text-white/50 uppercase border-l-2 border-white/30 pl-4 py-1">
            CORE SECTOR
          </span>
        </motion.div>
        
        <motion.h1 
          {...anim(0.2)}
          className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight mb-8 text-white max-w-4xl leading-tight"
        >
          Upstream Excellence & Frontier Exploration
        </motion.h1>
        
        <motion.p 
          {...anim(0.3)}
          className="text-[12px] md:text-[13px] text-white/60 font-light max-w-2xl leading-relaxed mb-12"
        >
          Leveraging advanced seismic imaging, high-precision drilling protocols, and optimized reservoir engineering to unlock high-yield hydrocarbon reserves in complex geological basins.
        </motion.p>
        
        <motion.div {...anim(0.4)} className="flex items-center gap-6">
          <button className="px-8 py-4 bg-white text-black text-[9px] uppercase tracking-widest font-normal hover:bg-white/90 transition-colors rounded-sm">
            Explore Capabilities
          </button>
        </motion.div>
      </div>
    </section>
  );
}

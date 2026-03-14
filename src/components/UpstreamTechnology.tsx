"use client";

import { motion } from "framer-motion";

export default function UpstreamTechnology() {
  const anim = (delay = 0) => ({
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
  });

  return (
    <section className="relative min-h-[80vh] flex items-center py-24 px-8 md:px-16 lg:px-24 xl:px-32 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col relative z-10">
          <motion.div {...anim(0.1)} className="mb-6">
            <span className="text-[9px] font-bold tracking-[0.3em] text-white/40 uppercase">
              TECHNOLOGY INTEGRATION
            </span>
          </motion.div>

          <motion.h2 {...anim(0.2)} className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight mb-8 leading-tight">
            Next-Generation <br /> Rig & Well Systems
          </motion.h2>

          <motion.p {...anim(0.3)} className="text-[13px] md:text-[14px] text-zinc-400 font-light leading-relaxed mb-10">
            Integrating robust surface facilities with advanced subsurface technologies. Our fit-for-purpose rig fleet and telemetry infrastructure deliver unparalleled resilience, minimizing non-productive time (NPT) in harsh operating environments.
          </motion.p>

          <motion.div {...anim(0.4)} className="space-y-8 mt-4">
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-[14px] font-bold text-white tracking-tight mb-2">Automated Drilling Controls</h4>
                <p className="text-[12px] text-zinc-500 font-light leading-relaxed max-w-sm">Closing the loop between downhole sensor data and surface equipment to optimize weight-on-bit and rotational speeds.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
              <div>
                <h4 className="text-[14px] font-bold text-white tracking-tight mb-2">Enhanced Oil Recovery (EOR)</h4>
                <p className="text-[12px] text-zinc-500 font-light leading-relaxed max-w-sm">Implementing advanced miscible gas and thermal injection paradigms to rejuvenate mature fields and extend extraction plateaus.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative aspect-square lg:aspect-[4/5] w-full"
        >
          <img 
            src="/images/fit-for-purpose-fleet.png" 
            alt="Rig Fleet Technology" 
            className="w-full h-full object-cover rounded-sm grayscale opacity-80"
          />
          {/* Decorative Corner Borders */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/20" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/20" />
        </motion.div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const teams = [
  {
    title: "Subsurface Geophysics & Geospatial Modeling Team",
    description: "Leveraging high-fidelity seismic imaging to ensure accurate resource modeling and asset valuation.",
    focus: "Validating geological prospectivity and de-risking high-value exploration capital.",
    buttonText: "Contact / Know More",
  },
  {
    title: "Drilling & Completion Operations Team",
    description: "Deploying automated rig systems and real-time telemetry to maximize rate of penetration and uptime.",
    focus: "Minimizing non-productive time (NPT) and optimizing complex drilling environments.",
    buttonText: "Contact / Know More",
  },
  {
    title: "Reservoir Performance & Recovery Team",
    description: "Optimizing secondary and tertiary recovery rates while maintaining primary seal integrity.",
    focus: "Protecting field longevity and maximizing asset Net Present Value (NPV).",
    buttonText: "Contact / Know More",
  },
];

export default function TeamHero() {
  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
  });

  return (
    <section className="relative min-h-screen flex items-center pt-42 pb-14 px-8 md:px-16 lg:px-24 xl:px-32 bg-black overflow-hidden">
      {/* Background Image with Sunset/Industrial Tone */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/offshore-rig-sunset.png" 
          alt="Sunset Rig" 
          className="w-full h-full object-cover opacity-50 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.h1 
          {...anim(0.1)}
          className="text-2xl md:text-xl lg:text-xl font-bold tracking-tight mb-12 text-white/90"
        >
          Upstream Exploration & Field Development
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {teams.map((team, index) => (
            <motion.div
              key={index}
              {...anim(0.2 + index * 0.1)}
              className="flex flex-col bg-zinc-950/40 backdrop-blur-md border border-white/5 p-8 lg:p-10 h-full group"
            >
              <h2 className="text-lg md:text-lg font-bold mb-8 leading-tight tracking-tight text-white/70 group-hover:text-white/90 transition-colors">
                {team.title}
              </h2>

              <div className="h-[1px] w-full bg-white/10 mb-8" />

              <div className="flex-grow space-y-6 mb-12">
                <p className="text-[12px] md:text-[13px] leading-relaxed text-white/50 font-light">
                  {team.description}
                </p>
                <p className="text-[12px] md:text-[13px] leading-relaxed text-white/60 font-light italic">
                  <span className="font-bold not-italic text-white/80">Focus:</span> {team.focus}
                </p>
              </div>

              <Link href="/login"><button className="w-full py-3 border border-white/20 text-[10px] text-white/60 font-normal uppercase tracking-widest rounded-sm hover:bg-white hover:text-black transition-all duration-300">
                {team.buttonText}
              </button></Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

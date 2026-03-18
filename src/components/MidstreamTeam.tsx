"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const midstreamTeams = [
  {
    title: "Asset Integrity & Risk Mitigation Team",
    description: "Precision monitoring of high-pressure networks to mitigate material fatigue and environmental exposure.",
    focus: "Preventing catastrophic asset failure and ensuring continuous regulatory compliance.",
    buttonText: "Contact / Know More",
  },
  {
    title: "Logistics Management & Supply Chain Team",
    description: "Optimizing throughput and storage protocols to ensure resilient energy distribution cycles.",
    focus: "Streamlining downstream delivery efficiency and maintaining critical supply chain security.",
    buttonText: "Contact / Know More",
  },
  {
    title: "Hydrogen Infrastructure & Future Fuels Team",
    description: "Designing transport corridors that integrate hydrogen-blend capacity with legacy petroleum assets.",
    focus: "Future-proofing energy infrastructure and enabling multimodal asset reliability.",
    buttonText: "Contact / Know More",
  },
];

export default function MidstreamTeam() {
  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
  });

  return (
    <section className="relative min-h-[80vh] flex items-center py-14 px-8 md:px-16 lg:px-24 xl:px-32 bg-black overflow-hidden border-t border-white/5">
      {/* Background Image: Midstream/Downstream Facility */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/oil-and-gas-processing.png" 
          alt="Midstream Facility" 
          className="w-full h-full object-cover opacity-90 brightness-[0.4]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.h2 
          {...anim(0.1)}
          className="text-2xl md:text-xl lg:text-xl font-bold tracking-tight mb-12 text-white/90"
        >
          Midstream Infrastructure & Transport
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {midstreamTeams.map((team, index) => (
            <motion.div
              key={index}
              {...anim(0.2 + index * 0.1)}
              className="flex flex-col bg-zinc-950/40 backdrop-blur-md border border-white/5 p-8 lg:p-10 h-full group"
            >
              <h3 className="text-lg md:text-[17px] font-bold mb-8 leading-tight tracking-tight text-white/70 group-hover:text-white/90 transition-colors">
                {team.title}
              </h3>

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

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const investorCards = [
  {
    title: "Strategy 2030",
    description: "Driving sustainable growth through infrastructure modernization and advanced technical integration across global petroleum markets.",
    buttonText: "View Strategy",
    image: "/images/oil-and-gas-processing.png",
  },
  {
    title: "Q3 Performance",
    description: "Quarterly operational highlights demonstrating robust efficiency gains and consistent infrastructure performance across our holding.",
    buttonText: "Read Report",
    image: "/images/tech-stack.jpg",
  },
  {
    title: "Dividend Roadmap",
    description: "A strategic framework for shareholder value creation, focused on disciplined capital allocation and dividend sustainability.",
    buttonText: "View Roadmap",
    image: "/images/offshore-rig-sunset.png",
  },
];

export default function InvestorsHero() {
  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
  });

  return (
    <section className="bg-black text-white pt-40 pb-24 px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          {...anim(0.1)}
          className="text-xl md:text-xl font-bold tracking-tight mb-6"
        >
          Investor Relations
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {investorCards.map((card, index) => (
            <motion.div
              key={index}
              {...anim(0.2 + index * 0.1)}
              className="flex flex-col bg-zinc-900/10 border border-white/10 rounded-sm p-8 h-full"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm mb-10">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <h2 className="text-lg font-bold mb-6 tracking-tight">
                {card.title}
              </h2>

              <p className="text-[13px] md:text-[14px] leading-relaxed text-white/50 font-light mb-12 flex-grow">
                {card.description}
              </p>

              <Link href="/login"><button className="w-full sm:w-fit px-8 py-3 bg-white text-black text-[9px] font-normal uppercase tracking-widest rounded-sm hover:bg-white/90 transition-all duration-300">
                {card.buttonText}
              </button></Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

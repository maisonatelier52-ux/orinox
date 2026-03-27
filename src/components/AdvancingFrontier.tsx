"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function AdvancingFrontier() {
  return (
    <section className="relative w-full h-screen bg-black text-white snap-start overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/orinox.png"
          alt="Petroleum Infrastructure"
          fill
          className="object-cover grayscale-[30%] opacity-40"
          priority
        />
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </motion.div>

      {/* Text Content */}
      <div className="relative z-10 h-full mx-auto flex flex-col items-center justify-center pt-14 md:pt-16 text-center px-8 md:px-16 lg:px-24">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[32px] md:text-6xl lg:text-[30px] text-white/90 leading-tight font-bold max-w-4xl mb-6"
        >
          ADVANCING THE FRONTIER OF PETROLEUM INFRASTRUCTURE
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[12px] md:text-[16px] text-white/90 leading-tight max-w-2xl"
        >
          Orinox Holding stands at the intersection of technical mastery and
          industry reliability. We deliver the foundational systems that drive
          exploration, production, and midstream efficiency across the global
          oil and gas sector.
        </motion.p>
      </div>
    </section>
  );
}

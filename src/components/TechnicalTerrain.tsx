"use client";

import { motion } from "framer-motion";

export default function TechnicalTerrain() {
  return (
    <section className="relative w-full h-[60vh] md:h-[60vh] bg-black overflow-hidden flex items-end">
      {/* Wireframe Terrain Image */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] as const }}
        className="relative w-full h-full"
      >
        <img
          src="/images/company.png"
          alt="Technical Wireframe Terrain"
          className="w-full h-full object-cover object-bottom opacity-80 mix-blend-screen"
        />

      </motion.div>

      {/* Optional Decorative Text or Elements can be added here if needed */}
    </section>
  );
}

"use client"
import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="w-full bg-[#0A1A2F] py-20 md:py-30 0 px-6 md:px-20">
      <div className="max-w-[1100px] mx-auto text-center">
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-3xl md:text-5xl lg:text-[56px] font-bold leading-none"
        >
            “Advancing energy operations through a steadfast commitment to high-precision upstream and midstream technical infrastructure.”
        </motion.h2>
      </div>
    </section>
  );
}
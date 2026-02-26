"use client";
import { motion } from "framer-motion";

export default function OrinoxLegacy() {
  return (
    <section className="w-full bg-black px-8 md:px-16 lg:px-24">
      <div className="max-w-[560px]">

        {/* Headline - appears immediately */}
        <h1 className="text-[35px] md:text-[60px] font-bold text-white text-left">
          The Orinox Legacy
        </h1>

        {/* Paragraphs - animate from bottom */}
        <div className="mt-2 md:mt-10 text-[15px] text-white space-y-4">

          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-left"
          >
            Orinox Holding was founded with a clear mandate: to deliver technical excellence and
            absolute transparency to the petroleum infrastructure sector. Since our inception as a
            specialized engineering firm, we have evolved into a premier global organization,
            managing upstream exploration and midstream logistics with unparalleled precision.
          </motion.p>

          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-left"
          >
            Our path is defined by disciplined innovation and high-integrity development, ensuring
            sustained resource security and operational efficiency throughout the energy value chain.
          </motion.p>

        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OrinoxLegacy() {
  return (
    <section className="w-full bg-black px-8 md:px-16 lg:px-28 py-24">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-14 lg:gap-28">

        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-[580px]">
          <h1 className="text-[38px] md:text-[64px] font-bold text-white leading-[1.0] mb-8">
            The Orinox Legacy
          </h1>

          <div className="text-[13px] md:text-[12px] text-white/85 space-y-7">
            <motion.p
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="leading-relaxed"
            >
              Orinox Holding was founded with a clear mandate: to deliver technical excellence and
              absolute transparency to the petroleum infrastructure sector. Since our inception as a
              specialized engineering firm, we have evolved into a premier global organization,
              managing upstream exploration and midstream logistics with unparalleled precision.
            </motion.p>

            <motion.p
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="leading-relaxed"
            >
              Our path is defined by disciplined innovation and high-integrity development, ensuring
              sustained resource security and operational efficiency throughout the energy value chain.
            </motion.p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 w-full max-w-[680px]"
        >
          <div className="relative aspect-[16/11] rounded-xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.7)] group">
            <Image
              src="/images/storage-solutions.jpg"
              alt="Orinox Integrated Solutions"
              fill
              className="object-cover grayscale opacity-40 transition-all duration-700 scale-100 group-hover:scale-105"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
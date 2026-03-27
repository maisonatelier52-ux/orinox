"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OrinoxLegacy() {
  return (
    <section className="w-full bg-black px-8 md:px-16 lg:px-28 h-screen flex items-center justify-center snap-start flex flex-col gap-20">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center  gap-14 lg:gap-28 w-full">

        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-[580px]">
          <h2 className="text-[38px] md:text-[50px] max-w-100 font-bold text-white/80 leading-[1.0] mb-8">
            THE ORINOX LEGACY
          </h2>

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
              We leverage advanced technical infrastructure and absolute transparency to manage risk
              and optimize yields across global petroleum basins. Our commitment to technical mastery
              allows us to bridge the gap between complex engineering requirements and localized
              operational success, providing the industrial-scale reliability needed for integrated
              upstream and midstream projects. By focusing on sustainable resource management and
              specialized drilling excellence, Orinox Holding continues to set the standard for
              petroleum logistics and infrastructure development on a global scale.
            </motion.p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
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

      {/* Flex container */}
      <div className="flex flex-col md:flex-row md:justify-between  gap-10 md:gap-28">

        {/* Mission */}
        <div className="md:w-1/2">
          <p className="text-[13px] tracking-[0.25em] text-white/70 mb-4 md:mb-8">
            MISSION
          </p>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-[26px] md:text-4xl lg:text-[18px] text-white/70 leading-[1.1] font-normal "
          >
            To deliver high-precision infrastructure and technical reliability across the global energy value chain.
          </motion.h2>
        </div>

        {/* Vision */}
        <div className="md:w-1/2">
          <p className="text-[13px] tracking-[0.25em] text-white/70 mb-4 md:mb-8">
            VISION
          </p>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-[26px] md:text-4xl lg:text-[18px] text-white/70 leading-[1.1] font-normal"
          >
            Setting the global standard for operational transparency and technical mastery in petroleum logistics.
          </motion.h2>
        </div>

      </div>
    </section>
  );
}
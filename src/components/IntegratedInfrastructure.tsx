"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function IntegratedInfrastructure() {
  return (
    <section className="w-full bg-[#1a1a1a] overflow-hidden pt-5 md:pt-0">
      <div className="flex flex-col lg:flex-row items-start mt-5">
        {/* RIGHT IMAGE - Order 1 on Mobile, 2 on Large */}
        <div className="flex-1 w-full max-w-[580px] order-1 lg:order-2 px-8 lg:px-0">
          <motion.div 
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: [0.25, 1, 0.5, 1] }}
            className="w-full h-[380px] lg:h-[700px] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/integrated-infrastructure.webp"
              alt="Integrated Infrastructure"
              width={1000}
              height={800}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* LEFT CONTENT - Order 2 on Mobile, 1 on Large */}
        <div className="flex-1 pt-12 md:pt-16 lg:pt-27 pb-20 pl-8 md:pl-16 lg:pl-20 pr-8 lg:pr-24 order-2 lg:order-1">
          <h2 className="text-[30px] md:text-6xl lg:text-[62px] text-white font-bold leading-none mb-4 md:mb-10">
            Integrated Infrastructure for Upstream and Midstream Excellence
          </h2>

          <p className="text-[17px] text-white/90 leading-tight mb-6">
            Orinox Holding serves as a strategic force in the global energy sector, orchestrating technical success across the entire oil and gas value chain. From high-precision drilling frameworks to sophisticated process infrastructure, we deliver the technical solutions that drive operational efficiency and resource security.
          </p>

          <p className="text-[17px] text-white/90 leading-tight">
            We maintain operational excellence through absolute integrity and transparency. By integrating innovative engineering with streamlined midstream logistics, Orinox provides the foundational reliability required for industrial-scale energy production, transportation, and strategic petroleum management.
          </p>
        </div>
       
      </div>
    </section>
  );
}
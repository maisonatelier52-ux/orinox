"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function CoreOperationalSectors() {
  return (
    <section className="w-full bg-black text-white  pt-20 pb-10 md:pb-20 md:pt-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-full mx-auto flex flex-col items-center text-center">

        {/* Heading */}
        <div className="max-w-full md:max-w-150">
          <motion.h1 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-[30px] md:text-6xl lg:text-[62px] leading-none font-bold mb-7"
          >
            Core Operational
         Sectors
          </motion.h1>

          {/* Description */}
          <p className="text-[15px] text-white/90 leading-tight max-w-212.5 mb-4 md:mb-15">
            Driving technical excellence across the integrated oil and gas value chain with precision-led infrastructure solutions. 
          </p>
        </div>
      
        <section className="w-full py-10 ">
          <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-20">

            {/* COLUMN 1 */}
            <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-10 md:mb-20 opacity-60 overflow-hidden">
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                >
                  <Image
                    src="/images/exploration.png"
                    alt="Exploration"
                    width={60}
                    height={60}
                  />
                </motion.div>
              </div>

              <h3 className="text-3xl font-bold mb-4 md:mb-12">
                Exploration
              </h3>

              <p className="text-[15px] text-white/90 leading-tight mb-5 md:mb-10 min-h-[80px]">
                Identification and assessment of high-potential upstream assets leveraging advanced geological modeling and seismic evaluation protocols.
              </p>

              <button className="border border-white/60 px-8 py-3 rounded-md text-[16px] font-medium hover:bg-white hover:text-black transition">
                Technical Specs
              </button>
            </div>


            {/* COLUMN 2 */}
            <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-10 md:mb-20 opacity-60 overflow-hidden">
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
                >
                  <Image
                    src="/images/production.png"
                    alt="Production"
                    width={60}
                    height={60}
                  />
                </motion.div>
              </div>

              <h3 className="text-3xl font-bold mb-4 md:mb-12">
                Production
              </h3>

              <p className="text-[15px] text-white/90 leading-tight mb-5 md:mb-10 min-h-[80px]">
                Optimizing asset lifecycle yields through innovative field development techniques and high-integrity rig infrastructure management.
              </p>

              <button className="border border-white/60 px-8 py-3 rounded-md text-[16px] font-medium hover:bg-white hover:text-black transition">
                Technical Specs
              </button>
            </div>


            {/* COLUMN 3 */}
            <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-10 md:mb-20 opacity-60 overflow-hidden">
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
                >
                  <Image
                    src="/images/midstreamlogistics.png"
                    alt="Midstream"
                    width={60}
                    height={60}
                  />
                </motion.div>
              </div>

              <h3 className="text-3xl font-bold mb-4 md:mb-12">
                Midstream Logistics
              </h3>
              <p className="text-[15px] text-white/90 leading-tight mb-5 md:mb-10 min-h-[80px]">
                Engineering resilient midstream infrastructure for the secure and reliable transportation of global petroleum resources across vast networks.
              </p>

              <button className="border border-white/60 px-8 py-3 rounded-md text-[16px] font-medium hover:bg-white hover:text-black transition">
                Technical Specs
              </button>
            </div>

          </div>
        </section>

      </div>
    </section>
  );
}
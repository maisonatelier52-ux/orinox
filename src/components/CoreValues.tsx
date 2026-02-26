"use client"
import { motion } from "framer-motion";

export default function CoreValues() {
  return (
    <section className="w-full bg-black text-white py-7 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[33px] md:text-6xl font-bold md:mb-20 mb-10"
        >
          Core Values
        </motion.h2>

        {/* Flex container */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-12">

          {/* Value 1 */}
          <div className="flex-1">
              <div className="border-t border-white/30 md:pt-5 pt-7">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <h3 className="text-[22px] md:text-[30px] font-bold mb-2 md:mb-5">
                  Absolute Integrity
                </h3>
                <p className="text-[16px] leading-relaxed text-white/90 max-w-[340px]">
                  Operating with uncompromising transparency and ethical rigor across all global energy exploration and production frameworks.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Value 2 */}
          <div className="flex-1">
            <div className="border-t border-white/30 md:pt-5 pt-7">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                <h3 className="text-[30px] font-bold mb-2 md:mb-5">
                  Strategic Reliability
                </h3>
                <p className="text-[16px] leading-relaxed text-white/90 max-w-[340px]">
                  Upholding the standard for industrial-scale reliability in midstream logistics, ensuring secure energy transportation networks.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Value 3 */}
          <div className="flex-1">
            <div className="border-t border-white/30 md:pt-5 pt-7">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                <h3 className="text-[30px] font-bold mb-2 md:mb-5">
                  Technical Mastery
                </h3>
                <p className="text-[16px] leading-relaxed text-white/90 max-w-[340px]">
                  Advancing energy operations through precision engineering, digital infrastructure, and innovative technical advisory services.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
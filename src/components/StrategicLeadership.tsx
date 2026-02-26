"use client"
import { motion } from "framer-motion";

export default function StrategicLeadership() {
  return (
    <section className="w-full bg-black text-white py-10 md:py-20  px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto flex">

        {/* Content */}
        <div className="flex flex-col max-w-[520px]">

          {/* Heading */}
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-[35px] md:text-6xl lg:text-[64px] leading-[1.05] font-bold mb-4 md:mb-10"
          >
            Strategic  Leadership
          </motion.h2>

          {/* Paragraph */}
          <motion.p 
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-[15px] leading-tight text-white/90 mb-10 md:mb-12"
          >
            Orinox is guided by a team of industry veterans with deep expertise in petroleum engineering and midstream infrastructure. Our leadership is committed to transparency, technical innovation, and delivering the highest level of resource security to our global partners.
          </motion.p>

          {/* Button */}
          <a
            href="/team"
            className="inline-block border border-white/60 px-10 py-4 text-sm tracking-wide font-medium hover:bg-black hover:text-white transition duration-300 w-fit"
          >
            VIEW FULL TEAM
          </a>

        </div>

      </div>
    </section>
  );
}
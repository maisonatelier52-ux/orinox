"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function TechnicalAndMidstream() {
  return (
    <section className="w-full bg-black text-white px-8 md:px-16 lg:px-12">
      <div className="max-w-full mx-auto flex flex-col items-center text-center">
       <div className="max-w-250">
      <motion.h1 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-[30px] md:text-6xl lg:text-[62px] leading-none font-bold mb-4 md:mb-9"
          >
Integrated Technical Infrastructure & Midstream Logistics
         </motion.h1>

        <p className="text-[18px] text-white/90 leading-tight max-w-212.5 mb-10">
  Orinox Holding delivers superior technical mastery across the petroleum value chain, ensuring operational success from drilling frameworks to midstream distribution.
  </p>
       </div>
      
<div className="w-full pt-2 md:pt-10 ">
      <div className=" mx-auto flex flex-col lg:flex-row gap-10">
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="flex-1 border border-white/60 rounded-xl p-7 md:p-20 flex flex-col justify-between"
        >
          <div className="mb-6 opacity-80">
            <Image
              src="/images/digital.png"
              alt="Midstream"
              width={80}
              height={80}
            />
          </div>

          <h2 className="text-4xl text-start md:text-5xl font-bold leading-none mb-6">
            Digital Midstream
            Infrastructure
          </h2>

          <div className="w-35 h-px bg-white/60 mb-6"></div>

          <p className="text-whtie/90 text-start text-[17px] leading-tight  mb-8">
            Optimizing pipeline gathering systems through advanced telemetry and real-time SCADA monitoring to ensure secure energy distribution.
          </p>

          <div className="rounded-xl overflow-hidden mt-auto">
            <motion.div 
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: [0.25, 1, 0.5, 1] }}
            >
              <Image
                src="/images/digitalmidstream.webp"
                alt="Midstream Infrastructure"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          className="w-full lg:w-[420px] border border-white/60 rounded-xl p-7 md:p-20 flex flex-col"
        >
          <div className="mb-6 opacity-80">
            <Image
              src="/images/asset.png"
              alt="Asset Integrity"
              width={80}
              height={80}
            />
          </div>

          <h3 className="text-3xl text-start font-bold leading-none mb-6">
            Asset Integrity &
            Compliance
          </h3>

          <p className="text-white/90 text-start text-[17px] leading-tight">
            Orinox ensures Tier-1 performance across the value chain through uncompromising adherence to ISO and IOGP integrated standards.
          </p>
        </motion.div>
      </div>
    </div>
      </div>

    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="pt-10"
    >
      <div className="mx-auto bg-[#1a1a1a] rounded-xl p-7 md:p-14 flex flex-col lg:flex-row gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1 pt-5 ">
          {/* Small Label */}
          <p className="text-[25px] tracking-[0.25em] text-white/80 mb-6">
            SAFETY AT SCALE
          </p>

          {/* Heading */}
          <h2 className="text-xl md:text-2xl text-white lg:text-[46px] leading-none font-extrabold mb-6">
            The Orinox Standard
            for Operational Risk
            Management
          </h2>

          {/* Description */}
          <p className="text-white/90 text-[17px] leading-tight max-w-[520px]">
            Our zero-incident goal is backed by a robust framework of hazard identification,
            personnel safety training, and real-time environment monitoring across process facilities.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 w-full max-w-[640px]">
          <div className="rounded-2xl overflow-hidden">
            <motion.div 
              initial={{ x: "100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: [0.25, 1, 0.5, 1] }}
            >
              <Image
                src="/images/safety.webp"
                alt="Operational Safety"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
    </section>
  );
}
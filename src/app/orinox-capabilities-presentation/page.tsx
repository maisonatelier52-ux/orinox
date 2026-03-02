"use client";

import { motion, Variants } from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";
import Orinox from "@/components/Orinox";

const fadeUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const anim = (delay: number = 0) => ({
  variants: fadeUp,
  initial: "initial",
  whileInView: "animate",
  viewport: { once: true },
  transition: {
    duration: 0.8,
    delay: delay,
    ease: [0.21, 0.47, 0.32, 0.98] as const,
  }
});

export default function OrinoxCapabilitiesPresentation() {
  return (
    <div className="flex flex-col bg-black">
      {/* 
        This page represents a high-end presentation.
        Each section is fully expanded to allow for granular control over every element.
      */}

      <Orinox />

      {/* 1. UPSTREAM/MIDSTREAM OVERVIEW (Special Upstream Layout) */}
      <section className="relative min-h-screen w-full overflow-hidden block">
        <img src="/images/e-p.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 min-h-screen flex flex-col px-6 md:px-32 text-white py-20 md:py-0">
          <div className="flex-1 flex justify-end items-center">
            <div className="text-right space-y-4 md:space-y-4">
              <motion.div {...anim(0.1)} className="flex flex-col items-end">
                <p className="text-white/80 text-[12px] md:text-[13px] font-medium tracking-normal mb-1">Upstream (Exploration & Production)</p>
                <h1 className="text-white text-4xl md:text-[86px] font-extralight leading-none tracking-tight">E&P</h1>
              </motion.div>
              <motion.div {...anim(0.3)} className="flex flex-col items-end">
                <p className="text-white/80 text-[12px] md:text-[13px] font-medium tracking-normal mb-1">Midstream (Transportation & Storage)</p>
                <h1 className="text-white text-4xl md:text-[86px] font-extralight leading-none tracking-tight">T&S</h1>
              </motion.div>
            </div>
          </div>
          <motion.div {...anim(0.5)} className="flex justify-end pb-12 md:pb-24">
            <p className="max-w-xl text-right text-white/70 text-[12px] md:text-[13px] font-medium leading-[1.7] tracking-normal">
              ORINOX is a full-service oil drilling company operating across the Upstream (Exploration & Production) and Midstream (Transportation & Storage) segments of the oil and gas value chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="relative min-h-screen w-full overflow-hidden block py-20 px-6 md:px-32">
        <img
          src="/images/storage-solutions1.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-20 max-w-5xl text-white flex flex-col h-full justify-center">
          <motion.p {...anim(0.1)} className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium text-white/70 mb-5">
            WHO WE ARE
          </motion.p>
          <motion.h1 {...anim(0.2)} className="text-3xl md:text-[56px] font-bold leading-[1.1] md:leading-[1.05] mb-5 tracking-tight">
            Precision Drilling &<br />
            Low-Carbon Infrastructure Partner
          </motion.h1>
          <motion.p {...anim(0.3)} className="text-[15px] md:text-[18px] font-bold mb-6 tracking-normal text-white">
            High-performance drilling and future-ready oil & gas infrastructure
          </motion.p>
          <motion.div {...anim(0.4)} className="space-y-4 mb-10">
            <p className="text-[13px] md:text-[14px] text-white/80 leading-relaxed font-normal max-w-2xl">
              Specialist drilling and field development partner (Upstream & Near-Field Midstream).
              <br className="hidden md:block" />
              Combining drilling excellence with digital optimization and low-carbon readiness.
              <br className="hidden md:block" />
              Targeting attractive IRRs across drilling, CCUS, and hydrogen-ready advisory.
            </p>
          </motion.div>
          <motion.div {...anim(0.5)}>
            <button className="px-8 py-3.5 border rounded-[5px] border-white/60 text-[10px] font-medium uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
              Know More
            </button>
          </motion.div>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="relative min-h-screen w-full overflow-hidden block py-20 px-6 md:px-32">
        <img
          src="/images/responsible-hydrocarbons-quantifiable-esc-metrics.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-20 max-w-5xl text-white flex flex-col h-full justify-center">
          <motion.p {...anim(0.1)} className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium text-white/70 mb-6">
            WHAT WE DO
          </motion.p>
          <motion.h1 {...anim(0.2)} className="text-3xl md:text-5xl lg:text-[52px] font-bold leading-[1.2] md:leading-[1.1] mb-8 tracking-tight max-w-4xl">
            We develop and manage Critical,<br className="hidden md:block" />
            Capital-Intensive Infrastructure<br className="hidden md:block" />
            for the Oil & Gas Industry
          </motion.h1>
          <motion.div {...anim(0.3)} className="space-y-6 mb-12 max-w-2xl">
            <p className="text-[14px] md:text-[15px] text-white/90 leading-relaxed font-normal">
              Orinox Holding was founded with a clear mandate: to deliver technical excellence and absolute transparency to the petroleum infrastructure sector. Since our inception as a specialized engineering firm, we have evolved into a premier global organization, managing upstream exploration and midstream logistics with unparalleled precision.
            </p>
            <p className="text-[14px] md:text-[15px] text-white/90 leading-relaxed font-normal">
              Our path is defined by disciplined innovation and high-integrity development, ensuring sustained resource security and operational efficiency throughout the energy value chain.
            </p>
          </motion.div>
          <motion.div {...anim(0.4)}>
            <button className="px-10 py-3.5 border rounded-[5px] border-white/60 text-[11px] font-medium uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300">
              Know More
            </button>
          </motion.div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="relative min-h-screen w-full overflow-hidden block py-20 px-6 md:px-32 flex flex-col justify-end">
        <img
          src="/images/transition-capabilities.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 lg:gap-32 max-w-7xl">
            {/* Mission */}
            <motion.div {...anim(0.1)} className="flex flex-col">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium text-white/70 mb-5">
                MISSION
              </p>
              <h2 className="text-xl md:text-2xl lg:text-[26px] font-medium leading-[1.5] text-white">
                To deliver high-precision infrastructure and<br className="hidden lg:block" />
                technical reliability across the global energy<br className="hidden lg:block" />
                value chain.
              </h2>
            </motion.div>

            {/* Vision */}
            <motion.div {...anim(0.3)} className="flex flex-col">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium text-white/70 mb-5">
                VISION
              </p>
              <h2 className="text-xl md:text-2xl lg:text-[26px] font-medium leading-[1.5] text-white">
                Setting the global standard for operational<br className="hidden lg:block" />
                transparency and technical mastery in<br className="hidden lg:block" />
                petroleum logistics.
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CORE VALUES */}
      <section className="relative min-h-screen w-full overflow-hidden block py-20 px-6 md:px-32">
        <img
          src="/images/integrated-cross-sector-synergy1.png"
          alt="Refinery background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 " />

        {/* Core Values Header */}
        <motion.div {...anim()} className="relative z-20 flex items-center space-x-4 md:space-x-6 mb-12 md:mb-20">
          <img
            src="/images/logo1.png"
            alt="Orinox Logo"
            className="h-[40px] md:h-[70px] w-auto opacity-95 object-contain"
          />
          <h1 className="text-3xl md:text-[64px] font-bold text-white tracking-tight">Core Values</h1>
        </motion.div>

        {/* Values Grid */}
        <div className="relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-20 max-w-7xl">
            {/* Absolute Integrity */}
            <motion.div {...anim(0.1)} className="flex flex-col border-t border-white/20 pt-6 md:pt-8">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tight">Absolute Integrity</h3>
              <p className="text-white/80 text-[13px] md:text-[14px] leading-relaxed font-normal">
                Operating with uncompromising transparency and ethical rigor across all global energy exploration and production frameworks.
              </p>
            </motion.div>

            {/* Strategic Reliability */}
            <motion.div {...anim(0.2)} className="flex flex-col border-t border-white/20 pt-6 md:pt-8">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tight">Strategic Reliability</h3>
              <p className="text-white/80 text-[13px] md:text-[14px] leading-relaxed font-normal">
                Upholding the standard for industrial-scale reliability in midstream logistics, ensuring secure energy transportation networks.
              </p>
            </motion.div>

            {/* Technical Mastery */}
            <motion.div {...anim(0.3)} className="flex flex-col border-t border-white/20 pt-6 md:pt-8">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tight">Technical Mastery</h3>
              <p className="text-white/80 text-[13px] md:text-[14px] leading-relaxed font-normal">
                Advancing energy operations through precision engineering, digital infrastructure, and innovative technical advisory services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. STRATEGIC LEADERSHIP */}
      <section className="relative min-h-screen w-full overflow-hidden block py-20 px-6 md:px-32 flex flex-col justify-end">
        <img
          src="/images/modularity-and-rapid-deployment.png"
          alt="Strategic Leadership"
          className="absolute brightness-250 inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-20 max-w-4xl text-white">
          <motion.h1 {...anim(0.1)} className="text-3xl md:text-[58px] font-bold text-white tracking-tight mb-6">
            Strategic Leadership
          </motion.h1>
          <motion.p {...anim(0.2)} className="text-[14px] md:text-[16px] text-white/90 leading-relaxed font-normal max-w-2xl">
            Orinox is guided by a team of industry veterans with deep expertise in petroleum engineering and midstream infrastructure. Our leadership is committed to transparency, technical innovation, and delivering the highest level of resource security to our global partners.
          </motion.p>
        </div>
      </section>

      {/* 7. ADVANCING THE FRONTIER */}
      <section className="relative min-h-screen w-full overflow-hidden block py-20 px-6 md:px-32 flex flex-col items-center justify-center">
        <img
          src="/images/future1.png"
          alt="Refinery Aerial View"
          className="absolute brightness-200 inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center">
          <motion.h1 {...anim(0.1)} className="text-3xl md:text-5xl lg:text-[54px] font-bold text-white mb-6 leading-tight max-w-5xl tracking-tight">
            Advancing the Frontier of<br className="hidden md:block" />
            Petroleum Infrastructure
          </motion.h1>
          <motion.p {...anim(0.2)} className="text-white/90 text-[14px] md:text-[16px] leading-relaxed max-w-3xl mb-12 font-normal">
            Orinox Holding stands at the intersection of technical mastery and industry reliability.<br className="hidden md:block" />
            We deliver the foundational systems that drive exploration, production, and midstream efficiency across the global oil and gas sector.
          </motion.p>
          <motion.div {...anim(0.3)} className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            <button className="w-full sm:min-w-[180px] px-8 py-3.5 bg-white text-black text-[11px] font-bold uppercase tracking-[0.15em] rounded-[5px] hover:bg-white/90 transition-all duration-300">
              View Holding
            </button>
            <button className="w-full sm:min-w-[180px] px-8 py-3.5 border border-white text-white text-[11px] font-bold uppercase tracking-[0.15em] rounded-[5px] hover:bg-white/10 transition-all duration-300">
              Contact Experts
            </button>
          </motion.div>
        </div>
      </section>

      {/* 8. INTEGRATED INFRASTRUCTURE */}
      <section className="relative min-h-screen w-full overflow-hidden block py-20 px-6 md:px-32 flex flex-col justify-center">
        <img
          src="/images/future-capabilities1.png"
          alt="Pumpjacks at sunset"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-20 max-w-5xl text-white flex flex-col">
          <motion.h1 {...anim(0.1)} className="text-3xl md:text-4xl lg:text-[52px] font-bold leading-[1.2] md:leading-[1.1] mb-8 tracking-tight max-w-4xl">
            Integrated Infrastructure for<br className="hidden md:block" />
            Upstream and Midstream<br className="hidden md:block" />
            Excellence
          </motion.h1>
          <motion.div {...anim(0.2)} className="space-y-6 mb-12 max-w-2xl">
            <p className="text-[14px] md:text-[12px] text-white/90 leading-relaxed font-normal">
              Orinox Holding serves as a strategic force in the global energy sector, orchestrating technical success across the entire oil and gas value chain. From high-precision drilling frameworks to sophisticated process infrastructure, we deliver the technical solutions that drive operational efficiency and resource security.
            </p>
            <p className="text-[14px] md:text-[12px] text-white/90 leading-relaxed font-normal">
              We maintain operational excellence through absolute integrity and transparency. By integrating innovative engineering with streamlined midstream logistics, Orinox provides the foundational reliability required for industrial-scale energy production, transportation, and strategic petroleum management.
            </p>
          </motion.div>
          <motion.div {...anim(0.3)}>
            <button className="px-10 py-3.5 border rounded-[5px] border-white/60 text-[11px] font-medium uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300">
              Know More
            </button>
          </motion.div>
        </div>
      </section>

      {/* 9. CORE OPERATIONAL SECTORS */}
      <section className="relative min-h-screen w-full overflow-hidden block py-20 px-6 md:px-32 text-center">
        <img
          src="/images/gathering-and-transportaion.png"
          alt="Refinery complex"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Header content centered top-mid */}
        <div className="relative z-20 mb-16 md:mb-24">
          <motion.h1 {...anim(0.1)} className="text-3xl md:text-5xl lg:text-[62px] font-bold text-white mb-6 tracking-tight">
            Core Operational Sectors
          </motion.h1>
          <motion.p {...anim(0.2)} className="text-white/80 text-[14px] md:text-[16px] max-w-3xl mx-auto leading-relaxed">
            Driving technical excellence across the integrated oil and gas value chain with precision-led infrastructure solutions.
          </motion.p>
        </div>

        {/* Sectors Grid */}
        <div className="relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 max-w-7xl mx-auto text-left">
            {/* Exploration */}
            <motion.div {...anim(0.3)} className="flex flex-col">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-4 tracking-tight">Exploration</h3>
              <p className="text-white/70 text-[13px] md:text-[14px] leading-relaxed mb-6 md:min-h-[60px]">
                Identification and assessment of high-potential upstream assets leveraging advanced geological modeling and seismic evaluation protocols.
              </p>
              <div>
                <button className="px-8 py-2.5 border rounded-[5px] border-white/40 text-[10px] font-medium uppercase tracking-[0.1em] text-white/80 hover:bg-white hover:text-black transition-all duration-300">
                  Technical Specs
                </button>
              </div>
            </motion.div>

            {/* Production */}
            <motion.div {...anim(0.4)} className="flex flex-col">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-4 tracking-tight">Production</h3>
              <p className="text-white/70 text-[13px] md:text-[14px] leading-relaxed mb-6 md:min-h-[60px]">
                Optimizing asset lifecycle yields through innovative field development techniques and high-integrity rig infrastructure management.
              </p>
              <div>
                <button className="px-8 py-2.5 border rounded-[5px] border-white/40 text-[10px] font-medium uppercase tracking-[0.1em] text-white/80 hover:bg-white hover:text-black transition-all duration-300">
                  Technical Specs
                </button>
              </div>
            </motion.div>

            {/* Midstream Logistics */}
            <motion.div {...anim(0.5)} className="flex flex-col">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-4 tracking-tight">Midstream Logistics</h3>
              <p className="text-white/70 text-[13px] md:text-[14px] leading-relaxed mb-6 md:min-h-[60px]">
                Engineering resilient midstream infrastructure for the secure and reliable transportation of global petroleum resources across vast networks.
              </p>
              <div>
                <button className="px-8 py-2.5 border rounded-[5px] border-white/40 text-[10px] font-medium uppercase tracking-[0.1em] text-white/80 hover:bg-white hover:text-black transition-all duration-300">
                  Technical Specs
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. INTEGRATED TECHNICAL INFRASTRUCTURE */}
      <section className="relative min-h-screen w-full overflow-hidden block py-20 px-6 md:px-32 flex flex-col justify-center">
        <img
          src="/images/oil-and-gas-processing.png"
          alt="Refinery Infrastructure"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-20 flex flex-col space-y-10 md:space-y-12 max-w-4xl text-white">

          {/* Block 1 */}
          <motion.div {...anim(0.1)} className="space-y-3">
            <h1 className="text-2xl md:text-4xl lg:text-[42px] font-bold leading-[1.2] md:leading-[1.1] tracking-tight">
              Integrated Technical<br className="hidden md:block" />
              Infrastructure &<br className="hidden md:block" />
              Midstream Logistics
            </h1>
            <p className="text-[13px] md:text-[13px] text-white/80 leading-relaxed max-w-2xl font-normal">
              Orinox Holding delivers superior technical mastery across the petroleum value chain, ensuring operational success from drilling frameworks to midstream distribution.
            </p>
          </motion.div>

          {/* Block 2 */}
          <motion.div {...anim(0.3)} className="space-y-3">
            <h2 className="text-xl md:text-3xl lg:text-[38px] font-bold leading-tight tracking-tight">
              Digital Midstream<br className="hidden md:block" />
              Infrastructure
            </h2>
            <p className="text-[13px] md:text-[13px] text-white/80 leading-relaxed max-w-2xl font-normal">
              Optimizing pipeline gathering systems through advanced telemetry and real-time SCADA monitoring to ensure secure energy distribution.
            </p>
          </motion.div>

          {/* Block 3 */}
          <motion.div {...anim(0.5)} className="space-y-3">
            <h2 className="text-xl md:text-3xl lg:text-[38px] font-bold leading-tight tracking-tight">
              Asset Integrity &<br className="hidden md:block" />
              Compliance
            </h2>
            <p className="text-[13px] md:text-[13px] text-white/80 leading-relaxed max-w-2xl font-normal">
              Orinox ensures Tier-1 performance across the value chain through uncompromising adherence to ISO and IOGP integrated standards.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 11. SAFETY AT SCALE */}
      <section className="relative min-h-screen w-full overflow-hidden block bg-black flex flex-col justify-center px-6 md:px-32 py-20">
        <div className="relative z-20 max-w-5xl">
          <motion.p {...anim(0.1)} className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-medium text-white/70 mb-8">
            SAFETY AT SCALE
          </motion.p>
          <motion.h1 {...anim(0.2)} className="text-3xl md:text-5xl lg:text-[54px] font-bold text-white mb-8 tracking-tight max-w-4xl leading-[1.2] md:leading-[1.1]">
            The Orinox Standard for<br className="hidden md:block" />
            Operational Risk<br className="hidden md:block" />
            Management
          </motion.h1>
          <motion.p {...anim(0.3)} className="text-[13px] md:text-[14px] text-white/80 leading-relaxed max-w-2xl font-normal">
            Our zero-incident goal is backed by a robust framework of hazard identification, personnel safety training, and real-time environment monitoring across process facilities.
          </motion.p>
        </div>
      </section>

      {/* 12. GLOBAL FOOTPRINT */}
      <section className="relative min-h-screen w-full overflow-hidden block py-20 px-6 md:px-32 flex flex-col justify-between">
        <img
          src="/images/orinox-global-locations.jpg"
          alt="Global Port Operations"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Header content right-aligned */}
        <div className="relative z-20 text-right">
          <motion.h1 {...anim(0.1)} className="text-4xl md:text-[68px] font-bold text-white tracking-tight mb-4">
            Global Footprint
          </motion.h1>
          <motion.div {...anim(0.2)} className="w-full h-[1px] bg-white/30 mb-12 ml-auto max-w-2xl" />
        </div>

        {/* Hubs list right-aligned bottom */}
        <div className="relative z-20 space-y-8 text-right mt-12 md:mt-0">
          <motion.div {...anim(0.3)}>
            <p className="text-[10px] uppercase tracking-[0.25em] font-medium text-white/60 mb-1">STRATEGIC HUB</p>
            <h2 className="text-white text-2xl md:text-4xl tracking-tight font-medium md:font-normal">Dubai</h2>
          </motion.div>
          <motion.div {...anim(0.4)}>
            <p className="text-[10px] uppercase tracking-[0.25em] font-medium text-white/60 mb-1">OPERATIONAL HQ</p>
            <h2 className="text-white text-2xl md:text-4xl tracking-tight font-medium md:font-normal">London</h2>
          </motion.div>
          <motion.div {...anim(0.5)}>
            <p className="text-[10px] uppercase tracking-[0.25em] font-medium text-white/60 mb-1">TECHNICAL HUB</p>
            <h2 className="text-white text-2xl md:text-4xl tracking-tight font-medium md:font-normal">Madrid</h2>
          </motion.div>
          <motion.div {...anim(0.6)}>
            <p className="text-[10px] uppercase tracking-[0.25em] font-medium text-white/60 mb-1">REGIONAL HUB</p>
            <h2 className="text-white text-2xl md:text-4xl tracking-tight font-medium md:font-normal">Caracas</h2>
          </motion.div>
        </div>
      </section>

      {/* 13. CONTACT US */}
      <section className="relative min-h-screen w-full bg-black flex items-center px-6 md:px-32 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 w-full max-w-7xl mx-auto items-center">

          {/* Left Side - Content */}
          <motion.div {...anim(0.1)} className="flex flex-col space-y-6 text-center lg:text-left">
            <h1 className="text-3xl md:text-6xl lg:text-[68px] font-bold text-white leading-tight tracking-tight">
              Connect with our<br className="hidden lg:block" />
              petroleum experts.
            </h1>
            <p className="text-white/60 text-sm md:text-sm max-w-lg leading-relaxed mx-auto lg:mx-0">
              Facilitating upstream exploration and midstream infrastructure projects through precision engineering and technical advisory.
            </p>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div {...anim(0.3)} className="flex flex-col space-y-8 p-0 md:p-12 rounded-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4 text-center lg:text-left">Contact Us</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-white/50 font-medium">First name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors" placeholder="Enter your first name" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Last name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Email *</label>
                <input type="email" required className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors" placeholder="Enter your email" />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-wider text-white/50 font-medium">How can we help you? *</label>
                <div className="relative">
                  <select required className="w-full bg-transparent border-b border-white/20 py-2 text-white/50 focus:outline-none transition-colors appearance-none cursor-pointer">
                    <option className="bg-zinc-900" value="">Select a topic</option>
                    <option className="bg-zinc-900" value="upstream">Upstream Services</option>
                    <option className="bg-zinc-900" value="midstream">Midstream Logistics</option>
                    <option className="bg-zinc-900" value="consulting">Technical Advisory</option>
                    <option className="bg-zinc-900" value="other">Other</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] uppercase tracking-wider text-white/50 font-medium">Message *</label>
                <textarea required rows={4} className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-white transition-colors resize-none" placeholder="Tell us how we can help you"></textarea>
              </div>

              <div className="pt-6">
                <button type="submit" className="w-full py-4 border text-white/60 border-white/60 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all duration-300">
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="relative h-screen w-full bg-black overflow-hidden px-6 md:px-32 pt-12 flex flex-col justify-between">
        <img
          src="/images/first-well-to-low-carbon-evacuation-route.png"
          alt="Offshore Rig"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        <div className="relative z-20 flex flex-col space-y-12 lg:space-y-16">
          {/* Top content: Detailed Descriptions */}
          <motion.div {...anim(0.1)} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32">
            <div className="max-w-md">
              <p className="text-white/60 text-[13px] md:text-[14px] leading-relaxed font-light">
                Orinox Holding manages an integrated delivery ecosystem supported by experienced professionals, senior engineers, specialist consultants, and trusted contractor partners, with strong access to legacy systems, technical expertise, and critical project resources.
              </p>
            </div>
            <div className="max-w-md">
              <p className="text-white/60 text-[13px] md:text-[14px] leading-relaxed font-light">
                Orinox Holding was formed to advance the strategic development and efficient execution of capital-intensive projects and essential infrastructure upgrades across the upstream and midstream petroleum sectors.
              </p>
            </div>
          </motion.div>

          {/* Logo and Nav Grid */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <motion.div {...anim(0.25)} className="flex items-center">
              <img src="/images/orinox-white-logo.png" alt="Orinox" className="h-12 lg:h-14 w-auto object-contain" />
            </motion.div>

            <motion.div {...anim(0.35)} className="grid grid-cols-2 md:grid-cols-3 gap-x-12 lg:gap-x-32 gap-y-8 text-white">
              {/* Col 1 */}
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors  decoration-white/30 underline-offset-4">About</Link>
                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors  decoration-white/30 underline-offset-4">Regions</Link>
                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors  decoration-white/30 underline-offset-4">Investors</Link>
                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors  decoration-white/30 underline-offset-4">Insights</Link>
              </div>
              {/* Col 2 */}
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors  decoration-white/30 underline-offset-4">Services</Link>
                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors  decoration-white/30 underline-offset-4">Technology</Link>
                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors  decoration-white/30 underline-offset-4">Case Studies</Link>
                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors  decoration-white/30 underline-offset-4">Contact</Link>
              </div>
              {/* Col 3 */}
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors  decoration-white/30 underline-offset-4">Operations</Link>
                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors  decoration-white/30 underline-offset-4">ESG</Link>
                <Link href="/" className="text-[13px] hover:text-white/60 transition-colors  decoration-white/30 underline-offset-4">Team</Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Global Offices Section */}
        <div className="relative z-20 mt-12 md:mt-16">
          <motion.h4 {...anim(0.5)} className="text-[14px] font-bold tracking-widest text-white mb-6 md:mb-8">GLOBAL OFFICES</motion.h4>
          <motion.div {...anim(0.6)} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            <div>
              <h5 className="text-[13px] font-bold text-white mb-1">United Kingdom</h5>
              <p className="text-[12px] text-white/70 leading-relaxed font-light uppercase">Level 28, 52 Lime Street,<br className="hidden md:block" />London, EC3M 7AF,<br className="hidden md:block" />United Kingdom</p>
            </div>
            <div>
              <h5 className="text-[13px] font-bold text-white mb-1">United Arab Emirates</h5>
              <p className="text-[12px] text-white/70 leading-relaxed font-light uppercase">Vila 145, Al Manara Street,<br className="hidden md:block" />Al Safa 2, Dubai,<br className="hidden md:block" />United Arab Emirates</p>
            </div>
            <div>
              <h5 className="text-[13px] font-bold text-white mb-1">Venezuela</h5>
              <p className="text-[12px] text-white/70 leading-relaxed font-light uppercase">Edificio Epsilon CIIP<br className="hidden md:block" />3 Avenida Venezuela,<br className="hidden md:block" />Caracas 1060,<br className="hidden md:block" />Distrito Capital Piso 7</p>
            </div>
            <div>
              <h5 className="text-[13px] font-bold text-white mb-1">Madrid</h5>
              <p className="text-[12px] text-white/70 leading-relaxed font-light uppercase">Plaza de la Independencia 8,<br className="hidden md:block" />Piso 3<br className="hidden md:block" />Madrid, Spain</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-20 py-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[12px] md:text-[13px] text-white/70 tracking-wider">© 2026 Orinox Holding</p>
            <div className="flex gap-8 md:gap-12">
              <Link href="/" className="text-[12px] md:text-[13px] text-white/70 hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/" className="text-[12px] md:text-[13px] text-white/70 hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}



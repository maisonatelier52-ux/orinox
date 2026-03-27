"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { motion, AnimatePresence, useAnimationControls } from "framer-motion";


export default function OrinoxAbout() {


  return (
    <section className="relative h-screen w-full bg-black overflow-hidden text-white snap-start">


      {/* ── REVEALED CONTENT (unchanged) ── */}
      <div

        className="relative z-10 px-8 md:px-16 lg:px-28 md:pt-20"
      >
        <div className="max-w-[1100px] ">
          {/* Top bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">
            <img
              src="/images/orinox-white-logo.png"
              alt="Orinox"
              className="h-10 md:h-13 w-auto"
            />
            <h1 className="sr-only">Orinox Holding | Global Energy Infrastructure</h1>
            <h2 className="text-[10px] uppercase tracking-[0.2em] mt-2 text-white/50 font-medium">
              Leading the Strategic Development of Global Energy Infrastructure
            </h2>

            <Link href='/about'>
              <button className="rounded-md border cursor-pointer border-white/60 px-6 md:px-10 py-3 text-[12px] md:text-[13px] font-medium whitespace-nowrap hover:bg-white hover:text-black transition-colors">
                Technical Solutions
              </button>
            </Link>
          </div>

          {/* Menu */}
          <div className="mt-20 md:mt-40 text-[12px]">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6 md:gap-x-12">
              <div className="flex flex-col gap-4">
                <p className="opacity-50">About</p>
                <p>Services</p>
                <p>Operations</p>
              </div>
              <div className="flex flex-col gap-4">
                <p>Regions</p>
                <p>Contracts</p>
                <p>Technology</p>
              </div>
              <div className="flex flex-col gap-4">
                <p>E&P Services</p>
                <p>Upstream</p>
                <p>Midstream</p>
              </div>
              <div className="flex flex-col gap-4">
                <p>Investors</p>
                <p>ESG</p>
                <p>Case Studies</p>
              </div>
              <div className="flex flex-col gap-4 md:ml-auto">
                <p>Team</p>
                <p>Insights</p>
                <p>Contact</p>
              </div>
            </div>
          </div>

          {/* Corporate Summary (for word count / SEO) */}
          <div className="mt-16 text-[12px] opacity-0 h-0 pointer-events-none overflow-hidden">
            <p>
              Orinox Holding is a leading global specialized energy engineering firm. From precision
              drilling and upstream field assessment to resilient midstream logistics, we deliver
              comprehensive technical solutions across the petroleum sector. Serving strategic
              locations including Dubai, London, and Madrid, we bridge the gap between technical
              complexity and operational excellence. At the core of our technical framework is
              a commitment to absolute transparency and data-driven reliability, optimizing asset
              performance safely and efficiently for our international partners and infrastructure
              investors. With an advanced rig fleet and industry-leading geophysics expertise,
              Orinox Holding is the foundation for global energy security and infrastructure innovation.
              Our technical hubs facilitate rapid mobilization and localized advisory for high-potential
              basins, ensuring that every exploration and production project meets the highest industry
              standards. We leverage state-of-the-art technology and industry-veteran leadership to
              provide specialized drilling excellence and midstream infrastructure risk management.
            </p>
          </div>

          {/* Bottom Actions */}
          <div className="mt-10 md:mt-16 flex flex-col sm:flex-row justify-end gap-4">
            <a href="/pdf/orinox.pdf" className="text-center rounded-md border border-white/60 px-6 py-2 text-[12px]" download>
              Download Orinox
            </a>
            <Link href="/home" className="text-center rounded-md px-6 py-2 text-[12px] border border-white/60">
              Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
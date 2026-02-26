"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Orinox from "./Orinox";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";

// Seismic scan line component
function ScanLines({ count = 12 }: { count?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 h-px"
          style={{
            top: `${((i + 1) / (count + 1)) * 100}%`,
            background: `rgba(255,255,255,${0.03 + (i % 3) * 0.015})`,
          }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: [0, 1, 1, 0] }}
          transition={{
            duration: 1.6,
            delay: 0.1 + i * 0.06,
            times: [0, 0.4, 0.85, 1],
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Vertical data columns sweeping left to right
function DataColumns() {
  const cols = 20;
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex">
      {Array.from({ length: cols }).map((_, i) => (
        <motion.div
          key={i}
          className="flex-1 h-full"
          style={{
            background: `rgba(255,255,255,${0.01 + (i % 5) * 0.005})`,
          }}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: [0, 1, 1, 0], scaleY: [0, 1, 1, 0] }}
          transition={{
            duration: 1.8,
            delay: i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}
    </div>
  );
}

// Pressure ring burst — concentric rings that expand from center
function PressureRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/10"
          initial={{ width: 0, height: 0, opacity: 0.8 }}
          animate={{ width: "180vmax", height: "180vmax", opacity: 0 }}
          transition={{
            duration: 1.4,
            delay: 0.6 + i * 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}
    </div>
  );
}

type CornerBracketsProps = {
  visible: boolean;
};

function CornerBrackets({ visible }:CornerBracketsProps) {
  const corners = [
    { top: "8%", left: "5%", rotate: "0deg" },
    { top: "8%", right: "5%", rotate: "90deg" },
    { bottom: "8%", left: "5%", rotate: "-90deg" },
    { bottom: "8%", right: "5%", rotate: "180deg" },
  ];
  return (
    <>
      {corners.map((style, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 pointer-events-none"
          style={style}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: visible ? 0.35 : 0, scale: visible ? 1 : 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
        >
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 30 L2 2 L30 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      ))}
    </>
  );
}

export default function OrinoxAbout() {
  const [phase, setPhase] = useState("intro"); 

  useEffect(() => {
    const burstTimer = setTimeout(() => setPhase("burst"), 1800);
    const doneTimer = setTimeout(() => setPhase("done"), 2800);
    return () => {
      clearTimeout(burstTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <section className="relative  h-screen w-full bg-black overflow-hidden text-white">

      <AnimatePresence>
        {phase !== "done" && (
          <motion.div
            key="intro-layer"
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            animate={phase === "burst" ? {
              scale: [1, 1.06, 0],
              opacity: [1, 1, 0],
              filter: ["blur(0px)", "blur(0px)", "blur(20px)"],
            } : {}}
            transition={phase === "burst" ? {
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            } : {}}
          >
            {/* Seismic grid overlay */}
            <ScanLines count={14} />
            <DataColumns />
            <PressureRings />
            <CornerBrackets visible={phase === "intro"} />

            {/* Center: coordinate label */}
            <motion.div
              className="absolute top-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-white/30 font-mono uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              ORINOX — E&P OPERATIONS
            </motion.div>

            {/* Bottom coordinate strip */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-8 text-[9px] tracking-[0.3em] text-white/20 font-mono"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span>8°N 62°W</span>
              <span>·</span>
              <span>UPSTREAM · MIDSTREAM</span>
              <span>·</span>
              <span>SYS_INIT</span>
            </motion.div>

            {/* ── ORINOX Logo Center ── */}
            <motion.div
              className="relative z-10 w-full px-6 md:px-20"
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Orinox />
            </motion.div>

            {/* Horizontal sweep flash at burst moment */}
            <AnimatePresence>
              {phase === "burst" && (
                <motion.div
                  className="absolute inset-0 bg-white pointer-events-none"
                  initial={{ opacity: 0.15 }}
                  animate={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── REVEALED CONTENT (unchanged) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "done" ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 px-8 md:px-16 lg:px-24 md:pt-20"
      >
        <div className="max-w-[1100px] ">
          {/* Top bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">
            <img
              src="/images/orinox-white-logo.png"
              alt="Orinox"
              className="h-10 md:h-13 w-auto"
            />

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

          {/* Bottom Actions */}
          <div className="mt-16 flex flex-col sm:flex-row justify-end gap-4">
            <a href="/pdf/orinox.pdf" className="text-center rounded-md border border-white/60 px-6 py-2 text-[12px]" download>
              Download Orinox
            </a>
            <Link href="/home" className="text-center rounded-md px-6 py-2 text-[12px] border border-white/60">
              Home
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
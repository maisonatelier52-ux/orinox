'use client';

import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const OrinoxSplash = () => {
  const [showContent, setShowContent] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      if (videoRef.current.currentTime >= videoRef.current.duration - 2) {
        setShowContent(true);
      }
    }
  };

  const handleVideoError = () => {
    setShowContent(true);
    setVideoFinished(true);
  };

  const handleVideoEnd = () => {
    setShowContent(true);
    setVideoFinished(true); // Remove video after it ends
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans selection:bg-gray-800 flex items-center justify-center">
      <Head>
        <title>ORINOX | London • Dubai • Caracas • Madrid</title>
      </Head>

      {/* Background Video (Fades out when finished) */}
      <AnimatePresence>
        {!videoFinished && (
          <motion.video
            key="splash-video"
            ref={videoRef}
            autoPlay
            muted
            playsInline
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnd}
            onError={handleVideoError}
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/video/orinox-exploration.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        )}
      </AnimatePresence>

      {/* Subtle Overlay (Only active while video is playing) */}
      {!videoFinished && (
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 z-1 ${showContent ? 'opacity-100' : 'opacity-0'}`}></div>
      )}

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <div className="relative z-10 w-full max-w-[1400px] flex flex-col md:flex-row items-center justify-center md:justify-between px-10 md:px-26 py-20">

            {/* Branding Section */}
            <div className="flex flex-col items-center space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 2.0 }}
                className="flex items-center space-x-4"
              >
                <img
                  src="/images/orinox-white-logo.png"
                  alt="Orinox Logo"
                  className="h-17 md:h-17 w-auto"
                />
                <h1 className="text-[12px] hidden md:text-[14px] font-bold tracking-[0.3em] uppercase text-white/90">
                  Orinox Holding | Global Energy Infrastructure
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut", delay: 1.2 }}
                className="flex flex-col items-center space-y-4"
              >
                <h2 className="text-[10px] hidden md:text-[10px] tracking-[0.2em] uppercase text-white/50 font-medium">
                  Global Energy Hubs & Regional Operations
                </h2>
                <div className="flex flex-wrap justify-center text-center gap-4 md:gap-5 text-[10px] md:text-[10px] tracking-[0.2em] uppercase text-white/70">
                  <span className="hover:text-white transition-colors cursor-default">London</span>
                  <span className="hover:text-white transition-colors cursor-default">Dubai</span>
                  <span className="hover:text-white transition-colors cursor-default">Caracas</span>
                  <span className="hover:text-white transition-colors cursor-default">Madrid</span>
                </div>
                <p className="sr-only">
                  Orinox Holding is a global leader in technical energy services and petroleum infrastructure.
                  We specialize in the strategic development and management of high-value energy assets across the
                  entire oil and gas value chain. Our expertise spans upstream exploration, high-precision drilling
                  operations, and complex midstream logistics networks. By integrating technical mastery with
                  absolute transparency, Orinox Holding provides the foundational reliability required for industrial-scale
                  energy production and transportation. Operating from strategic hubs in the United States, Spain,
                  and the United Arab Emirates, we deliver specialized advisory and infrastructure management to
                  ensure global energy security and operational efficiency. Our technical hubs in London, Dubai,
                  Madrid, and Caracas facilitate rapid mobilization and localized advisory for high-potential basins.
                  We are committed to delivering technical success through innovative engineering, digital
                  infrastructure, and a zero-incident safety framework. Our operations are guided by a team of
                  industry veterans dedicated to optimizing asset lifecycle yields and protecting long-term field
                  longevity. Orinox Holding serves as a strategic partner to state energy organizations and
                  private infrastructure investors, providing the technical frameworks that drive global energy
                  progress.
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col space-y-4 w-full max-w-xs mt-32 md:mt-0">
              <Link href="/orinox-capabilities-presentation-dem" className="w-full">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  className="w-full py-4 px-4 border border-white/90 rounded-full text-[12.34px] transition-all duration-300 hover:underline cursor-pointer text-center"
                >
                  ORINOX Capabilities Presentation
                </motion.button>
              </Link>
              <Link href="/home" className="w-full">

                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  className="w-full py-4 px-4 border border-white/90 rounded-full text-[12.34px] transition-all duration-300 hover:underline cursor-pointer"
                >
                  Continue to Orinox Website
                </motion.button>
              </Link>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Subtle background texture/overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-1"></div>
    </div>
  );
};

export default OrinoxSplash;
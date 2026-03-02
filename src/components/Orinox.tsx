"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Orinox() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    if (latest > previous && latest > 150) {
      // Scrolling down and past threshold
      if (!isOpen) setHidden(true);
    } else {
      // Scrolling up or at the top
      setHidden(false);
    }
    lastScrollY.current = latest;
  });

  const columns = [
    {
      title: "About",
      items: ["Services", "Operations"],
    },
    {
      title: "Regions",
      items: ["Contracts", "Technology"],
    },
    {
      title: "E&P Services",
      items: ["Upstream", "Midstream"],
    },
    {
      title: "Investors",
      items: ["ESG", "Case Studies / Projects"],
    },
    {
      title: "Team",
      items: ["Insights", "Contact"],
    },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-[100] bg-black text-white transition-[height] duration-700 ease-[0.21, 0.47, 0.32, 0.98] overflow-hidden ${isOpen ? "h-[60vh] md:h-[50vh]" : "h-20 md:h-24"
        }`}
    >
      {/* Background Illustration - Visible in the entire area */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/who-we-are.png"
          alt="Technical Illustration"
          className="h-full w-full object-cover"
        />
        {/* Subtle overlay to ensure text readability enquanto keeping the dark aesthetic */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-col h-full px-6 md:px-32">
        {/* Navbar Header (Always visible at the top) */}
        <div className="flex justify-between items-center h-20 md:h-24 flex-shrink-0">
          <Link href="/">
            <img
              src="/images/orinox-white-logo.png"
              alt="Orinox Logo"
              className="h-8 md:h-12 w-auto"
            />
          </Link>
          <div className="flex items-center space-x-6 md:space-x-12">
            <button className="hidden sm:block text-[10px] md:text-[10px] font-medium uppercase tracking-[0.2em] px-6 py-2 border border-white/70 rounded-md hover:bg-white hover:text-black transition-all duration-300">
              Client Login
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-white/70 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "open" : "closed"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Dropdown Content - Revealed on Click */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 flex items-center justify-center pb-12 overflow-y-auto"
            >
              <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 md:gap-x-20 lg:gap-x-48 gap-y-8 md:gap-y-0 max-w-7xl w-full">
                {columns.map((column, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.05 }}
                    className="flex flex-col space-y-2 md:space-y-4"
                  >
                    <h3 className="text-white text-[11px] md:text-[12px] font-medium  tracking-wider cursor-pointer hover:text-white/60 transition-colors">
                      {column.title}
                    </h3>
                    <div className="flex flex-col space-y-2 md:space-y-3">
                      {column.items.map((item, itemIdx) => (
                        <p
                          key={itemIdx}
                          className="text-white text-[11px] md:text-[12px] font-medium tracking-normal cursor-pointer hover:text-white/60 transition-colors"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}


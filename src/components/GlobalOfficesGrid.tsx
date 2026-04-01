"use client";

import { motion } from "framer-motion";

const offices = [
    {
        city: "London",
        country: "United Kingdom",
        address: ["Level 28, 52 Lime Street", "London, EC3M 7AF", "United Kingdom"],
        type: "European Headquarters",
        phone: "+44 (0) 20 7000 0000"
    },
    {
        city: "Dubai",
        country: "United Arab Emirates",
        address: ["Vila 145, Al Manara Street", "Al Safa 2, Dubai", "United Arab Emirates"],
        type: "MENA Operations Hub",
        phone: "+971 (0) 4 000 0000"
    },
    {
        city: "Caracas",
        country: "Venezuela",
        address: ["Edificio Epsilon CIIP", "3 Avenida Venezuela", "Caracas 1060, Distrito Capital"],
        type: "LatAm Operations",
        phone: "+58 (0) 212 000 0000"
    },
    {
        city: "Madrid",
        country: "Spain",
        address: ["Plaza de la Independencia 8", "Piso 3", "Madrid, Spain"],
        type: "Strategic Advisory Hub",
        phone: "+34 91 000 00 00"
    }
];

export default function GlobalOfficesGrid() {
    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    return (
        <section className="bg-black text-white py-24 px-8 md:px-16 lg:px-24 xl:px-32 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-20">
                    <motion.h2
                        {...anim(0.1)}
                        className="text-xl md:text-2xl lg:text-2xl font-bold tracking-tight mb-4"
                    >
                        International Operations
                    </motion.h2>
                    <motion.p
                        {...anim(0.2)}
                        className="text-[12px] md:text-[13px] text-zinc-400 font-light max-w-2xl leading-relaxed"
                    >
                        Our globally distributed offices provide localized intelligence and responsive project management capabilities across Europe, the Middle East, and Latin America.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {offices.map((office, index) => (
                        <motion.div
                            key={index}
                            {...anim(0.3 + index * 0.1)}
                            className="group flex flex-col p-8 bg-zinc-900/30 border border-white/5 rounded-sm hover:bg-zinc-900/60 transition-colors"
                        >
                            <span className="text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase mb-6">
                                {office.type}
                            </span>
                            <h3 className="text-xl font-bold tracking-tight mb-4">{office.city}</h3>
                            <div className="text-[12px] text-zinc-400 font-light leading-relaxed mb-6 space-y-1">
                                {office.address.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                            <div className="mt-auto pt-6 border-t border-white/5">
                                <span className="text-[11px] font-medium text-white/60 tracking-wider">
                                    {office.phone}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Orinox from "@/components/Orinox";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function RegisterPageClient() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [errorObj, setErrorObj] = useState("");

    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    const { registerUser } = useAuth();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorObj("");

        if (formData.password !== formData.confirmPassword) {
            setErrorObj("Passwords do not match. Please verify.");
            setIsSubmitting(false);
            return;
        }

        // Simulate registration process
        setTimeout(() => {
            setIsSubmitting(false);

            if (formData.email && formData.password && formData.fullName) {
                // Store registration data
                const success = registerUser({
                    fullName: formData.fullName,
                    email: formData.email,
                    password: formData.password
                });

                if (success) {
                    setIsRegistered(true);
                    // No automatic redirect, user must go to login manually
                } else {
                    setErrorObj("Account with this email already exists.");
                }
            } else {
                setErrorObj("Required fields missing.");
            }
        }, 1500);
    };

    return (
        <div className="flex flex-col bg-black min-h-screen">
            <Orinox />

            <section className="relative flex-grow flex items-center justify-center py-32 px-6">
                {/* Background Ambient */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <img
                        src="/images/tech-stack.jpg"
                        alt="Corporate Data"
                        className="w-full h-full object-cover opacity-[0.15] grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />
                </div>

                <div className="relative z-10 w-full max-w-xl">
                    <AnimatePresence mode="wait">
                        {isRegistered ? (
                            <motion.div
                                key="success"
                                {...anim(0)}
                                className="bg-zinc-900/40 border border-white/10 p-10 md:p-12 text-center rounded-sm backdrop-blur-md flex flex-col items-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                                    <Check className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">Registration Complete</h2>
                                <p className="text-[10px] text-zinc-400 font-light leading-relaxed mb-8">
                                    Your institutional account has been successfully created. You may now proceed to the secure portal using your credentials.
                                </p>
                                <Link href="/login">
                                    <button className="px-8 py-3 bg-white text-black text-[10px] uppercase font-bold tracking-[0.2em] rounded-sm hover:bg-white/90">
                                        RETURN TO LOGIN
                                    </button>
                                </Link>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="form"
                                {...anim(0.1)}
                                className="bg-zinc-900/60 border border-white/10 p-8 md:p-8 rounded-sm backdrop-blur-md shadow-2xl"
                            >
                                <div className="text-center mb-10">
                                    <motion.span {...anim(0.2)} className="text-[9px] font-bold tracking-[0.3em] text-white/50 uppercase mb-4 block">
                                        CLIENT SECURE NETWORK
                                    </motion.span>
                                    <motion.h1 {...anim(0.3)} className="text-xl md:text-2xl font-bold text-white tracking-tight">
                                        Institutional Registration
                                    </motion.h1>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {errorObj && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] p-3 text-center uppercase tracking-widest font-bold">
                                            {errorObj}
                                        </motion.div>
                                    )}

                                    <motion.div {...anim(0.4)} className="flex flex-col gap-2">
                                        <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Full Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                            placeholder="ENTER YOUR NAME"
                                            className="bg-black/50 border border-white/10 p-3 text-[10px] text-white focus:outline-none focus:border-white/30 placeholder:opacity-20 transition-colors rounded-sm"
                                        />
                                    </motion.div>

                                    <motion.div {...anim(0.5)} className="flex flex-col gap-2">
                                        <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="EMAIL@EXAMPLE.COM"
                                            className="bg-black/50 border border-white/10 p-3 text-[10px] text-white focus:outline-none focus:border-white/30 placeholder:opacity-20 transition-colors rounded-sm"
                                        />
                                    </motion.div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <motion.div {...anim(0.6)} className="flex flex-col gap-2">
                                            <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Password</label>
                                            <input
                                                type="password"
                                                required
                                                value={formData.password}
                                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                placeholder="••••••••"
                                                className="bg-black/50 border border-white/10 p-3 text-[10px] text-white focus:outline-none focus:border-white/30 placeholder:opacity-20 transition-colors rounded-sm tracking-widest"
                                            />
                                        </motion.div>

                                        <motion.div {...anim(0.7)} className="flex flex-col gap-2">
                                            <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Verify Password</label>
                                            <input
                                                type="password"
                                                required
                                                value={formData.confirmPassword}
                                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                                placeholder="••••••••"
                                                className="bg-black/50 border border-white/10 p-3 text-[10px] text-white focus:outline-none focus:border-white/30 placeholder:opacity-20 transition-colors rounded-sm tracking-widest"
                                            />
                                        </motion.div>
                                    </div>

                                    <motion.div {...anim(0.9)} className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-4 border border-white/20 text-[10px] uppercase font-bold tracking-[0.2em] transition-all rounded-sm flex items-center justify-center gap-4 ${isSubmitting ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border-zinc-700' : 'hover:bg-white hover:text-black cursor-pointer'}`}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-3 h-3 border text-white/70 border-zinc-400 border-t-white rounded-full animate-spin" />
                                                    VALIDATING...
                                                </>
                                            ) : 'REQUEST ACCESS'}
                                        </button>
                                    </motion.div>

                                    <motion.div {...anim(1.0)} className="pt-6 text-center border-t border-white/10 mt-6 md:mt-8">
                                        <p className="text-[11px] text-zinc-500">
                                            Already posses platform credentials?{' '}
                                            <Link href="/login" className="text-white hover:text-white/70 transition-colors underline decoration-white/30">
                                                Initiate Login
                                            </Link>
                                        </p>
                                    </motion.div>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            <Footer />
        </div>
    );
}

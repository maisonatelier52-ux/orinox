"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Orinox from "@/components/Orinox";
import Footer from "@/components/Footer";
import { Check, ArrowLeft } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function ForgotPasswordClient() {
    const { generateResetCode, verifyResetCode, resetPassword } = useAuth();
    const router = useRouter();

    const [step, setStep] = useState<"email" | "code" | "reset" | "success">("email");
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorObj, setErrorObj] = useState("");

    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorObj("");

        setTimeout(() => {
            const result = generateResetCode(email);
            setIsSubmitting(false);

            if (result) {
                // In this mock, we alert the code so the user knows it
                alert(`[MOCK EMAIL SYSTEM]\nTo: ${email}\nYour 4-digit verification code is: ${result}`);
                setStep("code");
            } else {
                setErrorObj("No institutional record found for this domain.");
            }
        }, 1200);
    };

    const handleCodeSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setErrorObj("");

        if (verifyResetCode(email, code)) {
            setStep("reset");
        } else {
            setErrorObj("Invalid verification code. Access denied.");
        }
    };

    const handleResetSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorObj("");

        if (newPassword !== confirmPassword) {
            setErrorObj("Passwords do not match.");
            setIsSubmitting(false);
            return;
        }

        setTimeout(() => {
            setIsSubmitting(false);
            const success = resetPassword(email, newPassword);

            if (success) {
                setStep("success");
            } else {
                setErrorObj("Session expired. Please restart the protocol.");
                setStep("email");
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

                <div className="relative z-10 w-full max-w-md">
                    <AnimatePresence mode="wait">
                        {step === "success" ? (
                            <motion.div
                                key="success"
                                {...anim(0)}
                                className="bg-zinc-900/40 border border-white/10 p-10 md:p-12 text-center rounded-sm backdrop-blur-md flex flex-col items-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                                    <Check className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">Access Restored</h2>
                                <p className="text-[10px] text-zinc-400 font-light leading-relaxed mb-8">
                                    Entity credentials have been successfully updated. Your new security key is now active.
                                </p>
                                <Link href="/login">
                                    <button className="px-8 py-3 bg-white text-black text-[10px] uppercase font-bold tracking-[0.2em] rounded-sm hover:bg-white/90">
                                        INITIATE LOGIN
                                    </button>
                                </Link>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={step}
                                {...anim(0.1)}
                                className="bg-zinc-900/60 border border-white/10 p-8 md:p-8 rounded-sm backdrop-blur-md shadow-2xl"
                            >
                                <div className="text-center mb-10">
                                    <motion.span {...anim(0.2)} className="text-[9px] font-normal tracking-[0.3em] text-white/50 uppercase mb-2 block">
                                        STRESS TEST PROTOCOL
                                    </motion.span>
                                    <motion.h1 {...anim(0.3)} className="text-xl md:text-2xl font-bold text-white tracking-tight">
                                        {step === "email" && "Access Recovery"}
                                        {step === "code" && "Identity Verification"}
                                        {step === "reset" && "Update Security Key"}
                                    </motion.h1>
                                    <p className="text-[9px] text-zinc-500 uppercase tracking-widest mt-4">
                                        {step === "email" && "Enter your registered email to receive a secure token."}
                                        {step === "code" && `A 4-digit token was sent to ${email}`}
                                        {step === "reset" && "Define your new institutional access key."}
                                    </p>
                                </div>

                                {errorObj && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] p-3 text-center uppercase tracking-widest font-bold mb-6">
                                        {errorObj}
                                    </motion.div>
                                )}

                                {step === "email" && (
                                    <form onSubmit={handleEmailSubmit} className="space-y-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Institutional Email</label>
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="EMAIL@EXAMPLE.COM"
                                                className="bg-black/50 border border-white/10 p-3 text-[10px] text-white focus:outline-none focus:border-white/30 transition-colors rounded-sm"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 border border-white/20 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all rounded-sm"
                                        >
                                            {isSubmitting ? "PROCESSING..." : "SEND CODE"}
                                        </button>
                                    </form>
                                )}

                                {step === "code" && (
                                    <form onSubmit={handleCodeSubmit} className="space-y-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Verification Token</label>
                                            <input
                                                type="text"
                                                required
                                                maxLength={4}
                                                value={code}
                                                onChange={(e) => setCode(e.target.value)}
                                                placeholder="0000"
                                                className="bg-black/50 border border-white/10 p-4 text-center text-2xl tracking-[1em] text-white focus:outline-none focus:border-white/30 transition-colors rounded-sm font-mono"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full py-4 border border-white/20 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all rounded-sm"
                                        >
                                            VERIFY IDENTITY
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setStep("email")}
                                            className="w-full text-[9px] text-zinc-500 uppercase tracking-widest hover:text-white transition-colors"
                                        >
                                            Incorrect email? Go back
                                        </button>
                                    </form>
                                )}

                                {step === "reset" && (
                                    <form onSubmit={handleResetSubmit} className="space-y-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">New Security Key</label>
                                            <input
                                                type="password"
                                                required
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                placeholder="••••••••"
                                                className="bg-black/50 border border-white/10 p-3 text-[10px] text-white focus:outline-none focus:border-white/30 tracking-widest rounded-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Confirm Key</label>
                                            <input
                                                type="password"
                                                required
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                placeholder="••••••••"
                                                className="bg-black/50 border border-white/10 p-3 text-[10px] text-white focus:outline-none focus:border-white/30 tracking-widest rounded-sm"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full py-4 border border-white/20 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all rounded-sm"
                                        >
                                            {isSubmitting ? "RE-ENCRYPTING..." : "UPDATE ACCESS KEY"}
                                        </button>
                                    </form>
                                )}

                                <motion.div {...anim(0.8)} className="pt-6 text-center border-t border-white/10 mt-6 md:mt-8">
                                    <Link href="/login" className="flex items-center justify-center gap-2 text-[10px] text-zinc-500 hover:text-white transition-colors group">
                                        <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                                        Protocol Abort
                                    </Link>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            <Footer />
        </div>
    );
}

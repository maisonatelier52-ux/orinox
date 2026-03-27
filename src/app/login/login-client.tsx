"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Orinox from "@/components/Orinox";
import Footer from "@/components/Footer";
import { Check, RefreshCw } from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPageClient() {
    const { login } = useAuth();
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    interface CaptchaChar {
        char: string;
        rotation: number;
        scale: number;
        weight: number;
        offset: { x: number; y: number };
    }

    const [captchaData, setCaptchaData] = useState<CaptchaChar[]>([]);
    const [captchaString, setCaptchaString] = useState("");
    const [captchaInput, setCaptchaInput] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errorObj, setErrorObj] = useState("");

    const generateCaptcha = () => {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        const newCaptcha: CaptchaChar[] = [];
        let str = "";
        for (let i = 0; i < 6; i++) {
            const char = chars.charAt(Math.floor(Math.random() * chars.length));
            str += char;
            newCaptcha.push({
                char,
                rotation: Math.floor(Math.random() * 40) - 20, // -20 to 20 deg
                scale: 0.8 + Math.random() * 0.4, // 0.8 to 1.2
                weight: Math.random() > 0.5 ? 900 : 400,
                offset: {
                    x: Math.floor(Math.random() * 10) - 5,
                    y: Math.floor(Math.random() * 10) - 5
                }
            });
        }
        setCaptchaData(newCaptcha);
        setCaptchaString(str);
        setCaptchaInput("");
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (captchaInput.toUpperCase() !== captchaString.toUpperCase()) {
            setErrorObj("Verification protocol failed. Entity identification disputed.");
            generateCaptcha();
            return;
        }

        setIsSubmitting(true);
        setErrorObj("");

        // Simulate authentication process
        setTimeout(() => {
            setIsSubmitting(false);

            const success = login(formData.email, formData.password);

            if (success) {
                setIsAuthenticated(true);
                // Redirect to home page
                setTimeout(() => {
                    router.push("/orinox-oil-gas-drilling-infrastructure");
                }, 2000);
            } else {
                setErrorObj("Invalid email or security key. Access denied.");
                generateCaptcha();
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
                        {isAuthenticated ? (
                            <motion.div
                                key="success"
                                {...anim(0)}
                                className="bg-zinc-900/40 border border-white/10 p-10 md:p-12 text-center rounded-sm backdrop-blur-md flex flex-col items-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                                    <Check className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">Access Granted</h2>
                                <p className="text-[13px] text-zinc-400 font-light leading-relaxed mb-8">
                                    Secure session established. Redirecting to your institutional dashboard...
                                </p>
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 3, ease: "linear" }}
                                        className="h-full bg-white"
                                    />
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="form"
                                {...anim(0.1)}
                                className="bg-zinc-900/60 border border-white/10 p-8 md:p-8 rounded-sm backdrop-blur-md shadow-2xl"
                            >
                                <div className="text-center mb-10">
                                    <motion.span {...anim(0.2)} className="text-[9px] font-normal tracking-[0.3em] text-white/50 uppercase mb-2 block">
                                        CLIENT PORTAL
                                    </motion.span>
                                    <motion.h1 {...anim(0.3)} className="text-xl md:text-2xl font-bold text-white tracking-tight">
                                        Secure Login
                                    </motion.h1>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {errorObj && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] p-3 text-center uppercase tracking-widest font-bold">
                                            {errorObj}
                                        </motion.div>
                                    )}

                                    <motion.div {...anim(0.4)} className="flex flex-col gap-2">
                                        <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Corporate Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="ENTER EMAIL ADDRESS"
                                            className="bg-black/50 border border-white/10 p-3 text-[9px] text-white focus:outline-none focus:border-white/30 placeholder:opacity-20 transition-colors rounded-sm"
                                        />
                                    </motion.div>

                                    <motion.div {...anim(0.5)} className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center">
                                            <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Password</label>
                                            <Link href="/forgot-password" title="Access Key Recovery" className="text-[9px] text-zinc-500 hover:text-white transition-colors underline decoration-white/30 hidden sm:block">Forgot Password</Link>
                                        </div>
                                        <input
                                            type="password"
                                            required
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            placeholder="ENTER SECURE KEY"
                                            className="bg-black/50 border border-white/10 p-3 text-[9px] text-white focus:outline-none focus:border-white/30 placeholder:opacity-20 transition-colors rounded-sm tracking-widest"
                                        />
                                    </motion.div>

                                    {/* CAPTCHA Section */}
                                    <motion.div {...anim(0.55)} className="flex flex-col gap-4">
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex-1 bg-zinc-900/80 border border-white/10 p-5 rounded-sm flex items-center justify-center relative overflow-hidden group select-none h-16">
                                                {/* Visual Distortion Layers */}
                                                <div className="absolute inset-0 opacity-20 pointer-events-none">
                                                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:6px_6px]" />
                                                    <div className="absolute top-0 left-0 w-full h-1/2 border-b border-white content-[''] opacity-20 rotate-12 -translate-y-4" />
                                                    <div className="absolute top-1/2 left-0 w-full h-1/2 border-t border-white content-[''] opacity-20 -rotate-6 translate-y-4" />
                                                </div>

                                                <div className="flex items-center justify-center gap-1">
                                                    {captchaData.map((c, idx) => (
                                                        <span
                                                            key={idx}
                                                            style={{
                                                                transform: `rotate(${c.rotation}deg) scale(${c.scale}) translate(${c.offset.x}px, ${c.offset.y}px)`,
                                                                fontWeight: c.weight,
                                                                display: "inline-block",
                                                                textShadow: "0 0 10px rgba(255,255,255,0.2)"
                                                            }}
                                                            className="text-xl font-black text-white italic blur-[0.4px] transition-all"
                                                        >
                                                            {c.char}
                                                        </span>
                                                    ))}
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={generateCaptcha}
                                                    className="absolute right-4 text-zinc-500 hover:text-white transition-all opacity-0 group-hover:opacity-100 bg-black/60 p-2 rounded-full backdrop-blur-md"
                                                    title="Regenerate Token"
                                                >
                                                    <RefreshCw size={12} className="animate-spin-slow" />
                                                </button>
                                            </div>
                                            <div className="flex-[0.6]">
                                                <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold block mb-2">Captcha Key</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={captchaInput}
                                                    onChange={(e) => setCaptchaInput(e.target.value)}
                                                    placeholder="VERIFY"
                                                    className="w-full bg-black/50 border border-white/10 p-3 text-[10px] text-white focus:outline-none focus:border-white/30 placeholder:opacity-20 transition-colors rounded-sm tracking-[0.4em] text-center font-bold"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.button
                                        {...anim(0.6)}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-4 mt-4 border border-white/20 text-[10px] uppercase font-bold tracking-[0.2em] transition-all rounded-sm flex items-center justify-center gap-4 ${isSubmitting ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border-zinc-700' : 'hover:bg-white hover:text-black cursor-pointer'}`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-3 h-3 border text-white/70 border-zinc-400 border-t-white rounded-full animate-spin" />
                                                AUTHENTICATING...
                                            </>
                                        ) : 'ACCESS PORTAL'}
                                    </motion.button>

                                    <motion.div {...anim(0.7)} className="pt-6 text-center border-t border-white/10 mt-6 md:mt-8">
                                        <p className="text-[11px] text-zinc-500">
                                            Unregistered institutional entity?{' '}
                                            <Link href="/register" className="text-white hover:text-white/70 transition-colors underline decoration-white/30">
                                                Request Access
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

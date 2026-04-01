"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        organization: "",
        inquiryType: "General Inquiry",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const anim = (delay = 0) => ({
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/5e9deb74036975618f4d620d1e9697a9", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    organization: formData.organization,
                    inquiryType: formData.inquiryType,
                    message: formData.message,
                    _subject: "Direct Inquiry Request (Orinox)",
                })
            });

            if (response.ok) {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 5000);
                setFormData({
                    firstName: "", lastName: "", email: "", organization: "", inquiryType: "General Inquiry", message: ""
                });
            } else {
                console.error("Form submission encountered an issue.");
            }
        } catch (error) {
            console.error("Error submitting form", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-black text-white py-24 px-8 md:px-16 lg:px-24 xl:px-32 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                {/* Left Info */}
                <div className="flex flex-col">
                    <motion.h2
                        {...anim(0.1)}
                        className="text-2xl md:text-3xl font-bold tracking-tight mb-6"
                    >
                        Direct Inquiry
                    </motion.h2>
                    <motion.p
                        {...anim(0.2)}
                        className="text-[13px] text-zinc-400 font-light leading-relaxed mb-12 max-w-md"
                    >
                        For strategic partnerships, investor relations, or technical consultations, please fill out the secure form. Communications are encrypted and routed to the appropriate institutional desk.
                    </motion.p>

                    <motion.div {...anim(0.3)} className="space-y-6">
                        <div>
                            <h3 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-2">General Correspondence</h3>
                            <a href="mailto:info@orinoxholding.com" className="text-[13px] text-white hover:text-white/70 transition-colors">info@orinoxholding.com</a>
                        </div>
                        <div>
                            <h3 className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-2">Investor Relations</h3>
                            <a href="mailto:ir@orinoxholding.com" className="text-[13px] text-white hover:text-white/70 transition-colors">ir@orinoxholding.com</a>
                        </div>
                    </motion.div>
                </div>

                {/* Right Form */}
                <div className="flex flex-col">
                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="bg-zinc-900/30 border border-white/5 p-12 text-center rounded-sm flex flex-col items-center justify-center h-full"
                        >
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6">
                                <span className="text-white">✓</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4">Message Logged</h3>
                            <p className="text-[13px] text-zinc-500 font-light leading-relaxed">
                                Thank you for contacting Orinox Holding. Your inquiry has been routed to the appropriate desk.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.form
                            {...anim(0.2)}
                            onSubmit={handleSubmit}
                            className="bg-zinc-900/30 border border-white/5 p-8 md:p-12 rounded-sm space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">First Name</label>
                                    <input type="text" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required className="bg-black/50 border border-white/10 p-3 text-[13px] text-white focus:outline-none focus:border-white/30 rounded-sm" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Last Name</label>
                                    <input type="text" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required className="bg-black/50 border border-white/10 p-3 text-[13px] text-white focus:outline-none focus:border-white/30 rounded-sm" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Corporate Email</label>
                                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="bg-black/50 border border-white/10 p-3 text-[13px] text-white focus:outline-none focus:border-white/30 rounded-sm" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Organization</label>
                                <input type="text" value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })} required className="bg-black/50 border border-white/10 p-3 text-[13px] text-white focus:outline-none focus:border-white/30 rounded-sm" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Inquiry Type</label>
                                <select value={formData.inquiryType} onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })} className="bg-black/50 border border-white/10 p-3 text-[13px] text-white focus:outline-none focus:border-white/30 rounded-sm appearance-none cursor-pointer">
                                    <option>Strategic Partnership</option>
                                    <option>Investor Relations</option>
                                    <option>Media Inquiry</option>
                                    <option>General Information</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Message</label>
                                <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="bg-black/50 border border-white/10 p-3 text-[13px] text-white focus:outline-none focus:border-white/30 rounded-sm resize-none" />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 border border-white/20 text-[10px] uppercase font-bold tracking-[0.2em] transition-all rounded-sm flex items-center justify-center gap-4 ${isSubmitting ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' : 'hover:bg-white hover:text-black cursor-pointer'}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-3 h-3 border border-zinc-400 border-t-white rounded-full animate-spin" />
                                        Transmitting...
                                    </>
                                ) : 'Submit Inquiry'}
                            </button>
                        </motion.form>
                    )}
                </div>
            </div>
        </section>
    );
}

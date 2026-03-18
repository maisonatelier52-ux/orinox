"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Check } from "lucide-react";

const publications = [
  {
    title: "Next-Gen Digital Drilling Protocols",
    description: "Enhancing upstream efficiency through real-time telemetry, automated pipe handling, and predictive maintenance algorithms to minimize non-productive time on autonomous assets.",
  },
  {
    title: "CCUS T&S: De-risking Carbon Transport",
    description: "Technical paradigms for high-pressure CO2 transport and subsurface storage integrity in depleted reservoirs, focusing on material fatigue and plume monitoring protocols.",
  },
  {
    title: "Digital Integrity Twins for Midstream Assets",
    description: "Using real-time sensing and physics-based models to predict critical failure modes, extend asset life, and prioritize capital deployment across complex pipeline networks.",
  },
  {
    title: "Hydrogen-Ready Midstream Corridors",
    description: "Asset material compatibility and pressure management strategies for transitioning legacy pipeline networks to hydrogen-blend service while maintaining regulatory compliance.",
  },
];

const countries = [
  { name: "United States", code: "+1", flag: "🇺🇸", id: "US" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧", id: "GB" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪", id: "AE" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦", id: "SA" },
  { name: "Qatar", code: "+974", flag: "🇶🇦", id: "QA" },
];

const allTimeSlots = [
  '4:00 PM - 4:30 PM', '4:30 PM - 5:00 PM',
  '5:00 PM - 5:30 PM', '5:30 PM - 6:00 PM',
  '6:00 PM - 6:30 PM', '6:30 PM - 7:00 PM',
  '7:00 PM - 7:30 PM', '7:30 PM - 8:00 PM',
  '8:00 PM - 8:30 PM', '8:30 PM - 9:00 PM',
  '9:00 PM - 9:30 PM', '9:30 PM - 10:00 PM'
];

export default function StrategicInsightsContact() {
  const [showAllSlots, setShowAllSlots] = useState(false);
  const [selectedDateObj, setSelectedDateObj] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState('4:00 PM - 4:30 PM');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // Generate next 7 days
  const [upcomingDays, setUpcomingDays] = useState<Date[]>([]);

  useEffect(() => {
    const dates = [];
    const today = new Date();
    setSelectedDateObj(today); // Default to today
    for (let i = 0; i < 7; i++) {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + i);
      dates.push(nextDate);
    }
    setUpcomingDays(dates);
  }, []);

  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }
  });

  const visibleSlots = showAllSlots ? allTimeSlots : allTimeSlots.slice(0, 4);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'short', day: 'numeric' }).format(date);
  };

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
          name: formData.name,
          email: formData.email,
          phone: `${selectedCountry.code} ${formData.phone}`,
          date: formatDate(selectedDateObj),
          timeSlot: selectedSlot,
          _subject: "Strategy & Consultation Request (Orinox)",
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 8000);
        setFormData({ name: "", email: "", phone: "" });
      } else {
        console.error("Form submission encountered an issue.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMonthYear = () => {
    if (upcomingDays.length === 0) return "Loading...";
    return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(upcomingDays[0]);
  };

  return (
    <section className="bg-black text-white py-24 px-8 md:px-16 lg:px-24 xl:px-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

        {/* Left Column: Publications */}
        <div className="flex flex-col">
          <motion.div {...anim(0.1)} className="flex items-center justify-between mb-8">
            <h2 className="text-xl md:text-xl font-bold tracking-tight max-w-md">
              Strategic Insights & <br /> Technical Publications
            </h2>

          </motion.div>

          <motion.div {...anim(0.2)} className="h-[1px] w-full bg-white/20 mb-12" />

          <motion.p {...anim(0.25)} className="text-[11px] md:text-[12px] text-white/40 mb-16 uppercase tracking-[0.2em]">
            Investor-ready analysis of emerging technical paradigms and infrastructure optimization across the energy value chain.
          </motion.p>

          <div className="space-y-16">
            {publications.map((pub, index) => (
              <motion.div key={index} {...anim(0.3 + index * 0.1)} className="flex flex-col items-start">
                <h3 className="text-[15px] font-bold mb-4 tracking-tight">{pub.title}</h3>
                <p className="text-[12px] leading-relaxed text-white/50 font-light mb-6 max-w-xl">
                  {pub.description}
                </p>
                <Link href="/login"><button className="px-10 py-3 border border-white/20 text-[9px] font-normal uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
                  View Brief
                </button></Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex flex-col bg-zinc-900/5 backdrop-blur-sm border border-white/5 p-8 md:p-12 rounded-sm h-fit sticky top-32">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Request Logged</h2>
              <p className="text-zinc-500 text-[13px] leading-relaxed max-w-xs">
                Technical consultation for <strong>{selectedSlot}</strong> on <strong>{formatDate(selectedDateObj)}</strong> has been secured for <strong>{formData.name}</strong>. Confirmation sent to {formData.email}.
              </p>
              <Link href="/login"><button
                onClick={() => setSubmitted(false)}
                className="mt-8 text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors underline cursor-pointer"
              >
                Book another phase
              </button></Link>
            </motion.div>
          ) : (
            <>
              <motion.div {...anim(0.1)}>
                <h2 className="text-xl md:text-xl font-bold mb-2 tracking-tight">Connect with Our Team</h2>
                <p className="text-[12px] text-zinc-500 font-light mb-10 max-w-sm">
                  Send a secure message regarding technical management or strategic infrastructure opportunities.
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div {...anim(0.2)} className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Name in full</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ENTER FULL NAME"
                    className="bg-zinc-900/40 border border-white/10 p-4 text-[13px] text-white focus:outline-none focus:border-white/30 placeholder:opacity-20 transition-colors rounded-sm"
                  />
                </motion.div>

                <motion.div {...anim(0.3)} className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Email (Required)</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="EMAIL@EXAMPLE.COM"
                    className="bg-zinc-900/40 border border-white/10 p-4 text-[13px] text-white focus:outline-none focus:border-white/30 placeholder:opacity-20 transition-colors rounded-sm"
                  />
                </motion.div>

                <motion.div {...anim(0.4)} className="flex flex-col gap-2 relative">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Phone (Required)</label>
                  <div className="flex gap-2">
                    <div
                      onClick={() => setShowCountryPicker(!showCountryPicker)}
                      className="bg-zinc-900/40 border border-white/10 p-4 text-[13px] flex items-center gap-2 rounded-sm cursor-pointer hover:bg-zinc-900/60 transition-colors"
                    >
                      <span className="opacity-100 text-lg leading-none">{selectedCountry.flag}</span>
                      <span className="opacity-40 text-[9px]"><ChevronDown className="w-3 h-3" /></span>
                    </div>

                    <AnimatePresence>
                      {showCountryPicker && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute z-50 left-0 top-full mt-2 w-64 bg-zinc-900 border border-white/10 rounded-sm shadow-2xl overflow-hidden"
                        >
                          {countries.map((c) => (
                            <div
                              key={c.id}
                              onClick={() => {
                                setSelectedCountry(c);
                                setShowCountryPicker(false);
                              }}
                              className="flex items-center gap-4 p-4 hover:bg-white/5 cursor-pointer transition-colors border-b border-white/5 last:border-none"
                            >
                              <span className="text-xl">{c.flag}</span>
                              <div className="flex flex-col">
                                <span className="text-[12px] text-white font-medium">{c.name}</span>
                                <span className="text-[10px] text-zinc-500">{c.code}</span>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex-grow flex bg-zinc-900/40 border border-white/10 p-4 rounded-sm focus-within:border-white/30 transition-colors group">
                      <span className="text-[13px] text-zinc-500 mr-2 group-focus-within:text-white/60 transition-colors">{selectedCountry.code}</span>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="000 000 000"
                        className="bg-transparent text-[13px] text-white focus:outline-none flex-grow placeholder:opacity-10"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Calendar Logic */}
                <motion.div {...anim(0.5)} className="pt-4 border-t border-white/5 space-y-6">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Schedule a meeting</p>
                    <div className="flex items-center gap-4 text-[11px] text-zinc-400">
                      <span className="opacity-40">{getMonthYear()}</span>
                      <div className="flex gap-2">
                        <span className="p-1 hover:text-white cursor-pointer transition-colors text-[10px]">◄</span>
                        <span className="p-1 hover:text-white cursor-pointer transition-colors text-[10px]">►</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-zinc-500 mb-6 font-mono">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => <div key={i} className="opacity-30 pb-2">{day}</div>)}
                    {upcomingDays.map((date, i) => {
                      const isSelected = selectedDateObj.toDateString() === date.toDateString();
                      return (
                        <div
                          key={i}
                          onClick={() => setSelectedDateObj(date)}
                          className={`py-3 rounded-sm cursor-pointer transition-all ${isSelected ? 'bg-white text-black font-bold scale-105 shadow-lg' : 'hover:bg-white/5 active:scale-95'}`}
                        >
                          {date.getDate()}
                        </div>
                      )
                    })}
                  </div>

                  <div className="space-y-1 mb-6 border-l border-white/10 pl-4">
                    <p className="text-[9px] text-zinc-400 opacity-40 uppercase tracking-widest">Time zone: UTC ({new Intl.DateTimeFormat().resolvedOptions().timeZone})</p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/90">{formatDate(selectedDateObj)}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {visibleSlots.map((slot) => (
                      <div
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-3 px-4 border text-[9px] text-center rounded-sm cursor-pointer transition-all ${selectedSlot === slot ? 'bg-white/10 border-white text-white font-bold' : 'border-white/5 hover:border-white/20 text-white/40'}`}
                      >
                        {slot}
                      </div>
                    ))}
                  </div>

                  <p
                    onClick={() => setShowAllSlots(!showAllSlots)}
                    className="text-[10px] text-blue-400 underline cursor-pointer hover:text-blue-300 transition-colors inline-block pt-2"
                  >
                    {showAllSlots ? 'Show fewer slots' : 'Show more slots'}
                  </p>
                </motion.div>

                <motion.button
                  {...anim(0.6)}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 border border-white/40 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 rounded-full flex items-center justify-center gap-4 ${isSubmitting ? 'bg-zinc-800 border-zinc-700 cursor-not-allowed text-zinc-500' : 'hover:bg-white hover:text-black cursor-pointer'}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3 h-3 border border-zinc-400 border-t-white rounded-full animate-spin" />
                      SYNCHRONIZING...
                    </>
                  ) : 'SUBMIT REQUEST'}
                </motion.button>
              </form>
            </>
          )}
        </div>

      </div>
    </section>
  );
}

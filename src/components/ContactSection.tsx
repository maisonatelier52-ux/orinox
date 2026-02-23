"use client"
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-40">

        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl lg:text-[68px] font-bold leading-none mb-8">
            Connect with our
            petroleum experts.
          </h2>

          <p className="text-white/90 text-[15px] leading-tight max-w-[520px]">
            Facilitating upstream exploration and midstream infrastructure
            projects through precision engineering and technical advisory.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="flex-1 ">
          <p className="text-white mb-6">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name Row */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="text-sm text-white">First name</label>
                <input
                  name="firstName"
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full mt-2 bg-transparent border border-white/30 rounded-md px-4 py-3 focus:outline-none focus:border-white"
                />
              </div>

              <div className="flex-1">
                <label className="text-sm text-white">Last name</label>
                <input
                  name="lastName"
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-full mt-2 bg-transparent border border-white/30 rounded-md px-4 py-3 focus:outline-none focus:border-white"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-white">Email *</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full mt-2 bg-transparent border border-white/30 rounded-md px-4 py-3 focus:outline-none focus:border-white"
              />
            </div>

            {/* Topic */}
            <div>
              <label className="text-sm text-white">
                How can we help you? *
              </label>
              <select
                name="topic"
                onChange={handleChange}
                className="w-full mt-2 bg-transparent text-white/50 border border-white/30 rounded-md px-4 py-3 focus:outline-none focus:border-white "
              >
                <option className="text-black">Select a topic</option>
                <option className="text-black">Exploration</option>
                <option className="text-black">Production</option>
                <option className="text-black">Midstream</option>
                <option className="text-black">Technical Advisory</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-white">Message *</label>
              <textarea
                name="message"
                onChange={handleChange}
                rows={5}
                placeholder="Tell us how we can help you"
                className="w-full mt-2 bg-transparent border  border-white/30 rounded-md px-4 py-3 focus:outline-none focus:border-white"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#0b2a4a] hover:bg-[#123a63] transition py-4 rounded-md font-medium text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
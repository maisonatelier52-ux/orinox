import Image from "next/image";

export default function SafetyAtScale() {
  return (
    <section className="w-full bg-black py-16 px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto border border-white/60 rounded-3xl p-8 md:p-14 flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-[620px]">

          {/* Small Label */}
          <p className="text-[14px] tracking-[0.25em] text-white/80 mb-6">
            SAFETY AT SCALE
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl text-white lg:text-[56px] leading-tight font-extrabold mb-6">
            The Orinox Standard
            <br />
            for Operational Risk
            <br />
            Management
          </h2>

          {/* Description */}
          <p className="text-white/90 text-[17px] leading-relaxed max-w-[520px]">
            Our zero-incident goal is backed by a robust framework of hazard identification,
            personnel safety training, and real-time environment monitoring across process facilities.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 w-full max-w-[640px]">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/safety.webp"
              alt="Operational Safety"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
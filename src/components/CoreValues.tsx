export default function CoreValues() {
  return (
    <section className="w-full bg-black text-white py-28 px-10 md:px-20 lg:px-28">
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-20">
          Core Values
        </h2>

        {/* Flex container */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-12">

          {/* Value 1 */}
          <div className="flex-1">
            <div className="border-t border-white/80 pt-8">
              <h3 className="text-2xl font-bold mb-6">
                Absolute Integrity
              </h3>
              <p className="text-[16px] leading-relaxed text-white/90 max-w-[340px]">
                Operating with uncompromising transparency and ethical rigor across all global energy exploration and production frameworks.
              </p>
            </div>
          </div>

          {/* Value 2 */}
          <div className="flex-1">
            <div className="border-t border-white/60 pt-8">
              <h3 className="text-2xl font-bold mb-6">
                Strategic Reliability
              </h3>
              <p className="text-[16px] leading-relaxed text-white/90 max-w-[340px]">
                Upholding the standard for industrial-scale reliability in midstream logistics, ensuring secure energy transportation networks.
              </p>
            </div>
          </div>

          {/* Value 3 */}
          <div className="flex-1">
            <div className="border-t border-white/60 pt-8">
              <h3 className="text-2xl font-bold mb-6">
                Technical Mastery
              </h3>
              <p className="text-[16px] leading-relaxed text-white/90 max-w-[340px]">
                Advancing energy operations through precision engineering, digital infrastructure, and innovative technical advisory services.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
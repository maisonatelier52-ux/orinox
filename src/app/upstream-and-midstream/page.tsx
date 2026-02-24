export default function Upstream() {
  return (
    <main className="relative min-h-screen min-h-[100dvh] h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/e-p.png"
        alt="Oil and Gas Facility"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative z-10 h-screen flex flex-col px-10 md:px-20">
        {/* Top Right Logo */}
        <div className="flex justify-end  pt-10">
          <div className="flex items-center gap-3">
            <img
              src="/images/orinox-white-logo.png"
              alt="Orinox Logo"
              className="h-10 md:h-12 w-auto"
            />
          </div>
        </div>

        {/* Right Side Middle Content */}
        <div className="flex-1 flex justify-end items-center ">
          <div className="text-right space-y-5">
            {/* Upstream */}
            <div>
              <p className="text-white/70 text-[12px] md:text-[12px] mb-2">
          Upstream (Exploration & Production)
              </p>
              <h1 className="text-white text-5xl md:text-6xl font-light tracking-wide">
                E&amp;P
              </h1>
            </div>

            {/* Midstream */}
            <div>
              <p className="text-white/70 text-[14px] md:text-[12px] mb-2">
               Midstream (Transportation & Storage)
              </p>
              <h1 className="text-white text-5xl md:text-6xl font-light tracking-wide">
                T&amp;S
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom Right Description */}
        <div className="flex justify-end pb-14">
          <p className="max-w-xl text-right text-white/70 text-[12px] leading-tight">
           ORINOX is a full-service oil drilling company operating across the Upstream (Exploration & Production) and Midstream (Transportation & Storage) segments of the oil and gas value chain.
          </p>
        </div>
      </div>
    </main>
  );
}
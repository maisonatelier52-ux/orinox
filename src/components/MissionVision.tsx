export default function MissionVision() {
  return (
    <section className="w-full bg-black text-white py-20 px-10 md:px-20 lg:px-28">
      <div className="max-w-[1200px] mx-auto ">
        
        {/* Flex container */}
        <div className="flex flex-col md:flex-row md:justify-between  gap-16 md:gap-0">

          {/* Mission */}
          <div className="md:w-1/2">
            <p className="text-xs tracking-[0.25em] text-white/70 mb-8">
              MISSION
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[35px] leading-[1.1] font-normal max-w-140">
              To deliver high-precision infrastructure and technical reliability across the global energy value chain.
            </h2>
          </div>

          {/* Vision */}
          <div className="md:w-1/2">
            <p className="text-xs tracking-[0.25em] text-white/70 mb-8">
              VISION
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-[35px] leading-[1.1] font-normal max-w-140">
              Setting the global standard for operational transparency and technical mastery in petroleum logistics.
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
} 
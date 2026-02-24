import Image from "next/image";

export default function WhoWeAre() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/who-we-are.png"
        alt="Oil and Gas Facility"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute top-8 right-10 md:right-16 z-20 flex items-center gap-3">
        <img
          src="/images/orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-10 md:h-12 w-auto"
        />
      </div>

 <div className="absolute bottom-25 left-10 sm:left-10 lg:left-16 z-20 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">
  
  {/* Badge */}
 <p className="inline-block w-fit  text-xs uppercase tracking-wide text-white/50 mb-1.5">
WHO WE ARE
</p>

  {/* Heading */}
  <h1 className="text-2xl  lg:text-3xl font-semibold leading-none mb-4">
Precision Drilling &
  <br className="hidden sm:block" />  
Low-Carbon Infrastructure Partner
</h1>

  {/* Description */}
  <p className="mb-2 md:mb-3 text-[14px] leading-tight">High-performance drilling and future-ready oil & gas infrastructure</p>
  <p className="text-[13px] md:text-[12px] text-white/50 leading-tight">
   Specialist drilling and field development partner (Upstream & Near-Field Midstream).
    <br />
  Combining drilling excellence with digital optimization and low-carbon readiness.
    <br />
Targeting attractive IRRs across drilling, CCUS, and hydrogen-ready advisory.
  </p>

</div>
    </main>
  );
}

import Image from "next/image";

export default function CurrentCapabilities() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/current-capabilities.png"
        alt="Oil and Gas Facility"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute top-8 right-10 md:right-16 z-20 flex items-center gap-3">
        <img
          src="/images/orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-10 md:h-12 w-auto"
        />
      </div>

   <div className="absolute top-1/2 -translate-y-1/2 left-10 sm:left-10 lg:left-25 z-20 space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">        <div>
          <p className="inline-block text-xs uppercase tracking-wide text-white/50 mb-1">
    CURRENT CAPABILITIES
          </p>

          {/* Heading */}
          <h1 className="text-[13px] font-semibold leading-none">
   Core Upstream
          </h1>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-[13px]">Drilling Services & Rig Operations</h2>
          <p className="text-[12px] text-white/60 leading-tight">
Onshore drilling (exploration, appraisal, development wells).
           <br/>
        Work-over operations and basic well intervention.
           <br/>
    Day-rate or turnkey contracts.
          </p>
        </div>
        <div>
          <h2 className="text-[13px]">Well Engineering & Project Management</h2>
          <p className="text-[12px] text-white/60 leading-tight">
     Well design (trajectory, casing program, mud program).
          <br/>
AFE and cost estimation.
          <br/>
Drilling program planning, logistics coordination, contractor management.
          </p>
        </div>
          <div>
          <h2 className="text-[13px]">Completions & Basic Production Support</h2>
          <p className="text-[12px] text-white/60 leading-tight">
     Casing and cementing supervision (via partners or in-house crew).
          <br/>
Simple completions and well clean-up.
          <br/>
      Hand-over-to-production procedures.
          </p>
        </div>
          <div>
          <h2 className="text-[13px]">HSE, Risk & Compliance in Drilling</h2>
          <p className="text-[12px] text-white/60 leading-tight">
    Rig safety management, permit-to-work, toolbox talks.
          <br/>
    Incident investigation, basic environmental compliance on pads.
          </p>
        </div>
      </div>
    </main>
  );
}

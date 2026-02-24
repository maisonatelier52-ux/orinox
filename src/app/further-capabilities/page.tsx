import Image from "next/image";

export default function FurtherCapabilities() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/future-capabilities.png"
        alt="Oil and Gas Facility"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute top-8 right-10 md:right-16 z-20 flex items-center gap-3">
        <img
          src="/images/orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-10 md:h-12 w-auto"
        />
      </div>
    <div className="absolute top-80 md:top-1/2 w-110 -translate-y-1/2 left-10 sm:left-10 lg:left-25 z-20 space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">      
      <div>
          <p className="inline-block text-xs uppercase tracking-wide text-white/50 mb-1">
      FURTHER CAPABILITIES – MIDSTREAM
          </p>

          {/* Heading */}
          <h1 className="text-[13px] font-semibold leading-none text-white/80 mb-4">
 Orinox: The “Future of Infrastructure” Specialist
          </h1>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-[13px] text-white/80">Hydrogen-Ready & CO₂-Ready Pipeline Design Advisory</h2>
          <p className="text-[12px] text-white/60 leading-tight">
Advisory on material selection and routing for hydrogen or CO₂ transport.
           <br/>
   Blending hydrogen into existing gas grids (H₂-ready concepts).
          </p>
        </div>
        <div>
          <h2 className="text-[13px] text-white/80">CO₂ Transport Network Planning for CCUS</h2>
          <p className="text-[12px] text-white/60 leading-tight">
Conceptual routing from emitters to storage hubs (salt caverns, depleted fields). <br/>
   Multi-client CO₂ pipeline corridor studies.    </p>
        </div>
      
       <div>
          <h2 className="text-[13px] text-white/80">Digital Twins for Field-to-Terminal Networks</h2>
          <p className="text-[12px] text-white/60 leading-tight">
Simulation models of gathering systems and small pipelines. <br/>
Capacity debottlenecking, leak scenario simulations, “what-if” planning. </p>
        </div>
      
       <div>
          <h2 className="text-[13px] text-white/80">Methane & Fugitive Emission Monitoring Services</h2>
          <p className="text-[12px] text-white/60 leading-tight">
Integrated leak detection programs for gathering systems, manifolds, and terminals. <br/>
Emissions dashboards and compliance reporting as a service.  </p>
        </div>
         <div>
          <h2 className="text-[13px] text-white/80">Integrated “Low-Carbon Field Infrastructure” Offering</h2>
          <p className="text-[12px] text-white/60 leading-tight">
Combine upstream well design + midstream gathering + emissions abatement into one turnkey solution.<br/>
From first well to low-carbon evacuation route.  </p>
        </div>
      
      </div>
    </main>
  );
}

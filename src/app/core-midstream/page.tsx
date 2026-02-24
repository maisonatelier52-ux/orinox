import Image from "next/image";

export default function CoreMidstream() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/core-midstream.png"
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

     <div className="absolute top-90 md:top-1/2 w-110 -translate-y-1/2 left-10 sm:left-10 lg:left-25 z-20 space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">        <div>
          <p className="inline-block text-xs uppercase tracking-wide text-white/50 mb-1">
        CURRENT CAPABILITIES
          </p>

          {/* Heading */}
          <h1 className="text-[13px] font-semibold leading-none text-white/80 mb-4">
     Core Midstream
          </h1>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-[13px] text-white/80">Pre-FEED / FEED Support for Gathering & Flowlines</h2>
          <p className="text-[12px] text-white/60 leading-tight">
      Well pad tie-in design, routing options, hydraulic considerations.
           <br/>
      Gathering system concepts for new fields.
           <br/>
         “Digital drilling center” service for clients.
          </p>
        </div>
        <div>
          <h2 className="text-[13px] text-white/80">Pipeline & Flowline Construction Management (via EPC partners)</h2>
          <p className="text-[12px] text-white/60 leading-tight">
     On-site construction supervision.   <br/>
     Quality assurance, welding inspection, pressure testing coordination.     </p>
        </div>
      
       <div>
          <h2 className="text-[13px] text-white/80">Tankage & Storage Interface Engineering</h2>
          <p className="text-[12px] text-white/60 leading-tight">
    Basic tank farm layout suggestions for field terminals (crude, produced water).  <br/>
   Metering, LACT units, small loading facilities.   </p>
        </div>
      
       <div>
          <h2 className="text-[13px] text-white/80">Operations Readiness & Commissioning Support</h2>
          <p className="text-[12px] text-white/60 leading-tight">
Procedures, checklists, and training for first oil/gas.  <br/>
 Emergency response and safety drills around new midstream assets.   </p>
        </div>
      
      </div>
    </main>
  );
}

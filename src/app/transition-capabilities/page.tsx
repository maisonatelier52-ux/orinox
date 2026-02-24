import Image from "next/image";

export default function TransitionCapabilities() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/transition-capabilities.png"
        alt="Oil and Gas Facility"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute top-8 right-10 md:right-16 z-20 flex items-center gap-3">
        <img
          src="/images/orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-10 md:h-12 w-auto"
        />
      </div>

   <div className="absolute top-100 md:top-1/2 w-110 -translate-y-1/2 left-10 sm:left-10 lg:left-25 z-20 space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">        <div>
          <p className="inline-block text-xs uppercase tracking-wide text-white/50 mb-1">
          TRANSITION CAPABILITIES – UPSTREAM
          </p>

          {/* Heading */}
          <h1 className="text-[13px] font-semibold leading-none">
       Orinox: The “Next Wave” of Capabilities
          </h1>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-[13px]">Digital Drilling & Performance Optimization</h2>
          <p className="text-[12px] text-white/60 leading-tight">
          Real-time drilling analytics and KPI dashboards (ROP, NPT, bit life).
           <br/>
        AI/ML models for stuck-pipe risk, torque & drag, vibration monitoring.
           <br/>
         “Digital drilling center” service for clients.
          </p>
        </div>
        <div>
          <h2 className="text-[13px]">Advanced Reservoir & Production Optimization Support</h2>
          <p className="text-[12px] text-white/60 leading-tight">
        Collaboration with reservoir engineers to design well placement & completions for maximized EUR.
          <br/>
        Production surveillance data integration to refine drilling/completion strategy over field life.
          </p>
        </div>
          <div>
          <h2 className="text-[13px]">Low-Carbon Field Development Solutions</h2>
          <p className="text-[12px] text-white/60 leading-tight">
       Well designs compatible with CO₂-EOR or CO₂ storage in the future.
          <br/>
         Integration of electrified rigs / lower-emission drilling packages.
          <br/>
       Methane-leak monitoring and flaring optimization around well pads.
          </p>
        </div>
          <div>
          <h2 className="text-[13px]">Geothermal & Repurposing of Brownfields</h2>
          <p className="text-[12px] text-white/60 leading-tight">
Re-using old O&G wells for geothermal heat or power pilots.
          <br/>
  Portfolio screening services to identify geothermal prospects.
          </p>
        </div>
      </div>
    </main>
  );
}

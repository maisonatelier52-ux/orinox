import Image from "next/image";

export default function TechStack() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/tech-stack.jpg"
        alt="Oil and Gas Facility"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute top-8 right-10 md:right-16 z-20 flex items-center gap-3">
        <img
          src="/images/orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-10 md:h-12 w-auto"
        />
      </div>

       <div className="absolute top-1/2  -translate-y-1/2 left-6 sm:left-10 lg:left-25 z-20 space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">      
      <div>
          <p className="inline-block text-xs uppercase tracking-wide text-white/50 mb-1">
  TECH STACK
          </p>

         
        </div>

        {/* Description */}
        <div>
          <h2 className="text-[13px] text-white/80">Operational Excellence and Accurate, Reliable Data</h2>
          <p className="text-[12px] text-white/60 leading-tight">
Field-proven equipment, integrated data, and digital optimization from day one.
          
          </p>
        </div>
        <div>
          <h2 className="text-[13px] text-white/80">Field technology for safer, faster wells</h2>
          <p className="text-[12px] text-white/60 leading-tight">
Modern rig control systems (top drive, auto-driller, rig-floor automation) to reduce human exposure and NPT. <br/>
Real-time data acquisition (WITSML/other standard) from rig sensors, MWD/LWD, and mud logging units.</p>
        </div>
      
       <div>
          <h2 className="text-[13px] text-white/80">Digital drilling and performance analytics</h2>
          <p className="text-[12px] text-white/60 leading-tight">
Central operations dashboard to monitor ROP, NPT, bit runs, and fuel consumption across rigs. <br/>
Early-stage AI/ML models to flag anomalies and optimize drilling parameters.</p>
        </div>
      
       <div>
          <h2 className="text-[13px] text-white/80">Enterprise backbone to scale</h2>
          <p className="text-[12px] text-white/60 leading-tight">
Integrated ERP for finance, procurement, fleet maintenance, and inventory. <br/>
HSE and incident-reporting platform to capture every near miss, observation, and safety action. </p>
        </div>
         <div>
          <h2 className="text-[13px] text-white/80">Future-ready data architecture</h2>
          <p className="text-[12px] text-white/60 leading-tight">
Structured data lake from day one, enabling future products:<br/>
Client benchmarking, emissions reporting and digital twin offerings for fields and gathering systems  </p>
        </div>
      
      </div>
    </main>
  );
}

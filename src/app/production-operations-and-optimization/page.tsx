import Image from "next/image";

export default function ProductionOperationAndOptimization() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/production-operations-and-optimization.png"
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

        <div className="absolute top-90 md:top-1/2 -translate-y-1/2 left-10 space-y-5 sm:left-10 lg:left-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">    
   <div>
        
          <h1 className="text-[14px] font-semibold leading-none text-white/60 ">
Upstream (Exploration & Production) Services
          </h1>
        </div>

  <div>
    <h2 className="text-white/80 text-sm">Production Operations & Optimization</h2>
         <p className="text-[12px]] text-white/60 leading-tight">
Once wells are on stream, Orinox can operate or support field production to maximize output and uptime.</p>    
  </div>
         <div>
        <p className="text-[12px]] text-white/60 leading-tight">
We provide production operation services – managing day-to-day well monitoring, choke management, and surface facility operations (separators, heaters, etc.).</p>
</div>
       <div>

         <p className="text-[12px]] text-white/60 leading-tight">
   A key offering is production optimization, using digital oilfield tools to analyze real-time well data (pressures, flow rates) and applying artificial intelligence/machine learning to adjust settings for peak output. For instance, Orinox can deploy digital twin technology to model production systems; a digital twin of an oil extraction process can highlight bottlenecks and suggest tweaks to improve flow rates.</p>
     
       </div>
       <div>
        <p className="text-[12px]] text-white/60 leading-tight">
        Our experts also design artificial lift solutions (like optimizing pump settings, gas lift injection rates) and schedule well interventions (such as stimulations, cleanouts) when decline is observed. We emphasize integrated reservoir management – working with geoscientists to plan infill wells or waterflood/EOR strategies.
     </p>
       </div>
        <div>
            
        <p className="text-[12px]] text-white/60 leading-tight">
        With advanced analytics and IoT sensors, Orinox’s production optimization service aims to ensure optimal output and extend field life. We also handle routine maintenance, asset integrity (inspections of wellheads, pipelines, etc.), and implement strict safety and environmental management during operations.
</p>
        </div>
  
</div>
    </main>
  );
}

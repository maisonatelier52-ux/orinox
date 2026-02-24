import Image from "next/image";

export default function ExplorationServices() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/exploration-services.png"
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

  <div className="absolute bottom-10 md:bottom-0 -translate-y-1/2 left-10 space-y-5 sm:left-10 lg:left-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">    
   <div>
      
          {/* Heading */}
          <h1 className="text-[14px] font-semibold leading-none text-white/60 ">
Upstream (Exploration & Production) Services
          </h1>
        </div>

  <div>
    <h2 className="text-white/80 text-sm">Exploration Services</h2>
         <p className="text-[13px] md:text-[12px] text-white/60 leading-tight">
End-to-end exploration capability to identify new oil and gas reserves, including geological and geophysical (G&G) surveying, seismic data acquisition (2D/3D seismic campaigns), petrophysical analysis, and basin modeling.
          </p>
        </div>
         <div>
           <p className="text-white/80 text-sm">Orinox can handle prospect generation, licensing rounds bids, and exploration well planning.</p>
        </div> 
        <div>
        <p className="text-[13px] md:text-[12px] text-white/60 leading-tight">
         Once prospects are identified, Orinox manages exploration drilling – mobilizing suitable rigs to frontier locations (onshore or offshore). Our exploration teams aim to high-grade areas with the best chance of success using advanced tech (e.g. AI-assisted seismic interpretation and basin analog databases). By offering integrated exploration, Orinox helps resource holders (governments or partners) delineate new fields efficiently.
        </p>
        </div>
     
</div>
    </main>
  );
}

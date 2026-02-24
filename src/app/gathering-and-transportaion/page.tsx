import Image from "next/image";

export default function GatheringAndTransportation() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/gathering-and-transportaion.png"
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

        <div className="absolute top-90 md:top-95 -translate-y-1/2 left-10 space-y-5 sm:left-10 lg:left-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">    
   <div>
        
          <h1 className="text-[14px] font-semibold leading-none text-white/60 ">
Midstream (Transportation, Storage, Processing, Marketing) Services
          </h1>
        </div>

  <div>
    <h2 className="text-white/80 text-sm">Gathering & Transportation</h2>
         <p className="text-[12px]] text-white/60 leading-tight">
Orinox designs, builds, and operates the infrastructure that moves hydrocarbons from the wellhead to processing or market. This includes gathering pipeline systems in field areas – small-diameter flowlines that connect each well or platform to central collection points. We can install multi-phase pipelines or separate oil/gas gathering lines, complete with compression for gas and pumps for oil as needed.</p>
 </div>
         <div>
        <p className="text-[12px]] text-white/60 leading-tight">
Orinox also offers trunk pipeline development for larger volumes: e.g., regional oil pipelines from a field to a refinery or port, and gas transmission pipelines from producing basins to consuming markets. We have expertise in route selection, pipeline engineering, rights-of-way and permitting, and pipeline construction management. Our operations team would monitor pipelines via SCADA systems to ensure safe, efficient transport. Given that pipelines are the safest mode of oil & gas transport over long distances, Orinox will invest in advanced leak detection, corrosion control, and strict maintenance programs. Beyond pipelines, we can manage other transport modes as part of a solution – coordinating trucking fleets, rail transport, or marine tankers/barges where pipelines are not available. For example, Orinox might operate a fleet of oil tank trucks in an early production scenario, or charter barges to move crude down a river system.</p></div>
       <div>

         <p className="text-[12px]] text-white/60 leading-tight">
The transportation service aims to ensure that product flows reliably from production sites to the next stage with minimal bottlenecks. (In the Permian Basin, for instance, gas production has nearly doubled to 25 Bcf/d in recent years, requiring ~16 Bcf/d of new pipeline capacity by 2030 – a need Orinox could help meet.)</p>     </div>
      
  
</div>
    </main>
  );
}

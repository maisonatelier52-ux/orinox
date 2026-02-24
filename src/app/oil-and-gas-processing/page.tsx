import Image from "next/image";

export default function OilAndGasProcessing() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/oil-and-gas-processing.png"
        alt="Oil and Gas Facility"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/4 0" />

      <div className="absolute top-8 right-10 md:right-16 z-20 flex items-center gap-3">
        <img
          src="/images/orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-10 md:h-12 w-auto"
        />
      </div>

        <div className="absolute top-135 md:top-1/2 -translate-y-1/2 left-10 space-y-5 sm:left-10 lg:left-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">    
   <div>
        
          <h1 className="text-[14px] font-semibold leading-none text-white/60 ">
Midstream (Transportation, Storage, Processing, Marketing) Services
          </h1>
        </div>

  <div>
    <h2 className="text-white/80 text-sm">Oil & Gas Processing</h2>
         <p className="text-[13px] md:text-[12px] text-white/60 leading-tight">
After collection, most hydrocarbons need processing before they are market-ready. Orinox can develop and run central processing facilities (CPFs) for oil and gas processing plants. For natural gas, our services include gas treatment (removing impurities like CO₂, H₂S, water) and gas processing to extract Natural Gas Liquids (NGLs) such as propane, butane, etc. Raw gas from the wellhead is routed to treatment plants and then large processing units (cryogenic or refrigeration) to separate NGLs – yielding “pipeline-quality” dry gas that meets sales specifications.</p></div>
         <div>
        <p className="text-[13px] md:text-[12px] text-white/60 leading-tight">

For example, Orinox could build a gas plant near a new gas field in West Africa to strip valuable condensate and LPGs, with the residue gas sent to power plants or LNG. On the oil side, Orinox offers crude stabilization and separation: separating produced fluids into oil, gas, and water at central facilities.</p></div>
       <div>

         <p className="text-[13px] md:text-[12px] text-white/60 leading-tight">
We can install heater-treaters, separators, and degassing tanks such that the crude oil is stabilized (light ends removed) for safe storage/transport. Additionally, Orinox might operate fractionation plants for NGLs (splitting mixed NGL stream into ethane, propane, butane, etc.), or mini-LNG plants if needed for gas monetization. Our processing service line also covers compression and dehydration – critical for gas pipeline transport.
</p>     </div>
      
   <div>

         <p className="text-[13px] md:text-[12px] text-white/60 leading-tight">
By handling processing, Orinox ensures that upstream production is converted into marketable commodities: dry gas that meets pipeline specs, crude oil meeting vapor pressure limits, and separated NGLs for petrochemical use. Importantly, processing is where upstream meets midstream, and Orinox’s integrated approach can optimize both sides (for example, adjusting field production in real-time based on processing plant capacity or constraints).
</p>     </div>
</div>
    </main>
  );
}

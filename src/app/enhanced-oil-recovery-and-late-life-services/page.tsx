import Image from "next/image";

export default function EnhancedOilRecovery() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/enhanced-oil-recovery-and-late-life-services.png"
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

          <div className="absolute bottom-0 -translate-y-1/2 left-10 space-y-5 sm:left-10 lg:left-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">    
   <div>
        
          <h1 className="text-[14px] font-semibold leading-none text-white/60 ">
Upstream (Exploration & Production) Services
          </h1>
        </div>

    <h2 className="text-white/80 text-sm">Enhanced Oil Recovery (EOR) & Late-life Services</h2>
  <div>
         <p className="text-[12px]] text-white/60 leading-tight">
For maturing fields, Orinox can evaluate and implement EOR techniques, for example, gas injection, waterflood design, chemical EOR (polymer/surfactant flooding) or even CO₂ injection if available. We run pilot tests, design surface facilities (injection plants), and monitor EOR performance.</p>    
  </div>
         <div>
        <p className="text-[12px]] text-white/60 leading-tight">
Additionally, as fields near end-of-life, Orinox provides well workovers and re-completions to revive production (e.g., adding perforations to new zones, or converting producers to injectors and vice versa).</p>
</div>
       <div>

         <p className="text-[12px]] text-white/60 leading-tight">
  Finally, we can plan and execute plug & abandonment of wells safely and cost-effectively when needed, and manage decommissioning of small facilities – fulfilling late-life obligations in an environmentally responsible manner.</p>  
       </div>
      
  
</div>
    </main>
  );
}

import Image from "next/image";

export default function FitForPurpose() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/fit-for-purpose-fleet.png"
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

   <div className="absolute top-1/2 w-110 -translate-y-1/2 left-10 sm:left-10 lg:left-25 z-20 space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">      
      <div>
          <p className="inline-block text-xs uppercase tracking-wide text-white/50 mb-1">
FIT-FOR-PURPOSE FLEET
          </p>

       
        </div>

        {/* Description */}
        <div>
          <h2 className="text-[13px] text-white/80">Type of Rigs</h2>
          <p className="text-[12px] text-white/60 leading-tight">
Light / medium / heavy land rigs      <br/>
  HP rating (e.g., 750 HP vs 1500 HP)
  <br/>
  Depth capability, horizontal / directional capability
          </p>
        </div>
        <div>
          <h2 className="text-[13px] text-white/80">Specialization</h2>
          <p className="text-[12px] text-white/60 leading-tight">
Conventional vertical drilling <br/>
 High-angle / horizontal <br/>
 Workover / well service units   </p>
        </div>
      
       <div>
          <h2 className="text-[13px] text-white/80">Age & Condition</h2>
          <p className="text-[12px] text-white/60 leading-tight">
New builds vs mid-life vs old units <br/>
Automation level (top drive, iron roughneck, auto-driller, etc.) </p>
        </div>
      
       <div>
          <h2 className="text-[13px] text-white/80">Ownership Model</h2>
          <p className="text-[12px] text-white/60 leading-tight">
Fully owned rigs <br/>
Long-term leased rigs <br/>
“Asset-light” model relying on partnership fleets </p>
        </div>
        
      
      </div>
    </main>
  );
}

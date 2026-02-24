import Image from "next/image";

export default function IntegratedCrossSector() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/integrated-cross-sector-synergy.png"
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

    <div className="absolute top-140 md:top-95 -translate-y-1/2 left-10 space-y-5 sm:left-10 lg:left-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">    
   

  <div>
    <h2 className="text-white/70 text-[13px] font-semibold">Integrated Cross-Sector Synergy</h2>
         <p className="text-[12px]] text-white/60 leading-tight">
Perhaps Orinox’s most unique differentiator is the very premise of the company – an integrated approach bridging upstream and midstream, which allows synergies that stand-alone firms cannot offer. In practical terms, this means seamless coordination from reservoir to market. For example, when planning a field, Orinox’s team simultaneously plans the drilling program and the evacuation pipeline, optimizing both together. We might drill fewer wells but ensure each is placed to align with gathering infrastructure, accelerating first delivery.</p></div>
         <div>
        <p className="text-[12px]] text-white/60 leading-tight">
There’s a financial synergy as well: we can bundle upstream and midstream investments in creative ways to improve project economics (e.g., using midstream cash flows, which are often stable, to support exploration risk). Clients (or host countries) benefit from dealing with one entity responsible for the whole value chain – reducing interface risk, avoiding blame games between producers and transporters, and simplifying project management.
</p></div>
       
  
</div>
    </main>
  );
}

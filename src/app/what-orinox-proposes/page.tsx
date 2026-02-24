export default function WhatOrinoxProposes() {
  return (
       <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/what-orinox-proposes.png"
        alt="Oil and Gas Facility"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* <div className="absolute inset-0 bg-black/20" /> */}

      <div className="absolute top-8 right-10 md:right-16 z-20 flex items-center gap-3">
        <img
          src="/images/orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-10 md:h-12 w-auto"
        />
      </div>

    <div className="absolute top-60 w-100 -translate-y-1/2 left-6 space-y-5 sm:left-10 lg:left-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">    
   

  <div>
    <h2 className="text-white/90 text-[14px] font-semibold">What Orinox Proposes</h2>
           </div>
        
       <div>
        <p className="text-[12px] text-white/80 leading-tight">
Integrated well delivery (drilling + well engineering) with near-field midstream support (gathering, storage interfaces, commissioning) and built-in methane management and CCUS/H₂ readiness.
 </p>
       </div>
  
</div>
    </main>
  );
}
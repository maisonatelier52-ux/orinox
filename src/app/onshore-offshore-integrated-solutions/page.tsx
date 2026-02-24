import Image from "next/image";

export default function OnshoreOffshore() {
  return (
   <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/onshore-offshore-integrated-solutions.png"
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

        <div className="absolute bottom-50 md:bottom-40 w-120 -translate-y-1/2 left-10 space-y-4 sm:left-10 lg:left-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">    
  
          
         <div>
        <p className="text-[13px] md:text-[12px] text-white/60 leading-tight">
Orinox provides integrated services across the Upstream (drilling, well engineering, and production support) and Near-Field Midstream (gathering, flowlines, storage interfaces, and commissioning support) segments of the oil and gas value chain.</p>
</div>
      
</div>
    </main>
  );
}

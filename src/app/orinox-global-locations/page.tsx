import Image from "next/image";

export default function OrinoxGlobalLocations() {
  return (
   <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/orinox-global-locations.jpg"
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

        <div className="absolute bottom-0 -translate-y-1/2 right-6 space-y-5 sm:right-10 lg:right-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">    


  <div>
    <h2 className="text-white/80 text-sm font-semibold">United Kingdom</h2>
         <p className="text-[13px] md:text-[12px] text-white/80 leading-tight">
Level 28, 52 Lime Street, London,
<br/>
EC3M 7AF, United Kingdom
</p>  
</div> 
 <div>
    <h2 className="text-white/80 text-sm font-semibold">United Arab Emirates</h2>
         <p className="text-[13px] md:text-[12px] text-white/80 leading-tight">
Villa 145, Al Manara Street, Al Safa 2,
<br/>
Dubai, United Arab Emirates
</p>  
</div> 
 <div>
 <h2 className="text-white/80 text-sm font-semibold">Venezuela</h2>
         <p className="text-[13px] md:text-[12px] text-white/80 leading-tight">
Edificio Epsilon CIIP 3 Avenida Venezuela,
<br/>
Caracas 1060, Distrito Capital Piso 7
</p>   
</div>
     <div>
    <h2 className="text-white/80 text-sm font-semibold">Spain</h2>
         <p className="text-[13px] md:text-[12px] text-white/80 leading-tight">
Plaza de la Independencia 8,
<br/>
Piso 3 Madrid Spain
</p>  
</div> 
 
        
</div>
    </main>
  );
}

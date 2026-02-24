import Image from "next/image";

export default function WhyWeExcel() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/why-we-excel-over-the-rest.png"
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

       <div className="absolute bottom-20 w-120 -translate-y-1/2 right-6 space-y-5 sm:right-10 lg:right-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">    
 <div>
       <p className="inline-block w-fit  text-xs uppercase tracking-wide text-white/50 mb-1.5">
WHY WE EXCEL OVER THE REST
</p>
 </div>
   <div>
        
          <h1 className="text-[14px] font-semibold leading-none text-white/80 ">
We drill better, faster, safer
          </h1>
        </div>

  <div>
    
         <p className="text-[12px] text-white/60 leading-tight">
We design field and midstream infrastructure that is ready for CCUS and hydrogen.
We turn legacy oil & gas capex into future-proof, low-carbon assets.</p>    
  </div>
        
     
  
</div>
    </main>
  );
}


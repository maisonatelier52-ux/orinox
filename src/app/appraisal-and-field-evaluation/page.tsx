import Image from "next/image";

export default function AppraisalAndFieldEvaluation() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/appraisal-and-field-evalution.png"
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

   <div className="absolute bottom-0 -translate-y-1/2 left-10 space-y-5 sm:left-10 lg:left-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">    
   <div>
      
          {/* Heading */}
          <h1 className="text-[14px] font-semibold leading-none text-white/80 ">
Upstream (Exploration & Production) Services
          </h1>
        </div>

  <div>
    <h2 className="text-white/80 text-sm">Appraisal & Field Evaluation</h2>
         <p className="text-[12px] text-white/80 leading-tight">
After a discovery, Orinox conducts appraisal drilling and testing to determine the field’s size and commercial viability.     </p>
        </div>
         <div>
        <p className="text-[12px] text-white/80 leading-tight">Services include drilling appraisal wells, performing well logs and extended well flow tests, coring and fluid sampling, and reservoir characterization studies. Our reservoir engineers build dynamic models to estimate reserves and optimal development plans.</p>  </div> 
        <div>
        <p className="text-[12px] text-white/80 leading-tight">
      For example, we provide well test analysis, pressure-volume-temperature (PVT) analysis, and simulation of different development scenarios. The goal is to assess reservoir deliverability and design the most effective development scheme. By combining subsurface expertise with well testing, Orinox can reduce uncertainty and ensure the development plan matches the reservoir’s characteristics. </p>
        </div>
     
</div>
    </main>
  );
}

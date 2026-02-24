export default function WhyOrinox() {
  return (
   <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/why-orinox.jpg"
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

        <div className="absolute top-1/2 -translate-y-1/2 left-10 space-y-5 sm:left-10 lg:left-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">    
   <div>
        
          <h1 className="text-[14px] font-semibold leading-none text-white/70 ">
Why Orinox?
          </h1>
        </div>

  <div>
    
         <p className="text-[12px]] text-white/60 leading-tight">
Faster time-to-production, reduced flaring and methane leakage, strengthened local capability, and improved reliability of evacuation infrastructure—delivered with transparent KPIs and auditable controls.
</p>  </div>
         <div>
            <h2 className="text-white/70 text-[13px] font-semibold">Compliance-first Execution</h2>
        <p className="text-[12px]] text-white/60 leading-tight">
Permit-to-work, well control, contractor bridging, and ESIA/ESMP planning embedded from day one. Clear reporting cadence and government audit rights.
</p>
</div>
       <div>
<h2 className="text-white/70 text-[13px] font-semibold">Measured Emissions Management</h2>
         <p className="text-[12px]] text-white/60 leading-tight">
LDAR programs, flaring minimization, fuel monitoring, and emissions dashboards (MRV-ready) to meet evolving methane and climate requirements.
</p>
     
       </div>
       <div>
        <h2 className="text-white/70 text-[13px] font-semibold">Local Content and Skills Transfer</h2>
        <p className="text-[12px]] text-white/60 leading-tight">
      Structured workforce development, supplier onboarding, and training pipelines designed to meet local content regulations and build durable national capability.

     </p>
       </div>
       
  
</div>
    </main>
  );
}
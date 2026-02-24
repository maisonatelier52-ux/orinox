export default function OrinoxCommitsToDeliver() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/what-orinox-commits-to-deliver.png"
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


   <div className="absolute top-1/2 md:top-60 w-100 -translate-y-1/2 left-10 space-y-3 md:space-y-5 sm:left-10 lg:left-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">    
   

  <div>
    <h2 className="text-white/90 text-[14px] font-semibold">What Orinox commits to deliver</h2>
           </div>
        
       <div>
        <p className="text-[12px] text-white/80 leading-tight">
A phased drilling + near-field midstream scope, with integrated low-carbon readiness.
<br/>
  A complete HSE and environmental management plan aligned to national regulations and international practice.
  <br/>
  A local content plan (jobs, training, supplier onboarding, reporting cadence).
  <br/>
  Transparent progress reporting and auditable KPIs (safety, schedule, emissions, local value).
 
</p>
       </div>
  
</div>
    </main>
  );
}
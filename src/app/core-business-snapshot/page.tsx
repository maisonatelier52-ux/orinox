import Image from "next/image";

export default function CoreBusinessSnapshot() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/core-business-snapshot.png"
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

   <div className="absolute top-1/3 -translate-y-1/2 left-6 sm:left-10 lg:left-25 z-20 space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">  
          <div>
          <p className="inline-block text-xs uppercase tracking-wide text-white/50 mb-3">
   CORE BUSINESS SNAPSHOT
          </p>

          {/* Heading */}
          <h1 className="text-[14px] font-semibold leading-none text-white/60 ">
What Orinox already does well and reliably.
          </h1>
        </div>

  <div>
         <p className="text-[12px] text-white/60 leading-tight">
Onshore drilling operations and well engineering.
           <br/>
Workovers and completions support.
 <br/>
Pre-FEED/FEED support for gathering systems and field infrastructure.
<br/>
Robust HSE culture and project management.
          </p>
        </div>
     
      
      </div>
    </main>
  );
}

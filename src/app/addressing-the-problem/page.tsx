import Image from "next/image";

export default function AddressingtheProblem() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/addressing-the-problem.jpg"
        alt="Oil and Gas Facility"
        className="absolute inset-0 h-full w-full object-cover"
      />

  <div className="absolute inset-0 z-10 pointer-events-none
  bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.35)_30%,rgba(0,0,0,0.15)_45%,transparent_60%)]">
</div>
<div className="absolute inset-0 bg-black/30" />

      <div className="absolute top-8 right-10 md:right-16 z-20 flex items-center gap-3">
        <img
          src="/images/orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-10 md:h-12 w-auto"
        />
      </div>

    <div className="absolute bottom-50 md:bottom-25 -translate-y-1/2 left-10 sm:left-10 lg:left-25 z-20 space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">  
          <div>
          <p className="inline-block text-xs uppercase tracking-wide text-white/50 mb-3">
   ADDRESSING THE PROBLEM
          </p>

          {/* Heading */}
          <h1 className="text-[13px] font-semibold leading-none text-white ">
Inefficient, High-Emission Field Development
          </h1>
        </div>

        {/* Description */}
        <p className="text-[12px] text-white">Traditional drilling and midstream development is siloed, inefficient, and often wasteful.</p>
        <div>
         <p className="text-[12px] text-white leading-tight">
Siloed drilling, subsurface, and infrastructure planning.
           <br/>
 High NPT, cost overruns, under-utilized pipelines and terminals.
 <br/>
 Growing regulatory pressure on methane, flaring, and CO₂.
          </p>
        </div>
     
      
      </div>
    </main>
  );
}

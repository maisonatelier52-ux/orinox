import Image from "next/image";

export default function ExplorationAndProduction() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/our-expertise.png"
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

    <div className="absolute bottom-25 w-150 left-10 sm:left-10 lg:left-16 z-20 space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">
  
  {/* Badge */}
 <div>
    <p className="inline-block text-xs uppercase tracking-wide text-white/50 mb-1">
OUR EXPERTISE
</p>

  {/* Heading */}
  <h1 className="text-[20px] lg:text-2xl font-semibold leading-none">
Exploration and Production (E&P)
 
</h1>
 </div>

  {/* Description */}
  <div>
  <h2 className="text-[13px]">Exploration
    </h2>
  <p className="text-[12px]] text-white/50 leading-tight">
  We are always searching for hydrocarbon reservoirs using seismic surveys and other geological data.
  </p>
 
  </div>
   <div>
      <h2 className="text-[13px]">Production
  </h2>
  <p className="text-[12px]] text-white/50 leading-tight">
  Our experienced team is known for drilling wells and developing facilities to extract crude oil and natural gas from the ground, both onshore and offshore.
  </p>

   </div>
</div>
    </main>
  );
}

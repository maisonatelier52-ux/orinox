import Image from "next/image";

export default function Future() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/future.png"
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

<div className="absolute bottom-25 left-10 sm:left-10 lg:left-16 z-20 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">
  
  {/* Badge */}
 <p className="inline-block w-fit bg-black/90 px-3 py-1 text-xs uppercase tracking-wide text-white/50 mb-1">
THE FUTURE
</p>

  {/* Heading */}
  <h1 className="text-2xl lg:text-3xl font-semibold leading-none mb-4">
Oil & gas is transforming,
  <br className="hidden sm:block" />
not disappearing.
</h1>

  {/* Description */}
  <p className="text-[13px] md:text-[12px] text-white/50 leading-tight">
   Global oil and gas demand forecasts with long plateau.
    <br />
Capital disciplined operators seeking higher productivity, lower emissions.
    <br />
Huge capex in brownfield optimization, CCUS, and infrastructure upgrade.
  </p>

</div>
    </main>
  );
}

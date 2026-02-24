import Image from "next/image";

export default function TransportationAndStorage() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/transportation-and-storage.png"
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
        <div>
          <p className="inline-block text-xs uppercase tracking-wide text-white/50 mb-1">
        OUR EXPERTISE
          </p>

          {/* Heading */}
          <h1 className="text-[20px] lg:text-2xl font-semibold leading-none">
            Transportation and Storage (T&S)
          </h1>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-[13px]">Transportation</h2>
          <p className="text-[12px] text-white/50 leading-tight">
           We offer multiple services, depending on the product and location, including setting up of pipelines, and transportation by rail, road, and maritime vessels.
          </p>
        </div>
        <div>
          <h2 className="text-[13px]">Storage</h2>
          <p className="text-[12px] text-white/50 leading-tight">
            Holding of raw materials like crude oil and natural gas, and finished products (refined petroleum products or liquefied natural gas) in facilities such as tanks, mounded storage vessels, or underground reservoirs, require the most trustworthy and reliable specialists.
At Orinox, we ensure nothing is left to chance.
          </p>
        </div>
      </div>
    </main>
  );
}

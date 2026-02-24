import Image from "next/image";

export default function MarketinAndOfftake() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/marketing-and-offtaking-management.png"
        alt="Oil and Gas Facility"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* <div className="absolute inset-0 bg-black/40" /> */}

      <div className="absolute top-8 right-10 md:right-16 z-20 flex items-center gap-3">
        <img
          src="/images/orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-10 md:h-12 w-auto"
        />
      </div>

         <div className="absolute top-1/2 -translate-y-1/2 left-6 space-y-5 sm:left-10 lg:left-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">    
   <div>
        
          <h1 className="text-[13px] font-semibold leading-none text-white/80 ">
Midstream (Transportation, Storage, Processing, Marketing) Services
          </h1>
        </div>

  <div>
    <h2 className="text-white/80 text-[13px] font-semibold">Marketing & Offtake Management</h2>
         <p className="text-[12px] text-white/70 leading-tight">
Orinox’s service portfolio extends to the commercialization of oil and gas. In the midstream sector, marketing refers to finding buyers, negotiating sales contracts, and arranging transportation for hydrocarbons. Orinox can act as a marketer for production streams – for example, aggregating crude from multiple small producers and selling it at better prices to a refinery, or securing LNG customers for natural gas.
</p></div>
         <div>
        <p className="text-[12px] text-white/70 leading-tight">
We would employ commercial experts to handle offtake agreements, price hedging, and market analysis. For gas, this might involve negotiating Gas Sales Agreements with power plants or industrial users, or coordinating with LNG export facilities. For crude, it could mean managing tenders to international traders or refineries. The marketing service also includes logistics management: ensuring the product is delivered per contract, whether via pipeline scheduling, truck dispatch, or cargo lifting. By having marketing in-house, Orinox can guarantee an integrated chain: we don’t just produce and transport the oil/gas, we also help ensure it reaches an end buyer under favorable terms. This is particularly crucial in new producing regions – e.g., in emerging producers like Guyana or Uganda, where connecting to global markets involves navigating crude quality specs, shipping, and trade finance.
</p></div>
       <div>

         <p className="text-[12px] text-white/70 leading-tight">
Orinox can leverage its network and expertise to maximize netback prices for producers. Additionally, our marketing team would handle regulatory compliance (export licenses, pipeline tariffs, etc.) and use financial instruments to mitigate price volatility as needed.
</p>     </div>
      
  
</div>
    </main>
  );
}

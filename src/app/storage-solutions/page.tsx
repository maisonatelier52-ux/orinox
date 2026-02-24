import Image from "next/image";

export default function StorageSolutions() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/storage-solutions.jpg"
        alt="Oil and Gas Facility"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute top-8 right-10 md:right-16 z-20 flex items-center gap-3">
        <img
          src="/images/orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-10 md:h-12 w-auto"
        />
      </div>

         <div className="absolute top-100 md:top-1/2 -translate-y-1/2 left-10 space-y-5 sm:left-10 lg:left-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">    
   <div>
        
          <h1 className="text-[14px] font-semibold leading-none text-white/60 ">
Midstream (Transportation, Storage, Processing, Marketing) Services
          </h1>
        </div>

  <div>
    <h2 className="text-white/80 text-sm">Storage Solutions</h2>
         <p className="text-[12px]] text-white/60 leading-tight">
Orinox provides hydrocarbon storage at various points in the value chain. For crude oil, we can build and manage tank farms – large storage tank batteries at field terminals or hub locations. These tanks buffer production, allow for blending, and ensure a ready supply for shipment. For natural gas, Orinox could operate underground gas storage reservoirs (depleted fields or salt caverns) to help clients balance seasonal demand. Gas is often injected into storage during low-demand periods and withdrawn in peak winter times, and Orinox’s service would include managing these injection/withdrawal cycles and maintaining gas deliverability.
</p></div>
         <div>
        <p className="text-[12px]] text-white/60 leading-tight">
We also handle NGL and refined product storage (pressurized bullets for propane/butane, etc., or atmospheric tanks for condensate). Storage is critical for system flexibility – for instance, as mentioned in GPA Midstream guidelines, stored gas is used to “smooth out” differences between steady production and variable demand. Orinox can bring expertise in safe tank operations, vapor recovery to reduce emissions, and inventory management.
</p></div>
       <div>

         <p className="text-[12px]] text-white/60 leading-tight">
Additionally, for LNG or export, we could manage storage in the form of cryogenic tanks or floating storage units. The ability to safely store volumes gives Orinox’s partners security of supply and operational leeway, which is particularly attractive to investors worried about offtake logistics.</p>     </div>
      
  
</div>
    </main>
  );
}

import Image from "next/image";

export default function KeyDifferentiators() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/storage-solutions.jpg"
        alt="Oil and Gas Facility"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute top-8 right-16 z-20 flex items-center gap-3">
        <img
          src="/images/orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-12 w-auto"
        />
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-6 space-y-5 sm:left-10 lg:left-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">
        <div>
          <h1 className="text-[14px] font-semibold leading-none text-white ">
            Key Differentiators
          </h1>
        </div>
        <div>
          <p className="text-[12px] text-white/80 leading-tight">
            In a competitive industry, Orinox stands out by blending innovative
            technology, sustainable practices, operational agility, and
            cross-sector synergy.
          </p>
        </div>

        <div>
          <h2 className="text-white text-sm">
            Advanced Technology & Digital Integration
          </h2>
          <p className="text-[12px] text-white/80 leading-tight">
            Orinox provides hydrocarbon storage at various points in the value
            chain. For crude oil, we can build and manage tank farms – large
            storage tank batteries at field terminals or hub locations. These
            tanks buffer production, allow for blending, and ensure a ready
            supply for shipment. For natural gas, Orinox could operate
            underground gas storage reservoirs (depleted fields or salt caverns)
            to help clients balance seasonal demand. Gas is often injected into
            storage during low-demand periods and withdrawn in peak winter
            times, and Orinox’s service would include managing these
            injection/withdrawal cycles and maintaining gas deliverability.
          </p>
        </div>
        <div>
          <p className="text-[12px] text-white/80 leading-tight">
            Our production facilities have IoT sensors feeding cloud analytics
            platforms so we can tweak processes continuously for efficiency.
            Automation and Robotics are another pillar – Orinox invests in
            automated pipe handling on rigs (e.g. robotic catwalks and iron
            roughnecks) that not only speed up operations but also improve
            safety.
          </p>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";

export default function CoreOperationalSectors() {
  return (
    <section className="w-full bg-black text-white py-28 px-6 md:px-20">
      <div className="max-w-full mx-auto flex flex-col items-center text-center">

        {/* Heading */}
       <div className="max-w-200">
         <h1 className="text-4xl  md:text-6xl lg:text-[68px] leading-none font-bold mb-9">
   Core Operational
   <br/> Sectors
        </h1>

        {/* Description */}
        <p className="text-[18px] text-white/90 leading-tight max-w-212.5 mb-10">
      Driving technical excellence across the integrated oil and gas value chain with precision-led infrastructure solutions. </p>

       </div>
      
<section className="w-full py-10 px-6 md:px-20">
  <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between gap-20">

    {/* COLUMN 1 */}
    <div className="flex-1 flex flex-col items-start text-left">
      <div className="mb-16 opacity-60">
        <Image
          src="/images/exploration.png"
          alt="Exploration"
          width={60}
          height={60}
        />
      </div>

      <h3 className="text-3xl font-bold mb-6 text-left">
        Exploration
      </h3>

  <p className="text-[15px] text-white/90 leading-tight mb-10 text-left min-h-[80px]">
        Identification and assessment of high-potential upstream assets leveraging advanced geological modeling and seismic evaluation protocols.
      </p>

      <button className="border border-white/60 px-8 py-3 rounded-md text-[16px] font-medium hover:bg-white hover:text-black transition">
        Technical Specs
      </button>
    </div>


    {/* COLUMN 2 */}
    <div className="flex-1 flex flex-col items-start text-left">
      <div className="mb-16 opacity-60">
        <Image
          src="/images/production.png"
          alt="Production"
          width={60}
          height={60}
        />
      </div>

      <h3 className="text-3xl font-bold mb-6 text-left">
        Production
      </h3>

   <p className="text-[15px] text-white/90 leading-tight mb-10 text-left min-h-[80px]">
        Optimizing asset lifecycle yields through innovative field development techniques and high-integrity rig infrastructure management.
      </p>

      <button className="border border-white/60 px-8 py-3 rounded-md text-[16px] font-medium hover:bg-white hover:text-black transition">
        Technical Specs
      </button>
    </div>


    {/* COLUMN 3 */}
    <div className="flex-1 flex flex-col items-start text-left">
      <div className="mb-16 opacity-60">
        <Image
          src="/images/midstreamlogistics.png"
          alt="Midstream"
          width={60}
          height={60}
        />
      </div>

      <h3 className="text-3xl font-bold mb-6 text-left">
        Midstream Logistics
      </h3>
<p className="text-[15px] text-white/90 leading-tight mb-10 text-left min-h-[80px]">
        Engineering resilient midstream infrastructure for the secure and reliable transportation of global petroleum resources across vast networks.
      </p>

      <button className="border border-white/60 px-8 py-3 rounded-md text-[16px] font-medium hover:bg-white hover:text-black transition">
        Technical Specs
      </button>
    </div>

  </div>
</section>

      </div>
    </section>
  );
}
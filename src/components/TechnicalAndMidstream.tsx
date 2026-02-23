import Image from "next/image";

export default function TechnicalAndMidstream() {
  return (
    <section className="w-full bg-black text-white py-28 px-6 md:px-20">
      <div className="max-w-full mx-auto flex flex-col items-center text-center">
       <div className="max-w-200">
         <h1 className="text-4xl  md:text-6xl lg:text-[68px] leading-none font-bold mb-9">
   Core Operational
   <br/> Sectors
        </h1>

        <p className="text-[18px] text-white/90 leading-tight max-w-212.5 mb-10">
      Driving technical excellence across the integrated oil and gas value chain with precision-led infrastructure solutions. </p>

       </div>
      
<div className="w-full  py-20 px-6 md:px-16">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-10">
        <div className="flex-1  border border-white/60 rounded-2xl p-10 flex flex-col justify-between">
          
          <div className="mb-6 opacity-80">
            <Image
              src="/images/digital.png"
              alt="Midstream"
              width={80}
              height={80}
            />
          </div>

          <h2 className="text-4xl text-start md:text-5xl font-bold leading-tight mb-6">
            Digital Midstream
            <br />
            Infrastructure
          </h2>

          <div className="w-20 h-[2px] bg-white/60 mb-6"></div>

          <p className="text-whtie/90 text-start text-[17px] leading-relaxed max-w-[620px] mb-8">
            Optimizing pipeline gathering systems through advanced telemetry and real-time SCADA monitoring to ensure secure energy distribution.
          </p>

          <div className="rounded-xl overflow-hidden mt-auto">
            <Image
              src="/images/digitalmidstream.webp"
              alt="Midstream Infrastructure"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:w-[420px] border border-white/60 rounded-2xl p-10 flex flex-col">

          <div className="mb-6 opacity-80">
            <Image
              src="/images/asset.png"
              alt="Asset Integrity"
              width={80}
              height={80}
            />
          </div>

          <h3 className="text-3xl text-start font-bold leading-tight mb-6">
            Asset Integrity &
            <br />
            Compliance
          </h3>

          <p className="text-white/90 text-start text-[17px] leading-relaxed">
            Orinox ensures Tier-1 performance across the value chain through uncompromising adherence to ISO and IOGP integrated standards.
          </p>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
}
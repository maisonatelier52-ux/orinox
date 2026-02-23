import Image from "next/image";

export default function IntegratedInfrastructure() {
  return (
    <section className="w-full bg-black py-28 px-6 md:px-20">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-start gap-16">

        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-[620px]">
          <h2 className="text-4xl md:text-6xl lg:text-[64px] text-white font-bold leading-[1.05] mb-10">
            Integrated Infrastructure for Upstream and Midstream Excellence
          </h2>

          <p className="text-[17px] text-white/90 leading-relaxed mb-6">
            Orinox Holding serves as a strategic force in the global energy sector, orchestrating technical success across the entire oil and gas value chain. From high-precision drilling frameworks to sophisticated process infrastructure, we deliver the technical solutions that drive operational efficiency and resource security.
          </p>

          <p className="text-[17px] text-white/90 leading-relaxed">
            We maintain operational excellence through absolute integrity and transparency. By integrating innovative engineering with streamlined midstream logistics, Orinox provides the foundational reliability required for industrial-scale energy production, transportation, and strategic petroleum management.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 w-full">
          <div className="w-full h-full rounded-xl overflow-hidden">
            <Image
              src="/images/integrated-infrastructure.webp" // put image in public/images
              alt="Upstream and Midstream Infrastructure"
              width={700}
              height={900}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
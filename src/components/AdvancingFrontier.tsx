import Image from "next/image";

export default function AdvancingFrontier() {
  return (
    <section className="w-full bg-black text-white py-10 md:pt-10 px-6 md:px-20">
      <div className=" mx-auto flex flex-col items-center text-center">
        <h1 className="text-[32px] md:text-6xl lg:text-[86px] leading-none font-bold  mb-4 md:mb-9">
          Advancing the Frontier of Petroleum Infrastructure
        </h1>
        <p className="text-[18px] text-white/90 leading-tight max-w-212.5 mb-5 md:mb-10">
          Orinox Holding stands at the intersection of technical mastery and
          industry reliability. We deliver the foundational systems that drive
          exploration, production, and midstream efficiency across the global
          oil and gas sector.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <a
            href="/holding"
            className="bg-white text-black px-10 py-4 rounded-md text-[16px] font-medium  transition"
          >
            View Holding
          </a>
          <a
            href="/contact"
            className="border border-white/60 px-10 py-4 rounded-md text-[16px] font-medium transition"
          >
            Contact Experts
          </a>
        </div>
        <div className="w-full rounded-lg overflow-hidden shadow-sm">
          <Image
            src="/images/advancing-frontier.webp"
            alt="Petroleum Infrastructure"
            width={1200}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

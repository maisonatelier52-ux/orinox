export default function OrinoxLegacy() {
  return (
    <section className="w-full bg-black py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-[560px]">

        {/* Headline - appears immediately */}
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          The Orinox Legacy
        </h1>

        {/* Paragraphs - animate from bottom */}
        <div className="mt-10  text-[14px] text-white space-y-4">

          <p className="opacity-0 fade-up">
            Orinox Holding was founded with a clear mandate: to deliver technical excellence and
            absolute transparency to the petroleum infrastructure sector. Since our inception as a
            specialized engineering firm, we have evolved into a premier global organization,
            managing upstream exploration and midstream logistics with unparalleled precision.
          </p>

          <p className="opacity-0 fade-up-delay">
            Our path is defined by disciplined innovation and high-integrity development, ensuring
            sustained resource security and operational efficiency throughout the energy value chain.
          </p>

        </div>
      </div>
    </section>
  );
}
export default function GlobalFootprint() {
  const locations = [
    "Dubai",
    "London",
    "Madrid",
    "Caracas",
  ];

  return (
    <section className="w-full bg-black py-24 px-6 md:px-20">
      <div className="max-w-[1400px] mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl text-white lg:text-[56px] font-extrabold mb-10">
          Global Footprint
        </h2>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/60 mb-16" />

        {/* Locations */}
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {locations.map((city, index) => (
            <div key={index} className="flex-1">

              {/* Label */}
              <p className="text-[12px]] tracking-[0.25em] text-white/90 mb-4">
                ORINOX PRESENCE
              </p>

              {/* City */}
              <h3 className="text-2xl text-white md:text-3xl font-bold">
                {city}
              </h3>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
import Link from "next/link";

export interface Section {
  heading?: string;
  description?: string;
  points?: string[];
}

export interface OrinoxGenericSlideProps {
  image: string;
  overlayClassName?: string;
  badge?: string;
  badgeClassName?: string;
  mainHeading?: string;
  mainHeadingClassName?: string;
  sections?: Section[];
  contentContainerClassName?: string;
  layout?: "standard" | "upstream" | "splash" | "image-only";
  // For 'upstream' layout
  upstreamSections?: { topic: string; title: string }[];
  bottomDescription?: string;
  // For 'splash' layout
  logo?: string;
  logoClassName?: string;
  logoHref?: string;
}

export default function OrinoxGenericSlide({
  image,
  overlayClassName = "bg-black/30",
  badge,
  badgeClassName = "text-white/50",
  mainHeading,
  mainHeadingClassName = "text-white/80",
  sections = [],
  contentContainerClassName = "absolute bottom-10 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col",
  layout = "standard",
  upstreamSections = [],
  bottomDescription,
  logo,
  logoClassName = "h-15 md:h-20 w-auto",
  logoHref = "/home",
}: OrinoxGenericSlideProps) {
  if (layout === "splash") {
    return (
      <main className="relative h-screen bg-black flex items-center justify-center md:justify-end px-4 md:pr-24">
        {logo && (
          <Link href={logoHref}>
            <img src={logo} alt="Orinox Logo" className={logoClassName} />
          </Link>
        )}
      </main>
    );
  }

  if (layout === "image-only") {
    return (
      <main className="relative h-screen w-full overflow-hidden">
        <img
          src={image}
          alt="Technical Drawing"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </main>
    );
  }

  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClassName}`} />

      {layout === "upstream" ? (
        <div className="relative z-10 h-screen flex flex-col px-10 md:px-20 text-white">
          <div className="flex-1 flex justify-end items-center ">
            <div className="text-right space-y-3 md:space-y-5">
              {upstreamSections.map((s, i) => (
                <div key={i}>
                  <p className="text-white/70 text-[12px] mb-2">{s.topic}</p>
                  <h2 className="text-white text-5xl md:text-6xl font-light tracking-wide">
                    {s.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          {bottomDescription && (
            <div className="flex justify-start md:justify-end pb-14">
              <p className="max-w-xl text-left md:text-right text-white/70 text-[12px] leading-tight">
                {bottomDescription}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className={contentContainerClassName}>
          {badge && (
            <div>
              <p
                className={`inline-block text-xs uppercase tracking-wide mb-1 ${badgeClassName}`}
              >
                {badge}
              </p>
            </div>
          )}

          {mainHeading && (
            <h2
              className={`text-[14px] font-semibold leading-none ${mainHeadingClassName}`}
            >
              {mainHeading}
            </h2>
          )}

          {sections.map((section, idx) => (
            <div key={idx} className="space-y-1">
              {section.heading && (
                <h2 className="text-white/80 text-sm font-semibold">
                  {section.heading}
                </h2>
              )}
              {section.description && (
                <p className="text-[12px] text-white/60 leading-tight whitespace-pre-line">
                  {section.description}
                </p>
              )}
              {section.points && section.points.length > 0 && (
                <p className="text-[12px] text-white/60 leading-tight">
                  {section.points.join("\n")}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

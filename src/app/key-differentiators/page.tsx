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

      <div className="absolute top-8 right-10 md:right-16 z-20 flex items-center gap-3">
        <img
          src="/images/orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-10 md:h-12 w-auto"
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
       In a competitive industry, Orinox stands out by blending innovative technology, sustainable practices, operational agility, and cross-sector synergy
          </p>
        </div>

        <div>
          <h2 className="text-white text-sm">
           Advanced Technology & Digital Integration
          </h2>
          <p className="text-[12px] text-white/80 leading-tight">
         Orinox is committed to leveraging the latest tech stack – from the drill bit to the pipeline. We deploy AI and Machine Learning for real-time drilling optimization and predictive maintenance. For example, our rigs use smart drilling systems that give drillers on-screen guidance, analyzing downhole parameters like delta-P, weight-on-bit, and bit rotation to maximize rate of penetration. This can significantly shorten drilling times and reduce costs. We incorporate Digital Twin simulations across operations: a digital twin of a drilling rig or production facility allows us to test scenarios and optimize without risking downtime. (An AI-powered digital twin of a drilling process can identify the optimal drilling speed and anticipate issues)

          </p>
        </div>
        <div>
          <p className="text-[12px] text-white/80 leading-tight">
          Our production facilities have IoT sensors feeding cloud analytics platforms so we can tweak processes continuously for efficiency. Automation and Robotics are another pillar – Orinox invests in automated pipe handling on rigs (e.g. robotic catwalks and iron roughnecks) that not only speed up operations but also improve safety.
          
          </p>
        </div>
      </div>
    </main>
  );
}

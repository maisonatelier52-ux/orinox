import Image from "next/image";

export default function DevelopmentDrillingAndCompletion() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/development-drilling-completion.png"
        alt="Oil and Gas Facility"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute top-8 right-10 md:right-16 z-20 flex items-center gap-3">
        <img
          src="/images/orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-10 md:h-12 w-auto"
        />
      </div>

        <div className="absolute top-90 md:bottom-0 -translate-y-1/2 left-10 space-y-5 sm:left-10 lg:left-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">    
   <div>
      
          {/* Heading */}
          <h1 className="text-[14px] font-semibold leading-none text-white/60 ">
Upstream (Exploration & Production) Services
          </h1>
        </div>

  <div>
    <h2 className="text-white/80 text-sm">Development Drilling & Completion</h2>
         <p className="text-[12px]] text-white/60 leading-tight">
Orinox offers full-scale development drilling services once a project moves forward. This covers drilling production wells (and injection wells if needed for pressure support), using fit-for-purpose rigs (land rigs for onshore pads, offshore rigs or platform rigs for offshore projects).</p>    
  </div>
         <div>
        <p className="text-[12px]] text-white/60 leading-tight">
     We manage well design, directional drilling, and modern completion techniques (like multi-stage hydraulic fracturing for shale, or smart completions for offshore). Our teams handle well completion and stimulation, installing production tubing, artificial lift (ESPs or gas lift), and performing initial well productivity enhancements.</p>
      <div>
        <p className="text-[12px]] text-white/60 leading-tight">
     During field development, Orinox integrates drilling with facilities planning – e.g., clustering wells on pads or platforms to minimize surface footprint. The service extends to project management for drilling campaigns, including procurement of OCTG (tubulars) and wellheads, logistics for remote sites, and implementation of rigorous safety management. With Orinox’s drilling efficiency focus, clients benefit from reduced well costs and faster first oil.</p>
      </div>
     </div>
</div>
    </main>
  );
}

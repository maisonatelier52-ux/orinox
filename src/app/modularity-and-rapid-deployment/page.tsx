import Image from "next/image";

export default function ModularityAndRapidDevelopment() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/modularity-and-rapid-deployment.png"
        alt="Oil and Gas Facility"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute top-8 right-10 md:right-16 z-20 flex items-center gap-3">
        <img
          src="/images/orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-10 md:h-12 w-auto"
        />
      </div>

        <div className="absolute top-140 md:top-95 -translate-y-1/2 left-10 space-y-5 sm:left-10 lg:left-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">    
   

  <div>
    <h2 className="text-white/80 text-[13px] font-semibold">Modularity and Rapid Deployment</h2>
         <p className="text-[13px] md:text-[12px] text-white/70 leading-tight">
One of Orinox’s hallmarks is speed and flexibility in project execution. We achieve this through modular designs and agile project management. Our drilling rigs and equipment are chosen for modularity, meaning they can be quickly broken down, moved, and assembled. For instance, we utilize modular rigs that can be transported in standard containers or on trailers to remote sites – significantly reducing mobilization time and cost.
</p></div>
         <div>
        <p className="text-[13px] md:text-[12px] text-white/70 leading-tight">
This is crucial for frontier areas with little infrastructure (jungle, desert, arctic) where conventional rigs would require heavy-lift transport. On the facilities side, Orinox advocates modular process units: instead of stick-building a large gas plant on site for months, we fabricate skids and modules in advanced yards and ship them to site for rapid assembly. This approach was proven in fast LNG projects and in some onshore plants, cutting construction schedules by as much as 30%. For midstream pipelines, we apply techniques like pre-automated welding spreads and use of composite materials in challenging terrains to accelerate construction.
</p></div>
       <div>

         <p className="text-[13px] md:text-[12px] text-white/70 leading-tight">
The net effect is Orinox can bring new production online faster than competitors. For example, if a small operator strikes oil, Orinox could offer a packaged solution: a modular CPF (Central Processing Facility) that can be installed in weeks, tied into a pipeline we fast-track with multiple crews – getting first oil flowing perhaps a year earlier than other traditional approaches.
</p>     </div>
      
  
</div>
    </main>
  );
}

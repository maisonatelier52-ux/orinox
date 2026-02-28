"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import Orinox from "@/components/Orinox";

interface SectionData {
  heading?: string;
  description?: string;
  points?: string[];
}

interface SlideProps {
  image: string;
  overlayClassName?: string;
  badge?: string;
  badgeClassName?: string;
  mainHeading?: string;
  mainHeadingClassName?: string;
  sections?: SectionData[];
  contentContainerClassName?: string;
  layout?: "standard" | "upstream" | "splash" | "image-only";
  upstreamSections?: { topic: string; title: string }[];
  bottomDescription?: string;
}

function Section({
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
}: SlideProps) {
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
                  <h1 className="text-white text-5xl md:text-6xl font-light tracking-wide">
                    {s.title}
                  </h1>
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
            <h1
              className={`text-[14px] font-semibold leading-none ${mainHeadingClassName}`}
            >
              {mainHeading}
            </h1>
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

export default function OrinoxCapabilitiesPresentation() {
  return (
    <div className="flex flex-col bg-black">
      <Orinox />

      {/* Upstream/Midstream Overview */}
      <Section
        image="/images/e-p.png"
        layout="upstream"
        upstreamSections={[
          {
            topic: "Upstream (Exploration & Production)",
            title: "E&P",
          },
          {
            topic: "Midstream (Transportation & Storage)",
            title: "T&S",
          },
        ]}
        bottomDescription="ORINOX is a full-service oil drilling company operating across the Upstream (Exploration & Production) and Midstream (Transportation & Storage) segments of the oil and gas value chain."
      />

      {/* The Future */}
      <Section
        image="/images/future.png"
        overlayClassName="bg-black/20"
        badge="THE FUTURE"
        badgeClassName="bg-black/90 px-3 py-1 text-white/50"
        mainHeading="Oil & gas is transforming,\nnot disappearing."
        mainHeadingClassName="text-2xl lg:text-3xl font-semibold leading-none mb-4"
        sections={[
          {
            description: "Global oil and gas demand forecasts with long plateau.\nCapital disciplined operators seeking higher productivity, lower emissions.\nHuge capex in brownfield optimization, CCUS, and infrastructure upgrade.",
          },
        ]}
      />

      {/* Who We Are */}
      <Section
        image="/images/who-we-are.png"
        overlayClassName="bg-black/40"
        badge="WHO WE ARE"
        mainHeading="Precision Drilling &\nLow-Carbon Infrastructure Partner"
        mainHeadingClassName="text-2xl lg:text-3xl font-semibold leading-none mb-4"
        sections={[
          {
            description: "High-performance drilling and future-ready oil & gas infrastructure",
          },
          {
            description: "Specialist drilling and field development partner (Upstream & Near-Field Midstream).\nCombining drilling excellence with digital optimization and low-carbon readiness.\nTargeting attractive IRRs across drilling, CCUS, and hydrogen-ready advisory.",
          },
        ]}
      />

      {/* Exploration and Production (E&P) */}
      <Section
        image="/images/our-expertise.png"
        overlayClassName="bg-black/20"
        badge="OUR EXPERTISE"
        mainHeading="Exploration and Production (E&P)"
        mainHeadingClassName="text-[20px] lg:text-2xl font-semibold leading-none"
        sections={[
          {
            heading: "Exploration",
            description: "We are always searching for hydrocarbon reservoirs using seismic surveys and other geological data.",
          },
          {
            heading: "Production",
            description: "Our experienced team is known for drilling wells and developing facilities to extract crude oil and natural gas from the ground, both onshore and offshore.",
          },
        ]}
      />

      {/* Transportation and Storage (T&S) */}
      <Section
        image="/images/transportation-and-storage.png"
        overlayClassName="bg-black/20"
        badge="OUR EXPERTISE"
        mainHeading="Transportation and Storage (T&S)"
        mainHeadingClassName="text-[20px] lg:text-2xl font-semibold leading-none"
        sections={[
          {
            heading: "Transportation",
            description: "We offer multiple services, depending on the product and location, including setting up of pipelines, and transportation by rail, road, and maritime vessels.",
          },
          {
            heading: "Storage",
            description: "Holding of raw materials like crude oil and natural gas, and finished products (refined petroleum products or liquefied natural gas) in facilities such as tanks, mounded storage vessels, or underground reservoirs, require the most trustworthy and reliable specialists.\nAt Orinox, we ensure nothing is left to chance.",
          },
        ]}
      />

      {/* Core Upstream Capabilities */}
      <Section
        image="/images/current-capabilities.png"
        overlayClassName="bg-black/20"
        badge="CURRENT CAPABILITIES"
        mainHeading="Core Upstream"
        contentContainerClassName="absolute top-1/2 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            heading: "Drilling Services & Rig Operations",
            description: "Onshore drilling (exploration, appraisal, development wells).\nWork-over operations and basic well intervention.\nDay-rate or turnkey contracts.",
          },
          {
            heading: "Well Engineering & Project Management",
            description: "Well design (trajectory, casing program, mud program).\nAFE and cost estimation.\nDrilling program planning, logistics coordination, contractor management.",
          },
          {
            heading: "Completions & Basic Production Support",
            description: "Casing and cementing supervision (via partners or in-house crew).\nSimple completions and well clean-up.\nHand-over-to-production procedures.",
          },
          {
            heading: "HSE, Risk & Compliance in Drilling",
            description: "Rig safety management, permit-to-work, toolbox talks.\nIncident investigation, basic environmental compliance on pads.",
          },
        ]}
      />

      {/* Transition Capabilities – Upstream */}
      <Section
        image="/images/transition-capabilities.png"
        overlayClassName="bg-black/20"
        badge="TRANSITION CAPABILITIES – UPSTREAM"
        mainHeading="Orinox: The “Next Wave” of Capabilities"
        contentContainerClassName="absolute top-1/2 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            heading: "Digital Drilling & Performance Optimization",
            description: "Real-time drilling analytics and KPI dashboards (ROP, NPT, bit life).\nAI/ML models for stuck-pipe risk, torque & drag, vibration monitoring.\n“Digital drilling center” service for clients.",
          },
          {
            heading: "Advanced Reservoir & Production Optimization Support",
            description: "Collaboration with reservoir engineers to design well placement & completions for maximized EUR.\nProduction surveillance data integration to refine drilling/completion strategy over field life.",
          },
          {
            heading: "Low-Carbon Field Development Solutions",
            description: "Well designs compatible with CO₂-EOR or CO₂ storage in the future.\nIntegration of electrified rigs / lower-emission drilling packages.\nMethane-leak monitoring and flaring optimization around well pads.",
          },
          {
            heading: "Geothermal & Repurposing of Brownfields",
            description: "Re-using old O&G wells for geothermal heat or power pilots.\nPortfolio screening services to identify geothermal prospects.",
          },
        ]}
      />

      {/* Core Midstream Capabilities */}
      <Section
        image="/images/core-midstream.png"
        overlayClassName="bg-black/30"
        badge="CURRENT CAPABILITIES"
        mainHeading="Core Midstream"
        contentContainerClassName="absolute top-1/2 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            heading: "Pre-FEED / FEED Support for Gathering & Flowlines",
            description: "Well pad tie-in design, routing options, hydraulic considerations.\nGathering system concepts for new fields.\n“Digital drilling center” service for clients.",
          },
          {
            heading: "Pipeline & Flowline Construction Management (via EPC partners)",
            description: "On-site construction supervision.\nQuality assurance, welding inspection, pressure testing coordination.",
          },
          {
            heading: "Tankage & Storage Interface Engineering",
            description: "Basic tank farm layout suggestions for field terminals (crude, produced water).\nMetering, LACT units, small loading facilities.",
          },
          {
            heading: "Operations Readiness & Commissioning Support",
            description: "Procedures, checklists, and training for first oil/gas.\nEmergency response and safety drills around new midstream assets.",
          },
        ]}
      />

      {/* Further Capabilities – Midstream */}
      <Section
        image="/images/future-capabilities.png"
        overlayClassName="bg-black/30"
        badge="FURTHER CAPABILITIES – MIDSTREAM"
        mainHeading="Orinox: The “Future of Infrastructure” Specialist"
        contentContainerClassName="absolute top-1/2 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            heading: "Hydrogen-Ready & CO₂-Ready Pipeline Design Advisory",
            description: "Advisory on material selection and routing for hydrogen or CO₂ transport.\nBlending hydrogen into existing gas grids (H₂-ready concepts).",
          },
          {
            heading: "CO₂ Transport Network Planning for CCUS",
            description: "Conceptual routing from emitters to storage hubs (salt caverns, depleted fields).\nMulti-client CO₂ pipeline corridor studies.",
          },
          {
            heading: "Digital Twins for Field-to-Terminal Networks",
            description: "Simulation models of gathering systems and small pipelines.\nCapacity debottlenecking, leak scenario simulations, “what-if” planning.",
          },
          {
            heading: "Methane & Fugitive Emission Monitoring Services",
            description: "Integrated leak detection programs for gathering systems, manifolds, and terminals.\nEmissions dashboards and compliance reporting as a service.",
          },
          {
            heading: "Integrated “Low-Carbon Field Infrastructure” Offering",
            description: "Combine upstream well design + midstream gathering + emissions abatement into one turnkey solution.\nFrom first well to low-carbon evacuation route.",
          },
        ]}
      />

      {/* Orinox Ship Image */}
      <Section image="/images/orinox.png" layout="image-only" />

      {/* Addressing the Problem */}
      <Section
        image="/images/addressing-the-problem.jpg"
        overlayClassName="bg-black/30"
        badge="ADDRESSING THE PROBLEM"
        mainHeading="Inefficient, High-Emission Field Development"
        sections={[
          {
            description: "Traditional drilling and midstream development is siloed, inefficient, and often wasteful.",
          },
          {
            description: "Siloed drilling, subsurface, and infrastructure planning.\nHigh NPT, cost overruns, under-utilized pipelines and terminals.\nGrowing regulatory pressure on methane, flaring, and CO₂.",
          },
        ]}
      />

      {/* Core Business Snapshot */}
      <Section
        image="/images/core-business-snapshot.png"
        badge="CORE BUSINESS SNAPSHOT"
        mainHeading="What Orinox already does well and reliably."
        contentContainerClassName="absolute top-1/3 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            description: "Onshore drilling operations and well engineering.\nWorkovers and completions support.\nPre-FEED/FEED support for gathering systems and field infrastructure.\nRobust HSE culture and project management.",
          },
        ]}
      />

      {/* Integrated Proposition 1 */}
      <Section
        image="/images/first-well-to-low-carbon-evacuation-route.png"
        overlayClassName="bg-black/50"
        badge="INTEGRATED PROPOSITION"
        mainHeading="Integration is the differentiator."
        sections={[
          {
            description: "Single partner for drilling, field infrastructure, and low-carbon compatibility.\nReduced time to first oil/gas, better NPV and IRR through integrated planning.\nBuilt-in emissions and future-proofing for CCUS/H₂.",
          },
        ]}
      />

      {/* Integrated Proposition 2 */}
      <Section
        image="/images/orinox-grounded-techninal-rigor-depth-research.jpg"
        overlayClassName="bg-black/50"
        badge="INTEGRATED PROPOSITION"
        mainHeading="Orinox is grounded in technical rigor and in-depth research."
        sections={[
          {
            description: "Adoption of best practices from latest upstream drilling and midstream pipeline R&D.\nPartnerships with technology vendors (digital drilling, emissions detection, digital twins).\nContinuous benchmarking: ROP performance, emissions intensity, cost per barrel delivered.",
          },
        ]}
      />

      {/* ESG & Sustainability Strategy */}
      <Section
        image="/images/responsible-hydrocarbons-quantifiable-esc-metrics.png"
        overlayClassName="bg-black/50"
        badge="ESG & Sustainability Strategy"
        mainHeading="Responsible hydrocarbons with quantifiable ESG metrics."
        sections={[
          {
            description: "Methane and fugitive emissions reduction initiatives.\nElectrification pathways for rigs and infrastructure.\nDecommissioning and brownfield repurposing (geothermal, CCUS).\nCommunity engagement and local content strategy.",
          },
        ]}
      />

      {/* Why We Excel */}
      <Section
        image="/images/why-we-excel-over-the-rest.png"
        badge="WHY WE EXCEL OVER THE REST"
        mainHeading="We drill better, faster, safer"
        contentContainerClassName="absolute bottom-20 -translate-y-1/2 right-6 lg:right-25 z-20 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col text-right"
        sections={[
          {
            description: "We design field and midstream infrastructure that is ready for CCUS and hydrogen.\nWe turn legacy oil & gas capex into future-proof, low-carbon assets.",
          },
        ]}
      />

      {/* Fit-for-Purpose Fleet */}
      <Section
        image="/images/fit-for-purpose-fleet.png"
        badge="FIT-FOR-PURPOSE FLEET"
        contentContainerClassName="absolute top-1/2 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            heading: "Type of Rigs",
            description: "Light / medium / heavy land rigs\nHP rating (e.g., 750 HP vs 1500 HP)\nDepth capability, horizontal / directional capability",
          },
          {
            heading: "Specialization",
            description: "Conventional vertical drilling\nHigh-angle / horizontal\nWorkover / well service units",
          },
          {
            heading: "Age & Condition",
            description: "New builds vs mid-life vs old units\nAutomation level (top drive, iron roughneck, auto-driller, etc.)",
          },
          {
            heading: "Ownership Model",
            description: "Fully owned rigs\nLong-term leased rigs\n“Asset-light” model relying on partnership fleets",
          },
        ]}
      />

      {/* Tech Stack */}
      <Section
        image="/images/tech-stack.jpg"
        overlayClassName="bg-black/60"
        badge="TECH STACK"
        contentContainerClassName="absolute top-1/2 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            heading: "Operational Excellence and Accurate, Reliable Data",
            description: "Field-proven equipment, integrated data, and digital optimization from day one.",
          },
          {
            heading: "Field technology for safer, faster wells",
            description: "Modern rig control systems (top drive, auto-driller, rig-floor automation) to reduce human exposure and NPT.\nReal-time data acquisition (WITSML/other standard) from rig sensors, MWD/LWD, and mud logging units.",
          },
          {
            heading: "Digital drilling and performance analytics",
            description: "Central operations dashboard to monitor ROP, NPT, bit runs, and fuel consumption across rigs.\nEarly-stage AI/ML models to flag anomalies and optimize drilling parameters.",
          },
          {
            heading: "Enterprise backbone to scale",
            description: "Integrated ERP for finance, procurement, fleet maintenance, and inventory.\nHSE and incident-reporting platform to capture every near miss, observation, and safety action.",
          },
          {
            heading: "Future-ready data architecture",
            description: "Structured data lake from day one, enabling future products:\nClient benchmarking, emissions reporting and digital twin offerings for fields and gathering systems",
          },
        ]}
      />

      {/* Exploration Services */}
      <Section
        image="/images/exploration-services.png"
        badge="Upstream (Exploration & Production) Services"
        mainHeading="Exploration Services"
        contentContainerClassName="absolute bottom-1/2 translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            description: "End-to-end exploration capability to identify new oil and gas reserves, including geological and geophysical (G&G) surveying, seismic data acquisition (2D/3D seismic campaigns), petrophysical analysis, and basin modeling.",
          },
          {
            description: "Orinox can handle prospect generation, licensing rounds bids, and exploration well planning.",
          },
          {
            description: "Once prospects are identified, Orinox manages exploration drilling – mobilizing suitable rigs to frontier locations (onshore or offshore).",
          },
        ]}
      />

      {/* Appraisal & Field Evaluation */}
      <Section
        image="/images/appraisal-and-field-evalution.png"
        badge="Upstream (Exploration & Production) Services"
        mainHeading="Appraisal & Field Evaluation"
        contentContainerClassName="absolute bottom-1/2 translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            description: "After a discovery, Orinox conducts appraisal drilling and testing to determine the field’s size and commercial viability.",
          },
          {
            description: "Services include drilling appraisal wells, performing well logs and extended well flow tests, coring and fluid sampling, and reservoir characterization.",
          },
        ]}
      />

      {/* Development Drilling & Completion */}
      <Section
        image="/images/development-drilling-completion.png"
        badge="Upstream (Exploration & Production) Services"
        mainHeading="Development Drilling & Completion"
        contentContainerClassName="absolute bottom-1/2 translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            description: "Orinox offers full-scale development drilling services once a project moves forward. This covers drilling production wells and manages well design and modern completion techniques.",
          },
        ]}
      />

      {/* Production Operations & Optimization */}
      <Section
        image="/images/production-operations-and-optimization.png"
        badge="Upstream (Exploration & Production) Services"
        mainHeading="Production Operations & Optimization"
        contentContainerClassName="absolute top-1/2 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            description: "Once wells are on stream, Orinox can operate or support field production to maximize output and uptime via day-to-day well monitoring and central processing facilities.",
          },
        ]}
      />

      {/* Enhanced Oil Recovery (EOR) & Late-life Services */}
      <Section
        image="/images/enhanced-oil-recovery-and-late-life-services.png"
        overlayClassName="bg-black/20"
        badge="Upstream (Exploration & Production) Services"
        mainHeading="Enhanced Oil Recovery (EOR) & Late-life Services"
        contentContainerClassName="absolute bottom-1/2 translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            description: "For maturing fields, Orinox implements EOR techniques like gas injection or waterflood design. We also provide well workovers and re-completions to revive production.",
          },
        ]}
      />

      {/* Gathering & Transportation */}
      <Section
        image="/images/gathering-and-transportaion.png"
        badge="Midstream (Transportation, Storage, Processing, Marketing) Services"
        mainHeading="Gathering & Transportation"
        contentContainerClassName="absolute top-95 md:top-1/2 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            description: "Orinox designs, builds, and operates the infrastructure that moves hydrocarbons from the wellhead to processing or market, including small-diameter flowlines and regional truck pipelines.",
          },
        ]}
      />

      {/* Oil & Gas Processing */}
      <Section
        image="/images/oil-and-gas-processing.png"
        overlayClassName="bg-black/40"
        badge="Midstream (Transportation, Storage, Processing, Marketing) Services"
        mainHeading="Oil & Gas Processing"
        contentContainerClassName="absolute top-1/2 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            description: "Orinox develops and runs central processing facilities (CPFs) for oil and gas treatment (removing impurities like CO₂, H₂S) to ensure products are market-ready.",
          },
        ]}
      />

      {/* Storage Solutions */}
      <Section
        image="/images/storage-solutions.jpg"
        overlayClassName="bg-black/50"
        badge="Midstream (Transportation, Storage, Processing, Marketing) Services"
        mainHeading="Storage Solutions"
        contentContainerClassName="absolute top-1/2 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            description: "We provide hydrocarbon storage via tank farms at field terminals or hub locations, including NGL and refined product storage (pressurized bullets or atmospheric tanks).",
          },
        ]}
      />

      {/* Key Differentiators */}
      <Section
        image="/images/storage-solutions.jpg"
        overlayClassName="bg-black/50"
        mainHeading="Key Differentiators"
        contentContainerClassName="absolute top-1/2 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            heading: "Advanced Technology",
            description: "Orinox deploys AI and Machine Learning for real-time drilling optimization and digital twins for production facilities.",
          },
        ]}
      />

      {/* Modularity and Rapid Deployment */}
      <Section
        image="/images/modularity-and-rapid-deployment.png"
        overlayClassName="bg-black/20"
        contentContainerClassName="absolute top-95 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            heading: "Modularity and Rapid Deployment",
            description: "We achieve speed and flexibility through modular designs, crucial for frontier areas with little infrastructure, bringing production online faster.",
          },
        ]}
      />

      {/* Integrated Cross-Sector Synergy */}
      <Section
        image="/images/integrated-cross-sector-synergy.png"
        overlayClassName="bg-black/30"
        contentContainerClassName="absolute top-95 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            heading: "Integrated Cross-Sector Synergy",
            description: "Our premise is an integrated approach bridging upstream and midstream, creating financial synergies and improving project economics.",
          },
        ]}
      />

      {/* Why Orinox? */}
      <Section
        image="/images/why-orinox.jpg"
        overlayClassName="bg-black/40"
        mainHeading="Why Orinox?"
        contentContainerClassName="absolute top-1/2 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            heading: "Compliance-first Execution",
            description: "Permit-to-work, well control, and ESIA planning embedded from day one with clear reporting cadence.",
          },
          {
            heading: "Measured Emissions Management",
            description: "LDAR programs and emissions dashboards to meet evolving methane and climate requirements.",
          },
        ]}
      />

      {/* Accountable Governance */}
      <Section
        image="/images/accountable-governance-safe-compliant-delivery.jpg"
        overlayClassName="bg-black/40"
        contentContainerClassName="absolute bottom-10 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            heading: "Accountable Governance Structure",
            description: "We combine drilling execution with measurable HSE and emissions performance, reporting regularly to government interfaces.",
          },
        ]}
      />

      {/* Company Overview */}
      <Section
        image="/images/company.png"
        overlayClassName="bg-black/20"
        badge="THE COMPANY"
        contentContainerClassName="absolute top-40 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-4 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            heading: "Orinox: What we do now, and where we are going.",
            description: "A specialist partner focused on Upstream and Near-Field Midstream, targeting efficient IRRs and low-carbon infrastructure.",
          },
        ]}
      />

      {/* Onshore/Offshore Integrated Solutions */}
      <Section
        image="/images/onshore-offshore-integrated-solutions.png"
        overlayClassName="bg-black/40"
        contentContainerClassName="absolute top-70 -translate-y-1/2 left-10 lg:left-25 z-20 space-y-4 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col"
        sections={[
          {
            description: "Orinox provides integrated services across the Upstream and Near-Field Midstream segments of the oil and gas value chain.",
          },
        ]}
      />

      {/* Orinox Working Image */}
      <Section image="/images/orinox-working.jpg" layout="image-only" />

      {/* Global Locations */}
      <Section
        image="/images/orinox-global-locations.jpg"
        overlayClassName="bg-black/30"
        contentContainerClassName="absolute bottom-0 -translate-y-1/2 right-10 lg:right-25 z-20 space-y-3 md:space-y-5 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col text-right"
        sections={[
          {
            heading: "United Kingdom",
            description: "Level 28, 52 Lime Street, London,\nEC3M 7AF, United Kingdom",
          },
          {
            heading: "United Arab Emirates",
            description: "Villa 145, Al Manara Street, Al Safa 2,\nDubai, United Arab Emirates",
          },
          {
            heading: "Venezuela",
            description: "Edificio Epsilon CIIP 3 Avenida Venezuela,\nCaracas 1060, Distrito Capital Piso 7",
          },
          {
            heading: "Spain",
            description: "Plaza de la Independencia 8,\nPiso 3 Madrid Spain",
          },
        ]}
      />

    </div>
  );
}


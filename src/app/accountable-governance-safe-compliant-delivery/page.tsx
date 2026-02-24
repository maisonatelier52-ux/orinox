import Image from "next/image";

export default function AccountableGovernance() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <img
        src="/images/accountable-governance-safe-compliant-delivery.jpg"
        alt="Oil and Gas Facility"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute top-8 right-10 md:right-16 z-20 flex items-center gap-3">
        <img
          src="/images/orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-10 md:h-12 w-auto"
        />
      </div>

      <div className="absolute bottom-10 -translate-y-1/2 left-10 space-y-5 sm:left-10 lg:left-25 z-20  max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">
        <div>
          <h2 className="text-white/80 text-[13px] font-semibold">
            Accountable Governance Structure for Safe, Compliant Delivery
          </h2>
          <p className="text-[12px]] text-white/70 leading-tight">
            Orinox is a specialist well delivery and near-field midstream
            partner. We combine drilling execution, well engineering, and
            infrastructure readiness with measurable HSE and emissions
            performance. Operations are governed by defined accountabilities,
            technical assurance, and a compliance-first culture.
          </p>
        </div>
        <div>
          <h2 className="text-white/80 text-[13px] font-semibold">
            Government Interface & Reporting
          </h2>
          <p className="text-[12px]] text-white/70 leading-tight">
           Monthly HSE and progress reporting (with incident/near-miss transparency).
            <br />
         Local content dashboard and supplier development status.
            <br />
        Environmental compliance reporting aligned to permit conditions.
            <br />
       Joint technical reviews at defined decision gates.
          </p>
        </div>
      </div>
    </main>
  );
}

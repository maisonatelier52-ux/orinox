import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen w-full bg-black px-20 pt-20 text-white">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Top bar */}
        <div className="flex justify-between items-start">
          <img
            src="/images/orinox-white-logo.png"
            alt="Orinox"
            className="h-13 w-auto"
          />

          <button className="rounded-md border border-white/60 px-10 py-3 text-[13px] font-medium">
            Technical Solutions
          </button>
        </div>

        {/* Menu */}
        <div className="mt-48 text-[12px]">
          <div className="flex justify-between">
            
            <div className="flex flex-col gap-4"> 
              <p>About</p>
              <p>Services</p>
              <p>Operations</p>
            </div>

            <div className="flex flex-col gap-4">
              <p>Regions</p>
              <p>Contracts</p>
              <p>Technology</p>
            </div>

            <div className="flex flex-col gap-4">
              <p>E&amp;P Services</p>
              <p>Upstream</p>
              <p>Midstream</p>
            </div>

            <div className="flex flex-col gap-4">
              <p>Investors</p>
              <p>ESG</p>
              <p>Case Studies / Projects</p>
            </div>

            <div className="flex flex-col gap-4 text-left">
              <p>Team</p>
              <p>Insights</p>
              <p>Contact</p>
            </div>

          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-16 flex justify-end gap-4">
            <a
              href="/pdf/orinox.pdf"
              className="rounded-md border border-white/60 px-6 py-2 text-[12px] font-light hover:border-white transition"
              download
            >
              Download Orinox
            </a>

            <a
              href="/home"
              className="rounded-md  px-6 py-2 text-[12px] font-medium text-white border border-white/60 transition"
            >
             Home
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
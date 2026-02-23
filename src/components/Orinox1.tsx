import Image from "next/image";
import Link from "next/link";

export default function Orinox1() {
  return (
    <section className="min-h-screen w-full bg-black px-6 py-10 md:px-20 md:pt-20 text-white">
      <div className="max-w-[1100px] ">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-15 md:gap-0">
          <img
            src="/images/orinox-white-logo.png"
            alt="Orinox"
            className="h-10 md:h-13 w-auto"
          />

          {/* RIGHT ALIGNED TOP BUTTON */}
          <Link href='/about' title='about'>
          <button className="rounded-md border cursor-pointer border-white/60 px-6 md:px-10 py-3 text-[12px] md:text-[13px] font-medium whitespace-nowrap">
            Technical Solutions
          </button>
          </Link>
        </div>

        {/* Menu */}
        {/* Menu */}
        <div className="mt-20 md:mt-40 text-[12px]">
          <div className="mx-auto max-w-[1100px]">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6 md:gap-x-12">
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
                <p>E&P Services</p>
                <p>Upstream</p>
                <p>Midstream</p>
              </div>

              <div className="flex flex-col gap-4">
                <p>Investors</p>
                <p>ESG</p>
                <p>Case Studies / Projects</p>
              </div>

              {/* Right-aligned only on desktop */}
              <div className="flex flex-col gap-4 md:ml-auto">
                <p>Team</p>
                <p>Insights</p>
                <p>Contact</p>
              </div>
            </div>
          </div>
        </div>
        {/* ACTION BUTTONS */}
        <div className="mt-16 flex flex-col sm:flex-row justify-end gap-4">
          <a
            href="/pdf/orinox.pdf"
            className="text-center rounded-md border border-white/60 px-6 py-2 text-[12px] font-light hover:border-white transition"
            download
          >
            Download Orinox
          </a>

          <a
            href="/home"
            className="text-center rounded-md px-6 py-2 text-[12px] font-medium text-white border border-white/60 transition"
          >
            Home
          </a>
        </div>
      </div>
    </section>
  );
}

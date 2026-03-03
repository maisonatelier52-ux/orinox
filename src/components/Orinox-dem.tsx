import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

export default function OrinoxDem() {
  return (
    <main className="relative h-screen bg-black flex items-center justify-center md:justify-end px-4 md:pr-24">
      <div className="absolute top-10 left-0 right-0 px-8 md:px-24 flex justify-end">
        <a 
          href="/pdf/orinox.pdf" 
          className="text-[11px] text-white transition-all duration-300 hover:underline cursor-pointer flex items-center gap-2" 
          download
        >
          <span className="leading-none">Download</span>
          <Download size={14} />
        </a>
      </div>
      
      {/* Main Logo */}
      <Link href="/">
        <img
          src="/images/orinox-white-logo.png"
          alt="Orinox Logo"
          className="h-15 md:h-20 w-auto"
        />
      </Link>
    </main>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function Orinox() {
  return (
   <main className="min-h-screen bg-black flex items-center">
      <div className="w-full flex justify-end pr-24">
        <div className="flex items-center gap-4">
          {/* Logo icon */}
          <Link href='/home'>
          <img
            src="/images/orinox-white-logo.png"
            alt="Orinox Logo"
            className="h-20 w-auto"
          />
          </Link>
        </div>
      </div>
    </main>
  );
}

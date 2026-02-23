import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black px-6 md:px-20 py-35">
      <div className="max-w-[1100px] ">
        <div className="border-t border-white/60 mb-16"></div>
        <div className="flex flex-col items-start gap-40 p-4">
          <div className="flex items-center gap-4">
            <Image
              src="/images/orinox-white-logo.png" 
              alt="Orinox"
              width={200}
              height={50}
            />
          </div>
          <p className="text-[14px] text-white/80">
            © 2026 Orinox Holding
          </p>
        </div>
      </div>
    </footer>
  );
}
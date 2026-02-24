import Image from "next/image";

interface Data{
    mainTitle:string,
    topic:string,
    title:string,
    description:string,
    image:string
    description1:string;
    description2:string;
    description3?:string;
}
interface OrinoxPageProps {
  data: Data
}
export default function OrinoxPage({data}:OrinoxPageProps) {
  return (
   <main className="relative h-screen w-full overflow-hidden">
      <img
        src={data.image}
        alt={data.title}
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

   <div className="absolute bottom-5 -translate-y-1/2 left-10 sm:left-10 lg:left-25 z-20 space-y-30 max-w-xs sm:max-w-md lg:max-w-xl text-white flex flex-col">        <div>
       <div>
           <h1 className="text-[18px] font-light italic  text-white/70 leading-none">
      {data.mainTitle}
          </h1>
       </div>
       

          {/* Heading */}
        </div>

        {/* Description */}
        <div className="space-y-4">
               <p className="inline-block text-xs uppercase tracking-wide  text-white/70">
       {data.topic}
          </p>
          <h2 className="text-[14px] text-white/90">{data.title}</h2>
          <p className="text-[12px]] text-white/70 leading-tight">
        {data.description}
           <br/>
      {data.description1}
           <br/>
        {data.description2}
        <br/>
        {data?.description3}
          </p>
        </div>
      
         
      
      </div>
    </main>
  );
}




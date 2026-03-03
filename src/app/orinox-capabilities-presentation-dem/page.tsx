import OrinoxGenericSlide from "@/components/OrinoxGenericSlide";
import presentationData from "../../../public/data/capabilities_presentation.json";
import OrinoxDem from "@/components/Orinox-dem";

export default function OrinoxCapabilitiesPresentation() {
  return (
    <>
    <OrinoxDem />
      {presentationData.map((slide: any) => (
        <OrinoxGenericSlide key={slide.id} {...slide} />
      ))}
    </>
  );
}
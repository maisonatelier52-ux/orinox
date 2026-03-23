"use client";

import OrinoxGenericSlide from "@/components/OrinoxGenericSlide";
import OrinoxDem from "@/components/Orinox-dem";

export default function PresentationClient({ presentationData }: { presentationData: any[] }) {
    return (
        <>
            <OrinoxDem />
            {presentationData.map((slide: any) => (
                <OrinoxGenericSlide key={slide.id} {...slide} />
            ))}
        </>
    );
}

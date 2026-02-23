import AdvancingFrontier from "@/components/AdvancingFrontier";
import ContactSection from "@/components/ContactSection";
import CoreOperationalSectors from "@/components/CoreOperationalSectors";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";
import GlobalFootprint from "@/components/GlobalFootprint";
import IntegratedInfrastructure from "@/components/IntegratedInfrastructure";
import MissionVision from "@/components/MissionVision";
import Orinox1 from "@/components/Orinox1";
import OrinoxLegacy from "@/components/OrinoxLegacy";
import QuoteSection from "@/components/QuoteSection";
import SafetyAtScale from "@/components/SafetyAtScale";
import TechnicalAndMidstream from "@/components/TechnicalAndMidstream";

export default function About() {
  return (
   <>
    <Orinox1 />
    <div className="h-130 bg-black"/>
    <OrinoxLegacy/>
    <MissionVision/>
    <CoreValues/>
    <AdvancingFrontier/>
    <IntegratedInfrastructure/>
    <CoreOperationalSectors/>
    <TechnicalAndMidstream/>
    <SafetyAtScale/>
    <GlobalFootprint/>
    <ContactSection/>
    <QuoteSection/>
    <Footer/>
    </>
  );
}
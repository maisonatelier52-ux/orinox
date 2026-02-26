import AdvancingFrontier from "@/components/AdvancingFrontier";
import ContactSection from "@/components/ContactSection";
import CoreOperationalSectors from "@/components/CoreOperationalSectors";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";
import GlobalFootprint from "@/components/GlobalFootprint";
import IntegratedInfrastructure from "@/components/IntegratedInfrastructure";
import MissionVision from "@/components/MissionVision";
import Orinox1 from "@/components/Orinox1";
import OrinoxAbout from "@/components/OrinoxAbout";
import OrinoxLegacy from "@/components/OrinoxLegacy";
import QuoteSection from "@/components/QuoteSection";
import SafetyAtScale from "@/components/SafetyAtScale";
import StrategicLeadership from "@/components/StrategicLeadership";
import TechnicalAndMidstream from "@/components/TechnicalAndMidstream";

export default function About() {
  return (
   <>
    <OrinoxAbout />
    <OrinoxLegacy/>
    <MissionVision/>  
    <CoreValues/>
    <StrategicLeadership/>
    <AdvancingFrontier/>
    <IntegratedInfrastructure/>
    <CoreOperationalSectors/>
    <TechnicalAndMidstream/>
    <GlobalFootprint/>
    <ContactSection/>
    <QuoteSection/>
    <Footer/>
    </>
  );
}
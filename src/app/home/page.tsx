import Image from "next/image";
import Link from "next/link";
import Home from "../page";
import Upstream from "../upstream-and-midstream/page";
import WhoWeAre from "../who-we-are/page";
import Future from "../future/page";
import ExplorationAndProduction from "../our-expertise/page";
import TransportationAndStorage from "../transportation-and-storage/page";
import TransitionCapabilities from "../transition-capabilities/page";
import CurrentCapabilities from "../current-capabilities/page";
import CoreMidstream from "../core-midstream/page";
import FurtherCapabilities from "../further-capabilities/page";
import Orinoxship from "../orinox/page";
import AddressingtheProblem from "../addressing-the-problem/page";
import CoreBusinessSnapshot from "../core-business-snapshot/page";
import OrinoxPage from "@/components/OrinoxPage";
import orinox from '../../../public/data/orinox.json'
import WhyWeExcel from "../why-we-excel-over-the-rest/page";
import FitForPurpose from "../fit-for-purpose-fleet/page";
import TechStack from "../tech-stack/page";
import ExplorationServices from "../exploration-services/page";
import AppraisalAndFieldEvaluation from "../appraisal-and-field-evaluation/page";
import DevelopmentDrillingAndCompletion from "../development-drilling-and-completion/page";
import ProductionOperationAndOptimization from "../production-operations-and-optimization/page";
import EnhancedOilRecovery from "../enhanced-oil-recovery-and-late-life-services/page";
import GatheringAndTransportation from "../gathering-and-transportaion/page";
import OilAndGasProcessing from "../oil-and-gas-processing/page";
import StorageSolutions from "../storage-solutions/page";
import MarketinAndOfftake from "../marketing-and-offtake-management/page";
import ModularityAndRapidDevelopment from "../modularity-and-rapid-deployment/page";
import IntegratedCrossSector from "../integrated-cross-sector-synergy/page";
import OrinoxCommitsToDeliver from "../what-orinox-commits-to-deliver/page";
import WhatOrinoxProposes from "../what-orinox-proposes/page";
import WhyOrinox from "../why-orinox/page";
import AccountableGovernance from "../accountable-governance-safe-compliant-delivery/page";
import Company from "../the-company/page";
import OnshoreOffshore from "../onshore-offshore-integrated-solutions/page";
import OrinoxWorking from "../orinox-working/page";
import OrinoxGlobalLocations from "../orinox-global-locations/page";
import KeyDifferentiators from "../key-differentiators/page";
import Orinox from "@/components/Orinox";

export default function OrinoxHome() {
  return (
<>
 <Orinox/>
 <Upstream/>
 <Future/>
 <WhoWeAre/>
 <ExplorationAndProduction/>
 <TransportationAndStorage/>
 <CurrentCapabilities/>
 <TransitionCapabilities/>
 <CoreMidstream/>
 <FurtherCapabilities/>
 <Orinoxship/>
 <AddressingtheProblem/>
 <CoreBusinessSnapshot/>
  <OrinoxPage data={orinox[0]}/>
  <OrinoxPage data={orinox[1]}/>
  <OrinoxPage data={orinox[2]}/>
  <WhyWeExcel/>
  <FitForPurpose/>
  <TechStack/>
  <ExplorationServices/>
  <AppraisalAndFieldEvaluation/>
  <DevelopmentDrillingAndCompletion/>
  <ProductionOperationAndOptimization/>
  <EnhancedOilRecovery/>
  <GatheringAndTransportation/>
  <OilAndGasProcessing/>
  <StorageSolutions/>
  <MarketinAndOfftake/>

  {/* key differentiators */}
  <KeyDifferentiators/>
  <ModularityAndRapidDevelopment/>
  <IntegratedCrossSector/>
  <OrinoxCommitsToDeliver/>
  <WhatOrinoxProposes/>
  <WhyOrinox/>
  <AccountableGovernance/>
  <Company/>
  <OnshoreOffshore/>
  <OrinoxWorking/>
  <OrinoxGlobalLocations/>

 </>

  );
}

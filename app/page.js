import Image from "next/image";
import HeroSection from "./component/Hero";
import SocialProofSection from "./component/SocialProcess";
import StatsSection from "./component/StatsSection";
import JourneySection from "./component/JourneySection";
import Jounr from "./component/Jou";
import ProblemSection from "./component/ProblemSection";
import PositioningSection from "./component/PositioningSection";
import CareerJourneySection from "./component/CareerJourneySection";
import WhatYouWillLearn from "./component/WhatYouWillLearn";
import ComparisonTable from "./component/CompareTable";
import FAQSection from "./component/FAQs";
import TrustedBrands from "./component/TrustedBrands";
import CareerRoles from "./component/CareerRoles";
import Testimonials from "./component/Testimonial";
import WhyGrrasSection from "./component/WhyGrrasSection";
import EligibilitySection from "./component/Eligibility";
import ProcessSection from "./component/ProcessSec";
import MentorsSection from "./component/MentorsSection";

export default function Home() {
  return (
    <>
    <HeroSection />
    <SocialProofSection/>
    <StatsSection/>
    <JourneySection/>
    <Jounr/>
    <ProblemSection/>
    <PositioningSection/>
    <CareerJourneySection />
    <WhatYouWillLearn/>
    <EligibilitySection/>
<ProcessSection/>
    <ComparisonTable/>
    <MentorsSection/>
    <WhyGrrasSection/>
    <CareerRoles/>
    <TrustedBrands/>
    <Testimonials/>
    <FAQSection/>
    </>
  );
}

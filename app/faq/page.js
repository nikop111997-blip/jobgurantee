import FAQSection from "../component/FAQs";
import AboutSection from "../component/SecondHero";

export default function Page(){
    return(
        <div className="px-2 sm:px-4 py-2 ">
        <AboutSection name="FAQs for MLOps Job Gurantee" />
        <FAQSection/>
        </div>
    )
}
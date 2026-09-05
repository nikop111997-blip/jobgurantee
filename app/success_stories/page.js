import FAQSection from "../component/FAQs";
import AboutSection from "../component/SecondHero";
import SuccessStoriesGallery from "../component/Sucess";

export default function Page(){
    return(
        <div className="px-2 sm:px-4 py-2 ">
        <AboutSection name="Success Stories from Grras Solutions" />
        <SuccessStoriesGallery />
        <FAQSection/>
        </div>
    )
}
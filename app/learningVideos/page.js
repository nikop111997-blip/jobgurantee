import FAQSection from "../component/FAQs";
import AboutSection from "../component/SecondHero";
import VideoGallery from "../component/Videos";

export default function Page(){
    return(
        <div className="px-2 sm:px-4 py-2 ">
        <AboutSection name="Learning Videos from Grras Solutions" />
        <VideoGallery/>
        <FAQSection/>
        </div>
    )
}
import FAQSection from "../component/FAQs";
import GallerySection from "../component/Gallery";
import AboutSection from "../component/SecondHero";

export default function Page(){
    return(
        <div className="px-2 sm:px-4 py-2 ">
        <AboutSection name="Gallery of Grras Solutions" />
        <GallerySection/>
        <FAQSection/>
        </div>
    )
}
import FAQSection from "../component/FAQs";
import AboutSection from "../component/SecondHero";
import VideoTestimonialsGallery from "../component/Testimonials";

export default function Page(){
    return(
        <div className="px-2 sm:px-4 py-2 ">
        <AboutSection name="Testimonials from Grras Solutions" />
      <VideoTestimonialsGallery/>
        <FAQSection/>
        </div>
    )
}
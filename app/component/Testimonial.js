"use client";

import React, { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Play, Quote, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Extracted exactly from "GRRAS_Testimonials_Extracted.xlsx"
const testimonialsData = [
  {
    id: 1,
    name: "Siddarth Singh Chouhan",
    company: "DevOps Engineer",
    package: "10 LPA",
    quote: "I am Tushar Baliyan, I enrolled into the Job Oriented Program at GRAS and I can't thank enough to the mentors and trainers for getting me placed at such a great organization that too in WFH remote option. I highly recommend GRRAS.",
    image: "https://job-oriented-course.grras.com/assets/images/stories/1732124901.png",
    videoUrl: "https://www.youtube.com/embed/wRZ92rDCCyE?si=ToNPWWZ3EFxbxeKG"
  },{
    id: 2,
    name: "Ritik Narula",
    company: "WIPON",
    package: "3.6 LPA",
    quote: "Hello Team I am from Jaipur. I am currently working in WIPL, Jaipur and my core work is web hosting. This is my first ever break GRRAS has given me in just 9 months of the time after I enrolled in their job oriented program. I had a career gap still I managed.",
    image: "https://job-oriented-course.grras.com/assets/images/stories/1732168534.jpg",
  },
  {
    id: 3,
    name: "Maviya Khan",
    company: "NCG",
    package: "15 LPA",
    quote: "I had an incredible learning experience at Grras Solutions. I highly recommend this institute to anyone looking to excel in DevOps and cloud computing!",
    image: "https://job-oriented-course.grras.com/assets/images/stories/1742990112.jpg",
  },
  {
    id: 4,
    name: "Umesh Kumar",
    company: "ATS",
    package: "6 LPA",
    quote: "Joining Grras Solutions was the best decision for my career. The hands-on training and live projects boosted my skills and confidence to secure a great job!",
    image: "https://job-oriented-course.grras.com/assets/images/stories/1739410045.jpg",
  },
  {
    id: 5,
    name: "Saransh kamboz",
    company: "Celebal Technologies",
    package: "5 LPA",
    quote: "GRRAS faculties help me with real-world expertise and practical training. The comprehensive DevOps curriculum and personalized support truly transformed my career journey!",
    image: "https://job-oriented-course.grras.com/assets/images/stories/1739410018.jpg",
  },
  {
    id: 6,
    name: "Tarun saini",
    company: "Coplance Technologies",
    package: "15 LPA",
    quote: "GRRAS helped me learn DevOps practical skills and gain real experience. The projects and guidance gave me the confidence to grow in my career!",
    image: "https://job-oriented-course.grras.com/assets/images/stories/1739409962.jpg",
  },
  {
    id: 7,
    name: "April Jain",
    company: "Isovalent",
    package: "28 LPA",
    quote: "Constant guidance from Grras team gave me the confidence and skills I needed to successfully transform my career and step into a whole new field. I will recommend GRRAS if one looking for 100% Job Guarantee Training.",
    image: "https://job-oriented-course.grras.com/assets/images/stories/1739409994.jpg",
  },
  {
    id: 8,
    name: "Kartik Agarwal",
    company: "Cloudera",
    package: "25 LPA",
    quote: "The DevOps and Cloud course helped me gain practical skills and boosted my confidence with overall technical classes for cloud-based roles including personality development classes. Highly recommend it!",
    image: "https://job-oriented-course.grras.com/assets/images/stories/1739409608.jpg",
  },
  {
    id: 9,
    name: "Aditya Meena",
    company: "Signzy",
    package: "8.1 LPA",
    quote: "With the 100% job guarantee, it opened doors to amazing career opportunities. I highly recommend this course to anyone looking to learn skills plus getting job!",
    image: "https://job-oriented-course.grras.com/assets/images/stories/1739409549.jpg",
  },
  {
    id: 10,
    name: "Harsh Bhadauriya",
    company: "Red Hat",
    package: "8.5 LPA",
    quote: "Mentors at Grras are phenomenal! They helped me secure a job at Red Hat. I definitely recommend joining Grras to experience the great learning environment.",
    image: "https://job-oriented-course.grras.com/assets/images/stories/1742460208_06.jpg",
  }
];

export default function Testimonials() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sliderRef = useRef(null);

  // Main featured testimonial (Tushar Baliyan)
  const featured = testimonialsData[0];

  // Slider Navigation Logic
  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-[#FAFAFA] py-20 px-4 md:px-8 font-sans overflow-hidden text-center">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <span className="text-gray-500 text-sm font-medium tracking-wide uppercase">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-[44px] font-bold text-[#111] mt-4 tracking-tight leading-[1.15]">
          Our Graduates Don't Just <br className="hidden md:block" />
          Learn, <span className="text-[#FF6B00]">They Achieve.</span>
        </h2>
      </div>

      {/* Featured Video Section */}
      <div className="max-w-[1400px] mx-auto mb-16 relative">
        <div className="relative w-full aspect-video bg-black rounded-[32px] overflow-hidden shadow-2xl group">
          <AnimatePresence>
            {!isPlaying ? (
              <motion.div 
                className="absolute inset-0 cursor-pointer"
                onClick={() => setIsPlaying(true)}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Thumbnail from Spreadsheet */}
                <img 
                  src="https://img.youtube.com/vi/wRZ92rDCCyE/maxresdefault.jpg"
                  alt={featured.name}
                  className="w-full h-full object-cover object-top opacity-60 transition-opacity duration-300 group-hover:opacity-50"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
                    <Play fill="white" className="text-white w-8 h-8 ml-1" />
                  </div>
                </div>

              </motion.div>
            ) : (
              /* YouTube Iframe (Loads on click) */
              <motion.iframe
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={featured.videoUrl}
                title="Graduate Testimonial"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></motion.iframe>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Section */}
      <div className="relative max-w-[1400px] mx-auto">
        
        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll("left")} 
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 z-20 w-10 h-10 bg-[#111] text-white flex items-center justify-center rounded-lg shadow-xl hover:bg-[#FF6B00] transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        
        <button 
          onClick={() => scroll("right")} 
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 z-20 w-10 h-10 bg-[#111] text-white flex items-center justify-center rounded-lg shadow-xl hover:bg-[#FF6B00] transition-colors"
        >
          <ArrowRight size={20} />
        </button>

        {/* Scroll Track with Gradient Mask */}
        <div 
          className="overflow-x-auto snap-x snap-mandatory hide-scrollbar relative py-4"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
          ref={sliderRef}
        >
          <div className="flex gap-6 w-max px-[5%]">
            {testimonialsData.slice(1).map((item) => (
              <div 
                key={item.id} 
                className="snap-center w-[320px] md:w-[350px] bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col text-left shrink-0 relative"
              >
                {/* Orange Quote Icon */}
                <div className="absolute top-6 right-6 text-[#FF6B00] opacity-50">
                  <Quote size={24} className="fill-current" />
                </div>

                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-6 pr-8">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-xl object-cover shrink-0 bg-gray-100" />
                  <div>
                    <h4 className="font-bold text-[#111] text-[15px] leading-tight">{item.name}</h4>
                  </div>
                </div>

                <div className="border-t border-dashed border-gray-200 mb-5"></div>

                {/* Quote Section (Matches "Before" area styling) */}
                <div className="mb-6 flex-1">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Experience</span>
                  <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-5">
                    "{item.quote}"
                  </p>
                </div>

                {/* Outcome Section (Matches Dark "After" box styling) */}
                <div className="bg-[#161616] rounded-xl p-5 mt-auto flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Outcome</span>
                    <p className="text-white text-[13px] font-medium flex items-center gap-2">
                       <Building2 size={14} className="text-[#FF6B00]" /> {item.company}
                    </p>
                  </div>
                  <div className="text-right">
                     <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">Package</span>
                     <p className="text-[#FF6B00] font-bold text-sm">{item.package}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar for slider track */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
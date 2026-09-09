"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, TrendingUp } from "lucide-react";

// Extracted data from your provided HTML
const mentors = [
 {
    id: 1,
    name: "Kunal Singh",
    role: "RHCSA RHCE OpenShift Certified",
    rating: "4.30",
    exp: "8+",
    image: "https://azuredevops.grras.com/kunal.png",
  },

  {
    id: 10,
    name: "Vaibhav Joshi",
    role: "RHCSA RHCE Certified",
    rating: "4.00",
    exp: "6",
    image: "/va.png",
  },
  {
    id: 14,
    name: "Sachin Yadav",
    role: "Data Scientist ",
    rating: "4.90",
    exp: "10",
    image: "/sac.png",
  },
   
     
  {
    id: 2,
    name: "Tanveer Singh",
    role: "Soft-Skills and Communications Skills Trainer",
    rating: "4.80",
    exp: "12",
    image: "https://www.giptechnologies.com/_next/image?url=%2Ftans.png&w=1920&q=75",
  },
  {
    id: 4,
    name: "Jyoti Choudhary",
    role: "Docker Kubernates Certified Trainer",
    rating: "4.50",
    exp: "7",
    image: "/jyti.png",
  },
  {
    id: 5,
    name: "Daksha Arya",
    role: "Placement Coordinator",
    rating: "4.50",
    exp: "8",
    image: "/dakhsa.png",
  },

  
   {
    id: 6,
    name: "Pahuldeep Singh",
    role: "RHCA, AWS, Openshift, DevsecOps Certified",
    rating: "4.95",
    exp: "7",
    image: "https://www.giptechnologies.com/_next/image?url=%2Fpahuldeep.jpeg&w=1920&q=75",
  },
  {
    id: 7,
    name: "Gaurav Saluja",
    role: "RHCA Level 5",
    rating: "4.90",
    exp: "17",
    image: "https://www.giptechnologies.com/_next/image?url=%2Fgaurvsir.jpeg&w=1920&q=75",
  },
];

export default function MentorsSection() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden text-gray-900">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-4">
        
        {/* Header Section (Based on your reference image) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 bg-black border border-gray-300/30 rounded-full px-4 py-1.5 w-fit mb-6 text-xs font-medium text-gray-50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)]">
              <TrendingUp size={16} /> Know Your Mentors
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Learn from Industry <br className="hidden md:block" /> <span className="text-orange-500">Expert Mentors</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-6 max-w-sm">
            <p className="text-gray-500 text-sm leading-relaxed lg:text-right">
              Our experts have helped thousands of students enhance their technical skills and achieve their career goals.
            </p>
            <div className="flex items-center gap-4">
              <button className="px-6 py-2.5 border border-white/300 bg-orange-500 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] text-white rounded-full text-sm font-mediumtransition-colors">
                View All Mentors →
              </button>
              <div className="flex gap-2">
                <button 
                  onClick={scrollLeft}
                  className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={scrollRight}
                  className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {mentors.map((mentor) => (
            <div 
              key={mentor.id} 
              className="relative flex-shrink-0 w-[300px] md:w-[350px] aspect-[4/5] rounded-3xl overflow-hidden snap-start group cursor-pointer"
            >
              {/* Mentor Image */}
              <Image 
                src={mentor.image} 
                alt={mentor.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 300px, 350px"
              />
              
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Mentor Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end h-full">
                <p className="text-sm font-medium text-white/80 mb-3 line-clamp-2 leading-relaxed">
                  "{mentor.role}"
                </p>
                
                <div className="flex items-center justify-between border-t border-white/20 pt-4 mt-auto">
                  <div>
                    <h4 className="font-semibold text-lg">{mentor.name}</h4>
                    <div className="flex items-center gap-1 mt-1 text-yellow-400">
                      <Star size={14} fill="currentColor" />
                      <span className="text-sm text-white/90 font-medium">{mentor.rating}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <h6 className="font-bold text-lg leading-none">{mentor.exp}</h6>
                    <span className="text-[10px] text-white/70 uppercase tracking-wider font-semibold block mt-1">
                      Yrs Exp
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
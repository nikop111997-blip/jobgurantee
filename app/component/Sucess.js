'use client';

import React from 'react';
import Image from 'next/image';
import { IndianRupee } from 'lucide-react';

const successStoriesData = [
  {
    id: 1,
    name: "Maviya Khan",
    role: "OpenShift Admin",
    package: "15 LPA",
    comment: "I had an incredible learning experience at Grras Solutions. I highly recommend this institute to anyone looking to excel in DevOps and cloud computing!",
    studentImg: "https://job-oriented-course.grras.com/assets/images/stories/1742990112.jpg",
    companyLogo: "https://job-oriented-course.grras.com/assets/images/stories/1734605817.jpg",
  },
  {
    id: 2,
    name: "Umesh Kumar",
    role: "Infrastructure Analyst",
    package: "6 LPA",
    comment: "Joining Grras Solutions was the best decision for my career. The hands-on training and live projects boosted my skills and confidence to secure a great job!",
    studentImg: "https://job-oriented-course.grras.com/assets/images/stories/1739410045.jpg",
    companyLogo: "https://job-oriented-course.grras.com/assets/images/stories/1734599916_Aerial Telecom Solutions 71x26.jpg",
  },
  {
    id: 3,
    name: "Saransh Kamboz",
    role: "DevOps Engineer",
    package: "5 LPA",
    comment: "GRRAS faculties help me with real-world expertise and practical training. The comprehensive DevOps curriculum and personalized support truly transformed my career journey!",
    studentImg: "https://job-oriented-course.grras.com/assets/images/stories/1739410018.jpg",
    companyLogo: "https://job-oriented-course.grras.com/assets/images/stories/1734606094_Celebel Technologies 71x26.jpg",
  },
  {
    id: 4,
    name: "Tarun Saini",
    role: "Senior DevOps Engineer",
    package: "15 LPA",
    comment: "GRRAS helped me learn DevOps practical skills and gain real experience. The projects and guidance gave me the confidence to grow in my career!",
    studentImg: "https://job-oriented-course.grras.com/assets/images/stories/1739409962.jpg",
    companyLogo: "https://job-oriented-course.grras.com/assets/images/stories/1734606517_Compliance innovation 71x26.jpg",
  },
  {
    id: 5,
    name: "Arpit Jain",
    role: "Customer Reliability Engineer",
    package: "28 LPA",
    comment: "Constant guidance from Grras team gave me the confidence and skills I needed to successfully transform my career and step into a whole new field.",
    studentImg: "https://job-oriented-course.grras.com/assets/images/stories/1739409994.jpg",
    companyLogo: "https://job-oriented-course.grras.com/assets/images/stories/1739409938.jpg",
  },
  {
    id: 6,
    name: "Kartik Agarwal",
    role: "Cloud Engineer",
    package: "25 LPA",
    comment: "The DevOps and Cloud course helped me gain practical skills and boosted my confidence with overall technical classes for cloud-based roles.",
    studentImg: "https://job-oriented-course.grras.com/assets/images/stories/1739409608.jpg",
    companyLogo: "https://job-oriented-course.grras.com/assets/images/stories/1734608165_cloudera 71x26.jpg",
  },
  {
    id: 7,
    name: "Harsh Bhaduriya",
    role: "Associate Technical Support",
    package: "8.5 LPA",
    comment: "Mentors at Grras are phenomenal! They helped me secure a job at Red Hat. I definitely recommend joining Grras to experience the great learning environment.",
    studentImg: "https://job-oriented-course.grras.com/assets/images/stories/1742460208_06.jpg",
    companyLogo: "https://job-oriented-course.grras.com/assets/images/stories/1742460208_RedHat 71x26.png",
  },
  {
    id: 8,
    name: "Shivam Sharma",
    role: "Cloud Support Engineer",
    package: "10 LPA",
    comment: "After joining GRRAS, they placed me in a company where I worked for 6 months. Then, they helped me switch and get placed in my dream company, Digital Ocean.",
    studentImg: "https://job-oriented-course.grras.com/assets/images/stories/1742460653_04.jpg",
    companyLogo: "https://job-oriented-course.grras.com/assets/images/stories/1742460653_digital ocean.png",
  }
];

const SuccessCard = ({ story }) => {
  return (
    <div className="bg-white rounded-[2rem] p-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex flex-col border border-gray-100 w-full h-full">
      
      {/* Header section (Name & Role) */}
      <div className="text-center mb-4 px-2">
        <h3 className="text-2xl font-medium text-gray-900 truncate tracking-tight">
          {story.name}
        </h3>
        <div className="flex items-center justify-center gap-1.5 mt-1 text-sm text-gray-500">
          {/* Briefcase Icon replacing the loading spinner */}
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span className="truncate">{story.role}</span>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="relative w-full aspect-square md:aspect-[4/4] rounded-2xl overflow-hidden bg-gray-100 mb-4">
        {/* Using standard img tag here to avoid Next.js external domain config issues for this demo. Switch to Next/Image in production if domains are configured. */}
        <img 
          src={encodeURI(story.studentImg)}
          alt={story.name}
          className="object-cover w-full h-full object-top"
        />
      </div>

      {/* Testimonial Comment */}
      <div className="px-2 mb-6 flex-grow">
        <p className="text-sm text-gray-600 italic line-clamp-3 leading-relaxed">
          "{story.comment}"
        </p>
      </div>

      {/* Footer section (Company Logo & Package) */}
      <div className="flex items-center justify-between mt-auto px-1 pt-2 border-t border-gray-50">
        <div className="flex items-center gap-3">
          {/* Company Logo styled like the Avatar */}
          <div className="relative h-8 w-auto min-w-[70px] max-w-[100px] flex items-center justify-center bg-white rounded-md overflow-hidden">
             <img 
                src={encodeURI(story.companyLogo)} 
                alt="Company Logo"
                className="object-contain max-h-full max-w-full"
             />
          </div>
        </div>

        {/* Action Button styled element displaying the Package */}
        <div className="bg-[#1c1c1c] font-semibold flex items-center gap-1 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] text-white text-sm font-medium py-2 px-4 rounded-full border border-white/30">
          <IndianRupee size={14} />{story.package}
        </div>
      </div>

    </div>
  );
};

export default function SuccessStoriesGallery() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Discover how our students transformed their careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStoriesData.map((story) => (
            <SuccessCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}
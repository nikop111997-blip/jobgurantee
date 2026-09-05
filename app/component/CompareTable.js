'use client'
import React, { useState } from 'react';
import { Check, Sparkles, Target, Star, VerifiedIcon, Verified, ComputerIcon } from 'lucide-react';

const ComparisonCards = () => {
  // Mapping the original table data to card-specific feature lists
  const standardFeatures = [
    "280 Hours Core Curriculum",
    "8 Months Training Journey",
    "Included / Limited Mock Interviews",
    "Communication Grooming Included",
    "Portfolio + Capstones Projects",
    "Standard Interview Preparation",
    "Placement Support Included",
    "Course Completion Certificate"
  ];

  const guaranteeFeatures = [
    "Full Comprehensive Curriculum",
    "12 Months Extended Training Journey",
    "Mock Interviews Every 45 Days",
    "Dedicated Communication Training",
    "Mentor-Reviewed Production Projects",
    "Dedicated 1-Month Interview Bootcamp",
    "4 Months Real Internship Experience",
    "Dedicated HR Team for Placement",
    "₹3 LPA Minimum CTC Guarantee*"
  ];

  const [isEmi, setIsEmi] = useState(false);

  return (
    <div className="min-h-screen bg-white py-8 px-4 md:px-8 font-sans flex flex-col items-center selection:bg-gray-200">
      
   

      {/* Header Section */}
      <div className="text-center max-w-6xl mb-10">
        <h1 className="text-3xl md:text-[48px] leading-[1.1] font-semibold text-black mb-6 tracking-tight">
         Standard Vs Job Gurantee MLOps Programe
        </h1>
        <p className="text-md sm:text-[18px] text-gray-500 font-medium">
          Whether you're looking for a solid foundation or a guaranteed career outcome, we have a plan that fits.
        </p>
      </div>

      {/* Main Pricing Container */}
      <div className="w-full max-w-[1400px] bg-[#f7f7f7] rounded-[40px] p-3 md:p-5 flex flex-col md:flex-row gap-4 border border-gray-100">
        
        {/* Left Card: Standard MLOps */}
        <div className="flex-1 rounded-[32px] p-8 md:p-10 flex flex-col">
          {/* Simple Icon */}
          <div className="w-14 h-14 bg-gray-800 rounded-[14px] text-white flex items-center justify-center mb-6 shadow-md">
                <ComputerIcon />
          </div>
          
          <h3 className="text-[22px] font-semibold text-black mb-2">Standard MLOps</h3>
          <p className="text-[14px] text-gray-500 mb-6 h-10">
            For learners wanting a self-paced, solid foundation in AI and MLOps.
          </p>
          
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-5xl font-semibold text-black tracking-tight">₹75,000</span>
            <span className="text-sm font-medium text-gray-400"> + GST</span>
          </div>
          
          <div className="h-[1px] w-full bg-gray-200 mb-8"></div>
          
          <p className="text-[13px] font-semibold text-gray-900 mb-4">What's included:</p>
          <ul className="space-y-4 mb-10 flex-1">
            {standardFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check size={16} className="text-gray-400 shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-[14px] text-gray-600 leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
          
          <a href='https://mlops.grras.com/' target='_blank' className="w-full flex justify-center bg-[#111111] hover:bg-black text-white rounded-full py-4 text-[15px] font-semibold transition-all duration-200 
            shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] border border-white/30 transform hover:-translate-y-0.5">
            Get Standard Plan
          </a>
        </div>

        {/* Right Card: Career Guarantee */}
        <div className="flex-1 bg-gradient-to-tr from-black to-orange-500 rounded-[32px] p-8 md:p-10 
            shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] border border-gray-300/35 flex flex-col relative">
          
          {/* Most Popular Badge */}
          <div className="absolute top-8 right-8 bg-black 
            shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] border border-gray-300/35 rounded-full px-3 py-1.5 flex items-center gap-1.5">
            <Star size={12} className="text-gray-50 fill-gray-50" />
            <span className="text-[11px] font-bold text-gray-50">Most Popular</span>
          </div>

          {/* Glowing Icon */}
          <div className="w-14 h-14 relative mb-6">
            <div className="relative w-full h-full bg-gray-950 backdrop-blur-sm border border-white/30 
            shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] rounded-[14px] flex items-center justify-center">
               
                <Verified size={20} className="text-white relative z-10" />
            </div>
          </div>
          
          <h3 className="text-[22px] font-semibold text-white mb-2">Career Guarantee</h3>
          <p className="text-[14px] text-gray-300 mb-6 h-10">
            For dedicated learners seeking comprehensive support and an assured outcome.
          </p>
          
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-5xl font-semibold text-white tracking-tight">₹1,00,000</span>
            <span className="text-sm font-medium text-gray-400"> + GST</span>
          </div>
          
          <div className="h-[1px] w-full bg-gray-100 mb-8"></div>
          
          <p className="text-[13px] font-semibold text-gray-200 mb-4">Included everything in Standard, plus:</p>
          <ul className="space-y-4 mb-10 flex-1">
            {guaranteeFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check size={16} className="text-gray-200 shrink-0 mt-0.5" strokeWidth={3} />
                <span className={`text-[14px] leading-snug ${feature.includes("Guarantee") ? "text-white font-semibold" : "text-gray-300"}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          
          <button className="open-genai-modal w-full bg-orange-500 border border-white/30 flex items-center justify-center gap-3
            shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)]  text-white rounded-full py-4 text-[15px] font-semibold transition-all duration-200 transform hover:-translate-y-0.5">
           <VerifiedIcon size={18} /> Get Guarantee Plan
          </button>
        </div>

      </div>

      {/* Footer Disclaimer */}
      <div className="mt-8 text-center max-w-2xl px-4">
        <p className="text-[12px] text-gray-400">
          *₹3 LPA Minimum CTC Guarantee is subject to eligibility criteria, strict adherence to the attendance policy, and successful completion of all milestone evaluations and projects.
        </p>
      </div>

    </div>
  );
};

export default ComparisonCards;
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is MLOps?",
    answer: "MLOps combines Machine Learning with DevOps practices to build, deploy, automate, monitor and scale ML systems in production."
  },
  {
    question: "Is this programme suitable for freshers?",
    answer: "Yes. The Career Guarantee track is designed specifically for serious freshers who meet the stated eligibility criteria."
  },
  {
    question: "What is the duration?",
    answer: "The Career Guarantee journey is structured across 12 months."
  },
  {
    question: "Is internship included?",
    answer: "Yes. The programme includes a 4-month internship phase."
  },
  {
    question: "Will GRRAS provide placement support?",
    answer: "Yes. A dedicated HR and placement team actively sources and coordinates relevant opportunities."
  },
  {
    question: "Is the ₹3 LPA guarantee unconditional?",
    answer: "No. The guarantee is subject to the eligibility criteria and terms specified in the official enrolment and guarantee agreement."
  },
  {
    question: "What happens if I don't get a qualifying offer?",
    answer: "For a fully eligible student who meets all guarantee conditions, the official terms provide for refund eligibility if the qualifying outcome is not achieved within the specified period."
  }
];

const FAQCard = ({ question, answer, initialOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      className="bg-white rounded-[24px] p-6 md:p-8 cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300 w-full"
    >
      <div className="flex justify-between items-center gap-4">
        <h3 className="text-[17px] font-semibold text-gray-900 leading-snug">
          {question}
        </h3>
        <div className="w-8 h-8 shrink-0 rounded-full bg-black flex items-center justify-center transition-transform duration-300">
          {isOpen ? (
            <Minus strokeWidth={2.5} className="text-white w-4 h-4" />
          ) : (
            <Plus strokeWidth={2.5} className="text-white w-4 h-4" />
          )}
        </div>
      </div>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-2 border-t border-gray-50">
              <p className="text-gray-500 text-[16px] leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  // Splitting into two arrays to create a masonry-like independent column layout
  const leftColumn = faqs.filter((_, i) => i % 2 === 0);
  const rightColumn = faqs.filter((_, i) => i % 2 !== 0);

  return (
    <section className="min-h-screen bg-[#F8F9FA] py-24 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Top Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 bg-[#FF3B30] rounded-full"></span>
            <span className="text-[13px] font-medium text-gray-800 tracking-wide uppercase">
              FAQs
            </span>
          </div>
          
          {/* Main Title with Pink Underline */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] tracking-tight mb-5">
            Frequently asked{" "}
            <span className="relative inline-block">
              questions
              {/* Hand-drawn SVG underline effect */}
              <svg 
                className="absolute -bottom-3 left-0 w-full h-4 z-0 pointer-events-none" 
                viewBox="0 0 100 20" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M2,15 Q40,5 98,12 M10,18 Q50,8 90,15" 
                  fill="none" 
                  stroke="#FF3B30" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-500 text-[16px] max-w-[600px] mt-2">
            Here are some common questions about our programme to help you understand better.
          </p>
        </div>

        {/* Dual-Column Independent Layout (Masonry style) */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/2">
            {leftColumn.map((faq, index) => (
              <FAQCard 
                key={`left-${index}`} 
                question={faq.question} 
                answer={faq.answer} 
                initialOpen={index === 0} // Opens the first item by default like the image
              />
            ))}
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/2">
            {rightColumn.map((faq, index) => (
              <FAQCard 
                key={`right-${index}`} 
                question={faq.question} 
                answer={faq.answer} 
                initialOpen={index === 0} // Opens the first item by default like the image
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
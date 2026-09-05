"use client";

import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function EligibilitySection() {
  const degrees = [
    "BCA graduates/students",
    "MCA graduates/students",
    "B.Tech graduates/students",
    "M.Tech graduates/students",
  ];

  const coreTraits = [
    "Interested in AI, DevOps, Cloud or MLOps",
    "Ready to commit to a structured 12-month journey",
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-8 font-sans overflow-hidden">
      
      {/* Header Section (Centered just like the reference image) */}
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-12">
        <span className="text-orange-500 font-bold text-sm tracking-wider uppercase mb-3 block">
          Eligibility
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#111] tracking-tight mb-6">
          Who Is This Programme For?
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          This programme is tailored for dedicated individuals looking to build a serious career. 
          It is <span className="font-semibold text-gray-800">ideal for serious freshers</span> who are:
        </p>
      </div>

      {/* Main Content Layout (Image Left, Data Right) */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-end gap-12 md:gap-20">
        
        {/* Left Column: Portrait Image with Bottom Fade */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-5/12 relative flex justify-center"
        >
          {/* Using a high-quality cutout placeholder for the professional portrait */}
          <img 
            src="/gur.png" 
            alt="Professional Student" 
            className="w-[100%] object-contain relative z-10"
          />
          {/* Soft gradient fade at the bottom to blend with the white background, exactly like the reference */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
          
          {/* Subtle background glow for depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-100 rounded-full blur-[80px] z-0"></div>
        </motion.div>

        {/* Right Column: Eligibility Data */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-7/12 pb-8 md:pb-12"
        >
          
          {/* Degree Grid (2 columns for compact, neat layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
            {degrees.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl p-4 transition-colors hover:bg-orange-50 hover:border-orange-100"
              >
                <CheckCircle2 size={20} className="text-[#00B67A] shrink-0" strokeWidth={2.5} />
                <span className="text-[#111] font-semibold text-[15px]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-gray-100 mb-8"></div>

          {/* Core Traits List (Full width for longer text) */}
          <div className="flex flex-col gap-5 mb-10">
            {coreTraits.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-0.5 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={14} className="text-orange-600" strokeWidth={3} />
                </div>
                <span className="text-gray-600 text-[16px] leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Concluding Highlight Banner */}
          <div className="bg-[#111] rounded-2xl p-6 shadow-xl flex items-start gap-4 border border-gray-800">
            <AlertCircle className="text-orange-500 shrink-0 mt-1" size={24} />
            <div>
              <h4 className="text-white font-bold text-lg mb-1">
                This isn't a shortcut.
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                It's a comprehensive career transformation programme designed to take you from a learner to a production-ready professional.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
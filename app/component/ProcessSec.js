"use client";

import React from "react";
import { motion } from "framer-motion";
import { FolderGit2, Users, Rocket } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      title: "13 Portfolio Projects",
      subtitle: "Build to survive technical interviews",
      desc: "Forget checklist projects. Demonstrate problem-solving, AI/ML workflows, cloud infrastructure, and deployment. Projects are mentor-reviewed across code, architecture, and production discipline.",
      icon: FolderGit2,
    },
    {
      title: "Continuous Mocks",
      subtitle: "Don't wait for placement season",
      desc: "Go through 4–5 structured mock interview cycles—one every 45 days. Receive detailed feedback on technical knowledge, troubleshooting, scenario-based questions, and communication.",
      icon: Users,
    },
    {
      title: "Month 8 Bootcamp",
      subtitle: "One month to become interview-ready",
      desc: "A dedicated 4-week sprint: Week 1 (Resumes & GitHub), Week 2 (System Design & Tech), Week 3 (HR & Behavioural), and Week 4 (Offer Readiness & Salary Negotiation).",
      icon: Rocket,
    }
  ];

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="text-center mb-8 relative z-10">
          <span className="text-orange-500 font-bold text-sm tracking-wider uppercase mb-3 block">
            Projects & Interview Prep
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
            Build It. Explain It. <span className="text-orange-500">Deploy It.</span>
          </h2>
          <p className="text-gray-500 text-md max-w-2xl mx-auto mb-10">
            Don't just say "I have done a project." Confidently explain what you built, why you built it, how you deployed it, and how you would run it in production.
          </p>
        </div>
          
        {/* Top Background Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-[350px] md:h-[500px] lg:h-[650px] relative overflow-hidden rounded-[32px] shadow-lg"
        >
          {/* High-quality tech/coding image placeholder */}
          <img 
            src="/mlops.png" 
            alt="Students working on projects" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Bottom Overlapping White Card (Adapted from your dark glass version) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative z-10 mx-4 sm:mx-8 md:mx-12 lg:mx-8 -mt-24 md:-mt-48 bg-white/25 backdrop-blur-xs rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-12 border border-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8  divide-gray-200">
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col items-center text-center ${index !== 0 ? 'pt-10 lg:pt-0 lg:pl-8' : 'lg:pr-4'}`}
                >
                  {/* Icon Container */}
                  <div className="bg-orange-500 flex items-center justify-center text-orange-50 w-12 h-12 rounded-full mb-6 shadow-sm border border-orange-100">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  
                  {/* Title & Subtitle */}
                  <h3 className="text-[22px] font-bold text-gray-900 mb-1 leading-tight">
                    {step.title}
                  </h3>
                  <span className="text-sm font-semibold text-orange-500 mb-4 block uppercase tracking-wide">
                    {step.subtitle}
                  </span>
                  
                  {/* Description */}
                  <p className="text-[13px] text-gray-600 leading-relaxed ">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </motion.div>

      </div>
    </section>
  );
}
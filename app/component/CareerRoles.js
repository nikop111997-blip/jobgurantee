"use client";

import React from "react";
import { Network, Terminal, Cloud, Bot, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function CareerRoles() {
  const roles = [
    {
      title: "MLOps Engineer",
      desc: "Build and operate ML systems in production.",
      icon: Network,
    },
    {
      title: "DevOps Engineer",
      desc: "Automate infrastructure, deployment and CI/CD.",
      icon: Terminal,
    },
    {
      title: "Cloud Engineer",
      desc: "Build and manage scalable cloud environments.",
      icon: Cloud,
    },
    {
      title: "AI Engineer",
      desc: "Develop and deploy AI-powered applications.",
      icon: Bot,
    },
    {
      title: "ML Engineer",
      desc: "Build and operationalise machine learning workflows.",
      icon: Cpu,
    },
  ];

  return (
    <section className="min-h-screen py-12 px-4 md:px-8 font-sans flex items-center justify-center">
      
      {/* Main Large Container (Matches the highly rounded image background) */}
      <div className="relative w-full max-w-[1400px] min-h-[750px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] rounded-[40px] overflow-hidden flex items-center justify-end p-4 md:p-12 lg:p-16 border border-orange-300/30">
        
        {/* Background Image (Professional tech theme matching the vibe) */}
        <img
          src="https://images.pexels.com/photos/4964915/pexels-photo-4964915.jpeg"
          alt="Professional working"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        
        {/* Subtle overlay to ensure the card pops and text is readable on mobile */}
        <div className="absolute inset-0 bg-black/20 md:bg-black/10"></div>

        {/* Floating Dark Glass Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-[460px] bg-[#161616]/75 backdrop-blur-xl p-8 md:p-10 rounded-[32px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
          {/* Card Headings */}
          <h2 className="text-[32px] md:text-[36px] leading-[1.1] font-medium text-white mb-4 tracking-tight">
            Where Can MLOps <br /> Take You?
          </h2>
          <p className="text-[#e4d8d8] text-[15px] leading-relaxed mb-8">
            Build skills relevant to top-tier industry roles. Here are the positions you will be prepared for:
          </p>

          {/* List Items / Roles */}
          <div className="flex flex-col gap-6 mb-10">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  {/* Left Icon */}
                  <div className="mt-0.5 shrink-0">
                    <Icon size={20} className="text-white" strokeWidth={2} />
                  </div>
                  
                  {/* Text Content */}
                  <div>
                    <h3 className="text-white text-[15px] font-medium mb-1 tracking-wide">
                      {role.title}
                    </h3>
                    <p className="text-[#d7d2d2] text-[13px] leading-snug">
                      {role.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Olive Green Call to Action Button */}
          <button className="open-genai-modal w-full bg-orange-500 border border-orange-300/30 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] text-white rounded-full py-4 text-[15px] font-medium transition-colors duration-300">
            Start Your Journey
          </button>
        </motion.div>

      </div>
    </section>
  );
}
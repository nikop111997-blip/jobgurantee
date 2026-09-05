"use client";

import React from "react";
import { motion } from "framer-motion";
import { Headphones, HelpCircleIcon, Star } from "lucide-react";

export default function SocialProofSection() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
  ];

  return (
    <section className="bg-white pb-10 px-4 sm:px-6 md:px-12 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Row: Rating Card & Text */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-4">
          
          {/* Left: Rating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-gray-200 rounded-lg p-6 sm:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.04)] w-full md:w-auto min-w-[320px]"
          >
            <p className="text-gray-600 text-sm mb-3">
              We are rated 4.8 out of 5
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-2xl sm:text-3xl font-bold text-slate-900">
                Excellent
              </span>
              
              {/* Square Stars */}
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-orange-500 border border-orange-500/35 w-8 h-8 flex items-center justify-center rounded-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)]">
                    <Star size={18} fill="white" className="text-white" />
                  </div>
                ))}
                {/* 5th Star (Empty/Grey) */}
                <div className="bg-orange-400/70 border border-orange-400/25 w-8 h-8 flex items-center justify-center rounded-sm shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)]">
                  <Star size={18} fill="white" className="text-white" />
                </div>
              </div>

              {/* Trustpilot Text */}
              <div className="flex items-center gap-1 ml-auto md:ml-2">
                <Star size={16} className="text-gray-400" fill="currentColor" />
                <span className="text-slate-800 font-semibold text-lg">Google</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Text & Avatars */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 flex flex-col items-start md:items-start text-left"
          >
            <p className="text-slate-700 text-md sm:text-md leading-relaxed mb-6">
                Join over 25,000 students who have trusted GRRAS to build successful technology careers. Our industry-focused training, practical learning, and career support help students grow in AI, DevOps, Cloud, and MLOps.
            </p>
            
            <div className="flex items-center -space-x-3">
              {avatars.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Successful client ${index + 1}`}
                  className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm grayscale hover:grayscale-0 transition-all duration-300 relative z-10"
                  style={{ zIndex: 10 - index }}
                />
              ))}
              {/* +1K Badge */}
              <div 
                className="w-12 h-12 rounded-full border-[1px] border-orange-500/35 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] bg-orange-500 text-white flex items-center justify-center text-sm font-bold relative z-0"
                style={{ zIndex: 0 }}
              >
                +1K
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Row: Divider & Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative py-8"
        >
          {/* Horizontal Line */}
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          
          {/* Centered Button */}
          <div className="relative flex justify-center">
            <button className="open-genai-modal bg-orange-500 border cursor-pointer flex items-center gap-3 border-orange-500/25 text-white text-base font-medium px-8 py-3.5 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1">
              <Headphones size={16}/> Get Free Consultation
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
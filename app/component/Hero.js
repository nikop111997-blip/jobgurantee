"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Plus, Mic, Settings2, Download } from "lucide-react";
import ChatPromptBox from "./ChatPromptBox";

export default function HeroSection() {
  const containerRef = useRef(null);

  // Track scrolling relative to the entire wrapper for the video tilt
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "center start"],
  });

  // 3D Tilt Effect mapping for the video
  const rotateX = useTransform(scrollYProgress, [0, 1], [35, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  // Streaming text logic
  const fullText = "280-Hour AI + DevOps + MLOps Training • 4-Month Internship • Interview Bootcamp • Active Placement Support • ₹3 LPA Minimum CTC Guarantee*";
  const highlightStartIndex = fullText.indexOf("₹3 LPA"); 
  
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 25); 

      return () => clearInterval(interval);
    }, 600); 

    return () => clearTimeout(startDelay);
  }, [fullText]);

  const normalText = displayedText.slice(0, highlightStartIndex);
  const highlightedText = displayedText.length > highlightStartIndex ? displayedText.slice(highlightStartIndex) : "";

  return (
    <div ref={containerRef} className="relative w-full bg-white font-sans overflow-hidden">
      
      {/* --- BACKGROUND IMAGE --- */}
      <div
        className="absolute top-0 left-0 right-0 h-[120vh] max-h-[800px] z-0 pointer-events-none"
        style={{
          backgroundImage: `url('/bg.avif')`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none h-[100vh]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle at 50% 30%, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 30%, black, transparent 70%)",
        }}
      />

      {/* --- TOP CONTENT SECTION --- */}
      {/* Adjusted pt-32 sm:pt-48 down to pt-24 sm:pt-28 to pull content up */}
      <section className="relative z-10 flex flex-col items-center text-center max-w-7xl mx-auto w-full py-28 sm:pt-48 px-4">
        
        {/* Top Pill */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center p-1 pr-3 mb-5 sm:mb-6 rounded-full bg-[#111] border border-white/20 shadow-lg text-xs font-medium"
        >
          <span className="bg-orange-500 text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] px-2 py-1 rounded-full mr-3 font-semibold text-[10px] tracking-wide uppercase">
           100% Job Guarantee
          </span>
          <span className="text-white/90 tracking-wide">
            MLOps Course
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-[#ff6b00] leading-[1.15] mb-4 max-w-3xl"
        >
           100% Job Guarantee <br/><span className="text-[#fff]"> in  DevOps, AI & MLOps.</span>
        </motion.h1>
        <p className="text-white text-xl font-semibold mb-6">
GRRAS — 15+ Years as a Trusted Training Partner of Red Hat & Linux Foundation

        </p>
        <p className="text-white/70 mb-8 max-w-3xl text-sm md:text-base">
          Master MLOps, AI & DevOps to build, deploy, automate and scale production-ready AI systems — with a 12-month career journey designed to take you from learning to employment.
        </p>

        {/* AI Prompt Box */}
        <ChatPromptBox/>

        {/* CTA Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 relative w-full justify-center"
        >
          <button className="open-genai-modal w-full md:w-auto px-6 py-3.5 bg-[#ff6b00] hover:bg-[#e66000] text-white text-sm font-semibold rounded-full flex items-center justify-center transition-all shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)]">
            Apply for Career Guarantee
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          
          <button className="open-genai-modal w-full md:w-auto px-6 py-3.5 bg-black border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] hover:bg-black/80 text-white text-sm font-semibold rounded-full flex items-center justify-center transition-all backdrop-blur-sm">
            <Download className="mr-2 w-4 h-4 text-white/70" />
            Download Brochure
          </button>

          {/* Hand-drawn Arrow */}
          <div className="absolute -right-4 top-14 md:-right-0 md:-top-90 flex-col md:flex-row items-start md:items-center gap-2 hidden lg:flex opacity-70">
  <svg 
    width="45" 
    height="35" 
    viewBox="0 0 65 45" 
    fill="none" 
    className="text-white transform -rotate-12 translate-y-2"
  >
    {/* Smooth rounded curved arrow pointing towards the CTA */}
    <path 
      d="M55 15 Q 30 -5 5 25 M 5 25 L 18 22 M 5 25 L 10 12" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
  <div className="text-[11px] md:text-xs text-white uppercase tracking-wider font-mono max-w-[150px] text-left leading-tight transform rotate-2">
    For serious freshers ready to commit.
  </div>
</div>
        </motion.div>
      </section>
    </div>
  );
}
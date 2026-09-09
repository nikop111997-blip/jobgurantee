import { ArrowRight, DownloadIcon } from 'lucide-react';
import React from 'react';

export default function ThankYouPage() {
  // Replace this with the actual path to your PDF file
  // Ensure the PDF is placed inside your Next.js 'public' directory
  const pdfUrl = "/MLOps_Engineering_Program_1.pdf"; 
   const pdfUrl2 = "/MLOps_JobGuarantee_Program_1.pdf"; 

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 font-sans overflow-hidden">
      
      {/* Main Text Container with Relative Positioning for Badges */}
      <div className="relative flex items-center justify-center mt-12 mb-8">
        
        {/* Yellow Starburst Badge - Positioned Top Left */}
        <div className="absolute -left-12 -top-16 md:-left-24 md:-top-20 w-28 h-28 md:w-36 md:h-36 flex items-center justify-center z-10 -rotate-12 hover:scale-105 transition-transform duration-300">
          <svg 
            viewBox="0 0 100 100" 
            className="absolute inset-0 w-full h-full fill-[#ff7c40]"
          >
            {/* 16-point Starburst Polygon */}
            <polygon points="50,0 60,15 78,10 75,28 92,35 80,48 90,65 72,70 70,88 52,82 40,95 30,80 12,85 18,68 2,55 18,45 10,28 28,25 35,8" />
          </svg>
          <div className="relative z-20 text-black font-extrabold text-[10px] md:text-sm text-center leading-tight">
            100%<br/>Job Gurantee
          </div>
        </div>

        {/* Central THANK YOU text */}
        <h1 
          className="text-7xl sm:text-8xl md:text-[10rem] font-black text-white uppercase tracking-tighter leading-none"
          style={{ fontFamily: 'Impact, sans-serif', transform: 'scaleY(1.2)' }}
        >
          Thank You
        </h1>

        {/* Green 2040 Badge - Positioned Top Right */}
        <div className="absolute -right-4 -top-8 md:-right-16 md:-top-4 bg-[#a3e635] text-black font-bold px-4 py-1 rounded-md text-sm md:text-lg tracking-wider">
          MLOPS
        </div>
      </div>

      {/* Subtitle Text */}
     <p className="text-gray-300 max-w-2xl text-center text-xs sm:text-sm mt-12 px-4 leading-relaxed">
  Thank you for filling out the form. Our counsellor will connect with you shortly to discuss the program and guide you through the next steps.
</p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-12">
        <a
          href={pdfUrl2}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 flex items-center   border border-[#fff]/35
            bg-orange-500/[0.95]
            text-sm
            shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] justify-center gap-2 text-white font-bold rounded-full transition-colors duration-200 text-center"
        >
         <ArrowRight/> Know Program Details
        </a>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 text-sm flex items-center border border-[#fff]/35 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)]  justify-center gap-2 bg-black text-white font-bold rounded-full  transition-colors duration-200 text-center"
        >
        <DownloadIcon />  Download Broucher
        </a>
      </div>
      
    </div>
  );
}
"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-[#F8F9FA] p-4 md:p-6 font-sans">
      {/* Main Rounded Dark Container */}
      <footer className="w-full max-w-[1400px] mx-auto bg-[#111111] rounded-[32px] px-8 md:px-12 py-10 shadow-2xl">
        
        {/* TOP SECTION: Logo & Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8">
          {/* Logo & Brand */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1 shrink-0">
              <img 
                src="https://job-oriented-course.grras.com/assets/images/general_setting/1738216909_GLogo.png" 
                alt="GRRAS Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-white text-lg font-bold tracking-wide">GRRAS Solutions</h2>
              <p className="text-[#888888] text-xs mt-0.5">Job Oriented Programs & Placements</p>
            </div>
          </div>
          
          {/* Tagline */}
          <div className="text-[#E0E0E0] text-sm md:text-base font-light tracking-wide">
            Smarter learning, guaranteed careers.
          </div>
        </div>

        <hr className="border-[#2A2A2A]" />

        {/* MIDDLE SECTION: Links & Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          
          {/* Column 1: Programs & Placements */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-[15px] font-semibold mb-2">Programs & Placements</h3>
            
            <a href="/success_stories" className="text-[#A1A1A1] text-sm hover:text-white transition-colors">
              Success Stories
            </a>
            <a href="/testimonials" className="text-[#A1A1A1] text-sm hover:text-white transition-colors">
              Testimonials
            </a>
          </div>

          {/* Column 2: EduVault & Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-[15px] font-semibold mb-2">Resources & Company</h3>
            <a href="/learningVideos" className="text-[#A1A1A1] text-sm hover:text-white transition-colors">
              Learning Videos
            </a>
            <a href="#" className="text-[#A1A1A1] text-sm hover:text-white transition-colors">
              EduVault (Cheat Sheets)
            </a>
            <a href="/faq" className="text-[#A1A1A1] text-sm hover:text-white transition-colors">
              FAQ & Support
            </a>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-[15px] font-semibold mb-2">Contact</h3>
            <p className="text-sm text-orange-500">+91 6350-618066 | 
+91 82900 08535</p>
            <p className="text-[#A1A1A1] text-sm leading-relaxed">
              B-4, near Danik Bhaskar, Vivek Vihar, Bajaj Nagar, Jaipur, Rajasthan 302015
            </p>
            <a href="mailto:enquiry@grras.com" className="text-orange-500 text-sm hover:text-orange-600 transition-colors mt-2">
              enquiry@grras.com
            </a>
          </div>

          {/* Column 4: Trusted Badge (Matching Image Aesthetic) */}
          <div className="flex items-start lg:justify-end lg:border-l lg:border-[#2A2A2A] lg:pl-10">
            <div className="flex items-center gap-3">
              <ShieldCheck strokeWidth={1.5} size={28} className="text-orange-500" />
              <div>
                <h4 className="text-white text-[15px] font-semibold">Trusted</h4>
                <p className="text-[#A1A1A1] text-sm">Educational Partner</p>
              </div>
            </div>
          </div>

        </div>

        <hr className="border-[#2A2A2A]" />

        {/* BOTTOM SECTION: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs text-[#777777]">
          <p>
            All rights reserved 2026 © GRRAS Solutions Pvt. Ltd.
          </p>
          <div className="flex gap-6">
            <a href="https://grras.com/privacy-policy/?_gl=1*1mk695*_gcl_aw*R0NMLjE3ODI3NTM4NjkuQ2owS0NRandyNGpTQmhDU0FSSXNBT1gxRS1JeUJsZFZVUHNYZm45UG5mc24ybTBheTRHT3AtTFNlYUI2SUtkUjBFYjlVZnZUSllNYV80MGFBdFpHRUFMd193Y0I.*_gcl_au*ODY3NzM1MjI5LjE3ODU5MzIxOTAuLS4tLjE3ODU5MzIxOTAuODM2NjI2MjguMTc4NjEyMzUwNC4xNzg2MTY3ODY0*_ga*MTQ3NjM1OTA0NS4xNzg1OTMyMTkw*_ga_RFSFN2LPTL*czE3ODYxNjc1NTUkbzEzJGcxJHQxNzg2MTY3ODgyJGo2MCRsMCRoMA..*_ga_EC1FZPG4T8*czE3ODYxNjc1NTUkbzEzJGcxJHQxNzg2MTY3ODgyJGo2MCRsMCRoMA.." className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://grras.com/terms-conditions/?_gl=1*e5pl6x*_gcl_aw*R0NMLjE3ODI3NTM4NjkuQ2owS0NRandyNGpTQmhDU0FSSXNBT1gxRS1JeUJsZFZVUHNYZm45UG5mc24ybTBheTRHT3AtTFNlYUI2SUtkUjBFYjlVZnZUSllNYV80MGFBdFpHRUFMd193Y0I.*_gcl_au*ODY3NzM1MjI5LjE3ODU5MzIxOTAuLS4tLjE3ODU5MzIxOTAuODM2NjI2MjguMTc4NjEyMzUwNC4xNzg2MTY3ODY0*_ga*MTQ3NjM1OTA0NS4xNzg1OTMyMTkw*_ga_RFSFN2LPTL*czE3ODYxNjc1NTUkbzEzJGcxJHQxNzg2MTY3ODgyJGo2MCRsMCRoMA..*_ga_EC1FZPG4T8*czE3ODYxNjc1NTUkbzEzJGcxJHQxNzg2MTY3ODgyJGo2MCRsMCRoMA.." className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </footer>
    </div>
  );
}
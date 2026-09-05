import React from 'react';
import { 
  PlaySquare, 
  FileText, 
  Clock, 
  Users, 
  ShieldCheck, 
  User, 
  Megaphone,
  Briefcase,
  Code,
  Target
} from 'lucide-react';

export default function CareerJourneySection() {
  const journeyModules = [
    {
      title: "Months 1–7",
      highlight: "Technical Training",
      tags: [
        { icon: <Code className="w-4 h-4" />, text: "DevOps & MLOps" },
        { icon: <PlaySquare className="w-4 h-4" />, text: "AI & Cloud" },
        { icon: <FileText className="w-4 h-4" />, text: "Projects" },
      ],
      description: "DevOps + MLOps + AI + Cloud + hands-on projects"
    },
    {
      title: "Month 8",
      highlight: "Interview Bootcamp",
      tags: [
        { icon: <User className="w-4 h-4" />, text: "Resume & LinkedIn" },
        { icon: <Code className="w-4 h-4" />, text: "System Design" },
        { icon: <Clock className="w-4 h-4" />, text: "Interviews" },
      ],
      description: "Resume + LinkedIn + technical interviews + system design + communication + salary negotiation"
    },
    {
      title: "Months 9–12",
      highlight: "Internship & Placement",
      tags: [
        { icon: <Briefcase className="w-4 h-4" />, text: "Work Experience" },
        { icon: <Users className="w-4 h-4" />, text: "Mentorship" },
        { icon: <Target className="w-4 h-4" />, text: "HR Placement" },
      ],
      description: "Real work experience + mentorship + active HR-led placement"
    },
  ];

  return (
    <div className="min-h-screen py-4 px-4 md:px-8 font-sans flex justify-center items-center">
      
      {/* Outer Main Container */}
      <div className="bg-[#131313] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] w-full max-w-[1400px] rounded-[2rem] border border-white/5 p-8 md:p-14 shadow-2xl">
        
        {/* Header Section */}
         
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="bg-orange-500 rounded-full border border-orange-300/30 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)]  text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider mb-6">
            12-Month Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            A Course Ends. Your Career Journey Shouldn't.
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Most programmes stop after training. This programme continues for 12 months — because becoming job-ready requires more than completing a syllabus.
          </p>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Modules List */}
          <div className="flex-1 flex flex-col gap-3">
            {journeyModules.map((mod, index) => (
              <div 
                key={index} 
                className="bg-[#1c1c1e] border border-white/5 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#222225] transition-colors"
              >
                {/* Title & Highlight */}
                <div className="flex-shrink-0 w-40">
                  <h3 className="text-white font-semibold text-lg">{mod.title}</h3>
                  <p className="text-gray-400 text-xs mt-1">{mod.highlight}</p>
                </div>

                {/* Right Side Info / Tags */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 flex-1 md:justify-end">
                  {mod.tags.map((tag, i) => (
                    <div key={i} className="flex items-center text-gray-400 text-xs gap-1.5 font-medium">
                      {tag.icon}
                      <span>{tag.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Bottom About Section */}
            <div className="mt-6 md:mt-10 border-l-2 border-[#404040] pl-5">
              <h4 className="text-white font-semibold text-base mb-2">
                The Complete Journey
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                We design this path to take you from a learner to an earner. It’s not just about skills; it’s about breaking into the industry effectively.
              </p>
            </div>
          </div>

          {/* Right Column: Featured Card */}
          <div className="w-full lg:w-[380px]">
            <div className="bg-[#1c1c1e] border border-white/5 rounded-2xl p-5 flex flex-col">
              
              {/* Card Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-orange-500 rounded-2xl text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] w-6 h-6 rounded flex items-center justify-center text-black font-bold text-xs">
                  P
                </div>
                <h3 className="text-white font-semibold text-sm">Placement Pathway</h3>
              </div>

              {/* Card Image / Graphic placeholder */}
              <div className="w-full h-44 bg-gradient-to-br from-orange-500 via-[#1c1c1e] to-black rounded-lg mb-5 flex items-center justify-center border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40"></div>
                <h2 className="relative text-white font-bold text-xl tracking-wide z-10 opacity-90 drop-shadow-md text-center">
                  Training → Prep → <br/> Internship → Offer
                </h2>
              </div>

              {/* Card Meta Stats Grid */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
                <div className="flex items-center text-gray-400 text-xs gap-2">
                  <Megaphone className="w-4 h-4 text-gray-500" />
                  <span>Real Work Exp</span>
                </div>
                <div className="flex items-center text-gray-400 text-xs gap-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span>1:1 Mentorship</span>
                </div>
                <div className="flex items-center text-gray-400 text-xs gap-2">
                  <ShieldCheck className="w-4 h-4 text-gray-500" />
                  <span>HR Placements</span>
                </div>
                <div className="flex items-center text-gray-400 text-xs gap-2">
                  <User className="w-4 h-4 text-gray-500" />
                  <span>By Industry Pros</span>
                </div>
              </div>

              {/* Card Action Button */}
              <button className="open-genai-modal w-full bg-orange-500  shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] border border-orange-300/35  text-white font-semibold text-sm py-3 rounded-lg hover:bg-gray-950 transition-colors mb-4">
                Start Your Journey
              </button>

              {/* Card Footer Text */}
              <p className="text-[#888] text-xs leading-relaxed">
                The brochure specifically describes this journey as <strong>Training → Prep → Internship → Offer.</strong> We ensure you are fully equipped and placed into the real world.
              </p>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { 
  Cpu, 
  Route, 
  Layers, 
  Users, 
  MessageSquare, 
  Target, 
  Briefcase, 
  Handshake, 
  LineChart, 
  IndianRupee 
} from 'lucide-react';

export default function WhyGrrasSection() {
  const features = [
    {
      number: "01",
      title: "AI + DevOps + MLOps",
      description: "Learn the intersection of AI and modern DevOps.",
      icon: <Cpu className="w-8 h-8 text-white" />
    },
    {
      number: "02",
      title: "12-Month Career Journey",
      description: "Training doesn't stop when the classes end.",
      icon: <Route className="w-8 h-8 text-white" />
    },
    {
      number: "03",
      title: "Production-Grade Projects",
      description: "Build projects you can confidently discuss in interviews.",
      icon: <Layers className="w-8 h-8 text-white" />
    },
    {
      number: "04",
      title: "Repeated Mock Interviews",
      description: "Practice before facing the real thing.",
      icon: <Users className="w-8 h-8 text-white" />
    },
    {
      number: "05",
      title: "Communication Grooming",
      description: "Learn to communicate your technical skills professionally.",
      icon: <MessageSquare className="w-8 h-8 text-white" />
    },
    {
      number: "06",
      title: "Dedicated Interview Bootcamp",
      description: "One complete month focused on converting skills into interview performance.",
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      number: "07",
      title: "Real Internship",
      description: "Gain practical workplace experience.",
      icon: <Briefcase className="w-8 h-8 text-white" />
    },
    {
      number: "08",
      title: "Active HR Placement",
      description: "A team actively works towards your placement.",
      icon: <Handshake className="w-8 h-8 text-white" />
    },
    {
      number: "09",
      title: "Career Accountability",
      description: "Your progress is tracked throughout the journey.",
      icon: <LineChart className="w-8 h-8 text-white" />
    },
    {
      number: "10",
      title: "₹3 LPA Minimum Guarantee",
      description: "Subject to official eligibility terms.",
      icon: <IndianRupee className="w-8 h-8 text-white" />
    }
  ];

  // Helper function to calculate perfect dashed borders for 1, 2, and 5 column layouts
  const getBorderClasses = (index) => {
    let cls = "border-dashed border-gray-300 ";
    
    // Bottom Borders
    if (index < 5) cls += "border-b "; 
    else if (index < 8) cls += "border-b md:border-b lg:border-b-0 "; 
    else if (index < 9) cls += "border-b md:border-b-0 lg:border-b-0 ";
    else cls += "border-b-0 "; 

    // Right Borders
    cls += "border-r-0 ";
    if (index % 2 === 0) cls += "md:border-r ";
    else cls += "md:border-r-0 ";
    
    if (index % 5 !== 4) cls += "lg:border-r ";
    else cls += "lg:border-r-0 ";

    return cls;
  };

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-16 font-sans">
      
      {/* Header Section */}
      <div className="text-center mb-16 relative">
        <span className="text-orange-500 font-bold text-sm tracking-wider uppercase mb-3 block">
          WHY GRRAS?
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-tight max-w-4xl mx-auto leading-tight">
          Why Choose the MLOps <br className="hidden md:block" />
          Career Guarantee <span className="text-orange-500">Programme?</span>
        </h2>
      </div>

      {/* Grid Section - 1 col (mobile), 2 col (tablet), 5 col (desktop) */}
      <div className="bg-[#f7f6f2] rounded-[32px] overflow-hidden mb-16 shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col items-center justify-start p-8 text-center bg-transparent transition-colors hover:bg-white/40 ${getBorderClasses(index)}`}
            >
              {/* Background Watermark Number */}
              <div className="absolute top-4 right-5 text-[56px] leading-none font-black text-gray-200/50 pointer-events-none">
                {feature.number}
              </div>

              {/* Icon */}
              <div className="relative z-10 mb-5 bg-orange-500 p-3.5 rounded-full border border-orange-300/35 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(249,115,22,0.4)]">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-[17px] font-bold text-gray-900 mb-3 leading-tight">
                {feature.title}
              </h3>
              <p className="relative z-10 text-gray-600 text-[13px] leading-relaxed">
                {feature.description}
              </p>
              
              {/* Note asterisk styling for the last item */}
              {index === 9 && (
                <p className="relative z-10 text-[10px] text-gray-400 mt-2 italic">
                  *Terms & Conditions Apply
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
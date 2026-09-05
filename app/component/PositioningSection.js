import React from 'react';
import { 
  ArrowRight, 
  Cpu, 
  Terminal, 
  Activity, 
  Globe 
} from 'lucide-react';

export default function PositioningSection() {
  const phases = [
    {
      label: "STEP 1",
      title: "AI / Machine Learning",
      description: "Build and train models",
      bgColor: "bg-[#f2f7ec]", // Light green pastel
      icon: <Cpu className="w-5 h-5 text-gray-700 mr-2" />
    },
    {
      label: "STEP 2",
      title: "DevOps",
      description: "Automate & deploy",
      bgColor: "bg-[#fdf2e3]", // Light orange pastel
      icon: <Terminal className="w-5 h-5 text-gray-700 mr-2" />
    },
    {
      label: "STEP 3",
      title: "MLOps",
      description: "Monitor and scale ML",
      bgColor: "bg-[#f2f3fc]", // Light purple pastel
      icon: <Activity className="w-5 h-5 text-gray-700 mr-2" />
    },
    {
      label: "STEP 4",
      title: "Production AI",
      description: "Reliable real-world AI",
      bgColor: "bg-[#edf6f9]", // Light blue pastel
      icon: <Globe className="w-5 h-5 text-gray-700 mr-2" />
    }
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-8 font-sans">
      
      {/* Header Section */}
      <div className="text-left sm:text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#0f172a] mb-4 tracking-tight">
          MLOps = AI + DevOps + Prod. Eng
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Learn the complete connection. Find the perfect financing solution tailored to your needs.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {phases.map((phase, index) => (
          <div 
            key={index} 
            className="bg-white p-3 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col"
          >
            {/* Top Colored Block */}
            <div className={`${phase.bgColor} rounded-[1.5rem] p-6 h-64 flex flex-col justify-between relative`}>
              
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-bold tracking-wider uppercase mb-1">
                    CONNECTION
                  </span>
                  <span className="text-sm font-medium text-gray-800">
                    {phase.label}
                  </span>
                </div>
                {/* Arrow simulating the "bookmark" icon spot but meaning "next step" */}
                {index < phases.length - 1 ? (
                  <ArrowRight className="w-5 h-5 text-gray-800" />
                ) : (
                  <div className="w-5 h-5" /> // placeholder for alignment on last card
                )}
              </div>

              <div>
                <h3 className="text-3xl font-medium text-gray-900 leading-tight mb-4 pr-4">
                  {phase.title}
                </h3>
                
                {/* Simulated pagination dots from the image */}
                <div className="flex gap-1.5 mt-2">
                  <div className={`h-1.5 rounded-full ${index === 0 ? 'w-4 bg-gray-800' : 'w-1.5 bg-gray-300'}`}></div>
                  <div className={`h-1.5 rounded-full ${index === 1 ? 'w-4 bg-gray-800' : 'w-1.5 bg-gray-300'}`}></div>
                  <div className={`h-1.5 rounded-full ${index === 2 ? 'w-4 bg-gray-800' : 'w-1.5 bg-gray-300'}`}></div>
                  <div className={`h-1.5 rounded-full ${index === 3 ? 'w-4 bg-gray-800' : 'w-1.5 bg-gray-300'}`}></div>
                </div>
              </div>
            </div>

            {/* Bottom Action Area */}
            <div className="px-4 py-4 mt-1 flex justify-between items-center gap-4">
              <div className="flex items-center text-sm font-medium text-gray-800">
                {phase.icon}
                <span className="truncate max-w-[120px]" title={phase.description}>
                  {phase.description}
                </span>
              </div>
            </div>
            
          </div>
        ))}
      </div>

   

    </section>
  );
}
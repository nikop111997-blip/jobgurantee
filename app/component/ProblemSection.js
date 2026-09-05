import React from 'react';
import { 
  Rocket, 
  Settings, 
  GitBranch, 
  Cloud, 
  Box, 
  Hexagon, 
  Activity, 
  ShieldCheck 
} from 'lucide-react';

export default function ProblemSection() {
  const skills = [
    { 
      icon: <Rocket className="w-8 h-8 text-white" />, 
      title: "Deploy ML models",
      description: "Transition models from local notebooks to scalable, production-ready APIs and endpoints."
    },
    { 
      icon: <Settings className="w-8 h-8 text-white" />, 
      title: "Automate ML workflows",
      description: "Eliminate manual handoffs by orchestrating data extraction, training, and evaluation pipelines."
    },
    { 
      icon: <GitBranch className="w-8 h-8 text-white" />, 
      title: "Build CI/CD pipelines",
      description: "Implement continuous integration and delivery to test, version, and release models safely."
    },
    { 
      icon: <Cloud className="w-8 h-8 text-white" />, 
      title: "Work with cloud infrastructure",
      description: "Leverage AWS, GCP, or Azure to provision scalable compute resources for training and inference."
    },
    { 
      icon: <Box className="w-8 h-8 text-white" />, 
      title: "Containerise applications",
      description: "Package models and dependencies using Docker to ensure consistent environments everywhere."
    },
    { 
      icon: <Hexagon className="w-8 h-8 text-white" />, 
      title: "Manage Kubernetes environments",
      description: "Orchestrate containers with K8s for high availability, auto-scaling, and self-healing deployments."
    },
    { 
      icon: <Activity className="w-8 h-8 text-white" />, 
      title: "Monitor production systems",
      description: "Track model drift, data quality, and system performance metrics in real-time."
    },
    { 
      icon: <ShieldCheck className="w-8 h-8 text-white" />, 
      title: "Maintain reliable workflows",
      description: "Ensure reproducibility, governance, and seamless rollbacks for enterprise-grade AI applications."
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-8 font-sans">
      
      {/* Header Section */}
      <div className="text-left sm:text-center mb-16 relative">
      
        <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight">
          Learning AI Is Not Enough. <br />
          Can You Take It to <span className="text-orange-500">Production?</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Building an ML model is only the beginning. Companies need professionals who can:
        </p>
      </div>

      {/* Grid Section */}
      <div className="bg-[#f7f6f2] rounded-2xl overflow-hidden mb-16 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center justify-start p-8 md:p-10 text-center
                /* Add dashed borders internally */
                ${index < 4 ? 'lg:border-b border-dashed border-gray-300' : ''} 
                ${(index + 1) % 4 !== 0 ? 'lg:border-r border-dashed border-gray-300' : ''}
                /* Mobile & Tablet border adjustments */
                border-b border-dashed border-gray-300 lg:border-b-0
                ${(index + 1) % 2 !== 0 ? 'md:border-r border-dashed border-gray-300' : 'md:border-r-0'}
                ${index === skills.length - 1 ? 'border-b-0' : ''}
              `}
            >
              <div className="mb-5 bg-orange-500 p-3 rounded-full border border-orange-300/35 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)]">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
import React from 'react';
import { 
  Terminal, 
  Cloud, 
  Database, 
  Bot, 
  Box, 
  Search, 
  Calendar, 
  Lock,
  MessageSquare,
  Settings,
  CheckCircle2,
  PlaySquare,
  Activity,
  Layers,
  Cpu
} from 'lucide-react';

export default function CourseFeatures() {
  return (
    <div className="min-h-screen py-20 px-6 font-sans flex flex-col items-center">
      
      {/* Header Section */}
      <div className="flex flex-col items-center max-w-5xl text-center mb-16">
        <div className="bg-orange-100 text-orange-600 text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
          What You'll Learn
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
          Master the Skills Behind Production AI
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed">
          The programme describes the core curriculum as 280 hours across 19 phases covering DevOps, Cloud and Agentic AI, with hands-on labs and production-grade projects.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-[1400px] w-full">
        
        {/* Card 1: DevOps (Form Style) */}
        <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[16px] p-8 flex flex-col md:col-span-2 border border-gray-100/50 relative overflow-hidden">
          {/* Intense Top-Left Orange Glow */}
          <div className="absolute -top-10 -left-10 w-[350px] h-[350px] bg-[#ff8833] opacity-[0.35] blur-[90px] rounded-full pointer-events-none z-0"></div>
          
          <div className="flex-1 min-h-[220px] flex items-center justify-center relative mb-8 z-10">
            {/* Mock UI: Soft Form overlaying the glow */}
            <div className="w-full max-w-[260px] space-y-4">
              <div className="bg-white/70 backdrop-blur-xl p-5 rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white">
                <div className="space-y-4">
                  <div>
                    <div className="text-[12px] font-bold text-gray-800 mb-1.5">Pipeline Name</div>
                    <div className="h-9 bg-white/60 rounded-xl border border-white w-full flex items-center px-3 text-[11px] text-gray-400 shadow-sm">
                      Example: production-deploy
                    </div>
                  </div>
                  <div>
                    <div className="text-[12px] font-bold text-gray-800 mb-1.5">Repository URL</div>
                    <div className="h-9 bg-white/60 rounded-xl border border-white w-full flex items-center px-3 text-[11px] text-gray-400 shadow-sm">
                      https://github.com/...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-auto relative z-20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <Terminal size={12} strokeWidth={3} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">DevOps</h3>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed">
              Linux, Git, Docker, CI/CD, Jenkins, Infrastructure & automation practices.
            </p>
          </div>
        </div>

        {/* Card 2: Cloud (Radar Rings Style) */}
        <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[16px] p-8 flex flex-col md:col-span-2 border border-gray-100/50 relative overflow-hidden">
          {/* Intense Center Orange Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#ff8833] opacity-[0.35] blur-[90px] rounded-full pointer-events-none z-0"></div>
          
          <div className="flex-1 min-h-[220px] flex items-center justify-center relative mb-8 z-10">
            {/* Mock UI: Radar Rings */}
            <div className="relative w-full h-full flex items-center justify-center min-h-[200px]">
               {/* Rings */}
               <div className="absolute w-56 h-56 border border-orange-500/20 rounded-full"></div>
               <div className="absolute w-40 h-40 border border-orange-500/30 rounded-full"></div>
               <div className="absolute w-24 h-24 border border-orange-500/40 rounded-full"></div>
               
               {/* Center Icon */}
               <div className="relative z-20 w-16 h-16 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center text-orange-600 border border-gray-50">
                 <Cloud size={28} strokeWidth={2.5} />
               </div>
               
               {/* Floating Elements */}
               <div className="absolute top-6 left-[10%] w-11 h-11 bg-white/90 backdrop-blur-md rounded-[14px] shadow-[0_8px_20px_rgb(0,0,0,0.06)] flex items-center justify-center text-gray-800 border border-white transform -rotate-12">
                 <Layers size={18} className="text-gray-400" />
               </div>
               <div className="absolute bottom-6 right-[10%] w-11 h-11 bg-white/90 backdrop-blur-md rounded-[14px] shadow-[0_8px_20px_rgb(0,0,0,0.06)] flex items-center justify-center text-gray-800 border border-white transform rotate-12">
                 <Cpu size={18} className="text-gray-400" />
               </div>
            </div>
          </div>
          
          <div className="mt-auto relative z-20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <Layers size={12} strokeWidth={3} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Cloud</h3>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed">
              Cloud infrastructure, Deployment, Scalability, and automation.
            </p>
          </div>
        </div>

        {/* Card 3: MLOps (List Style with Fade) */}
        <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[16px] p-8 flex flex-col md:col-span-2 border border-gray-100/50 relative overflow-hidden">
          {/* Intense Bottom-Right Orange Glow */}
          <div className="absolute top-10 -right-20 w-[400px] h-[350px] bg-[#ff8833] opacity-[0.35] blur-[100px] rounded-full pointer-events-none z-0"></div>
          
          <div className="flex-1 min-h-[220px] flex items-center justify-center relative mb-8 z-10">
            
            {/* Mock UI: Floating List Items */}
            <div className="w-full max-w-[260px] relative">
              {/* Fade out mask for bottom items */}
              <div className="absolute -bottom-4 left-0 w-full h-24 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
              
              <div className="space-y-3 relative z-10">
                <div className="bg-white/80 backdrop-blur-md rounded-[16px] p-3.5 flex justify-between items-center shadow-[0_8px_25px_rgb(0,0,0,0.04)] border border-white">
                   <div className="flex items-center gap-3">
                     <div className="w-7 h-7 rounded-full bg-red-50 text-red-500 flex items-center justify-center"><Database size={14} strokeWidth={2.5}/></div>
                     <span className="text-[13px] font-bold text-gray-800">Data Pipeline</span>
                   </div>
                   <div className="bg-[#e8f7ec] text-[#2ebd59] text-[10px] font-bold px-3 py-1.5 rounded-full">Ready</div>
                </div>

                <div className="bg-white/80 backdrop-blur-md rounded-[16px] p-3.5 flex justify-between items-center shadow-[0_8px_25px_rgb(0,0,0,0.04)] border border-white">
                   <div className="flex items-center gap-3">
                     <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center"><Cpu size={14} strokeWidth={2.5}/></div>
                     <span className="text-[13px] font-bold text-gray-800">Model Training</span>
                   </div>
                   <div className="bg-[#e8f7ec] text-[#2ebd59] text-[10px] font-bold px-3 py-1.5 rounded-full">Ready</div>
                </div>

                <div className="bg-white/80 backdrop-blur-md rounded-[16px] p-3.5 flex justify-between items-center shadow-[0_8px_25px_rgb(0,0,0,0.04)] border border-white">
                   <div className="flex items-center gap-3">
                     <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center"><Box size={14} strokeWidth={2.5}/></div>
                     <span className="text-[13px] font-bold text-gray-800">Deployment</span>
                   </div>
                   <div className="bg-blue-50 text-blue-600 text-[10px] font-bold px-3 py-1.5 rounded-full">In Progress</div>
                </div>
                
                <div className="bg-white/40 backdrop-blur-md rounded-[16px] p-3.5 flex justify-between items-center border border-white">
                   <div className="flex items-center gap-3 opacity-40">
                     <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center"><Activity size={14} strokeWidth={2.5}/></div>
                     <span className="text-[13px] font-bold text-gray-500">Monitoring</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-auto relative z-30">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <CheckCircle2 size={12} strokeWidth={3} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">MLOps</h3>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed">
              ML pipelines, Automation, Model lifecycle, Monitoring.
            </p>
          </div>
        </div>

        {/* Card 4: AI / Agentic AI (Chat Style) */}
        <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[16px] p-8 flex flex-col md:col-span-3 border border-gray-100/50 relative overflow-hidden">
          {/* Intense Center-Left Orange Glow */}
          <div className="absolute top-0 -left-10 w-[450px] h-[350px] bg-[#ff8833] opacity-[0.35] blur-[100px] rounded-full pointer-events-none z-0"></div>
          
          <div className="flex-1 min-h-[200px] flex items-center justify-center relative mb-8 z-10">
            {/* Mock UI: Chat Bubbles */}
            <div className="w-full max-w-[360px] space-y-4 flex flex-col">
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0_8px_20px_rgb(0,0,0,0.06)] text-orange-500 mt-2 border border-gray-50">
                  <Bot size={20} />
                </div>
                <div className="bg-white p-4 rounded-[20px] rounded-tl-sm shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white text-[13px] text-gray-600 leading-relaxed">
                  Hey John, I've analyzed the dataset. The optimal model has been selected and the <span className="text-blue-500 font-medium">agentic workflow</span> is ready to begin testing.
                </div>
              </div>
              <div className="flex gap-3 items-end self-end">
                <div className="bg-[#fb6b1e] text-white py-3 px-5 rounded-[20px] rounded-tr-sm shadow-[0_8px_25px_rgba(251,107,30,0.3)] text-[13px] font-medium">
                  Execute it.
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0 shadow-sm border border-white">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John&backgroundColor=e2e8f0" alt="Avatar" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-auto relative z-20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <MessageSquare size={12} strokeWidth={3} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">AI / Agentic AI</h3>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed max-w-[90%]">
              AI fundamentals, Generative AI concepts, AI-powered workflows, and building autonomous Agentic AI systems.
            </p>
          </div>
        </div>

        {/* Card 5: Kubernetes (Dashboard Widget Style) */}
        <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[16px] p-8 flex flex-col md:col-span-3 border border-gray-100/50 relative overflow-hidden">
          {/* Intense Top-Right Orange Glow */}
          <div className="absolute -top-10 -right-10 w-[450px] h-[350px] bg-[#ff8833] opacity-[0.35] blur-[100px] rounded-full pointer-events-none z-0"></div>
          
          <div className="flex-1 min-h-[200px] flex items-center justify-center relative mb-8 z-10">
            {/* Mock UI: Clean Dashboard Stats */}
            <div className="w-full max-w-[340px] bg-white/70 backdrop-blur-xl rounded-[16px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white">
               <div className="flex justify-between items-center mb-6">
                 <div className="flex items-center gap-2.5">
                   <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-50"><Box size={16} className="text-gray-700"/></div>
                   <span className="text-[14px] font-bold text-gray-800">Cluster Pods</span>
                 </div>
                 <div className="flex gap-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-orange-400"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                 </div>
               </div>
               
               <div className="space-y-5">
                 <div>
                   <div className="flex justify-between text-[12px] text-gray-500 font-bold mb-2">
                     <span>Node Allocation</span>
                     <span className="text-gray-800">85%</span>
                   </div>
                   <div className="w-full h-2.5 bg-white shadow-inner rounded-full overflow-hidden border border-gray-50">
                     <div className="w-[85%] h-full bg-gradient-to-r from-orange-300 to-orange-500 rounded-full"></div>
                   </div>
                 </div>
                 <div>
                   <div className="flex justify-between text-[12px] text-gray-500 font-bold mb-2">
                     <span>Replica Scaling</span>
                     <span className="text-[#2ebd59]">Active</span>
                   </div>
                   <div className="w-full h-2.5 bg-white shadow-inner rounded-full overflow-hidden border border-gray-50">
                     <div className="w-[100%] h-full bg-[#2ebd59] rounded-full"></div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="mt-auto relative z-20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <Settings size={12} strokeWidth={3} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Kubernetes</h3>
            </div>
            <p className="text-gray-500 text-[13px] leading-relaxed max-w-[90%]">
              Containers, Kubernetes fundamentals, Deployment, Scaling, Production environments.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
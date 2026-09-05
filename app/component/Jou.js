"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  DownloadIcon, 
  PhoneCall,
  Rocket,
  Terminal,
  Cloud,
  BrainCircuit,
  Bot,
  Boxes,
  Code,
  Briefcase,
  Building2,
  BadgeCheck
} from "lucide-react";

export default function CareerTimeline() {
  const steps = [
    { title: "Enroll & Onboard", desc: "Kickstart your 12-month career journey with counselling and goal setting.", icon: Rocket },
    { title: "Learn DevOps", desc: "Master Linux, Git, Docker, CI/CD and core DevOps practices.", icon: Terminal },
    { title: "Explore Cloud", desc: "Work with AWS/Azure/GCP, scalability and infrastructure automation.", icon: Cloud },
    { title: "Dive into MLOps", desc: "Learn model deployment, ML pipelines, monitoring and workflows.", icon: BrainCircuit },
    { title: "Work with AI", desc: "Learn AI fundamentals, Generative AI and Agentic AI workflows.", icon: Bot },
    { title: "Master Kubernetes", desc: "Learn container orchestration, deployment and scaling.", icon: Boxes },
    { title: "Build 13+ Projects", desc: "Create portfolio and capstone projects with mentor review.", icon: Code },
    { title: "Interview Prep", desc: "Mock interviews, resume, LinkedIn, and system design.", icon: Briefcase },
    { title: "Internship", desc: "Get 4 months of real industry experience with mentorship.", icon: Building2 },
    { title: "Placement Support", desc: "Active HR-led placement support with ₹3 LPA minimum CTC*.", icon: BadgeCheck }
  ];

  const getDelay = (globalIndex) => 0.1 + globalIndex * 0.2;

  const containerRef = useRef(null);
  // Track when the container enters the viewport to sync the road and the car
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  
  const dotRefs = useRef([]);
  const [pathD, setPathD] = useState("");
  const [box, setBox] = useState({ w: 1000, h: 1050 });
  const [ready, setReady] = useState(false);

  // Build a smooth cubic Bezier curve with pronounced edge loops
  const buildSmoothPath = (points) => {
    if (points.length < 2) return "";
    const p = points;
    let d = `M ${p[0].x} ${p[0].y}`;
    
    for (let i = 0; i < p.length - 1; i++) {
      const p0 = p[i === 0 ? i : i - 1];
      const p1 = p[i];
      const p2 = p[i + 1];
      const p3 = p[i + 2 < p.length ? i + 2 : i + 1];

      let cp1x = p1.x + (p2.x - p0.x) / 6;
      let cp1y = p1.y + (p2.y - p0.y) / 6;
      let cp2x = p2.x - (p3.x - p1.x) / 6;
      let cp2y = p2.y - (p3.y - p1.y) / 6;

      // 1. Right-side wrap (Step 4 -> Step 5)
      if (i === 3) {
        const maxRight = Math.max(p1.x, p2.x);
        cp1x = maxRight + 180; 
        cp2x = maxRight + 180; 
        cp1y = p1.y + (p2.y - p1.y) * 0.25; 
        cp2y = p2.y - (p2.y - p1.y) * 0.25;
      }
      
      // 2. Left-side wrap (Step 7 -> Step 8)
      if (i === 6) {
        const minLeft = Math.min(p1.x, p2.x);
        cp1x = minLeft - 180; 
        cp2x = minLeft - 180; 
        cp1y = p1.y + (p2.y - p1.y) * 0.25;
        cp2y = p2.y - (p2.y - p1.y) * 0.25;
      }

      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    return d;
  };

  const measure = () => {
    const container = containerRef.current;
    if (!container || dotRefs.current.some((el) => !el)) return;

    const containerRect = container.getBoundingClientRect();
    const points = dotRefs.current.map((el) => {
      const r = el.getBoundingClientRect();
      return {
        x: r.left - containerRect.left + r.width / 2,
        y: r.top - containerRect.top + r.height / 2,
      };
    });

    setBox({ w: containerRect.width, h: containerRect.height });
    setPathD(buildSmoothPath(points));
    setReady(true);
  };

  useLayoutEffect(() => {
    measure();
    const t = setTimeout(measure, 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const TimelineNode = ({ step, globalIndex }) => {
    const isEven = globalIndex % 2 === 0;
    const animDelay = getDelay(globalIndex);
    const Icon = step.icon;

    return (
      <div className="relative flex flex-col items-center w-full h-full">
        <motion.div
          ref={(el) => (dotRefs.current[globalIndex] = el)}
          className="absolute w-3.5 h-3.5 bg-[#ff6b00] rounded-full z-20 shadow-[0_0_0_4px_white]"
          style={{ top: isEven ? "200px" : "120px" }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: animDelay, type: "spring" }}
        />

        <motion.div
          className="absolute w-0 border-l-[1.5px] border-dashed border-gray-300"
          style={{ top: "120px", height: "80px" }}
          initial={{ scaleY: 0, transformOrigin: isEven ? "bottom" : "top" }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: animDelay, duration: 0.4 }}
        />

        <motion.div
          className={`absolute ${isEven ? "top-4" : "bottom-4"} left-2 right-2 flex flex-col items-center text-center`}
          initial={{ opacity: 0, y: isEven ? -10 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: animDelay + 0.2 }}
        >
          <h4 className="text-[#ff6b00] font-bold text-[14px] xl:text-[16px] leading-tight mb-2 flex items-center justify-center flex-wrap gap-1.5">
            <span className="text-[#ff6b00]/40 font-mono text-xs xl:text-sm">
              {(globalIndex + 1).toString().padStart(2, "0")}.
            </span>
            <Icon size={16} className="text-[#ff6b00]" strokeWidth={2.5} />
            {step.title}
          </h4>
          <p className="text-gray-500 text-[11px] xl:text-[13px] leading-relaxed max-w-[90%]">
            {step.desc}
          </p>
        </motion.div>
      </div>
    );
  };

  return (
    <section className="bg-white py-12 w-full font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className="text-[#ff6b00] font-bold text-sm tracking-wider uppercase mb-3 block">
            Your Roadmap
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-black tracking-tight">
            The 12-Month Career Journey
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative w-full h-[1050px] hidden lg:block">
          <svg
            className="absolute inset-0 w-full h-full overflow-visible"
            preserveAspectRatio="none"
            viewBox={`0 0 ${box.w} ${box.h}`}
          >
            {ready && (
              <>
                <defs>
                  {/* Headlight gradients for the car */}
                  <linearGradient id="headlight-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
                  </linearGradient>

                  {/* Mask to reveal the road matching the car's timing */}
                  <mask id="road-mask">
                    <motion.path
                      d={pathD}
                      fill="none"
                      stroke="white"
                      strokeWidth="32" 
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: isInView ? 1 : 0 }}
                      transition={{ duration: 4.5, ease: "easeInOut" }}
                    />
                  </mask>
                </defs>

                {/* The Animated Road */}
                <g mask="url(#road-mask)">
                  {/* Layer 1: Road Borders */}
                  <path d={pathD} fill="none" stroke="#e5e7eb" strokeWidth="16" strokeLinecap="round" />
                  {/* Layer 2: Road Surface */}
                  <path d={pathD} fill="none" stroke="#f9fafb" strokeWidth="12" strokeLinecap="round" />
                  {/* Layer 3: Dashed Center Line */}
                  <path d={pathD} fill="none" stroke="#ff6b00" strokeWidth="2" strokeDasharray="8 12" strokeLinecap="round" />
                </g>

                {/* The Animated Car */}
                {isInView && (
                  <g className="z-50">
                    {/* Top-Down Car Graphic */}
                    <g transform="translate(0, 0)">
                      {/* Shadow */}
                      <rect x="-16" y="-10" width="32" height="20" fill="rgba(0,0,0,0.15)" rx="6" />
                      {/* Main Body */}
                      <rect x="-14" y="-8" width="28" height="16" fill="#ff6b00" rx="4" />
                      {/* Roof/Windshields */}
                      <rect x="-4" y="-6" width="10" height="12" fill="#1f2937" rx="2" />
                      <rect x="5" y="-5" width="2" height="10" fill="#9ca3af" rx="1" /> 
                      <rect x="-5" y="-5" width="2" height="10" fill="#9ca3af" rx="1" />
                      {/* Headlights */}
                      <circle cx="12" cy="-5" r="1.5" fill="#fef08a" />
                      <circle cx="12" cy="5" r="1.5" fill="#fef08a" />
                      {/* Light beams */}
                      <path d="M13,-5 L26,-9 L26,-1 Z" fill="url(#headlight-grad)" opacity="0.6" />
                      <path d="M13,5 L26,1 L26,9 Z" fill="url(#headlight-grad)" opacity="0.6" />
                    </g>
                    
                    {/* SVG native motion path mapped identically to Framer Motion's easeInOut */}
                    <animateMotion
                      dur="4.5s"
                      path={pathD}
                      rotate="auto"
                      fill="freeze"
                      calcMode="spline"
                      keyTimes="0;1"
                      keySplines="0.42 0 0.58 1"
                    />
                  </g>
                )}
              </>
            )}
          </svg>

          {/* ROW 1: Steps 1-4 (Left to Right) */}
          <div className="absolute top-0 w-full h-[350px] grid grid-cols-4 z-10">
            {steps.slice(0, 4).map((step, i) => (
              <TimelineNode key={i} step={step} globalIndex={i} />
            ))}
          </div>

          {/* ROW 2: Steps 5-7 (Right to Left) */}
          <div className="absolute top-[350px] w-full h-[350px] grid grid-cols-3 z-10">
            {steps.slice(4, 7).reverse().map((step, i) => {
              const globalIdx = 6 - i; 
              return (
                <TimelineNode key={globalIdx} step={step} globalIndex={globalIdx} />
              );
            })}
          </div>

          {/* ROW 3: Steps 8-10 (Left to Right) */}
          <div className="absolute top-[700px] w-full h-[350px] grid grid-cols-3 z-10">
            {steps.slice(7, 10).map((step, i) => {
              const globalIdx = i + 7;
              return (
                <TimelineNode key={globalIdx} step={step} globalIndex={globalIdx} />
              );
            })}
          </div>
        </div>

        {/* --- MOBILE VIEW (Vertical List) --- */}
        <div className="flex lg:hidden flex-col relative space-y-10 mt-8">
          <div className="absolute left-[17px] top-4 bottom-2 w-3 bg-[#f9fafb] border-x-[1.5px] border-[#e5e7eb] z-0 flex justify-center">
            <div 
              className="w-[2px] h-full" 
              style={{ 
                backgroundImage: 'linear-gradient(to bottom, #ff6b00 40%, transparent 40%)', 
                backgroundSize: '100% 20px' 
              }} 
            />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex items-start gap-5 pl-4"
              >
                <div className="relative mt-1 flex-shrink-0 w-3.5 h-3.5 bg-[#ff6b00] rounded-full shadow-[0_0_0_4px_white] z-10" />
                <div>
                  <h4 className="text-[#ff6b00] font-bold text-lg leading-tight mb-2 flex items-center gap-2">
                    <span className="text-[#ff6b00]/40 font-mono text-sm">
                      {(i + 1).toString().padStart(2, "0")}.
                    </span>
                    <Icon size={20} className="text-[#ff6b00]" strokeWidth={2.5} />
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center mt-12 gap-4">
        <motion.a
          href="tel:+916350618066"
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="relative z-10 hidden items-center w-fit rounded-full border border-[#fff]/35 bg-orange-500/[0.95] px-5 py-2.5 text-sm font-medium text-white/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all hover:bg-orange-600 sm:flex"
        >
          <PhoneCall size={16} className="mr-2" /> Connect to Expert
        </motion.a>
        <motion.button
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="open-genai-modal relative z-10 hidden items-center w-fit rounded-full border border-[#fff]/35 bg-gray-950/[0.95] px-5 py-2.5 text-sm font-medium text-white/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all hover:bg-gray-950 sm:flex"
        >
          <DownloadIcon size={16} className="mr-2" /> Download Broucher
        </motion.button>
      </div>
    </section>
  );
}
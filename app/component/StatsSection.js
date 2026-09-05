"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// Helper component to animate the number counting up
function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Safely extract the number and any prefix (like "₹")
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const prefix = value.replace(/[0-9.].*/, '');

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { 
        duration: 2, // Speed of the counter
        ease: "easeOut" 
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
    </span>
  );
}

export default function StatsSection() {
  const stats = [
    { value: "280", unit: "Hours", desc: "DevOps + MLOps + AI" },
    { value: "13", unit: "Projects", desc: "Portfolio + Capstone Projects" },
    { value: "12", unit: "Months", desc: "Structured Career Journey" },
    { value: "4", unit: "Months", desc: "Real Internship Experience" },
    { value: "₹3", unit: "LPA", desc: "Minimum CTC Guarantee*" },
  ];

  return (
    <section className="bg-white py-12 px-6 md:px-12 w-full overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-4xl font-semibold text-gray-800 text-center mb-20 tracking-tight max-w-3xl"
        >
          Learn MLOps. Gain Real Experience. <br/>Get Career Support.
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-16 gap-y-16 w-full">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              {/* Faded Large Numbers with Counter */}
              <h3 className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-black via-gray-600 to-white pb-1">
                <AnimatedCounter value={stat.value} />
                <span className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight ml-1">
                  {stat.unit}
                </span>
              </h3>
              
              {/* Subtext */}
              <p className="text-gray-900 font-medium text-center text-sm md:text-base leading-relaxed max-w-[200px]">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
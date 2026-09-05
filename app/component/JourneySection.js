"use client";

import { motion } from "framer-motion";
import { BookOpen, Code2, Users, Award, ArrowRight } from "lucide-react";

export default function AboutCourseSection() {
  const features = [
    {
      title: "Comprehensive Curriculum",
      desc: "280 hours of hands-on training mastering AI, DevOps, Cloud, and Kubernetes fundamentals.",
      icon: <BookOpen size={22} className="text-white" />,
    },
    {
      title: "Real-World Projects",
      desc: "Turn learning into proof. Build 13 production-ready Portfolio & Capstone projects.",
      icon: <Code2 size={22} className="text-white" />,
    },
    {
      title: "Internship & Career Prep",
      desc: "4 months of real internship experience alongside intense mock interviews and resume building.",
      icon: <Users size={22} className="text-white" />,
    },
  ];

  return (
    <section className="w-full font-sans py-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start bg-orange-200/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] border border-white/30 py-10 px-6 md:px-12 rounded-3xl">
        
        {/* Left Side: Content & Features */}
        <div className="flex flex-col pt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-orange-50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] bg-black border border-orange-300/35 w-fit px-4 py-0.5 rounded-2xl text-sm mb-3 block">
              More Than a Course
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6">
              About the MLOps Course.
            </h2>
            <p className="text-gray-800 text-md leading-relaxed">
              A structured 12-month pathway designed for one single goal: getting you placed. We blend intense technical training with practical experience to build a guaranteed career path.
            </p>
          </motion.div>

          {/* Course Features List (Replaced Timeline) */}
          <div className="flex flex-col gap-10 mb-14">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-5"
              >
                {/* Feature Icon */}
                <div className="flex-shrink-0 flex items-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] justify-center w-12 h-12 bg-orange-500 rounded-lg border border-orange-100">
                  {feature.icon}
                </div>
                {/* Feature Text */}
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* The 100% Job Guarantee (Highlighted Block) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative bg-gradient-to-br from-[#111] to-[#222] p-8 md:p-10 rounded-3xl shadow-2xl text-white overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white blur-[100px] rounded-full opacity-30 pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                The Final Goal
              </span>
              <h3 className="text-3xl font-extrabold mb-4">
                100% Job Guarantee
              </h3>
              <p className="text-white/70 mb-8 text-sm leading-relaxed">
                Complete the programme with internship experience and active placement support. Eligible students receive our Job Guarantee until they secure a minimum ₹3 LPA CTC.
              </p>
              <button className="open-genai-modal  flex items-center justify-center w-full border border-orange-300/35 sm:w-auto gap-2 bg-orange-500 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] hover:bg-[#e66000] text-white px-6 py-3.5 rounded-full text-sm font-semibold transition-all">
                Check Eligibility <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          <p className="text-[10px] text-gray-500 mt-6 text-center md:text-left">
            *The 100% Job Guarantee is subject to eligibility criteria, student participation requirements, and the official enrolment agreement.
          </p>
        </div>

        {/* Right Side: Sticky Image */}
        <div className="relative lg:sticky top-0 lg:top-32 w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/7316743/pexels-photo-7316743.jpeg"
            alt="Students learning MLOps"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
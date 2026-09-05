"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Categories extracted from your HTML
const categories = [
  "All",
  "Events and Seminar",
  "My New Event",
  "Office Celebrations",
  "Prizes 2024",
  "Classroom Sessions"
];

// Mapped your provided images into a structured array
const galleryData = [
  { id: 1, src: "https://job-oriented-course.grras.com/assets/images/galleries/1730255953_gallery_img.jpg", category: "Events and Seminar" },
  { id: 2, src: "https://job-oriented-course.grras.com/assets/images/galleries/1730255976_gallery_img.jpg", category: "Events and Seminar" },
  { id: 3, src: "https://job-oriented-course.grras.com/assets/images/galleries/1736000074_01.jpg", category: "My New Event" },
  { id: 4, src: "https://job-oriented-course.grras.com/assets/images/galleries/1736000111_02.jpg", category: "My New Event" },
  { id: 5, src: "https://job-oriented-course.grras.com/assets/images/galleries/1736000142_03.jpg", category: "Office Celebrations" },
  { id: 6, src: "https://job-oriented-course.grras.com/assets/images/galleries/1736000179_04.jpg", category: "Office Celebrations" },
  { id: 7, src: "https://job-oriented-course.grras.com/assets/images/galleries/1736001535_18.jpg", category: "Classroom Sessions" },
  { id: 8, src: "https://job-oriented-course.grras.com/assets/images/galleries/1736001654_19.jpg", category: "Classroom Sessions" },
  { id: 9, src: "https://job-oriented-course.grras.com/assets/images/galleries/1736160388_22.jpg", category: "Classroom Sessions" },
  { id: 10, src: "https://job-oriented-course.grras.com/assets/images/galleries/1734502452_Award 1.jpg", category: "Prizes 2024" },
  { id: 11, src: "https://job-oriented-course.grras.com/assets/images/galleries/1734502478_Award 2.jpg", category: "Prizes 2024" },
  { id: 12, src: "https://job-oriented-course.grras.com/assets/images/galleries/1736000206_05.jpg", category: "My New Event" },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("All");
  // Use a continuously growing/shrinking index for infinite scrolling
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Filter images based on the active tab
  let filteredImages = activeTab === "All" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeTab);

  // 2. Auto-padding: If a category has fewer than 5 images, the left/right sides will look empty.
  // We duplicate the array seamlessly so the infinite loop math always has enough items to fill the screen.
  if (filteredImages.length > 0 && filteredImages.length < 5) {
    const original = [...filteredImages];
    while (filteredImages.length < 5) {
      filteredImages = [...filteredImages, ...original];
    }
  }

  const N = filteredImages.length;

  // Reset index when changing tabs
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  // Handlers just infinitely increment or decrement the index
  const handleNext = () => setCurrentIndex((prev) => prev + 1);
  const handlePrev = () => setCurrentIndex((prev) => prev - 1);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Normalize the continuous index to match our array bounds
  const normalizedCurrent = ((currentIndex % N) + N) % N;

  return (
    <section className="bg-white min-h-screen py-20 px-4 font-sans overflow-hidden">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
          GALLERY
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4 tracking-tight">
          Life at GRRAS
        </h2>
        <p className="text-gray-500 text-[15px] leading-relaxed">
          See the world through our lens: learning, celebrations, <br className="hidden md:block"/> and milestones in photos.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center items-center gap-3 max-w-4xl mx-auto mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
              ${activeTab === cat 
                ? "bg-black text-white border-black shadow-md" 
                : "bg-white text-gray-600 border-gray-300 hover:border-gray-400 hover:text-black"
              }`}
          >
            {cat}
          </button>
        ))}
        {/* 'View More' Button matching the reference image */}
        <button className="px-6 py-2.5 rounded-full text-sm font-medium border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 flex items-center gap-2 transition-colors ml-auto md:ml-0">
          View More <ArrowRight size={14} />
        </button>
      </div>

      {/* Infinite Cover-Flow Carousel */}
      <div className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center max-w-[1200px] mx-auto perspective-[1000px]">
        {filteredImages.length === 0 ? (
          <p className="text-gray-400">No images found for this category.</p>
        ) : (
          <AnimatePresence initial={false}>
            {filteredImages.map((img, index) => {
              
              // Infinite Loop Math: Calculate shortest distance from the center image
              let offset = (index - normalizedCurrent + N) % N;
              if (offset > Math.floor(N / 2)) {
                offset -= N;
              }
              const absOffset = Math.abs(offset);
              
              // Hide images that are far out of view (Performance & transition safety)
              if (absOffset > 2) return null;

              return (
                <motion.div
                  key={`${img.id}-${index}`}
                  // When clicking a side image, we shift the entire carousel by that exact offset
                  onClick={() => {
                    if (offset !== 0) {
                      setCurrentIndex(prev => prev + offset);
                    }
                  }}
                  className={`absolute w-[260px] md:w-[380px] h-[340px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl ${
                    offset === 0 ? "cursor-default" : "cursor-pointer"
                  }`}
                  animate={{
                    x: `${offset * 65}%`, // Space between cards
                    scale: 1 - absOffset * 0.15, // Shrink outer cards
                    zIndex: 10 - absOffset, // Center card is highest
                    opacity: absOffset > 2 ? 0 : 1, // Fade out edges
                    filter: `brightness(${1 - absOffset * 0.3}) blur(${absOffset === 0 ? 0 : 2}px)`,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1], // Smooth custom easing
                  }}
                >
                  <img
                    src={img.src}
                    alt={`Gallery ${index}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}
      </div>

      {/* Bottom Navigation Arrows (No longer disabled since it's an infinite loop) */}
      <div className="flex justify-center items-center gap-4 mt-16">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-gray-800 text-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-gray-800 text-gray-800 flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white"
        >
          <ArrowRight size={18} />
        </button>
      </div>

    </section>
  );
}
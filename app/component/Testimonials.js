'use client';

import React, { useState } from 'react';

const videoTestimonialsData = [
  {
    videoId: "beh-qmE8gko",
    name: "Siddharth Singh Chauhan",
    role: "DevOps Engineer",
    handle: "@siddharth",
    time: "2w ago"
  },
  {
    videoId: "b5VOVNHtIe0",
    name: "Rohan Jain",
    role: "DevOps Engineer at Red Hat",
    handle: "@rohanj",
    time: "1m ago"
  },
  {
    videoId: "C6TVW90TnmA",
    name: "Mohit",
    role: "Trainee At Red Hat",
    handle: "@mohit",
    time: "3m ago"
  },
  {
    videoId: "CpLJmXuQrtk",
    name: "Aashish",
    role: "DevOps Engineer",
    handle: "@aashish",
    time: "4m ago"
  },
  {
    videoId: "v5Ghn7F4tIw",
    name: "Harsh",
    role: "Trainee At Red Hat",
    handle: "@harsh",
    time: "6m ago"
  },
  {
    videoId: "dIMkiApg-kU",
    name: "Mr. Prashant Agarwal",
    role: "Red Hat",
    handle: "@prashant",
    time: "8m ago"
  },
  {
    videoId: "T1319bB2MV4",
    name: "Niharika Tripathi",
    role: "Associate Software Engineer",
    handle: "@niharika",
    time: "1y ago"
  }
];

const TestimonialVideoCard = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white rounded-[2rem] p-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex flex-col border border-gray-100 w-full h-full hover:shadow-xl transition-shadow duration-300">
      
      {/* Header section (Name & Role styling mimicking 'Sienna Brooks / Connecting') */}
      <div className="text-center mb-4 px-2">
        <h3 className="text-2xl font-medium text-gray-900 truncate tracking-tight">
          {data.name}
        </h3>
        <div className="flex items-center justify-center gap-1.5 mt-1 text-sm text-gray-500">
          {/* Animated Spinner Icon */}
          <svg className="animate-spin h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="truncate">{data.role}</span>
        </div>
      </div>

      {/* Media Container (YouTube Thumbnail -> switches to iframe on play) */}
      <div className="relative w-full aspect-[5/3] rounded-2xl overflow-hidden bg-gray-100 mb-5 flex-grow">
        {!isPlaying ? (
          <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
            {/* Using standard img tag for easy rendering of external domains */}
            <img 
              src={`https://img.youtube.com/vi/${data.videoId}/hqdefault.jpg`}
              alt={`${data.name} video testimonial`}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            {/* Visual Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 group-hover:bg-black/70 transition-colors">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
            </div>
          </div>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${data.videoId}?autoplay=1`}
            title={`${data.name} testimonial`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        )}
      </div>

      {/* Footer section (Avatar, Handle, and Action Button) */}
      <div className="flex items-center justify-between mt-auto px-1">
        <div className="flex items-center gap-3">
          {/* Generated Avatar */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
             <img 
                src={`https://i.pravatar.cc/150?u=${data.videoId}`} 
                alt={data.handle}
                className="object-cover w-full h-full"
             />
             {/* Small green status dot */}
             <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-medium text-gray-900 truncate">{data.handle}</span>
            <span className="text-xs text-gray-400">{data.time}</span>
          </div>
        </div>

        {/* Play/Close Action Button */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-[#1c1c1c] hover:bg-black shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)] text-white text-sm font-medium py-2 px-8 rounded-full transition-colors duration-200 shrink-0 border border-white/30 cursor-pointer flex items-center gap-2"
        >
          {isPlaying ? (
             <>
               <span className="text-lg leading-none">&times;</span> Close
             </>
          ) : (
             <>
               <span>▶</span> Play
             </>
          )}
        </button>
      </div>

    </div>
  );
};

export default function VideoTestimonialsGallery() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Optional Header for the section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Video Testimonials
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Hear directly from our students about their journey.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
          {videoTestimonialsData.map((data, index) => (
            <TestimonialVideoCard key={index} data={data} />
          ))}
        </div>

      </div>
    </div>
  );
}
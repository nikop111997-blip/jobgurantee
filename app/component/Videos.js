'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const videosData = [
  {
    id: "0KqBZX7_COk",
    title: "Red Hat Linux Training & Certification",
    channel: "Grras Solutions",
    views: "568 views",
    date: "6y ago",
    handle: "@grras",
  },
  {
    id: "elwTkzcF6go",
    title: "From Layoffs to Hired | Tech Jobs",
    channel: "Grras - IT Training",
    views: "209 views",
    date: "2y ago",
    handle: "@grras",
  },
  {
    id: "DglwxghIYS8",
    title: "What is DevSecOps? Course Info",
    channel: "Grras - IT Training",
    views: "559 views",
    date: "2y ago",
    handle: "@grras",
  },
  {
    id: "U3I-leNJp0o",
    title: "What Is DevOps And How To Learn It",
    channel: "Grras - IT Training",
    views: "1046 views",
    date: "3y ago",
    handle: "@grras",
  },
  {
    id: "Ju068HIr014",
    title: "GRRAS Solutions Wins Multiple Awards",
    channel: "Grras - IT Training",
    views: "92 views",
    date: "2y ago",
    handle: "@grras",
  },
  {
    id: "xcBhLJwrLsQ",
    title: "Cloud Computing & DevOps After 12th",
    channel: "Grras Solutions",
    views: "2474 views",
    date: "6y ago",
    handle: "@grras",
  }
];

const VideoCard = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white rounded-[2rem] p-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex flex-col border border-gray-100 w-full">
      
      {/* Header section similar to "Sienna Brooks" */}
      <div className="text-center mb-4 px-2">
        <h3 className="text-xl font-medium text-gray-900 truncate">
          {video.title}
        </h3>
        <div className="flex items-center justify-center gap-1.5 mt-1 text-sm text-gray-500">
          {/* Faux Loading Spinner Icon */}
          <svg className="animate-spin h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{video.channel}</span>
        </div>
      </div>

      {/* Media Container (Thumbnail or iframe) */}
      <div className="relative w-full aspect-[5/3] rounded-2xl overflow-hidden bg-gray-100 mb-5">
        {!isPlaying ? (
          <Image 
            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
            alt={video.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0"
          ></iframe>
        )}
      </div>

      {/* Footer section */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3">
          {/* Avatar (Using pravatar for dummy avatars matching the image style) */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
             <img 
                src={`https://job-oriented-course.grras.com/assets/images/general_setting/1738216909_GLogo.png`} 
                alt={video.handle}
                fill
                className="object-cover"
             />
             {/* Small green status dot */}
             <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900">{video.handle}</span>
            <span className="text-xs text-gray-400">{video.views} • {video.date}</span>
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-[#1c1c1c] hover:bg-black cursor-pointer text-white text-sm border border-white/30 font-medium py-2 px-4 rounded-full transition-colors duration-200 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)]"
        >
          {isPlaying ? 'Close video' : '▶ Play video'}
        </button>
      </div>

    </div>
  );
};

export default function VideoGallery() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videosData.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}
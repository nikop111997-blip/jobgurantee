"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setScrollProgress(progress);
      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-6 z-50
        h-14 w-14
        rounded-full
        flex items-center justify-center
        bg-white
        shadow-lg
        transition-all duration-300
        hover:scale-110
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }
      `}
    >
      {/* Progress ring */}
      <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 100 100"
      >
        {/* Background border */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="6"
        />

        {/* Orange progress */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="#f97316"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="289"
          strokeDashoffset={289 - (289 * scrollProgress) / 100}
          className="transition-all duration-150"
        />
      </svg>

      {/* Orange center */}
      <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
        <ArrowUp size={20} strokeWidth={2.5} />
      </span>
    </button>
  );
}
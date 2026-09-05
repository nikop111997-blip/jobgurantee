"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  // Track scrolling to change background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    {
      name: "PLACEMENTS",
      href: "#",
      dropdown: [
        { name: "Success Stories", href: "/success_stories" },
        { name: "Testimonials", href: "/testimonials" },
      ],
    },
    {
      name: "EDUVAULT",
      href: "#",
      dropdown: [
        { name: "Learning Videos", href: "/learningVideos" },
      ],
    },
    { name: "GALLERY", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="fixed top-2 left-0 z-50 w-full px-3 py-4 sm:px-6 font-sans">
      <motion.nav
        initial={{ y: -30, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`
          relative mx-auto flex max-w-[85rem] items-center justify-between
          rounded-full
          border border-white/25
          px-3 py-2
          shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)]
          backdrop-blur-sm
          transition-colors duration-500
          ${isScrolled ? "bg-black" : "bg-black/25"}
        `}
      >
        {/* Liquid glass shine */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-full
            bg-gradient-to-b
            from-white/15
            via-white/[0.03]
            to-transparent
          "
        />

        {/* Top glass highlight */}
        <div
          className="
            pointer-events-none absolute left-4 right-4 top-[1px]
            rounded-full bg-white/40 blur-[0.5px]
          "
        />
<motion.a
  href="/"
  whileHover={{ scale: 1.06 }}
  whileTap={{ scale: 0.96 }}
  className="
    relative z-10 flex h-14 w-14 p-1 items-center justify-center
    overflow-hidden rounded-full
    border border-[#fff]/35
    bg-[#fff]/[0.95]
    shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_5px_15px_rgba(0,0,0,0.25)]
    backdrop-blur-xl
  "
>
  <img 
    src="https://job-oriented-course.grras.com/assets/images/general_setting/1738216909_GLogo.png" /* Replace with your actual image path */
    alt="GRRAS Logo" 
    className="h-full w-full object-contain p-1" 
  />
</motion.a>

        {/* Desktop Navigation */}
        <div className="relative z-10 hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <div key={link.name} className="group relative">
              <a
                href={link.dropdown ? undefined : link.href}
                className="
                  flex items-center gap-1 py-2
                  text-xs font-medium tracking-tight text-white/65
                  transition-all duration-300 xl:text-sm
                  hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]
                "
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                )}
              </a>

              {/* Desktop Dropdown */}
              {link.dropdown && (
                <div className="absolute left-0 top-full hidden w-56 pt-2 group-hover:block">
                  <div
                    className="
                      flex flex-col overflow-hidden rounded-2xl
                      border border-white/20 bg-black/95 p-2
                      shadow-2xl backdrop-blur-xl
                    "
                  >
                    {link.dropdown.map((dropLink) => (
                      <a
                        key={dropLink.name}
                        href={dropLink.href}
                        className="
                          rounded-xl px-4 py-2.5 text-sm text-white/70
                          transition-colors hover:bg-white/10 hover:text-white
                        "
                      >
                        {dropLink.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Email Button */}
        <motion.a
          href="tel:+916350618066"
          whileHover={{
            scale: 1.03,
            y: -1,
          }}
          whileTap={{ scale: 0.97 }}
          className="
            relative z-10 hidden items-center
            rounded-full
            border border-[#fff]/35
            bg-orange-500/[0.95]
            px-5 py-2.5
            text-sm font-medium
            text-white/80
            shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)]
            backdrop-blur-xl transition-all
            hover:bg-orange-600
            sm:flex
          "
        >
          <PhoneCall size={16} className="mr-2" /> Connect to Expert
        </motion.a>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            relative z-10 flex h-11 w-11 items-center justify-center
            rounded-full
            border border-white/15
            bg-white/[0.08]
            text-white
            backdrop-blur-xl
            lg:hidden
          "
          aria-label="Toggle navigation"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 12, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                absolute left-0 top-full z-50 w-full
                overflow-hidden rounded-[28px]
                border border-white/20 bg-black
                p-5 shadow-2xl backdrop-blur-3xl
                lg:hidden max-h-[80vh] overflow-y-auto
              "
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col">
                    {link.dropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setActiveMobileDropdown(
                              activeMobileDropdown === link.name ? null : link.name
                            )
                          }
                          className="
                            flex w-full items-center justify-between 
                            rounded-2xl px-5 py-4 text-left
                            text-white/75 transition
                            hover:bg-white/10 hover:text-white
                          "
                        >
                          {link.name}
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              activeMobileDropdown === link.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeMobileDropdown === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="flex flex-col overflow-hidden pl-4 pr-2"
                            >
                              {link.dropdown.map((dropLink) => (
                                <a
                                  key={dropLink.name}
                                  href={dropLink.href}
                                  onClick={() => setIsOpen(false)}
                                  className="
                                    rounded-xl px-5 py-3 text-sm
                                    text-white/50 transition
                                    hover:bg-white/5 hover:text-white
                                  "
                                >
                                  {dropLink.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="
                          rounded-2xl px-5 py-4
                          text-white/75 transition
                          hover:bg-white/10 hover:text-white
                        "
                      >
                        {link.name}
                      </a>
                    )}
                  </div>
                ))}

                <a
                  href="tel:+916350618066"
                  className="
                    mt-4 flex items-center justify-center gap-2 rounded-full
                    border border-[#6e8530]/35
                    bg-orange-500/[0.95]
                    px-5 py-3.5 text-center
                    text-sm font-semibold text-white
                    shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_5px_20px_rgba(0,0,0,0.2)]
                  "
                >
                  <PhoneCall size={16} /> Connect to Expert
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
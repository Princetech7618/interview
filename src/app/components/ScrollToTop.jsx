"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-3 right-6 z-[999] transition-all duration-500 cursor-pointer ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div className="group relative">
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-cyan-400 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Button */}
        <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-white shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:scale-110 transition-all duration-300">
          <ChevronUp
            size={26}
            className="text-white  font-bold"
          />
        </div>
      </div>
    </button>
  );
}
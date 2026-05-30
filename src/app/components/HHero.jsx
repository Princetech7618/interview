"use client";
import dynamic from "next/dynamic";
import { FaRocket } from "react-icons/fa";

// SSR disabled — Three.js needs browser APIs
const Ballpit = dynamic(() => import("./Ballpit"), { ssr: false });

export default function Hero() {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden bg-cyan-50"
      style={{ minHeight: "80svh" }}
    >
      {/* ── Ballpit Background ── */}
      <div
        className="absolute inset-0 z-0"
        style={{ width: "100%", height: "100%", minHeight: "80svh" }}
      >
        <Ballpit
          count={100}
          gravity={0.4}
          friction={0.992}
          wallBounce={0.85}
          followCursor
colors={["#06b6d4", "#22d3ee"]}
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      </div>

      {/* ── Content ── */}
      <div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center"
        style={{ pointerEvents: "none" }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-sky-200 text-sky-600 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold mb-6 sm:mb-8 shadow-lg animate-bounce"
          style={{ pointerEvents: "auto" }}
        >
          <FaRocket className="text-cyan-500" />
          <span className="text-cyan-500 tracking-wide uppercase">AI Digital Marketing</span>
        </div>

        {/* Title */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-snug md:leading-tight mb-2 sm:mb-4">
            <span className="text-cyan-400 drop-shadow-lg">Grow Faster with AI-Powered Marketing</span>{" "}
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-cyan-400 font-semibold tracking-[0.12em] uppercase drop-shadow">
Boost traffic, generate quality leads, and scale your business with intelligent AI-driven marketing strategies.

          </p>
        </div>

      
        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
          style={{ pointerEvents: "auto" }}
        >
          <a
            href="/services"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full font-semibold text-sm sm:text-lg shadow-xl hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105"
          >
Get Started
       </a>
          <a
            href="/contact"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-white text-gray-900 rounded-full font-semibold text-sm sm:text-lg border border-gray-200 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300 shadow-md"
          >
           View Services   
          </a>
        </div>
      </div>
    </section>
  );
}
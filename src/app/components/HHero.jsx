"use client";
import dynamic from "next/dynamic";
import { FaRocket } from "react-icons/fa";

// SSR disabled — Three.js needs browser APIs
const Ballpit = dynamic(() => import("./Ballpit"), { ssr: false });

export default function Hero() {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: "80svh", background: "linear-gradient(135deg, #ecfeff 0%, #cffafe 50%, #a5f3fc 100%)" }}
    >
      {/* ── Ballpit Background ── */}
      <div
        className="absolute inset-0 z-0"
        style={{ width: "100%", height: "100%", minHeight: "80svh" }}
      >
        <Ballpit
          count={120}
          gravity={0.4}
          friction={0.992}
          wallBounce={0.85}
          followCursor
          colors={["#ffffff", "#e0f7ff", "#22d3ee", "#06b6d4", "#cffafe"]}
          minSize={0.5}
          maxSize={1.2}
          cursorRadius={2.8}
        />
      </div>

      {/* ── Content ── */}
      <div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center"
        style={{ pointerEvents: "none" }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-cyan-200 text-cyan-600 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold mb-6 sm:mb-8 shadow-lg animate-bounce"
          style={{ pointerEvents: "auto" }}
        >
          <FaRocket className="text-cyan-500" />
          <span className="tracking-wide uppercase">AI Digital Marketing</span>
        </div>

        {/* Title */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 sm:mb-5">
            <span
              className="drop-shadow-lg text-cyan-500"
              // style={{ color: "#0e7490" }}
            >
              Grow Faster with
            </span>
            <br />
            <span
              className="drop-shadow-lg"
              style={{ color: "#06b6d4" }}
            >
              AI-Powered Marketing
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-medium tracking-wide drop-shadow max-w-2xl mx-auto"
            style={{ color: "#0e7490" }}
          >
            Boost traffic, generate quality leads, and scale your business with
            intelligent AI-driven marketing strategies.
          </p>
        </div>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8"
          style={{ pointerEvents: "auto" }}
        >
          <a
            href="/services"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-white rounded-full font-semibold text-sm sm:text-lg shadow-xl transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #06b6d4, #22d3ee)",
              boxShadow: "0 8px 32px rgba(6,182,212,0.35)",
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 40px rgba(6,182,212,0.55)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "0 8px 32px rgba(6,182,212,0.35)"}
          >
            Get Started
          </a>
          <a
            href="/contact"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-white rounded-full font-semibold text-sm sm:text-lg border transition-all duration-300 shadow-md hover:scale-105"
            style={{ color: "#06b6d4", borderColor: "#06b6d4" }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#06b6d4";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#06b6d4";
            }}
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
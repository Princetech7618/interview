
"use client";
import React from 'react';
import Ballpit from './Ballpit';
import { FaRocket } from 'react-icons/fa';

function Hero() {
  return (
<section className="relative w-full flex items-center justify-center bg-sky-100 overflow-hidden"
      style={{ minHeight: '80svh' }}
    >

      {/* Ballpit Background */}
      <div className="absolute inset-0 z-0">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Ballpit
            count={100}
            gravity={0.5}
            friction={0.9975}
            wallBounce={0.95}
            followCursor
colors={["#22D3EE", "#06B6D4", "#0891B2"]}          />
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-26 text-center">

        {/* Floating Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r to-[#38BDF8] backdrop-blur-xl border border-gray-200 text-white px-4 sm:px-6 lg:px-8 py-2 rounded-full text-xs sm:text-sm md:text-base font-bold mb-6 sm:mb-8 lg:mb-10 shadow-lg animate-bounce">
          <FaRocket className="text-[#38BDF8]" />
          <span className="tracking-wide uppercase">AI Digital Marketing</span>
        </div>

        {/* Main Title */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-snug md:leading-tight mb-2 sm:mb-4">
            <span className="text-black">Grow Faster with</span>{" "}
            <span className="text-black">
                            AI-Powered Marketing


            </span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 font-semibold ">
  Boost traffic, generate quality leads, and scale your business
            with intelligent AI-driven marketing strategies.          </p>
        </div>

        {/* Slogan */}
        {/* <p className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-800 font-semibold tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] mb-6 sm:mb-8 lg:mb-10">
  Boost traffic, generate quality leads, and scale your business
            with intelligent AI-driven marketing strategies.        </p> */}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-4 sm:mt-8 lg:mt-10">
          <a
            href="/services"
            className="w-full sm:w-auto px-7 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#38BDF8] to-[#38BDF8] text-white rounded-full font-semibold text-sm sm:text-lg shadow-xl hover:shadow-[#38BDF8]/40 transition-all duration-300 hover:scale-105 pointer-events-auto"
          >
           
              Get Started
          </a>

          <a
            href="/contact"
            className="w-full sm:w-auto px-7 sm:px-10 py-3 sm:py-4 bg-white text-gray-900 rounded-full font-semibold text-sm sm:text-lg border hover:bg-[#38BDF8] hover:text-white transition-all duration-300 shadow-md pointer-events-auto"
          >
             View Services
          </a>
        </div>
      </div>

    </section>
  );
}

export default Hero;
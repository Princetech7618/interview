"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-10 pt-10 pb-5">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >

          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm mb-5">

            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>

            AI Digital Marketing

          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">

            Grow Faster with{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
              AI-Powered
            </span>{" "}

            Marketing

          </h1>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-5 max-w-xl mx-auto lg:mx-0">

            Boost traffic, generate quality leads, and scale your business
            with intelligent AI-driven marketing strategies.

          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

            <button className=" cursor-pointer px-7 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold duration-300">

              Get Started

            </button>

            <button className="hover:text-cyan-500 cursor-pointer px-7 py-3 rounded-full border border-cyan-400/20 bg-white/5 hover:bg-cyan-500/10 duration-300">

              View Services

            </button>

          </div>

       

        </motion.div>

        {/* RIGHT IMAGE SLIDER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >

          <div className="relative w-full max-w-[500px] h-[320px] sm:h-[380px] rounded-3xl overflow-hidden border border-cyan-400/10 shadow-2xl">

            {/* Images */}
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="slider"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  current === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/30 to-transparent"></div>

            {/* Floating Card */}
            <div className="absolute bottom-5 left-5 right-5 bg-[#111827]/80 backdrop-blur-xl border border-cyan-400/10 rounded-2xl p-4">

              <p className="text-gray-400 text-sm">
                AI Campaign Performance
              </p>

              <div className="flex items-center justify-between mt-3">

                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    +120%
                  </h3>

                  <p className="text-xs text-gray-400">
                    Traffic Growth
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    87%
                  </h3>

                  <p className="text-xs text-gray-400">
                    Conversion
                  </p>
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
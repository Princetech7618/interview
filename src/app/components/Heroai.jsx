"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Play,
  Star,
} from "lucide-react";

export default function HeroSection() {
  return (  
    <section className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-10 sm:pb-18 lg:pt-10 lg:pb-20 px-4 sm:px-6 lg:px-10">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-cyan-500/20 blur-[120px] sm:blur-[180px] rounded-full"></div>

        {/* Bottom Glow */}
        <div className="absolute bottom-0 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-cyan-500/40 blur-[100px] sm:blur-[140px] rounded-full"></div>

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-xl px-4 sm:px-5 py-2 text-xs sm:text-sm text-cyan-700">

            <Sparkles size={15} />

            AI Website Development Agency

          </div>

        </motion.div>

        {/* Main Content */}
        <div className="mt-10 text-center max-w-6xl mx-auto">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[1.05] tracking-tight text-black"
          >

            We Build{" "}

            <span className="relative inline-block">

              <span className="bg-gradient-to-r from-cyan-500 via-cyan-500 to-slate-900 bg-clip-text text-transparent">
                AI Powered
              </span>

              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute left-0 bottom-1 sm:bottom-2 h-[4px] sm:h-[6px] bg-cyan-400/30 rounded-full"
              />

            </span>

            {" "}Digital Experiences
            <br />

            For Modern Brands

          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 sm:mt-8 max-w-3xl mx-auto text-sm sm:text-base lg:text-xl leading-relaxed text-slate-600 px-2"
          >

            Premium websites, AI automation, ecommerce platforms,
            and next-generation user experiences designed to help your
            business scale faster and convert better.

          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10"
          >

            <Link href="/contact">

              <button className="group w-full sm:w-auto cursor-pointer rounded-full bg-cyan-500 px-7 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base text-white font-semibold transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]">

                <span className="flex items-center justify-center gap-2">

                  Start Your Project

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </span>

              </button>

            </Link>

            <button className="group w-full sm:w-auto cursor-pointer rounded-full border border-slate-200 bg-white px-7 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base text-slate-700 shadow-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-50">

              <span className="flex items-center justify-center gap-2">

                <Play
                  size={16}
                  className="fill-slate-700"
                />

                Watch Showcase

              </span>

            </button>

          </motion.div>

          {/* Reviews */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 mt-10 sm:mt-12"
          >

            {/* Avatars */}
            <div className="flex -space-x-4">

              {[
                "https://i.pravatar.cc/100?img=1",
                "https://i.pravatar.cc/100?img=2",
                "https://i.pravatar.cc/100?img=3",
                "https://i.pravatar.cc/100?img=4",
              ].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="user"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
                />
              ))}

            </div>

            {/* Rating */}
            <div className="text-center sm:text-left">

              <div className="flex items-center justify-center sm:justify-start gap-1 text-cyan-500">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-cyan-500"
                  />
                ))}

              </div>

              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Trusted by 150+ businesses worldwide
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
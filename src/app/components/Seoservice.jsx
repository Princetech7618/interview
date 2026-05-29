"use client";

import { motion } from "framer-motion";
import {
  Search,
  BarChart3,
  Mic,
  BrainCircuit,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "AI SEO Services",
    desc: "Boost search rankings and organic traffic with intelligent AI-powered SEO strategies.",
  },
  {
    icon: BarChart3,
    title: "AI Content Marketing",
    desc: "Create high-converting and engaging content using advanced AI content solutions.",
  },
  {
    icon: Mic,
    title: "AI Social Media Marketing",
    desc: "Automate campaigns, audience targeting, and engagement across social platforms.",
  },
  {
    icon: BrainCircuit,
    title: "AI Lead Generation",
    desc: "Generate high-quality business leads through AI automation and smart analytics.",
  },
];
export default function SeoServices() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-18">

      {/* Glow */}
      <div className="absolute right-0 top-10 w-52 sm:w-72 h-52 sm:h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-10 sm:mb-14">

        <p className="text-cyan-400 uppercase tracking-[3px] text-xs sm:text-sm mb-3">
          AI SEO Services
        </p>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.2]">
          Smart SEO Solutions Powered by{" "}
          <span className="text-cyan-400">
            Artificial Intelligence
          </span>
        </h2>

        <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed px-2">
          Improve rankings, increase organic traffic, and grow faster using
          advanced AI-powered SEO strategies.
        </p>

      </div>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group relative bg-white border border-cyan-400/10 backdrop-blur-xl rounded-2xl p-5 sm:p-6 hover:border-cyan-400/80 border-l-4  cursor-pointer duration-300 overflow-hidden"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 bg-gradient-to-br from-cyan-500/5 to-transparent"></div>

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-5 group-hover:scale-110 duration-300">

                <Icon
                  size={28}
                  className="text-cyan-400"
                />

              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-semibold text-black mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* Button */}
              <button className="relative z-10 mt-5 text-cyan-400 text-sm flex items-center gap-2 group-hover:gap-3 duration-300">
                Learn More →
              </button>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}
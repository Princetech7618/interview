"use client";

import { motion } from "framer-motion";
import {
  SearchCheck,
  BrainCircuit,
  Rocket,
  BarChart3,
} from "lucide-react";

const process = [
  {
    icon: SearchCheck,
    title: "Research & Analysis",
    desc: "We analyze your business, audience, and competitors to create the best AI strategy.",
  },
  {
    icon: BrainCircuit,
    title: "AI Strategy Planning",
    desc: "Smart AI-driven marketing plans designed for maximum growth and conversion.",
  },
  {
    icon: Rocket,
    title: "Campaign Execution",
    desc: "Launch powerful marketing campaigns across SEO, social media, and ads.",
  },
  {
    icon: BarChart3,
    title: "Optimization & Growth",
    desc: "Track performance and continuously optimize for better ROI and results.",
  },
];

export default function OurProcess() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-10 py-16 lg:py-20">

      {/* Glow */}
      <div className="absolute right-0 top-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-cyan-400 uppercase tracking-[3px] text-sm mb-3">
            Our Process
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">

            Simple & Smart Process for{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
              Business Growth
            </span>

          </h2>

          <p className="text-gray-400 mt-5 text-sm sm:text-base leading-relaxed">
            Our AI-powered workflow helps businesses grow faster with
            data-driven strategies and optimized digital campaigns.
          </p>

        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          {process.map((item, index) => {
            const Icon = item.icon;

            return (
           <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  viewport={{ once: true }}
  className="relative bg-white/80 backdrop-blur-md 
             rounded-xl p-6 
             border-l-4 border-cyan-400/80 
             shadow-md 
             hover:shadow-2xl 
             hover:-translate-y-2 
             transition-all duration-300 
             group overflow-hidden"
>
                {/* Number */}
                <div className="absolute top-5 right-5 text-5xl font-bold text-black/10">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-5 group-hover:scale-110 duration-300">

                  <Icon
                    size={28}
                    className="text-cyan-400"
                  />

                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-black">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
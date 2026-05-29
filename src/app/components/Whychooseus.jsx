"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  BadgeCheck,
  Zap,
  Users,
  BarChart3,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Strategies",
    desc: "We use advanced AI tools to create smarter marketing campaigns and business solutions.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Results",
    desc: "Every strategy is backed by analytics and performance tracking for maximum growth.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    desc: "Quick implementation and optimized workflows to deliver faster business results.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Our experienced digital experts focus on creativity, innovation, and conversion.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Solutions",
    desc: "Reliable and scalable services tailored to businesses of every size and industry.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Dedicated support and consultation whenever your business needs assistance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-10 py-16 lg:py-18">

      {/* Glow */}
      <div className="absolute right-0 top-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <p className="text-cyan-400 uppercase tracking-[3px] text-sm mb-4">
            Why Choose Us
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">

            Delivering Smart AI Solutions for{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
              Modern Businesses
            </span>

          </h2>

          <p className="text-gray-400 mt-6 text-sm sm:text-base leading-relaxed">

            We help brands grow faster with AI-powered marketing strategies,
            automation, and performance-focused digital solutions.

          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-xl border hover:border-l-4 border-cyan-400/30 border-l-4 bg-white backdrop-blur-xl p-6 sm:p-7 hover:border-cyan-400/80 duration-300"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-5 group-hover:scale-110 duration-300">

                  <Icon
                    size={28}
                    className="text-cyan-400"
                  />

                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl font-semibold text-black mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>

              </motion.div>
            );
          })}

        </div>


      </div>

    </section>
  );
}
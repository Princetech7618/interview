"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Globe,
  Layers3,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export default function CompanyIntroduction() {
  return (
    <section className="relative overflow-hidden bg-white px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12">

      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[1rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-cyan-50 p-5 sm:p-8 shadow-lg">

              {/* Small Glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 blur-[100px] rounded-full"></div>

              {/* Top */}
              <div className="relative z-10 flex items-center justify-between">

                <div>
                  <p className="text-slate-500 text-sm">
                    AI Development Agency
                  </p>

                  <h3 className="text-xl sm:text-2xl font-bold text-black mt-2">
                    Transforming Ideas Into
                    <span className="text-cyan-500"> Digital Products</span>
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-cyan-500 text-white flex items-center justify-center shadow-lg">
                  <Sparkles size={26} />
                </div>

              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">

                {[
                  {
                    number: "150+",
                    label: "Projects Completed",
                  },
                  {
                    number: "98%",
                    label: "Client Satisfaction",
                  },
                  {
                    number: "10+",
                    label: "AI Integrations",
                  },
                  {
                    number: "24/7",
                    label: "Support Available",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white bg-white/70 backdrop-blur-xl p-5"
                  >

                    <h4 className="text-2xl sm:text-3xl font-bold text-black">
                      {item.number}
                    </h4>

                    <p className="text-sm text-slate-500 mt-1">
                      {item.label}
                    </p>

                  </div>
                ))}

              </div>

              {/* Bottom Card */}
              <div className="mt-6 rounded-2xl bg-black p-5 sm:p-6 text-white">

                <div className="flex items-center justify-between gap-4">

                  <div>

                    <p className="text-slate-400 text-sm">
                      Business Growth
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-bold mt-2">
                      +240%
                    </h3>

                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <ArrowUpRight size={28} />
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-700">

              <Sparkles size={15} />

              About Our Company

            </div>

            {/* Heading */}
            <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-black">

              We Create Modern Websites &
              AI Solutions For Growing Brands

            </h2>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600">

              We are a modern AI web development agency focused on building
              premium digital experiences that help businesses grow faster.
              From custom websites and SaaS platforms to AI automation and
              ecommerce solutions, we combine creativity with technology to
              deliver impactful results.

            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

              {[
                {
                  icon: Globe,
                  title: "Custom Web Development",
                },
                {
                  icon: Layers3,
                  title: "Modern UI/UX Design",
                },
                {
                  icon: Sparkles,
                  title: "AI Powered Solutions",
                },
                {
                  icon: ShieldCheck,
                  title: "Scalable & Secure",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-xl"
                  >

                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-4">

                      <Icon size={24} />

                    </div>

                    <h3 className="text-lg font-semibold text-black">
                      {item.title}
                    </h3>

                  </div>
                );
              })}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Bot,
  MonitorSmartphone,
  Rocket,
} from "lucide-react";

export default function CompanyIntroduction() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-4 sm:px-6 lg:px-10 py-10 sm:py-10 lg:py-20">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-400/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-xs sm:text-sm text-cyan-700">

              <Sparkles size={15} />

              Who We Are

            </div>

            {/* Heading */}
            <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-black">

              Designing Future-Ready
              <span className="bg-gradient-to-r from-cyan-500 to-cyan-500 bg-clip-text text-transparent">
                {" "}Digital Products
              </span>

            </h2>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 max-w-2xl">

              We help startups and businesses build premium websites,
              AI-powered platforms, and scalable digital products with
              modern design systems and high-performance technologies.

            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

              {[
                "Custom Website Development",
                "AI Automation Solutions",
                "Modern UI/UX Design",
                "Fast & Scalable Architecture",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    size={20}
                    className="text-cyan-500 flex-shrink-0"
                  />

                  <p className="text-sm sm:text-base text-slate-700">
                    {item}
                  </p>

                </div>
              ))}

            </div>

            {/* Bottom Stats */}
            {/* <div className="flex flex-wrap gap-4 sm:gap-6 mt-10">

              {[
                {
                  number: "150+",
                  label: "Projects",
                },
                {
                  number: "98%",
                  label: "Success Rate",
                },
                {
                  number: "5+",
                  label: "Years Experience",
                },
              ].map((item, index) => (
                <div key={index}>

                  <h3 className="text-2xl sm:text-3xl font-bold text-black">
                    {item.number}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {item.label}
                  </p>

                </div>
              ))}

            </div> */}

          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Main Wrapper */}
            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 shadow-[0_10px_60px_rgba(0,0,0,0.08)]">

              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400/20 blur-[100px] rounded-full"></div>

              {/* Grid */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Card */}
                <div className="rounded-3xl bg-[#0F172A] p-6 text-white">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">

                    <Bot size={28} />

                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    AI Integration
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Smart AI automation and next-gen business workflows.
                  </p>

                </div>

                {/* Card */}
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">

                    <MonitorSmartphone size={28} />

                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-black">
                    Responsive Design
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Optimized experience across mobile, tablet, and desktop.
                  </p>

                </div>

                {/* Large Card */}
                <div className="sm:col-span-2 rounded-3xl bg-gradient-to-r from-cyan-500 to-cyan-500 p-6 sm:p-8 text-white overflow-hidden relative">

                  {/* Glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 blur-[80px] rounded-full"></div>

                  <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

                    <div>

                      <p className="text-cyan-100 text-sm">
                        Business Growth
                      </p>

                      <h3 className="mt-2 text-3xl sm:text-4xl font-bold">
                        +240%
                      </h3>

                      <p className="mt-3 text-sm sm:text-base text-cyan-50 max-w-lg">
                        Helping brands scale faster with premium web solutions
                        and AI-powered systems.
                      </p>

                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center">

                      <Rocket size={30} />

                    </div>

                  </div>

                </div>

                {/* Small Bottom Card */}
                <div className="sm:col-span-2 rounded-3xl border border-slate-200 bg-white p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

                  <div>

                    <p className="text-sm text-slate-500">
                      Trusted by modern startups & businesses worldwide
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-black">
                      Premium Web & AI Development Agency
                    </h3>

                  </div>

                  <button className=" cursor-pointer group flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-cyan-600">

                    Explore More

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />

                  </button>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  LayoutDashboard,
  Code2,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const process = [
  {
    icon: Search,
    title: "Research & Strategy",
    desc: "We understand your business goals, audience, and project requirements to create the right digital strategy.",
  },
  {
    icon: PenTool,
    title: "Wireframing & Planning",
    desc: "We design structured wireframes and user flows focused on usability and seamless user experience.",
  },
  {
    icon: LayoutDashboard,
    title: "UI/UX Design",
    desc: "Modern and visually engaging interfaces are crafted to build strong brand identity and conversions.",
  },
  {
    icon: Code2,
    title: "Development",
    desc: "Using modern technologies, we build fast, scalable, secure, and responsive digital products.",
  },
  {
    icon: ShieldCheck,
    title: "Testing & Optimization",
    desc: "We ensure performance, responsiveness, SEO optimization, and bug-free functionality across devices.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    desc: "After launch, we provide ongoing support, maintenance, and future scalability improvements.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-10">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-cyan-600 uppercase tracking-[3px] text-sm font-medium">
            Development Process
          </p>

          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-black">

            Our Proven Process For
            <span className="bg-gradient-to-r from-cyan-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}Building Digital Products
            </span>

          </h2>

          <p className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600">
            We follow a structured and modern workflow to deliver scalable,
            user-focused, and high-performance digital experiences.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative mt-10">

          {/* Vertical Line */}
          <div className="absolute left-5 sm:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 to-cyan-500 -translate-x-1/2"></div>

          <div className="space-y-10 sm:space-y-14">

            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 ${
                    index % 2 === 0
                      ? "sm:flex-row"
                      : "sm:flex-row-reverse"
                  }`}
                >

                  {/* Empty Space */}
                  <div className="hidden sm:block sm:w-1/2"></div>

                  {/* Center Icon */}
                  <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 z-10">

                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-cyan-500 text-white flex items-center justify-center shadow-lg border-4 border-white">

                      <Icon size={24} />

                    </div>

                  </div>

                  {/* Content Card */}
                  <div className="ml-16 sm:ml-0 sm:w-1/2">

                    <div className="group rounded-[1rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-cyan-400/30">

                      {/* Step Number */}
                      <div className="flex items-center justify-between gap-4">

                        <span className="text-sm font-medium text-cyan-600">
                          Step {index + 1}
                        </span>

                        <span className="text-4xl font-bold text-slate-100">
                          0{index + 1}
                        </span>

                      </div>

                      {/* Title */}
                      <h3 className="mt-4 text-2xl font-semibold text-black">
                        {item.title}
                      </h3>

                      {/* Desc */}
                      <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}
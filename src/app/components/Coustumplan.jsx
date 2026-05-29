"use client";

import {
  Globe,
  Bot,
  ShoppingBag,
  Palette,
  ArrowUpRight,
} from "lucide-react";

import {
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFramer,
} from "react-icons/si";

import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    desc: "High-performance business websites designed with modern UI, scalability, and premium user experience.",
  },
  {
    icon: Bot,
    title: "AI Website Solutions",
    desc: "Smart AI integrations including chatbots, automation systems, and AI-powered business tools.",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce Development",
    desc: "Modern ecommerce platforms with secure payments, optimized checkout flows, and high conversions.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Clean and engaging interfaces crafted to improve usability, branding, and customer interaction.",
  },
];

const portfolio = [
  {
    title: "AI SaaS Platform",
    category: "Web Application",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Modern Ecommerce Store",
    category: "Ecommerce",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Business Dashboard",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
];

const techStack = [
  {
    icon: SiNextdotjs,
    name: "Next.js",
  },
  {
    icon: FaReact,
    name: "React",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind",
  },
  {
    icon: FaNodeJs,
    name: "Node.js",
  },
  {
    icon: SiMongodb,
    name: "MongoDB",
  },
  {
    icon: SiFramer,
    name: "Framer Motion",
  },
  {
    icon: FaFigma,
    name: "Figma",
  },
];

export default function ServicesShowcase() {
  return (
    <section className="relative overflow-hidden bg-white px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-10">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-cyan-600 font-medium uppercase tracking-[3px] text-sm">
            Our Expertise
          </p>

          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-black">

            Premium Digital Solutions
            <span className="bg-gradient-to-r from-cyan-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}For Modern Businesses
            </span>

          </h2>

          <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            We create scalable websites, AI-powered platforms, ecommerce
            solutions, and premium UI/UX experiences designed for growth.
          </p>

        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">

          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl"
              >

                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/0 blur-[80px] transition-all duration-500 group-hover:bg-cyan-400/20 rounded-full"></div>

                <div className="relative z-10">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">

                    <Icon size={28} />

                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>

                  <button className="group/btn mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-600">

                    Learn More

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1"
                    />

                  </button>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Technologies */}
        <div className="mt-24">

          <div className="text-center">

            <p className="text-cyan-600 uppercase tracking-[3px] text-sm font-medium">
              Technologies We Use
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-black">
              Modern Tech Stack
            </h2>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-5 mt-12">

            {techStack.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group rounded-xl border border-slate-200 bg-white p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-cyan-400/30 hover:shadow-xl"
                >

                  <Icon className="text-4xl text-cyan-500 transition-transform duration-300 group-hover:scale-110" />

                  <p className="mt-4 text-sm font-medium text-slate-700">
                    {item.name}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>

        {/* Portfolio */}
        <div className="mt-24">

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">

            <div>

              <p className="text-cyan-600 uppercase tracking-[3px] text-sm  font-medium">
                Portfolio Showcase
              </p>

              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-black">
                Recent Creative Projects
              </h2>

            </div>

            <button className=" cursor-pointer rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-50">

              View All Projects

            </button>

          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">

            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[1rem] cursor-pointer "
              >

                {/* Image */}
                <div className="overflow-hidden rounded-[1rem]">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[300px] sm:h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">

                  <p className="text-cyan-300 text-sm">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <button className="group/arrow mt-5 inline-flex items-center gap-2 text-sm text-white">

                    Explore Project

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover/arrow:-translate-y-1 group-hover/arrow:translate-x-1"
                    />

                  </button>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
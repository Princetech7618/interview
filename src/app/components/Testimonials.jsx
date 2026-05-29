"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    review:
      "Kewyword AI completely transformed our digital presence and increased our leads dramatically.",
  },
  {
    name: "Ankit Verma",
    role: "Ecommerce Owner",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    review:
      "Their AI marketing strategies helped us scale faster and improve conversions within months.",
  },
  {
    name: "Priya Kapoor",
    role: "Business Consultant",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    review:
      "Professional team with modern AI solutions and amazing support throughout the project.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
      
      {/* Glow */}
      <div className="absolute left-0 top-10 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="text-cyan-400 uppercase tracking-[3px] text-sm mb-3">
            Client Testimonials
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            What Our Clients Say About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>

        </div>

        {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {testimonials.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -6 }}
          className="group relative bg-white backdrop-blur-md  rounded-xl p-6 lg:p-8 transition-all duration-300 ease-out hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)] flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle Premium Left Border Glow */}
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-cyan-500 via-cyan-400 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

          <div>
            {/* Top User Info */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-cyan-400/60 transition-colors duration-300 shadow-inner">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <h3 className="text-base font-semibold text-black tracking-wide group-hover:text-cyan-500 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-black text-xs font-medium uppercase tracking-wider mt-0.5">
                  {item.role}
                </p>
              </div>
            </div>

            {/* Premium Star Rating */}
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-cyan-400 fill-cyan-400/20 group-hover:fill-cyan-400 transition-all duration-300 transform group-hover:scale-110"
                  style={{ transitionDelay: `${i * 50}ms` }}
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-slate-700 leading-relaxed text-sm lg:text-[15px] font-normal italic relative z-10">
              “{item.review}”
            </p>
          </div>

          {/* Decorative Background Glow on Hover */}
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
      ))}
    </div>
      </div>

    </section>
  );
}
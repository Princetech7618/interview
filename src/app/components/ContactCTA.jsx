"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-10 py-16 lg:py-20">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative overflow-hidden max-w-7xl mx-auto rounded-2xl   bg-cyan-100 p-8 sm:p-12 lg:p-16 text-center"
      >

        {/* Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

        {/* Content */}
        <div className="relative z-10">

          <p className="text-black uppercase tracking-[3px] text-sm mb-4">
            Contact Us
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto">

            Ready to Grow Your Business with{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-cyan-400 bg-clip-text text-transparent">
              AI Marketing?
            </span>

          </h2>

          <p className="text-black mt-5 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">

            Let’s build smarter marketing strategies and powerful AI solutions
            to scale your business faster than ever before.

          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

            <button className="w-full cursor-pointer text-white  sm:w-auto px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400  font-semibold duration-300 hover:scale-105 flex items-center justify-center gap-2">

              Get Free Consultation

              <ArrowRight size={18} />

            </button>

            <button className="w-full hover:text-white cursor-pointer text-cyan-400 sm:w-auto px-8 py-3 rounded-full border border-cyan-400/20 bg-white/5 hover:bg-cyan-500/30 duration-300">

              View Services

            </button>

          </div>

        </div>

      </motion.div>

    </section>
  );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide custom website development, AI-powered solutions, ecommerce development, UI/UX design, and scalable web applications for modern businesses.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on complexity and requirements. A standard business website usually takes 2–4 weeks, while advanced platforms may take longer.",
  },
  {
    question: "Do you create mobile responsive websites?",
    answer:
      "Yes, every project is fully optimized for mobile, tablet, and desktop devices to ensure a seamless user experience across all screens.",
  },
  {
    question: "Can you integrate AI features into websites?",
    answer:
      "Absolutely. We can integrate AI chatbots, automation systems, AI search, smart recommendations, and other AI-powered business solutions.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We mainly work with Next.js, React.js, Tailwind CSS, Node.js, MongoDB, Framer Motion, and modern frontend/backend technologies.",
  },
  {
    question: "Do you provide support after project delivery?",
    answer:
      "Yes, we provide ongoing maintenance, performance optimization, updates, and technical support after project launch.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-white px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-10">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-cyan-400/10 blur-[100px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-xs sm:text-sm text-cyan-700">

            <Sparkles size={15} />

            Frequently Asked Questions

          </div>

          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-black">

            Everything You Need To Know

            <span className="bg-gradient-to-r from-cyan-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}About Our Services
            </span>

          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600">
            Find answers to the most common questions about our
            services, technologies, and development process.
          </p>

        </div>

        {/* FAQ */}
        <div className="mt-10 sm:mt-12 space-y-3 sm:space-y-4">

          {faqs.map((item, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-cyan-400/40 bg-cyan-50/40 shadow-lg"
                    : "border-slate-200 bg-white"
                }`}
              >

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 lg:px-7 py-5 text-left cursor-pointer"
                >

                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold leading-relaxed text-black pr-2">
                    {item.question}
                  </h3>

                  <div
                    className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-cyan-500 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >

                    {isOpen ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}

                  </div>

                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>

                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >

                      <div className="px-5 sm:px-6 lg:px-7 pb-5 sm:pb-6">

                        <div className="h-px w-full bg-slate-200 mb-4"></div>

                        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                          {item.answer}
                        </p>

                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
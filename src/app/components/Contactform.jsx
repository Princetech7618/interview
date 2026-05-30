"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Clock3,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaDribbble,
} from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);

      alert("Form Submitted Successfully 🚀");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-14">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cyan-400/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-xs sm:text-sm text-cyan-700">

            <Sparkles size={15} />

            Contact Us

          </div>

          <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-black">

            Let’s Build Something

            <span className="bg-gradient-to-r from-cyan-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}Amazing Together
            </span>

          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600">
            Share your project details and our team will get back to you
            with the perfect digital solution for your business.
          </p>

        </div>

        {/* Main Content */}
        <div className="mt-10 grid grid-cols-1 xl:grid-cols-[1fr_1.1fr] gap-6 lg:gap-8 items-stretch">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[1.5rem] bg-black p-6 sm:p-8 lg:p-10 text-white flex flex-col justify-between"
          >

            {/* Glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/20 blur-[100px] rounded-full"></div>

            <div className="relative z-10">

              {/* Contact Heading */}
              <div className="flex items-center gap-3 mb-5">

                <div className="w-12 h-12 rounded-2xl bg-cyan-500 text-white flex items-center justify-center">

                  <Phone size={22} />

                </div>

                <div>

                  <p className="text-cyan-400 text-sm uppercase tracking-[3px]">
                    Contact Information
                  </p>

                  <h3 className="text-xl sm:text-2xl font-semibold mt-1">
                    Let’s Talk
                  </h3>

                </div>

              </div>

              <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
                Have A Project In Mind?
              </h3>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300 max-w-lg">
                We build premium websites, AI-powered platforms,
                ecommerce solutions, and modern digital experiences
                that help brands grow faster and stand out online.
              </p>

              {/* Contact Cards */}
              <div className="mt-8 space-y-4">

                {/* Email */}
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">

                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">

                    <Mail size={22} />

                  </div>

                  <div>

                    <p className="text-slate-400 text-sm">
                      Email Address
                    </p>

                    <h4 className="mt-1 text-base sm:text-lg font-medium break-all">
                      hello@youragency.com
                    </h4>

                  </div>

                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">

                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">

                    <Phone size={22} />

                  </div>

                  <div>

                    <p className="text-slate-400 text-sm">
                      Phone Number
                    </p>

                    <h4 className="mt-1 text-base sm:text-lg font-medium">
                      +91 98765 43210
                    </h4>

                  </div>

                </div>

                {/* Address */}
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">

                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">

                    <MapPin size={22} />

                  </div>

                  <div>

                    <p className="text-slate-400 text-sm">
                      Office Address
                    </p>

                    <h4 className="mt-1 text-base sm:text-lg font-medium">
                      New Delhi, India
                    </h4>

                  </div>

                </div>

              </div>

            </div>

            {/* Bottom Section */}
            <div className="relative z-10 mt-6 space-y-5">

              

            </div>

          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-6 lg:p-7 shadow-[0_10px_60px_rgba(0,0,0,0.04)]"
          >

            {/* Form Heading */}
            <div className="mb-6">

              <p className="text-cyan-500 text-sm font-medium text-center uppercase tracking-[3px]">
                Send Message
              </p>

              <h3 className="mt-2 text-center text-2xl sm:text-3xl font-semibold text-black">
           Contact Us
              </h3>

            </div>

            <form onSubmit={handleSubmit} className="space-y-4 pt-6">

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>

                  <label className="text-sm font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-white"
                  />

                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.name}
                    </p>
                  )}

                </div>

                <div>

                  <label className="text-sm font-medium text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-white"
                  />

                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email}
                    </p>
                  )}

                </div>

              </div>

              {/* Phone + Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>

                  <label className="text-sm font-medium text-slate-700">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-white"
                  />

                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.phone}
                    </p>
                  )}

                </div>

                <div>

                  <label className="text-sm font-medium text-slate-700">
                    Service Type
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-white"
                  >

                    <option value="">Select Service</option>
                    <option>Custom Website Development</option>
                    <option>AI Website Solutions</option>
                    <option>Ecommerce Development</option>
                    <option>UI/UX Design</option>

                  </select>

                  {errors.service && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.service}
                    </p>
                  )}

                </div>

              </div>

              {/* Message */}
              <div>

                <label className="text-sm font-medium text-slate-700">
                  Project Details
                  <span className="text-slate-400">
                    {" "} (Optional)
                  </span>
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-white"
                ></textarea>

              </div>

              {/* Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_10px_40px_rgba(34,211,238,0.35)]"
              >

                Send Message

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
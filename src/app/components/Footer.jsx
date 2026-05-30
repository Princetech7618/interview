"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-400/10 bg-[#0B1120]">

      {/* Glow */}
      <div className="absolute left-0 bottom-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16 relative z-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">

          {/* Brand */}
          <div>

                 {/* Logo */}
   <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
  <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white">
    <Image
      src="/img/logo.jpeg"
      alt="Keyword AI"
      width={40}
      height={40}
      className="object-cover w-full h-full"
    />
  </div>
  {/* <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-500 bg-clip-text text-transparent cursor-pointer">
    Kewyword AI
  </h1> */}
</Link>

            <p className="text-gray-400 mt-5 leading-relaxed text-sm sm:text-base">
              AI-powered marketing solutions helping businesses scale smarter,
              faster, and more efficiently in the digital world.
            </p>

            {/* CTA */}
            <button className="mt-6 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 duration-300 group">
              Let’s Work Together

              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300"
              />

            </button>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-lg sm:text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm sm:text-base text-gray-400">

              {[
                "Home",
                "Services",
                "About Us",
                "Contact",
              ].map((item, index) => (
                <li
                  key={index}
                  className="group flex items-center gap-2 hover:text-cyan-400 cursor-pointer duration-300"
                >

                  <ChevronRight
                    size={16}
                    className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1"
                  />

                  {item}

                </li>
              ))}

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-lg sm:text-xl font-semibold text-white mb-5">
              Services
            </h3>

            <ul className="space-y-4 text-sm sm:text-base text-gray-400">

              {[
                "AI SEO Services",
                "AI Content Marketing",
                "AI Lead Generation",
                "Social Media Marketing",
              ].map((item, index) => (
                <li
                  key={index}
                  className="group flex items-center gap-2 hover:text-cyan-400 cursor-pointer duration-300"
                >

                  <ChevronRight
                    size={16}
                    className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1"
                  />

                  {item}

                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg sm:text-xl font-semibold text-white mb-5">
              Contact Info
            </h3>

            <div className="space-y-5 text-sm sm:text-base text-gray-400">

              <div className="flex items-center gap-3 hover:text-cyan-400 duration-300">

                <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">

                  <Mail
                    size={18}
                    className="text-cyan-400"
                  />

                </div>

                <p className="cursor-pointer break-all">
                  info@kewywordai.com
                </p>

              </div>

              <div className="flex items-center gap-3 hover:text-cyan-400 duration-300">

                <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">

                  <Phone
                    size={18}
                    className="text-cyan-400"
                  />

                </div>

                <p className="cursor-pointer">
                  +91 9876543210
                </p>

              </div>

              <div className="flex items-start gap-3 hover:text-cyan-400 duration-300">

                <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center shrink-0">

                  <MapPin
                    size={18}
                    className="text-cyan-400"
                  />

                </div>

                <p>
                  Greater Noida, India
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-cyan-400/10 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Kewyword AI Solution.
            All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs sm:text-sm text-gray-400">

            <p className="group flex items-center gap-1 hover:text-cyan-400 cursor-pointer duration-300">

              <ChevronRight
                size={14}
                className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1"
              />

              Privacy Policy

            </p>

            <p className="group flex items-center gap-1 hover:text-cyan-400 cursor-pointer duration-300">

              <ChevronRight
                size={14}
                className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1"
              />

              Terms & Conditions

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}
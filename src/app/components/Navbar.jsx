"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">

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
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm lg:text-base text-slate-700 font-medium">

          <Link href="/">
            <li className="hover:text-cyan-500 cursor-pointer duration-300">
              Home
            </li>
          </Link>

          {/* Services Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >

            <div className="flex items-center gap-1 hover:text-cyan-500 cursor-pointer duration-300">
              Services
              <ChevronDown
                size={16}
                className={`duration-300 ${serviceOpen ? "rotate-180" : ""}`}
              />
            </div>

            {/* Dropdown */}
            <div
              className={`absolute top-10 left-0 w-64 rounded-2xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden duration-300 ${
                serviceOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >

              <div className="flex flex-col p-2">

                <Link href="/services/ai-web-development">
                  <p className="px-4 py-3 rounded-xl hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer duration-300">
                    AI Web Development
                  </p>
                </Link>

              </div>

            </div>

          </li>

          {/* <Link href="/about">
            <li className="hover:text-cyan-500 cursor-pointer duration-300">
              About
            </li>
          </Link>

          <Link href="/contact-us">
            <li className="hover:text-cyan-500 cursor-pointer duration-300">
              Contact
            </li>
          </Link> */}

        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block px-5 lg:px-6 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-medium duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20 cursor-pointer">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >

        <div className="px-6 pb-6 pt-4 flex flex-col gap-5 bg-white border-t border-slate-200 text-slate-700 font-medium">

          <Link href="/" onClick={() => setOpen(false)}>
            <p className="hover:text-cyan-500 cursor-pointer duration-300">
              Home
            </p>
          </Link>

          {/* Mobile Services */}
          <div>

            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="flex items-center justify-between w-full hover:text-cyan-500 duration-300"
            >

              <span>Services</span>

              <ChevronDown
                size={18}
                className={`transition duration-300 ${
                  serviceOpen ? "rotate-180" : ""
                }`}
              />

            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                serviceOpen ? "max-h-60 mt-3" : "max-h-0"
              }`}
            >

              <div className="flex flex-col gap-2 pl-4 border-l border-slate-200">

                <Link href="/services/ai-web-development">
                  <p
                    onClick={() => setOpen(false)}
                    className="py-2 text-sm hover:text-cyan-500 duration-300"
                  >
                    AI Web Development
                  </p>
                </Link>

              </div>

            </div>

          </div>

          {/* <Link href="/about" onClick={() => setOpen(false)}>
            <p className="hover:text-cyan-500 cursor-pointer duration-300">
              About
            </p>
          </Link>

          <Link href="/contact-us" onClick={() => setOpen(false)}>
            <p className="hover:text-cyan-500 cursor-pointer duration-300">
              Contact
            </p>
          </Link> */}

          <button className="mt-2 w-full py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-medium duration-300 shadow-lg shadow-cyan-500/20">
            Get Started
          </button>

        </div>

      </div>

    </nav>
  );
}
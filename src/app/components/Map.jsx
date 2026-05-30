"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LocationSection() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(pinRef.current, {
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full px-10 py-20 bg-black/5">

      {/* MAP */}
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">

        <iframe
          className="w-full h-full"
          loading="lazy"
          src="https://www.google.com/maps?q=B-03%20UGF%20Tower%204%20NX%20ONE%20Greater%20Noida&output=embed"
        />

        {/* Animated Pin */}
        <div
          ref={pinRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative flex items-center justify-center">
            <div className="w-6 h-6 bg-cyan-500 rounded-full animate-ping absolute"></div>
            <div className="w-4 h-4 bg-cyan-400 rounded-full shadow-lg"></div>
          </div>
        </div>

      
      </div>

     
    </section>
  );
}
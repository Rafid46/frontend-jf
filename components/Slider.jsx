"use client";
import { motion } from "framer-motion";
import React from "react";
const Slider = () => {
  const logos = ["/logo1.png", "/logo2.png", "/logo3.png", "/logo4.png"];
  const ticker = {
    animate: { x: ["0%", "-100%"] },
    transition: { x: { repeat: Infinity, duration: 40, ease: "linear" } },
  };
  return (
    <div className="relative overflow-hidden py-8 bg-white">
      {/* Left Blur */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      {/* Right Blur */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

      <motion.div
        className="flex w-[200px]"
        variants={ticker}
        animate="animate"
      >
        {[logos].map((src, idx) => (
          <div key={idx} className="w-40 flex-shrink-0 p-4">
            <img
              src={src}
              alt={`Logo ${idx}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;

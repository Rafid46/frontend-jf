"use client";

import React, { useState } from "react";
import left from "../public/assets/left.svg";
import right from "../public/assets/right.svg";
import quote from "../public/assets/quote.svg";
import success from "../public/assets/successful.png";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast (400ft.) Value for money and easy to install. Happy with the product",
    author: "Samuel Varughese",
  },
  {
    quote:
      "The quality exceeded my expectations. Customer service was also super responsive. Will definitely purchase again.",
    author: "Rita Menon",
  },
  {
    quote:
      "From ordering to installation, the experience was seamless. Highly recommended.",
    author: "Alam Chowdhury",
  },
];

export default function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <div className="mt-[65px] mb-[118px] max-w-[1280px] mx-auto">
      <p className="text-center text-[42px] font-[500] text-text_color leading-[100%] mb-[40px]">
        Why Customers Love ❤️ Us?
      </p>
      <div className="flex items-center justify-center gap-x-[40px]">
        {/* card */}
        <div className="w-[881px] h-[608px] bg-[#F2F4F6] rounded-[24px] flex flex-col justify-between">
          {/* Top quote icon */}
          <div className="text-[#A3D200] text-5xl  mb-[30px] max-w-[770px] max-h-[168px]  px-[60px] py-[70px]">
            <Image alt="jf" src={quote} width={82} height={82} />
            <p className="text-[#1A1A1A] text-[28px] leading-[150%] font-[400] ">
              {testimonial.quote}
            </p>
          </div>

          {/* Footer */}
          <div className="max-mt-[100px]  px-[20px] pb-[20px]">
            <div className="flex justify-between items-center customBackground rounded-[24px] px-[40px] py-[41px] max-w-[841px] max-h-[130px]">
              <p className="font-[600] text-text_color text-[32px] leading-[150%]">
                – {testimonial.author}
              </p>

              <div className="flex space-x-2">
                <button
                  onClick={handlePrev}
                  className="flex items-center justify-center hover:bg-gray-100 rounded-full transition"
                >
                  <Image alt="jf" src={left} width={51} height={51} />
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center justify-center hover:bg-gray-100 rounded-full transition  ml-[20px]"
                >
                  <Image alt="jf" src={right} width={51} height={51} />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="">
          <div className="bg-bg_gray rounded-[24px] w-[360px] h-[608px]">
            <div className="p-[20px]">
              <Image src={success} width={319} height={568} alt="jf" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

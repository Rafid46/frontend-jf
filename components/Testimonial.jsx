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
    <div className="mt-[65px] mb-[118px] max-w-[1280px] mx-auto px-4">
      <p className="text-center text-[32px] md:text-[42px] font-[500] text-text_color leading-[100%] mb-[40px]">
        Why Customers Love ❤️ Us?
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-y-[30px] lg:gap-x-[40px]">
        {/* Testimonial Card */}
        <div className="w-full max-w-[881px] h-auto lg:h-[608px] bg-[#F2F4F6] rounded-[24px] flex flex-col justify-between">
          {/* Quote */}
          <div className="text-[#A3D200] text-5xl mb-[30px] px-[30px] md:px-[60px] pt-[40px] md:pt-[70px]">
            <Image alt="quote" src={quote} width={82} height={82} />
            <p className="text-[#1A1A1A] text-[18px] md:text-[28px] leading-[150%] font-[400] mt-[20px]">
              {testimonial.quote}
            </p>
          </div>

          {/* Footer */}
          <div className="px-[20px] pb-[20px]">
            <div className="flex flex-col md:flex-row justify-between items-center customBackground rounded-[24px] px-[30px] md:px-[40px] py-[30px] md:py-[41px] w-full">
              <p className="font-[600] text-text_color text-[20px] md:text-[32px] text-center md:text-left mb-4 md:mb-0 leading-[150%]">
                – {testimonial.author}
              </p>

              <div className="flex space-x-2">
                <button
                  onClick={handlePrev}
                  className="flex items-center justify-center hover:bg-gray-100 rounded-full transition"
                >
                  <Image alt="left arrow" src={left} width={51} height={51} />
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center justify-center hover:bg-gray-100 rounded-full transition ml-[10px]"
                >
                  <Image alt="right arrow" src={right} width={51} height={51} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Side Image */}
        <div className="w-full max-w-[360px] h-auto lg:h-[608px] bg-bg_gray rounded-[24px]">
          <div className="p-[20px]">
            <Image
              src={success}
              width={319}
              height={568}
              alt="Success illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

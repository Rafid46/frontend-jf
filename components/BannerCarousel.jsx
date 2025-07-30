"use client";

import { useState, React } from "react";
import banner1 from "../public/assets/banner1.png";
import leftArrow from "../public/assets/leftArrow.svg";
import rightArrow from "../public/assets/rightArrow.svg";
import logo from "../public/assets/logo.png";
import Image from "next/image";
import Button from "@/common/Button";

const testimonials = [
  {
    id: 1,
    title: "JF Privezy Grass Wall",
    description: "The perfact Blend of Greenery",
    image: banner1,
  },
  {
    id: 2,
    title: "JF Privezy Grass Wall",
    description: "The perfact Blend of Greenery",
    image: banner1,
  },
  {
    id: 3,
    title: "JF Privezy Grass Wall",
    description: "The perfact Blend of Greenery",
    image: banner1,
  },
];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="overflow-hidden">
      <div className="absolute left-1/2 top-[98px] -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10">
        <Image className="" src={logo} alt="Logo" width={132.1} height={150} />
      </div>

      <section className="max-w-[1280px] h-auto lg:h-[678px] mx-auto relative px-4 sm:px-6 lg:px-0">
        <div
          className="flex transition-transform duration-700 ease-in-out gap-x-[20px]"
          style={{
            width: `${testimonials.length * 100}%`,
            transform: `translateX(-${
              currentIndex * (100 / testimonials.length)
            }%)`,
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="w-[400px] sm:w-full lg:w-[1280px] flex-shrink-0 bg-[#F2F4F6] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden flex flex-col lg:flex-row"
            >
              {/* Image */}
              <div className="relative p-[16px] sm:p-[20px] lg:p-[20px] w-full lg:w-1/2 h-[200px] sm:h-[220px] lg:h-auto">
                <Image
                  src={item.image}
                  alt="JF"
                  className="object-cover rounded-[12px] sm:rounded-[16px] lg:rounded-[24px] w-full h-full"
                  priority
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 p-[20px] sm:p-[24px] lg:p-12 flex flex-col justify-center">
                <h1 className="text-[24px] sm:text-[28px] lg:text-[62px] text-[#1A1A1A] font-[500] leading-[28px] sm:leading-[32px] lg:leading-[72px] mb-[16px] sm:mb-[18px] lg:mb-[20px]">
                  {item.title}
                </h1>
                <p className="text-[16px] sm:text-[18px] lg:text-[24px] text-[#1A1A1A] font-[400] leading-[22px] sm:leading-[24px] lg:leading-[32px] mb-[20px] sm:mb-[24px] lg:mb-0">
                  {item.description}
                </p>
                <div className="mt-0 sm:mt-[20px] lg:mt-[50px]">
                  <Button
                    text="Shop now"
                    className="text-[16px] sm:text-[17px] lg:text-[18px] font-[500] leading-[100%] w-full sm:w-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 lg:-left-[27px] top-1/2 -translate-y-1/2 p-[12px] sm:p-[14px] lg:p-[16px] w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] lg:w-[64px] lg:h-[64px] rounded-full bg-[#B0DD1D] z-10 flex items-center justify-center"
        >
          <Image
            width={24}
            height={24}
            src={leftArrow}
            alt="Previous"
            className="object-cover sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px]"
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 lg:-right-[60px] top-1/2 -translate-y-1/2 p-[12px] sm:p-[14px] lg:p-[16px] w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] lg:w-[64px] lg:h-[64px] rounded-full bg-[#B0DD1D] z-10 flex items-center justify-center"
        >
          <Image
            width={24}
            height={24}
            src={rightArrow}
            alt="Next"
            className="object-cover sm:w-[28px] sm:h-[28px] lg:w-[32px] lg:h-[32px]"
          />
        </button>

        <div className="flex justify-center mt-6 lg:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${
                index === currentIndex ? "bg-[#B0DD1D]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BannerCarousel;

"use client";

import { useState } from "react";
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
      {/* Center Logo */}
      <div className="absolute left-1/2 top-[98px] -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10">
        <Image className="" src={logo} alt="Logo" width={132.1} height={150} />
      </div>
      <section className="max-w-[1280px] h-[678px] mx-auto relative">
        <div
          className="flex transition-transform duration-700 ease-in-out gap-x-[20px]"
          style={{
            width: `${testimonials.length * 100}%`,
            transform: `translateX(-${
              currentIndex * (100 / testimonials.length)
            }%)`,
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className="w-full lg:w-[1280px] flex-shrink-0 bg-[#F2F4F6] rounded-[24px] overflow-x-hidden flex flex-col lg:flex-row"
            >
              {/* Image */}
              <div className="relative p-[20px] w-full lg:w-1/2">
                <Image
                  src={item.image}
                  alt="JF"
                  className="object-cover rounded-[24px]"
                  priority
                />
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center ">
                <h1 className="text-[62px] text-[#1A1A1A] font-[500] leading-[72px] mb-[20px]">
                  {item.title}
                </h1>
                <p className="text-[24px] text-[#1A1A1A] font-[400] leading-[32px]">
                  {item.description}
                </p>
                <div className="mt-[50px]">
                  <Button
                    text="Shop now"
                    className="text-[18px] font-[500] leading-[100%]"
                  />
                  {/* <button className="bg-primary_color hover:bg-lime-600 text-[#1A1A1A] text-[18px] font-[500] px-8 py-4 rounded-full">
                    Shop Now
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nav Buttons */}
        <button
          onClick={prevSlide}
          className="absolute -left-[27px] top-1/2 -translate-y-1/2 p-[16px] w-[64px] h-[64px] rounded-full bg-[#B0DD1D] z-10"
        >
          <Image
            width={32}
            height={32}
            src={leftArrow}
            alt="JF"
            className="object-cover"
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-[60px] top-1/2 -translate-y-1/2 p-[16px] w-[64px] h-[64px] rounded-full bg-[#B0DD1D] z-10"
        >
          <Image
            width={32}
            height={32}
            src={rightArrow}
            alt="JF"
            className="object-cover"
          />
        </button>
      </section>
    </div>
  );
};

export default BannerCarousel;

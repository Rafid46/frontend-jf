"use client";
import React, { useState } from "react";
import Image from "next/image";
import Card from "@/common/Card";

import land1 from "../public/assets/land1.png";
import land2 from "../public/assets/land2.png";
import land3 from "../public/assets/land3.png";
import land4 from "../public/assets/land4.png";
import leftArrow from "../public/assets/arrowLeft.png";
import rightArrow from "../public/assets/arrowRight.png";

const products = [
  {
    id: 1,
    title: "Antiqo Fence",
    price: "₹10,024.00 – ₹14,984.82",
    image: land1,
  },
  {
    id: 2,
    title: "JF Australian Trellis",
    price: "₹6,962.00",
    image: land2,
  },
  {
    id: 3,
    title: "JF Polyhex Mesh",
    price: "₹4,050.00 – ₹10,770.00",
    image: land3,
  },
  {
    id: 4,
    title: "JF Privezy Grass Wall",
    price: "₹1,646.10 – ₹18,284.10",
    image: land4,
  },
  {
    id: 5,
    title: "Antiqo Fence",
    price: "₹10,024.00 – ₹14,984.82",
    image: land1,
  },
];

const LandScapeProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products?.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products?.length) % products?.length);
  };
  return (
    <div className="max-w-[1280px] mx-auto relative mt-[110px]">
      <p className="font-[500] text-[42px] text-text_color leading-[100%] mb-[30px]">
        Landscape Products
      </p>

      <button
        onClick={prevSlide}
        className="absolute w-[47px] h-[47px]  z-10 -left-[20px] top-1/2 -translate-y-1/2  md:w-12 md:h-12 flex items-center justify-center bg-white border border-text_color rounded-full p-[13.5px]"
      >
        <Image src={leftArrow} alt="prev" width={20} height={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute z-10 right-0 top-1/2 -translate-y-1/2  w-[47px] h-[47px]  md:w-12 md:h-12 flex items-center justify-center bg-white border border-text_color rounded-full p-[13.5px]"
      >
        <Image src={rightArrow} alt="next" width={20} height={20} />
      </button>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-x-[10px]"
          style={{
            width: `${products.length * 100}%`,
            transform: `translateX(-${
              currentIndex * (100 / products.length)
            }%)`,
          }}
        >
          {products.map((product) => (
            <div key={product.id}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandScapeProduct;

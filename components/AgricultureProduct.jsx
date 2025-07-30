"use client";
import React, { useState } from "react";
import Image from "next/image";
import Card from "@/common/Card";

import agri1 from "../public/assets/agri1.png";
import agri2 from "../public/assets/agri2.png";
import agri3 from "../public/assets/agri3.png";
import agri4 from "../public/assets/agri4.png";
import leftArrow from "../public/assets/arrowLeft.png";
import rightArrow from "../public/assets/arrowRight.png";

const products = [
  { id: 1, title: "JF Barbed Wire- 270 GSM", price: "₹4,995.00", image: agri1 },
  {
    id: 2,
    title: "FGC RustFree Fencing Poles",
    price: "₹499.00 – ₹1,589.00",
    image: agri2,
  },
  {
    id: 3,
    title: "GI Poultry Mesh",
    price: "₹1,260.00 – ₹10,750.00",
    image: agri3,
  },
  {
    id: 4,
    title: "JF Bluelink Mesh",
    price: "₹3,067.50 – ₹6,362.50",
    image: agri4,
  },
  {
    id: 5,
    title: "Premium Chain Link Fence",
    price: "₹2,450.00",
    image: agri1,
  },
];

const AgricultureProduct = () => {
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

export default AgricultureProduct;

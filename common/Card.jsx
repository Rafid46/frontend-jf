/* eslint-disable react/prop-types */
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Card = ({ product }) => {
  return (
    <div className="w-[305px] h-[383px]">
      <div className="flex transition-transform duration-300 ease-in-out  rounded-[18px]">
        <div className="">
          <div className="bg-bg_gray rounded-[18px] transition-shadow duration-300">
            {/* Product Image */}
            <div className="p-[10px]">
              <div className="relative">
                <Image
                  width={285}
                  height={220}
                  src={product?.image}
                  alt="jf"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-[20px] mx-[20px]">
              {/* Product Title */}
              <h3 className="text-[18px] font-[600] text-text_color mb-[10px] leading-[140%]">
                {product?.title}
              </h3>
              {/* Price */}
              <div className="text-[rgba(26,26,26,0.5)] text-opacity-20 text-[14px] font-[500] leading-[140%] mt-[10px]">
                {product?.price}
              </div>
              {/* Shop Now Button */}
              <Button
                text={"Shop now"}
                className="my-[20px] py-[12] px-[30.5]  font-[500] leading-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

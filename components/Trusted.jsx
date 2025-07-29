import React from "react";
import icon1 from "../public/assets/star.svg";
import icon2 from "../public/assets/smile.svg";
import icon3 from "../public/assets/car.svg";
import Image from "next/image";
const Trusted = () => {
  return (
    <div>
      <div className="w-[1280px] h-[332px] flex items-center justify-center mx-auto mt-[100px] mb-[100px]">
        <div className="rounded-[24px] bg-[radial-gradient(at_bottom_center,_#1e40af,_#002B55)] text-white text-center">
          <h2 className="mt-[80px] text-[42px] font-[500] text-white tracking-normal leading-[100%] px-[310px]">
            Trusted by over 6K+ customers
          </h2>

          <div className="flex items-center justify-between mx-[177px] mt-[50px] mb-[80px]">
            <div className="flex items-center">
              <div className="w-[80px] h-[80px] sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mr-[20px]">
                <Image alt="jf" width={42.02} height={42.02} src={icon1} />
              </div>
              <div className="flex items-start flex-col">
                <p className="text-[28px] !font-[500] text-white tracking-normal leading-[100%] mb-[8px]">
                  Premium <br />
                </p>
                <p className="!text-[22px] !font-[400] text-white !tracking-normal !leading-[100%]">
                  Products
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-[80px] h-[80px] sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mr-[20px]">
                <Image alt="jf" width={42.02} height={42.02} src={icon2} />
              </div>
              <div className="flex items-start flex-col">
                <p className="text-[28px] !font-[500] text-white tracking-normal leading-[100%] mb-[8px]">
                  4000+ <br />
                </p>
                <p className="!text-[22px] !font-[400] text-white !tracking-normal !leading-[100%]">
                  Google reviews
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-[80px] h-[80px] sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mr-[20px]">
                <Image alt="jf" width={42.02} height={42.02} src={icon3} />
              </div>
              <div className="flex items-start flex-col">
                <p className="text-[28px] !font-[500] text-white tracking-normal leading-[100%] mb-[8px]">
                  Delivery <br />
                </p>
                <p className="!text-[22px] !font-[400] text-white !tracking-normal !leading-[100%]">
                  Across India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mx-auto">
        <p className="text-[42px] !font-[500] text-text_color tracking-normal leading-[100%] mb-[30px]">
          Why Us
        </p>
        <p className="text-[20px] !font-[400] text-text_color tracking-normal leading-[150%] text-center">
          We specialize in delivering durable and innovative fencing solutions
          built to last. With <br /> a focus on quality and trust, we help
          secure spaces across industries and <br />{" "}
          <span className="">communities.</span>
        </p>
      </div>
    </div>
  );
};

export default Trusted;

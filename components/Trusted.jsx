import React from "react";
import icon1 from "../public/assets/star.svg";
import icon2 from "../public/assets/smile.svg";
import icon3 from "../public/assets/car.svg";
import Image from "next/image";
const Trusted = () => {
  return (
    <div>
      <div className="w-full max-w-[1280px] h-auto lg:h-[332px] flex flex-col lg:flex-row items-center justify-center mx-auto mt-[100px] mb-[100px] px-4">
        <div className="w-full rounded-[24px] bg-[radial-gradient(at_bottom_center,_#1e40af,_#172554)] text-white text-center py-10">
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-[500] text-white tracking-normal leading-[120%] px-4 md:px-[100px] lg:px-[310px]">
            Trusted by over 6K+ customers
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:justify-between mx-4 md:mx-[60px] lg:mx-[177px] mt-[40px] mb-[40px]">
            {/* Card 1 */}
            <div className="flex items-center">
              <div className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] bg-white rounded-full flex items-center justify-center mr-[16px] md:mr-[20px]">
                <Image alt="jf" width={42.02} height={42.02} src={icon1} />
              </div>
              <div className="flex items-start flex-col text-left">
                <p className="text-[22px] md:text-[26px] lg:text-[28px] font-[500] text-white mb-[6px] leading-snug">
                  Premium <br />
                </p>
                <p className="text-[18px] md:text-[20px] lg:text-[22px] font-[400] text-white leading-snug">
                  Products
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center">
              <div className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] bg-white rounded-full flex items-center justify-center mr-[16px] md:mr-[20px]">
                <Image alt="jf" width={42.02} height={42.02} src={icon2} />
              </div>
              <div className="flex items-start flex-col text-left">
                <p className="text-[22px] md:text-[26px] lg:text-[28px] font-[500] text-white mb-[6px] leading-snug">
                  4000+ <br />
                </p>
                <p className="text-[18px] md:text-[20px] lg:text-[22px] font-[400] text-white leading-snug">
                  Google reviews
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center">
              <div className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] bg-white rounded-full flex items-center justify-center mr-[16px] md:mr-[20px]">
                <Image alt="jf" width={42.02} height={42.02} src={icon3} />
              </div>
              <div className="flex items-start flex-col text-left">
                <p className="text-[22px] md:text-[26px] lg:text-[28px] font-[500] text-white mb-[6px] leading-snug">
                  Delivery <br />
                </p>
                <p className="text-[18px] md:text-[20px] lg:text-[22px] font-[400] text-white leading-snug">
                  Across India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mx-auto px-4">
        <p className="text-[28px] md:text-[36px] lg:text-[42px] font-[500] text-text_color tracking-normal leading-[120%] mb-[24px] text-center">
          Why Us
        </p>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-[400] text-text_color tracking-normal leading-[150%] text-center">
          We specialize in delivering durable and innovative fencing solutions
          built to last.
          <br className="hidden md:block" />
          With a focus on quality and trust, we help secure spaces across
          industries and
          <br className="hidden md:block" />
          <span className="">communities.</span>
        </p>
      </div>
    </div>
  );
};

export default Trusted;

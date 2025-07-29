import React from "react";
import logo from "../public/assets/Vector.svg";
import Image from "next/image";
const RibonSlider = () => {
  const companies = [
    {
      id: 1,
      name: "Quality product",
      logo: logo,
    },
    { id: 2, name: "shipping across India", logo: logo },
    { id: 3, name: "shipping across India", logo: logo },
    { id: 4, name: "shipping across India", logo: logo },
  ];

  return (
    <div className="relative mb-[280px]">
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Top Ribbon - Left to Right */}
      <div className="absolute inset-0 transform -rotate-3 origin-center">
        <div className="bg-[#D9ECFF] border-[#1A1A1A] border-[1px] flex items-center justify-center overflow-hidden w-full mx-auto">
          <div className="flex items-center space-x-8 md:space-x-12 animate-scroll-right my-[25px]">
            {companies.map((company) => (
              <div
                key={company?.id}
                className="flex items-center transition-all duration-300 w-full gap-x-[40px]"
              >
                <Image
                  src={company?.logo}
                  alt={company.name}
                  width={76}
                  height={40}
                  className="transition-opacity !mr-[40px]"
                />
                <p className="min-w-[350px] text-[32px] font-[500] leading-[100%] text-[#002B55] !mr-[40px]">
                  {company?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RibonSlider;

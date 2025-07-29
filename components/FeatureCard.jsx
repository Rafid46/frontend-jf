import React from "react";
import feature1 from "../public/assets/why1.svg";
import feature2 from "../public/assets/why2.svg";
import feature3 from "../public/assets/why3.svg";
import Button from "@/common/Button";
import Image from "next/image";
const FeatureCard = () => {
  const features = [
    {
      id: 1,
      icon: feature1,
      title: "Unmatched Durability with Corrosion-Free Technology",
      description:
        "Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity.",
      isDark: false,
    },
    {
      id: 2,
      icon: feature3,
      title: "Customer-Centric Approach",
      description:
        "At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.",
      isDark: true, // This card will have the dark gradient
    },
    {
      id: 3,
      icon: feature2,
      title: "Innovative and Diverse Product Range",
      description:
        "We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.",
      isDark: false,
    },
  ];
  return (
    <div className="max-w-[1280px] mx-auto mt-[40px]">
      <section className="">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-[40px]">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`
                    ${
                      (feature?.id === 1 || feature?.id === 3) && "mt-[60px]"
                    } p-[40px] rounded-[24px] space-x-[40px] w-[400px] h-[500px] text-white bg-[radial-gradient(ellipse_at_top_right,_#1B7FE1_1%,_#002B55_100%)]`}
              >
                <div className="">
                  <Image alt="jf" width={49} height={70} src={feature?.icon} />
                  <h3 className="text-[26px] font-[500] text-white leading-[130%] mt-[31px] mb-[20px]">
                    {feature.title}
                  </h3>
                  <p className="text-[17px] font-[400] text-white leading-[150%] !mb-[50px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[30px] text-center">
          <Button
            className="font-[500] text-[18px] leading-[100%] text-text_color bg-primary_color py-[16px] px-[32px]"
            text={"Contact Us"}
          />
        </div>
      </section>
    </div>
  );
};

export default FeatureCard;

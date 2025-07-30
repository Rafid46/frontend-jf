"use client";
import { useState, React } from "react";
import Image from "next/image";
import Button from "@/common/Button";
import coimbatore from "../public/branches/one.svg";
import chennai from "../public/branches/two.svg";
import hyderabad from "../public/branches/three.svg";
import goa from "../public/branches/four.svg";
import kochi from "../public/branches/five.svg";
import mumbai from "../public/branches/six.svg";
import map from "../public/assets/MAP.png";
import location from "../public/assets/location.svg";
const OurBranch = () => {
  const branches = [
    {
      id: "coimbatore",
      name: "Coimbatore",
      icon: coimbatore,
      address:
        "JRR Towers (2nd Floor), Pattalamma Temple Rd, Basavangudi, Bangalore, 560004",
    },
    {
      id: "chennai",
      name: "Chennai",
      icon: chennai,
      address: "No. 10, Anna Salai, Guindy, Chennai, Tamil Nadu 600032",
    },
    {
      id: "hyderabad",
      name: "Hyderabad",
      icon: hyderabad,
      address:
        "Plot No. 123, Hitech City Rd, Gachibowli, Hyderabad, Telangana 500032",
    },
    {
      id: "goa",
      name: "Goa",
      icon: goa,
      address: "House No. 45, Calangute Beach Rd, Calangute, Goa 403516",
    },
    {
      id: "kochi",
      name: "Kochi",
      icon: kochi,
      address: "Door No. 789, Marine Drive, Ernakulam, Kochi, Kerala 682011",
    },
    {
      id: "mumbai",
      name: "Mumbai",
      icon: mumbai,
      address:
        "Office No. 56, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051",
    },
  ];

  const [selectedBranchId, setSelectedBranchId] = useState(branches[0].id);

  const currentAddress =
    branches.find((branch) => branch.id === selectedBranchId)?.address ||
    branches.address;

  return (
    <div className="max-w-[1280px] mx-auto mb-[110px]">
      <div className="border border-[#002B5533] relative rounded-[24px]">
        {/* Our Branches Section */}
        <div className="flex flex-col items-center mt-[38px] mb-[20px]">
          <div className="bg-[#E0FFB3] text-[#66CC00] text-sm font-semibold px-4 py-2 rounded-full absolute -top-[16px]">
            OUR BRANCHES
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-8">
            {branches?.map((branch) => {
              const isSelected = branch.id === selectedBranchId;
              return (
                <div className="w-[116px] h-[104px]" key={branch.id}>
                  <button
                    key={branch.id}
                    className={`flex flex-col items-center p-2 rounded-lg transition-colors duration-200 w-[116px] h-[104px] ${
                      isSelected
                        ? "bg-[#F7FCE8] border border-[#B0DD1D]"
                        : "border border-transparent"
                    }`}
                    onClick={() => setSelectedBranchId(branch.id)}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-center justify-center w-[116px] h-[104px]">
                      <Image
                        src={branch.icon}
                        alt={`${branch.name} icon`}
                        width={40}
                        height={40}
                        className={`${
                          isSelected ? "opacity-100" : "opacity-70"
                        }`}
                      />
                    </div>

                    <span
                      className={`text-sm font-medium mt-2 text-text_color`}
                    >
                      {branch.name}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Form and Map Section */}
        <div className="flex items-center justify-center gap-x-[20px]">
          {/* Contact Form */}
          <div className="bg-[#002B55]  rounded-[24px] shadow-lg w-[540px] h-[642px] px-[50px]">
            <h2 className="text-[38px] font-[500] leading-[100%] text-white my-[30px]">
              Contact Us
            </h2>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Your Name"
                className="mb-[20px] w-[440px] h-[60px] bg-white/10 rounded-[24px] border-none text-white placeholder:font-[400] leading-[100%] placeholder:text-white placeholder:text-[20px] pl-[30px] focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Email"
                className="mb-[20px] w-[440px] h-[60px] bg-white/10 rounded-[24px] border-none text-white placeholder:font-[400] leading-[100%] placeholder:text-white placeholder:text-[20px] pl-[30px] focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Phone *"
                className="mb-[20px] w-[440px] h-[60px] bg-white/10 rounded-[24px] border-none text-white placeholder:font-[400] leading-[100%] placeholder:text-white placeholder:text-[20px] pl-[30px] focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Write Message"
                className="mb-[20px] w-[440px] h-[134px] bg-white/10 rounded-[24px] border-none text-white placeholder:font-[400] leading-[100%] placeholder:text-white placeholder:text-[20px] pl-[30px] 
                pt-[20px] pb-[94px]  focus:ring-2 focus:ring-white"
              />

              <Button
                text="Submit"
                className="my-[50px] w-fit bg-primary_color hover:bg-[#52A300] text-text_color text-[18px] font-[500] py-[16px] px-[32px] rounded-full transition-colors duration-200"
              />
            </form>
          </div>

          {/* Map and Address */}
          <div className="relative rounded-[24px] w-[700px] h-[642px]">
            <Image
              fill
              src={map}
              alt="Map of the branch location"
              objectFit="cover rounded-[24px]"
            />
            <div className="w-[680px] h-[116px] absolute bottom-4 left-4 right-4 bg-white rounded-[24px] shadow-md flex items-center py-[35px] px-[35px]">
              <Image
                alt="jf"
                width={47}
                height={47}
                src={location}
                className="rounded-[24px] mr-[30px]"
              />
              <p className="text-text_color font-[600] text-[18px]">
                {currentAddress}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBranch;

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
      <div className="border border-[#002B5533] relative rounded-[24px] bg-[#F2F4F6] pb-[10px]">
        <div className="flex flex-col items-center relative mb-[40px]">
          <div className="bg-[#E0FFB3] text-[#66CC00] text-sm font-semibold px-4 py-2 rounded-full absolute -top-[18px]">
            OUR BRANCHES
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-[33px]">
            {branches?.map((branch) => {
              const isSelected = branch.id === selectedBranchId;
              return (
                <button
                  key={branch.id}
                  className={`flex flex-col items-center justify-center w-[116px] h-[104px] p-2 rounded-lg transition-colors duration-200 ${
                    isSelected
                      ? "bg-[#F7FCE8] border border-[#B0DD1D]"
                      : "border border-transparent"
                  }`}
                  onClick={() => setSelectedBranchId(branch.id)}
                  aria-pressed={isSelected}
                >
                  <Image
                    src={branch.icon}
                    alt={`${branch.name} icon`}
                    width={40}
                    height={40}
                    className={`${isSelected ? "opacity-100" : "opacity-70"}`}
                  />
                  <span className="text-sm font-medium mt-2 text-text_color">
                    {branch.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Contact Form and Map */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[20px] px-4 md:px-8">
          {/* Contact Form */}
          <div className="bg-[#002B55] rounded-[24px] shadow-lg w-full max-w-[540px] h-auto px-[24px] md:px-[40px] py-[30px]">
            <h2 className="text-[28px] md:text-[32px] lg:text-[38px] font-[500] text-white mb-[24px]">
              Contact Us
            </h2>
            <form className="flex flex-col">
              {["Your Name", "Email", "Phone *"].map((placeholder, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={placeholder}
                  className="mb-[16px] w-full h-[50px] md:h-[60px] bg-white/10 rounded-[24px] border-none text-white placeholder:font-[400] placeholder:text-white placeholder:text-[18px] md:placeholder:text-[20px] pl-[20px] focus:ring-2 focus:ring-white"
                />
              ))}
              <textarea
                placeholder="Write Message"
                className="mb-[16px] w-full h-[120px] md:h-[134px] bg-white/10 rounded-[24px] border-none text-white placeholder:font-[400] placeholder:text-white placeholder:text-[18px] md:placeholder:text-[20px] px-[20px] pt-[16px] focus:ring-2 focus:ring-white resize-none"
              />
              <Button
                text="Submit"
                className="mt-[24px] md:mt-[40px] w-fit bg-primary_color hover:bg-[#52A300] text-text_color text-[16px] md:text-[18px] font-[500] py-[12px] md:py-[16px] px-[24px] md:px-[32px] rounded-full transition-colors duration-200"
              />
            </form>
          </div>

          {/* Map Card */}
          <div className="relative w-full max-w-[700px] h-[350px] md:h-[500px] lg:h-[642px] rounded-[24px] mt-[24px] lg:mt-0">
            <Image
              fill
              src={map}
              alt="Map of the branch location"
              className="rounded-[24px] object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-[24px] shadow-md flex flex-col md:flex-row items-start md:items-center py-[20px] md:py-[35px] px-[20px] md:px-[35px] gap-4">
              <Image
                alt="jf"
                width={47}
                height={47}
                src={location}
                className="rounded-[24px]"
              />
              <p className="text-text_color font-[600] text-[16px] md:text-[18px]">
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

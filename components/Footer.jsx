import Button from "@/common/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../public/assets/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="bg-[#002B55] max-w-[1820] mx-[20px] text-white rounded-[24px] overflow-hidden">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 my-[104px] px-[270px]">
          <div className="col-span-1 lg:col-span-2 mr-[174px]">
            <h3 className="text-[32px] leading-[100%] font-[500] mb-[16px]">
              Join Our JF Products
            </h3>
            <p className="text-white font-[400] text-[20px] leading-[100%] mb-[40px]">
              We'll tell you about store updates and discounts
            </p>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="mb-[27px] w-[550px] h-[60px] rounded-[24px] bg-white/10 border-none text-white placeholder:text-white placeholder:text-[20px] placeholder:font-[400] px-[20px] pl-[30px] focus:ring-2 focus:ring-white"
              />
              <div className="flex items-center space-x-2 mb-[43px] ">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="data-[state=checked]:text-[#002B55]"
                />
                <label
                  htmlFor="newsletter"
                  className="text-[18px] font-[400] text-white leading-[100%] cursor-pointer"
                >
                  Yes, subscribe me to your newsletter.
                </label>
              </div>
              <Button
                text="Join Now"
                className="w-[550px] !bg-white hover:bg-gray-100 text-text_color font-[500] text-[18px] leading-[100%] py-3 rounded-lg transition-colors duration-200"
              />
            </div>
          </div>

          <div className="">
            <h3 className="text-[32px] font-[500] leading-[100%] mb-[40px]">
              Information
            </h3>
            <ul className="space-y-[30px] text-[20px] font-[400] text-white leading-[100%]">
              <li>
                <Link href="#" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-[32px] font-[500] leading-[100%] mb-[40px]">
              Helpful
            </h3>
            <ul className="space-y-[30px] text-[20px] font-[400] text-white leading-[100%]">
              <li>
                <Link href="#" className="">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col md:flex-row items-center justify-between mt-8 pt-8 ">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <Image
                src={logo}
                alt="JF Products Logo"
                width={132.1}
                height={150}
                className="rounded-full mr-[50px]"
              />
              <div className="font-[600] text-[20px]">
                <p className="">Our Branches</p>
                <p className="font-[400]">
                  Coimbatore, Chennai, Hyderabad, Goa, Kochi
                </p>
              </div>
            </div>
            <Button
              text="Contact Us"
              className="bg-[#66CC00] hover:bg-[#52A300] text-text_color font-bold py-[16px] px-[32px] rounded-full transition-colors duration-200"
            />
          </div>
        </div>
      </footer>
      {/* Copyright*/}
      <div className="max-w-[1281] mx-auto flex flex-col sm:flex-row items-center justify-between text-text_color py-[40px]">
        <p className="text-[18px] font-[400] leading-[100%] mb-2 sm:mb-0">
          Copyright © 2025 JF Products. All rights reserved
        </p>
        <div className="flex space-x-4">
          <Link
            href="#"
            aria-label="Facebook"
            className="bg-[#F2F4F6] px-[15px] py-[15px] rounded-full hover:bg-gray-600 transition-colors duration-200"
          >
            <FaFacebookF className="w-5 h-5 text-text_color" />
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="bg-[#F2F4F6] px-[15px] py-[15px] rounded-full hover:bg-gray-600 transition-colors duration-200"
          >
            <FaInstagram className="w-5 h-5 text-text_color" />
          </Link>
          <Link
            href="#"
            aria-label="Youtube"
            className="bg-[#F2F4F6] px-[15px] py-[15px] rounded-full hover:bg-gray-600 transition-colors duration-200"
          >
            <IoLogoYoutube className="w-5 h-5 text-text_color" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

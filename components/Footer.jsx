/* eslint-disable react/no-unescaped-entities */
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
      <div className="bg-[#002B55] max-w-[1820px] mx-auto text-white rounded-[24px] overflow-hidden px-[20px]">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-[104px] px-5 lg:px-[120px]">
          {/* Newsletter */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-[32px] font-medium mb-4">
              Join Our JF Products
            </h3>
            <p className="text-[20px] font-normal mb-10">
              We'll tell you about store updates and discounts
            </p>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-[550px] h-[60px] rounded-[24px] bg-white/10 border-none text-white placeholder:text-white placeholder:text-[20px] px-[30px] focus:ring-2 focus:ring-white"
              />
              <div className="flex items-start gap-3 mb-8">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="accent-[#66CC00] w-5 h-5 mt-1"
                />
                <label
                  htmlFor="newsletter"
                  className="text-[18px] font-[400] cursor-pointer"
                >
                  Yes, subscribe me to your newsletter.
                </label>
              </div>
              <Button
                text="Join Now"
                className="w-full max-w-[550px] !bg-white hover:bg-gray-100 text-[#002B55] font-[500] text-[18px] py-3 rounded-lg transition-colors duration-200"
              />
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-[32px] font-[500] mb-[40px]">Information</h3>
            <ul className="space-y-[30px] text-[20px] font-[400]">
              {["Home", "Shop", "Our Story", "Blogs", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful */}
          <div>
            <h3 className="text-[32px] font-[500] mb-[40px]">Helpful</h3>
            <ul className="space-y-[30px] text-[20px] font-[400]">
              {[
                "FAQs",
                "Terms & Conditions",
                "Privacy Policy",
                "Shipping Policy",
                "My Account",
              ].map((item) => (
                <li key={item}>
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 px-5 lg:px-[120px] flex flex-col md:flex-row items-center justify-between gap-4 py-10">
          <div className="flex items-center gap-6">
            <Image
              src={logo}
              alt="JF Products Logo"
              width={132}
              height={150}
              className="rounded-full"
            />
            <div className="font-semibold text-[20px]">
              <p>Our Branches</p>
              <p className="font-normal">
                Coimbatore, Chennai, Hyderabad, Goa, Kochi
              </p>
            </div>
          </div>
          <Button
            text="Contact Us"
            className="bg-[#66CC00] hover:bg-[#52A300] text-white font-bold py-4 px-8 rounded-full transition-colors duration-200"
          />
        </div>
      </div>

      <div className="max-w-[1281px] mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-[40px]">
        <p className="text-[18px] text-text_color font-[400] mb-2 sm:mb-0">
          Copyright © 2025 JF Products. All rights reserved
        </p>
        <div className="flex space-x-4">
          {[FaFacebookF, FaInstagram, IoLogoYoutube].map((Icon, idx) => (
            <Link
              key={idx}
              href="#"
              className="bg-[#F2F4F6] p-[15px] rounded-full hover:bg-gray-600 transition-colors duration-200"
              aria-label="Social"
            >
              <Icon className="w-5 h-5 text-text_color" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

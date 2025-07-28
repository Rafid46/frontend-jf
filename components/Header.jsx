"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import search from "../public/assets/user.svg";
import user from "../public/assets/Frame.svg";
import cart from "../public/assets/cart.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div>
      <header>
        <div className="px-4 mx-auto max-w-[1280px] sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between lg:rounded-md lg:h-24 lg:px-8 lg:py-[35px]">
            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex p-2 ml-2 text-black transition-all duration-200 rounded-md lg:hidden"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
            {/* Left Nav Links */}
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              {["Home", "Shop", "Blog", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[18px] font-[400] text-[rgb(26,26,26)] transition hover:text-blue-600"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 top-[60px] -translate-x-1/2 -translate-y-1/2 hidden lg:block">
              <Image src={logo} alt="Logo" width={100} height={40} />
            </div>

            {/* Right Auth Buttons */}
            <div className="hidden lg:flex lg:items-center">
              <a
                href="#"
                className="text-[18px] font-[400] text-[rgb(26,26,26)] hover:text-blue-600 mr-[10px]"
              >
                Login
              </a>
              <a
                href="#"
                className="text-[18px] font-[400] text-[rgb(26,26,26)] hover:text-blue-600 mr-[53px]"
              >
                <Image src={user} alt="user" width={24} height={24} />
              </a>
              <a
                href="#"
                className="text-[18px] font-[400] text-[rgb(26,26,26)] hover:text-blue-600 mr-[53px]"
              >
                <Image src={search} alt="user" width={24} height={24} />
              </a>
              <a
                href="#"
                className="text-[18px] font-[400] text-[rgb(26,26,26)] hover:text-blue-600"
              >
                <Image src={cart} alt="user" width={24} height={24} />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Items */}
          {isOpen && (
            <nav className="flex flex-col py-4 space-y-2 lg:hidden">
              {["Home", "Shop", "Blog", "Contact", "Sign up", "Sign in"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="py-2 text-[18px] font-[400] text-[rgb(26, 26, 26)] transition hover:text-blue-600"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;

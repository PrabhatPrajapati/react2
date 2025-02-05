import React from "react";
import logo from "../assets/logo.svg";

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function footer() {
  return (
    <>
      <footer class="w-full border-t">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <!--Grid--> */}
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4   py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
            <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <a
                href="https://pagedone.io/"
                class="flex justify-center lg:justify-start h-4"
              >
                <img src={logo} alt="" />
              </a>
              <p class="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left font font-medium  text-[14px] font-quicksand">
                Where every game is a lesson, and every lesson is a game. Our
                app transforms education into playful games, captivating young
                minds with interactive fun.
              </p>
              <div class="flex mt-4 space-x-4 justify-center lg:justify-start sm:mt-0 ">
                <a
                  href="javascript:;"
                  class=" rounded-full  flex justify-center items-center gap-5"
                >
                  <FaFacebook className="h-[25px] w-[25px]" />
                  <FaXTwitter className="h-[25px] w-[25px]" />
                  <FaInstagram className="h-[25px] w-[25px]" />
                  <FaLinkedin className="h-[25px] w-[25px]" />
                  <FaGoogle className="h-[25px] w-[25px]" />
                  <FaYoutube className="h-[25px] w-[25px]" />
                </a>
              </div>
            </div>
            {/* <!--End Col--> */}
            <div class="lg:text-right text-center sm:text-left  -mr-20">
              <h4 class="text-lg text-gray-900 font-bold mb-7 font-quicksand text-[16px] ">
                Quick links
              </h4>
              <ul class="text-sm  transition-all duration-500 ">
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class="text-gray-600 hover:text-gray-900 font-quicksand text-[14px] font-semibold cursor-pointer "
                  >
                    Home
                  </a>
                </li>
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class=" text-gray-600 hover:text-gray-900 font-quicksand text-[14px] font-semibold cursor-pointer"
                  >
                    Games
                  </a>
                </li>
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class=" text-gray-600 hover:text-gray-900 font-quicksand text-[14px] font-semibold cursor-pointer"
                  >
                    Subjects
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    class=" text-gray-600 hover:text-gray-900 font-quicksand text-[14px] font-semibold cursor-pointer"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--End Col--> */}
            <div class="lg:text-right text-center sm:text-left">
              <h4 class="text-lg text-gray-900 font-bold mb-7 font-quicksand text-[16px] ">
                Company
              </h4>
              <ul class="text-sm  transition-all duration-500  ">
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class="text-gray-600 hover:text-gray-900 font-quicksand text-[14px] font-semibold cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class=" text-gray-600 hover:text-gray-900 font-quicksand text-[14px] font-semibold cursor-pointer"
                  >
                    Feature
                  </a>
                </li>
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class=" text-gray-600 hover:text-gray-900 font-quicksand text-[14px] font-semibold cursor-pointer"
                  >
                    Works
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    class=" text-gray-600 hover:text-gray-900 font-quicksand text-[14px] font-semibold cursor-pointer"
                  >
                    Career
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--End Col--> */}
            {/* <div class="lg:mx-auto text-center sm:text-left">
              <h4 class="text-lg text-gray-900 font-medium mb-7">Resources</h4>
              <ul class="text-sm  transition-all duration-500">
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <FaFacebook className="mr-2 text-blue-700 text-xl" /> Facebook
                  </a>
                </li>
                
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <FaSquareInstagram className="mr-2 text-[#8a3ab9] text-xl" /> Instagram
                  </a>
                </li>
                
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <FaTwitter className="mr-2 text-[#1DA1F2] text-xl" /> Twitter
                  </a>
                </li>
                <li class="mb-6"></li>
                
                <li class="mb-6">
                  <a
                    href="javascript:;"
                    class="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <FaTiktok className="mr-2 text-[#ff0050] text-xl border-[#000000]" /> TikTok
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
          {/* <!--Grid--> */}
          <div class="py-7 border-t border-gray-200">
            <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <ul class="flex items-center gap-9 mt-4 lg:mt-0">
                <li>
                  <a
                    href="javascript:;"
                    class="text-sm  font-quicksand text-[14px] font-semibold text-black cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    class="text-sm font-quicksand text-[14px] font-semibold text-black cursor-pointer"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    class="text-sm font-quicksand text-[14px] font-semibold text-black cursor-pointer"
                  >
                    Support
                  </a>
                </li>
              </ul>
              <span class="text-sm text-black font-quicksand text-[14px] font-semibold ">
                ©<a href="https://pagedone.io/">Copyright</a> 2024, All Rights
                Reserved reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;

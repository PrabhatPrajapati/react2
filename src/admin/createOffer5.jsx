import React from "react";
import SideBar from "../admin/components/sideBar";
import { useState } from "react";
import { useEffect } from "react";
import Card1 from "../assets/image 4.png";
import Navbar from "./components/Navbar";
import Vectorr from "/src/assets/Vectorr.png";
import Vectorrr from "/src/assets/Vectorrr.png";
import Vectorrrr from "/src/assets/Vectorrrr.png";
import { useRef } from "react";
import { X } from "lucide-react";

import { Search, LogOut, Bell, Folder, Mic, ChevronDown } from "lucide-react";
const categories = ["Plastic", "Ewaste", "Batteries", "Tyres", "Used Oil"];

const createOffer5 = () => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    // Create a <link> element
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/plugins/bootstrap/css/bootstrap.min.css"; // ✅ Correct Path
    link.id = "bootstrap-cdn"; // Assign an ID for easy removal

    // Append to the <head>
    document.head.appendChild(link);

    return () => {
      // Cleanup: Remove the link when the component unmounts
      const existingLink = document.getElementById("bootstrap-cdn");
      if (existingLink) {
        existingLink.remove();
      }
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const priceRef = useRef(null);

  // Close dropdown when clicking outside

  const [selectedCategory, setSelectedCategory] = useState("Batteries");
  return (
    <div class="connect-container align-content-stretch d-flex flex-wrap">
      <SideBar />
      <div class="page-container">
        <div class="page-header">
          <Navbar />
        </div>
        <div class="page-content">
          <div class="page-info"></div>
        </div>

        {/* ----------------- */}
        <div className="p-6 md:p-10">
          {/* Header Section */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <h1 className="text-[30px] sm:text-[36px] md:text-[40px] font-bold">
                  My Offer
                </h1>
                <button className=" bg-[#3D9836] text-[14px] ml-3 w-[122px] h-[32px] text-white rounded-[3px] text-center flex items-center justify-center">
                  + Add Offer
                </button>
              </div>
              <p className="text-gray-500  font-[300px] text-[16px] mt-[8px] mb-16">
                List of offers you’ve created!
              </p>
            </div>

            {/* Price Range Selector */}
            {/* <div className="w-[287px] h-[127px] bg-white shadow-lg p-3 hidden sm:block">
              <p className="text-black text-[14px] mb-2">Price</p>
              <input
                type="range"
                className="w-full h-[14px] bg-gray-200 rounded-lg cursor-pointer mb-3 accent-[#04A2D1]"
              />
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  className="w-[110px] h-[32px] bg-gray-100 rounded-lg text-center text-black border border-gray-300"
                />
                <span className="text-black">To</span>
                <input
                  type="text"
                  className="w-[110px] h-[32px] bg-gray-100 rounded-lg text-center text-black border border-gray-300"
                />
              </div>
            </div> */}
          </div>

          {/* Category and Search Section */}
          <div className="flex items-center hidden sm:flex justify-between mb-6">
            {/* Categories */}
            <div className="flex space-x-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 font-poppins  text-black text-[18px] rounded-full font-[400px] transition ${
                    selectedCategory === cat
                      ? "bg-[#3D9836] border-none  text-white"
                      : " hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search and Dropdown */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative flex items-center w-[280px] h-[48px] rounded-md border border-gray-300 bg-white px-2">
                <img
                  src={Vectorrrr}
                  alt="Search"
                  className="h-[18px] w-[18px] ml-3" // Optional class, as it won't affect the image color, but you can use for sizing and positioning
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 text-[12px] bg-transparent font-[700px] text-gray-400   px-3 outline-none placeholder-gray-400"
                />
                <img
                  src={Vectorr}
                  alt="Search"
                  className="h-[18px] w-[18px] mr-6" // Optional class, as it won't affect the image color, but you can use for sizing and positioning
                />
              </div>
              {/* Price Dropdown */}
              <div className="relative">
                {/* Button to toggle price card */}
                <div
                  className="relative flex items-center cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <ChevronDown className="text-black" size={20} />
                  <span className="text-black font-poppins font-medium mr-2">
                    Price
                  </span>
                </div>

                {/* Price Filter Card */}
                {isOpen && (
                  <div className="absolute top-full right-0 mt-6 w-[287px] h-[127px] bg-white shadow-lg p-3 z-50 rounded-md">
                    {/* Close button */}
                    <div className="flex justify-between items-center">
                      <p className="text-black text-[14px]">Price</p>
                      <button onClick={() => setIsOpen(false)}>
                        <X className="text-black cursor-pointer" size={20} />
                      </button>
                    </div>

                    {/* Price Range Slider */}
                    <input
                      type="range"
                      className="w-full h-[14px] bg-gray-200 rounded-lg cursor-pointer mb-3 accent-[#04A2D1]"
                    />

                    {/* Min and Max Inputs */}
                    <div className="flex items-center justify-between">
                      <input
                        type="text"
                        className="w-[110px] h-[32px] bg-gray-100 rounded-lg text-center text-black border border-gray-300"
                      />
                      <span className="text-black">To</span>
                      <input
                        type="text"
                        className="w-[110px] h-[32px] bg-gray-100 rounded-lg text-center text-black border border-gray-300"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Credit Offer Cards */}
          <div className="flex flex-wrap gap-8 justify-center items-center md:items-start md:justify-start ">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="w-[336px] bg-white  overflow-hidden">
                <img
                  src={Card1}
                  alt="Plastic Bottles"
                  className="w-[336px] h-[352px] object-cover"
                />
                <div className="p-3 w-[336px] h-[172px] bg-[#F7F9FC] font-poppins">
                  <p className="text-green-600 text-[12px] font-light mb-1">
                    INR 1000/Tonne
                  </p>
                  <h2 className="text-[16px] font-medium text-black mb-1">
                    Plastic credit - Cat I available
                  </h2>
                  <p className="text-gray-500 font-normal text-[14px] mb-2">
                    Plastic Waste | Recycling
                  </p>
                  <div>
                    <div className="flex justify-between text-gray-700 text-sm mb-[-13px]  ">
                      <p className="font-medium text-[#484848] text-[14px] mb-[-13px] ">
                        Product Type
                      </p>
                      <p className="text-[14px] font-light">Category I</p>
                    </div>
                    <div className="flex justify-between text-gray-700 text-sm mb-[-13px] ">
                      <p className="font-medium text-[#484848] text-[14px]">
                        Minimum Purchase
                      </p>
                      <p className="text-[14px] font-light">150</p>
                    </div>
                    <div className="flex justify-between text-gray-700 text-sm mb-[-3px]">
                      <p className="font-medium text-[#484848] text-[14px]">
                        Credit Available
                      </p>
                      <p className="text-[14px] font-light">1000</p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <button className="shadow-[0px_2px_6px_0px_#00000012]  w-[336px] h-[36px] text-[14px] text-[#5F5F5F] font-medium">
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default createOffer5;

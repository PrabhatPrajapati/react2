import React from "react";
import SideBar from "../admin/components/sideBar";
import { useState } from "react";
import Card1 from "../assets/photo-1712417827761-7a68ff4a90f3.jpg";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Vectorr from "/src/assets/Vectorr.png";
import Vectorrr from "/src/assets/Vectorrr.png";
import Vectorrrr from "/src/assets/Vectorrrr.png";
import { useRef } from "react";
import { X } from "lucide-react";

import { Search, LogOut, Bell, Folder, Mic, ChevronDown } from "lucide-react";
const categories = ["Plastic", "Ewaste", "Batteries", "Tyres", "Used Oil"];

const createOffer4 = () => {
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
        <div className="p-10 md:p-12">
          {/* Header Section */}
          <div className="flex items-start    justify-between">
            <div>
              <h1 className="text-[30px] font-bold">
                Producer - Credit Offers
              </h1>
              <p className="text-gray-500 font-[300px] text-[16px] mt-3 mb-16">
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
          <div className="flex items-center justify-between mb-6">
            {/* Categories */}
            <div className="flex space-x-6 hidden sm:flex">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 font-poppins text-black text-[18px] rounded-full font-[400px] transition ${
                    selectedCategory === cat
                      ? "bg-[#04A2D1] border-none text-black"
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
        </div>
        {/* Credit Offer Cards */}
        <div className="   px-4 md:px-8  w-full mb-36 mt-[-22px] ">
          <div className="flex flex-wrap  gap-6 justify-center items-center md:items-start md:justify-start">
            {/* Card 1 */}
            <div className="bg-gradient-to-b from-[#04A2D1] to-[#02536B] text-white p-6 rounded-xl shadow-lg w-full w-[400px] h-[380px] flex flex-col justify-end">
              <p className="text-[14px] font-medium font-poppins">
                Credit Type | Batteries Waste
              </p>
              <h2 className="mt-2 text-[18px] font-poppins font-medium">
                Song Giang 2 Hydro Power Project
              </h2>
              <p className="text-[18px] font-light mt-2">INR 120000/Tonne</p>
              <div className="mt-2 bg-gray-100 p-3 rounded-lg bg-opacity-30 backdrop-blur-md">
                <p className="mb-1">
                  Available Credit{" "}
                  <span className="float-right">12000 tonne</span>
                </p>
                <p className="text-[14px] font-medium font-poppins">
                  Minimum Purchase{" "}
                  <span className="float-right text-[14px] font-light">
                    120 tonne
                  </span>
                </p>
              </div>
            </div>

            {/* Card 2 (with Image) */}
            <div className="relative bg-black text-white p-6 rounded-xl shadow-lg overflow-hidden w-[400px] h-[380px] flex flex-col justify-end">
              <img
                src={Card1} // Replace with actual path or component
                alt="Hydro Power Project"
                className="w-full object-cover h-[380px] absolute inset-0 opacity-50"
              />
              <div className="relative z-10">
                <p className="text-[14px] font-medium font-poppins">
                  Credit Type | Batteries Waste
                </p>
                <h2 className="mt-2 text-[18px] font-poppins font-medium">
                  Song Giang 2 Hydro Power Project
                </h2>
                <p className="text-[18px] font-light mt-2">INR 120000/Tonne</p>
                <div className="mt-2 bg-black p-3 rounded-lg bg-opacity-30 backdrop-blur-md">
                  <p className="mb-1">
                    Available Credit{" "}
                    <span className="float-right">12000 tonne</span>
                  </p>
                  <p className="text-[14px] font-medium font-poppins">
                    Minimum Purchase{" "}
                    <span className="float-right text-[14px] font-light">
                      120 tonne
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-b from-[#125D2D] to-[#43AC4D] text-white p-6 rounded-xl shadow-lg w-[400px] h-[380px] flex flex-col justify-end">
              <p className="text-[14px] font-medium font-poppins">
                Credit Type | Batteries Waste
              </p>
              <h2 className="mt-2 text-[18px] font-poppins font-medium">
                Song Giang 2 Hydro Power Project
              </h2>
              <p className="text-[18px] font-light mt-2">INR 120000/Tonne</p>
              <div className="mt-2 bg-green-500 bg-opacity-30 backdrop-blur-md p-3 rounded-lg">
                <p className="mb-1">
                  Available Credit{" "}
                  <span className="float-right">12000 tonne</span>
                </p>
                <p className="text-[14px] font-medium font-poppins">
                  Minimum Purchase{" "}
                  <span className="float-right text-[14px] font-light">
                    120 tonne
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default createOffer4;

{
  /* <div className="w-[287px] h-[127px] bg-white shadow-lg p-3">
<p className="text-black text-[14px] mb-2">Price</p>
<input
  type="range"
  className="w-full h-[10px] bg-gray-200 rounded-lg appearance-none cursor-pointer mb-3 accent-blue-500"
/>
<div className="flex items-center justify-between ">
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
</div> */
}

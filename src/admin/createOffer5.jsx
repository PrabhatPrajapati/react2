import React from "react";
import SideBar from "../admin/components/sideBar";
import { useState } from "react";
import { useEffect } from "react";
import Card1 from "../assets/image 4.png";

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
  const [selectedCategory, setSelectedCategory] = useState("Batteries");
  return (
    <div class="connect-container align-content-stretch d-flex flex-wrap">
      <SideBar />
      <div class="page-container">
        <div class="page-header">
          <nav
            className="flex items-center justify-between px-8 py-5  border-b w-full h-[84px]"
            style={{ left: "280px" }}
          >
            {/* Search Bar */}
            <div className="flex items-center border rounded-lg px-4 py-2  w-[400px] h-[48px] space-x-3">
              <Search size={28} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none bg-transparent flex-grow text-lg text-gray-600"
              />
              <LogOut size={28} className="text-gray-400 cursor-pointer mr-5" />
              <Mic size={28} className="text-gray-400 cursor-pointer" />
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-10">
              <a href="#" className="font-semibold text-black">
                Dashboard
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                Credit Request
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                EPR
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                Offers
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                History
              </a>
            </div>

            {/* Icons */}
            <div className="flex space-x-4 text-gray-500">
              <Folder size={24} className="cursor-pointer" />
              <Bell size={24} className="cursor-pointer" />
            </div>
          </nav>
        </div>
        <div class="page-content">
          <div class="page-info"></div>
        </div>

        {/* ----------------- */}
        <div className="p-10">
          {/* Header Section */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <h1 className="text-[30px] font-bold">My Offer</h1>
                <button className=" bg-[#3D9836] text-[14px] ml-3 w-[122px] h-[32px] text-white rounded-[3px] text-center flex items-center justify-center">
                  + Add Offer
                </button>
              </div>
              <p className="text-gray-500 font-[300px] text-[16px] mt-4 mb-16">
                List of offers you’ve created!
              </p>
            </div>

            {/* Price Range Selector */}
            <div className="w-[287px] h-[127px] bg-white shadow-lg p-3">
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
            </div>
          </div>

          {/* Category and Search Section */}
          <div className="flex items-center justify-between mb-6">
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
                <Search className="text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 bg-transparent font-medium text-gray-400 text-[12px] px-3 outline-none placeholder-gray-400"
                />
                <LogOut className="text-gray-400" size={20} />
              </div>

              {/* Price Dropdown */}
              <div className="relative flex items-center cursor-pointer">
                <ChevronDown className="text-black" size={20} />
                <span className="text-black font-poppins font-medium mr-2">
                  Price
                </span>
              </div>
            </div>
          </div>

          {/* Credit Offer Cards */}
          <div className="grid grid-cols-3 gap-6 mb-36">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="w-[336px] bg-white  overflow-hidden">
                <img
                  src={Card1}
                  alt="Plastic Bottles"
                  className="w-[336px] h-[352px] object-cover"
                />
                <div className="p-3 w-[336px] h-[172px] bg-[#F7F9FC] font-poppins">
                  <p className="text-green-600 text-[12px] font-light">
                    INR 1000/Tonne
                  </p>
                  <h2 className="text-[16px] font-medium text-black mt-1">
                    Plastic credit - Cat I available
                  </h2>
                  <p className="text-gray-500 font-normal text-[14px]">
                    Plastic Waste | Recycling
                  </p>
                  <div className="mt-3">
                    <div className="flex justify-between text-gray-700 text-sm">
                      <p className="font-medium text-black text-[14px]">
                        Product Type
                      </p>
                      <p className="text-[14px] font-light">Category I</p>
                    </div>
                    <div className="flex justify-between text-gray-700 text-sm mt-1">
                      <p className="font-medium text-black text-[14px]">
                        Credit Available
                      </p>
                      <p className="text-[14px] font-light">1000</p>
                    </div>
                    <div className="flex justify-between text-gray-700 text-sm mt-1">
                      <p className="font-medium text-black text-[14px]">
                        Minimum Purchase
                      </p>
                      <p className="text-[14px] font-light">150</p>
                    </div>
                  </div>
                </div>
                <div className="  ">
                  <button className="shadow-lg border bg-white w-[336px] h-[36px] text-[14px] text-[#5F5F5F] font-medium">
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

import React from "react";
import SideBar from "./components/sideBar";
import { useState } from "react";

import { Search, LogOut, Bell, Folder, Mic } from "lucide-react";


const createOffers = () => {
    const [search, setSearch] = useState("");
  return (
    <div class="connect-container align-content-stretch d-flex flex-wrap">


    <SideBar />
    <div class="page-container">
      <div class="page-header">
        <nav className="flex items-center justify-between px-8 py-5  border-b w-full h-[84px]" style={{ left: "280px" }}>
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
            <a href="#" className="font-semibold text-black">Dashboard</a>
            <a href="#" className="text-gray-500 hover:text-black">Credit Request</a>
            <a href="#" className="text-gray-500 hover:text-black">EPR</a>
            <a href="#" className="text-gray-500 hover:text-black">Offers</a>
            <a href="#" className="text-gray-500 hover:text-black">History</a>
          </div>

          {/* Icons */}
          <div className="flex space-x-4 text-gray-500">
            <Folder size={24} className="cursor-pointer" />
            <Bell size={24} className="cursor-pointer" />
          </div>
        </nav>


      </div>
      <div class="page-content">
        
        <div class="page-info">
          

        </div>
        

      </div>

   

      {/* ----------------- */}
      <div className="bg-white p-9 rounded-lg">
  <h2 className="text-3xl font-bold font-poppins">Create Offers</h2>
  <p className="text-gray-600 text-base">List of offers you’ve created!</p>

  {/* Offer Title */}
  <div className="mt-6">
    <label className="block font-semibold text-lg font-poppins">Offer Title</label>
    <input
      type="text"
      className="w-full h-[65px] mt-2 p-4 border bg-[#E6E6E6] border-gray-300 rounded-md"
      placeholder="Offer Title here.."
    />
  </div>

  {/* Dropdown Fields */}
  <div className="grid grid-cols-3 gap-6 mt-6">
    <div>
      <label className="block font-semibold text-base font-poppins">FY</label>
      <select className="w-full h-[65px] mt-2 p-2 border border-gray-300 bg-[#E6E6E6] rounded-md">
        <option>2024-2025</option>
      </select>
    </div>
    <div>
      <label className="block font-semibold text-base font-poppins">EPR Reg No.</label>
      <select className="w-full h-[65px] mt-2 p-2 border border-gray-300 bg-[#E6E6E6] rounded-md">
        <option>Choose...</option>
      </select>
    </div>
    <div>
      <label className="block font-semibold text-base font-poppins">Waste Type</label>
      <select className="w-full h-[65px] mt-2 p-2 border border-gray-300 bg-[#E6E6E6] rounded-md">
        <option>Choose...</option>
      </select>
    </div>
  </div>

  {/* Credit Available, Minimum Purchase, Price Per Credit */}
  <div className="grid grid-cols-3 gap-6 mt-6">
    <div>
      <label className="block font-semibold text-base font-poppins">Credit Available</label>
      <div className="flex gap-2">
        <input
          type="text"
          className="w-full h-[65px] p-2 border border-gray-300 bg-[#E6E6E6] rounded-l-md"
          placeholder="Credit.."
        />
        <select className="border border-gray-300 text-base font-poppins rounded-r-md bg-[#E6E6E6] px-2 h-[65px]">
          <option>Unit</option>
        </select>
      </div>
    </div>
    <div>
      <label className="block font-semibold text-base font-poppins">Minimum Purchase</label>
      <input
        type="number"
        className="w-full h-[65px] bg-[#E6E6E6] mt-2 p-2 border border-gray-300 rounded-md"
        defaultValue={0}
      />
    </div>
    <div>
      <label className="block font-semibold text-base font-poppins">Price per credit (Rs.)</label>
      <input
        type="number"
        className="w-full h-[65px] bg-[#E6E6E6] mt-2 p-2 border border-gray-300 rounded-md"
        defaultValue={0}
      />
    </div>
  </div>

  {/* Upload Sections */}
  <div className="mt-6 border-2 border-dashed p-8 text-center rounded-md w-full h-[130px] border-black">
    <p className="text-black text-base font-medium">Upload Pic</p>
    <p className="text-base text-gray-400">Drag or upload your image here!</p>
  </div>
  <div className="mt-6 border-2 border-dashed p-8 text-center rounded-md w-full h-[130px] border-black">
    <p className="text-black text-base font-medium">Upload EPR credit availability proof</p>
    <p className="text-base text-gray-400">Drag or upload your image here!</p>
  </div>

  {/* Submit Button */}
  <button className="mt-6 bg-green-600 text-white w-[30%] h-[60px] rounded-md font-semibold text-lg">
    Create Offer
  </button>
</div>

    

    </div>
  </div>
  )
}

export default createOffers
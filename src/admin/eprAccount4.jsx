import React from 'react'

import SideBar from "./components/sideBar";
import { useState } from "react";

import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";

import { Search, LogOut, Bell, Folder, Mic } from "lucide-react";

const eprAccount4 = () => {
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
      
      <div className="bg-white p-6">
  {/* Header */}
  <div className="flex justify-between items-center bg-white p-6 border-[1px] mb-6">
    <div>
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold text-gray-900">EPR Accounts</h2>
        <span className="bg-[#EAECF0] text-[#0070FF] text-xs font-medium px-3 py-1 rounded-full">
          Label text or value
        </span>
      </div>
      <p className="text-gray-500 text-sm mt-1">A descriptive body text comes here</p>
    </div>
    <button className="border w-[163px] h-[40px] text-base font-medium rounded text-gray-700 hover:bg-gray-200">
      View EPR Accounts
    </button>
  </div>

  {/* Form Fields */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-poppins">
    <label className="block mb-2 text-base font-medium">
      EPR Reg No.
      <input type="text" placeholder="Choose..." className="border p-3 rounded w-full mt-1" />
    </label>
    <label className="block mb-2 text-base font-medium">
      EPR Reg Date
      <input type="text" placeholder="Date" className="border p-3 rounded w-full mt-1" />
    </label>

    <label className="block mb-2 text-base font-medium">
      Waste Type
      <select className="border p-3  text-gray-400 w-full mt-1">
        <option>Choose...</option>
      </select>
    </label>
    <label className="block mb-2 text-base font-medium">
      Producer Type
      <select className="border p-3   text-gray-400  w-full mt-1">
        <option>2024-2025</option>
      </select>
    </label>
  </div>

  {/* Country, State, and City in One Line */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 font-poppins">
    <label className="block mb-2 text-base font-medium">
      Country
      <select className="border p-3 w-full  text-gray-400  mt-1">
        <option>Choose...</option>
      </select>
    </label>
    <label className="block mb-2 text-base font-medium">
      State
      <select className="border p-3  text-gray-400  w-full mt-1">
        <option>Choose...</option>
      </select>
    </label>
    <label className="block mb-2 text-base font-medium">
      City
      <select className="border  text-gray-400  p-3 w-full mt-1">
        <option>Choose...</option>
      </select>
    </label>
  </div>

  {/* Address Field */}
  <div className="mt-4 h-[99px] font-poppins">
    <label className="block mb-2 text-base font-medium">
      Address
      <textarea placeholder="Address..." className="border p-3 rounded w-full mt-1" />
    </label>
  </div>

  {/* Upload Section */}
  <div className="mt-6 font-poppins">
    <h3 className="text-md font-semibold mb-2">Upload EPR Registration Certificate</h3>
    <div className="border p-6 rounded-md text-center h-[130px] text-gray-500 bg-gray-100">
      <p className="font-medium text-base text-black">Upload Pic</p>
      <p className="text-sm font-light">Drag or upload your image here!</p>
    </div>
  </div>

  {/* Submit Button */}
  <div className="mt-6 flex justify-start font-poppins">
    <button className="w-[270px] h-[52px] bg-green-600 text-white text-lg rounded hover:bg-green-700">
      Add EPR Account
    </button>
  </div>
</div>

    
    </div>
  </div>
  )
}

export default eprAccount4
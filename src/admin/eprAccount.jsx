import React from 'react'

import SideBar from "./components/sideBar";
import { useState } from "react";

import { FaPlus } from "react-icons/fa";

import { Search, LogOut, Bell, Folder, Mic } from "lucide-react";

const eprAccount = () => {
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
      <div className="p-6 font-poppins w-full mx-auto ">
      {/* Header */}
      <div className="bg-white shadow-md rounded-md p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col gap-1">
  {/* Title and Label on the Same Line */}
  <div className="flex items-center gap-3">
    <h1 className="text-lg font-medium text-gray-900">EPR Accounts</h1>
    <span className="bg-[#EAECF0] text-[#0070FF] text-xs font-medium px-3 py-1 rounded-full">
      Label text or value
    </span>
  </div>



  {/* Description on a New Line */}
  <p className="text-gray-500  text-sm">A descriptive body text comes here</p>
</div>



<button className="flex items-center justify-center w-[177px] h-[40px] gap-2 px-3 py-2 text-sm bg-[#3D9836] text-white rounded-md shadow-md hover:bg-green-700 whitespace-nowrap">
  <FaPlus className="w-4 h-4" /> Add EPR Account
</button>


        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className=" border-b text-sm">
                {[
                  "EPR Reg. No.",
                  "Reg. Date",
                  "Country",
                  "State",
                  "City",
                  "Waste Type",
                  "Producer Type",
                  "Product Type",
                  "EPR Certifi.",
                  "Address",
                ].map((heading, index) => (
                  <th key={index} className="px-4 py-2 font-medium text-gray-700">
                    {heading} <span className="text-gray-400">↓</span>
                  </th>
                ))}
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {[...Array(14)].map((_, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-sm text-gray-900">E1234567</td>
                  <td className="px-4 py-2 text-[#667085] text-sm">Ewaste</td>
                  <td className="px-4 py-2  text-[#667085] text-sm">India</td>
                  <td className="px-4 py-2  text-[#667085] text-sm">India</td>
                  <td className="px-4 py-2  text-[#667085] text-sm">India</td>
                  <td className="px-4 py-2  text-[#667085] text-sm">Plastic</td>
                  <td className="px-4 py-2  text-[#667085] text-sm">Category I</td>
                  <td className="px-4 py-2  text-[#667085] text-sm">Producer</td>
                  <td className="px-4 py-2  text-[#667085] text-center">
                    <img src="/certificate-icon.png" alt="EPR Cert." className="w-6 h-6 mx-auto" />
                  </td>
                  <td className="px-4 py-2  text-[#667085] text-sm">Jaipur</td>
                  <td className="px-4 py-2 text-center cursor-pointer text-lg">⋮</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>




    
    </div>
  </div>
  )
}

export default eprAccount
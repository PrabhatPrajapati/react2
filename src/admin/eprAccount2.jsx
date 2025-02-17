import React from 'react'

import SideBar from "./components/sideBar";
import { useState } from "react";


import { FaPlus } from "react-icons/fa";

import { Search, LogOut, Bell, Folder, Mic } from "lucide-react";

const eprAccount2 = () => {
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
      <div className="p-6  ">
      <div className="flex justify-between items-center bg-white p-6  border-[1px] ">
      <div>
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-gray-900">EPR Accounts</h2>
            <span className="bg-[#EAECF0] text-[#0070FF] text-xs font-medium px-3 py-1 rounded-full">
              Label text or value
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1">A descriptive body text comes here</p>
        </div>
        <button className=" border w-[163px] h-[40px] text-sm font-medium rounded text-gray-700 hover:bg-gray-200">
          View EPR Accounts
        </button>
      </div>

      <div className="p-6 mt-6 bg-white ">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="font-medium text-base font-poppins">EPR Reg Nos.</label>
            <select className="w-full h-[45px]  p-2 border rounded">
              <option className='text-base'>Choose...</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>
          <div>
            <label className="font-medium text-base font-poppins">State</label>
            <input className="w-full p-2 border rounded bg-gray-100" placeholder="All State Selected" readOnly />
          </div>
          <div>
            <label className="font-medium text-base font-poppins">Waste Type</label>
            <select className="w-full h-[45px]  p-2 border rounded">
              <option className='text-base'>Choose...</option>
              <option value="plastic">Plastic</option>
              <option value="metal">Metal</option>
            </select>
          </div>
          <div>
            <label className="font-medium text-base font-poppins">Credit Type</label>
            <select className="w-full p-2 h-[45px]  border rounded">
              <option className='text-base'>Choose...</option>
              <option value="recyclable">Recyclable</option>
              <option value="non-recyclable">Non-Recyclable</option>
            </select>
          </div>
          <div>
            <label className="font-medium text-base font-poppins">Year</label>
            <select className="w-full h-[45px]  p-2 border rounded">
              <option className='text-base'>Choose...</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>
          <div>
            <label className="font-medium text-base font-poppins">Processing Capacity (MT)</label>
            <input className="w-full p-2 border rounded h-[45px]  bg-gray-100" placeholder="-" readOnly />
          </div>
          <div>
            <label className="font-medium text-base font-poppins">Cumulative Certificate Potential</label>
            <input className="w-full p-2 border rounded h-[45px]  bg-gray-100" placeholder="-" readOnly />
          </div>
          <div>
            <label className="font-medium text-base font-poppins">Available Certificate Value</label>
            <input className="w-full p-2 border rounded h-[45px]  bg-gray-100" placeholder="-" readOnly />
          </div>
        </div>
        <div className="mt-6 flex justify-start">
  <button
    className="p-3 bg-green-600 w-[270px] h-[52px] text-base font-poppins text-white hover:bg-green-700 rounded-[6px]"
  >
    Add Quantity
  </button>
</div>


      </div>
    </div>



    
    </div>
  </div>
  )
}

export default eprAccount2
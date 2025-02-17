import React from "react";
import SideBar from "./components/sideBar";
import { useState } from "react";

import { Search, LogOut, Bell, Folder, Mic } from "lucide-react";

const dashboard2 = () => {
     const [search, setSearch] = useState("");
     
  return (
    <>
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
          <div className="p-6 w-full">
  {/* Heading Section */}
  <div className="mb-6">
    <h1 className="text-[30px] font-bold text-gray-800">Dashboard</h1>
    <p className="text-base text-gray-600 mt-2">List of offers you’ve created!</p>
  </div>

  <div className="grid grid-cols-2 gap-36 w-full max-w-5xl">
    <div className="bg-white rounded-md  border border-gray-200 w-[529px] h-[245px]">
    <div
  className="bg-[#3D9836] text-white font-semibold mt-3 py-3 px-6 text-center flex justify-start items-center"
  style={{
    width: "100%", // Full width of the card
    height: "37px",
  }}
>
  <span className="pl-10">EPR Account 1</span> {/* Padding to push it more to the right */}
</div>


      <div className="p-6">
        <p className="text-gray-600 text-sm">E1234567</p>
        <p className="font-bold text-base mt-2">EPR account name same as registered with pcb</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-left">
            <p className="text-xs font-medium font-poppins  text-black">Processing Capacity (MT)</p>
            <p className="text-gray-600 font-poppins text-xs">12000 Tonne</p>
          </div>
          <div className="text-left">
            <p className="text-xs font-medium font-poppins text-black">Processing Capacity (MT)</p>
            <p className="text-gray-600 font-poppins text-xs">12000 Tonne</p>
          </div>
          <div className="text-left">
            <p className="text-xs font-medium font-poppins text-black">Processing Capacity (MT)</p>
            <p className="text-gray-600 font-poppins text-xs">12000 Tonne</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-md  border border-gray-200 w-[529px] h-[245px]">
      <div
        className="bg-[#3D9836] text-white font-semibold mt-3 py-3 px-6  text-center flex justify-center items-center"
        style={{
          width: "100%", // Full width of the card
          height: "37px",
        }}
      >
       <span className="">EPR Account 1</span> 
      </div>

      <div className="p-6">
        <p className="text-gray-600 text-sm">E1234567</p>
        <p className="font-bold text-base mt-2 leading-tight">
  EPR account name same <br />
  <span className="mt-0 block text-[15px]">as registered with pcb</span>
</p>

        <div className="mt-4 flex items-center">
          <button className="bg-green-600 text-white w-[30px] h-[30px]">+</button>
          <button className="border border-green-600 w-[91px] h-[30px] font-poppins text-black  text-[10px]">
            Add Quantity
          </button>
        </div>
      </div>
    </div>
  </div>
</div>




        </div>
      </div>
    </>
  )
}

export default dashboard2




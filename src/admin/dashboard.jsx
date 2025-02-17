import React from "react";
import SideBar from "./components/sideBar";
import { X, Pencil } from "lucide-react";
import bottle from '../assets/bottle.png'
import { useState } from "react";
import { Search, LogOut, Bell, Folder, Mic } from "lucide-react";

const dashboard = () => {
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

          <div className="p-4">
  <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
  <p className="text-gray-600 font-light text-base mt-1">List of offers you’ve created!</p>
</div>

          {/* ----------------- */}
          <div className=" flex gap-7">
          <div
            className="w-[266px] h-[215px] border ml-6 border-gray-300 rounded-md shadow-sm bg-white flex flex-col mt-4"
          >
            {/* Green Header with Space on Top */}
            <div className="bg-[#3D9836] text-sm  text-white text-center py-2 mt-3 font-semibold rounded-t-md">
              EPR Account 1
            </div>

            {/* Card Content */}
            <div className="p-3  flex flex-col justify-between flex-grow">
              <p className="text-gray-700 text-sm font-light mt-2">E1234567</p>
              <h3 className="text-base font-semibold mt-1 leading-tight font-poppins">
  EPR account name same as registered with pcb
</h3>


              {/* Target Section */}
              <div className="mt-3 inline-block">
  <span className="bg-[#E8F7E7] px-2 py-1 rounded  font-semibold text-xs">
    Target - <span className="text-xs">12000 Tonne</span>
  </span>
</div>



            </div>
          </div>
          


          <div
            className="w-[266px] h-[215px] border border-gray-300 rounded-md shadow-sm bg-white flex flex-col mt-4"
          >
            {/* Green Header with Space on Top */}
            <div className="bg-[#3D9836] text-white text-center py-2 mt-3 text-sm font-semibold rounded-t-md">
              EPR Account 1
            </div>

            {/* Card Content */}
            <div className="p-3  flex flex-col justify-between flex-grow">
              <p className="text-gray-700 text-base  font-light mt-2">E1234567</p>
              <h3 className="text-base font-semibold  mt-1 leading-tight font-poppins">
                EPR account name same as registered with pcb
              </h3>

              {/* Target Section */}
              {/* Target Section with Button */}
{/* Target Section with Button */}
<div className="mt-3 flex">
  {/* Green Plus Button */}
  <button className="bg-[#3D9836] text-white w-7 h-7 flex items-center justify-center rounded-l">
    +
  </button>

  {/* Target Button */}
  <button className="border border-green-600 text-green-900 w-20 h-7 text-xs  rounded-r font-medium">
    Target
  </button>
</div>




            </div>
          </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default dashboard
import React from "react";
import SideBar from "./components/sideBar";
import { useState } from "react";

import { Search, LogOut, Bell, Folder, Mic } from "lucide-react";

function createOffer3() {
       const [search, setSearch] = useState("");
  return (
    <div class="connect-container align-content-stretch d-flex flex-wrap">
      <SideBar />
      <div class="page-container">
        <div class="page-header">
          <nav className="flex items-center justify-between px-8 py-5 border-b w-full h-[84px]" style={{ left: "280px" }}>
            {/* Search Bar */}
            <div className="flex items-center border rounded-lg px-4 py-2 w-[400px] h-[48px] space-x-3">
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
          <div class="page-info"></div>
        </div>

        {/* ----------------- */}
        <div className="p-6 h-[80%] font-poppins">
          <h1 className="text-2xl font-bold ">Counter Offers</h1>
          <p className="text-gray-500">List of offers you’ve received!</p>
          <div className="mt-4 space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-white  rounded-md p-6 flex justify-between items-center w-full h-[130px] border border-gray-200"
              >
                <div className="w-[325.396px] h-[90px]">
                  <p className="text-gray-400 text-base mb-1">Credit Type | Waste Type</p>
                  <p className="font-semibold text-lg">
                    Generating Renewable Energy by Hydro Power Project
                  </p>
                </div>

                <div className="text-right w-[129px] h-[60px]">
                  <p className="text-black text-xl font-semibold mb-1">Qty.</p>
                  <p className="font-light text-base text-gray-400">2000 Kg</p>
                </div>

                <div className="text-right w-[144px] h-[60px]">
                  <p className="text-black text-xl font-semibold mb-1">Offer Price</p>
                  <p className="font-light text-base text-gray-400">INR 1,20,000/Kg</p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    className="text-red-500  px-4 py-2 w-[111px] h-[36px] rounded-md text-base font-medium transition hover:bg-red-100"
                  >
                    Decline
                  </button>
                  <button
  className="bg-green-600 text-white w-[111px] h-[36px] px-4 py-2 rounded-md text-base font-medium transition hover:bg-green-700 flex items-center justify-center"
>
  Accept
</button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default createOffer3;

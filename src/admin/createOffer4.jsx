import React from 'react'
import SideBar from '../admin/components/sideBar'
import { useState } from "react";
import Card1 from "../assets/photo-1712417827761-7a68ff4a90f3.jpg";
import { useEffect } from "react";


import { Search, LogOut, Bell, Folder, Mic,ChevronDown  } from "lucide-react";
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
  const [selectedCategory, setSelectedCategory] = useState("Batteries");
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
      <div className="p-10">
  {/* Header Section */}
  <div className="flex items-start justify-between">
    <div>
      <h1 className="text-[30px] font-bold">Producer - Credit Offers</h1>
      <p className="text-gray-500 font-[300px] text-[16px] mt-3 mb-16">List of offers you’ve created!</p>
    </div>

    {/* Price Range Selector */}
    <div className="w-[287px] h-[127px] bg-white shadow-lg p-3">
      <p className="text-black text-[14px] mb-2">Price</p>
      <input
        type="range"
        className="w-full h-[14px] bg-gray-200 rounded-lg   cursor-pointer mb-3 accent-[#04A2D1]"
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
            selectedCategory === cat ? "bg-[#04A2D1] border-none  text-black" : " hover:bg-gray-100"
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
          className="flex-1 bg-transparent font-[700px] text-gray-400 text-[12px]  px-3 outline-none placeholder-gray-400"
        />
        <LogOut className="text-gray-400" size={20} />
      </div>

      {/* Price Dropdown */}
      <div className="relative flex items-center cursor-pointer">
        <ChevronDown className="text-black" size={20} />
        <span className="text-black font-poppins font-[400px] mr-2">Price</span>
      </div>
    </div>
  </div>
</div>
{/* Credit Offer Cards */}
<div className="   px-4 md:px-8 w-full mb-36 max-w-7xl">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
    {/* Card 1 */}
    <div className="bg-gradient-to-b from-[#04A2D1] to-[#02536B] text-white p-6 rounded-xl shadow-lg w-full h-[380px] flex flex-col justify-end">
      <p className="text-[14px] font-medium font-poppins">Credit Type | Batteries Waste</p>
      <h2 className="mt-2 text-[18px] font-poppins font-medium">Song Giang 2 Hydro Power Project</h2>
      <p className="text-[18px] font-light mt-2">INR 120000/Tonne</p>
      <div className="mt-2 bg-gray-100 p-3 rounded-lg bg-opacity-30 backdrop-blur-md">
        <p className="mb-1">Available Credit <span className="float-right">12000 tonne</span></p>
        <p className="text-[14px] font-medium font-poppins">Minimum Purchase <span className="float-right text-[14px] font-light">120 tonne</span></p>
      </div>
    </div>

    {/* Card 2 (with Image) */}
    <div className="relative bg-black text-white p-6 rounded-xl shadow-lg overflow-hidden h-[380px] flex flex-col justify-end">
      <img
        src={Card1} // Replace with actual path or component
        alt="Hydro Power Project"
        className="w-full object-cover h-[380px] absolute inset-0 opacity-50"
      />
      <div className="relative z-10">
        <p className="text-[14px] font-medium font-poppins">Credit Type | Batteries Waste</p>
        <h2 className="mt-2 text-[18px] font-poppins font-medium">Song Giang 2 Hydro Power Project</h2>
        <p className="text-[18px] font-light mt-2">INR 120000/Tonne</p>
        <div className="mt-2 bg-black p-3 rounded-lg bg-opacity-30 backdrop-blur-md">
          <p className="mb-1">Available Credit <span className="float-right">12000 tonne</span></p>
          <p className="text-[14px] font-medium font-poppins">Minimum Purchase <span className="float-right text-[14px] font-light">120 tonne</span></p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-gradient-to-b from-[#125D2D] to-[#43AC4D] text-white p-6 rounded-xl shadow-lg w-full h-[380px] flex flex-col justify-end">
      <p className="text-[14px] font-medium font-poppins">Credit Type | Batteries Waste</p>
      <h2 className="mt-2 text-[18px] font-poppins font-medium">Song Giang 2 Hydro Power Project</h2>
      <p className="text-[18px] font-light mt-2">INR 120000/Tonne</p>
      <div className="mt-2 bg-green-500 bg-opacity-30 backdrop-blur-md p-3 rounded-lg">
        <p className="mb-1">Available Credit <span className="float-right">12000 tonne</span></p>
        <p className="text-[14px] font-medium font-poppins">Minimum Purchase <span className="float-right text-[14px] font-light">120 tonne</span></p>
      </div>
    </div>
  </div>
</div>



    </div>
  </div>
  )
}

export default createOffer4













{/* <div className="w-[287px] h-[127px] bg-white shadow-lg p-3">
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
</div> */}







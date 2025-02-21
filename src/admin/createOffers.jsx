import React from "react";
import SideBar from "./components/sideBar";
import { useState } from "react";
import { useEffect } from "react";
import { Search, LogOut, Bell, Folder, Mic } from "lucide-react";
import Navbar from "./components/Navbar";


const createOffers = () => {
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
      <Navbar />
      </div>
      <div class="page-content">
        
        <div class="page-info">
          

        </div>
        

      </div>

   

      {/* ----------------- */}
      <div className="bg-white p-10 rounded-lg">
  <h2 className="text-[30px] font-[700] ">Producer - Credit Offers</h2>
  <p className="text-gray-600 text-base">List of offers you’ve created!</p>

  {/* Offer Title */}
  <div className="mt-6">
    <label className="block font-semibold text-lg font-poppins">Offer Title</label>
    <input 
      type="text"
      className="w-full h-[65px] mt-0 p-4 border bg-[#FAFAFA] border-gray-300 rounded-md"
      placeholder="Offer Title here.."
    />
  </div>

  {/* Dropdown Fields */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
    <div>
      <label className="block font-semibold text-base font-poppins">FY</label>
      <select className="w-full h-[65px] mt-0 p-2 border border-gray-300 bg-[#FAFAFA] rounded-md">
        <option>2024-2025</option>
      </select>
    </div>
    <div>
      <label className="block font-semibold text-base font-poppins">EPR Reg No.</label>
      <select className="w-full h-[65px] mt-0 p-2 border border-gray-300 bg-[#FAFAFA] rounded-md">
        <option>Choose...</option>
      </select>
    </div>
    <div>
      <label className="block font-semibold text-base font-poppins">Waste Type</label>
      <select className="w-full h-[65px] mt-0 p-2 border border-gray-300 bg-[#FAFAFA] rounded-md">
        <option>Choose...</option>
      </select>
    </div>
  </div>

  {/* Credit Available, Minimum Purchase, Price Per Credit */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
    <div>
      <label className="block font-semibold text-base font-poppins">Credit Available</label>
      <div className="flex gap-2">
        <input
          type="text"
          className="w-full h-[65px] p-2 border border-gray-300 bg-[#FAFAFA] rounded-l-md"
          placeholder="Credit.."
        />
        <select className="border border-gray-300 font-[500px] text-base font-poppins rounded-r-md bg-[#FAFAFA] w-[103px] px-2 h-[65px]">
          <option>Unit</option>
        </select>
      </div>
    </div>
    <div>
      <label className="block font-semibold text-base font-poppins">Minimum Purchase</label>
      <input
        type="number"
        className="w-full h-[65px] bg-[#FAFAFA] mt-0 p-2 border border-gray-300 rounded-md"
        defaultValue={0}
      />
    </div>
    <div>
      <label className="block font-semibold text-base font-poppins">Price per credit (Rs.)</label>
      <input
        type="number"
        className="w-full h-[65px] bg-[#FAFAFA] mt-0 p-2 border border-gray-300 rounded-md"
        defaultValue={0}
      />
    </div>
  </div>

  {/* Upload Sections */}
  <div className="mt-6 border-[1px] border-dashed p-8 text-center rounded-md w-full h-[130px] border-[#000000]">
    <p className="text-black text-base font-medium mb-2 mt-1">Upload Pic</p>
    <p className="text-[14px] text-[#6D6D6D] mt-[-4px]">Drag or upload your image here!</p>
  </div>
  <div className="mt-6 border-[1px] border-dashed p-8 text-center rounded-md w-full h-[130px] border-[#000000]">
    <p className="text-black text-base font-medium mb-2  mt-1">Upload EPR credit availability proof</p>
    <p className="text-[14px] text-[#6D6D6D] mt-[-4px]">Drag or upload your image here!</p>
  </div>

  {/* Submit Button */}
  <button className="mt-6 bg-green-600 text-white w-full sm:w-[30%] h-[60px] rounded-[6px] font-semibold text-lg">
    Create Offer
  </button>
</div>


    </div>
  </div>
  )
}

export default createOffers
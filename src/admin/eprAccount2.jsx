import React from 'react'

import SideBar from "./components/sideBar";
import { useState } from "react";

import { useEffect } from "react";

import { FaPlus } from "react-icons/fa";

import { Search, LogOut, Bell, Folder, Mic } from "lucide-react";
import Navbar from './components/Navbar';

const eprAccount2 = () => {
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
      <Navbar/> 

      </div>
      <div class="page-content">
        
        <div class="page-info">
          

        </div>
        

      </div>

   

      {/* ----------------- */}
      <div className="p-10 sm:p-10">
  <div className="flex justify-between items-center flex-wrap bg-white p-4 sm:p-6 border">
    <div className="w-full sm:w-auto">
      <div className="flex items-center gap-3 flex-wrap">
        <h2 className="text-xl font-semibold text-gray-900">EPR Accounts</h2>
        <span className="bg-[#EAECF0] text-[#0070FF] text-xs font-medium px-3 py-1 rounded-full">
          Label text or value
        </span>
      </div>
      <p className="text-gray-500 text-sm mt-1">A descriptive body text comes here</p>
    </div>
    <button className="border w-full sm:w-[163px] h-[40px] text-sm font-medium rounded text-gray-700 hover:bg-gray-200 mt-3 sm:mt-0">
      View EPR Accounts
    </button>
  </div>

  <div className="p-4 sm:p-6 mt-6 bg-white">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      <div>
        <label className="font-medium text-base font-poppins">EPR Reg Nos.</label>
        <select className="w-full h-[45px] p-2 border rounded">
          <option className="text-base">Choose...</option>
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
        <select className="w-full h-[45px] p-2 border rounded">
          <option className="text-base">Choose...</option>
          <option value="plastic">Plastic</option>
          <option value="metal">Metal</option>
        </select>
      </div>
      <div>
        <label className="font-medium text-base font-poppins">Credit Type</label>
        <select className="w-full p-2 h-[45px] border rounded">
          <option className="text-base">Choose...</option>
          <option value="recyclable">Recyclable</option>
          <option value="non-recyclable">Non-Recyclable</option>
        </select>
      </div>
      <div>
        <label className="font-medium text-base font-poppins">Year</label>
        <select className="w-full h-[45px] p-2 border rounded">
          <option className="text-base">Choose...</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
      <div>
        <label className="font-medium text-base font-poppins">Processing Capacity (MT)</label>
        <input className="w-full p-2 border rounded h-[45px] bg-gray-100" placeholder="-" readOnly />
      </div>
      <div>
        <label className="font-medium text-base font-poppins">Cumulative Certificate Potential</label>
        <input className="w-full p-2 border rounded h-[45px] bg-gray-100" placeholder="-" readOnly />
      </div>
      <div>
        <label className="font-medium text-base font-poppins">Available Certificate Value</label>
        <input className="w-full p-2 border rounded h-[45px] bg-gray-100" placeholder="-" readOnly />
      </div>
    </div>
    <div className="mt-6 flex justify-center sm:justify-start">
      <button className="p-3 bg-green-600 w-full sm:w-[270px] h-[52px] text-base font-poppins text-white hover:bg-green-700 rounded-[6px]">
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
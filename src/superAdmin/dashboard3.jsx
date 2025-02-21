import React from 'react'
import SideBar from '../admin/components/sideBar'
import { useState } from "react";
import card2 from '../assets/image 11.png'
import Navbar from '../admin/components/Navbar';
import { useEffect } from 'react';
import Vector7 from "/src/assets/Vector7.svg";

import { FaPlus } from "react-icons/fa";

import { Search, LogOut, Bell, Folder, Mic } from "lucide-react";

const dashboard3 = () => {
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
      <div className="p-10 font-poppins w-full mx-auto">
  {/* Header Section */}
  <div className="bg-white rounded-md border border-gray-300 md:h-[90px] p-6">
  <div className="flex justify-between items-center mb-4 flex-col sm:flex-row">
    <div className="flex flex-wrap flex-col gap-[2px]">
      {/* Title and Label on the Same Line */}
      <div className="flex items-center gap-3 mt-[-30px]">
        <h1 className="text-lg font-medium text-gray-900">Producer - Dashboard</h1>
        <span className="bg-[#F7FAFF] text-[#0070FF] text-xs font-medium px-3 py-1 rounded-full">
          Label text or value
        </span>
      </div>
      {/* Description on a New Line */}
      <p className="text-gray-500 text-sm">A descriptive body text comes here</p>
    </div>

    {/* Dropdown */}
    <button className="flex items-center mb-11 justify-between w-full sm:w-[153px] h-[40px] px-3 py-2 text-[14px] font-[400] bg-white text-black rounded-md shadow-md border border-gray-300 hover:bg-gray-100">
      FY 2024 - 2025 <img src={Vector7} alt="Dropdown Arrow" className="w-[7px] h-[4px]" />
    </button>
  </div>
</div>


  {/* Table Section */}
  <div className="bg-white shadow-md rounded-md  border-gray-300 ">
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="border-b text-xs">
            {[
              "Name",
              "Phone",
              "Email",
              "Designation",
              "City",
              "Waste Type",
              "Producer Type",
              "Product Type",
              "EPR Certifi.",
              "Address",
            ].map((heading, index) => (
              <th key={index} className="py-3 px-3 font-medium text-gray-700">
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
              <td className="px-4 py-2 text-[#667085] text-sm">India</td>
              <td className="px-4 py-2 text-[#667085] text-sm">India</td>
              <td className="px-4 py-2 text-[#667085] text-sm">India</td>
              <td className="px-4 py-2 text-[#667085] text-sm">Plastic</td>
              <td className="px-4 py-2 text-[#667085] text-sm">Category I</td>
              <td className="px-4 py-2 text-[#667085] text-sm">Producer</td>
              <td className="px-4 py-2 text-[#667085] text-center">
            <img src={card2} alt="EPR Cert." className="w-6 h-6 mx-auto" />
              </td>
              <td className="px-4 py-2 text-[#667085] text-sm">Jaipur</td>
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

export default dashboard3

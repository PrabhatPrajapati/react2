import React from "react";
import SideBar from "./components/sideBar";
import { X, Pencil } from "lucide-react";
import bottle from '../assets/bottle.png'
import { useState } from "react";
import { useEffect } from "react";
import { Search, LogOut, Bell, Folder, Mic } from "lucide-react";
import Navbar from "./components/Navbar";

const dashboard = () => {
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
    <>
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

          <div className="p-10">
  <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
  <p className="text-gray-600 font-light text-base mt-1">List of offers you’ve created!</p>
</div>

          {/* ----------------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
  {[...Array(3)].map((_, index) => (
    <div
      key={index}
      className="w-full h-[217px] border border-gray-300 rounded-md shadow-sm bg-white flex flex-col"
    >
      {/* Green Header with Space on Top */}
      <div className="bg-[#3D9836] mt-3 text-sm text-white text-center py-2 font-semibold rounded-t-md">
        EPR Account {index + 1}
      </div>

      {/* Card Content */}
      <div className="p-3 flex flex-col justify-between flex-grow">
        <p className="text-gray-700 text-sm font-light mt-2">E1234567</p>
        <h3 className="text-sm sm:text-base font-semibold mt-1 leading-tight font-poppins">
  EPR account name  same as <br className="hidden sm:block" />
  registered with PCB
</h3>


        {/* Target Section */}
        <div className="mt-1 inline-block sm:flex sm:items-center">
  <span className="bg-[#E8F7E7] px-2 py-1 rounded font-semibold text-[10px] sm:text-xs">
    Target - <span className="text-[10px] sm:text-xs">12000 Tonne</span>
  </span>
</div>

      </div>
    </div>
  ))}

  {[...Array(3)].map((_, index) => (
    <div
      key={index}
      className="w-full border border-gray-300 rounded-md shadow-sm bg-white flex flex-col"
    >
      {/* Green Header with Space on Top */}
      <div className="bg-[#3D9836] text-sm mt-3 text-white text-center py-2 font-semibold rounded-t-md">
        EPR Account {index + 3}
      </div>

      {/* Card Content */}
      <div className="p-3 flex flex-col justify-between flex-grow">
        <p className="text-gray-700 text-sm font-light mt-2">E7654321</p>
        <h3 className="text-sm sm:text-base font-semibold mt-1 leading-tight font-poppins">
  EPR account name  same as <br className="hidden sm:block" />
  registered with PCB
</h3>

        {/* Target Section with Button */}
        <div className="mt-2 flex">
          {/* Green Plus Button */}
          <button className="bg-[#3D9836] text-white w-7 h-7 flex items-center justify-center rounded-l">
            +
          </button>

          {/* Target Button */}
          <button className="border border-green-600 text-green-900 w-20 h-7 text-xs rounded-r font-medium">
            Target
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


        </div>
      </div>
    </>
  )
}

export default dashboard
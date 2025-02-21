import React from "react";
import SideBar from "./components/sideBar";
import { useState } from "react";
import { useEffect } from "react";

import { Search, LogOut, Bell, Folder, Mic } from "lucide-react";
import Navbar from "./components/Navbar";

const dashboard2 = () => {
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



          {/* ----------------- */}
          <div className="p-10">
  {/* Heading Section */}
  <div className="mb-6">
    <h1 className="text-[30px] font-bold text-gray-800">Dashboard</h1>
    <p className="text-base text-gray-600 mt-2">List of offers you’ve created!</p>
  </div>

  {/* Responsive Grid for 4 Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
    
    {/* Card 1 */}
    <div className="bg-white rounded-md border border-gray-200 max-w-[529px] w-full md:h-[245px] ">
      <div className="bg-[#3D9836] text-white font-semibold mt-3 py-3 px-6 flex justify-center items-center h-[37px]">
        <span>EPR Account 2</span>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-[8px] text-sm">E1234567</p>
        <p className="font-bold text-base leading-tight">
          EPR account name same as registered with PCB
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
          <div>
            <p className="text-xs font-medium font-poppins text-black mb-1">
              Processing Capacity (MT)
            </p>
            <p className="text-gray-600 font-poppins text-xs">12000 Tonne</p>
          </div>

          <div>
            <p className="text-xs font-medium font-poppins text-black mb-1">
              Processing Capacity (MT)
            </p>
            <p className="text-gray-600 font-poppins text-xs">12000 Tonne</p>
          </div>

          <div>
            <p className="text-xs font-medium font-poppins text-black mb-1">
              Processing Capacity (MT)
            </p>
            <p className="text-gray-600 font-poppins text-xs">12000 Tonne</p>
          </div>
        </div>
      </div>
    </div>


    {/* Card 2 */}
    <div className="bg-white rounded-md border border-gray-200 max-w-[529px] w-full h-[245px]">
      <div className="bg-[#3D9836] text-white font-semibold mt-3 py-3 px-6 flex justify-center items-center h-[37px]">
        <span>EPR Account 2</span>
      </div>

      <div className="p-6">
        <p className="text-gray-600 text-sm">E1234567</p>
        <p className="font-bold text-base mt-2 leading-tight">
          EPR account name same <br className="sm:hidden" />
          <span className="mt-0 block text-[15px]">as registered with PCB</span>
        </p>

        <div className="mt-4 flex flex-wrap">
          <button className="bg-green-600 text-white w-[30px] h-[30px]">+</button>
          <button className="border border-green-600 w-[91px] h-[30px] font-poppins text-black text-[10px]">
            Add Quantity
          </button>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-md border border-gray-200 max-w-[529px] w-full md:h-[245px]">
    <div className="bg-[#3D9836] text-white font-semibold mt-3 py-3 px-6 flex justify-center items-center h-[37px]">
        <span>EPR Account 2</span>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-[8px] text-sm">E1234567</p>
        <p className="font-bold text-base  leading-tight">
          EPR account name same as registered with PCB
          
        </p>

        <div className="grid  grid-cols-2  mt-1">
        <div>
  <p className="text-xs font-medium font-poppins text-black mb-1">Processing Capacity (MT)</p>
  <p className="text-gray-600 font-poppins text-xs">12000 Tonne</p>
</div>

<div>
  <p className="text-xs font-medium font-poppins text-black mb-1">Processing Capacity (MT)</p>
  <p className="text-gray-600 font-poppins text-xs">12000 Tonne</p>
</div>
<div>
  <p className="text-xs font-medium font-poppins text-black mb-1">Processing Capacity (MT)</p>
  <p className="text-gray-600 font-poppins text-xs">12000 Tonne</p>
</div>
         
         
        </div>
      </div>
    </div>


    {/* Card 4 */}
    <div className="bg-white rounded-md border border-gray-200 max-w-[529px] w-full h-[245px]">
      <div className="bg-[#3D9836] text-white font-semibold mt-3 py-3 px-6 flex justify-center items-center h-[37px]">
        <span>EPR Account 4</span>
      </div>

      <div className="p-6">
        <p className="text-gray-600 text-sm">E1234567</p>
        <p className="font-bold text-base mt-2 leading-tight">
          EPR account name same <br className="sm:hidden" />
          <span className="mt-0 block text-[15px]">as registered with PCB</span>
        </p>

        <div className="mt-4 flex flex-wrap ">
          <button className="bg-green-600 text-white w-[30px] h-[30px]">+</button>
          <button className="border border-green-600 w-[91px] h-[30px] font-poppins text-black text-[10px]">
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




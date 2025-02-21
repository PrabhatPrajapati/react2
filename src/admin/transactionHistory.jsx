import React from "react";
import SideBar from "./components/sideBar";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { useEffect } from "react";
import { Search, LogOut, Bell, Folder, Mic } from "lucide-react";
import Navbar from "./components/Navbar";
import Vector5 from "/src/assets/Vector5.png";
function transactionHistory() {
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
          <div class="page-info"></div>
        </div>

        {/* ----------------- */}
        <div className="p-10 font-poppins w-full mx-auto relative space-y-6">
          {/* First Transaction Card */}
          <div className="mb-4">
            <h1 className="text-xl font-semibold text-gray-900">
              Transaction History
            </h1>
            <p className="text-gray-500 font-light text-base">
              List of offers you’ve received!
            </p>
          </div>

          {[1, 2].map((_, index) => (
            <div
              key={index}
              className="bg-white  rounded-[5px] p-6 border border-gray-200 w-[1095px] h-[286px] relative"
            >
              {/* Download Certificate Button - Positioned at Top Right */}
              <button className="absolute top-4 right-16 w-[200px] h-[38px] flex items-center font-[500] justify-center gap-2 border border-gray-300 px-2 py-2 rounded-[8px] text-[12px] text-[#230E0E] hover:bg-gray-100 whitespace-nowrap">
              
      <img 
        src={Vector5} 
        alt="Download Certificate" 
        className="w-[13px] h-[12px]"
      />
      Download Certificate
    
              </button>

              {/* Title and Subtitle */}
              <p className="text-gray-400 text-base font-light mb-2">
                Credit Type | Waste Type
              </p>
              <h2 className="font-semibold text-lg mb-6">
                Generating Renewable Energy by Hydro Power Project
              </h2>

              {/* Information Grid */}
              <div className="grid grid-cols-4  gap-x-24 text-sm text-gray-900">
              <div>
    <p className="font-semibold text-xs mb-1">Recycler ID</p>
    <p className="text-xs font-light">E1234567</p>
  </div>
  <div>
    <p className="font-semibold text-xs mb-1">Work Order No.</p>
    <p className="text-xs font-light">S23423EE</p>
  </div>
  <div>
    <p className="font-semibold text-xs mb-1">Work Order Date</p>
    <p className="text-xs font-light">24-05-2024 | 05:30 PM</p>
  </div>
  <div>
    <p className="font-medium text-xs mb-1">Producer Type</p>
    <p className="text-xs font-light">Recycling</p>
  </div>
  <div>
    <p className="font-medium text-xs mb-1">Product Type</p>
    <p className="text-xs font-light">Tonne</p>
  </div>
  <div>
    <p className="font-medium text-xs mb-1">Credit Type</p>
    <p className="text-xs font-light">1000</p>
  </div>
  <div>
    <p className="font-medium text-xs mb-1">Credit Quantity</p>
    <p className="text-xs font-light">150</p>
  </div>
  <div>
    <p className="font-medium text-xs mb-1">Price per credit (Rs.)</p>
    <p className="text-xs font-light">INR 1000</p>
  </div>
  <div>
    <p className="font-medium text-sm mb-1">Total Price (incl. GST) (Rs)</p>
    <p className="text-xs font-light">Tonne</p>
  </div>
  <div>
    <p className="font-medium text-xs mb-1">Offered By</p>
    <p className="text-xs font-light">1000</p>
  </div>
              </div>

              {/* Download EPR Documents Button - Positioned Below the Grid on the Right */}
              <div className="absolute bottom-9 right-14">
                <button
                  className="flex items-center gap-2 text-sm font-medium"
                  style={{ color: "#3D9836" }}
                >
                  <img 
        src={Vector5} 
        alt="Download Certificate" 
        className="w-[13px] h-[12px]"
      />
      Download EPR related Documents
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default transactionHistory;

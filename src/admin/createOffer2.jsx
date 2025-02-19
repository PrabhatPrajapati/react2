import React from "react";
import SideBar from "./components/sideBar";
import { useState } from "react";
import { useEffect } from "react";
import { Search, LogOut, Bell, Folder, Mic } from "lucide-react";

const offers = [
  { status: "Pending", color: "bg-[#FFF8DA] text-[#A89120]" },
  { status: "Pay now", color: "bg-green-100 text-green-700" },
  { status: "Rejected", color: "bg-red-100 text-red-700" },
];

function createOffer2() {
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
          <nav
            className="flex items-center justify-between px-8 py-5  border-b w-full h-[84px]"
            style={{ left: "280px" }}
          >
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
              <a href="#" className="font-semibold text-black">
                Dashboard
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                Credit Request
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                EPR
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                Offers
              </a>
              <a href="#" className="text-gray-500 hover:text-black">
                History
              </a>
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
        <div className="p-6   font-poppins">
          <h1 className="text-2xl font-bold ">Counter Offers</h1>
          <p className="text-gray-500">List of offers you’ve received!</p>
          <div className="mt-4 space-y-4">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-md p-6 flex justify-between items-center w-full h-[130px] border border-gray-200"
              >
                <div className="w-[325.396px] h-[90px]">
                  <div className="w-[325.396px] h-[90px]">
                    <p className="text-gray-400 text-base mb-1">
                      Credit Type | Waste Type
                    </p>
                    <p className="font-semibold text-lg">
                      Generating Renewable Energy by Hydro Power Project
                    </p>
                  </div>
                </div>
                <div className="text-right w-[129px] h-[60px]">
                  <p className="text-black text-xl font-semibold mb-1">Qty.</p>
                  <p className="font-light text-base text-gray-400">2000 Kg</p>
                </div>
                <div className="text-right w-[144px] h-[60px]">
                  <p className="text-black text-xl font-semibold mb-1">
                    Offer Price
                  </p>
                  <p className="font-light text-base text-gray-400">
                    INR 1,20,000/Kg
                  </p>
                </div>
                <span
                  className={`w-[111px] h-[36px] text-base font-medium rounded-[6px] flex items-center justify-center ${offer.color}`}
                >
                  {offer.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default createOffer2;

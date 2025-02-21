import React from "react";
import SideBar from "./components/sideBar";
import { useState } from "react";
import { useEffect } from "react";
import { Search, LogOut, Bell, Folder, Mic } from "lucide-react";
import Navbar from "./components/Navbar";

function createOffer3() {
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
                className="bg-white flex-wrap  rounded-md p-6 flex justify-between items-center w-full shadow-[0px_4px_12px_0px_#00000014]"
              >
                <div className="">
                  <p className="text-gray-400 text-base mb-1">
                    Credit Type | Waste Type
                  </p>
                  <p className="font-semibold text-lg">
                    Generating Renewable Energy by Hydro Power Project
                  </p>
                </div>

                <div className="text-right ">
                  <p className="text-black text-xl font-semibold mb-1">Qty.</p>
                  <p className="font-light text-base text-gray-400">2000 Kg</p>
                </div>

                <div className="text-right ">
                  <p className="text-black text-xl font-semibold mb-1">
                    Offer Price
                  </p>
                  <p className="font-light text-base text-gray-400">
                    INR 1,20,000/Kg
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center items-center  ">
                  <div className="flex space-x-4">
                    <button className="text-red-500 px-4 py-2 w-[111px] h-[36px] rounded-md text-base font-medium transition hover:bg-red-100">
                      Decline
                    </button>
                    <button className="bg-green-600 text-white w-[111px] h-[36px] px-4 py-2 rounded-md text-base font-medium transition hover:bg-green-700 flex items-center justify-center">
                      Accept
                    </button>
                  </div>
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

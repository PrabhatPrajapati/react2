import React from "react";

import SideBar from "./components/sideBar";
import { useState } from "react";
import { useEffect } from "react";

import { FaPlus } from "react-icons/fa";
import folder from "../assets/folder.png";
import notifications from "../assets/notifications.png";
import Vectorr from "../assets/Vectorr.png";
import Vectorrr from "../assets/Vectorrr.png";
import Vectorrrr from "../assets/Vectorrrr.png";
import Navbar from "./components/Navbar";


import { Search, LogOut, Bell, Folder, Mic } from "lucide-react";

const eprAccount = () => {
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
        <div className="p-10 md:p-12 font-poppins w-full mx-auto ">
          {/* Header */}
          <div className="bg-white shadow-md rounded-md p-6 border border-gray-200">
            <div className="flex flex-wrap justify-between items-center mb-4">
              <div className="flex flex-col gap-1">
                {/* Title and Label on the Same Line */}
                <div className="flex items-center gap-3">
                  <h1 className="text-lg font-medium text-gray-900">
                    EPR Accounts
                  </h1>
                  <span className="bg-[#EAECF0] text-[#0070FF] text-xs font-medium px-3 py-1 rounded-full">
                    Label text or value
                  </span>
                </div>

                {/* Description on a New Line */}
                <p className="text-gray-500  text-sm">
                  A descriptive body text comes here
                </p>
              </div>

              <button className="flex items-center justify-center w-[177px] h-[40px] gap-2 px-3 py-2 text-sm bg-[#3D9836] text-white rounded-md shadow-md hover:bg-green-700 whitespace-nowrap">
                <FaPlus className="w-4 h-4" /> Add EPR Account
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className=" border-b text-sm">
                    {[
                      "EPR Reg. No.",
                      "Reg. Date",
                      "Country",
                      "State",
                      "City",
                      "Waste Type",
                      "Producer Type",
                      "Product Type",
                      "EPR Certifi.",
                      "Address",
                    ].map((heading, index) => (
                      <th
                        key={index}
                        className="p-1 font-medium text-gray-700 pl-0 md:pl-3 "
                      >
                        {heading} <span className="text-gray-400">↓</span>
                      </th>
                    ))}
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(14)].map((_, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2 font-medium text-sm text-gray-900">
                        E1234567
                      </td>
                      <td className="px-4 py-2 text-[#667085] text-sm">
                        Ewaste
                      </td>
                      <td className="px-4 py-2  text-[#667085] text-sm">
                        India
                      </td>
                      <td className="px-4 py-2  text-[#667085] text-sm">
                        India
                      </td>
                      <td className="px-4 py-2  text-[#667085] text-sm">
                        India
                      </td>
                      <td className="px-4 py-2  text-[#667085] text-sm">
                        Plastic
                      </td>
                      <td className="px-4 py-2  text-[#667085] text-sm">
                        Category I
                      </td>
                      <td className="px-4 py-2  text-[#667085] text-sm">
                        Producer
                      </td>
                      <td className="px-4 py-2  text-[#667085] text-center">
                        <img
                          src="/certificate-icon.png"
                          alt="EPR Cert."
                          className="w-6 h-6 mx-auto"
                        />
                      </td>
                      <td className="px-4 py-2  text-[#667085] text-sm">
                        Jaipur
                      </td>
                      <td className="px-4 py-2 text-center cursor-pointer text-lg">
                        ⋮
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default eprAccount;

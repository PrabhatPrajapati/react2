import React from "react";
import { ChevronDown } from "lucide-react";
import Sidebutton from "../../assets/menu_open.png";
import logo from "../../assets/logo.svg";
import Avatar from "../../assets/cafa0773cc476b72af3779850a7cf187.png";
import Button from "../../assets/unfold_more.svg";
import Time_icon from "../../assets/access_time.svg";
import Account_icon from "../../assets/dashboard_customize.svg";
import Transaction_icon from "../../assets/data_usage.svg";
import Folder_icon from "../../assets/Vector (1).svg";
import Inbox_icon from "../../assets/inbox.svg";

const sideBar = () => {
  return (
    <>
      <div class="page-sidebar">
        <div class="logo-box flex items-center justify-between w-full">
          <a href="#" class="logo-text">
            <img class="block w-auto h-4" src={logo} alt="Logo" />
          </a>
          <a href="#" id="sidebar-state">
            <img class="w-auto h-6" src={Sidebutton} alt="Sidebar Toggle" />
          </a>
        </div>

        <ul class="list-none p-0 mt-2 rounded-lg">
          <li class="rounded-lg overflow-hidden space-y-1 transition-all duration-200 ease-in-out">
            <div class="flex items-center space-x-4 p-3 relative cursor-pointer">
              <div class="relative">
                <img
                  src={Avatar}
                  alt="Profile"
                  class="w-10 h-10 rounded-full border-4 border-red-600"
                />

                <div class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>

              <div>
                <h2 class="font-bold text-[12px] text-gray-800 font-inter ">
                  Shubham Gupta
                </h2>

                <p class="text-gray-500 text-[11px] font-bold font-poppins">
                  Producer
                </p>
              </div>
              <img src={Button} alt="" />

              {/* <svg
                class="text-gray-500 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg> */}

              <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300"></div>
            </div>

            <div class="transition-all duration-200 ease-in-out bg-gray-100 p-3 text-gray-600 text-sm hidden">
              Accordion Content Here
            </div>
          </li>
        </ul>

        <div class="page-sidebar-inner">
          <ul class="accordion-menu">
            {/* <li class="sidebar-title">Apps</li> */}
            <li class="active-page">
              <a
                href="#"
                class="active flex items-center justify-between w-full"
              >
                <div class="flex justify-between items-center w-full">
                  <div className="flex items-center gap-1">
                    <img
                      src={Inbox_icon}
                      className="material-icons-outlined mr-2 text-black text-[14px] font-[600px] "
                      alt=""
                    />
                    <span>Dashboard</span>
                    {/* <p className="text-black text-[14px] font-semibold font-poppins"> Dashboard</p>  */}
                    {/* <span className="bg-[#007AFF1A] text-green-600 ml-2 rounded-full h-6 w-6 flex items-center justify-center text-[10px]">100</span> */}
                  </div>
                </div>
              </a>
            </li>
            <li>
              {/* <a href="#">
                <i class="material-icons-outlined">inbox</i>Credit Offers
              </a> */}
              {/* <a href="#" class="active flex items-center justify-between w-full">
                <div class="flex justify-between items-center w-full">
                  <div className="flex items-center">
                    <img src={Folder_icon} className="material-icons-outlined mr-2 text-[14px] font-semibold" alt="" />
                    Credit Requests
                    <span className="ml-[40px] bg-white text-green-600 rounded-full font-extrabold text-[10px]  h-6 w-6 flex items-center justify-center">
                      100
                    </span>
                  </div>
                </div>
              </a> */}
              <a
                href="#"
                class="active flex items-center justify-between w-full"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-1">
                    <img
                      src={Folder_icon}
                      className="material-icons-outlined text-[#141515] mr-2 text-[14px] font-semibold"
                      alt=""
                    />
                    <span className="text-[#141515]">Credit Requests</span>
                    {/* <span className="bg-[#007AFF1A] text-green-600 ml-2 rounded-full h-6 w-6 flex items-center justify-center text-[10px]">
                      100
                    </span> */}
                  </div>
                </div>
              </a>
            </li>
            <li>
              {/* <a href="profile.html">
                <i class="material-icons-outlined">account_circle</i>Counter
                Offers
              </a> */}
              <a
                href="#"
                class="active flex  items-center justify-between w-full"
              >
                <div class="flex justify-between items-center w-full">
                  <div className="flex items-center gap-1">
                    <img
                      src={Time_icon}
                      className="material-icons-outlined text-[#141515] mr-2 text-[14px] font-semibold"
                      alt=""
                    />
                    <span className="text-[#141515]">Counter Offerss</span>
                    {/* <p className="text-black text-[14px] font-semibold font-poppins">Counter Offers</p>  */}
                    {/* <span className="bg-[#007AFF1A] text-green-600 ml-2 rounded-full h-6 w-6 flex items-center justify-center text-[10px]">
                      100
                    </span> */}
                  </div>
                </div>
              </a>
            </li>
            <li>
              {/* <a href="file-manager.html">
                <i class="material-icons">cloud_queue</i>File Manager
              </a> */}
              <a
                href="#"
                class="active flex items-center justify-between w-full"
              >
                <div class="flex justify-between items-center w-full">
                  <div className="flex items-center gap-1">
                    <img
                      src={Account_icon}
                      className="material-icons-outlined text-[#141515] mr-2 "
                      alt=""
                    />
                    <span className="text-[#141515]">EPR Accounts</span>
                    {/* <p className="text-black text-[14px] font-semibold font-poppins">EPR Accounts</p>  */}
                    {/* <span className="bg-[#007AFF1A] text-green-600 ml-2 rounded-full h-6 w-6 flex items-center justify-center text-[10px]">
                      100
                    </span> */}
                  </div>
                </div>
              </a>
            </li>
            <li>
              {/* <a href="calendar.html">
                <i class="material-icons-outlined">calendar_today</i>EPR
                Accounts
              </a> */}
              {/* <a href="#" class="active flex items-center justify-between w-full">
                <div class="flex justify-between items-center w-full">
                  <div className="flex items-center">
                    <img src={Transaction_icon} className="material-icons-outlined mr-2 text-[14px] font-semibold" alt="" />
                    Transaction History
                    <span className="ml-[40px] bg-[#007AFF1A] text-green-600 rounded-full font-extrabold text-[10px]  h-6 w-6 flex items-center justify-center">
                      100
                    </span>
                  </div>
                </div>
              </a> */}
              <a
                href="#"
                class="active flex items-center justify-between w-full"
              >
                <div class="flex justify-between items-center w-full">
                  <div className="flex items-center gap-1">
                    <img
                      src={Transaction_icon}
                      className="material-icons-outlined text-[#141515] mr-2 text-[14px] font-semibold  font-inter "
                      alt=""
                    />
                    <span className="text-[#141515]">Transaction History</span>
                    {/* <p className="text-black text-[14px] font-semibold font-poppins">Transaction History</p>  */}
                    {/* <span className="bg-[#007AFF1A] text-green-600 ml-2 rounded-full h-6 w-6 flex items-center justify-center text-[10px]">
                      100
                    </span> */}
                  </div>
                </div>
              </a>
            </li>
            {/* <li>
              <a href="todo.html">
                <i class="material-icons">done</i>Transaction History
              </a>
            </li>
            <li>
              <a href="todo.html">
                <i class="material-icons">done</i>My Transactions
              </a>
            </li>
            <li>
              <a href="todo.html">
                <i class="material-icons">done</i>Offers
              </a>
            </li> */}
          </ul>

          <div class="mt-9 bottom-0 left-0 w-full h-[1px] bg-gray-300"></div>
        </div>
      </div>
    </>
  );
};

export default sideBar;

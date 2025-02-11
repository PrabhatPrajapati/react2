import React from "react";
import { ChevronDown } from "lucide-react";
import Sidebutton from "../../assets/menu_open.png";
import logo from "../../assets/logo.svg";

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

        <ul class="list-none p-0 mt-5 rounded-lg">
          <li class="rounded-lg overflow-hidden space-y-1 transition-all duration-200 ease-in-out">
            <div class="flex items-center space-x-4 p-3 relative cursor-pointer">
              <img src="kjk" alt="Profile" class="w-10 h-10 rounded-full" />
              <div>
                <h2 class="font-bold text-gray-800">Shubham Gupta</h2>
                <p class="text-gray-500 text-sm">Recycler</p>
              </div>
              <svg
                class="text-gray-500 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
              <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300"></div>
            </div>

            <div class="transition-all duration-200 ease-in-out bg-gray-100 p-3 text-gray-600 text-sm hidden">
              Accordion Content Here
            </div>
          </li>
        </ul>

        <div class="page-sidebar-inner slimscroll">
          <ul class="accordion-menu">
            <li class="sidebar-title">Apps</li>
            <li class="active-page">
              <a href="index.html" class="active">
                <i class="material-icons-outlined">dashboard</i>Dashboard
              </a>
            </li>
            <li>
              <a href="mailbox.html">
                <i class="material-icons-outlined">inbox</i>Credit Offers
              </a>
            </li>
            <li>
              <a href="profile.html">
                <i class="material-icons-outlined">account_circle</i>Counter
                Offers
              </a>
            </li>
            <li>
              <a href="file-manager.html">
                <i class="material-icons">cloud_queue</i>File Manager
              </a>
            </li>
            <li>
              <a href="calendar.html">
                <i class="material-icons-outlined">calendar_today</i>EPR
                Accounts
              </a>
            </li>
            <li>
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
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default sideBar;

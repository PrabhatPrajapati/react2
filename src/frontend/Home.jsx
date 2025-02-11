import React from "react";
import backgroundImage from "../assets/semicircke.png";
import { IoFilterOutline } from "react-icons/io5";
import Card1 from "../assets/photo-1712417827761-7a68ff4a90f3.jpg";
import { useState } from "react";
import Chec from "../assets/7bb302cbe595dd1ee2a55ed90ef361ca.png";

function Home() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      <div
        class="relative  bg-center bg-no-repeat z-0  "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: " auto auto",
          backgroundPosition: "center -10%",
        }}
        // style={{
        //   backgroundImage: `url(${Chec})`,
        //   backgroundSize: " auto 700px",
        //   backgroundPosition: "top",
        // }}
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20  text-center lg:pt-32 ">
          <h1 class="mx-auto max-w-4xl font-display  font-medium tracking-tight text-slate-900 ">
            <span class="inline-block  text-[24px] font-poppins font-semibold md:text-[64px]">
              Discover the world's{" "}
            </span>

            <span class="inline-block  text-[24px] font-poppins font-semibold md:text-[64px]">
              top designers
            </span>
          </h1>

          <p class="mx-auto mt-4 max-w-2xl text-lg tracking-tight  text-slate-700 sm:mt-6">
            <span class="inline-block font-poppins font-normal  text-[18px] md:text-[24px] ">
              Explore work from the most talented and accomplished designers
              ready to take on your next project.
            </span>
            {/* <span class="inline-block font-poppins font-normal text-[18px] md:text-[24px]">
              designers ready to take on your next project.
            </span> */}
          </p>

          <div class="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
            <div class="relative w-full max-w-3xl mx-auto bg-[#F1FCFF] rounded-full">
              <input
                placeholder="What are you looking for ?"
                class="rounded-full w-full h-[74px]  bg-[#F1FCFF] py-2 pl-8 pr-32 outline-none   hover:outline-none "
                type="text"
                name="query"
                id="query"
              />
              <button
                type="submit"
                class="absolute inline-flex items-center h-[56px] w-[56px] p-[12px] rounded-full  text-white  -mt-[3px]  right-3 top-3 bg-[#04A2D1]     "
              >
                <svg
                  class=" ml-[6px] w-[19.07px] h-[19.07px]  "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div class=" hidden sm:grid sm:grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row justify-center gap-y-5 md:gap-y-5 gap-x-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6 mt-12">
            <div
              class="relative flex flex-1 flex-col items-stretch sm:flex-none"
              data-headlessui-state=""
            >
              <button
                class="group  items-center justify-center   font-poppins py-2 px-4 text-sm  text-slate-700  "
                id="headlessui-menu-button-:r4:"
                aria-haspopup="true"
                aria-expanded="false"
                data-headlessui-state=""
                type="button"
              >
                Recent Search
              </button>
            </div>

            <div
              class="relative flex flex-1 flex-col items-stretch sm:flex-none"
              data-headlessui-state=""
            >
              <button
                class="group inline-flex ring-1 items-center font-poppins justify-center rounded-full py-1 px-2 text-[14px]  bg-[#F6F6F6] ring-[#F6F6F6] w-fit md:w-28 text-slate-700 hover:text-slate-900 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
                id="headlessui-menu-button-:r4:"
                aria-haspopup="true"
                aria-expanded="false"
                data-headlessui-state=""
                type="button"
              >
                Plastic
              </button>
            </div>

            <div
              class="relative flex flex-1 flex-col items-stretch sm:flex-none"
              data-headlessui-state=""
            >
              <button
                class="group inline-flex ring-1 items-center font-poppins justify-center rounded-full text-[14px] py-1 px-5 text-sm bg-[#F6F6F6] ring-[#F6F6F6] w-28 text-slate-700 hover:text-slate-900 "
                id="headlessui-menu-button-:r4:"
                aria-haspopup="true"
                aria-expanded="false"
                data-headlessui-state=""
                type="button"
              >
                Ewaste
              </button>
            </div>

            <div
              class="relative flex flex-1 flex-col items-stretch sm:flex-none"
              data-headlessui-state=""
            >
              <button
                class="group inline-flex ring-1 items-center font-poppins justify-center rounded-full text-[14px] py-1 px-5 text-sm bg-[#F6F6F6] ring-[#F6F6F6] w-28 text-slate-700 hover:text-slate-900  active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
                id="headlessui-menu-button-:r4:"
                aria-haspopup="true"
                aria-expanded="false"
                data-headlessui-state=""
                type="button"
              >
                Tyres
              </button>
            </div>

            <div
              class="relative flex flex-1 flex-col items-stretch sm:flex-none"
              data-headlessui-state=""
            >
              <button
                class="group inline-flex ring-1 items-center font-poppins justify-center rounded-full text-[14px] py-1 px-5 text-sm bg-[#F6F6F6] ring-[#F6F6F6] w-28 text-slate-700 hover:text-slate-900 "
                id="headlessui-menu-button-:r4:"
                aria-haspopup="true"
                aria-expanded="false"
                data-headlessui-state=""
                type="button"
              >
                Batteries
              </button>
            </div>

            <div
              class="relative flex flex-1 flex-col items-stretch sm:flex-none"
              data-headlessui-state=""
            >
              <button
                class="group inline-flex ring-1 items-center font-poppins justify-center rounded-full text-[14px] py-1 px-5 text-sm bg-[#F6F6F6] ring-[#F6F6F6] w-28 text-slate-700 hover:text-slate-900    "
                id="headlessui-menu-button-:r4:"
                aria-haspopup="true"
                aria-expanded="false"
                data-headlessui-state=""
                type="button"
              >
                Co2
              </button>
            </div>
            <div
              class="relative flex flex-1 flex-col items-stretch sm:flex-none"
              data-headlessui-state=""
            >
              <button
                class="group inline-flex ring-1 items-center font-poppins justify-center rounded-full text-[14px] py-1 px-5 text-sm bg-[#F6F6F6] ring-[#F6F6F6] w-28 text-slate-700 hover:text-slate-900 "
                id="headlessui-menu-button-:r4:"
                aria-haspopup="true"
                aria-expanded="false"
                data-headlessui-state=""
                type="button"
              >
                Climate
              </button>
            </div>
          </div>
          <div></div>
        </div>

        {/* card section*/}
        <section class="py-10 relative ">
          {/* filter section  */}
          <div className="flex flex-row justify-between w-full max-w-7xl mx-auto px-4 md:px-8 relative">
            {/* Sort By Button */}
            <div className="hidden sm:flex flex-col  sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
              <button className="group inline-flex ring-1 items-center text-[14px] py-1  justify-center rounded-sm   w-28  px-6 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 font-poppins">
                Sort By
              </button>
            </div>

            {/* Category Buttons */}
            <div className="grid grid-cols-5 gap-3 sm:flex-row gap-y-5 sm:mt-10 sm:gap-y-0 sm:gap-x-6">
              {["Plastic", "Ewaste", "Batteries", "Tyres", "Used Oil"].map(
                (item, index) => (
                  <button
                    key={index}
                    className="group inline-flex ring-1 font-poppins items-center justify-center rounded-full py-1 px-3 sm:px-5 text-[13px] sm:text-[14px] bg-white ring-white w-fit sm:w-28 text-slate-700 hover:text-white hover:bg-sky-600"
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <div className="relative">
              {/* Filter Button */}
              <div className="hidden sm:flex flex-col gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
                <button
                  className="group inline-flex ring-1 items-center justify-center py-1 px-5 text-sm rounded-sm focus:outline-none w-28 ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
                  onClick={() => setShowFilter(!showFilter)}
                >
                  <IoFilterOutline className="pr-2 text-2xl" />
                  Filter
                </button>
              </div>

              {/* Sliding Filter Sidebar */}
              <div
                className={`fixed top-0 right-0 h-full w-[300px] max-w-full bg-gray-50 shadow-lg p-6 z-50 transition-transform duration-300 ${
                  showFilter ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Popular Filters</h2>
                  <button
                    className="text-gray-400 hover:text-gray-600"
                    onClick={() => setShowFilter(false)}
                  >
                    &times;
                  </button>
                </div>

                {/* Filter Content (Scrollable) */}
                <div className="flex-1 overflow-y-auto max-h-[calc(100vh-200px)]">
                  <div className="space-y-4">
                    {/* Filter Item */}
                    {["Price", "Category", "Rating", "Availability"].map(
                      (filter, index) => (
                        <div
                          key={index}
                          className="bg-white p-5 rounded-md mt-5 mb-5"
                        >
                          <h3 className="text-sm font-medium text-gray-700 mb-2">
                            {filter}
                          </h3>
                          <div className="flex space-x-2">
                            <button className="flex-1 text-sm bg-gray-100 text-gray-600 py-2 rounded-lg border border-gray-200 hover:bg-sky-200 hover:border-sky-500 hover:text-white">
                              Low To High
                            </button>
                            <button className="flex-1 text-sm bg-gray-100 text-gray-600 py-2 rounded-lg border border-gray-200 hover:bg-sky-200 hover:border-sky-500 hover:text-white">
                              High To Low
                            </button>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Actions (Fixed at bottom) */}
                <div className="flex justify-between items-center mt-6">
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setShowFilter(false)}
                  >
                    Cancel
                  </button>
                  <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600">
                    Apply Now
                  </button>
                </div>
              </div>

              {/* Background Overlay (Optional) */}
              {showFilter && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-30 z-40"
                  onClick={() => setShowFilter(false)}
                ></div>
              )}
            </div>
          </div>

          {/* End filter section  */}

          <div class="w-full mx-auto py-10 px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="relative rounded-lg shadow-md overflow-hidden">
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full h-[380px]  object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-4 mb-2">
                  <h3 className=" font-medium text-white font-poppins text-[16px]">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative rounded-lg shadow-md overflow-hidden">
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full h-[380px]  object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-4 mb-2">
                  <h3 className=" font-medium text-white font-poppins text-[16px]">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative rounded-lg shadow-md overflow-hidden">
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full h-[380px] object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-4 mb-2">
                  <h3 className=" font-medium text-white font-poppins text-[16px]">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-0 mt-9">
                        {/* Card 1 */}
                        <div className="bg-gradient-to-r w-[363px] h-[344px]  md:w-[383px] md:h-[380px] from-blue-500 to-teal-400 rounded-lg shadow-md p-6 flex flex-col items-start ">
                          <div className="mt-auto">
                            <span className="px-3 md:px-0 py-1 w-[112px] h-[34px] text-[16px] bg-white text-green-500 font-poppins font-medium text-xs rounded-full mb-6">
                              Batteries
                            </span>
                            <h3 className="   font-semibold text-white font-poppins text-[30px] mt-3 leading-[45px]">
                              Song Giang 2 Hydro Power Project
                            </h3>
                          </div>
                        </div>
            
                        {/* Card 2 */}
                        <div className="relative rounded-lg shadow-md overflow-hidden w-[363px] md:w-[383px] md:h-[380px]  h-[344px] ">
                          <img
                            src={Card1}
                            alt="Hydro Power Project"
                            className="w-[363px] object-cover md:h-[409px]  md:w-[383px] h-[344px] "
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                          {/* Text Content */}
                          <div className="absolute bottom-0 left-0 p-4 mb-2">
                            <h3 className=" font-medium text-white font-poppins text-[16px]">
                              Song Giang 2 Hydro Power Project
                            </h3>
                          </div>
                        </div>
            
                        {/* Card 3 */}
                        <div className="bg-gradient-to-r w-[363px] h-[344px]  md:w-[383px] md:h-[380px] from-blue-500 to-teal-400 rounded-lg shadow-md p-6 flex flex-col items-start ">
                          <div className="mt-auto">
                            <span className="px-3 md:px-0 py-1 w-[112px] h-[34px] text-[16px] bg-white text-green-500 font-poppins font-medium text-xs rounded-full mb-6">
                              Batteries
                            </span>
                            <h3 className="   font-semibold text-white font-poppins text-[30px] mt-3 leading-[45px] ">
                              Song Giang 2 Hydro Power Project
                            </h3>
                          </div>
                        </div>
                      </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {/* Card 1 */}
              <div className="relative rounded-lg shadow-md overflow-hidden w-full h-[380px]">
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full object-cover   h-[380px]"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-4 mb-2">
                  <h3 className=" font-medium text-white font-poppins text-[16px]">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative rounded-lg shadow-md overflow-hidden ">
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full h-[380px] object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-4 mb-2">
                  <h3 className=" font-medium text-white font-poppins text-[16px]">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative rounded-lg shadow-md overflow-hidden">
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full h-[380px] object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-4 mb-2">
                  <h3 className="  font-medium text-white font-poppins text-[16px]">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-gradient-to-r w-[360px]  md:w-[383px] h-[380px] from-blue-500 to-teal-400 rounded-lg shadow-md p-6 flex flex-col items-start ">
                <div className="mt-auto">
                  <span className="px-3 py-1 w-[112px] h-[34px] text-[16px] bg-white text-green-500 font-poppins font-medium text-xs rounded-full mb-6">
                    Batteries
                  </span>
                  <h3 className="  font-semibold text-white font-poppins text-[30px] mt-3 leading-[45px]">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative rounded-lg shadow-md overflow-hidden w-full h-[380px]">
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full object-cover   h-[380px]"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-4 mb-2">
                  <h3 className=" font-medium text-white font-poppins text-[16px]">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-r w-[360px]  md:w-[383px] h-[380px] from-blue-500 to-teal-400 rounded-lg shadow-md p-6 flex flex-col items-start ">
                <div className="mt-auto">
                  <span className="px-3 py-1 w-[112px] h-[34px] text-[16px] bg-white text-green-500 font-poppins font-medium text-xs rounded-full mb-6">
                    Batteries
                  </span>
                  <h3 className="  font-semibold text-white font-poppins text-[30px] mt-3 leading-[45px]">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* End card section*/}
    </>
  );
}

export default Home;

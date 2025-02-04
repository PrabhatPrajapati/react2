import React from "react";
import backgroundImage from "../assets/semicircke.png";
import { IoFilterOutline } from "react-icons/io5";
import Card1 from "../assets/photo-1712417827761-7a68ff4a90f3.jpg";
import { useState } from "react";

function Home() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      <div
        class="relative  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: " auto 500px",
          backgroundPosition: "top",
          width: "100%",
        }}
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20  text-center lg:pt-32 ">
          <h1 class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            <span class="inline-block text-3xl sm:text-7xl">
              Discover the world's{" "}
            </span>

            <span class="inline-block text-3xl sm:text-7xl   text-slate-900">
              top designers
            </span>
          </h1>

          <p class="mx-auto mt-9 max-w-2xl text-lg tracking-tight text-slate-700 sm:mt-6">
            <span class="inline-block">
              Explore work from the most talented and accomplished
            </span>
            <span class="inline-block">
              designers ready to take on your next project.
            </span>
          </p>

          <div class="mt-12 flex flex-col justify-center gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
            <div class="relative w-full max-w-xl mx-auto bg-white rounded-full">
              <input
                placeholder="What are you looking for ?"
                class="rounded-full w-full h-14 bg-sky-50 py-2 pl-8 pr-32 outline-none  shadow-md hover:outline-none "
                type="text"
                name="query"
                id="query"
              />
              <button
                type="submit"
                class="absolute inline-flex items-center h-10 p-[12px] rounded-full  text-white   right-3 top-3 bg-sky-600     "
              >
                <svg
                  class=" w-4 h-4 "
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
                class="group  items-center justify-center  py-2 px-4 text-sm  text-slate-700  "
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
                class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none bg-slate-200 ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
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
                class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm bg-slate-200 focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
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
                class="group inline-flex ring-1 items-center justify-center rounded-full bg-slate-200 py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
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
                class="group inline-flex ring-1 items-center justify-center rounded-full bg-slate-200 py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
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
                class="group inline-flex ring-1 items-center justify-center rounded-full bg-slate-200 py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
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
                class="group inline-flex ring-1 items-center justify-center rounded-full py-2 bg-slate-200 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
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
            <div className="hidden sm:flex flex-col gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
              <button className="group inline-flex ring-1 items-center justify-center py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300">
                Sort By
              </button>
            </div>

            {/* Category Buttons */}
            <div className="grid grid-cols-5 gap-3 sm:flex-row gap-y-5 sm:mt-10 sm:gap-y-0 sm:gap-x-6">
              {["Plastic", "Ewaste", "Batteries", "Tyres", "Used Oil"].map(
                (item, index) => (
                  <button
                    key={index}
                    className="text-xs sm:text-sm group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 focus:outline-none ring-slate-200 text-slate-700 hover:bg-sky-600 active:bg-sky-600 active:text-white hover:text-white focus-visible:outline-blue-600 focus-visible:ring-slate-300"
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Filter Button */}
            <div className="relative hidden sm:flex flex-col gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
              <button
                className="group inline-flex ring-1 items-center justify-center py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
                onClick={() => setShowFilter(!showFilter)}
              >
                <IoFilterOutline className="pr-2 text-2xl" />
                Filter
              </button>
            </div>

            {/* Filter Dropdown (Positioned below the Filter Button) */}
            {showFilter && (
              <div className="absolute top-full mt-2 left-0 sm:left-auto sm:right-0 bg-gray-50 shadow-lg rounded-2xl w-[300px] max-w-full p-6 z-50">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Popular Filters</h2>
                  <button
                    className="text-gray-400 hover:text-gray-600"
                    onClick={() => setShowFilter(false)}
                  >
                    &times;
                  </button>
                </div>
                <div className="space-y-4">
                  {/* Filter Item */}
                  <div className="bg-white p-5 rounded-md mt-5 mb-5">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Price
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

                  <div className="bg-white p-5 rounded-md mt-5 mb-5">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Price
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

                  <div className="bg-white p-5 rounded-md mt-5 mb-5">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Price
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

                  <div className="bg-white p-5 rounded-md mt-5 mb-5">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Price
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

                  
                </div>
                {/* Actions */}
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
            )}
          </div>

          {/* End filter section  */}

          <div class="w-full mx-auto py-10 px-4 md:px-8 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="relative rounded-lg shadow-md overflow-hidden">
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full h-[280px] object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-4 mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative rounded-lg shadow-md overflow-hidden">
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full h-[280px] object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-4 mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative rounded-lg shadow-md overflow-hidden">
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full h-[280px] object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-4 mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>
            </div>
            <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-md p-6 flex flex-col items-start h-[280px]">
                <div className="mt-auto">
                  <span className="px-3 py-1 bg-white text-green-500 font-medium text-xs rounded-full mb-4">
                    Batteries
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative rounded-lg shadow-md overflow-hidden">
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full h-64 object-cover h-[280px]"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-4 mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-r from-green-500 to-teal-400 rounded-lg shadow-md p-6 flex flex-col items-start h-[280px]">
                <div className="mt-auto">
                  <span className="px-3 py-1 bg-white text-green-500 font-medium text-xs rounded-full mb-4">
                    Batteries
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {/* Card 1 */}
              <div className="relative rounded-lg shadow-md overflow-hidden h-[280px]">
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full h-[280px] object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-4 mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative rounded-lg shadow-md overflow-hidden">
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full h-[280px] object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-4 mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative rounded-lg shadow-md overflow-hidden">
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full h-[280px] object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-4 mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-md p-6 flex flex-col items-start h-[280px]">
                <div className="mt-auto">
                  <span className="px-3 py-1 bg-white text-green-500 font-medium text-xs rounded-full mb-4">
                    Batteries
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative rounded-lg shadow-md overflow-hidden h-[280px]">
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full object-cover h-[280px]"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-4 mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-r from-green-500 to-teal-400 rounded-lg shadow-md p-6 flex flex-col items-start h-[280px]">
                <div className="mt-auto">
                  <span className="px-3 py-1 bg-white text-green-500 font-medium text-xs rounded-full mb-4">
                    Batteries
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    Song Giang 2 Hydro Power Project
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* End card section*/}
      </div>
    </>
  );
}

export default Home;

import React from "react";
import backgroundImage from "../assets/semicircke.png";
import { IoFilterOutline } from "react-icons/io5";
import Card1 from "../assets/photo-1712417827761-7a68ff4a90f3.jpg";
import { useState } from "react";
import Chec from "../assets/7bb302cbe595dd1ee2a55ed90ef361ca.png";
import Filter from "../admin/filter";


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
                className={`fixed top-0 right-0 h-full max-w-full bg-gray-50 shadow-lg p-6 z-50 transition-transform duration-300 ${
                  showFilter ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <Filter/>
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
            {/*  */}

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="bg-gradient-to-b from-[#04A2D1] to-[#02536B] text-white p-6 rounded-xl shadow-lg w-full h-[380px] flex flex-col justify-end">
                <div>
                  <p class=" text-[14px] font-medium font-poppins">
                    Credit Type | Batteries Waste
                  </p>
                  <h2 class="mt-2 text-[18px] font-poppins font-medium ">
                    Song Giang 2 Hydro Power Project
                  </h2>
                  <p class="text-[18px] font-light mt-2">INR 120000/Tonne</p>
                  <div class="mt-2 bg-[#FFFFFF]  p-3 rounded-lg bg-opacity-30 backdrop-blur-md ">
                    <p className="mb-1">
                      Available Credit{" "}
                      <span class="float-right">12000 tonne</span>
                    </p>
                    <p className="text-[14px] font-medium font-poppins">
                      Minimum Purchase{" "}
                      <span class="float-right text-[14px] font-light font-poppins">120 tonne</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="relative bg-black text-white p-6 rounded-xl shadow-lg overflow-hidden h-[380px] flex flex-col justify-end">
                {/* <img src="https://source.unsplash.com/500x300/?volcano" alt="Project Image" class="absolute inset-0 w-full h-full object-cover opacity-50"> */}
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full object-cover   h-[380px] absolute inset-0  opacity-50"
                />
                <div class="relative z-10">
                <p class=" text-[14px] font-medium font-poppins">
                    Credit Type | Batteries Waste
                  </p>
                  <h2 class="mt-2 text-[18px] font-poppins font-medium ">
                    Song Giang 2 Hydro Power Project
                  </h2>
                  <p class="text-[18px] font-light mt-2">INR 120000/Tonne</p>
                  <div class="mt-2 bg-black p-3 rounded-lg bg-opacity-30 backdrop-blur-md ">
                    <p className="mb-1">
                      Available Credit{" "}
                      <span class="float-right">12000 tonne</span>
                    </p>
                    <p className="text-[14px] font-medium font-poppins">
                      Minimum Purchase{" "}
                      <span class="float-right text-[14px] font-light font-poppins">120 tonne</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-b from-[#125D2D] to-[#43AC4D] text-white p-6 rounded-xl shadow-lg w-full h-[380px] flex flex-col justify-end">
                <div>
                <p class=" text-[14px] font-medium font-poppins">
                    Credit Type | Batteries Waste
                  </p>
                  <h2 class="mt-2 text-[18px] font-poppins font-medium ">
                    Song Giang 2 Hydro Power Project
                  </h2>
                  <p class="text-[18px] font-light mt-2">INR 120000/Tonne</p>
                  <div class="mt-2 bg-green-500 bg-opacity-30 backdrop-blur-md p-3 rounded-lg">
                    <p className="mb-1">
                      Available Credit{" "}
                      <span class="float-right">12000 tonne</span>
                    </p>
                    <p className="text-[14px] font-medium font-poppins">
                      Minimum Purchase{" "}
                      <span class="float-right text-[14px] font-light font-poppins">120 tonne</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class=" bg-gradient-to-b from-[#04A2D1] to-[#02536B] text-white p-6 rounded-xl shadow-lg w-full h-[380px] flex flex-col justify-end">
                <div>
                  <p class=" text-[14px] font-medium font-poppins">
                    Credit Type | Batteries Waste
                  </p>
                  <h2 class="mt-2 text-[18px] font-poppins font-medium ">
                    Song Giang 2 Hydro Power Project
                  </h2>
                  <p class="text-[18px] font-light mt-2">INR 120000/Tonne</p>
                  <div class="mt-2 bg-[#FFFFFF] p-3 rounded-lg bg-opacity-30 backdrop-blur-md ">
                    <p className="mb-1">
                      Available Credit{" "}
                      <span class="float-right">12000 tonne</span>
                    </p>
                    <p className="text-[14px] font-medium font-poppins">
                      Minimum Purchase{" "}
                      <span class="float-right text-[14px] font-light font-poppins">120 tonne</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="relative bg-black text-white p-6 rounded-xl shadow-lg overflow-hidden h-[380px] flex flex-col justify-end">
                {/* <img src="https://source.unsplash.com/500x300/?volcano" alt="Project Image" class="absolute inset-0 w-full h-full object-cover opacity-50"> */}
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full object-cover   h-[380px] absolute inset-0  opacity-50"
                />
                <div class="relative z-10">
                <p class=" text-[14px] font-medium font-poppins">
                    Credit Type | Batteries Waste
                  </p>
                  <h2 class="mt-2 text-[18px] font-poppins font-medium ">
                    Song Giang 2 Hydro Power Project
                  </h2>
                  <p class="text-[18px] font-light mt-2">INR 120000/Tonne</p>
                  <div class="mt-2 bg-black p-3 rounded-lg bg-opacity-30 backdrop-blur-md ">
                    <p className="mb-1">
                      Available Credit{" "}
                      <span class="float-right">12000 tonne</span>
                    </p>
                    <p className="text-[14px] font-medium font-poppins">
                      Minimum Purchase{" "}
                      <span class="float-right text-[14px] font-light font-poppins">120 tonne</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-b from-[#125D2D] to-[#43AC4D] text-white p-6 rounded-xl shadow-lg w-full h-[380px] flex flex-col justify-end">
                <div>
                <p class=" text-[14px] font-medium font-poppins">
                    Credit Type | Batteries Waste
                  </p>
                  <h2 class="mt-2 text-[18px] font-poppins font-medium ">
                    Song Giang 2 Hydro Power Project
                  </h2>
                  <p class="text-[18px] font-light mt-2">INR 120000/Tonne</p>
                  <div class="mt-2 bg-[#FFFFFF]  bg-opacity-30 backdrop-blur-md p-3 rounded-lg">
                    <p className="mb-1">
                      Available Credit{" "}
                      <span class="float-right">12000 tonne</span>
                    </p>
                    <p className="text-[14px] font-medium font-poppins">
                      Minimum Purchase{" "}
                      <span class="float-right text-[14px] font-light font-poppins">120 tonne</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-b from-[#04A2D1] to-[#02536B] text-white p-6 rounded-xl shadow-lg w-full h-[380px] flex flex-col justify-end">
                <div>
                  <p class=" text-[14px] font-medium font-poppins">
                    Credit Type | Batteries Waste
                  </p>
                  <h2 class="mt-2 text-[18px] font-poppins font-medium ">
                    Song Giang 2 Hydro Power Project
                  </h2>
                  <p class="text-[18px] font-light mt-2">INR 120000/Tonne</p>
                  <div class="mt-2 bg-[#FFFFFF]  to-[#02536B] p-3 rounded-lg bg-opacity-30 backdrop-blur-md ">
                    <p className="mb-1">
                      Available Credit{" "}
                      <span class="float-right">12000 tonne</span>
                    </p>
                    <p className="text-[14px] font-medium font-poppins">
                      Minimum Purchase{" "}
                      <span class="float-right text-[14px] font-light font-poppins">120 tonne</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="relative bg-black text-white p-6 rounded-xl shadow-lg overflow-hidden h-[380px] flex flex-col justify-end">
                {/* <img src="https://source.unsplash.com/500x300/?volcano" alt="Project Image" class="absolute inset-0 w-full h-full object-cover opacity-50"> */}
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full object-cover   h-[380px] absolute inset-0  opacity-50"
                />
                <div class="relative z-10">
                <p class=" text-[14px] font-medium font-poppins">
                    Credit Type | Batteries Waste
                  </p>
                  <h2 class="mt-2 text-[18px] font-poppins font-medium ">
                    Song Giang 2 Hydro Power Project
                  </h2>
                  <p class="text-[18px] font-light mt-2">INR 120000/Tonne</p>
                  <div class="mt-2 bg-black p-3 rounded-lg bg-opacity-30 backdrop-blur-md ">
                    <p className="mb-1">
                      Available Credit{" "}
                      <span class="float-right">12000 tonne</span>
                    </p>
                    <p className="text-[14px] font-medium font-poppins">
                      Minimum Purchase{" "}
                      <span class="float-right text-[14px] font-light font-poppins">120 tonne</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-b from-[#125D2D] to-[#43AC4D] text-white p-6 rounded-xl shadow-lg w-full h-[380px] flex flex-col justify-end">
                <div>
                <p class=" text-[14px] font-medium font-poppins">
                    Credit Type | Batteries Waste
                  </p>
                  <h2 class="mt-2 text-[18px] font-poppins font-medium ">
                    Song Giang 2 Hydro Power Project
                  </h2>
                  <p class="text-[18px] font-light mt-2">INR 120000/Tonne</p>
                  <div class="mt-2 bg-[#FFFFFF]  bg-opacity-30 backdrop-blur-md p-3 rounded-lg">
                    <p className="mb-1">
                      Available Credit{" "}
                      <span class="float-right">12000 tonne</span>
                    </p>
                    <p className="text-[14px] font-medium font-poppins">
                      Minimum Purchase{" "}
                      <span class="float-right text-[14px] font-light font-poppins">120 tonne</span>
                    </p>
                  </div>
                </div>
              </div>


              <div class="bg-gradient-to-b from-[#04A2D1] to-[#02536B] text-white p-6 rounded-xl shadow-lg w-full h-[380px] flex flex-col justify-end">
                <div>
                  <p class=" text-[14px] font-medium font-poppins">
                    Credit Type | Batteries Waste
                  </p>
                  <h2 class="mt-2 text-[18px] font-poppins font-medium ">
                    Song Giang 2 Hydro Power Project
                  </h2>
                  <p class="text-[18px] font-light mt-2">INR 120000/Tonne</p>
                  <div class="mt-2 bg-[#FFFFFF]  p-3 rounded-lg bg-opacity-30 backdrop-blur-md ">
                    <p className="mb-1">
                      Available Credit{" "}
                      <span class="float-right">12000 tonne</span>
                    </p>
                    <p className="text-[14px] font-medium font-poppins">
                      Minimum Purchase{" "}
                      <span class="float-right text-[14px] font-light font-poppins">120 tonne</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="relative bg-black text-white p-6 rounded-xl shadow-lg overflow-hidden h-[380px] flex flex-col justify-end">
                {/* <img src="https://source.unsplash.com/500x300/?volcano" alt="Project Image" class="absolute inset-0 w-full h-full object-cover opacity-50"> */}
                <img
                  src={Card1}
                  alt="Hydro Power Project"
                  className="w-full object-cover   h-[380px] absolute inset-0  opacity-50"
                />
                <div class="relative z-10">
                <p class=" text-[14px] font-medium font-poppins">
                    Credit Type | Batteries Waste
                  </p>
                  <h2 class="mt-2 text-[18px] font-poppins font-medium ">
                    Song Giang 2 Hydro Power Project
                  </h2>
                  <p class="text-[18px] font-light mt-2">INR 120000/Tonne</p>
                  <div class="mt-2 bg-black p-3 rounded-lg bg-opacity-30 backdrop-blur-md ">
                    <p className="mb-1">
                      Available Credit{" "}
                      <span class="float-right">12000 tonne</span>
                    </p>
                    <p className="text-[14px] font-medium font-poppins">
                      Minimum Purchase{" "}
                      <span class="float-right text-[14px] font-light font-poppins">120 tonne</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-b from-[#125D2D] to-[#43AC4D] text-white p-6 rounded-xl shadow-lg w-full h-[380px] flex flex-col justify-end">
                <div>
                <p class=" text-[14px] font-medium font-poppins">
                    Credit Type | Batteries Waste
                  </p>
                  <h2 class="mt-2 text-[18px] font-poppins font-medium ">
                    Song Giang 2 Hydro Power Project
                  </h2>
                  <p class="text-[18px] font-light mt-2">INR 120000/Tonne</p>
                  <div class="mt-2 bg-[#FFFFFF]  bg-opacity-30 backdrop-blur-md p-3 rounded-lg">
                    <p className="mb-1">
                      Available Credit{" "}
                      <span class="float-right">12000 tonne</span>
                    </p>
                    <p className="text-[14px] font-medium font-poppins">
                      Minimum Purchase{" "}
                      <span class="float-right text-[14px] font-light font-poppins">120 tonne</span>
                    </p>
                  </div>
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

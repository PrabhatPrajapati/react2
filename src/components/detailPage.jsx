import React from "react";
import Banner1 from "../assets/7bb302cbe595dd1ee2a55ed90ef361ca.png";
import Card1 from "../assets/photo-1712417827761-7a68ff4a90f3.jpg";

const detailPage = () => {
  return (
    <>
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-[300px] md:h-[400px]"
          alt=""
        />
        {/* <div className="relative bg-gray-900 bg-opacity-75 w-full h-[300px] md:h-[400px] max-w-7xl">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-wrap items-center justify-between xl:flex-row">
              <div className="lg:pl-10 xl:pl-[0px] md:pl-10 w-full max-w-xl xl:mb-0 xl:pr-16 xl:w-7/12">
                <div
                  className="sm:pr-56 relative flex flex-1 flex-col items-stretch sm:flex-none"
                  data-headlessui-state=""
                >
                  <button
                    className="group inline-flex ring-1 mr-36 sm:mr-3 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-sky-500 hover:bg-sky-600 active:bg-sky-600 bg-white font-semibold hover:text-white focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
                    id="headlessui-menu-button-:r4:"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-headlessui-state=""
                    type="button"
                  >
                    Credit Type | Waste Type
                  </button>
                </div>
                <h2 className="max-w-xl mb-4 text-base text-white font-bold md:text-lg mt-2">
                  Generating Renewable Energy by Hydro Power Project
                </h2>
              </div>
            </div>
          </div>
        </div> */}
        <div className="relative bg-opacity-75 w-full h-[300px] md:h-[400px] max-w-7xl mx-auto">
          <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 flex flex-col h-full">
            <div className="lg:pl-10 xl:pl-0 md:pl-10 w-full max-w-xl xl:w-7/12 flex flex-col justify-between h-full">
              {/* Text Section (at the top) */}

              {/* Button Section (at the bottom) */}
              <div className="relative flex flex-col items-start sm:flex-none mt-auto px-3">
                <button
                  className="group inline-flex ring-1 mr-36 sm:mr-3 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-sky-500 hover:bg-sky-600 active:bg-sky-600 bg-white font-semibold hover:text-white focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
                  id="headlessui-menu-button-:r4:"
                  aria-haspopup="true"
                  aria-expanded="false"
                  type="button"
                >
                  Credit Type | Waste Type
                </button>

                <h2 className="max-w-xl text-base text-white font-bold md:text-lg mt-2">
                  Generating Renewable Energy by Hydro Power Project
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full max-w-7xl mx-auto p-4 gap-6">
        {/* Left Section (60%) */}
        <div className="w-full sm:w-[60%]">
          <div className="bg-white  sm:p-10 rounded-lg ">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-gray-700 mb-4">
              The Song Giang hydropower project will produce enough energy to
              power 74,000 households of Vietnam and will offset approximately
              110,000 tonnes of carbon emissions annually.
            </p>
            <p className="text-gray-700 mb-6">
              The projects will be constructed and upgraded to meet
              international quality standards and comply with the World Bank's
              environmental and social standards.
            </p>

            <h2 className="text-2xl font-bold mb-4">Key Sustainable Points</h2>
            <div className="grid gap-4">
              {[
                {
                  title: "Sustainable Cities and Communities",
                  description:
                    "Promote urban development that is inclusive, safe, resilient, and sustainable.",
                },
                {
                  title: "Climate Action",
                  description:
                    "Take urgent steps to combat climate change and its impacts through mitigation.",
                },
                {
                  title: "Life on Land",
                  description:
                    "Protect, restore, and promote the sustainable use of terrestrial ecosystems .",
                },
              ].map((point, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg  bg-gray-50 hover:bg-gray-100"
                >
                  <div className=" flex flex-row">
                    <div className="bg-sky-200 rounded-md text-sky-200">
                      fdfhdsd
                    </div>
                    <div className="pl-4">
                      <h3 className="font-semibold text-lg mb-2">
                        {point.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map Embed */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <div className="relative w-full h-64">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.google.com/maps/embed?..."
                  frameBorder="0"
                  allowFullScreen
                  title="Google Map"
                ></iframe>
              </div>
            </div>

            <div className=" bg-gray-50 flex flex-col items-center mt-6">
              {/* Main Container */}
              <div className="w-full max-w-4xl bg-white rounded-lg ">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-5 p-2 border rounded-md">
                  {/* Country and Company */}
                  <div>
                    <p className="font-semibold text-gray-500">Country</p>
                    <p className="text-gray-700">India</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500">
                      Company
                    </p>
                    <p className="text-gray-700">Title Company Name</p>
                  </div>
                  {/* Address */}
                  <div className="col-span-2">
                    <p className="text-sm font-semibold text-gray-500">
                      Address
                    </p>
                    <p className="text-gray-700">
                      Terrace, Flat No. 303, Sairung Society, Susgaon, Pune,
                      Maharashtra 411021, India
                    </p>
                  </div>
                </div>

                {/* Certification Image */}
                <div className="mt-4 mb-4">
                  <p className="text-2xl font-bold mb-4">Certification</p>
                  <div className="w-full border-2 border-blue-500 rounded-lg overflow-hidden">
                    <img
                      src={Banner1}
                      alt="Certification"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 pb-5 p-2 border rounded-md">
                  {/* City */}
                  <div>
                    <p className="text-sm font-semibold text-gray-500">City</p>
                    <p className="text-lg font-bold text-gray-700">India</p>
                  </div>
                  {/* State */}
                  <div>
                    <p className="text-sm font-semibold text-gray-500">State</p>
                    <p className="text-lg font-bold text-gray-700">India</p>
                  </div>
                  {/* Registered On */}
                  <div>
                    <p className="text-sm font-semibold text-gray-500">
                      Registered On
                    </p>
                    <p className="text-lg font-bold text-gray-700">
                      30th Nov, 99
                    </p>
                  </div>
                  {/* Status */}
                  <div>
                    <p className="text-sm font-semibold text-gray-500">
                      Status
                    </p>
                    <p className="text-lg font-bold text-gray-700">
                      30th Nov, 99
                    </p>
                  </div>
                  {/* Type */}
                  <div className="col-span-2 md:col-span-4">
                    <p className="text-sm font-semibold text-gray-500">Type</p>
                    <p className="text-lg font-bold text-gray-700">Recycler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (40%) - Payment Card */}
        <div className="w-full sm:w-[40%]  lg:-mt-32 z-50">
          <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Review Payment
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between">
                <span className="font-semibold">Price Per Credit</span>
                <span className="font-medium">INR 100000/Ton</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>FY</span>
                <select className="border rounded-md text-gray-700 px-2 py-1">
                  <option value="2024">2024</option>
                </select>
              </div>

              {/* Amount Section */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold">Amount (Kg/Ton)</span>
                  <div className="flex items-center bg-gray-100 border rounded-md overflow-hidden">
                    <button className="w-10 h-8 flex justify-center items-center bg-gray-200 text-gray-600">
                      -
                    </button>
                    <input
                      type="text"
                      value="1000"
                      className="w-16 text-center border-l border-r bg-white"
                      readOnly
                    />
                    <button className="w-10 h-8 flex justify-center items-center bg-gray-200 text-gray-600">
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Payment Breakdown */}
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Discount</span>
                  <span className="font-medium">INR 2000</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Transaction Fee</span>
                  <span className="font-medium">INR 50</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">VAT</span>
                  <span className="font-medium">INR 20</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>INR 2010</span>
                </div>
              </div>

              {/* Buttons */}
              <button className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Buy Now
              </button>
              <button className="w-full py-2 text-blue-600 rounded-md hover:underline transition">
                Back To Listing
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div class="w-full mx-auto py-10 px-3 md:px-8 max-w-7xl">
          <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-r w-[360px]  md:w-[383px] h-[380px] from-blue-500 to-teal-400 rounded-lg shadow-md p-6 flex flex-col items-start ">
              <div className="mt-auto">
                <span className="px-3 py-1 w-[112px] h-[34px] text-[16px] bg-white text-green-500 font-poppins font-medium text-xs rounded-full mb-6">
                  Batteries
                </span>
                <h3 className="text-lg   font-semibold text-white font-poppins text-[30px] mt-3 leading-[45px]">
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
                <h3 className="text-lg   font-semibold text-white font-poppins text-[30px] mt-3 leading-[45px]">
                  Song Giang 2 Hydro Power Project
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 bg-white text-center text-gray-500 shadow-md py-3">
        © Copyright 2025 –{" "}
        <span className="text-blue-500 font-medium">Circle-O</span>
      </div>
    </>
  );
};

export default detailPage;

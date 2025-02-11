import React from "react";
import Banner1 from "../assets/image (1).png";
import Banner2 from "../assets/7bb302cbe595dd1ee2a55ed90ef361ca.png";
import Card1 from "../assets/photo-1712417827761-7a68ff4a90f3.jpg";
import { useState } from "react";

const detailPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="relative">
        <img
          src={Banner1}
          className="absolute inset-0 object-cover w-full h-[409px] md:h-[400px]"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
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
        <div className="relative bg-opacity-75 w-full h-[409px]  md:h-[400px] max-w-7xl mx-auto">
          <div className=" py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl   lg:py-10 flex flex-col h-full">
            <div className="lg:pl-10 xl:pl-0 md:pl-10  flex flex-col justify-between h-full px-4">
              {/* Text Section (at the top) */}

              {/* Button Section (at the bottom) */}
              <div className="relative flex flex-col items-start sm:flex-none mt-auto ">
                <button
                  className="group inline-flex ring-1  sm:mr-3 text-[12px] items-center justify-center rounded-full py-2 px-4 text-sm  text-white md:text-sky-500 bg-sky-500 md:bg-white font-poppins font-semibold "
                  id="headlessui-menu-button-:r4:"
                  aria-haspopup="true"
                  aria-expanded="false"
                  type="button"
                >
                  Credit Type | Waste Type
                </button>

                <h2 className=" text-[18px] md:text-[32px] text-white font-semibold  mt-2 font-poppins ">
                  Generating Renewable Energy by Hydro Power Project
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* for mobile payment  */}
      <div className="w-full  block md:hidden">
        <div className="  mx-auto p-6 bg-white rounded-lg ">
          <h2 className="text-xl font-semibold text-gray-800 mb-4  text-[18px] font-poppins mt-3 ">
            Review Payment
          </h2>
          <div className="space-y-4 text-gray-700 mt-10">
            <div className="flex justify-between">
              <span className="font-semibold font-poppins text-[14px]  ">
                Price Per Credit
              </span>
              <span className="font-normal text-[14px] font-poppins ">
                INR 100000/Ton
              </span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="font-semibold font-poppins text-[14px] ">
                FY
              </span>
              <select className="border rounded-md text-gray-700 px-2 py-1">
                <option value="2024 font-normal text-[14px] font-poppins">
                  2024
                </option>
              </select>
            </div>

            {/* Amount Section */}
            <div className="">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold font-poppins text-[14px] ">
                  Amount (Kg)
                </span>
                <div className="flex items-center  border rounded-md overflow-hidden">
                  <button className="w-10 h-8 flex justify-center items-center  text-gray-600">
                    -
                  </button>
                  <input
                    type="text"
                    value="1000"
                    className="w-16 text-center border-l border-r bg-white font-normal text-[14px] font-poppins"
                    readOnly
                  />
                  <button className="w-10 h-8 flex justify-center items-center  text-gray-600">
                    +
                  </button>
                </div>
              </div>
              <div className=" pt-4 bg-[#F7F7F7] p-4 rounded-lg">
                <div className="flex justify-between">
                  <span className="font-semibold font-poppins text-[14px]">
                    Available Credit
                  </span>
                  <span className="font-normal text-[14px] font-poppins">
                    10000 ton
                  </span>
                </div>
                <div className="flex justify-between mt-4">
                  <span className="font-semibold font-poppins text-[14px]">
                    Minimum Purchases
                  </span>
                  <span className="font-normal text-[14px] font-poppins">
                    10 ton
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Breakdown */}
            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span className="font-semibold font-poppins text-[14px]">
                  Discount
                </span>
                <span className="font-light font-poppins text-[14px]">
                  INR 2000
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold font-poppins text-[14px]">
                  Transaction Fee
                </span>
                <span className="font-light font-poppins text-[14px]">
                  INR 50
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold font-poppins text-[14px]">
                  VAT
                </span>
                <span className="font-light font-poppins text-[14px]">
                  INR 20
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span className="font-semibold font-poppins text-[14px]">
                  Total
                </span>
                <span className="font-light font-poppins text-[14px]">
                  INR 2010
                </span>
              </div>
            </div>

            {/* Buttons */}
            <button className="w-full py-2 bg-[#04A2D1] text-white rounded-md border border-[#0E7897] hover:bg-[#04A2D1]transition text-[16px] font-semibold">
              Buy Now
            </button>
            <button onClick={handleModalToggle} className="w-full py-2 bg-white text-[#04A2D0] rounded-md border border-[#04A2D0] hover:bg-[#04A2D1] hover:text-white transition text-[16px] font-semibold">
              Make An Offer
            </button>
            <button className="w-full py-2 text-[#04A2D1] rounded-md hover:underline transition underline" >
              Back To Listing
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row w-full max-w-7xl mx-auto gap-2 md:mt-20 mb-20">
        {/* Left Section (60%) */}
        <div className="w-full sm:w-[853px]">
          <div className="bg-white   rounded-lg ">
            <h2 className="text-[20px] font-medium	  mb-4 font-poppins hidden md:block">
              Supporting Documentation
            </h2>
            <p className="text-gray-700 mb-4 font-poppins text-[15px] font-light	 leading-7 hidden md:block">
              The Song Giang hydropower project will produce enough energy to
              power 74,000 households of Vietnam and will offset approximately
              110,000 tonnes of carbon emissions annually. It will also directly
              create 250 jobs during the construction of Song Giang 1 and will
              sustain 50 long term jobs during operation. It will also directly
              and indirectly contribute to the economic development of the
              region in other meaningful ways.
            </p>
            <p className="text-gray-700 mb-4 font-poppins text-[18px] font-light	 leading-7 hidden md:block">
              The projects will be constructed and upgraded to meet
              international quality standards and to comply with the World
              Bank’s environmental and social standards.
            </p>

            <h2 className="text-[20px] font-medium	  mb-4 font-poppins hidden md:block">
              Key Sustainable Points
            </h2>
            <div className="grid gap-4 border rounded-lg  border-[#E6E6E6] md:mx-0 mx-3">
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
                // {
                //   title: "Life in Water",
                //   description:
                //     "Conserve and sustainably manage oceans, seas, and marine resources for sustainable development.",
                // },
                // {
                //   title: "Life on Land",
                //   description:
                //     "Protect, restore, and promote the sustainable use of terrestrial ecosystems and biodiversity.",
                // },
              ].map((point, index) => (
                <div key={index} className="p-4 ">
                  <div className=" flex flex-row">
                    <div className="bg-sky-200 rounded-md text-sky-200 w-[40px] h-[40px] md:w-[64px] md:h-[64px]">
                      hfgvd
                    </div>
                    <div className="pl-4">
                      <h3 className="font-medium text-[14px] md:text-[20px] mb-1 font-poppins">
                        {point.title}
                      </h3>
                      <p className="font-light text-[12px] md:text-[14px]  text-black uppercase font-poppins">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map Embed */}
            <div className="mt-6 px-3 md:px-0">
              <h2 className="text-[18px] md:text-[27px] font-medium	  mb-4 font-poppins">
                Recycler Info
              </h2>
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

            <div className=" bg-gray-50 flex flex-col items-center mt-6 px-3 md:px-0">
              {/* Main Container */}
              <div className="w-full max-w-4xl bg-white rounded-lg  ">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-5 p-5 border rounded-md ">
                  {/* Country and Company */}
                  <div>
                    <p className="text-[18px] font-medium font-poppins text-black">
                      Country
                    </p>
                    <p className="text-[#808080] font-normal text-[16px] mt-1">
                      India
                    </p>
                  </div>
                  <div>
                    <p className="text-[18px] font-medium font-poppins text-black">
                      Company
                    </p>
                    <p className="text-[#808080] font-normal text-[16px] mt-1">
                      Title Company Name
                    </p>
                  </div>
                  {/* Address */}
                  <div className="col-span-2">
                    <p className="text-[18px] font-medium font-poppins text-black ">
                      Address
                    </p>
                    <p className="text-[#808080] font-light text-[18px] mt-1	">
                      Terrace, Flat No. 303, Sairung Society, Susgaon, Pune,
                      Maharashtra 411021, India
                    </p>
                  </div>
                </div>

                {/* Certification Image */}
                <div className="mt-4 mb-4">
                  <p className="text-[18px] md:text-[27px] font-medium	  mb-4 font-poppins">
                    Certification
                  </p>
                  <div className="w-full border-2 border-blue-500 rounded-lg overflow-hidden">
                    <img
                      src={Banner2}
                      alt="Certification"
                      className="w-[362px] h-[168px] md:w-[853px] md:h-[398px]"
                    />
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 pb-5 p-5 border rounded-md">
                  <div className="mt-2">
                    <p className="text-[18px] font-medium font-poppins text-black">
                      City
                    </p>
                    <p className="text-[#808080] font-normal text-[16px] mt-1">
                      India
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-[18px] font-medium font-poppins text-black">
                      State
                    </p>
                    <p className="text-[#808080] font-normal text-[16px] mt-1">
                      India
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-[18px] font-medium font-poppins text-black">
                      Registered On
                    </p>
                    <p className="text-[#808080] font-normal text-[16px] mt-1">
                      30th Nov, 99
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-[18px] font-medium font-poppins text-black">
                      Status
                    </p>
                    <p className="text-[#808080] font-normal text-[16px] mt-1">
                      30th Nov, 99
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="text-[18px] font-medium font-poppins text-black">
                      Type
                    </p>
                    <p className="text-[#808080] font-normal text-[16px] mt-1">
                      Recycler
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (40%) - Payment Card */}
        <div className="w-full sm:w-[30%]  lg:-mt-56 z-20 ml-8 hidden md:block">
          <div className=" w-[433px] h-[643px] mx-auto p-6 bg-white rounded-lg shadow-[0px_2px_18px_0px_rgba(0,0,0,0.12)]">
            <h2 className="text-xl font-semibold text-gray-800 mb-4  text-[18px] font-poppins mt-3 ">
              Review Payment
            </h2>
            <div className="space-y-4 text-gray-700 mt-10">
              <div className="flex justify-between">
                <span className="font-semibold font-poppins text-[14px]  ">
                  Price Per Credit
                </span>
                <span className="font-normal text-[14px] font-poppins ">
                  INR 100000/Ton
                </span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="font-semibold font-poppins text-[14px] ">
                  FY
                </span>
                <select className="border rounded-md text-gray-700 px-2 py-1">
                  <option value="2024 font-normal text-[14px] font-poppins">
                    2024
                  </option>
                </select>
              </div>

              {/* Amount Section */}
              <div className="">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold font-poppins text-[14px] ">
                    Amount (Kg)
                  </span>
                  <div className="flex items-center  border rounded-md overflow-hidden">
                    <button className="w-10 h-8 flex justify-center items-center  text-gray-600">
                      -
                    </button>
                    <input
                      type="text"
                      value="1000"
                      className="w-16 text-center border-l border-r bg-white font-normal text-[14px] font-poppins"
                      readOnly
                    />
                    <button className="w-10 h-8 flex justify-center items-center  text-gray-600">
                      +
                    </button>
                  </div>
                </div>
                <div className=" pt-4 bg-[#F7F7F7] p-4 rounded-lg">
                  <div className="flex justify-between">
                    <span className="font-semibold font-poppins text-[14px]">
                      Available Credit
                    </span>
                    <span className="font-normal text-[14px] font-poppins">
                      10000 ton
                    </span>
                  </div>
                  <div className="flex justify-between mt-4">
                    <span className="font-semibold font-poppins text-[14px]">
                      Minimum Purchases
                    </span>
                    <span className="font-normal text-[14px] font-poppins">
                      10 ton
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment Breakdown */}
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold font-poppins text-[14px]">
                    Discount
                  </span>
                  <span className="font-light font-poppins text-[14px]">
                    INR 2000
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold font-poppins text-[14px]">
                    Transaction Fee
                  </span>
                  <span className="font-light font-poppins text-[14px]">
                    INR 50
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold font-poppins text-[14px]">
                    VAT
                  </span>
                  <span className="font-light font-poppins text-[14px]">
                    INR 20
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span className="font-semibold font-poppins text-[14px]">
                    Total
                  </span>
                  <span className="font-light font-poppins text-[14px]">
                    INR 2010
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <button className="w-full py-2 bg-[#04A2D1] text-white rounded-md border border-[#0E7897] hover:bg-[#04A2D1]transition text-[16px] font-semibold">
                Buy Now
              </button>
              <button onClick={handleModalToggle} className="w-full py-2 bg-white text-[#04A2D0] rounded-md border border-[#04A2D0] hover:bg-[#04A2D1] hover:text-white transition text-[16px] font-semibold">
                Make An Offer
              </button>
              <button className="w-full py-2 text-[#04A2D1] rounded-md hover:underline transition">
                Back To Listing
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 px-3 md:px-0">
        <div class="w-full mx-auto py-10  max-w-7xl">
          <h2 className="font-poppins font-light text-[16px] uppercase">
            FIND MORE SIMILAR PRODUCTS
          </h2>
          <p className="uppercase font-semibold text-[24px]  ">
            View similar products
          </p>
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
        </div>
      </div>

      <div class="fixed bottom-0 left-0 w-full h-[80px] bg-white shadow-lg md:hidden z-50 flex justify-between px-4 items-center">
        <div class="font-semibold text-[20px] font-poppins">INR 20110</div>
        <div>
          <button class="bg-sky-500 rounded-md w-[101px] h-[34px] text-white mb-3 font-poppins">
            Buy Now
          </button>
        </div>
      </div>
      

      {/* popup section make offer  */}
      {showModal && (
        <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
          {/* Overlay */}
          <div
            aria-hidden="true"
            className="fixed inset-0 w-full h-full bg-black/80 cursor-pointer"
            onClick={handleModalToggle} // Close modal when clicking the overlay
          ></div>

          {/* Modal Content */}
          <div className="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
            <div className="py-2 bg-white cursor-default pointer-events-auto relative rounded-xl mx-auto md:w-[700px] md:h-[542px] border-t-8 border-[#04A2D1]">
              <button
                type="button"
                className="absolute top-2 right-2 rtl:right-auto rtl:left-2"
                onClick={handleModalToggle} // Close modal on click
              >
                <svg
                  title="Close"
                  className="h-4 w-4 cursor-pointer text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close</span>
              </button>

              {/* Modal Content */}
              <div className="space-y-2 p-2">
                <div className="p-4 space-y-2 text-center dark:text-white">
                  <h2 className="text-xl tracking-tight font-semibold font-poppins text-[20px]">
                    Make An Offer
                  </h2>

                  <p className="text-gray-500 text-[16px] font-light font-poppins">
                    You’re Order has been Placed Successfully !
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div aria-hidden="true" className="dark:border-gray-700 px-2"></div>

                <div className="bg-white p-4 rounded-lg w-full md:px-28">
                  <div className="mb-4 flex space-x-4">
                    <div className="w-1/2">
                      <label className="block text-gray-700 font-poppins text-[16px] font-medium mb-1">
                        Unit
                      </label>
                      <select className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Kg</option>
                        <option>Ton</option>
                      </select>
                    </div>
                    <div className="w-1/2">
                      <label className="block text-gray-700 font-poppins text-[16px] font-medium mb-1">
                        Quantity
                      </label>
                      <input
                        type="number"
                        value="0"
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mb-4 mt-2">
                    <label className="block text-gray-700 font-poppins text-[16px] font-medium mb-1">
                      Offer Price
                    </label>
                    <input
                      type="text"
                      value="INR 0"
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="bg-[#F6F6F6] p-3 flex justify-between font-semibold md:px-28 h-[62px] items-center">
                  <span>Total Amount</span>
                  <span>INR 120000</span>
                </div>
                <div className="flex justify-center items-center">
                  <button className="bg-[#04A2D1] text-white py-2 mt-4 rounded-lg h-[48px] w-[200px] font-poppins font-semibold text-[16px] mb-2">
                    Place Offer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 
      <div className="mt-2 bg-white text-center text-gray-500 shadow-md py-3">
        © Copyright 2025 –{" "}
        <span className="text-blue-500 font-medium">Circle-O</span>
      </div> */}
    </>
  );
};

export default detailPage;

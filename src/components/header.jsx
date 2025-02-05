import React from "react";
import logo from "../assets/logo.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";

function header() {
  return (
    <>
      <nav class="bg-white  antialiased shadow-md z-20 ">
        <div class="max-w-7xl px-4 mx-auto 2xl:px-0 py-2 ">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-8">
              <div class="shrink-0">
                <a href="#" title="" class="">
                  <img class="block w-auto h-4 dark:hidden" src={logo} alt="" />
                  <img class="hidden w-auto h-4 " src={logo} alt="" />
                </a>
              </div>
            </div>

            <div>
              <ul class="hidden lg:flex items-center justify-center gap-6 md:gap-8 py-3 sm:justify-center font-poppins ">
                <li>
                  <a
                    href="#"
                    title=""
                    class="flex text-sm font-light text-gray-900 hover:text-primary-700  "
                  >
                    Start Here
                    <RiArrowDropDownLine className="mt-1" />
                  </a>
                </li>
                <li class="shrink-0">
                  <a
                    href="#"
                    title=""
                    class="flex text-sm font-light text-gray-900 hover:text-primary-700  "
                  >
                    Solutions
                    <RiArrowDropDownLine className="mt-1" />
                  </a>
                </li>
                <li class="shrink-0">
                  <a
                    href="#"
                    title=""
                    class="flex text-sm font-light text-gray-900 hover:text-primary-700 "
                  >
                    Success Stories
                    <RiArrowDropDownLine className="mt-1" />
                  </a>
                </li>
                <li class="shrink-0">
                  <a
                    href="#"
                    title=""
                    class="flex text-sm font-light text-gray-900 hover:text-primary-700 "
                  >
                    Resources
                    <RiArrowDropDownLine className="mt-1" />
                  </a>
                </li>
                <li class="shrink-0">
                  <a
                    href="#"
                    title=""
                    class="flex text-sm font-light text-gray-900 hover:text-primary-700 "
                  >
                    Sell
                    <RiArrowDropDownLine className="mt-1 text-[15px] " />
                  </a>
                </li>
              </ul>
            </div>

            <div class="flex items-center lg:space-x-2 gap-4">
              <button
                id="myCartDropdownButton1"
                data-dropdown-toggle="myCartDropdown1"
                type="button"
                class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100  font-normal text-sm  leading-none text-gray-900 "
              >
                <span class="sr-only font-poppins">Cart</span>
                {/* <svg
                  class="w-5 h-5 lg:me-1 font-normal"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg> */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_15_130)">
                    <path
                      d="M15.2688 7.56516C15.2883 7.40564 15.2739 7.24379 15.2267 7.09019C15.1794 6.93659 15.1003 6.79468 14.9945 6.67373C14.8874 6.55182 14.7555 6.45412 14.6078 6.38712C14.46 6.32012 14.2996 6.28536 14.1373 6.28516H1.86304C1.70077 6.28536 1.54041 6.32012 1.39262 6.38712C1.24483 6.45412 1.113 6.55182 1.0059 6.67373C0.900073 6.79468 0.820946 6.93659 0.773683 7.09019C0.72642 7.24379 0.712085 7.40564 0.731613 7.56516L1.58876 14.4223C1.62244 14.7011 1.75757 14.9577 1.96835 15.1431C2.17914 15.3286 2.45084 15.43 2.73161 15.428H13.2916C13.5724 15.43 13.8441 15.3286 14.0549 15.1431C14.2657 14.9577 14.4008 14.7011 14.4345 14.4223L15.2688 7.56516Z"
                      stroke="#000001"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.85742 6.28557V5.71415C2.85742 4.35018 3.39926 3.04207 4.36373 2.0776C5.3282 1.11312 6.63631 0.571289 8.00028 0.571289C9.36425 0.571289 10.6724 1.11312 11.6368 2.0776C12.6013 3.04207 13.1431 4.35018 13.1431 5.71415V6.28557"
                      stroke="#000001"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.71436 9.71387V11.9996"
                      stroke="#000001"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.2861 9.71387V11.9996"
                      stroke="#000001"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_15_130">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {/*               
                <svg
                  class="hidden sm:flex w-4 h-4 text-gray-900 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg> */}
              </button>

              <div
                id="myCartDropdown1"
                class="hidden z-10 mx-auto max-w-sm space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg "
              >
                <div class="grid grid-cols-2">
                  <div>
                    <a
                      href="#"
                      class="truncate text-sm font-semibold leading-none text-gray-900  hover:underline"
                    >
                      Apple iPhone 15
                    </a>
                    <p class="mt-0.5 truncate text-sm font-normal text-gray-500 ">
                      $599
                    </p>
                  </div>

                  <div class="flex items-center justify-end gap-6">
                    <p class="text-sm font-normal leading-none text-gray-500 ">
                      Qty: 1
                    </p>

                    <button
                      data-tooltip-target="tooltipRemoveItem1a"
                      type="button"
                      class="text-red-600 hover:text-red-700 dark:text-red-500 "
                    >
                      <span class="sr-only"> Remove </span>
                      <svg
                        class="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      id="tooltipRemoveItem1a"
                      role="tooltip"
                      class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 "
                    >
                      Remove item
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-2">
                  <div>
                    <a
                      href="#"
                      class="truncate text-sm font-semibold leading-none text-gray-900  hover:underline"
                    >
                      Apple iPad Air
                    </a>
                    <p class="mt-0.5 truncate text-sm font-normal text-gray-500 ">
                      $499
                    </p>
                  </div>

                  <div class="flex items-center justify-end gap-6">
                    <p class="text-sm font-normal leading-none text-gray-500 ">
                      Qty: 1
                    </p>

                    <button
                      data-tooltip-target="tooltipRemoveItem2a"
                      type="button"
                      class="text-red-600 hover:text-red-700 dark:text-red-500 "
                    >
                      <span class="sr-only"> Remove </span>
                      <svg
                        class="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      id="tooltipRemoveItem2a"
                      role="tooltip"
                      class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                    >
                      Remove item
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-2">
                  <div>
                    <a
                      href="#"
                      class="truncate text-sm font-semibold leading-none text-gray-900  hover:underline"
                    >
                      Apple Watch SE
                    </a>
                    <p class="mt-0.5 truncate text-sm font-normal text-gray-500 ">
                      $598
                    </p>
                  </div>

                  <div class="flex items-center justify-end gap-6">
                    <p class="text-sm font-normal leading-none text-gray-500 ">
                      Qty: 2
                    </p>

                    <button
                      data-tooltip-target="tooltipRemoveItem3b"
                      type="button"
                      class="text-red-600 hover:text-red-700 dark:text-red-500 "
                    >
                      <span class="sr-only"> Remove </span>
                      <svg
                        class="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      id="tooltipRemoveItem3b"
                      role="tooltip"
                      class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                    >
                      Remove item
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-2">
                  <div>
                    <a
                      href="#"
                      class="truncate text-sm font-semibold leading-none text-gray-900  hover:underline"
                    >
                      Sony Playstation 5
                    </a>
                    <p class="mt-0.5 truncate text-sm font-normal text-gray-500 ">
                      $799
                    </p>
                  </div>

                  <div class="flex items-center justify-end gap-6">
                    <p class="text-sm font-normal leading-none text-gray-500 ">
                      Qty: 1
                    </p>

                    <button
                      data-tooltip-target="tooltipRemoveItem4b"
                      type="button"
                      class="text-red-600 hover:text-red-700 dark:text-red-500 "
                    >
                      <span class="sr-only"> Remove </span>
                      <svg
                        class="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      id="tooltipRemoveItem4b"
                      role="tooltip"
                      class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                    >
                      Remove item
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-2">
                  <div>
                    <a
                      href="#"
                      class="truncate text-sm font-semibold leading-none text-gray-900 dark:text-white hover:underline"
                    >
                      Apple iMac 20"
                    </a>
                    <p class="mt-0.5 truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                      $8,997
                    </p>
                  </div>

                  <div class="flex items-center justify-end gap-6">
                    <p class="text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                      Qty: 3
                    </p>

                    <button
                      data-tooltip-target="tooltipRemoveItem5b"
                      type="button"
                      class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                    >
                      <span class="sr-only"> Remove </span>
                      <svg
                        class="h-4 w-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <div
                      id="tooltipRemoveItem5b"
                      role="tooltip"
                      class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                    >
                      Remove item
                      <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  title=""
                  class="mb-2 me-2 inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button"
                >
                  {" "}
                  Proceed to Checkout{" "}
                </a>
              </div>

              <button
                id="userDropdownButton1"
                data-dropdown-toggle="userDropdown1"
                type="button"
                class="inline-flex items-center rounded-lg justify-center  hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                {/* <svg
                  class="w-5 h-5 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-width="2"
                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg> */}

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4733 8.47374C11.1269 7.95951 11.604 7.25436 11.8382 6.45637C12.0723 5.65838 12.0519 4.80725 11.7799 4.02139C11.5078 3.23552 10.9975 2.554 10.32 2.07165C9.64259 1.58929 8.83163 1.33008 8 1.33008C7.16836 1.33008 6.35741 1.58929 5.67995 2.07165C5.0025 2.554 4.49223 3.23552 4.22014 4.02139C3.94805 4.80725 3.92767 5.65838 4.16184 6.45637C4.396 7.25436 4.87307 7.95951 5.52666 8.47374C4.40672 8.92244 3.42952 9.66664 2.69926 10.627C1.969 11.5874 1.51304 12.7279 1.38 13.9271C1.37037 14.0146 1.37808 14.1032 1.40268 14.1878C1.42729 14.2723 1.46831 14.3512 1.52341 14.42C1.63468 14.5587 1.79652 14.6476 1.97333 14.6671C2.15014 14.6865 2.32744 14.6349 2.46621 14.5237C2.60499 14.4124 2.69388 14.2506 2.71333 14.0737C2.85972 12.7705 3.48112 11.5669 4.45881 10.6929C5.4365 9.81892 6.70193 9.33576 8.01333 9.33576C9.32473 9.33576 10.5902 9.81892 11.5679 10.6929C12.5455 11.5669 13.1669 12.7705 13.3133 14.0737C13.3315 14.2376 13.4096 14.3888 13.5327 14.4984C13.6559 14.608 13.8152 14.6681 13.98 14.6671H14.0533C14.2281 14.647 14.3878 14.5586 14.4977 14.4212C14.6076 14.2839 14.6587 14.1086 14.64 13.9337C14.5063 12.7312 14.0479 11.5877 13.3139 10.6259C12.5799 9.66402 11.5979 8.92006 10.4733 8.47374ZM8 8.00041C7.47258 8.00041 6.95701 7.84401 6.51848 7.55099C6.07995 7.25798 5.73815 6.8415 5.53632 6.35423C5.33449 5.86696 5.28168 5.33078 5.38457 4.8135C5.48746 4.29622 5.74144 3.82106 6.11438 3.44812C6.48732 3.07518 6.96247 2.82121 7.47976 2.71831C7.99704 2.61542 8.53322 2.66823 9.02049 2.87006C9.50776 3.0719 9.92423 3.41369 10.2173 3.85222C10.5103 4.29075 10.6667 4.80633 10.6667 5.33374C10.6667 6.04099 10.3857 6.71926 9.88562 7.21936C9.38552 7.71946 8.70724 8.00041 8 8.00041Z"
                    fill="black"
                  />
                </svg>

                <svg
                  class="w-4 h-4 text-gray-900 dark:text-white ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              <button
                id="userDropdownButton1"
                data-dropdown-toggle="userDropdown1"
                type="button"
                class="inline-flex items-center rounded-lg justify-center  hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                <svg
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.43012 1.632V5.888H5.83013V6.768H1.43012V11.072H6.31013V12H0.294125V0.719999H6.31013V1.632H1.43012ZM16.7109 12H15.5749L9.39887 2.576V12H8.26288V0.735999H9.39887L15.5749 10.176V0.735999H16.7109V12Z"
                    fill="black"
                  />
                </svg>

                <svg
                  class="w-4 h-4 text-gray-900 dark:text-white ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id="userDropdown1"
                class="hidden z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700"
              >
                <ul class="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                  <li>
                    <a
                      href="#"
                      title=""
                      class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {" "}
                      Settings{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {" "}
                      Favourites{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {" "}
                      Delivery Addresses{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      title=""
                      class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {" "}
                      Billing Data{" "}
                    </a>
                  </li>
                </ul>

                <div class="p-2 text-sm font-medium text-gray-900 dark:text-white">
                  <a
                    href="#"
                    title=""
                    class="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {" "}
                    Sign Out{" "}
                  </a>
                </div>
              </div>

              <button
                type="button"
                data-collapse-toggle="ecommerce-navbar-menu-1"
                aria-controls="ecommerce-navbar-menu-1"
                aria-expanded="false"
                class="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
              >
                <span class="sr-only">Open Menu</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="ecommerce-navbar-menu-1"
            class="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4"
          >
            <ul class="text-gray-900  text-sm font-medium ace-y-3">
              <li>
                <a
                  href="#"
                  class="hover:text-primary-700 dark:hover:text-primary-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-primary-700 dark:hover:text-primary-500"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-primary-700 dark:hover:text-primary-500"
                >
                  Gift Ideas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-primary-700 dark:hover:text-primary-500"
                >
                  Games
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-primary-700 dark:hover:text-primary-500"
                >
                  Electronics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-primary-700 dark:hover:text-primary-500"
                >
                  Home & Garden
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default header;

import React from "react";
import backgroundImage from "../assets/semicircke.png"

function Home() {
  return (
    <>
    <div
  class="relative  bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` , backgroundSize: ' auto 500px', backgroundPosition: 'top' 
 }}
>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20  text-center lg:pt-32">
      


        <h1 class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          <span class="inline-block">Discover the world's </span>

          <span class="inline-block">top designers</span>
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
              class="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-teal-200 focus:border-teal-200"
              type="text"
              name="query"
              id="query"
            />
            <button
              type="submit"
              class="absolute inline-flex items-center h-10 px-2 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-sky-600 sm:px-4 sm:text-base sm:font-medium hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-sky-600"
            >
              <svg
                class=" sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
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

        <div class=" mt-12 grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row justify-center gap-y-5 md:gap-y-5 gap-x-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
          <div
            class="relative flex flex-1 flex-col items-stretch sm:flex-none"
            data-headlessui-state=""
          >
            <button
              class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
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
              class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
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
              class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
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
              class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
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
              class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
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
              class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
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
              class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
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
        <section class="py-10 relative">
          {/* filter section  */}
          <div class="flex flex-row justify-between w-full max-w-7xl mx-auto px-4 md:px-8 ">
            <div class=" flex flex-col  gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
              <div
                class="relative flex flex-1 flex-col items-stretch sm:flex-none"
                data-headlessui-state=""
              >
                <button
                  class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700  hover:bg-sky-600 active:bg-sky-600 active:text-slate-600 hover:text-white focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
                  id="headlessui-menu-button-:r4:"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-headlessui-state=""
                  type="button"
                >
                  plastic
                </button>
              </div>

              <div
                class="relative flex flex-1 flex-col items-stretch sm:flex-none"
                data-headlessui-state=""
              >
                <button
                  class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700  hover:bg-sky-600 active:bg-sky-600 active:text-slate-600 hover:text-white focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
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
                  class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700  hover:bg-sky-600 active:bg-sky-600 active:text-slate-600 hover:text-white focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
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
                  class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700  hover:bg-sky-600 active:bg-sky-600 active:text-slate-600 hover:text-white focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
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
                  class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700  hover:bg-sky-600 active:bg-sky-600 active:text-slate-600 hover:text-white focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
                  id="headlessui-menu-button-:r4:"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-headlessui-state=""
                  type="button"
                >
                  Used Oil
                </button>
              </div>
            </div>

            <div class=" flex flex-col gap-y-5 sm:mt-10 sm:flex-row sm:gap-y-0 sm:gap-x-6">
              <div
                class="relative flex flex-1 flex-col items-stretch sm:flex-none"
                data-headlessui-state=""
              >
                <button
                  class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
                  id="headlessui-menu-button-:r4:"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-headlessui-state=""
                  type="button"
                >
                  Sort By<span aria-hidden="true" class="text-gray-400"></span>
                </button>
              </div>

              <div
                class="relative flex flex-1 flex-col items-stretch sm:flex-none"
                data-headlessui-state=""
              >
                <button
                  class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 animate-fade-in-right"
                  id="headlessui-menu-button-:r4:"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-headlessui-state=""
                  type="button"
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
          {/* End filter section  */}

          <div class="w-full mx-auto py-10 px-4 md:px-8">
            <div class="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <article class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
                <img
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt=""
                  class="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <a
                  class=" font-semibold leading-7 text-white hover:text-teal-100 text-sm justify-start text-left"
                  href=""
                >
                 Song Gaing 2 Hydro Power Project
                </a>
              </article>

              <article class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
                <img
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt=""
                  class="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <a
                  class=" font-semibold leading-7 text-white hover:text-teal-100 text-sm justify-start text-left"
                  href=""
                >
                 Song Gaing 2 Hydro Power Project
                </a>
              </article>


              <article class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
                <img
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt=""
                  class="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <a
                  class=" font-semibold leading-7 text-white hover:text-teal-100 text-sm justify-start text-left"
                  href=""
                >
                 Song Gaing 2 Hydro Power Project
                </a>
              </article>


              <article class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
                <img
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt=""
                  class="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <a
                  class=" font-semibold leading-7 text-white hover:text-teal-100 text-sm justify-start text-left"
                  href=""
                >
                 Song Gaing 2 Hydro Power Project
                </a>
              </article>


              <article class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
                <img
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt=""
                  class="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <a
                  class=" font-semibold leading-7 text-white hover:text-teal-100 text-sm justify-start text-left"
                  href=""
                >
                 Song Gaing 2 Hydro Power Project
                </a>
              </article>


              <article class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
                <img
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt=""
                  class="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <a
                  class=" font-semibold leading-7 text-white hover:text-teal-100 text-sm justify-start text-left"
                  href=""
                >
                 Song Gaing 2 Hydro Power Project
                </a>
              </article>


              <article class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
                <img
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt=""
                  class="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <a
                  class=" font-semibold leading-7 text-white hover:text-teal-100 text-sm justify-start text-left"
                  href=""
                >
                 Song Gaing 2 Hydro Power Project
                </a>
              </article>

              <article class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
                <img
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt=""
                  class="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <a
                  class=" font-semibold leading-7 text-white hover:text-teal-100 text-sm justify-start text-left"
                  href=""
                >
                 Song Gaing 2 Hydro Power Project
                </a>
              </article>

              <article class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
                <img
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt=""
                  class="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <a
                  class=" font-semibold leading-10 text-white hover:text-teal-100 text-sm justify-start text-left"
                  href=""
                >
                 Song Gaing 2 Hydro Power Project
                </a>
              </article>

              <article class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
                <img
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt=""
                  class="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <a
                  class=" font-semibold leading-10 text-white hover:text-teal-100 text-sm justify-start text-left"
                  href=""
                >
                 Song Gaing 2 Hydro Power Project
                </a>
              </article>


              <article class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
                <img
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt=""
                  class="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <a
                  class=" font-semibold leading-10 text-white hover:text-teal-100 text-sm justify-start text-left"
                  href=""
                >
                 Song Gaing 2 Hydro Power Project
                </a>
              </article>

              <article class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
                <img
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt=""
                  class="absolute inset-0 object-cover w-full h-full -z-10"
                />
                <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

                <a
                  class=" font-semibold leading-10 text-white hover:text-teal-100 text-sm justify-start text-left"
                  href=""
                >
                 Song Gaing 2 Hydro Power Project
                </a>
              </article>
              
            
            </div>
          </div>
        </section>

        {/* End card section*/}
      </div>
    </>
  );
}

export default Home;

import React from "react";
import logo from "../assets/logo.svg";


const login = () => {

  return (
    <>
      {/* <div className="shadow-md p-10 max-w-7xl mx-auto min-h-screen flex items-center justify-center">
  <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 w-full">
    <div className="bg-blue-500 rounded-2xl min-h-fit md:mr-16">
      <div className="mt-4 sm:ml-5 ml-2 md:ml-10">
        <a href="/" title="" className="text-white m-5">
          <img className="block w-auto h-4 dark:hidden" src={logo} alt="" />
          <img className="hidden w-auto h-4 dark:block" src={logo} alt="" />
        </a>
      </div>
      <div className="md:mt-16 sm:ml-5 ml-2 md:ml-10">
        <h1 className="md:text-3xl pb-7 sm:text-4xl text-3xl text-white font-semibold">
          Connecting Talent to Opportunities
        </h1>
        <p className="font-light text-white w-[270px] sm:w-80 pb-5 sm:pb-0">
          Discover endless Opportunities on FreelanceConnect where talented freelancers and businesses unite. Jump right in with us!
        </p>
      </div>
      <div className="mt-24 hidden lg:block sm:mx-5 md:mx-12 rounded-2xl bg-blue-400 p-7 sm:mb-5 md:mb-10">
        <p className="font-light text-white md:pb-5">
          As a freelancer, finding the right gigs can be challenging, but FreelanceHub made it simple. I love the personalized job recommendations and the ability to showcase my portfolio.
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMWn4AmqxIjr5ZFKmMcg3j4PjAa6xE5Zm8Zw&s"
          className="mix-blend-multiply w-28"
          alt=""
        />
      </div>
    </div>
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="pb-5 text-2xl sm:text-3xl font-bold text-center">
          Create your account with us below
        </h1>
        <p className="text-center">
          Don't have an account yet?{" "}
          <a href="/Signup" className="text-blue-800 border-b-2 hover:border-blue-700">
            Click here to sign up
          </a>
        </p>
        <form action="" method="POST" className="sm:mt-12 mt-5">
          <label htmlFor="" className="text-gray-700">
            Email Address
          </label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="w-full border-2 border-gray-300 p-2 mb-5 hover:border-blue-700 hover:bg-blue-100 rounded-xl mt-2 outline-none"
          />
          <label htmlFor="" className="text-gray-700">
            Password
          </label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="w-full border-2 p-2 border-gray-300 hover:border-blue-700 hover:bg-blue-100 rounded-xl mt-2 mb-5 outline-none"
          />
          <div className="flex justify-end">
            <a href="#" className="font-medium text-blue-700 border-b-2 border-blue-700 p-1">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="w-full py-3 bg-blue-500 font-normal hover:bg-blue-400 text-white rounded-xl mt-5">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</div> */}

<div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
  {/* Outer Container with Shadow & Border */}
  <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">

    {/* Left Section (Blue Banner) */}
    <div className="md:w-1/2 bg-[#04A2D1] text-white rounded-2xl m-4 flex flex-col justify-center p-8 md:p-12 relative">
      
      {/* Logo at the top */}
      <div className="absolute top-4  mt-4">
        <a href="/" title="" className="text-white">
          <img className="block w-auto h-4 dark:hidden" src={logo} alt="Logo" />
          <img className="hidden w-auto h-4 dark:block" src={logo} alt="Logo" />
        </a>
      </div>

      {/* Blue background image */}
      <div className="absolute inset-0  opacity-40 z-0"></div>

      <div className="relative z-10 mt-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-left">
          Connecting Talent to Opportunities
        </h1>
        <p className="text-sm md:text-base text-left">
          Discover endless opportunities on FreelanceConnect, where talented freelancers and businesses unite.
        </p>
        <div className="mt-24  rounded-2xl  hidden sm:block bg-[#30B0D7] p-7 ">
              <p className="font-light text-white ">
                As a freelancer, finding the right gigs can be challenging, but
                FreelanceHub made it simple, I love the personalized job
                recommendations and the ability to showcase my portfolio.
              </p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMWn4AmqxIjr5ZFKmMcg3j4PjAa6xE5Zm8Zw&s"
                className="mix-blend-multiply w-28"
                alt=""
              />
            </div>
      </div>
    </div>

    {/* Right Section (Login Form) */}
    <div className="md:w-1/2 flex justify-center items-center px-6 md:px-12 py-10 bg-white">
      <div className="w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Create your account</h2>
        <p className="text-sm text-gray-600 mb-6">
          Don't have an account? <a href="#" className="text-blue-500 font-semibold">Sign up</a>
        </p>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#04A2D1] focus:outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#04A2D1] focus:outline-none"
          />
        </div>

        {/* Forgot Password & Login Button */}
        <div className="flex justify-between items-center mb-6">
          <a href="#" className="text-[#04A2D1] text-sm">Forgot Password?</a>
        </div>
        <button className="w-full bg-[#04A2D1] text-white p-3 rounded-lg hover:bg-[#04A2D1">
          Login
        </button>
      </div>
    </div>
  </div>
</div>


    </>
  );
};

export default login;

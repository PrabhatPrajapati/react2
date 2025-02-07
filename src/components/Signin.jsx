import React, { useState } from "react";
// import logo1 from "../assets/logo1.svg";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import cricle from '../assets/Brand Logo.svg'
const Signin = () => {
  const [Password, SetPassword] = useState(true);
  const [ConfirmPassword, SetConfirmPassword] = useState(true);

  const HandlePassword = () => {
    SetPassword(!Password);
  };
  const HandleConfirmPassword = () => {
    SetConfirmPassword(!ConfirmPassword);
  };

  return (
    <>
      

      <div className=" font-poppins flex justify-center items-center min-h-screen bg-gray-200 p-4">
  {/* Outer Container with Shadow & Border */}
  <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
    
    {/* Blue Section */}
     <div className="md:w-1/2 bg-[#04A2D1] text-white rounded-2xl m-4 flex flex-col justify-center p-8 md:p-12 relative">
          
          {/* Logo at the top */}
          <div className="absolute top-4  mt-4">
            <a href="/" title="" className="text-white">
              <img className="block w-auto h-4 dark:hidden" src={cricle} alt="Logo" />
              <img className="hidden w-auto h-4 dark:block" src={cricle} alt="Logo" />
            </a>
          </div>
    
          {/* Blue background image */}
          {/* <div className="absolute inset-0  opacity-40 z-0"></div>
    
          <div className="relative z-10 mt-">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-left">
              Connecting Talent to Opportunities
            </h1>
            <p className="text-sm md:text-base text-left">
              Discover endless opportunities on FreelanceConnect, where talented freelancers and businesses unite.
            </p>
            <div className="mt-12  rounded-2xl  hidden sm:block bg-[#30B0D7] p-6 ">
                  <p className="font-light text-white ">
                    As a freelancer, finding the right gigs can be challenging, but
                    FreelanceHub made it simple, I love the personalized job
                    recommendations and the ability to showcase my portfolio.
                  </p>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMWn4AmqxIjr5ZFKmMcg3j4PjAa6xE5Zm8Zw&s"
                    className="mix-blend-multiply w-20"
                    alt=""
                  />
                </div>
          </div>
          <div className="flex justify-center space-x-2 mt-6">
  <span className="w-1 h-1 bg-white transform rotate-45"></span>
  <span className="w-1 h-1 bg-white transform rotate-45"></span>
  <span className="w-1 h-1 bg-white transform rotate-45"></span>
</div>
        </div> */}
         <div className="absolute inset-0 opacity-30 z-0 bg-cover bg-center"   style={{ backgroundImage: `url(${cricle})` }}></div>
  
<div className="relative z-10 mt-16">
  <h1 className="text-3xl font-bold mb-6 text-left">Connecting Talent to Opportunities</h1>
  <p className="text-base md:text-base text-left">
    Discover endless opportunities on FreelanceConnect, where talented freelancers and businesses unite.
  </p>
 
  <div className="mt-60 hidden sm:block rounded-2xl bg-[#30B0D7] p-4 shadow-lg">
  <p className="font-light text-white text-base">
    As a freelancer, finding the right gigs can be challenging, but FreelanceHub made it simple. I love the personalized job recommendations and the ability to showcase my portfolio.
  </p>

  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMWn4AmqxIjr5ZFKmMcg3j4PjAa6xE5Zm8Zw&s"
    className="mix-blend-multiply w-20 mt-4"
    alt="Freelancer testimonial"
  />
</div>
</div>
<div className="flex justify-center space-x-2 mt-6">
<span className="w-1 h-1 bg-white transform rotate-45"></span>
<span className="w-1 h-1 bg-white transform rotate-45"></span>
<span className="w-1 h-1 bg-white transform rotate-45"></span>
</div>

</div>

    
    {/* Right Section (Form) */}
    <div className="w-full md:w-1/2 bg-white p-6 md:p-10">
      <div className="mt-8">
        <h1 className="pb-5 text-xl sm:text-2xl font-bold">Create your account with us below</h1>
        <p>
          Already have an account?{" "}
          <a href="/Login" className="text-[#04A2D1]  hover:border-b-2 hover:border-[#04A2D1]">
            Login
          </a>
        </p>
        <p className="pt-7 pb-3">You're creating an account as?</p>
        
        <form action="" method="POST">
          <div className="flex gap-2 sm:gap-5 mb-7">
            <label
              htmlFor="recycler"
              className="flex p-3 sm:w-[100%] border-2 hover:border-[#04A2D1] hover:bg-blue-100 rounded-xl"
            >
              <input
                type="radio"
                name="accountType"
                value="Recycler"
                id="recycler"
                className="pl-2 form-radio"
              />
              <span className="pl-3 text-sm">As a Recycler</span>
            </label>
            <label
              htmlFor="freelancer"
              className="flex p-3 sm:w-[100%] border-2 hover:border-[#04A2D1] hover:bg-blue-100 rounded-xl"
            >
              <input
                type="radio"
                name="accountType"
                value="Freelancer"
                id="freelancer"
                className="form-radio"
              />
              <span className="pl-3 text-sm">As a Freelancer</span>
            </label>
          </div>
          
          <label htmlFor="name" className="text-gray-700">Full Name</label>
          <input
            type="text"
            name="Name"
            placeholder="Enter your name"
            className="sm:w-[100%] w-full border-2 p-2 hover:border-[#04A2D1] hover:bg-blue-100 rounded-xl mt-2 sm:mb-7 mb-3 outline-none"
          />
          
          <label htmlFor="email" className="text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="sm:w-[100%] w-full border-2 p-2 hover:border-[#04A2D1] hover:bg-blue-100 rounded-xl mt-2 outline-none"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-16 mt-3 sm:mt-7">
            <span>
              <label htmlFor="mobile" className="text-gray-700">Mobile No.</label>
              <input
                type="number"
                name="mobile_number"
                id="mobile"
                className="sm:w-[100%] w-full border-2 p-2 hover:border-[#04A2D1] hover:bg-blue-100 rounded-xl mt-2 outline-none sm:mb-4 mb-3"
                placeholder="Enter Mobile no"
              />
            </span>
            <span>
              <label htmlFor="designation" className="text-gray-700">Designation</label>
              <input
                type="text"
                name="Designation"
                id="designation"
                className="sm:w-[100%] w-full border-2 p-2 hover:border-[#04A2D1] hover:bg-blue-100 rounded-xl mt-2 outline-none"
                placeholder="Enter Designation"
              />
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-1 md:gap-16 sm:mt-7 mt-3 mb-10">
            <span>
              <label htmlFor="password" className="text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="sm:w-[100%] w-full border-2 p-2 hover:border-[#04A2D1] hover:bg-blue-100 rounded-xl mt-2 outline-none"
                placeholder="Enter password"
              />
            </span>
            <span className="mt-3 sm:mt-0">
              <label htmlFor="confirmPassword" className="text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="sm:w-[100%] w-full border-2 p-2 hover:border-[#04A2D1] hover:bg-blue-100 rounded-xl mt-2 outline-none"
                placeholder="Confirm password"
              />
            </span>
          </div>
          
          <input type="checkbox" className="form-checkbox" />
          <label htmlFor="" className="pl-2">
            Confirm to signing up to circle.io <a href="#" className="hover:border-b-2 hover:border-[#04A2D1] text-[#04A2D1] font-normal">T&C*Apply</a>
          </label>
          
          <button type="submit" className="py-3 px-20 bg-[#04A2D1] font-normal hover:border-[#04A2D1] text-white rounded-xl mt-5">
            Create Account
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Signin;

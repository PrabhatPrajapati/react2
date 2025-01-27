import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
      <div className="shadow-md p-10">
        {/* <h1 className="text-xl text-gray-700 p-3">Sign Up</h1> */}
        <div className="grid gap-5 sm:grid-cols-2 ">
          <div className="bg-blue-500 rounded-2xl min-h-fit md:mr-16">
            <div className="mt-4 md:ml-10 sm:ml-5 ml-2 ">
              <a href="/" title="" className="text-white m-5">
                <img
                  className="block w-auto h-4 dark:hidden "
                  src={logo}
                  alt=""
                />
                <img
                  className="hidden w-auto h-4 dark:block"
                  src={logo}
                  alt=""
                />
              </a>
            </div>
            <div className="md:mt-16 sm:mt-5  md:ml-10 sm:ml-5 ml-2">
              <h1 className="md:text-3xl pb-7 sm:text-4xl text-3xl text-white font-semibold ">
                Connecting Talent to Opportunities
              </h1>
              <p className="font-light text-white sm:w-80 w-64 pb-5">
                Discover endless Opportunities on FreelanceConnect where
                talented freelancers and businesses unite Jump right in with us!
              </p>
            </div>
            <div className="mt-24 md:mx-12 rounded-2xl sm:mx-5 hidden sm:block bg-blue-400 p-7 ">
              <p className="font-light text-white md:pb-5">
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
          <div>
            <div className="mt-8">
              <h1 className="pb-5 text-xl sm:text-3xl font-bold">
                Create your account with us below
              </h1>
              <p>
                Already have an account?{" "}
                <a
                  href="/Login"
                  className="text-blue-800 border-b-2 hover:border-blue-700"
                >
                  Login
                </a>
              </p>
              <p className="pt-7 pb-3">You're creating an account as?</p>
              <form action="" method="POST">
                <div className="flex gap-2 sm:gap-5 mb-7">
                  <label
                    htmlFor=""
                    className="flex p-3 sm:w-[100%] border-2 hover:border-blue-700 hover:bg-blue-100 rounded-xl"
                  >
                    <input
                      type="radio"
                      name="accountType"
                      value="Recycler"
                      className="pl-2 form-radio"
                    />
                   <span className="pl-3 text-sm">As a Recycler</span>
                  </label>
                  <label
                    htmlFor=""
                    className="flex p-3 sm:w-[100%] border-2 hover:border-blue-700 hover:bg-blue-100 rounded-xl"
                  >
                    <input
                      type="radio"
                      name="accountType"
                      value="Recycler"
                      className="form-radio"
                    />
                    <span className="pl-3 text-sm">As a Recycler</span>
                  </label>
                </div>
                <label htmlFor="" className="text-gray-700">
                  Full Name
                </label>
                <br />
                <input
                  type="text"
                  name="Name"
                  placeholder="Enter your name"
                  className="sm:w-[100%] w-full border-2 p-2  hover:border-blue-700 hover:bg-blue-100 rounded-xl mt-2 sm:mb-7 mb-3 outline-none"
                /> <br />
                <label htmlFor="" className="text-gray-700">
                  Email Address
                </label>
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  className="sm:w-[100%] w-full border-2 p-2  hover:border-blue-700 hover:bg-blue-100 rounded-xl mt-2 outline-none"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-16 mt-3 sm:mt-7">
                  <span>
                    <label htmlFor="" className="text-gray-700">
                      Mobile No.
                    </label>
                    <br />
                    <input
                      type="number"
                      name="mobile_number"
                      className="sm:w-[100%] w-full border-2 p-2  hover:border-blue-700 hover:bg-blue-100 rounded-xl mt-2 outline-none sm:mb-4 mb-3"
                      placeholder="Enter Mobile no"
                    />
                  </span>
                  <span>
                    <label htmlFor="" className="text-gray-700">
                    Designation
                    </label> <br />
                    <input
                      type="text"
                      name="Designation"
                      className="sm:w-[100%] w-full border-2 p-2  hover:border-blue-700 hover:bg-blue-100 rounded-xl mt-2 outline-none"
                      placeholder="Enter Designation"
                    />
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-1 md:gap-16 sm:mt-7 mt-3 mb-10">
                  <span>
                    <label htmlFor="" className="text-gray-700">
                      Password
                    </label>
                    <br />
                    <div className="flex sm:w-[100%] w-full border-2 p-2 justify-between hover:border-blue-700 hover:bg-blue-100 rounded-xl mt-2">
                      <input
                        type={Password ? "password" : "text"}
                        name="password"
                        className="outline-none hover:bg-blue-100 focus:bg-blue-100"
                        placeholder="Enter password"
                      />
                      <label
                        className="relative right-8 top-2"
                        onClick={HandlePassword}
                      >
                        {Password ? <FaEyeSlash /> : <FaEye />}{" "}
                      </label>
                    </div>
                  </span>
                  <span className="mt-3 sm:mt-0">
                    <label htmlFor="" className="text-gray-700">
                      Confirm Password
                    </label>
                    <div className="flex sm:w-[100%] w-full border-2 p-2  justify-between hover:border-blue-700 hover:bg-blue-100 rounded-xl mt-2">
                      <input
                        type={ConfirmPassword ? "password" : "text"}
                        name="password"
                        className="outline-none hover:bg-blue-100 focus:bg-blue-100"
                        placeholder="Enter password"
                      />
                      <label
                        className="relative right-8 top-2"
                        onClick={HandleConfirmPassword}
                      >
                        {ConfirmPassword ? <FaEyeSlash /> : <FaEye />}{" "}
                      </label>
                    </div>
                  </span>
                </div>
                 <input type="checkbox" className="form-checkbox" />
                 <label htmlFor="" className="pl-2 ">Confirm to signing up to circle.io <a href="#" className="hover:border-b-2 hover:border-blue-700 text-blue-700 font-normal">T&C Apply</a></label>
                 <button type="submit" className="py-3 px-20 bg-blue-600 font-normal hover:bg-blue-500 text-white rounded-xl mt-5">Create Account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

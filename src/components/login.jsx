import React from "react";
import logo from "../assets/logo.svg";


const login = () => {

  return (
    <>
      <div className="shadow-md p-10">
      
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 ">
          <div className="bg-blue-500 rounded-2xl min-h-fit md:mr-16">
            <div className="mt-4 sm:ml-5 ml-2 md:ml-10">
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
            <div className="md:mt-16 sm:ml-5 ml-2 md:ml-10">
              <h1 className="md:text-3xl pb-7 sm:text-4xl text-3xl text-white font-semibold ">
                Connecting Talent to Opportunities
              </h1>
              <p className="font-light text-white w-[270px] sm:w-80 pb-5 sm:pb-0">
                Discover endless Opportunities on FreelanceConnect where
                talented freelancers and businesses unite Jump right in with us!
              </p>
            </div>
            <div className="mt-24 hidden sm:block sm:mx-5 md:mx-12 rounded-2xl bg-blue-400 p-7 sm:mb-5 md:mb-10">
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
          <div className="min-h-screen sm:flex sm:items-center sm:justify-center">
            <div className="sm:mt-8">
              <h1 className="pb-5 text-2xl sm:text-3xl font-bold">
                Create your account with us below
              </h1>
              <p>
                Don't have an account yet?{" "}
                <a
                  href="/Signup"
                  className="text-blue-800 border-b-2 hover:border-blue-700"
                >
                  Click here to sign up
                </a>
              </p>
              <form action="" method="POST" className="sm:mt-20 mt-5">
                <label htmlFor="" className="text-gray-700">
                  Email Address
                </label>
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-[100%] border-2 border-gray-300 p-2 mb-8  hover:border-blue-700 hover:bg-blue-100 rounded-xl mt-2 outline-none"
                />
                 <label htmlFor="" className="text-gray-700">
                  Password
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="w-[100%] border-2 p-2 border-gray-300  hover:border-blue-700 hover:bg-blue-100 rounded-xl mt-2 mb-5 outline-none"
                />
                <h1 className="flex items-end w-fit font-medium text-blue-700 border-b-2  border-blue-700 p-1"><a href="#">Forgot Password?</a></h1>
                 <button type="submit" className="py-3 px-28 bg-blue-500 font-normal hover:bg-blue-400 text-white rounded-sm mt-5">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;

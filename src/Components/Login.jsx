// import React from 'react';
import { Link } from "react-router-dom";
import pvsIcon from "../assets/pvsIcon.svg";
import emailIcon from "../assets/mail-01.svg";
import lockIcon from "../assets/square-lock-password.svg";
import salesIcon from "../assets/salesIcon.svg";
import bgImage from "../assets/pvsBg.jpg";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#35C0C8]"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw"
    }}>
      
      <div className="w-full max-w-md px-16 py-14 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-center h-full hover:scale-105 duration-300 ease-in-out">
          <img src={pvsIcon} alt="PVSIcon" className="h-10" />
        </div>
        <h2 className="text-lg font-bold text-center text-gray-800 mt-7 hover:scale-95 duration-300 ease-in-out">Login Your Account</h2>
        <h3 className="text-sm text-center text-gray-500 pb-6 hover:scale-95 duration-300 ease-in-out">Lorem Ipsum is simply dummy text of the printing.</h3>

        <form className="space-y-4">

          {/* Email Field */}
            <div className="relative flex gap-x-3 shadow-lg p-4 rounded-lg bg-white border border-3xl hover:scale-95 duration-300 ease-in-out">
              {/* Icon Container */}
              <div className="flex items-center justify-center px-2 rounded-lg bg-gradient-to-t from-[#CAF1F2] to-[#F1FEFF]">
                <img src={emailIcon} alt="PVSIcon" className="w-6" />
              </div>
              {/* Input Container */}
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email ID
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-1 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none text-sm"
                  placeholder="Enter Email ID"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative flex gap-x-3 shadow-lg p-4 rounded-lg bg-white border border-3xl hover:scale-95 duration-300 ease-in-out">
              {/* Icon Container */}
              <div className="flex items-center justify-center px-2 rounded-lg bg-gradient-to-t from-[#CAF1F2] to-[#F1FEFF]">
                <img src={lockIcon} alt="PVSIcon" className="w-6" />
              </div>
              {/* Input Container */}
              <div className="flex-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full px-4 py-1 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none text-sm"
                  placeholder="Enter Password"
                />
              </div>
            </div>

         
          {/* Submit Button */}
          <div className="drop-shadow-md">
            <Link to="/dashboard">
              <button
                type="submit"
                className="w-full p-3 text-xs md:text-md  bg-gradient-to-b from-teal-400 to-teal-500 text-white font-bold rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none hover:scale-95 duration-300 ease-in-out shadow-lg"
              >
                LOGIN
              </button>
            </Link>
          </div>
        </form>

      </div>
    </div>
  );
};

export default LoginForm;
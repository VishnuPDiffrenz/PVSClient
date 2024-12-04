// import React from "react";
import pvsIcon from "../assets/pvsIcon.svg";
import profile from "../assets/profile.png";
import salesIcon from "../assets/salesIcon.svg";
import crmIcon from "../assets/crmIcon.svg";
import settingsIcon from "../assets/settingsIcon.svg";
import bgImage from "../assets/pvsBg.jpg";

{/* <div className="flex flex-col items-center justify-center mx-[20vw] my-[10vh] border border-slate-200 py-10 rounded-xl"> */}

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] my-16 sm:my-auto " style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="border border-slate-300 pb-6 px-10 rounded-lg bg-white mx-5">
      <div className="text-center mb-2 pt-8">
        <img
          src={pvsIcon}
          alt="PVS Logo"
          className="h-10 mx-auto"
        />
        <h1 className="text-xl font-semibold text-gray-700 mt-4">Welcome back, Mauro.</h1>
      </div>

      <div className="flex flex-col items-center">
        {/* User Dropdown */}
        <div className="bg-[#EAFAFF] shadow-lg rounded-lg p-4 mb-6 flex items-center space-x-4">
          <img
            src={profile} // Replace with actual avatar path
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div className="mr-20">
            <p className="text-gray-800 font-medium">Mauro M. Smith</p>
            <p className="text-[#00969F] text-sm">Marketing Head</p>
          </div>
          <select className="ml-10 rounded-md p-2 text-gray-600 bg-[#EAFAFF]">
            {/* <option>Switch User</option>
            <option>Mauro M. Smith</option> */}
          </select>
        </div>

        <div className="mb-5 mt-5 flex items-center w-[50vw] sm:w-[50vw]">
          <div className="bg-[#E4E4E4] h-[2px] w-full"></div>
          <h1 className="bg-gray-100 px-5 py-1 border rounded-3xl text-xs w-[90vw] text-center">Choose your app</h1>
          <div className="bg-[#E4E4E4] h-[2px] w-full"></div>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 sm:gap-5 sm:pb-8">
          <OptionCard
            title="Sales"
            icon={salesIcon}
          />
          <OptionCard
            title="CRM"
            icon={crmIcon}
          />
          <OptionCard
            title="Settings"
            icon={settingsIcon}
          />
        </div>
      </div>
      </div>
    </div>
  );
};

const OptionCard = ({ title, icon }) => {
  return (
    <div className="bg-white rounded-lg px-3 sm:px-5 py-5 text-center shadow-lg transition-shadow border border-slate-300 mx-5 hover:scale-95 duration-300 ease-in-out flex flex-col">
      <div className="text-4xl mb-2 item-center bg-gray-200 flex justify-center items-center rounded-full px-3 py-3 sm:px-5 sm:py-5 max-w-[50%] sm:max-w-[75%] mx-auto">
        <img src={icon} alt="Icon" className="w-7 sm:w-10"/>
      </div>
      <h2 className="text-md sm:text-lg">{title}</h2>
      <div className="mt-3 sm:mt-4">
        <button className="px-6 py-2 bg-[#EAFAFF] text-[#00969F] hover:text-[#EAFAFF] rounded-md hover:bg-[#00969F] duration-300 border border-[#00969F] text-md sm:text-lg">
          Open
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

{/* <button className="mt-3 sm:mt-4  px-6 py-2 bg-[#EAFAFF] text-[#00969F] hover:text-[#EAFAFF] rounded-md hover:bg-[#00969F] border border-[#00969F] text-md sm:text-lg">
        Open
      </button> */}
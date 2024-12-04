// import React from "react";
import pvsIcon from "../assets/pvsIcon.svg";
import profile from "../assets/profile.png";
import salesIcon from "../assets/salesIcon.svg";
import crmIcon from "../assets/crmIcon.svg";
import settingsIcon from "../assets/settingsIcon.svg";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-[20vw] my-[10vh] border border-slate-200 py-10 rounded-xl">
      <header className="text-center mb-10">
        <img
          src={pvsIcon} // Replace with actual logo path
          alt="PVS Logo"
          className="h-10 mx-auto"
        />
        <h1 className="text-xl font-semibold text-gray-700 mt-4">Welcome back, Mauro.</h1>
      </header>

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

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
};

const OptionCard = ({ title, icon }) => {
  return (
    <div className="bg-white rounded-lg px-8 py-5 text-center shadow-lg transition-shadow duration-200 border border-slate-300 mr-5">
      <div className="text-4xl mb-4 item-center bg-[#EAFAFF] flex justify-center items-center rounded-full py-7">
        <img src={icon} alt="Icon" className="w-10"/>
      </div>
      <h2 className="text-lg">{title}</h2>
      <button className="mt-4 px-6 py-2 bg-[#EAFAFF] text-[#00969F] hover:text-[#EAFAFF] rounded-md hover:bg-[#00969F] border border-[#00969F]">
        Open
      </button>
    </div>
  );
};

export default Dashboard;
import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiCalendar } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex mt-[70px]">
      <div className=" w-[200px] h-[700px] rounded-tr-3xl rounded-br-3xl shadow-lg p-6 flex flex-col gap-8 items-center justify-start text-white">
        <Link
          to="/user/userDashboard"
          className="flex items-center gap-2 hover:text-yellow-300 transition duration-300"
        >
          <FiHome className="text-xl" />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/user/Mybooking"
          className="flex items-center gap-2 hover:text-yellow-300 transition duration-300"
        >
          <FiCalendar className="text-xl" />
          <span>My Bookings</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

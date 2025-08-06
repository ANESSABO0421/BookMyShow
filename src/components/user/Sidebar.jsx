import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex mt-[70px]">
      <div className="bg-red-500 w-[200px] h-[700px] flex flex-col gap-10 items items-center justify-center">
        <Link to="/user/userDashboard">Dashboard</Link>
        <Link to="/user/Mybooking">My bookings</Link>
      </div>
    </div>
  );
};

export default Sidebar;

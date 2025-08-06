import React from "react";
import UserNavbar from "../../components/user/UserNavbar";
import Sidebar from "../../components/user/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-16">
        <UserNavbar />
      </div>

      <div className="flex flex-1 ">
        <div className="w-64 bg-red-500 text-white overflow-y-auto h-[calc(100vh-4rem)] ">
          <Sidebar />
        </div>

        <div className="flex-1 bg-white p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

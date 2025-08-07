import React, { useState } from "react";
import UserNavbar from "../../components/user/UserNavbar";
import Sidebar from "../../components/user/Sidebar";
import { Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="fixed top-0  w-screen h-16 bg-white shadow-md z-30 flex items-center justify-between  ">
        <UserNavbar />
        {/* Hamburger menu for mobile */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="sm:hidden text-red-600 text-2xl"
        >
          {sidebarOpen ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Layout body starts below the navbar */}
      <div className="flex flex-1 pt-16 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-gradient-to-b from-red-500 to-red-600 text-white z-40 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0 sm:static sm:block transition-transform duration-300 ease-in-out`}
        >
          <Sidebar />
        </aside>

        {/* Mobile overlay when sidebar is open */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-30 sm:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white m-2 sm:m-4 rounded-xl shadow-sm">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

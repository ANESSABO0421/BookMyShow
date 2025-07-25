import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex justify-between items-center h-20 shadow-md px-6 bg-white">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo2} alt="BookMyShow Logo" className="h-30" />
          </Link>
        </div>

        {/* Search Section */}
        <div className="relative w-[400px]">
          <BiSearchAlt2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
          <input
            type="text"
            placeholder="Search for Movies, Events, Sports and Activities"
            className="w-full h-10 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-400"
          />
        </div>

        {/* Right-side Controls */}
        <div className="flex items-center gap-4">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm cursor-pointer">
            Sign in
          </button>
          <GiHamburgerMenu className="text-2xl text-gray-700 mr-2 cursor-pointer hidden max-sm:block" />
        </div>
      </div>
      <div className="h-10  flex justify-center bg-[#FB2C36] text-white items-center px-7 py-2 sticky top-0 z-100">
        <div className="h-full ">
          <ul className="hidden md:flex gap-5 md:gap-10 lg:gap-20 items-center justify-center  text-center ">
            <a href="#">Movies</a>
            <a href="#">Events</a>
            <a href="#">Plays</a>
            <a href="#">Sports</a>
            <a href="#">Activites</a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

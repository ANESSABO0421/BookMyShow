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
          <select
            name="location"
            className="outline-none text-gray-700 text-sm"
          >
            <option value="mumbai">Mumbai</option>
          </select>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm">
            Sign in
          </button>
          <GiHamburgerMenu className="text-2xl text-gray-700 mr-2 cursor-pointer" />
        </div>
      </div>
      <div className="h-10 bg-[#F5F5F5] flex justify-between items-center px-7 py-2">
        <div className="h-full">
          <ul className="flex gap-5 items-center justify-center text-center">
            <a href="#">Movies</a>
            <a href="#">Events</a>
            <a href="#">Plays</a>
            <a href="#">Sports</a>
            <a href="#">Activites</a>
          </ul>
        </div>
        <div>
          <ul className="flex gap-5 items-center justify-center text-center">
            <a href="#">List Your Show</a>
            <a href="#">Coorporate</a>
            <a href="#">Offers</a>
            <a href="#">Gift Card</a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

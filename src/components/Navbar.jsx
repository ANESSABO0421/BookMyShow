import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <>
      <div className="navbar flex justify-between items-center h-20 shadow-md px-6 bg-white">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo2} alt="BookMyShow Logo" className="sm:h-20" />
          </Link>
        </div>

        {/* Search Section */}
        <div className="relative w-[400px]">
          <BiSearchAlt2 className="absolute hidden md:flex left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
          <input
            type="text"
            placeholder="Search for Movies, Events, Sports and Activities"
            className="w-[200px] hidden md:flex h-10 pl-10 pr-4 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-red-400 md:w-[400px]"
          />
        </div>

        {/* Right-side Controls */}
        <div className="flex items-center gap-4 sm:px-4 md:px-2 lg:px-0">
          <button className="bg-red-500 hidden lg:flex hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm cursor-pointer">
            Sign in
          </button>
          <button onClick={toggle}>
            {!open ? (
              <GiHamburgerMenu className="text-2xl text-gray-700 mr-2 cursor-pointer block lg:hidden" />
            ) : (
              <FaWindowClose className="text-2xl text-gray-700 mr-2 cursor-pointer block lg:hidden" />
            )}
          </button>
        </div>
      </div>

      {/*overlay  */}
      {open && (
        <div
          className="fixed bg-black opacity-50 inset-0 z-100"
          onClick={toggle}
        ></div>
      )}

      {/* sidebar */}
      <div
        className={`flex justify-center items-center fixed top-0 right-0 h-full bg-white text-black z-200 transition-transform  w-64 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex justify-center items-center flex-col gap-20 text-4xl">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Event</Link>
          </li>
          <li>
            <Link>Plays</Link>
          </li>
          <li>
            <Link>Sports</Link>
          </li>
          <li>
            <Link>Sports</Link>
          </li>
        </ul>
      </div>

      <div className="h-10 hidden lg:flex justify-center bg-[#FB2C36] text-white items-center px-7 py-2 sticky top-0 z-100">
        <div className="h-full ">
          <ul className=" md:flex gap-5 md:gap-10 lg:gap-20 items-center justify-center  text-center ">
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

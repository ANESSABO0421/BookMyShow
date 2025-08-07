import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import logo2 from "../../assets/logo2.png";
import { Link, useLocation } from "react-router-dom";

const UserNavbar = () => {
  const navigate = useLocation();
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <>
      {/* Navbar */}
      <div className="user-navbar fixed w-screen z-30 h-16 flex justify-between items-center px-6 bg-red-500 shadow-md">
        <Link to="/">
          <img src={logo2} alt="Logo" className="h-30 object-contain" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggle}
          className="text-white text-2xl lg:hidden transition duration-300"
        >
          {open ? <FaWindowClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Dark Overlay
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-20 lg:hidden"
          onClick={toggle}
        ></div>
      )} */}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-16 right-0 w-3/4 max-w-xs h-full bg-red-600 text-white z-30 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        } lg:hidden flex flex-col gap-6 px-6 py-10`}
      >
        <Link
          to="/user/userDashboard"
          className="hover:text-yellow-300 text-lg"
          onClick={() => {
            window.scrollTo(0, 0);
            toggle(); // Call toggle after scroll
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/user/Mybooking"
          className="hover:text-yellow-300 text-lg"
          onClick={toggle}
        >
          My Bookings
        </Link>
        {/* Add more links or logout if needed */}
      </div>
    </>
  );
};

export default UserNavbar;

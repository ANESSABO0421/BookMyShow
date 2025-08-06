import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import logo2 from "../../assets/logo2.png";

const UserNavbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="user-navbar fixed w-full z-20 h-18 flex justify-between items-center px-4 py-3 bg-red-500">
        <img src={logo2} alt="" className="flex h-30 " />
        <button onClick={toggle} className="flex lg:hidden">
          {!open ? (
            <GiHamburgerMenu className="text-white" />
          ) : (
            <FaWindowClose />
          )}
        </button>
        {open && (
          <div
            className="fixed bg-black  opacity-50 z-10"
            onClick={toggle}
          ></div>
        )}
      </div>
      {/* sidebar */}
      <div
        className={`fixed top-[72px] right-0 bg-red-500 h-full w-full z-20 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
      </div>
    </>
  );
};

export default UserNavbar;

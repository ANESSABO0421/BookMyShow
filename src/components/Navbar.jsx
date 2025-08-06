import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectMovies } from "../features/movieSlice";
import { selectLatestPlays } from "../features/LatestPlaysSlice";
import { SelectSports } from "../features/LatestSportsSlice";
import { selectLiveEvents } from "../features/LiveEventSlice";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const [query, setQuery] = useState("");

  //CLERK AUTHENTICATION
  const { user } = useUser();
  const { openSignIn } = useClerk();

  // navigation dashboard
  const navigate = useNavigate();

  const movies = useSelector(selectMovies);
  const plays = useSelector(selectLatestPlays);
  const sports = useSelector(SelectSports);
  const events = useSelector(selectLiveEvents);

  const allItems = [
    ...movies.map((m) => ({ ...m, type: "movie" })),
    ...plays.map((p) => ({ ...p, type: "play" })),
    ...sports.map((s) => ({ ...s, type: "sport" })),
    ...events.map((e) => ({ ...e, type: "event" })),
  ];

  const results = allItems.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const location = useLocation(); //for removing bottom nav

  return (
    <>
      {/* Top Navbar */}
      <div className="navbar fixed w-full z-400 mb-20 flex justify-between items-center h-20 shadow-md px-2 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo2}
              alt="BookMyShow Logo"
              className="h-[150px] w-[180px] md:w-[150px] lg:h-[200px] lg:w-[200px]"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative w-[400px] hidden lg:flex">
          <BiSearchAlt2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
          <input
            type="text"
            placeholder="Search for Movies, Events, Sports and Activities"
            className="w-[400px] h-10 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <div className="absolute z-50 top-full mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {results.length > 0 ? (
                results.map((item) => (
                  <Link
                    key={`${item.type}-${item.id}`}
                    to={
                      item.type === "movie"
                        ? `/movies/${item.id}`
                        : item.type === "sport"
                        ? `/Games/${item.id}`
                        : item.type === "play"
                        ? `/LatestPlays/${item.id}`
                        : item.type === "event"
                        ? `/LatestEvent/${item.id}`
                        : "#"
                    }
                    className="block px-4 py-3 hover:bg-gray-100 border-b last:border-none"
                  >
                    <div className="font-semibold text-gray-800 ">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-500 capitalize">
                      {item.type}
                    </div>
                  </Link>
                ))
              ) : (
                <p className="px-4 py-3 text-gray-500">No results found</p>
              )}
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 sm:px-4 md:px-2 lg:px-0">
          {!user ? (
            <button
              onClick={openSignIn}
              className="bg-red-500 hidden lg:flex hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm cursor-pointer"
            >
              Sign in
            </button>
          ) : (
            <div className="relative flex items-center gap-2">
              <UserButton />
              <button
                onClick={() => navigate("/user")}
                className="ml-2 hidden lg:flex bg-white border text-black px-4 py-2 text-sm rounded shadow hover:bg-gray-100"
              >
                Dashboard
              </button>
            </div>
          )}

          {location.pathname === "/" && (
            <button onClick={toggle}>
              {!open ? (
                <GiHamburgerMenu className="text-2xl text-gray-700 mr-2 cursor-pointer block lg:hidden" />
              ) : (
                <FaWindowClose className="text-2xl text-gray-700 mr-2 cursor-pointer block lg:hidden" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed bg-black opacity-50 inset-0 z-40"
          onClick={toggle}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`flex justify-center items-center fixed top-0 right-0 h-full bg-white text-black z-50 transition-transform w-64 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex justify-center items-center flex-col gap-15 text-4xl">
          <li className="flex flex-col gap-20 items-center justify-center">
            {!user ? (
              <button
                onClick={openSignIn}
                className="bg-red-500 lg:flex hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm cursor-pointer"
              >
                Sign in
              </button>
            ) : (
              <UserButton />
            )}
            <a href="#recommendedMovies" onClick={toggle}>
              Movies
            </a>

            <a href="#events" onClick={toggle}>
              Events
            </a>

            <a href="#latestplay" onClick={toggle}>
              Plays
            </a>

            <a href="#sports" onClick={toggle}>
              Sports
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Nav */}
      {location.pathname === "/" && (
        <div className="h-10 lg:flex hidden justify-center bg-[#FB2C36] text-white items-center px-7 py-2 z-50 fixed top-20 w-full">
          <ul className="flex gap-[100px] items-center justify-center text-center">
            <a href="#recommendedMovies">Movies</a>
            <a href="#events">Events</a>
            <a href="#latestplay">Plays</a>
            <a href="#sports">Sports</a>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

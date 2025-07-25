import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SelectSports } from "../features/LatestSportsSlice";
import {
  FaCalendarAlt,
  FaClock,
  FaHourglassHalf,
  FaLanguage,
  FaMapMarkerAlt,
  FaRupeeSign,
} from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import LatestPlays from "../components/LatestPlays";

const GameDetails = () => {
  const { id } = useParams();
  const Games = useSelector(SelectSports);
  console.log(Games);
  const Game = Games.find((g) => g.id === parseInt(id));
  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-4 gap-6">
      {/* Left Section */}
      <div className="lg:w-2/3 flex flex-col items-start gap-5">
        <h1 className="text-4xl font-bold">{Game.title}</h1>

        <img
          src={Game.banner}
          alt="banner"
          className="w-full max-h-[500px] rounded-xl object-cover shadow-2xl"
        />

        {/* About Section */}
        <h2 className="text-3xl mt-6 font-semibold">About The Event</h2>
        <p className="text-lg text-gray-700">{Game.about}</p>

        {/* <LatestPlays/> */}
      </div>

      {/* Right Section */}
      <div className="lg:w-1/3 w-full mt-15">
        <div className=" bg-[#FB2C36]  rounded-3xl w-[350px] sticky top-4 shadow-lg">
          <div className="h-full p-6 flex flex-col gap-6 text-white">
            <span className="flex gap-2 items-center text-lg">
              <FaCalendarAlt />
              {Game.date}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaClock />
              {Game.time}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaHourglassHalf />
              {Game.duration}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <MdLanguage />
              {Game.genre}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaMapMarkerAlt />
              {Game.location}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaRupeeSign />
              {Game.price} Rupees Only
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaLanguage />
              {Game.languages}
            </span>
            <button className="bg-white text-pink-500 rounded-full h-[50px] cursor-pointer">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;

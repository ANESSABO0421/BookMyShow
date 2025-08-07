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
    <div className="flex flex-col lg:flex-row min-h-screen p-4 gap-6 ">
      {/* Left Section */}
      <div className="lg:w-2/3 flex flex-col items-start gap-5 mt-20">
        <h1 className="text-4xl font-bold">{Game.title}</h1>

        <img
          src={Game.banner}
          alt="banner"
          className="w-full max-h-[500px] rounded-xl object-cover shadow-2xl"
          data-aos="flip-left"
        />

        {/* About Section */}
        <h2 className="text-3xl mt-6 font-semibold">About The Event</h2>
        <p className="text-lg text-gray-700">{Game.about}</p>

        <div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Terms & Conditions
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 text-base">
            <li>Tickets once booked cannot be canceled or refunded.</li>
            <li>Please carry a valid ID proof for entry to the event.</li>
            <li>Event details are subject to change without prior notice.</li>
            <li>Outside food or beverages are not allowed inside the venue.</li>
            <li>Follow all COVID-19 safety protocols as required.</li>
            <li>
              Entry will be denied if the ticket is tampered or duplicated.
            </li>
            <li>
              The organizer reserves the right to admission and expulsion.
            </li>
            <li>
              Misbehavior or causing disturbance during the event may lead to
              removal without refund.
            </li>
            <li>
              Children below a certain age may require parental supervision or
              may not be allowed.
            </li>
            <li>
              By booking, you agree to the collection of your data for contact
              and updates.
            </li>{" "}
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/3 w-full mt-35">
        <div className=" bg-[#FB2C36]  rounded-3xl w-[350px] sticky top-20 shadow-lg ">
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
              <FaMapMarkerAlt />
              {Game.location}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaRupeeSign />
              {Game.prizePool}
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

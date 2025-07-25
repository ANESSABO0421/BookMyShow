import React from "react";
import { useSelector } from "react-redux";
import { selectLiveEvents } from "../features/LiveEventSlice";
import { useParams } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaHourglassHalf,
  FaLanguage,
  FaMapMarkerAlt,
  FaRupeeSign,
} from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { GiAges } from "react-icons/gi";

const LatestEventDetails = () => {
  const { id } = useParams();
  const Events = useSelector(selectLiveEvents);
  const Event = Events.find((Ev) => Ev.id == parseInt(id));

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-4 gap-6">
      {/* Left Section */}
      <div className="lg:w-2/3 flex flex-col items-start gap-5">
        <h1 className="text-4xl font-bold">{Event.title}</h1>

        <img
          src={Event.banner}
          alt="banner"
          className="w-full max-h-[500px] rounded-xl object-cover shadow-2xl"
        />

        {/* About Section */}
        <h2 className="text-3xl mt-6 font-semibold">About The Event</h2>
        <p className="text-lg text-gray-700">{Event.about}</p>

        {/* Artists */}
        <h2 className="text-3xl mt-8 font-semibold">Artists</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-4">
          {Event.artists?.map((person, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={person.image}
                alt={person.name}
                className="w-24 h-24 object-cover rounded-full border-2 border-white shadow-md"
              />
              <p className="mt-2 font-medium text-sm">{person.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/3 w-full mt-15">
        <div className=" bg-[#FB2C36]  rounded-3xl w-[350px] sticky top-4 shadow-lg">
          <div className="h-full p-6 flex flex-col gap-6 text-white">
            <span className="flex gap-2 items-center text-lg">
              <FaCalendarAlt />
              {Event.date}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaClock />
              {Event.details.time}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaHourglassHalf />
              {Event.details.duration}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <MdLanguage />
              {Event.details.genre}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaMapMarkerAlt />
              {Event.location}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaRupeeSign />
              {Event.details.price} Rupees Only
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaLanguage />
              {Event.details.languages}
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

export default LatestEventDetails;

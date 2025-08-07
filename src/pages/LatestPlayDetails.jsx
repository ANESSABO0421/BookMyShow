import React from "react";
import { useSelector } from "react-redux";
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
import { useParams } from "react-router-dom";
import { selectLatestPlays } from "../features/LatestPlaysSlice";

const LatestPlayDetails = () => {
  const { id } = useParams();
  const plays = useSelector(selectLatestPlays);
  const play = plays.find((p) => p.id === parseInt(id));

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-4 gap-6">
      {/* Left Section */}
      <div className="lg:w-2/3 flex flex-col items-start gap-5 mt-20">
        <h1 className="text-4xl font-bold ">{play.title}</h1>

        <img
          src={play.banner}
          alt="banner"
          className="w-full max-h-[500px] rounded-xl object-cover shadow-2xl"
          data-aos="flip-left"
        />

        {/* About Section */}
        <h2 className="text-3xl mt-6 font-semibold">About The Event</h2>
        <p className="text-lg text-gray-700">{play.about}</p>

        {/* Artists */}
        <h2 className="text-3xl mt-8 font-semibold">Artists</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-4">
          {play.artists?.map((person, index) => (
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
      <div className="sm:mt-0 lg:w-1/3 w-full  lg:mt-35">
        <div className=" bg-[#FB2C36]  rounded-3xl w-[350px] sticky top-20 shadow-lg">
          <div className="h-full p-6 flex flex-col gap-6 text-white">
            <span className="flex gap-2 items-center text-lg">
              <FaCalendarAlt />
              {play.startDate}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaClock />
              {play.time}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaHourglassHalf />
              {play.duration}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <MdLanguage />
              {play.genres}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaMapMarkerAlt />
              {play.venue}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaRupeeSign />
              {play.price}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaLanguage />
              {play.language}
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

export default LatestPlayDetails;

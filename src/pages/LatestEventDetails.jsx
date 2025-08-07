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

const LatestEventDetails = () => {
  const { id } = useParams();
  const events = useSelector(selectLiveEvents);
  const event = events.find((ev) => ev.id === parseInt(id));

  if (!event) {
    return <div className="pt-24 text-center text-xl">Event not found</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-4 gap-6 pt-24">
      {/* Left Section */}
      <div className="lg:w-2/3 flex flex-col items-start gap-6 mt-1">
        <h1 className="text-4xl font-bold">{event.title}</h1>

        <img
          src={event.banner}
          alt="banner"
          className="w-full max-h-[500px] rounded-xl object-cover shadow-2xl"
          data-aos="flip-left"
        />

        {/* About Section */}
        <div>
          <h2 className="text-3xl mt-6 font-semibold">About The Event</h2>
          <p className="text-lg text-gray-700 mt-2">{event.about}</p>
        </div>

        {/* Artists */}
        {event.artists && event.artists.length > 0 && (
          <div className="w-full">
            <h2 className="text-3xl mt-8 font-semibold">Artists</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-4">
              {event.artists.map((person, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
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
        )}
        {/* terms and condition */}
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
      <div className="lg:w-1/3 w-full mt-8 lg:mt-15">
        <div className="bg-[#FB2C36] rounded-3xl w-full max-w-[350px] sticky top-20 shadow-lg mx-auto lg:mx-0 ">
          <div className="h-full p-6 flex flex-col gap-6 text-white">
            <span className="flex gap-2 items-center text-lg">
              <FaCalendarAlt />
              {event.date}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaClock />
              {event.details.time}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaHourglassHalf />
              {event.details.duration}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <MdLanguage />
              {event.details.genre}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaMapMarkerAlt />
              {event.location}
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaRupeeSign />
              {event.details.price} Rupees Only
            </span>
            <span className="flex gap-2 items-center text-lg">
              <FaLanguage />
              {event.details.languages}
            </span>
            <button className="bg-white text-[#FB2C36] font-semibold rounded-full h-12 mt-4 hover:bg-gray-100 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestEventDetails;

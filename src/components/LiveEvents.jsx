import React from "react";
import { useSelector } from "react-redux";
import { selectLiveEvents } from "../features/LiveEventSlice";
import { Link } from "react-router-dom";

const LiveEvents = () => {
  const liveEvent = useSelector(selectLiveEvents);
  return (
    <div className="px-4 sm:px-6 md:px-8 py-6" data-aos="fade-right">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Latest Events</h2>

      <div className="scroll flex gap-4 sm:gap-6 overflow-x-auto pb-2">
        {liveEvent.map((Event) => (
          <Link
            to={`/LatestEvent/${Event.id}`}
            key={Event.id}
            className="min-w-[200px] sm:min-w-[240px] md:min-w-[280px] bg-white"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img
              src={Event.img}
              alt={Event.title}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg"
            />
            <div className="p-2 sm:p-3">
              <p className="text-lg sm:text-xl font-semibold truncate">
                {Event.title}
              </p>
              <p className="text-sm sm:text-lg text-gray-600">
                {Event.location}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LiveEvents;

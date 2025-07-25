import React from "react";
import { useSelector } from "react-redux";
import { SelectSports } from "../features/LatestSportsSlice";
import { Link } from "react-router-dom";

const LatestSports = () => {
  const Sports = useSelector(SelectSports);
  return (
    <div className="px-4 sm:px-6 md:px-8 py-6" >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        Top Games & Sports Events
      </h2>

      <div className="scroll flex gap-4 sm:gap-6 overflow-x-auto pb-2">
        {Sports.map((sport) => (
          <Link
            to={`/Games/${sport.id}`}
            key={sport.id}
            className="min-w-[200px] sm:min-w-[240px] md:min-w-[280px] bg-white"
          >
            <img
              src={sport.image}
              alt={sport.title}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg"
            />
            <div className="p-2 sm:p-3">
              <p className="text-sm sm:text-xl font-semibold text-black">
                {sport.title}
              </p>
              <p className="text-sm sm:text-lg text-gray-600">
                {sport.location}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestSports;

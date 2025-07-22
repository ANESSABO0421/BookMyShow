import React from "react";
import { useSelector } from "react-redux";
import { selectLatestPlays } from "../features/LatestPlaysSlice";
import { Link } from "react-router-dom";

const LatestPlays = () => {
  const latestPlay = useSelector(selectLatestPlays);
  console.log(latestPlay);
  return (
    <div className="px-4 sm:px-6 md:px-8 py-6">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Latest Plays</h2>
      <Link className="scroll flex gap-4 sm:gap-6 overflow-x-auto pb-2">
        {latestPlay.map((Event) => (
          <div
            key={Event.id}
            className="min-w-[200px] sm:min-w-[240px] bg:white"
          >
            <img
              src={Event.imageUrl}
              alt="atest.title"
              className="h-[300px] sm:h-[400px] md:h-[500px] w-full sm:w-[400px] md:w-[500px] lg:w-[600px] rounded-md"
            />
            <p className="text-sm sm:text-xl font-semibold text-black">
              {Event.title}
            </p>
            <p className="text-sm sm:text-xl font-semibold text-gray-500">
              {Event.language}
            </p>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default LatestPlays;

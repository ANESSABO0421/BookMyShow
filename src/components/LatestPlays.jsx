import React from "react";
import { useSelector } from "react-redux";
import { selectLatestPlays } from "../features/LatestPlaysSlice";
import { Link } from "react-router-dom";

const LatestPlays = () => {
  const latestPlay = useSelector(selectLatestPlays);
  console.log(latestPlay);

  return (
    <>
      <section id="latestplay">
        <div className="px-4 sm:px-6 md:px-8 py-6" data-aos="flip-left">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4  sm:text-left">
            Latest Plays
          </h2>

          <div className="scroll flex  gap-4 sm:gap-6 overflow-x-auto pb-2 snap-x snap-mandatory">
            {latestPlay.map((Event) => (
              <Link
                key={Event.id}
                to={`/LatestPlays/${Event.id}`}
                className="min-w-[200px] sm:min-w-[300px] snap-start"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img
                  src={Event.imageUrl}
                  alt={Event.title}
                  className="h-[350px] sm:h-[400px] md:h-[500px] w-full sm:w-[400px] md:w-[500px] lg:w-[600px] object-cover rounded-md"
                />
                <p className="mt-2 text-sm sm:text-xl font-semibold text-black line-clamp-1 ">
                  {Event.title}
                </p>
                <p className="text-sm sm:text-lg text-gray-500 line-clamp-1">
                  {Event.language}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestPlays;

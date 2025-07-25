import React from "react";
import { useSelector } from "react-redux";
import { selectMovies } from "../features/movieSlice";
import { Link } from "react-router-dom";
import banner1 from "../assets/banners/banner1.avif";

const RecommendedMovies = () => {
  const movies = useSelector(selectMovies);

  return (
    <div className="px-4 sm:px-6 md:px-8 py-6" >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        Recommended Movies
      </h2>

      <div className="scroll flex gap-4 sm:gap-6 overflow-x-auto pb-2">
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`}
            key={movie.id}
            className="min-w-[200px] sm:min-w-[240px] md:min-w-[280px] bg-white"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg"
            />
            <div className="p-2 sm:p-3">
              <p className="text-lg sm:text-xl font-semibold truncate">
                {movie.title}
              </p>
              <p className="text-sm sm:text-md text-gray-600">{movie.genre}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* banner image */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 pt-10 sm:pt-16 md:pt-20 flex justify-center">
        <img
          src={banner1}
          alt="banner"
          className="w-full max-w-7xl rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default RecommendedMovies;

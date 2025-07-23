import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMovies } from "../features/movieSlice";
import { FaStar, FaChevronRight } from "react-icons/fa";
import RecommendedMovies from "../components/RecommendedMovies";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const movies = useSelector(selectMovies);
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <>
      {/* Banner Section */}
      <div
        className="relative w-full min-h-[600px] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.banner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-6 md:px-12 lg:px-32 py-10">
          <img
            src={movie.image}
            alt="Poster"
            className="h-[300px] md:h-[400px] lg:h-[450px] rounded-lg"
          />

          <div className="text-white flex flex-col gap-5 w-full max-w-[700px]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {movie.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 bg-gray-500 rounded-2xl px-4 py-3">
              <FaStar className="text-xl md:text-2xl" />
              <span className="text-lg md:text-xl">
                {movie.rating}/10 ({movie.votes} votes)
              </span>
              <button className="ml-auto bg-white text-black rounded-md px-4 py-2 text-sm md:text-base hover:bg-black hover:text-white transition duration-300">
                Rate Now <FaChevronRight className="inline ml-1" />
              </button>
            </div>

            <div>
              <span className="bg-gray-500 px-4 py-2 rounded-md text-sm md:text-base">
                {movie.language}
              </span>
            </div>

            <div className="text-white text-base md:text-lg">
              {movie.duration} • {movie.genre} • {movie.release}
            </div>

            <button className="bg-[#ff2b85] text-white font-semibold text-base md:text-lg px-6 py-3 rounded-md hover:bg-[#e02575] transition duration-300 ease-in-out w-fit">
              Book tickets
            </button>
          </div>
        </div>
      </div>

      {/* About, Cast, Crew, and Recommendations */}
      <div className="px-4 py-6 space-y-6">
        <div>
          <h2 className="text-3xl font-semibold">About The Movie</h2>
          <p className="text-gray-700 mt-2">{movie.about}</p>
        </div>
        <hr className="border-gray-300" />

        {/* Cast Section */}
        <div>
          <h2 className="text-3xl font-semibold px-1 mb-4">Cast</h2>
          <div className="flex flex-wrap gap-6">
            {movie.cast?.map((person, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center w-[120px] px-4 py-3"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover"
                />
                <p className="mt-2 font-medium text-sm md:text-base">{person.name}</p>
                <p className="text-xs text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
        <hr className="border-gray-300" />

        {/* Crew Section */}
        <div>
          <h2 className="text-3xl font-semibold px-1 mb-4">Crew</h2>
          <div className="flex flex-wrap gap-6">
            {movie.crew?.map((person, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center w-[120px] px-4 py-3"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover"
                />
                <p className="mt-2 font-medium text-sm md:text-base">{person.name}</p>
                <p className="text-xs text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
        <hr className="border-gray-300" />

        {/* Recommended Movies */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">You might also like this</h2>
          <div className="scroll flex gap-4 sm:gap-6 overflow-x-auto pb-2">
            {movies.map((movie) => (
              <Link
                to={`/movies/${movie.id}`}
                key={movie.id}
                className="min-w-[200px] sm:min-w-[240px] md:min-w-[280px] bg-white rounded-lg shadow-md hover:shadow-lg transition"
                onClick={() => window.scrollTo(0, 0)}
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <p className="text-lg sm:text-xl font-semibold truncate">
                    {movie.title}
                  </p>
                  <p className="text-sm text-gray-600">{movie.genre}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
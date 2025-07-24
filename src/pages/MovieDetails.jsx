import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectMovies } from "../features/movieSlice";
import { FaStar, FaChevronRight } from "react-icons/fa";
import RecommendedMovies from "../components/RecommendedMovies";

const MovieDetails = () => {
  const { id } = useParams();
  const movies = useSelector(selectMovies);
  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <>
      {/* Banner Section */}
      <div
        className="relative w-full bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${movie.banner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 px-4 sm:px-8 md:px-12 lg:px-20 py-10 min-h-[500px]">
          {/* Text Info */}
          <div className="text-white flex flex-col gap-5 w-full lg:w-1/2">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              {movie.title}
            </h1>

            {/* Rating Box */}
            <div className="flex flex-wrap items-center gap-4 bg-white/20 backdrop-blur-md rounded-2xl px-4 py-3 w-full sm:max-w-[400px]">
              <FaStar className="text-xl sm:text-2xl text-yellow-300" />
              <span className="text-base sm:text-lg font-medium">
                {movie.rating}/10 ({movie.votes} votes)
              </span>
              <button className="ml-auto bg-white text-black rounded-md px-3 py-1 text-xs sm:text-sm hover:bg-black hover:text-white transition">
                Rate Now <FaChevronRight className="inline ml-1" />
              </button>
            </div>

            {/* Language Tag */}
            <div>
              <span className="bg-gray-600 text-white px-3 py-1 rounded-md text-xs sm:text-sm">
                {movie.language}
              </span>
            </div>

            {/* Meta Info */}
            <p className="text-sm sm:text-base">
              {movie.duration} • {movie.genre} • {movie.release}
            </p>

            {/* Book Tickets Button */}
            <button className="bg-[#ff2b85] w-fit text-white font-semibold px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-md hover:bg-[#e02575] transition">
              Book Tickets
            </button>
          </div>

          {/* Movie Poster */}
          <img
            src={movie.image}
            alt="Poster"
            className="h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Content Sections */}
      <div className="px-4 sm:px-6 lg:px-16 py-6 space-y-8">
        {/* About */}
        <div>
          <h2 className="text-3xl font-semibold">About The Movie</h2>
          <p className="text-gray-700 mt-2">{movie.about}</p>
        </div>
        <hr className="border-gray-300" />

        {/* Cast Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Cast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {movie.cast?.map((person, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover shadow-md"
                />
                <p className="mt-2 font-medium text-sm md:text-base">
                  {person.name}
                </p>
                <p className="text-xs text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
        <hr className="border-gray-300" />

        {/* Crew Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Crew</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {movie.crew?.map((person, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover shadow-md"
                />
                <p className="mt-2 font-medium text-sm md:text-base">
                  {person.name}
                </p>
                <p className="text-xs text-gray-600 text-center">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
        <hr className="border-gray-300" />

        {/* Recommendations */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            You might also like this
          </h2>
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
                  className="w-full h-[280px] sm:h-[360px] md:h-[500px] object-cover rounded-t-lg"
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

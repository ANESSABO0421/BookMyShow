import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMovies } from "../features/movieSlice";

const MovieDetails = () => {
  const { id } = useParams(); //"1" will be the in string

  const movies = useSelector(selectMovies);

  const movie = movies.find((m) => m.id === parseInt(id)); ///find the first matching id convert the string id to int

  return (
    <>
      <div
        className="relative w-full h-[450px] bg-no-repeat bg-cover  bg-center "
        style={{ backgroundImage: `url(${movie.banner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>{" "}
      </div>
    </>
  );
};

export default MovieDetails;

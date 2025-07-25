import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SelectSports } from "../features/LatestSportsSlice";

const GameDetails = () => {
  const { id } = useParams();
  const Games = useSelector(SelectSports);
  console.log(Games);
  const Game = Games.find((g) => g.id === parseInt(id));
  return <div>{Game.title}</div>;
};

export default GameDetails;

import React from "react";
import MovingBar from "../components/MovingBar";
import RecommendedMovies from "../components/RecommendedMovies";
import LatestPlays from "../components/LatestPlays";
import LiveEvents from "../components/LiveEvents";
import LatestSports from "../components/LatestSports";
import LatestActivities from "../components/LatestActivities";

const Home = () => {
  return (
    <div className="pt-2">
      <MovingBar />
      <RecommendedMovies/>
      <LatestPlays/>
      <LiveEvents/>
      <LatestSports/>
      <LatestActivities/>
    </div>
  );
};

export default Home;

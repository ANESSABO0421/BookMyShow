import React from "react";
import MovingBar from "../components/MovingBar";
import RecommendedMovies from "../components/RecommendedMovies";
import LatestPlays from "../components/LatestPlays";
import LiveEvents from "../components/LiveEvents";
import LatestSports from "../components/LatestSports";
import LatestActivities from "../components/LatestActivities";

const Home = () => {
  return (
    <div className="pt-2 lg:pt-32">
      <MovingBar />
      <RecommendedMovies/>
      <LatestPlays/>
      <LiveEvents/>
      <LatestSports/>
    </div>
  );
};

export default Home;

import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movieSlice";
import latestPlaysReducer from "../features/LatestPlaysSlice";
import liveEventsReducer from "../features/LiveEventSlice";
import SportsReducer from "../features/LatestSportsSlice";
import ActivitiesReducer from "../features/LatestActivitiesSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    latestPlays: latestPlaysReducer,
    liveEvents: liveEventsReducer,
    Sports: SportsReducer,
    Activities: ActivitiesReducer,
  },
});

import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aos from "aos";
import "aos/dist/aos.css";
import MovieDetails from "./pages/MovieDetails";
import LatestPlay from "./pages/LatestPlayDetails";
import LatestPlayDeatails from "./pages/LatestPlayDetails";
import Footer from "./components/Footer";
import LatestEventDetails from "./pages/LatestEventDetails";
import GameDetails from "./pages/GameDetails";
import BookingPage from "./pages/BookingPage";
import UserDashboard from "./pages/User/UserDashboard";
import Layout from "./pages/User/Layout";

const App = () => {
  // useEffect(() => {
  //   Aos.init({
  //     duration: 1000,
  //     once: true,
  //   });
  // }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* dynamic routing */}
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/LatestPlays/:id" element={<LatestPlayDeatails />} />
        <Route path="/LatestEvent/:id" element={<LatestEventDetails />} />
        <Route path="/Games/:id" element={<GameDetails />} />
        <Route path="/booking-page/:id" element={<BookingPage />} />
        <Route path="/user" element={<Layout/>}>
        
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

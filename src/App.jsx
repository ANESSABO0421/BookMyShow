import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
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
import MyBooking from "./pages/User/MyBooking";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const location = useLocation();

  const hideNavbarPaths = ["/user", "/user/userDashboard", "/user/Mybooking"];

  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname); //current path name is compared to the /user

  return (
    <div>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* dynamic routing */}
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/LatestPlays/:id" element={<LatestPlayDeatails />} />
        <Route path="/LatestEvent/:id" element={<LatestEventDetails />} />
        <Route path="/Games/:id" element={<GameDetails />} />
        <Route path="/booking-page/:id" element={<BookingPage />} />
        <Route path="/user" element={<Layout />}>
          <Route path="/user/userDashboard" element={<UserDashboard />} />
          <Route path="/user/Mybooking" element={<MyBooking />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;

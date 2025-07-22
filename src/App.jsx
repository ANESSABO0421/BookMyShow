import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aos from "aos";
import "aos/dist/aos.css"; 
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []); 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        {/* dynamic routing */}
        <Route path="/movies/:id" element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
};

export default App;

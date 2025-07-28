import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMovies } from "../features/movieSlice";

const BookingPage = () => {
  const rows = ["A", "B", "C", "D", "E"];
  const cols = 8;

  const { id } = useParams();
  const movies = useSelector(selectMovies);
  const movie = movies.find((b) => b.id === parseInt(id));

  const [selectedSeats, setSelectedSeats] = useState([]);

  if (!movie) {
    return <p className="text-center text-red-600 mt-10">Movie not Found</p>;
  }

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="flex flex-col max-h-full min-h-screen bg-gray-50">
      {/* Title */}
      <div className="text-center py-6 px-4 mt-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700">
          {movie.title}
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 px-4 ">
        {/* Left section */}
        <div className="flex-1 w-full flex justify-center">
          <img
            src={movie.image}
            alt={movie.title}
            className="max-h-[300px] sm:max-h-[450px]  w-full max-w-xs object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Right Selection */}
        <div className="flex-1 w-full px-4 mt-4 lg:mt-20">
          {/* Screen */}
          <div className="flex justify-center items-center mb-6">
            <div className="w-[90%] sm:w-[70%] h-8 rounded-b-[100%] bg-gradient-to-r from-gray-400 to-gray-600 shadow-inner relative">
              <p className="absolute w-full text-center -bottom-6 text-sm text-white font-semibold tracking-wide">
                Screen
              </p>
            </div>
          </div>

          {/* Seat Rows */}
          {rows.map((row) => (
            <div key={row} className="flex gap-2 justify-center mb-2">
              {[...Array(cols)].map((_, i) => {
                const seat = `${row}${i + 1}`;
                const selected = selectedSeats.includes(seat);
                const seatStyle = selected ? "bg-green-500" : "bg-gray-500";

                return (
                  <button
                    key={seat}
                    onClick={() => toggleSeat(seat)}
                    className={`flex w-10 h-10 sm:w-12 sm:h-12 items-center justify-center text-sm sm:text-base text-white font-semibold rounded-xl shadow-md transition-all duration-200 transform hover:scale-110 ${seatStyle}`}
                  >
                    {seat}
                  </button>
                );
              })}
            </div>
          ))}

          {/* Selected Seats & Price */}
          <div className="text-center mt-6 space-y-3">
            <p className="text-lg font-medium text-gray-700">
              Selected Seats:
              <span className="ml-1 text-indigo-600 font-semibold">
                {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
              </span>
            </p>
            <p className="text-lg font-medium text-gray-700">
              Total Price:
              <span className="ml-1 text-green-600 font-bold">
                ₹{selectedSeats.length * movie.price}
              </span>
            </p>
            <button className="px-6 py-3 bg-[#FB2C36] hover:bg-[#d8222e] transition rounded-xl text-white font-semibold shadow-lg">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="mt-8 px-6 sm:px-0 text-sm text-gray-700 max-w-lg mx-auto pb-10">
        <p className="mb-3 font-bold text-center text-black text-base underline underline-offset-4">
          Terms and Conditions
        </p>
        <ul className="list-disc list-inside space-y-2 text-left leading-relaxed">
          <li>Tickets once booked cannot be cancelled or refunded.</li>
          <li>Please carry a valid ID proof to the venue.</li>
          <li>Seats are available on a first-come, first-served basis.</li>
          <li>Late arrivals may not be allowed entry.</li>
          <li>Management reserves the right to admission.</li>
        </ul>
      </div>
    </div>
  );
};

export default BookingPage;

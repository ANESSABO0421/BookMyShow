import React from "react";

const bookings = [
  {
    id: 1,
    event: "Saiyaraa",
    date: "01 Aug 2025",
    location: "mumbai",
    status: "Confirmed",
  },
  {
    id: 2,
    event: "sitaare zameen par",
    date: "25 Jul 2025",
    location: "mumbai",
    status: "Pending",
  },
  
];

const MyBooking = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-red-600 mb-6 text-center sm:text-left">
        My Bookings
      </h1>

      {/* Table View for larger screens */}
      <div className="hidden sm:block overflow-x-auto shadow-md rounded-xl">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-red-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                Event
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                Location
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">{booking.event}</td>
                <td className="px-6 py-4 whitespace-nowrap">{booking.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {booking.location || "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      booking.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : booking.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View: Card layout */}
      <div className="block sm:hidden mt-6 space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white p-4 rounded-lg shadow border"
          >
            <h2 className="text-lg font-semibold text-red-600">
              {booking.event}
            </h2>
            <p className="text-sm text-gray-600">Date: {booking.date}</p>
            <p className="text-sm text-gray-600">
              Location: {booking.location || "N/A"}
            </p>
            <p className="text-sm mt-2">
              Status:{" "}
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  booking.status === "Confirmed"
                    ? "bg-green-100 text-green-700"
                    : booking.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {booking.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;

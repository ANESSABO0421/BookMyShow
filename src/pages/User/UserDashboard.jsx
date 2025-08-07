import React from "react";

const UserDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-red-600">
        Welcome to Your Dashboard
      </h1>
      <p className="text-gray-600">
        Here’s a quick overview of your account and recent activity.
      </p>

      {/* Dashboard Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Total Bookings
          </h2>
          <p className="text-3xl font-bold text-red-500">8</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Upcoming Events
          </h2>
          <p className="text-3xl font-bold text-red-500">2</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Account Status
          </h2>
          <p className="text-lg font-semibold text-green-500">Active</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Recent Bookings
        </h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-3 flex justify-between">
            <span>Saiyaraa</span>
            <span className="text-gray-500">01 Aug 2025</span>
          </li>
          <li className="py-3 flex justify-between">
            <span>jurassic world</span>
            <span className="text-gray-500">25 Jul 2025</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;

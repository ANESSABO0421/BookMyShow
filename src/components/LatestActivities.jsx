import React from "react";
import { useSelector } from "react-redux";
import { SelectActivities } from "../features/LatestActivitiesSlice";
import { Link } from "react-router-dom";

const LatestActivities = () => {
  const Activity = useSelector(SelectActivities);
  console.log(Activity);
  return (
    <div className="px-4 sm:px-6 md:px-8 py-6" >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        Activities
      </h2>

      <Link className="scroll flex gap-4 sm:gap-6 overflow-x-auto pb-2">
        {Activity.map((activity) => (
          <div
            key={activity.id}
            className="min-w-[200px] sm:min-w-[240px] md:min-w-[280px] bg-white"
          >
            <img
              src={activity.imageUrl}
              alt={activity.title}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg"
            />
            <div className="p-2 sm:p-3">
              <p className="text-lg sm:text-xl font-semibold truncate">
                {activity.title}
              </p>
              <p className="text-sm sm:text-md text-gray-600">{activity.location}</p>
            </div>
          </div>
        ))}
      </Link>

      
    </div>
  );
};

export default LatestActivities;

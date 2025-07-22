import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activities: [
    {
      id: 1,
      title: "Paradox Museum",
      location: "Paradox Museum: Mumbai",
      date: "Tue, 22 Jul onwards",
      imageUrl: "/assets/Activities/img1.avif",
      promoted: true,
    },
    {
      id: 2,
      title: "Mumbai Filmcity Tour with Bollywood Park",
      location: "Gate No.1, Dadasaheb Phalke Chitranagri: Mumbai",
      date: "Tue, 22 Jul onwards",
      imageUrl: "/assets/Activities/img2.avif",
      promoted: true,
    },
    {
      id: 3,
      title: "Showglitz Navratri Utsav with Geeta Rabari 2025",
      location: "Venue To Be Announced: Mumbai",
      date: "Mon, 22 Sep onwards",
      imageUrl: "/assets/Activities/img3.avif",
      promoted: false,
    },
    {
      id: 4,
      title: "Wet N Joy Waterpark & Amusement Park, Lonavala",
      location: "Wet N Joy Water Park: Lonavala",
      date: "Wed, 23 Jul onwards",
      imageUrl: "/assets/Activities/img4.avif",
      promoted: false,
    },
    {
      id: 5,
      title: "Tikuji Ni Wadi Water & Amusement Park",
      location: "Tikuji Ni Wadi: Thane",
      date: "Wed, 23 Jul onwards",
      imageUrl: "/assets/Activities/img5.avif",
      promoted: false,
    },
    {
      id: 6,
      title: "Snow World Seawoods",
      location: "Snow World: Navi Mumbai",
      date: "Tue, 22 Jul onwards",
      imageUrl: "/assets/Activities/img6.avif",
      promoted: false,
    },
    {
      id: 7,
      title: "The Great Escape Water Park",
      location: "The Great Escape Water Park: Thane",
      date: "Wed, 23 Jul onwards",
      imageUrl: "/assets/Activities/img7.avif",
      promoted: false,
    },
    {
      id: 8,
      title: "BOUNCE Inc Mumbai",
      location: "BOUNCE Inc: Mumbai",
      date: "Tue, 22 Jul onwards",
      imageUrl: "/assets/Activities/img8.avif",
      promoted: false,
    },
    {
      id: 9,
      title: "Snow Kingdom Mumbai",
      location: "Snow Kingdom: Mumbai",
      date: "Tue, 22 Jul onwards",
      imageUrl: "/assets/Activities/img9.avif",
      promoted: false,
    },
    {
      id: 10,
      title: "Royal Garden Resort",
      location: "Royal Garden Resort (Naigaon East): Mumbai",
      date: "Tue, 22 Jul onwards",
      imageUrl: "/assets/Activities/img10.avif",
      promoted: false,
    },
  ],
};

export const LatestActivitesSlice = createSlice({
  name: "Activities",
  initialState,
  reducers: {},
});

export const SelectActivities = (state) => state.Activities.activities;

export default LatestActivitesSlice.reducer;

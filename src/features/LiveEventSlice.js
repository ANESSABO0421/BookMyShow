import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  liveEvents: [
    {
      id: 1,
      title: "VIPUL GOYAL UNLEASHED",
      date: "Sat, 26 Jul onwards",
      location: "The Habitat: Mumbai",
      img: "/assets/latestEvents/img1.avif",
    },
    {
      id: 2,
      title: "Love, Death & Ketchup by Varun Grover",
      date: "Sat, 2 Aug onwards",
      location: "Bal Gandharva Rang Mandir: Mumbai",
      img: "/assets/latestEvents/img2.avif",
    },
    {
      id: 3,

      title: "Kisi Ko Batana Mat Ft. Anubhav Singh Bassi",
      date: "Fri, 25 Jul onwards",
      location: "Sri Shanmukhananda Fine Arts",
      img: "/assets/latestEvents/img3.avif",
    },
    {
      id: 4,
      title: "All Star Standup Comedy",
      date: "Tue, 22 Jul onwards",
      location: "The Habitat: Mumbai",
      img: "/assets/latestEvents/img4.avif",
    },
    {
      id: 5,
      title: "Kal ki Chinta Nahi Karta ft. Ravi Gupta",
      date: "Fri, 15 Aug",
      location: "Birla Matoshree Sabhagriha",
      img: "/assets/latestEvents/img5.avif",
    },
    {
      id: 6,
      title: "Jo Bolta Hai Wahi Hota Hai feat Harsh Gujral",
      date: "Fri, 1 Aug",
      location: "TBD",
      img: "/assets/latestEvents/img6.avif",
    },
    {
      id: 7,
      title: "TOXIC - Abhishek Upmanyu Live",
      date: "Fri, 24 Oct",
      location: "Tata Theatre: NCPA",
      img: "/assets/latestEvents/img7.avif",
    },
    {
      id: 8,
      title: "Gaurav Gupta Live - India Tour",
      date: "Sun, 7 Sep",
      location: "Sri Shanmukhananda Fine Arts",
      img: "/assets/latestEvents/img8.avif",
    },
    {
      id: 9,
      title: "Daily Ka Kaam Hai By Aakash Gupta - Mumbai",
      date: "Fri, 25 Jul onwards",
      location: "Sophia Bhabha Auditorium",
      img: "/assets/latestEvents/img9.avif",
    },
    {
      id: 10,
      title: "Who Are You by Rahul Subramanian - Live",
      date: "Fri, 1 Aug onwards",
      location: "Bal Gandharva Rang Mandir",
      img: "/assets/latestEvents/img10.avif",
    },
  ],
};

export const liveEventSlice = createSlice({
  name: "liveEvent",
  initialState,
  reducers: {},
});

export const selectLiveEvents = (state) => state.liveEvents.liveEvents;
export default liveEventSlice.reducer;

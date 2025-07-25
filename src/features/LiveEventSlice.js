import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  liveEvents: [
    {
      id: 1,
      title: "VIPUL GOYAL UNLEASHED",
      date: "Sat, 26 Jul onwards",
      location: "The Habitat: Mumbai",
      img: "/assets/latestEvents/img1.avif",
      banner: "/assets/latestEvents/banner1.avif",
      about:
        "A laugh riot with Vipul Goyal as he shares his hilarious takes on corporate life, relationships, and Indian culture.",
      artists: [
        { name: "Vipul Goyal", image: "/assets/latestEvents/Vipul.avif" },
      ],
      details: {
        dateRange: "Sat 26 Jul 2025",
        time: "7:30 PM",
        duration: "1 hour 15 minutes",
        ageLimit: "16yrs +",
        languages: ["Hindi", "English"],
        genre: "Comedy",
        venue: "The Habitat: Mumbai",
        price: "₹2499",
        bookingStatus: "Filling Fast",
      },
    },
    {
      id: 2,
      title: "Love, Death & Ketchup by Varun Grover",
      date: "Sat, 2 Aug onwards",
      location: "Bal Gandharva Rang Mandir: Mumbai",
      img: "/assets/latestEvents/img2.avif",
      banner: "/assets/latestEvents/banner2.avif",
      about:
        "A quirky and insightful solo performance by Varun Grover, blending humor with sharp social commentary.",
      artists: [
        { name: "Varun Grover", image: "/assets/latestEvents/varun.avif" },
      ],
      details: {
        dateRange: "Sat 2 Aug 2025",
        time: "7:30 PM",
        duration: "1 hour 15 minutes",
        ageLimit: "16yrs +",
        languages: ["Hindi", "English"],
        genre: "Comedy",
        venue: "Bal Gandharva Rang Mandir: Mumbai",
        price: "₹2499",
        bookingStatus: "Filling Fast",
      },
    },
    {
      id: 3,
      title: "Kisi Ko Batana Mat Ft. Anubhav Singh Bassi",
      date: "Fri, 25 Jul onwards",
      location: "Sri Shanmukhananda Fine Arts",
      img: "/assets/latestEvents/img3.avif",
      banner: "/assets/latestEvents/banner3.avif",
      about:
        "Anubhav Singh Bassi’s storytelling-style comedy about school, college, and the chaos of youth.",
      artists: [
        {
          name: "Anubhav Singh Bassi",
          image: "/assets/latestEvents/anubhav.avif",
        },
      ],
      details: {
        dateRange: "Fri 25 Jul 2025",
        time: "7:30 PM",
        duration: "1 hour 15 minutes",
        ageLimit: "16yrs +",
        languages: ["Hindi", "English"],
        genre: "Comedy",
        venue: "Sri Shanmukhananda Fine Arts",
        price: "₹2499",
        bookingStatus: "Filling Fast",
      },
    },
    {
      id: 4,
      title: "All Star Standup Comedy",
      date: "Tue, 22 Jul onwards",
      location: "The Habitat: Mumbai",
      img: "/assets/latestEvents/img4.avif",
      banner: "/assets/latestEvents/banner4.avif",
      about:
        "An all-star lineup featuring some of India’s top comedians for an unforgettable night of laughter.",
      artists: [
        { name: "Kanan Gill", image: "/assets/latestEvents/kanan.avif" },
        { name: "Aditi Mittal", image: "/assets/latestEvents/aditi.jpg" },
        { name: "Abish Mathew", image: "/assets/latestEvents/abhish.avif" },
      ],
      details: {
        dateRange: "Tue 22 Jul 2025",
        time: "7:30 PM",
        duration: "1 hour 15 minutes",
        ageLimit: "16yrs +",
        languages: ["Hindi", "English"],
        genre: "Comedy",
        venue: "The Habitat: Mumbai",
        price: "₹2499",
        bookingStatus: "Filling Fast",
      },
    },
    {
      id: 5,
      title: "Kal ki Chinta Nahi Karta ft. Ravi Gupta",
      date: "Fri, 15 Aug",
      location: "Birla Matoshree Sabhagriha",
      img: "/assets/latestEvents/img5.avif",
      banner: "/assets/latestEvents/banner5.avif",
      about:
        "Ravi Gupta brings his relatable middle-class stories and life philosophies with a hilarious twist.",
      artists: [{ name: "Ravi Gupta", image: "/assets/latestEvents/Ravi.jpg" }],
      details: {
        dateRange: "Fri 15 Aug 2025",
        time: "7:30 PM",
        duration: "1 hour 15 minutes",
        ageLimit: "16yrs +",
        languages: ["Hindi", "English"],
        genre: "Comedy",
        venue: "Birla Matoshree Sabhagriha",
        price: "₹2499",
        bookingStatus: "Filling Fast",
      },
    },
    {
      id: 6,
      title: "Jo Bolta Hai Wahi Hota Hai feat Harsh Gujral",
      date: "Fri, 1 Aug",
      location: "TBD",
      img: "/assets/latestEvents/img6.avif",
      banner: "/assets/latestEvents/banner6.avif",
      about:
        "Harsh Gujral's explosive comedy set filled with sarcasm, real-life anecdotes, and crowd-roasting.",
      artists: [
        { name: "Harsh Gujral", image: "/assets/latestEvents/Harsh.jpg" },
      ],
      details: {
        dateRange: "Fri 1 Aug 2025",
        time: "7:30 PM",
        duration: "1 hour 15 minutes",
        ageLimit: "16yrs +",
        languages: ["Hindi", "English"],
        genre: "Comedy",
        venue: "TBD",
        price: "₹2499",
        bookingStatus: "Filling Fast",
      },
    },
    {
      id: 7,
      title: "TOXIC - Abhishek Upmanyu Live",
      date: "Fri, 24 Oct",
      location: "Tata Theatre: NCPA",
      img: "/assets/latestEvents/img7.avif",
      banner: "/assets/latestEvents/banner7.avif",
      about:
        "A fresh set from Abhishek Upmanyu tackling everything from social norms to awkward everyday life.",
      artists: [
        {
          name: "Abhishek Upmanyu",
          image: "/assets/latestEvents/abhishek.jpg",
        },
      ],
      details: {
        dateRange: "Fri 24 Oct 2025",
        time: "7:30 PM",
        duration: "1 hour 15 minutes",
        ageLimit: "16yrs +",
        languages: ["Hindi", "English"],
        genre: "Comedy",
        venue: "Tata Theatre: NCPA",
        price: "₹2499",
        bookingStatus: "Filling Fast",
      },
    },
    // {
    //   id: 8,
    //   title: "Gaurav Gupta Live - India Tour",
    //   date: "Sun, 7 Sep",
    //   location: "Sri Shanmukhananda Fine Arts",
    //   img: "/assets/latestEvents/img8.avif",
    //   banner: "/assets/latestEvents/banner8.avif",
    //   about:
    //     "Gaurav Gupta’s trademark dentist jokes and Delhi humor promise a night of nonstop laughter.",
    //   artists: [
    //     { name: "Gaurav Gupta", image: "/assets/latestEvents/gaurav.avif" },
    //   ],
    // },
    // {
    //   id: 9,
    //   title: "Daily Ka Kaam Hai By Aakash Gupta - Mumbai",
    //   date: "Fri, 25 Jul onwards",
    //   location: "Sophia Bhabha Auditorium",
    //   img: "/assets/latestEvents/img9.avif",
    //   banner: "/assets/latestEvents/banner9.avif",
    //   about:
    //     "Aakash Gupta brings his high-energy style to share tales of work-life chaos and Indian quirks.",
    //   artists: [
    //     { name: "Aakash Gupta", image: "/assets/latestEvents/aakash.avif" },
    //   ],
    // },
    // {
    //   id: 10,
    //   title: "Who Are You by Rahul Subramanian - Live",
    //   date: "Fri, 1 Aug onwards",
    //   location: "Bal Gandharva Rang Mandir",
    //   img: "/assets/latestEvents/img10.avif",
    //   banner: "/assets/latestEvents/banner10.avif",
    //   about:
    //     "Rahul Subramanian’s latest act explores identity, absurdity, and the inner monologue of modern India.",
    //   artists: [
    //     { name: "Rahul Subramanian", image: "/assets/latestEvents/rahul.avif" },
    //   ],
    // },
  ],
};

export const liveEventSlice = createSlice({
  name: "liveEvent",
  initialState,
  reducers: {},
});

export const selectLiveEvents = (state) => state.liveEvents.liveEvents;
export default liveEventSlice.reducer;

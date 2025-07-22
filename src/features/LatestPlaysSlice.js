import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latestPlays: [
    {
      id: 1,
      title: "Rajadhiraaj: Love. Life. Leela",
      language: "Hindi",
      startDate: "Fri, 25 Jul onwards",
      imageUrl: "/assets/latestPlays/img1.avif",
    },
    {
      id: 2,
      title: "Raju Raja Ram aur Main",
      language: "Hindi",
      startDate: "Sun, 27 Jul",
      imageUrl: "/assets/latestPlays/img2.avif",
    },
    {
      id: 3,
      title: "Asen Me Nasen Me",
      language: "Marathi",
      startDate: "Thu, 31 Jul onwards",
      imageUrl: "/assets/latestPlays/img3.avif",
    },
    {
      id: 4,
      title: "Varvarche Vadhu Var",
      language: "Marathi",
      startDate: "Fri, 25 Jul onwards",
      imageUrl: "/assets/latestPlays/img4.avif",
    },
    {
      id: 5,
      title: "Thet Tumchya Gharatun",
      language: "Marathi",
      startDate: "Fri, 25 Jul onwards",
      imageUrl: "/assets/latestPlays/img5.avif",
    },
    {
      id: 6,
      title: "Punha Sahi Re Sahi",
      language: "Marathi",
      startDate: "Fri, 25 Jul onwards",
      imageUrl: "/assets/latestPlays/img6.avif",
    },
    {
      id: 7,
      title: "Aamne Saamne - Marathi Play",
      language: "Marathi",
      startDate: "Sat, 26 Jul onwards",
      imageUrl: "/assets/latestPlays/img7.avif",
    },
    {
      id: 8,
      title: "Jar Tar Chi Goshta",
      language: "Marathi",
      startDate: "Sun, 10 Aug onwards",
      imageUrl: "/assets/latestPlays/img8.avif",
    },
    {
      id: 9,
      title: "KUTUMB KIRRTAN",
      language: "Marathi",
      startDate: "Mon, 28 Jul onwards",
      imageUrl: "/assets/latestPlays/img9.avif",
    },
    {
      id: 10,
      title: "SHIKAYLA GELO EK",
      language: "Marathi",
      startDate: "Tue, 22 Jul onwards",
      imageUrl: "/assets/latestPlays/img10.avif",
    },
  ],
};

export const latestPlaySlice = createSlice({
  name: "latestPlays",
  initialState,
  reducers: {},
});

export const selectLatestPlays = (state) => state.latestPlays.latestPlays;
export default latestPlaySlice.reducer;

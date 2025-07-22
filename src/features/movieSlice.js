import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    {
      id: 1,
      title: "Saiyaara",
      rating: 8.8,
      votes: "53.8K",
      genre: "Drama/Musical/Romantic",
      image: "/assets/movies/saiyaraa.avif",
    },
    {
      id: 2,
      title: "Jurassic World: Rebirth",
      rating: 7.5,
      votes: "58.4K",
      genre: "Action/Sci-Fi/Thriller",
      image: "/assets/movies/jurassic_world.avif",
    },
    {
      id: 3,
      title: "Metro... In Dino",
      rating: 8.1,
      votes: "40.5K",
      genre: "Drama/Romantic",
      image: "/assets/movies/metro.avif",
    },
    {
      id: 4,
      title: "Superman",
      rating: 8.2,
      votes: "36.4K",
      genre: "Action/Adventure/Fantasy/Sci-Fi",
      image: "/assets/movies/superman.avif",
    },
    {
      id: 5,
      title: "Ye Re Ye Re Paisa 3",
      rating: 8.2,
      votes: "328",
      genre: "Comedy/Thriller",
      image: "/assets/movies/paisa3.avif",
    },
    {
      id: 6,
      title: "F1: The Movie",
      rating: 9.5,
      votes: "111.1K",
      genre: "Action/Drama/Sports",
      image: "/assets/movies/f1.avif",
    },
    {
      id: 7,
      title: "Smurfs",
      rating: 7.7,
      votes: "205",
      genre: "Animation/Family/Fantasy",
      image: "/assets/movies/smurfs.avif",
    },
    {
      id: 8,
      title: "Sitaare Zameen Par",
      rating: 8.4,
      votes: "86.7K",
      genre: "Comedy/Drama/Sports",
      image: "/assets/movies/sitaare.avif",
    },
    {
      id: 9,
      title: "Tanvi: The Great",
      rating: 9.3,
      votes: "1.3K",
      genre: "Drama",
      image: "/assets/movies/tanvi.avif",
    },
    {
      id: 10,
      title: "The Fantastic Four: First Steps",
      rating: null,
      votes: "108.4K Likes",
      genre: "Action/Adventure/Sci-Fi",
      image: "/assets/movies/fantastic4.avif",
    },
  ],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

export const selectMovies = (state) => state.movies.movies; //first movies is from store and the other is actual array
export default movieSlice.reducer;

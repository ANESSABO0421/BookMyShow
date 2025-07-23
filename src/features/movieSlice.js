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
      banner: "/assets/movies/banner1.jpg",
      language: "Hindi",
      duration: "2h 36m",
      release: "18 Jul 2025",
      about:
        "An intense love story that will break your heart and heal it, too.",
      cast: [
        {
          id: "1",
          name: "Ahaan Panday",
          role: "Actor",
          image: "/assets/movies/ahaan.jpg",
        },
        {
          id: "2",
          name: "Aneet Padda",
          role: "Actor",
          image: "/assets/movies/aneet.jpg",
        },
      ],
      crew: [
        {
          name: "Mohit Suri",
          role: "Director",
          image: "/assets/movies/mohit.jpg",
        },
        {
          name: "Akshaye Widhani",
          role: "Producer",
          image: "/assets/movies/akshaye.jpeg",
        },
      ],
    },

    {
      id: 2,
      title: "Jurassic World: Rebirth",
      rating: 7.5,
      votes: "58.4K",
      genre: "Action/Sci-Fi/Thriller",
      image: "/assets/movies/jurassic_world.avif",
      banner: "/assets/movies/banner2.jpg",
      language: "English, Hindi, Tamil, Telugu",
      duration: "2h 13m",
      release: "4 Jul 2025",
      about:
        "Five years after the events of Jurassic World Dominion, the planets ecology has proven largely inhospitable to dinosaurs. Those remaining exist in isolated equatorial environments with climates resembling the one in which they once thrived. The three most colossal creatures within that tropical biosphere hold the key to a drug that will bring miraculous life-saving benefits to humankind.Academy Award nominee Johansson plays skilled covert operations expert Zora Bennett, contracted to lead a skilled team on a top-secret mission to secure genetic material from the worlds three most massive dinosaurs. When Zoras operation intersects with a civilian family whose boating expedition was capsized by marauding aquatic dinos, they all find themselves stranded on an island where they come face-to-face with a sinister, shocking discovery thats been hidden from the world for decades.",
      cast: [
        {
          name: "Scarlett Johansson",
          role: "Zora Bennett",
          image: "/assets/movies/scarlett_johansson.jpg",
        },
        {
          name: "Mahershala Ali",
          role: "Duncan Kincaid",
          image: "/assets/movies/mahershala_ali.jpg",
        },
        {
          name: "Jonathan Bailey",
          role: "Dr. Henry Loomis",
          image: "/assets/movies/jonathan_bailey.jpg",
        },
      ],

      crew: [
        {
          name: "Gareth Edwards",
          role: "Director",
          image: "/assets/movies/gareth_edwards.jpg",
        },
        {
          name: "Frank Marshall",
          role: "Producer",
          image: "/assets/movies/frank_marshall.jpg",
        },
        {
          name: "Patrick Crowley",
          role: "Producer",
          image: "/assets/movies/patrick_crowley.jpg",
        },
      ],
    },

    {
      id: 3,
      title: "Metro... In Dino",
      rating: 8.1,
      votes: "40.5K",
      genre: "Drama/Romantic",
      image: "/assets/movies/metro.avif",
      banner: "/assets/movies/banner3.jpg",
      language: "Hindi",
      duration: "2h 42m",
      release: "4 Jul 2025",
      cast: [
        {
          name: "Aditya Roy Kapur",
          role: "Actor",
          image: "/assets/movies/aditya.jpg",
        },
        {
          name: "Sara Ali Khan",
          role: "Actor",
          image: "/assets/movies/sara.jpg",
        },
        {
          name: "Anupam Kher",
          role: "Actor",
          image: "/assets/movies/anupam.jpg",
        },
      ],
      crew: [
        {
          name: "Anurag Basu",
          role: "Director, Producer",
          image: "/assets/movies/anurag.jpg",
        },
        {
          name: "Bhushan Kumar",
          role: "Producer",
          image: "/assets/movies/bhushan.jpg",
        },
      ],
      about:
        "A musical hyperlink movie that weaves a tapestry of four urban stories of love, loyalty, and confusion at different stages of life. Quirky and humorous in tone, yet deeply emotional, the characters` overlapping journeys show that relationships face obstacles, but love endures.",
    },

    {
      id: 4,
      title: "Superman",
      rating: 8.2,
      votes: "36.4K",
      genre: "Action/Adventure/Fantasy/Sci-Fi",
      image: "/assets/movies/superman.avif",
      banner: "/assets/movies/banner4.jpg",
      language: "English,Hindi,Tamil,Telugu",
      duration: "2h 10m",
      release: "11 Jul 2025",
      about:
        "In his signature style, James Gunn takes on the original superhero in the newly imagined DC universe with a singular blend of epic action, humor and heart, delivering a Superman who`s driven by compassion and an inherent belief in the goodness of humankind.",
      cast: [
        {
          name: "David Corenswet",
          role: "Clark Kent / Superman / Kal-El",
          image: "/assets/movies/david.jpg",
        },
        {
          name: "Rachel Brosnahan",
          role: "Lois Lane",
          image: "/assets/movies/rachel.jpg",
        },
        {
          name: "Nicholas Hoult",
          role: "Lex Luthor",
          image: "/assets/movies/nicholas.jpg",
        },
      ],
      crew: [
        {
          name: "James Gunn",
          role: "Director, Producer, Writer",
          image: "/assets/movies/james.jpeg",
        },
        {
          name: "Peter Safran",
          role: "Producer",
          image: "/assets/movies/peter.jpg",
        },
        {
          name: "Chantal Nong Vo",
          role: "Executive Producer",
          image: "/assets/movies/chantal.jpg",
        },
      ],
    },

    {
      id: 5,
      title: "Ye Re Ye Re Paisa 3",
      rating: 8.2,
      votes: "328",
      genre: "Comedy/Thriller",
      image: "/assets/movies/paisa3.avif",
      banner: "/assets/movies/banner5.jpg",
      language: "Marathi",
      duration: "2h 19m",
      release: "18 Jul 2025",
    },
    {
      id: 6,
      title: "F1: The Movie",
      rating: 9.5,
      votes: "111.1K",
      genre: "Action/Drama/Sports",
      image: "/assets/movies/f1.avif",
      banner: "/assets/movies/banner6.jpg",
      language: "English,Hindi,Tamil,Telugu",
      duration: "2h 35m",
      release: "27 Jul 2025",
    },
    {
      id: 7,
      title: "Smurfs",
      rating: 7.7,
      votes: "205",
      genre: "Animation/Family/Fantasy",
      image: "/assets/movies/smurfs.avif",
      banner: "/assets/movies/banner7.jpg",
      language: "English,Hindi",
      duration: "1h 29m",
      release: "4 Jul 2025",
    },
    {
      id: 8,
      title: "Sitaare Zameen Par",
      rating: 8.4,
      votes: "86.7K",
      genre: "Comedy/Drama/Sports",
      image: "/assets/movies/sitaare.avif",
      banner: "/assets/movies/banner8.jpg",
      language: "Hindi,Telugu,English",
      duration: "2h 39m",
      release: "20 Jul 2025",
    },
    {
      id: 9,
      title: "Tanvi: The Great",
      rating: 9.3,
      votes: "1.3K",
      genre: "Drama",
      image: "/assets/movies/tanvi.avif",
      banner: "/assets/movies/banner9.jpg",
      language: "Hindi",
      duration: "2h 39m",
      release: "18 Jul 2025",
    },
    {
      id: 10,
      title: "The Fantastic Four: First Steps",
      rating: null,
      votes: "108.4K Likes",
      genre: "Action/Adventure/Sci-Fi",
      image: "/assets/movies/fantastic4.avif",
      banner: "/assets/movies/banner10.jpg",
      language: "English,Hindi,Tamil,Telugu",
      duration: null,
      release: "25 Jul 2025",
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

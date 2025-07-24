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
      about:
        "Ye Re Ye Re Paisa 3 is the third and most entertaining instalment of the popular franchise, written and directed by Sanjay Jadhav. This comedy caper revolves around a group of people, driven by greed, who try to outsmart each other in a wild chase for money. Packed with high-energy storytelling, catchy music, and nonstop twists, Ye Re Ye Re Paisa 3 delivers a rollercoaster ride of comedy, chaos, and clever schemes.",
      cast: [
        {
          name: "Sanjay Narvekar",
          role: "Actor",
          image: "/assets/movies/Sanjay.jpg",
        },
        {
          name: "Siddharth Jadhav",
          role: "Actor",
          image: "/assets/movies/Siddharth.jpg",
        },
        {
          name: "Tejaswini Pandit",
          role: "Actor",
          image: "/assets/movies/Tejaswini.jpg",
        },
      ],
      crew: [
        {
          name: "Sanjay S Jadhav",
          role: "Director, Writer, Screenplay",
          image: "/assets/movies/Jadhav.avif",
        },
        {
          name: "Ameya Khopkar",
          role: "Producer",
          image: "/assets/movies/ameya.jpg",
        },
        {
          name: "Swati Khopkar",
          role: "Producer",
          image: "/assets/movies/Swati.jpg",
        },
      ],
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
      about:
        "Sonny Hayes (Brad Pitt) was FORMULA 1`s most promising phenom of the 1990s until an accident on the track nearly ended his career. Thirty years later, he`s a nomadic racer-for-hire when he`s approached by his former teammate Ruben Cervantes (Javier Bardem), owner of a struggling FORMULA 1 team that is on the verge of collapse. Ruben convinces Sonny to come back to FORMULA 1 for one last shot at saving the team and being the best in the world. He`ll drive alongside Joshua Pearce (Damson Idris), the team`s hotshot rookie intent on setting his own pace. But as the engines roar, Sonny`s past catches up with him and he finds that in FORMULA 1, your teammate is your fiercest competition—and the road to redemption is not something you can travel alone.",

      cast: [
        {
          name: "Brad Pitt",
          role: "Sonny Hayes",
          image: "/assets/movies/brad.jpg",
        },
        {
          name: "Javier Bardem",
          role: "Ruben Cervantes",
          image: "/assets/movies/javier.jpg",
        },
        {
          name: "Damson Idris",
          role: "Joshua Pearce",
          image: "/assets/movies/damson.avif",
        },
      ],

      crew: [
        {
          name: "Joseph Kosinski",
          role: "Director",
          image: "/assets/movies/joseph.jpg",
        },
        {
          name: "Jerry Bruckheimer",
          role: "Producer",
          image: "/assets/movies/jerry.jpg",
        },
        {
          name: "Ehren Kruger",
          role: "Screenwriter",
          image: "/assets/movies/ehren.jpg",
        },
      ],
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
      about:
        "Get ready for a Smurfin` epic party with the Smurfs!When Papa Smurf is mysteriously taken by evil wizards, Razamel and Gargamel, Smurfette leads the Smurfs on a mission into the real world to save him. With the help of new friends, the Smurfs must discover what defines their destiny to save the universe.",
      cast: [
        {
          name: "Katy Perry",
          role: "Smurfette (Voice)",
          image: "/assets/movies/katy_perry.jpg",
        },
        {
          name: "Neil Patrick Harris",
          role: "Patrick Winslow",
          image: "/assets/movies/neil_harris.jpg",
        },
        {
          name: "Jonathan Winters",
          role: "Papa Smurf (Voice)",
          image: "/assets/movies/jonathan_winters.jpg",
        },
      ],
      crew: [
        {
          name: "Raja Gosnell",
          role: "Director",
          image: "/assets/movies/raja.jpg",
        },
        {
          name: "Jordan Kerner",
          role: "Producer",
          image: "/assets/movies/Jordan.jpg",
        },
        {
          name: "J. David Stem",
          role: "Writer",
          image: "/assets/movies/david.webp",
        },
      ],
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
      cast: [
        {
          name: "Aamir Khan",
          role: "Coach Arjun",
          image: "/assets/movies/aamir_khan.avif",
        },
        {
          name: "Genelia D Souza",
          role: "Sunita Arora",
          image: "/assets/movies/genelia.jpg",
        },
      ],
      crew: [
        {
          name: "Nitesh Tiwari",
          role: "Director",
          image: "/assets/movies/nitesh.jpg",
        },
        {
          name: "Aamir Khan",
          role: "Producer",
          image: "/assets/movies/aamir_khan.avif",
        },
      ],
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
      about:
        "In a world that saw her through a different lens, she kept shining with a light that could not be unseen. Her smile awakens hope, her heart builds courage, and her journey inspires us all. And now, she is here to meet you all. She is Tanvi: The Great.",

      cast: [
        {
          name: "Anupam Kher",
          role: "Actor",
          image: "/assets/movies/anupam.jpg",
        },
        {
          name: "Shubhangi Dutt",
          role: "Actor",
          image: "/assets/movies/shubangi.webp",
        },
        {
          name: "Jackie Shroff",
          role: "Actor",
          image: "/assets/movies/jackie_shroff.jpg",
        },
      ],
      crew: [
        {
          name: "Anupam Kher",
          role: "Director, Writer",
          image: "/assets/movies/anupam.jpg",
        },
        {
          name: "M.M. Keeravani",
          role: "Musician",
          image: "/assets/movies/mm_keeravani.jpg",
        },
        {
          name: "Kausar Munir",
          role: "Lyricist",
          image: "/assets/movies/kausar_munir.jpg",
        },
      ],
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
      about:
        "Marvel`s Biggest Summer Blockbuster is Here! Marvel`s first family, The Fantastic Four faces off against Galactus, Marvel`s Biggest villain after Thanos. Releasing on July 25th.",
      cast: [
        {
          name: "Joseph Quinn",
          role: "Reed Richards / Mr. Fantastic",
          image: "/assets/movies/joseph_quinn.jpg",
        },
        {
          name: "Vanessa Kirby",
          role: "Sue Storm / Invisible Woman",
          image: "/assets/movies/vanessa_kirby.jpg",
        },
        {
          name: "Ebon Moss-Bachrach",
          role: "Ben Grimm / The Thing",
          image: "/assets/movies/ebon_moss.webp",
        },
      ],
      crew: [
        {
          name: "Matt Shakman",
          role: "Director",
          image: "/assets/movies/Matt.avif",
        },
        {
          name: "Kevin Feige",
          role: "Producer",
          image: "/assets/movies/feige.jpg",
        },
        {
          name: "Josh Friedman",
          role: "Writer",
          image: "/assets/movies/Friedman.jpg",
        },
      ],
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

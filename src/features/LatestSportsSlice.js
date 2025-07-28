import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Sports: [
    {
      id: 1,
      title: "SNIPPER BOXING PROMOTION",
      date: "Sat. 2 Aug",
      description: "SANNA SURI PRESENTS SNIPPER BOXING...",
      location: "Antheri Sports Complex",
      category: "boxing",
      isOnline: false,
      prizePool: null,
      image: "/assets/Sports/img1.avif",
      banner: "/assets/Sports/banner1.avif",
      about:
        "Snipper Boxing Promotion is a high-energy, live-action boxing event hosted at the iconic Andheri Sports Complex. Curated by Sanna Suri, the event brings together amateur and professional boxers from across the country for a night of thrilling matchups, crowd-pumping energy, and raw athletic talent. It’s a celebration of strength, discipline, and sportsmanship, aimed at popularizing boxing as a community sport in urban India.",
    },
    {
      id: 2,
      title: "CHESS TOURNAMENT",
      date: "Sun, 27 Jul onwards",
      description: "Chess Championship (Online) For All Age",
      location: "Your Place and Your Time: India",
      category: "chess",
      isOnline: true,
      prizePool: "RS.20,000",
      image: "/assets/Sports/img3.avif",
      banner: "/assets/Sports/banner2.avif",
      about:
        "This online Chess Tournament invites thinkers and strategists from all age groups across India to compete from the comfort of their homes. Designed to nurture talent and celebrate the timeless game of chess, the tournament offers a significant prize pool and challenges players across multiple rounds. Whether you're a beginner or a seasoned player, this event provides a perfect blend of learning, excitement, and recognition.",
    },
    {
      id: 3,
      title: "Aamchi Mumbai Marathon",
      date: null,
      description: "Bandra Fort Garden: Mumbai",
      location: "Bandra Fort Garden: Mumbai",
      category: "marathon",
      isOnline: false,
      prizePool: null,
      image: "/assets/Sports/img4.avif",
      banner: "/assets/Sports/banner3.avif",
      about:
        "Aamchi Mumbai Marathon is a community-driven running event hosted at the scenic Bandra Fort Garden. It’s more than just a race—it's a celebration of Mumbai’s resilience, spirit, and unity. Runners of all ages and fitness levels gather to promote health, support local causes, and enjoy the coastal breeze of the city’s western suburbs. The marathon fosters fitness awareness and urban togetherness in a vibrant, inclusive setting.",
    },
    {
      id: 4,
      title: "Together We Run Virtual Event",
      date: null,
      description: "Multiple Cities",
      location: "Multiple Cities",
      category: "marathon",
      isOnline: true,
      prizePool: null,
      image: "/assets/Sports/img5.avif",
      banner: "/assets/Sports/banner4.avif",
      about:
        "Together We Run is a virtual marathon that transcends city boundaries, inviting individuals from all over the country to participate from their own location. Designed to encourage wellness, routine fitness, and solidarity, participants track their own runs and share results online. Whether in Delhi or Chennai, the run unites people through a common goal of health, perseverance, and shared achievement.",
    },
    {
      id: 5,
      title: "INFINITY CHESS CHAMPIONSHIP ONLINE",
      date: "Sun, 27 Jul",
      description: "Infinity Chess Championship",
      location: "Your Place and Your Time: India",
      category: "chess",
      isOnline: true,
      prizePool: "7.5,000+",
      prizeDetails: "FIRST PRIZE ZK",
      image: "/assets/Sports/img6.avif",
      banner: "/assets/Sports/banner5.avif",
      about:
        "The Infinity Chess Championship is a premier online chess event known for its competitive spirit and attractive prize offerings. Open to all chess lovers, the tournament tests intellect, concentration, and planning over multiple elimination rounds. With prestigious rankings, digital certificates, and a strong prize pool, this event is a must-attend for players seeking serious recognition in the online chess community.",
    },
    // {
    //   id: 6,
    //   title: "STRIDE FOR PRIDE Marathon",
    //   date: "Sun, 27 Jul",
    //   description: "MEDAL | TROPHY",
    //   location: "Your Place and Your Time: India",
    //   category: "marathon",
    //   isOnline: true,
    //   prizePool: null,
    //   image: "/assets/Sports/img7.avif",
    //   banner: "/assets/Sports/banner6.avif",
    //   about:
    //     "Stride For Pride is a virtual marathon designed to promote diversity, inclusivity, and personal achievement. Participants can complete their run at any location and receive medals or trophies upon submission of results. This event supports various social causes and encourages runners to step forward for pride, identity, and representation. It’s not just about distance — it's about running for something that matters.",
    // },
    {
      id: 6,
      title: "Mahakumbh Year 2025 Marathon",
      date: "Wed, 23 Jul onwards",
      description: "2025 YOUR LOCATION YOUR TIME",
      location: "Your Place and Your Time: India",
      category: "marathon",
      isOnline: true,
      prizePool: null,
      image: "/assets/Sports/img8.avif",
      banner: "/assets/Sports/banner6.avif",
      about:
        "As part of the grand Mahakumbh 2025 celebrations, this virtual marathon offers a spiritual and cultural running experience for individuals across India. It emphasizes the values of health, tradition, and discipline while connecting participants with the spirit of one of the world's oldest religious gatherings. Whether you're running in your village or city, this event invites you to be part of something larger than yourself.",
    },
  ],
};

export const SportsSlice = createSlice({
  name: "Sports",
  initialState,
  reducers: {},
});

export const SelectSports = (state) => state.Sports.Sports;
export default SportsSlice.reducer;

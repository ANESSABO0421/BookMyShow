import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import banner2 from "../assets/banners/banner2.avif";
import banner3 from "../assets/banners/banner3.avif";

const MovingBar = () => {
  const images = [banner2, banner3];
  return (
    <div className="w-full max-w-[1280px] mx-auto m-10">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="rounded-lg overflow-hidden"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`banner-${index}`} className="w-full h-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovingBar;

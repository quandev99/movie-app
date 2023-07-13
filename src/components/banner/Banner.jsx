import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@/apiConfig/config";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
const Banner = ({ type = "upcoming" }) => {
  const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const movies = data?.results || [];

  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor={true} slidesPerView={"auto"}>
        {movies?.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const navigate = useNavigate();
  const { backdrop_path, id, original_title, title, vote_average, vote_count } =
    item;
  return (
    <div className="relative w-full h-full rounded-lg">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={tmdbAPI.imageOriginal(backdrop_path)}
        alt=""
        className="object-cover w-full h-full rounded-lg"
      />
      <div className="absolute w-full text-white content left-5 bottom-5 ">
        <h2 className="mb-5 text-3xl font-bold">{title}</h2>
        <div className="flex items-center mb-8 gap-x-5">
          <span className="px-4 py-2 border border-white rounded-md">
            {original_title}
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            {vote_average}
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            {vote_count}
          </span>
        </div>
        <Button onClick={() => navigate(`/movies/${id}`)}>
          {" "}
          Watch now
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="inline-block ml-1 text-xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default Banner;

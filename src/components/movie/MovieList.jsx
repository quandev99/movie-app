import React from "react";
import MovieCart from "./MovieCart";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "@/apiConfig/config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
const MovieList = ({ type = "now_playing" }) => {
  const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const movies = data?.results || [];
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies?.length > 0 &&
          movies?.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCart item={item}></MovieCart>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  type: PropTypes.string.isRequired,
};

function FallbackRender() {
  return (
    <p className="bg-red-50 text-red-500">
      Some went wrong with this Component!
    </p>
  );
}
export default withErrorBoundary(MovieList, FallbackRender);

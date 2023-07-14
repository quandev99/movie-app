import React from "react";
import { useParams } from "react-router-dom";
import { fetcher, tmdbAPI } from "@/apiConfig/config";
import useSWR from "swr";
import CreditsItem from "./CreditsItem";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

const MovieCredits = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    tmdbAPI.getMovieMeta(movieId, "credits"),
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className="py-10">
      <h1 className="mb-5 text-2xl font-bold">Top Billed Cast</h1>

      <Swiper
        breakpoints={{
          // when window width is >= 640px
          350: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          // when window width is >= 768px
          1023: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
        spaceBetween={10}
        loop={true}
        loopfillgroupwithblank="true"
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        grabCursor={true}
        slidesPerView={"auto"}
        className="mySwiper overflow-hidden rounded-[20px]"
      >
        {cast.length > 0 &&
          cast.map((item) => (
            <SwiperSlide key={item.cast_id} className="quandev">
              <CreditsItem item={item}></CreditsItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieCredits;

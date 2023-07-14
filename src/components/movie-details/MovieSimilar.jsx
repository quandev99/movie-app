import React from "react";
import { fetcher, tmdbAPI } from "@/apiConfig/config";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import MovieCart from "../movie/MovieCart";
import MovieCartSkeleton from "../loading/MovieCartSkeleton";
const MovieSimilar = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    tmdbAPI.getMovieMeta(movieId, "similar"),
    fetcher
  );
  if (!data) return null;

  const isLoading = !data && !error;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <>
      <h2 className="my-6 text-2xl font-bold text-white lg:mb-10 2xl:text-3xl">
        Similar Movies
      </h2>
      <div className="movies-list ">
        {isLoading && (
          <>
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
              <SwiperSlide>
                <MovieCartSkeleton></MovieCartSkeleton>
              </SwiperSlide>
              <SwiperSlide>
                <MovieCartSkeleton></MovieCartSkeleton>
              </SwiperSlide>
              <SwiperSlide>
                <MovieCartSkeleton></MovieCartSkeleton>
              </SwiperSlide>
              <SwiperSlide>
                <MovieCartSkeleton></MovieCartSkeleton>
              </SwiperSlide>
              <SwiperSlide>
                <MovieCartSkeleton></MovieCartSkeleton>
              </SwiperSlide>
              <SwiperSlide>
                <MovieCartSkeleton></MovieCartSkeleton>
              </SwiperSlide>
            </Swiper>
          </>
        )}
        {!isLoading && (
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
            slidesPerGroup={5}
            loop={true}
            loopfillgroupwithblank="true"
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {results.length > 0 &&
              results.map((item) => (
                <SwiperSlide key={item.id} className="mb-10">
                  <MovieCart
                    key={item.id}
                    item={item}
                    truncate={true}
                  ></MovieCart>
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </>
  );
};

export default MovieSimilar;

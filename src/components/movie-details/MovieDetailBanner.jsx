import React from "react";

import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../../config";

const MovieDetailBanner = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  function formatTime(runtime) {
    var hours = Math.floor(runtime / 100);
    var minutes = runtime % 100;

    var formattedTime = hours.toString() + "h" + minutes.toString();
    return formattedTime;
  }

  if (!data) return null;
  const {
    backdrop_path,
    poster_path,
    runtime,
    genres,
    original_title,
    release_date,
    vote_average,
    tagline,
    overview,
  } = data;
  return (
    <div className="h-[600px] w-full relative">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        className="w-full h-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
        }}
      >
        <div className="absolute flex items-center top-[50px] justify-center z-[9999]  w-full p-5">
          <div className="w-1/3 h-[450px] mr-8">
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt=""
            />
          </div>
          <div className="w-full flex flex-col text-white">
            <h2 className="text-5xl font-bold capitalize mb-5">
              {original_title}
              <span className="text-secondary ">
                ({new Date(release_date).getFullYear()})
              </span>
            </h2>
            <div className="text-xl font-medium mb-2">
              <span className="mr-2">{release_date}</span>
              <span className="genres mr-2">
                Genres:
                {genres?.length > 0 &&
                  genres?.map(({ id, name }) => (
                    <a
                      className="pl-2"
                      // href="/genre/14-phim-gi-t-ng/movie"
                      key={id}
                    >
                      {name + "-"}
                    </a>
                  ))}
              </span>
              <span className="">{formatTime(runtime)}</span>
            </div>
            <h5 className="text-xl mb-2">
              {Math.round(vote_average * 10) / 10}{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="ml-1 inline-block text-xl text-yellow-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
            </h5>
            <span className="text-secondary text-lg italic font-medium ">
              {tagline}
            </span>
            <h4 className="text-white font-medium text-2xl text-medium my-2">
              Overview
            </h4>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailBanner;

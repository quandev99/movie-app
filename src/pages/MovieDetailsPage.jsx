import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "@/apiConfig/config";
import MovieDetailBanner from "@/components/movie-details/MovieDetailBanner";
import MovieCredits from "@/components/movie-details/MovieCredits";
import MovieSimilar from "@/components/movie-details/MovieSimilar";
import MovieTrailer from "@/components/movie-details/MovieTrailer";
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
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
    <div className="py-10 page-container mb-10">
      <MovieDetailBanner></MovieDetailBanner>
      <MovieCredits></MovieCredits>
      <MovieTrailer></MovieTrailer>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

export default MovieDetailsPage;

import React from "react";
import { useParams } from "react-router-dom";
import { apiKey, fetcher } from "../../config";
import useSWR from "swr";
const MovieTrailer = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results && results.length <= 0) return null;
  console.log(results);
  return (
    <div className="py-10 w-full">
      <div className="flex flex-col gap-10">
        {results.slice(0, 1).map((item) => (
          <div className="w-full text-center " key={item.id}>
            <h3 className="text-2xl font-medium text-primary py-4 px-5 bg-[#2b2554] hover:bg-[#6f5cf1] rounded-lg inline-block mb-5">
              {item.name}
            </h3>
            <div className="w-full aspect-video p-10" key={item.id}>
              <iframe
                width="699"
                height="393"
                src={`https://www.youtube.com/embed/${item.key}`}
                title={item.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className="w-full h-full object-fill"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieTrailer;

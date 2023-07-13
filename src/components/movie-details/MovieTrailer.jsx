import { useParams } from "react-router-dom";
import { fetcher, tmdbAPI } from "@/apiConfig/config";
import useSWR from "swr";
const MovieTrailer = () => {
  const { movieId } = useParams();
  const { data } = useSWR(tmdbAPI.getMovieMeta(movieId, "videos"), fetcher);
  if (!data) return null;
  const { results } = data;
  if (!results && results?.length <= 0) return null;
  return (
    <div className="w-full py-10">
      <div className="flex flex-col gap-10">
        {results?.slice(0, 1).map((item) => (
          <div className="w-full text-center " key={item.id}>
            <h3 className="text-2xl font-medium text-primary py-4 px-5 bg-[#5244ae] hover:bg-secondary rounded-lg inline-block mb-5">
              {item.name}
            </h3>
            <div className="w-full p-10 aspect-video" key={item.id}>
              <iframe
                width="699"
                height="393"
                src={`https://www.youtube.com/embed/${item.key}`}
                title={item.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="object-fill w-full h-full"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieTrailer;

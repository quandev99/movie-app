export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "6acda8e645b7fb1e317344da6df1e47c";
const tmbEndpoint = "https://api.themoviedb.org/3/movie";
const tmbEndpointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieSearch: (query, page) =>
    `${tmbEndpointSearch}?api_key=${apiKey}&query=${query}&page=${page}`,
  getMovieDetails: (movieId) => `${tmbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) =>
    `${tmbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original${url}`,
};

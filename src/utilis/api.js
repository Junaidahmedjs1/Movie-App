const API_KEY = "9b8fa5f07c5ce0b2fb8adfdf78bf16d5";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  const data = await res.json();
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const movieRes = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
  const movieData = await movieRes.json();

  const castRes = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  const castData = await castRes.json();

  const trailerRes = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
  const trailerData = await trailerRes.json();

  return { 
    ...movieData, 
    cast: castData.cast, 
    trailer: trailerData.results.length > 0 ? trailerData.results[0] : null
  };
};

export const fetchMovieVideos = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
  const data = await res.json();
  return data.results;
};

export const fetchMoviesBySearch = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`);
  const data = await res.json();
  return data.results;
};

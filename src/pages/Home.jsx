import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../utilis/api';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      const popularMovies = await fetchPopularMovies(page);
      setMovies((prevMovies) => [...prevMovies, ...popularMovies]);
      setLoading(false);
    };
    getMovies();
  }, [page]);

  return (
    <div className="px-6 py-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Popular Movies</h1>

      {loading ? (
        <div className="loading loading-dots loading-xl flex justify-center items-center min-h-screen"></div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setPage(page + 1)}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Home;

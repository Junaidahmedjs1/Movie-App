import React, { useState } from 'react';
import { fetchMoviesBySearch } from '../utilis/api';
import MovieCard from '../components/MovieCard';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchQuery.trim() === '') return;

    setLoading(true);
    setNoResults(false);

    const searchResults = await fetchMoviesBySearch(searchQuery);
    if (searchResults.length === 0) {
      setNoResults(true);
    }
    setMovies(searchResults);
    setLoading(false);
  };

  return (
    <div className="px-6 py-10 min-h-screen">
      <form onSubmit={handleSearch} className="flex justify-center mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Movies"
          className="px-4 py-2 w-1/2 md:w-1/3 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </form>

      {loading ? (
        <div className="loading loading-dots loading-xl flex justify-center items-center min-h-screen"></div>
      ) : noResults ? (
        <p className="text-center text-xl font-semibold">No Results Found!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;

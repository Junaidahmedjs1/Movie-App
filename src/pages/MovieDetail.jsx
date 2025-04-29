import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../utilis/api';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    getMovie();
  }, [id]);

  if (!movie) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center px-6 py-10 min-h-screen text-black">
      <div className="flex flex-col md:flex-row gap-8 rounded-xl max-w-5xl w-full shadow-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-72 rounded-lg shadow-md"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <p className="mb-2"><span className="font-bold">Release Date:</span> {movie.release_date || 'N/A'}</p>
          <p className="mb-2"><span className="font-bold">Rating:</span> {movie.vote_average || 'N/A'}</p>
          <p className="mb-4"><span className="font-bold">Overview:</span> {movie.overview || 'No description available.'}</p>
          {movie.genres && (
            <p className="text-sm text-black-400"><span className="font-bold text-black">Genres:</span> {movie.genres.map(g => g.name).join(', ')}</p>
          )}
        </div>
      </div>

      {movie.trailer && movie.trailer.key && (
        <div className="mt-6 flex justify-center">
          <a
            href={`https://www.youtube.com/watch?v=${movie.trailer.key}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
          >
            Watch Trailer
          </a>
        </div>
      )}

      {movie.cast && movie.cast.length > 0 && (
        <div className="mt-10 w-full">
          <h2 className="text-2xl font-bold text-center mb-6">Cast</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {movie.cast.slice(0, 6).map((actor) => (
              <div key={actor.id} className="text-center">
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  className="w-32 h-32 rounded-full mb-2"
                />
                <p className="font-semibold">{actor.name}</p>
                <p className="text-sm text-gray-500">{actor.character}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;

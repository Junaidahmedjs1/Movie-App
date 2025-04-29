import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
      <Link to={`/movie/${movie.id}`} className="block text-black no-underline">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-auto rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-2xl font-bold text-center" >{movie.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;


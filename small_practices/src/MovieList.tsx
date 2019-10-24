import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

export interface MovieInfo {
  name: string;
  price: string;
  id: number;
}

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie: MovieInfo, i: number) => {
        return (
          <Movie key={i} name={movie.name} price={movie.price} id={movie.id} />
        );
      })}
    </div>
  );
};

export default MovieList;

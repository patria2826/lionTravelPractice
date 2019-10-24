import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const MoviesCount = (props: any) => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      <h4>There are {movies.length} movies.</h4>
    </div>
  );
};

export default MoviesCount;

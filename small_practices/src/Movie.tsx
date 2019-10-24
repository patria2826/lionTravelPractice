import React from "react";
import { MovieInfo } from "./MovieList";

const Movie = (props: MovieInfo) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Price: {props.price}</p>
      <p>ID: {props.id}</p>
    </div>
  );
};

export default Movie;

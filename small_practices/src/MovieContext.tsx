import React, { useState, createContext } from "react";

export const MovieContext = createContext<any>({});

export const MovieProvider = (props: any) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 12324
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 29420
    },
    { name: "Inception", price: "$10", id: 28109 }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

import React, { useState, ChangeEvent, FormEvent, useContext } from "react";
import { MovieContext } from "./MovieContext";
import MoviesCount from "./MoviesCount";
import { MovieInfo } from "./MovieList";

const AddMovie = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [id, setId] = useState<number>(Math.floor(Math.random() * 100000));

  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };
  const updatePrice = (e: ChangeEvent<HTMLInputElement>): void => {
    setPrice(e.target.value);
  };

  const addMovie = (e: FormEvent): void => {
    e.preventDefault();
    setMovies(() => {
      setId(Math.floor(Math.random() * 100000));
      return [...movies, { name: name, price: price, id: id }];
    });
  };

  return (
    <form onSubmit={addMovie}>
      <h1>Add New Movies</h1>
      <p>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={updateName}
        ></input>
      </p>
      <p>
        <label htmlFor="price">Price: </label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={updatePrice}
        ></input>
      </p>
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;

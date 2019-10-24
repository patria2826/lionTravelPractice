import React from "react";
import "./App.css";
import MovieList from "./MovieList";
import { MovieProvider } from "./MovieContext";
import MoviesCount from "./MoviesCount";
import AddMovie from "./AddMovie";
const App: React.FC = () => {
  return (
    <MovieProvider>
      <div className="App">
        <MoviesCount />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import LazyLoad from "react-lazyload";
import Pokecard from "./components/Pokecard";
import "./App.css";

interface PokeData {
  name: string;
  url: string;
}

function App(props: any) {
  const pokeLimit = 809;
  const POKE_API = `https://pokeapi.co/api/v2/pokemon/?limit=${pokeLimit}`;

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get(POKE_API).then(response => {
      setPokemons(response.data.results);
    });
  }, []);

  return (
    <div className="App">
      {pokemons.length > 0 &&
        pokemons.map((pokemon: PokeData, i: number) => {
          return (
            <LazyLoad key={i}>
              <Pokecard
                pokeName={pokemon["name"]}
                id={i + 1}
                url={pokemon["url"]}
              />
            </LazyLoad>
          );
        })}
    </div>
  );
}

export default App;

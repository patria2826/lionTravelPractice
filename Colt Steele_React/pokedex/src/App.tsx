import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokecard from "./components/Pokecard";

interface PokeData {
  name: string;
  url: string;
}

function App(props: any) {
  const pokeLimit = 1;
  const POKE_API = `https://pokeapi.co/api/v2/pokemon/?limit=${pokeLimit}`;

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get(POKE_API).then(response => {
      setPokemons(response.data.results);
    });
  }, []);

  useEffect(() => {
    console.log(pokemons);
  }, []);

  return (
    <div className="App">
      {pokemons.length > 0 &&
        pokemons.map((pokemon: PokeData, i: number) => {
          return (
            <Pokecard
              key={i}
              pokeName={pokemon["name"]}
              id={i + 1}
              url={pokemon["url"]}
            />
          );
        })}
    </div>
  );
}

export default App;

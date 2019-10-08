import React, { useState, useEffect } from "react";
import axios from "axios";
import LazyLoad from "react-lazyload";
import Pokecard from "./components/Pokecard";
import "./Pokedex.css";

interface PokeData {
  name: string;
}

function Pokedex(props: any) {
  const pokeLimit = 809;
  const POKE_API = `https://pokeapi.co/api/v2/pokemon/?limit=${pokeLimit}`;

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get(POKE_API).then(response => {
      setPokemons(response.data.results);
    });
  }, []);

  return (
    <div className="Pokedex">
      {pokemons.length > 0 &&
        pokemons.map((pokemon: PokeData, i: number) => {
          return (
            <LazyLoad key={i}>
              <Pokecard pokeName={pokemon["name"]} id={i + 1} />
            </LazyLoad>
          );
        })}
    </div>
  );
}

export default Pokedex;

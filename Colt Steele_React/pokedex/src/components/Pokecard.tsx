import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pokecard.css";

export interface pokemonData {
  name: string;
  id: number;
  type: string[];
  state: {
    [key: string]: number;
  };
}

function firstCharUpperCase(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Pokecard = (props: any) => {
  const [pokemonData, setPokemonData] = useState<pokemonData>();
  const { id } = props;
  const imgApi = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
  const dataApi = "https://pokeapi.co/api/v2/pokemon/";
  let battlePoint = 0;

  useEffect(() => {
    axios.get(`${dataApi}${id}/`).then(response => {
      console.log(response.data);
      const types = [];
      setPokemonData({
        name: response.data.name,
        id: response.data.id,
        type: [],
        state: response.data.name
      });
    });
  }, []);

  //   useEffect(() => {
  //     if (getBP) {
  //       if (pokeStat.length >= 6) {
  //         let temp = 0;
  //         pokeStat.map((status: { [key: string]: number }) => {
  //           const key = Object.keys(status)[0];
  //           temp += status[key];
  //         });
  //         getBP(temp);
  //       }
  //     }
  //   }, [pokeStat]);

  return (
    <div>{id}</div>
    //   <h3 className="Pokecard-name">{firstCharUpperCase(pokeName)}</h3>
    //   <img
    //     src={`${imgApi}${id < 100 ? (id < 10 ? "00" : "0") : ""}${id}.png`}
    //     alt={pokeName}
    //     className="Pokecard-img"
    //   />
    //   <p className="Pokecard-type-title">
    //     {pokeTypes.map((type, i) => {
    //       return (
    //         <span key={i} className={`Pokecard-types ${type}`}>
    //           {type}
    //         </span>
    //       );
    //     })}
    //   </p>
    //   <div className="Pokecard-stat">
    //     {pokeStat.map((status: { [key: string]: number }, i) => {
    //       const key = Object.keys(status)[0];
    //       battlePoint += status[key];
    //       return (
    //         <span key={i} className={`Pokkecard-stat-each ${key}`}>
    //           <p className="Pokecard-stat-title">{firstCharUpperCase(key)}</p>
    //           <span
    //             className="Pokecard-stat-bar"
    //             style={{ width: `${status[key] * 0.6}px` }}
    //           ></span>
    //           <span className="Pokecard-stat-val">{status[key]}</span>
    //         </span>
    //       );
    //     })}
    //     <h4 className="Pokecard-BP">
    //       Total Battle Point:{" "}
    //       <span className="Pokecard-total">{battlePoint}</span>
    //     </h4>
    //   </div>
  );
};

export default Pokecard;

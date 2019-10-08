import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pokecard.css";

function Pokecard(props: any) {
  const { pokeName, url, id } = props;
  const imgApi = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
  const dataApi = url;

  const [pokeTypes, setPokeTypes] = useState([""]);

  useEffect(() => {
    axios.get(dataApi).then(response => {
      const types: string[] = [];
      response.data.types.map(
        (type: { slot: number; type: { name: string; url: string } }) => {
          return types.push(type.type.name);
        }
      );
      setPokeTypes(types);
    });
  }, []);

  return (
    <div className="Pokecard">
      <h3 className="Pokecard-name">
        {pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}
      </h3>
      <img
        src={`${imgApi}${id < 100 ? (id < 10 ? "00" : "0") : ""}${id}.png`}
        alt={pokeName}
        className="Pokecard-img"
      />
      <p className="Pokecard-type-title">
        {pokeTypes.map((type, i) => {
          return (
            <span key={i} className={`Pokecard-types ${type}`}>
              {type}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default Pokecard;

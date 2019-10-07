import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pokecard.css";

function Pokecard(props: any) {
  const { pokeName, url, id } = props;
  const imgApi =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
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
  useEffect(() => {
    if (pokeTypes.length > 0) {
    }
  }, [pokeTypes]);

  return (
    <div className="Pokecard">
      <h3>{pokeName.toUpperCase()}</h3>
      <img src={`${imgApi}${id}.png`} alt={pokeName} className="Pokecard-img" />
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

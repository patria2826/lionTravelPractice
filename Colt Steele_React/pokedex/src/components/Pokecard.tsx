import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pokecard.css";

interface pokemonStat {
  [key: string]: number;
}

function firstCharUpperCase(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Pokecard(props: any) {
  const { pokeName, id, getBP } = props;
  const imgApi = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
  const dataApi = "https://pokeapi.co/api/v2/pokemon/";
  let battlePoint = 0;

  const [pokeTypes, setPokeTypes] = useState<string[]>([]);
  const [pokeStat, setPokeStat] = useState<pokemonStat[]>([]);

  useEffect(() => {
    axios.get(`${dataApi}${id}/`).then(response => {
      response.data.types.map((type: { type: { name: string } }) => {
        setPokeTypes(prev => {
          return [...prev, type.type.name];
        });
      });
      response.data.stats.map(
        (status: { base_stat: number; stat: { name: string } }) => {
          setPokeStat(prev => {
            return [...prev, { [status.stat.name]: status.base_stat }];
          });
        }
      );
    });
  }, []);

  useEffect(() => {
    if (getBP) {
      if (pokeStat.length >= 6) {
        let temp = 0;
        pokeStat.map(
          (status: { [key: string]: number }) => {
            const key = Object.keys(status)[0];
            temp += status[key];
          }
        )
        getBP(temp)
      }
    }
  }
    , [pokeStat])

  return (
    <div className="Pokecard">
      <h3 className="Pokecard-name">{firstCharUpperCase(pokeName)}</h3>
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
      <div className="Pokecard-stat">
        {pokeStat.map((status: { [key: string]: number }, i) => {
          const key = Object.keys(status)[0];
          battlePoint += status[key];
          return (
            <span key={i} className={`Pokkecard-stat-each ${key}`}>
              <p className="Pokecard-stat-title">{firstCharUpperCase(key)}</p>
              <span
                className="Pokecard-stat-bar"
                style={{ width: `${status[key] * 0.7}px` }}
              ></span>
              <span className="Pokecard-stat-val">{status[key]}</span>
            </span>
          );
        })}
        <h4 className="Pokecard-BP">Total Battle Point: <span className="Pokecard-total">{battlePoint}</span></h4>
      </div>
    </div>
  );
}

export default Pokecard;

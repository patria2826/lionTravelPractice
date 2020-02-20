import React, { useState, useEffect } from "react";
import Pokecard from "./components/Pokecard";
// import axios from "axios";
import "./PokeGame.css";

function PokeGame(props: any) {
  const [firstTeam, setFirstTeam] = useState<number[]>([]);
  const [secondTeam, setSecondTeam] = useState<number[]>([]);
  const pokeLimit = 806;
  const memberCnt = 6;
  //   const imgApi = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
  //   const dataApi = `https://pokeapi.co/api/v2/pokemon/`;

  useEffect(() => {
    setFirstTeam(getTeam());
    setSecondTeam(getTeam());
  }, []);

  const getTeam = (): number[] => {
    const team: number[] = [];
    for (let i = 0; i < memberCnt; i++) {
      team.push(Math.ceil(Math.random() * pokeLimit));
    }
    return team;
  };

  const renderTeam = (team: number[]) => {
    return team.map((id: number, key: number) => {
      return <Pokecard key={key} id={id}></Pokecard>;
    });
  };

  return (
    <>
      <div className="T1">{firstTeam[0] && renderTeam(firstTeam)}</div>
      <div className="T2">{secondTeam[0] && renderTeam(firstTeam)}</div>
    </>
  );
}
export default PokeGame;

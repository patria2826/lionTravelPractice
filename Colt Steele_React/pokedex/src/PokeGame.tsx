import React, { useState, useEffect } from "react";
import Pokecard from "./components/Pokecard";
import axios from "axios";
import "./PokeGame.css";

interface pokemonNameAndId {
  name: string;
  id: number;
}

function PK(team1: number, team2: number): boolean {
  return team1 - team2 > 0;
}

function getBPs(BP: number) {
  return BP;
}

function PokeGame(props: any) {
  const pokeLimit = 809;
  const memberCnt = 6;
  const POKE_API = `https://pokeapi.co/api/v2/pokemon/`;

  const [team1, setTeam1] = useState<pokemonNameAndId[]>([]);
  const [team2, setTeam2] = useState<pokemonNameAndId[]>([]);

  const getTeam = (
    setTeam: (f: (pokemon: pokemonNameAndId[]) => pokemonNameAndId[]) => void
  ) => {
    for (let i = 0; i < memberCnt; i++) {
      axios
        .get(`${POKE_API}${Math.floor(Math.random() * pokeLimit)}`)
        .then(response => {
          setTeam((prev: pokemonNameAndId[]) => {
            //to do the rest things, prev(original value of team1) must not be empty
            return [
              ...prev,
              { name: response.data.name, id: response.data.id }
            ];
          });
        });
    }
  };

  useEffect(() => {
    getTeam(setTeam1);
    getTeam(setTeam2);
  }, []);

  return (
    <div className="PokeGame">
      <div className="PokeGame-team">
        <h2>Team 1</h2>
        <div className="PokeGame-member">
          {team1.length > 0 &&
            team1.map((pokemon, i) => {
              return (
                <Pokecard
                  key={i}
                  pokeName={pokemon["name"]}
                  id={pokemon["id"]}
                  getBP={(BP: number) => {
                    getBPs(BP);
                  }}
                ></Pokecard>
              );
            })}
        </div>
      </div>
      <div className="PokeGame-team">
        <h2>Team 2</h2>
        <div className="PokeGame-member">
          {team2.length > 0 &&
            team2.map((pokemon, i) => {
              return (
                <Pokecard
                  key={i}
                  pokeName={pokemon["name"]}
                  id={pokemon["id"]}
                ></Pokecard>
              );
            })}
        </div>
      </div>
      {/* {() => {
        if (team1.length > 0 && team2.length > 0) {
            for(let i =0;i<memberCnt;i++){
                PK(team1[i],team2[i])
            }
        }
      }} */}
    </div>
  );
}
export default PokeGame;
